var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css } from 'lit-element';
import '../Line';
let Graph3D = class Graph3D extends LitElement {
    static get styles() {
        return css `
      :host {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      svg {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
      svg line {
        stroke: var(--colorShow);
        stroke-width: 3;
      }
      slot {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
          z-index: 2;
      }
`;
    }
    render() {
        return html `
      <svg>
        <line x1="20%" y1="0%" x2="20%" y2="90%" />
        <line x1="15%" y1="80%" x2="100%" y2="80%" />
        <line x1="0%" y1="100%" x2="50%" y2="50%" />
      </svg>
      <slot></slot>
    `;
    }
};
Graph3D = __decorate([
    customElement('graph-3d')
], Graph3D);
export { Graph3D };
//# sourceMappingURL=Graph.js.map