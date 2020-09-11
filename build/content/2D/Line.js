var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css, property } from 'lit-element';
import { stepSize } from './Graph';
let Line = class Line extends LitElement {
    constructor() {
        super(...arguments);
        this.coords = [];
        this.step = stepSize;
    }
    static get styles() {
        return css `
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
        return html `<svg>
      <line x1="0px" y1="0px" x2="100px" y2="100px" />
      <line x1="100px" y1="100px" x2="200px" y2="200px" />
      <line x1="200px" y1="200px" x2="400px" y2="200px" />
    </svg>`;
    }
};
__decorate([
    property({ type: Array })
], Line.prototype, "coords", void 0);
Line = __decorate([
    customElement('graph-element-line')
], Line);
export { Line };
//# sourceMappingURL=Line.js.map