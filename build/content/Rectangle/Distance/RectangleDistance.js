var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, LitElement, css, html, property } from 'lit-element';
let RectangleDistance = class RectangleDistance extends LitElement {
    constructor() {
        super(...arguments);
        this.selected = null;
        this.hover = null;
    }
    static get styles() {
        return css `
      :host {
        display: block;
        margin: 5px auto;
        width: 20rem;
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
        if (!this.selected || !this.hover)
            return html ``;
        return html `<div>
        ${this.selected.rectangle.toString()} ->
        ${this.hover.rectangle.toString()}
      </div>
      <div class="presenter">
        <div>
          sqrt((${this.hover.rectangle.coords.col} -
          ${this.selected.rectangle.coords.col})^2 +
          (${this.hover.rectangle.coords.row} -
          ${this.selected.rectangle.coords.row})^2)
        </div>
        <div>
          = ${this.selected.rectangle.distance(this.hover.rectangle).toFixed(2)}
        </div>
      </div>`;
    }
};
__decorate([
    property({ type: Object })
], RectangleDistance.prototype, "selected", void 0);
__decorate([
    property({ type: Object })
], RectangleDistance.prototype, "hover", void 0);
RectangleDistance = __decorate([
    customElement('rectangle-distance')
], RectangleDistance);
export { RectangleDistance };
//# sourceMappingURL=RectangleDistance.js.map