import {LitElement, customElement, html, css, property} from 'lit-element';

export const stepSize = 100;

import './Gatter';
import './GatterElement';
import './Point';
import './Line';

@customElement('graph-element')
export class Graph extends LitElement {
  static get styles() {
    return css`
      :host {
        position: relative;
        display: block;
        border-left: 4px solid var(--colorShow);
        border-bottom: 4px solid var(--colorShow);
        width: 33%;
        height: 60%;
        margin: 0 auto;
        z-index: 4;
      }
    `;
  }

  @property({type: Boolean})
  withGatter = false;

  @property({type: Boolean})
  withLines = false;

  render() {
    return html`
      <graph-point x="1" y="1"></graph-point>
      <graph-point x="2" y="2"></graph-point>
      <graph-point x="2" y="4"></graph-point>
      <graph-point x="4" y="2"></graph-point>
      ${this.withGatter ? html`<graph-gatter></graph-gatter>` : html``}
      ${this.withLines
        ? html`<graph-element-line
            .coords="${[{x1: 1, x2: 2, y1: 1, y2: 2}]}"
          ></graph-element-line>`
        : ''}
    `;
  }
}
