import {customElement, LitElement, html, css, property} from 'lit-element';

import {overlappingCoord, FuzzyCoords, Position} from '../../math/position';
import {coordinateRenderer, coordinateData} from './CoordinateSystems';

import './HexagonElement';
import './HexagonControls';
import {distanceViewFactory} from './Distances';
import {InteractiveHexagon} from './InteractiveHexagon';
import {LineResult} from '../Line/lineDrawer';
import { HexagonLabel, showLabel } from './Labels';
import { PathStyle, drawPrecalculatedLine } from './Lines';
import { PathResult } from '../../math/pathfinder/type';
import { CubeAStarPathTo } from '../../math/pathfinder/a';
import { Cube } from '../../math/cube/cube';


@customElement('hexagon-container')
export class HexagonContainer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin-top: 6rem;
      }
      .row {
        transition: all 500ms linear;
      }
      .even,
      .odd {
        transition: all 500ms linear;
      }
      .hexagons .row {
        /* reverse the z-index order of the hexagons to deal with weird margins */
        transform: rotateY(1deg);
        transform-origin: 0 0;
        transform-style: preserve-3d;
      }
      .hexagons.flat .row {
        margin-top: -3.9rem;
      }
      .hexagons.flat .odd {
        margin-right: 9.25rem;
      }
      .hexagons.pointy .row {
        margin-top: -2.1rem;
      }
      .hexagons.pointy .odd {
        margin-right: 5.5rem;
      }
    `;
  }

  constructor(public hexagons: InteractiveHexagon[][]) {
    super();
  }

  @property()
  orientation: 'flat' | 'pointy' = 'flat';

  @property()
  coordinates = 'even-q-naive';

  @property()
  distance: string | null = null;

  @property({type: Number})
  rows = 6;

  @property({type: Number})
  cols = 5;

  @property()
  label: HexagonLabel = 'coords';

  @property({type: Boolean})
  showButtons = false;

  @property({type: Object})
  highlight: FuzzyCoords | null = null;

  @property()
  selectDefault: string | null = null;
  @property()
  pathFrom: string | null = null;
  @property()
  pathTo: string | null = null;
  @property()
  blocked: string[] = [];
  @property()
  expensive: string[] = [];
  @property({type: Boolean})
  ignoreBlocked = false
  @property({type: Boolean})
  ignoreBoundaries = false
  @property()
  showPath: PathStyle | null = null;

  connectedCallback() {
    super.connectedCallback();

    this.hexagons = coordinateData(this.rows, this.cols);
    const blockers = this.blocked.map(b => Position.fromString(b)?.toCube()).filter(p => p !== undefined)
    const expensives = this.expensive.map(b => Position.fromString(b)?.toCube()).filter(p => p !== undefined)
    this.hexagons.reduce((prev, curr) => [...prev, ...curr], []).forEach(h => {
      h.blocked = blockers.some(b => b?.equals(h.cube))
      h.cube.costs = expensives.some(b => b?.equals(h.cube)) ? 5 : 1
    })

    if (this.selectDefault) {
      const selected = Position.fromString(this.selectDefault);
      if (!selected) return;
      const hexagonToSelect = this.hexagons
        .reduce((prev, curr) => [...prev, ...curr], [])
        .find((h) => h.cube.toPosition().equals(selected));
      if (hexagonToSelect) 
        this.apply(hexagonToSelect, 'selected', true);
    }
  }

  _selectHandled(hexagon: InteractiveHexagon) {
    const event = new CustomEvent('select', {
      detail: {
        container: this,
        hexagon,
      },
      cancelable: true
    });
    return !this.dispatchEvent(event);
  }

  apply(
    hexagon: InteractiveHexagon,
    field: 'selected' | 'hovered',
    value: boolean,
    only = false
  ) {
    for (let row = 0; row < this.hexagons.length; row++) {
      for (let col = 0; col < this.hexagons[row].length; col++) {
        let element = this.hexagons[row][col];
        if (element.cube.toString() === hexagon.cube.toString()) {
          if (element[field] !== value) {
            element[field] = value;
            element = {...element};
          }
        } else if (!only && element[field] === value) {
          element[field] = !value;
          element = {...element};
        }

        this.hexagons[row][col] = element;
      }
    }
    this.requestUpdate();
  }

  select(hexagon: InteractiveHexagon) {
    if (!this._selectHandled(hexagon)) {
      this.apply(hexagon, 'selected', true);
    } 
  }
  hover(hexagon: InteractiveHexagon) {
    this.apply(hexagon, 'hovered', true);
  }
  unhover(hexagon: InteractiveHexagon) {
    this.apply(hexagon, 'hovered', false, true);
  }

  render() {

    const highlight = ({cube}: InteractiveHexagon) =>
      overlappingCoord(cube.toCoords(), this.highlight);
    const pathTarget = ({cube}: InteractiveHexagon) =>
      (this.pathFrom && cube.toPosition().equals(Position.fromString(this.pathFrom)))
      || (this.pathTo && cube.toPosition().equals(Position.fromString(this.pathTo)));


    const map = !this.ignoreBoundaries ? this.hexagons.reduce((prev, c) => [...prev, ...c], []).map(h => h.cube) : undefined
    const blocked = !this.ignoreBlocked ? this.blocked.map(b => Position.fromString(b)!.toCube()) : undefined

    const blockedField = (map?: Cube[], blocked?: Cube[]) => (cube: Cube) => {
      if (map) {
          if (!map.some(field => field.equals(cube))) return true;
      }
      if (blocked) {
          if (blocked.some(field => field.equals(cube))) return true;
      }
  
      return false;
  }
    let pathResult: PathResult | null = null;
    if (this.pathTo && this.pathFrom) {
      pathResult = CubeAStarPathTo(
        Position.fromString(this.pathFrom)!.toCube(),
        Position.fromString(this.pathTo)!.toCube(),
        map,
        blockedField(map, blocked)
      )
    }
    const lines: LineResult | null = 
      drawPrecalculatedLine(this.showPath, Position.fromString(this.pathFrom), pathResult);
    const renderedHexagons = coordinateRenderer(
      this.coordinates,
      this.hexagons,
      (hexagon) =>
        html`<hexagon-element
          orientation="${this.orientation}"
          label="${this.label === 'cube-coords' ? 'top' : 'center'}"
          .lines="${lines
            ? lines[hexagon.cube.toString()] ?? []
            : []}"
          @select="${() => this.select(hexagon)}"
          @hover="${() => this.hover(hexagon)}"
          @unhover="${() => this.unhover(hexagon)}"
          ?selected="${hexagon.selected || highlight(hexagon) || pathTarget(hexagon)}"
          ?hovered="${hexagon.hovered || hexagon.cube.costs > 1}"
          ?blocked="${hexagon.blocked}"
          style="transform: rotateY(-1deg);transform-origin: 0 0;"
        >
          ${showLabel(hexagon.cube, this.label, this.hexagons, pathResult)}
        </hexagon-element>`
    );

    const controls = this.showButtons
      ? html` <hexagon-controls
          @changeOrientation=${(e: CustomEvent) =>
            (this.orientation = e.detail.orientation)}
          @changeCoordinates=${(e: CustomEvent) =>
            (this.coordinates = e.detail.coordinates)}
        ></hexagon-controls>`
      : '';
    const distance = this.distance
      ? html`${distanceViewFactory(
          this.distance,
          [...this.hexagons],
          'display:block; width: 20rem; margin: 0 auto;'
        )}`
      : '';

    return html`
      <div class="hexagons ${this.orientation}">
        ${renderedHexagons}
      </div>
      ${controls} ${distance}
    `;
  }
}
