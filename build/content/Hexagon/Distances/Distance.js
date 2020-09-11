var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property, css } from 'lit-element';
export class DistanceRenderer {
    constructor(printFormula = () => '', printResult = () => '', show = (hexagon) => hexagon.cube.toString()) {
        this.printFormula = printFormula;
        this.printResult = printResult;
        this.show = show;
    }
}
function isTemplateResult(value) {
    return value !== undefined && value !== null && value.processor !== undefined;
}
let Distance = class Distance extends LitElement {
    constructor() {
        super(...arguments);
        this.selected = null;
        this.hovered = null;
        this.hideHead = false;
        this.renderer = new DistanceRenderer();
    }
    static get styles() {
        return css `
      :host {
        display: block;
        margin: 5px auto;
        width: 100%;
      }
      .presenter {
        display: flex;
      }
      .presenter div {
        flex-grow: 1;
      }
      .presenter div:first-child {
        text-align: left;
      }
      .presenter div:last-child {
        text-align: right;
      }
    `;
    }
    render() {
        if (!this.selected || !this.hovered)
            return html ``;
        const { show, printFormula, printResult } = this.renderer;
        const result = printResult();
        const renderedResult = isTemplateResult(result)
            ? result : `= ${result}`;
        return html `${!this.hideHead ? html `<div>
        ${show(this.selected)} -> ${show(this.hovered)}
      </div>` : ""}
      <div class="presenter">
        <div>
          ${printFormula()}
        </div>
        <div>
          ${renderedResult}
        </div>
      </div>`;
    }
};
__decorate([
    property({ type: Object })
], Distance.prototype, "selected", void 0);
__decorate([
    property({ type: Object })
], Distance.prototype, "hovered", void 0);
__decorate([
    property({ type: Boolean })
], Distance.prototype, "hideHead", void 0);
__decorate([
    property({ type: Object })
], Distance.prototype, "renderer", void 0);
Distance = __decorate([
    customElement('hexagon-distance')
], Distance);
export { Distance };
//# sourceMappingURL=Distance.js.map