var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css, property } from 'lit-element';
import { stepSize } from './Graph';
let GatterElement = class GatterElement extends LitElement {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
        this.step = stepSize;
    }
    static get styles() {
        return css `
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
    render() {
        const position = `left:${this.x * this.step}px;bottom:${this.y * this.step}px;`;
        return html ` <div style="${position}"></div> `;
    }
};
__decorate([
    property()
], GatterElement.prototype, "x", void 0);
__decorate([
    property()
], GatterElement.prototype, "y", void 0);
GatterElement = __decorate([
    customElement('graph-gatter-element')
], GatterElement);
export { GatterElement };
//# sourceMappingURL=GatterElement.js.map