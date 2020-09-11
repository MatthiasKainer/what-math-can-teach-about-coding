import { LitElement, customElement, html, css, property } from 'lit-element';
import { stepSize } from './Graph';
@customElement('graph-point')
export class Point extends LitElement {
    static get styles() {
        return css`
      .point {
        display: block;
        position: absolute;
        border: 3px solid var(--colorHighlight);
        z-index: 4;
      }
      .label {
        display: block;
        position: absolute;
        margin-left: -0.5rem;
        margin-bottom: 1rem;
        line-height: 1rem;
        font-size: 1rem;
        z-index: 3;
      }
    `;
    }
    @property()
    x = 0;
    @property()
    y = 0;
    step = stepSize;
    render() {
        const position = `left:${this.x * this.step - 2}px;bottom:${this.y * this.step - 2}px;`;
        return html`
      <div class="point" style="${position}"></div>
      <div class="label" style="${position}">x: ${this.x}<br />y:${this.y}</div>
    `;
    }
}
