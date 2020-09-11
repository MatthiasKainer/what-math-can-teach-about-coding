var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, customElement, LitElement, css, html } from 'lit-element';
import "../Line/Line";
let RectangleElement = class RectangleElement extends LitElement {
    constructor() {
        super(...arguments);
        this.rect = null;
        this.show = 'coords';
        this.lines = [];
    }
    static get styles() {
        return css `
      :host {
        position: relative;
        display: inline-block;
      }
      div {
        display: inline-block;
        width: 4rem;
        height: calc(4rem - 1rem);
        background: var(--colorShow);
        cursor: pointer;
        border: 2px solid var(--colorMain);
        padding-top: 1rem;
        transition: all 250ms linear;
      }
      div.active {
        background-color: var(--colorHighlight);
        color: var(--colorShow);
      }
      div.hovered {
        background-color: var(--colorFocus);
        color: var(--colorShow);
      }
    `;
    }
    render() {
        var _a, _b;
        const classes = [
            ((_a = this.rect) === null || _a === void 0 ? void 0 : _a.selected) ? 'active' : '',
            ((_b = this.rect) === null || _b === void 0 ? void 0 : _b.hovered) ? 'hovered' : '',
        ];
        const labels = () => {
            var _a, _b;
            switch (this.show) {
                case 'distance':
                    return html `${(_a = this.rect) === null || _a === void 0 ? void 0 : _a.distance.toString()}`;
                case 'none':
                    return html `&nbsp;`;
                case 'coords':
                default:
                    return html `${(_b = this.rect) === null || _b === void 0 ? void 0 : _b.rectangle.toString()}`;
            }
        };
        const lines = () => this.lines.map(line => html `<line-element orientation="${line}"></line-element>`);
        return html `${lines()}<div class="${classes.join(' ')}">
      ${labels()}
    </div>`;
    }
};
__decorate([
    property({ type: Object })
], RectangleElement.prototype, "rect", void 0);
__decorate([
    property()
], RectangleElement.prototype, "show", void 0);
__decorate([
    property({ type: Array })
], RectangleElement.prototype, "lines", void 0);
RectangleElement = __decorate([
    customElement('rectangle-element')
], RectangleElement);
export { RectangleElement };
//# sourceMappingURL=RectangleElement.js.map