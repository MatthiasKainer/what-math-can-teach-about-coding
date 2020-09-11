var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css, property } from 'lit-element';
import { stepSize } from './Graph';
let Point = class Point extends LitElement {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
        this.step = stepSize;
    }
    static get styles() {
        return css `
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
    render() {
        const position = `left:${this.x * this.step - 2}px;bottom:${this.y * this.step - 2}px;`;
        return html `
      <div class="point" style="${position}"></div>
      <div class="label" style="${position}">x: ${this.x}<br />y:${this.y}</div>
    `;
    }
};
__decorate([
    property()
], Point.prototype, "x", void 0);
__decorate([
    property()
], Point.prototype, "y", void 0);
Point = __decorate([
    customElement('graph-point')
], Point);
export { Point };
//# sourceMappingURL=Point.js.map