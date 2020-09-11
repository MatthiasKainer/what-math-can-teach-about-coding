var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css, property } from 'lit-element';
export const stepSize = 100;
import './Gatter';
import './GatterElement';
import './Point';
import './Line';
let Graph = class Graph extends LitElement {
    constructor() {
        super(...arguments);
        this.withGatter = false;
        this.withLines = false;
    }
    static get styles() {
        return css `
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
    render() {
        return html `
      <graph-point x="1" y="1"></graph-point>
      <graph-point x="2" y="2"></graph-point>
      <graph-point x="2" y="4"></graph-point>
      <graph-point x="4" y="2"></graph-point>
      ${this.withGatter ? html `<graph-gatter></graph-gatter>` : html ``}
      ${this.withLines
            ? html `<graph-element-line
            .coords="${[{ x1: 1, x2: 2, y1: 1, y2: 2 }]}"
          ></graph-element-line>`
            : ''}
    `;
    }
};
__decorate([
    property({ type: Boolean })
], Graph.prototype, "withGatter", void 0);
__decorate([
    property({ type: Boolean })
], Graph.prototype, "withLines", void 0);
Graph = __decorate([
    customElement('graph-element')
], Graph);
export { Graph };
//# sourceMappingURL=Graph.js.map