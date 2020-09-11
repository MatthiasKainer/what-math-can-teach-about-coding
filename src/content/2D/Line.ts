import { LitElement, customElement, html, css, property } from 'lit-element';
import { stepSize } from './Graph';

export interface LineCoords {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  }

@customElement('graph-element-line')
export class Line extends LitElement {
    @property({ type: Array })
    coords: LineCoords[] = [];
    step = stepSize;
    static get styles() {
        return css`
      :host {
        display: inline-block;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
      }
      svg {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        transform: rotate(180deg) scaleX(-1);
      }
      svg line {
        stroke: var(--colorContrast);
        stroke-width: 3;
      }
    `;
    }
    render() {
        return html`<svg>
      <line x1="0px" y1="0px" x2="100px" y2="100px" />
      <line x1="100px" y1="100px" x2="200px" y2="200px" />
      <line x1="200px" y1="200px" x2="400px" y2="200px" />
    </svg>`;
    }
}
