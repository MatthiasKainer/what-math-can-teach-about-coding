import {html} from 'lit';
import {LitElementWithProps, pureLit, useOnce, useState, dispatch} from 'pure-lit';
import styles from './HexagonContainer.styles';

import {overlappingCoord, FuzzyCoords, Position} from '../../math/position';
import {coordinateRenderer, coordinateData} from './CoordinateSystems';
import {distanceViewFactory} from './Distances';
import {InteractiveHexagon} from './InteractiveHexagon';
import {LineResult} from '../Line/lineDrawer';
import {HexagonLabel, showLabel} from './Labels';
import {PathStyle, drawPrecalculatedLine} from './Lines';
import {PathResult} from '../../math/pathfinder/type';
import {CubeAStarPathTo} from '../../math/pathfinder/a';
import {Cube} from '../../math/cube/cube';
import {Orientation, Coordinates} from './types';

type Props = {
  orientation: Orientation;
  coordinates: Coordinates;
  distance: string | null;
  rows: number;
  cols: number;
  label: HexagonLabel;
  showButtons: boolean;
  highlight: FuzzyCoords | null;
  selectDefault: string | null;
  pathFrom: string | null;
  pathTo: string | null;
  blocked: string[];
  expensive: string[];
  ignoreBlocked: boolean;
  ignoreBoundaries: boolean;
  showPath: PathStyle | null;
};

const defaults: Props = {
  orientation: 'flat',
  coordinates: 'even-q-naive',
  distance: null,
  rows: 6,
  cols: 5,
  label: 'coords',
  showButtons: false,
  highlight: null,
  selectDefault: null,
  pathFrom: null,
  pathTo: null,
  blocked: [],
  expensive: [],
  ignoreBlocked: false,
  ignoreBoundaries: false,
  showPath: null,
};

export default pureLit(
  'hexagon-container',
  (element: LitElementWithProps<Props>) => {
    const fields = useState(element, [] as InteractiveHexagon[][]);
    const orientation = useState(
      element,
      element.orientation
    );
    const coordinates = useState(
      element,
      element.coordinates
    );

    const {get: hexagons, set: setHexagons} = fields;

    useOnce(element, () => {
      const initialHexagons = createInitialSet(element);
      setHexagons(initialHexagons);

      if (element.selectDefault) {
        const selected = Position.fromString(element.selectDefault);
        if (!selected) return;
        const hexagonToSelect = initialHexagons
          .reduce((prev, curr) => [...prev, ...curr], [])
          .find((h) => h.cube.toPosition().equals(selected));
        if (hexagonToSelect)
          setHexagons(
            apply(initialHexagons, hexagonToSelect, 'selected', true)
          );
      }
    });

    return html`
      <div class="hexagons ${orientation.get()}">
        ${renderAllHexagons(fields, orientation.get(), coordinates.get(), element)}
      </div>
      ${renderButtons(element, orientation, coordinates)} ${showDistance(hexagons(), element.distance)}
    `;
  },
  {
    styles,
    defaults,
  }
);

type MapOutline = {
  rows: number;
  cols: number;
  blocked: string[];
  expensive: string[];
};

function createInitialSet({
  blocked,
  expensive,
  rows,
  cols,
}: MapOutline): InteractiveHexagon[][] {
  const blockers = blocked
    .map((b) => Position.fromString(b)?.toCube())
    .filter((p) => p !== undefined);
  const expensives = expensive
    .map((b) => Position.fromString(b)?.toCube())
    .filter((p) => p !== undefined);
  return coordinateData(rows, cols).map((row) =>
    row.map((col) => {
      col.blocked = blockers.some((b) => b?.equals(col.cube));
      col.cube.costs = expensives.some((b) => b?.equals(col.cube)) ? 5 : 1;
      return col;
    })
  );
}

function apply(
  hexagons: InteractiveHexagon[][],
  hexagon: InteractiveHexagon,
  field: 'selected' | 'hovered',
  value: boolean,
  only = false
) {
  for (let row = 0; row < hexagons.length; row++) {
    for (let col = 0; col < hexagons[row].length; col++) {
      let element = hexagons[row][col];
      if (element.cube.toString() === hexagon.cube.toString()) {
        if (element[field] !== value) {
          element[field] = value;
          element = {...element};
        }
      } else if (!only && element[field] === value) {
        element[field] = !value;
        element = {...element};
      }

      hexagons[row][col] = element;
    }
  }
  return [...hexagons];
}

function highlight(
  {highlight}: {highlight: FuzzyCoords | null},
  {cube}: InteractiveHexagon
) {
  return overlappingCoord(cube.toCoords(), highlight);
}

function pathTarget(
  {pathFrom, pathTo}: {pathFrom: string | null; pathTo: string | null},
  {cube}: InteractiveHexagon
) {
  return (
    (pathFrom && cube.toPosition().equals(Position.fromString(pathFrom))) ||
    (pathTo && cube.toPosition().equals(Position.fromString(pathTo)))
  );
}

function blockedField(map?: Cube[], blocked?: Cube[]) {
  return (cube: Cube) => {
    if (map) {
      if (!map.some((field) => field.equals(cube))) return true;
    }
    if (blocked) {
      if (blocked.some((field) => field.equals(cube))) return true;
    }

    return false;
  };
}
export type State<T> = {
    get: () => T,
    set: (update: T) => void,
}

function renderAllHexagons(
  {get: hexagons, set: setHexagons}: State<InteractiveHexagon[][]>,
  orientation: Orientation,
  coordinates: Coordinates,
  element: LitElementWithProps<Props>
) {
  const selectHandled = (hexagon: InteractiveHexagon) => {
    dispatch(element, 'select', {
      container: element,
      hexagon,
    }, { cancelable: true })
    return !dispatch(element, 'select', {
      container: element,
      hexagon,
    }, { cancelable: true });
  };

  const map = !element.ignoreBoundaries
    ? hexagons()
        .reduce((prev, c) => [...prev, ...c], [])
        .map((h) => h.cube)
    : undefined;
  const blocked = !element.ignoreBlocked
    ? element.blocked.map((b) => Position.fromString(b)!.toCube())
    : undefined;

  // If a path is requested, calculate the result
  let pathResult: PathResult | null = null;
  if (element.pathTo && element.pathFrom) {
    pathResult = CubeAStarPathTo(
      Position.fromString(element.pathFrom)!.toCube(),
      Position.fromString(element.pathTo)!.toCube(),
      map,
      blockedField(map, blocked)
    );
  }

  // create the line for the path
  const lines: LineResult | null = drawPrecalculatedLine(
    element.showPath,
    Position.fromString(element.pathFrom),
    pathResult
  );

  const select = (hexagon: InteractiveHexagon) => {
    if (!selectHandled(hexagon)) {
      setHexagons(apply(hexagons(), hexagon, 'selected', true));
    }
  };
  const hover = (hexagon: InteractiveHexagon) => {
    setHexagons(apply(hexagons(), hexagon, 'hovered', true));
  };
  const unhover = (hexagon: InteractiveHexagon) => {
    setHexagons(apply(hexagons(), hexagon, 'hovered', false, true));
  };

  return coordinateRenderer(
    coordinates,
    hexagons(),
    (hexagon) =>
      html`<hexagon-element
        orientation="${orientation}"
        label="${element.label === 'cube-coords' ? 'top' : 'center'}"
        .lines="${lines ? lines[hexagon.cube.toString()] ?? [] : []}"
        @select="${() => select(hexagon)}"
        @hover="${() => hover(hexagon)}"
        @unhover="${() => unhover(hexagon)}"
        ?selected="${hexagon.selected ||
        highlight(element, hexagon) ||
        pathTarget(element, hexagon)}"
        ?hovered="${hexagon.hovered || hexagon.cube.costs > 1}"
        ?blocked="${hexagon.blocked}"
        style="transform: rotateY(-1deg);transform-origin: 0 0;"
      >
        ${showLabel(hexagon.cube, element.label, hexagons(), pathResult)}
      </hexagon-element>`
  );
}

function renderButtons(
  {showButtons}: {
    showButtons: boolean;
  },
  orientation: State<Orientation>,
  coordinates: State<Coordinates>
) {
  return showButtons
    ? html` <hexagon-controls
        .orientation=${orientation.get()}
        .coordinates=${coordinates.get()}
        @changeOrientation=${(e: CustomEvent) =>
          orientation.set(e.detail)
        }
        @changeCoordinates=${(e: CustomEvent) => (console.log("setting coordinates to " , e.detail), coordinates.set(e.detail))}
      ></hexagon-controls>`
    : '';
}

function showDistance(
  hexagons: InteractiveHexagon[][],
  distance: string | null
) {
  return distance
    ? html`${distanceViewFactory(
        distance,
        hexagons,
        'display:block; width: 20rem; margin: 0 auto;'
      )}`
    : '';
}
