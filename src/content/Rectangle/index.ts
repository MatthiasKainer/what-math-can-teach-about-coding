import {customElement, LitElement, css, html, property} from 'lit-element';
import {r} from '../../arrays/range';
import {Position} from '../../math/position';
import {statefulRectangle} from './InteractiveRectangle';
import {distanceViewFactory} from './Distance';

import './RectangleElement';
import './RectangleRow';
import {lineDrawer, LineResult} from '../Line/lineDrawer';
import "./ShowPathControls"
import { euclidDistance, manhattanDistance } from '../../math/pathfinder/RectPathfinder';

export type ShowPath = 'euclid' | 'taxicab';

@customElement('rectangle-container')
export class RectangleContainer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin-top: calc(16rem - 20px);
      }
    `;
  }

  constructor(
    public rectangles = r(0, 3).map((row) =>
      r(0, 3).map((col) => statefulRectangle({row, col}))
    )
  ) {
    super();
  }

  selectRectangle(selectedRowIndex: number, selectedColIndex: number) {
    this.rectangles.forEach((row, rowIndex) => {
      row.forEach((rectangle, colIndex) => {
        if (rowIndex === selectedRowIndex && colIndex === selectedColIndex) {
          this.rectangles[rowIndex][colIndex] = statefulRectangle(
            rectangle.rectangle.coords,
            !rectangle.selected
          );
        } else if (this.show === "distance") {
          this.rectangles[rowIndex][colIndex] = statefulRectangle(
            rectangle.rectangle.coords,
            false
          );
          this.rectangles[rowIndex][colIndex].distance = this.rectangles[
            selectedRowIndex
          ][selectedColIndex].rectangle.manhattanDistance(
            this.rectangles[rowIndex][colIndex].rectangle
          );
        } else if (rectangle.selected) {
          this.rectangles[rowIndex][colIndex] = statefulRectangle(
            rectangle.rectangle.coords,
            false
          );
        }
      });
    });
  }

  hoverRectangle(selectedRowIndex: number, selectedColIndex: number) {
    if (this.show === "distance") return;
    this.rectangles.forEach((row, rowIndex) => {
      row.forEach((rectangle, colIndex) => {
        if (rowIndex === selectedRowIndex && colIndex === selectedColIndex) {
          this.rectangles[rowIndex][colIndex] = statefulRectangle(
            rectangle.rectangle.coords,
            rectangle.selected,
            true
          );
        } else if (rectangle.hovered) {
          this.rectangles[rowIndex][colIndex] = statefulRectangle(
            rectangle.rectangle.coords,
            rectangle.selected,
            false
          );
        }
      });
    });
  }

  @property()
  show: 'distance' | 'coords' | 'none' = 'coords';
  @property()
  distance = 'manhattan';
  @property()
  selectDefault: string | null = null;
  @property()
  cols = 3;

  @property()
  showPath: ShowPath | null = null;
  @property({type: Boolean})
  showPathControls = false;
  @property()
  euclidPathTo: string | null = null;
  @property()
  manhattanPathTo: string | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.rectangles = r(0, this.cols).map((row) =>
      r(0, this.cols).map((col) => statefulRectangle({row, col}))
    );

    if (this.selectDefault) {
      const selected = Position.fromString(this.selectDefault);
      if (selected) this.selectRectangle(selected.row, selected.col);
    }
  }

  render() {
    const flatRectangles = () =>
      this.rectangles.reduce((prev, curr) => [...prev, ...curr], []);

    const distanceView = distanceViewFactory(this.distance, flatRectangles);

    const drawLine = () => {
      switch (this.showPath) {
        case 'euclid':
          if (!this.euclidPathTo) return null;
          return lineDrawer(
            Position.fromString(this.selectDefault!),
            euclidDistance(Position.fromString(this.selectDefault!), Position.fromString(this.euclidPathTo))
          );
        case "taxicab":
          if (!this.manhattanPathTo) return null;
          return lineDrawer(
            Position.fromString(this.selectDefault!),
            manhattanDistance(Position.fromString(this.selectDefault!), Position.fromString(this.manhattanPathTo))
          );
        default:
          return null;
      }
    };

    const lines: LineResult | null = drawLine()
    return html`${this.rectangles.map(
      (row, rowIndex) =>
        html`<rectangle-row>
          ${row.map(
            (col, colIndex) => html`<rectangle-element
              .rect="${col}"
              .lines="${lines
                ? lines[new Position(rowIndex, colIndex).toString()] ?? []
                : []}"
              show="${this.show}"
              @click="${() => {
                this.selectRectangle(rowIndex, colIndex);
                this.requestUpdate();
              }}"
              @mouseover=${() => {
                this.hoverRectangle(rowIndex, colIndex);
                this.requestUpdate();
              }}
            ></rectangle-element>`
          )}
        </rectangle-row>`
    )}
    ${this.showPathControls
      ? html`
          <rectangle-showpath-controls
            @changeShowPath="${(e: CustomEvent) =>
              {this.showPath = e.detail.showPath; this.requestUpdate()}}"
          ></rectangle-showpath-controls>
        `
      : ''}
    ${distanceView}`;
  }
}
