var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, LitElement, css, html, property } from 'lit-element';
import { r } from '../../arrays/range';
import { Position } from '../../math/position';
import { statefulRectangle } from './InteractiveRectangle';
import { distanceViewFactory } from './Distance';
import './RectangleElement';
import './RectangleRow';
import { lineDrawer } from '../Line/lineDrawer';
import "./ShowPathControls";
import { euclidDistance, manhattanDistance } from '../../math/pathfinder/RectPathfinder';
let RectangleContainer = class RectangleContainer extends LitElement {
    constructor(rectangles = r(0, 3).map((row) => r(0, 3).map((col) => statefulRectangle({ row, col })))) {
        super();
        this.rectangles = rectangles;
        this.show = 'coords';
        this.distance = 'manhattan';
        this.selectDefault = null;
        this.cols = 3;
        this.showPath = null;
        this.showPathControls = false;
        this.euclidPathTo = null;
        this.manhattanPathTo = null;
    }
    static get styles() {
        return css `
      :host {
        display: block;
        margin-top: calc(16rem - 20px);
      }
    `;
    }
    selectRectangle(selectedRowIndex, selectedColIndex) {
        this.rectangles.forEach((row, rowIndex) => {
            row.forEach((rectangle, colIndex) => {
                if (rowIndex === selectedRowIndex && colIndex === selectedColIndex) {
                    this.rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, !rectangle.selected);
                }
                else if (this.show === "distance") {
                    this.rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, false);
                    this.rectangles[rowIndex][colIndex].distance = this.rectangles[selectedRowIndex][selectedColIndex].rectangle.manhattanDistance(this.rectangles[rowIndex][colIndex].rectangle);
                }
                else if (rectangle.selected) {
                    this.rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, false);
                }
            });
        });
    }
    hoverRectangle(selectedRowIndex, selectedColIndex) {
        if (this.show === "distance")
            return;
        this.rectangles.forEach((row, rowIndex) => {
            row.forEach((rectangle, colIndex) => {
                if (rowIndex === selectedRowIndex && colIndex === selectedColIndex) {
                    this.rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, rectangle.selected, true);
                }
                else if (rectangle.hovered) {
                    this.rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, rectangle.selected, false);
                }
            });
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.rectangles = r(0, this.cols).map((row) => r(0, this.cols).map((col) => statefulRectangle({ row, col })));
        if (this.selectDefault) {
            const selected = Position.fromString(this.selectDefault);
            if (selected)
                this.selectRectangle(selected.row, selected.col);
        }
    }
    render() {
        const flatRectangles = () => this.rectangles.reduce((prev, curr) => [...prev, ...curr], []);
        const distanceView = distanceViewFactory(this.distance, flatRectangles);
        const drawLine = () => {
            switch (this.showPath) {
                case 'euclid':
                    if (!this.euclidPathTo)
                        return null;
                    return lineDrawer(Position.fromString(this.selectDefault), euclidDistance(Position.fromString(this.selectDefault), Position.fromString(this.euclidPathTo)));
                case "taxicab":
                    if (!this.manhattanPathTo)
                        return null;
                    return lineDrawer(Position.fromString(this.selectDefault), manhattanDistance(Position.fromString(this.selectDefault), Position.fromString(this.manhattanPathTo)));
                default:
                    return null;
            }
        };
        const lines = drawLine();
        return html `${this.rectangles.map((row, rowIndex) => html `<rectangle-row>
          ${row.map((col, colIndex) => {
            var _a;
            return html `<rectangle-element
              .rect="${col}"
              .lines="${lines
                ? (_a = lines[new Position(rowIndex, colIndex).toString()]) !== null && _a !== void 0 ? _a : [] : []}"
              show="${this.show}"
              @click="${() => {
                this.selectRectangle(rowIndex, colIndex);
                this.requestUpdate();
            }}"
              @mouseover=${() => {
                this.hoverRectangle(rowIndex, colIndex);
                this.requestUpdate();
            }}
            ></rectangle-element>`;
        })}
        </rectangle-row>`)}
    ${this.showPathControls
            ? html `
          <rectangle-showpath-controls
            @changeShowPath="${(e) => { this.showPath = e.detail.showPath; this.requestUpdate(); }}"
          ></rectangle-showpath-controls>
        `
            : ''}
    ${distanceView}`;
    }
};
__decorate([
    property()
], RectangleContainer.prototype, "show", void 0);
__decorate([
    property()
], RectangleContainer.prototype, "distance", void 0);
__decorate([
    property()
], RectangleContainer.prototype, "selectDefault", void 0);
__decorate([
    property()
], RectangleContainer.prototype, "cols", void 0);
__decorate([
    property()
], RectangleContainer.prototype, "showPath", void 0);
__decorate([
    property({ type: Boolean })
], RectangleContainer.prototype, "showPathControls", void 0);
__decorate([
    property()
], RectangleContainer.prototype, "euclidPathTo", void 0);
__decorate([
    property()
], RectangleContainer.prototype, "manhattanPathTo", void 0);
RectangleContainer = __decorate([
    customElement('rectangle-container')
], RectangleContainer);
export { RectangleContainer };
//# sourceMappingURL=index.js.map