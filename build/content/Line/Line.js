var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, html, css } from 'lit-element';
import { calculatorFactory } from './calculatorFactor';
const LineStyle = css `
:host {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
svg {
  width: 100%;
  height: 100%;
}
svg line {
  stroke: var(--colorContrast);
  stroke-width: 5;
}
`;
let Line = class Line extends LitElement {
    constructor() {
        super(...arguments);
        this.orientation = 'none';
        this.parent = 'rectangle';
        this.color = null;
    }
    static get styles() {
        return [LineStyle];
    }
    render() {
        if (this.orientation === 'none')
            return html ``;
        const lineCoords = calculatorFactory(this.parent)(this.orientation);
        return html `<svg>
      <line
        x1="${lineCoords.x1}"
        y1="${lineCoords.y1}"
        x2="${lineCoords.x2}"
        y2="${lineCoords.y2}"
        style="${this.color ? "stroke:${this.color};" : ""}"
      />
    </svg>`;
    }
};
__decorate([
    property()
], Line.prototype, "orientation", void 0);
__decorate([
    property()
], Line.prototype, "parent", void 0);
__decorate([
    property()
], Line.prototype, "color", void 0);
Line = __decorate([
    customElement('line-element')
], Line);
export { Line };
//# sourceMappingURL=Line.js.map