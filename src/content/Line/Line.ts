import {LitElement, customElement, property, html, css} from 'lit-element';
import {Orientation, calculatorFactory} from './calculatorFactor';

const LineStyle = css`
:host {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
svg {
  width: 100%;
  height: 100%;
}
svg line {
  stroke: var(--colorContrast);
  stroke-width: 5;
}
`;

@customElement('line-element')
export class Line extends LitElement {
  static get styles() {
    return [LineStyle]
  }

  @property()
  orientation: Orientation = 'none';
  @property()
  parent: 'rectangle' | 'hexagon' = 'rectangle';
  @property()
  color: string | null = null

  render() {
    if (this.orientation === 'none') return html``;
    const lineCoords = calculatorFactory(this.parent)(this.orientation);
    return html`<svg>
      <line
        x1="${lineCoords.x1}"
        y1="${lineCoords.y1}"
        x2="${lineCoords.x2}"
        y2="${lineCoords.y2}"
        style="${this.color ? "stroke:${this.color};" : ""}"
      />
    </svg>`;
  }
}
