var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, css, property } from "lit-element";
import { r } from "../arrays/range";
const stepSize = 100;
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
            position:absolute;
            border: 3px solid var(--colorHighlight);
            z-index:3;
        }
        .label {
            display: block;
            position:absolute;
            margin-left: -0.5rem;
            margin-bottom: 1rem;
            line-height: 1rem;
            font-size: 1rem;
            z-index:3;
        }
        `;
    }
    render() {
        const position = `left:${this.x * this.step - 2}px;bottom:${this.y * this.step - 2}px;`;
        return html `
            <div class="point" style="${position}"></div>
            <div class="label" style="${position}">x: ${this.x}<br>y:${this.y}</div>
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
    customElement("graph-point")
], Point);
export { Point };
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
            position:absolute;
            width: ${stepSize}px;
            height: ${stepSize}px;
            border-bottom: 1px dashed white;
            border-left: 1px dashed white;
            z-index:2;
        }
        `;
    }
    render() {
        const position = `left:${this.x * this.step}px;bottom:${this.y * this.step}px;`;
        return html `
            <div style="${position}"></div>
        `;
    }
};
__decorate([
    property()
], GatterElement.prototype, "x", void 0);
__decorate([
    property()
], GatterElement.prototype, "y", void 0);
GatterElement = __decorate([
    customElement("graph-gatter-element")
], GatterElement);
export { GatterElement };
let Gatter = class Gatter extends LitElement {
    render() {
        return html `${r(0, 4)
            .map(row => r(0, 4)
            .map(col => html `<graph-gatter-element x="${row}" y="${col}"></graph-gatter-element>`))}`;
    }
};
Gatter = __decorate([
    customElement("graph-gatter")
], Gatter);
export { Gatter };
let Graph = class Graph extends LitElement {
    constructor() {
        super(...arguments);
        this.withGatter = false;
    }
    static get styles() {
        return css `
        :host {
            position:relative;
            display: block;
            border-left: 4px solid var(--colorShow);
            border-bottom: 4px solid var(--colorShow);
            width: 33%;
            height: 60%;
            margin: 0 auto;
            z-index:4;
        }`;
    }
    render() {
        return html `
            <graph-point x="1" y="1"></graph-point>
            <graph-point x="2" y="2"></graph-point>
            <graph-point x="2" y="4"></graph-point>
            <graph-point x="4" y="2"></graph-point>
            ${this.withGatter ? html `<graph-gatter></graph-gatter>` : html ``}
        `;
    }
};
__decorate([
    property({ type: Boolean })
], Graph.prototype, "withGatter", void 0);
Graph = __decorate([
    customElement("graph-element")
], Graph);
export { Graph };
//# sourceMappingURL=Graph.js.map