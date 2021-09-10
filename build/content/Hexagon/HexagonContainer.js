import { html } from 'lit';
import { pureLit, useOnce, useState, dispatch } from 'pure-lit';
import styles from './HexagonContainer.styles';
import { overlappingCoord, Position } from '../../math/position';
import { coordinateRenderer, coordinateData } from './CoordinateSystems';
import { distanceViewFactory } from './Distances';
import { showLabel } from './Labels';
import { drawPrecalculatedLine } from './Lines';
import { CubeAStarPathTo } from '../../math/pathfinder/a';
const defaults = {
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
export default pureLit('hexagon-container', (element) => {
    const fields = useState(element, []);
    const orientation = useState(element, element.orientation);
    const coordinates = useState(element, element.coordinates);
    const { get: hexagons, set: setHexagons } = fields;
    useOnce(element, () => {
        const initialHexagons = createInitialSet(element);
        setHexagons(initialHexagons);
        if (element.selectDefault) {
            const selected = Position.fromString(element.selectDefault);
            if (!selected)
                return;
            const hexagonToSelect = initialHexagons
                .reduce((prev, curr) => [...prev, ...curr], [])
                .find((h) => h.cube.toPosition().equals(selected));
            if (hexagonToSelect)
                setHexagons(apply(initialHexagons, hexagonToSelect, 'selected', true));
        }
    });
    return html `
      <div class="hexagons ${orientation.get()}">
        ${renderAllHexagons(fields, orientation.get(), coordinates.get(), element)}
      </div>
      ${renderButtons(element, orientation, coordinates)} ${showDistance(hexagons(), element.distance)}
    `;
}, {
    styles,
    defaults,
});
function createInitialSet({ blocked, expensive, rows, cols, }) {
    const blockers = blocked
        .map((b) => { var _a; return (_a = Position.fromString(b)) === null || _a === void 0 ? void 0 : _a.toCube(); })
        .filter((p) => p !== undefined);
    const expensives = expensive
        .map((b) => { var _a; return (_a = Position.fromString(b)) === null || _a === void 0 ? void 0 : _a.toCube(); })
        .filter((p) => p !== undefined);
    return coordinateData(rows, cols).map((row) => row.map((col) => {
        col.blocked = blockers.some((b) => b === null || b === void 0 ? void 0 : b.equals(col.cube));
        col.cube.costs = expensives.some((b) => b === null || b === void 0 ? void 0 : b.equals(col.cube)) ? 5 : 1;
        return col;
    }));
}
function apply(hexagons, hexagon, field, value, only = false) {
    for (let row = 0; row < hexagons.length; row++) {
        for (let col = 0; col < hexagons[row].length; col++) {
            let element = hexagons[row][col];
            if (element.cube.toString() === hexagon.cube.toString()) {
                if (element[field] !== value) {
                    element[field] = value;
                    element = Object.assign({}, element);
                }
            }
            else if (!only && element[field] === value) {
                element[field] = !value;
                element = Object.assign({}, element);
            }
            hexagons[row][col] = element;
        }
    }
    return [...hexagons];
}
function highlight({ highlight }, { cube }) {
    return overlappingCoord(cube.toCoords(), highlight);
}
function pathTarget({ pathFrom, pathTo }, { cube }) {
    return ((pathFrom && cube.toPosition().equals(Position.fromString(pathFrom))) ||
        (pathTo && cube.toPosition().equals(Position.fromString(pathTo))));
}
function blockedField(map, blocked) {
    return (cube) => {
        if (map) {
            if (!map.some((field) => field.equals(cube)))
                return true;
        }
        if (blocked) {
            if (blocked.some((field) => field.equals(cube)))
                return true;
        }
        return false;
    };
}
function renderAllHexagons({ get: hexagons, set: setHexagons }, orientation, coordinates, element) {
    const selectHandled = (hexagon) => {
        dispatch(element, 'select', {
            container: element,
            hexagon,
        }, { cancelable: true });
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
        ? element.blocked.map((b) => Position.fromString(b).toCube())
        : undefined;
    // If a path is requested, calculate the result
    let pathResult = null;
    if (element.pathTo && element.pathFrom) {
        pathResult = CubeAStarPathTo(Position.fromString(element.pathFrom).toCube(), Position.fromString(element.pathTo).toCube(), map, blockedField(map, blocked));
    }
    // create the line for the path
    const lines = drawPrecalculatedLine(element.showPath, Position.fromString(element.pathFrom), pathResult);
    const select = (hexagon) => {
        if (!selectHandled(hexagon)) {
            setHexagons(apply(hexagons(), hexagon, 'selected', true));
        }
    };
    const hover = (hexagon) => {
        setHexagons(apply(hexagons(), hexagon, 'hovered', true));
    };
    const unhover = (hexagon) => {
        setHexagons(apply(hexagons(), hexagon, 'hovered', false, true));
    };
    return coordinateRenderer(coordinates, hexagons(), (hexagon) => {
        var _a;
        return html `<hexagon-element
        orientation="${orientation}"
        label="${element.label === 'cube-coords' ? 'top' : 'center'}"
        .lines="${lines ? (_a = lines[hexagon.cube.toString()]) !== null && _a !== void 0 ? _a : [] : []}"
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
      </hexagon-element>`;
    });
}
function renderButtons({ showButtons }, orientation, coordinates) {
    return showButtons
        ? html ` <hexagon-controls
        .orientation=${orientation.get()}
        .coordinates=${coordinates.get()}
        @changeOrientation=${(e) => orientation.set(e.detail)}
        @changeCoordinates=${(e) => (console.log("setting coordinates to ", e.detail), coordinates.set(e.detail))}
      ></hexagon-controls>`
        : '';
}
function showDistance(hexagons, distance) {
    return distance
        ? html `${distanceViewFactory(distance, hexagons, 'display:block; width: 20rem; margin: 0 auto;')}`
        : '';
}
//# sourceMappingURL=HexagonContainer.js.map