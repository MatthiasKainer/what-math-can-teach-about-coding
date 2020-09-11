var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, css, html } from 'lit-element';
let HexagonCube = class HexagonCube extends LitElement {
    static get styles() {
        return css `
      :host {
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
      }
      svg line {
        stroke: var(--colorContrast);
        stroke-width: 1;
      }
    `;
    }
    render() {
        return html `
      <svg>
        <text x="47%" y="25%">z</text>
        <text x="20%" y="60%">x</text>
        <text x="75%" y="60%">y</text>
        <line x1="49%" x2="49%" y1="46%" y2="96%"></line>
        <line x1="3%" y1="25%" x2="49%" y2="46%"></line>
        <line y1="46%" x1="49%" y2="25%" x2="94%"></line>
      </svg>
    `;
    }
};
HexagonCube = __decorate([
    customElement('hexagon-cube')
], HexagonCube);
export { HexagonCube };
//# sourceMappingURL=HexagonCube.js.map