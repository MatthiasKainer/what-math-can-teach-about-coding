import { LitElement, customElement, html, css, property } from 'lit-element';
import { stepSize } from './Graph';
@customElement('graph-gatter-element')
export class GatterElement extends LitElement {
    static get styles() {
        return css`
      div {
        display: block;
        position: absolute;
        width: ${stepSize}px;
        height: ${stepSize}px;
        border-bottom: 1px dashed white;
        border-left: 1px dashed white;
        z-index: 2;
      }
    `;
    }
    @property()
    x = 0;
    @property()
    y = 0;
    step = stepSize;
    render() {
        const position = `left:${this.x * this.step}px;bottom:${this.y * this.step}px;`;
        return html` <div style="${position}"></div> `;
    }
}
