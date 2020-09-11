var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, LitElement, html, css, property } from 'lit-element';
import { overlappingCoord, Position } from '../../math/position';
import { coordinateRenderer, coordinateData } from './CoordinateSystems';
import './HexagonElement';
import './HexagonControls';
import { distanceViewFactory } from './Distances';
import { showLabel } from './Labels';
import { drawPrecalculatedLine } from './Lines';
import { CubeAStarPathTo } from '../../math/pathfinder/a';
let HexagonContainer = class HexagonContainer extends LitElement {
    constructor(hexagons) {
        super();
        this.hexagons = hexagons;
        this.orientation = 'flat';
        this.coordinates = 'even-q-naive';
        this.distance = null;
        this.rows = 6;
        this.cols = 5;
        this.label = 'coords';
        this.showButtons = false;
        this.highlight = null;
        this.selectDefault = null;
        this.pathFrom = null;
        this.pathTo = null;
        this.blocked = [];
        this.expensive = [];
        this.ignoreBlocked = false;
        this.ignoreBoundaries = false;
        this.showPath = null;
    }
    static get styles() {
        return css `
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
    connectedCallback() {
        super.connectedCallback();
        this.hexagons = coordinateData(this.rows, this.cols);
        const blockers = this.blocked.map(b => { var _a; return (_a = Position.fromString(b)) === null || _a === void 0 ? void 0 : _a.toCube(); }).filter(p => p !== undefined);
        const expensives = this.expensive.map(b => { var _a; return (_a = Position.fromString(b)) === null || _a === void 0 ? void 0 : _a.toCube(); }).filter(p => p !== undefined);
        this.hexagons.reduce((prev, curr) => [...prev, ...curr], []).forEach(h => {
            h.blocked = blockers.some(b => b === null || b === void 0 ? void 0 : b.equals(h.cube));
            h.cube.costs = expensives.some(b => b === null || b === void 0 ? void 0 : b.equals(h.cube)) ? 5 : 1;
        });
        if (this.selectDefault) {
            const selected = Position.fromString(this.selectDefault);
            if (!selected)
                return;
            const hexagonToSelect = this.hexagons
                .reduce((prev, curr) => [...prev, ...curr], [])
                .find((h) => h.cube.toPosition().equals(selected));
            if (hexagonToSelect)
                this.apply(hexagonToSelect, 'selected', true);
        }
    }
    _selectHandled(hexagon) {
        const event = new CustomEvent('select', {
            detail: {
                container: this,
                hexagon,
            },
            cancelable: true
        });
        return !this.dispatchEvent(event);
    }
    apply(hexagon, field, value, only = false) {
        for (let row = 0; row < this.hexagons.length; row++) {
            for (let col = 0; col < this.hexagons[row].length; col++) {
                let element = this.hexagons[row][col];
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
                this.hexagons[row][col] = element;
            }
        }
        this.requestUpdate();
    }
    select(hexagon) {
        if (!this._selectHandled(hexagon)) {
            this.apply(hexagon, 'selected', true);
        }
    }
    hover(hexagon) {
        this.apply(hexagon, 'hovered', true);
    }
    unhover(hexagon) {
        this.apply(hexagon, 'hovered', false, true);
    }
    render() {
        const highlight = ({ cube }) => overlappingCoord(cube.toCoords(), this.highlight);
        const pathTarget = ({ cube }) => (this.pathFrom && cube.toPosition().equals(Position.fromString(this.pathFrom)))
            || (this.pathTo && cube.toPosition().equals(Position.fromString(this.pathTo)));
        const map = !this.ignoreBoundaries ? this.hexagons.reduce((prev, c) => [...prev, ...c], []).map(h => h.cube) : undefined;
        const blocked = !this.ignoreBlocked ? this.blocked.map(b => Position.fromString(b).toCube()) : undefined;
        const blockedField = (map, blocked) => (cube) => {
            if (map) {
                if (!map.some(field => field.equals(cube)))
                    return true;
            }
            if (blocked) {
                if (blocked.some(field => field.equals(cube)))
                    return true;
            }
            return false;
        };
        let pathResult = null;
        if (this.pathTo && this.pathFrom) {
            pathResult = CubeAStarPathTo(Position.fromString(this.pathFrom).toCube(), Position.fromString(this.pathTo).toCube(), map, blockedField(map, blocked));
        }
        const lines = drawPrecalculatedLine(this.showPath, Position.fromString(this.pathFrom), pathResult);
        const renderedHexagons = coordinateRenderer(this.coordinates, this.hexagons, (hexagon) => {
            var _a;
            return html `<hexagon-element
          orientation="${this.orientation}"
          label="${this.label === 'cube-coords' ? 'top' : 'center'}"
          .lines="${lines
                ? (_a = lines[hexagon.cube.toString()]) !== null && _a !== void 0 ? _a : [] : []}"
          @select="${() => this.select(hexagon)}"
          @hover="${() => this.hover(hexagon)}"
          @unhover="${() => this.unhover(hexagon)}"
          ?selected="${hexagon.selected || highlight(hexagon) || pathTarget(hexagon)}"
          ?hovered="${hexagon.hovered || hexagon.cube.costs > 1}"
          ?blocked="${hexagon.blocked}"
          style="transform: rotateY(-1deg);transform-origin: 0 0;"
        >
          ${showLabel(hexagon.cube, this.label, this.hexagons, pathResult)}
        </hexagon-element>`;
        });
        const controls = this.showButtons
            ? html ` <hexagon-controls
          @changeOrientation=${(e) => (this.orientation = e.detail.orientation)}
          @changeCoordinates=${(e) => (this.coordinates = e.detail.coordinates)}
        ></hexagon-controls>`
            : '';
        const distance = this.distance
            ? html `${distanceViewFactory(this.distance, [...this.hexagons], 'display:block; width: 20rem; margin: 0 auto;')}`
            : '';
        return html `
      <div class="hexagons ${this.orientation}">
        ${renderedHexagons}
      </div>
      ${controls} ${distance}
    `;
    }
};
__decorate([
    property()
], HexagonContainer.prototype, "orientation", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "coordinates", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "distance", void 0);
__decorate([
    property({ type: Number })
], HexagonContainer.prototype, "rows", void 0);
__decorate([
    property({ type: Number })
], HexagonContainer.prototype, "cols", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], HexagonContainer.prototype, "showButtons", void 0);
__decorate([
    property({ type: Object })
], HexagonContainer.prototype, "highlight", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "selectDefault", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "pathFrom", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "pathTo", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "blocked", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "expensive", void 0);
__decorate([
    property({ type: Boolean })
], HexagonContainer.prototype, "ignoreBlocked", void 0);
__decorate([
    property({ type: Boolean })
], HexagonContainer.prototype, "ignoreBoundaries", void 0);
__decorate([
    property()
], HexagonContainer.prototype, "showPath", void 0);
HexagonContainer = __decorate([
    customElement('hexagon-container')
], HexagonContainer);
export { HexagonContainer };
//# sourceMappingURL=index.js.map