var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, LitElement, css, html, property } from 'lit-element';
let ShowPathControls = class ShowPathControls extends LitElement {
    constructor() {
        super(...arguments);
        this.showPath = 'euclid';
    }
    static get styles() {
        return css `
      .controls {
      }
      button {
        display: inline-block;
        margin: 5px 0;
        background: var(--colorShow);
        border: 1px solid var(--colorShow);
        color: var(--colorContrast);
        cursor: pointer;
        transition: all 1s linear;
      }
      button.active {
        background: var(--colorContrast);
        border: 1px solid var(--colorShow);
        color: var(--colorShow);
      }
    `;
    }
    _setPath(showPath) {
        const event = new CustomEvent('changeShowPath', {
            detail: {
                showPath,
            },
        });
        this.showPath = showPath;
        this.dispatchEvent(event);
    }
    render() {
        const cssClassOrientation = (showPath) => {
            return this.showPath === showPath ? 'active' : '';
        };
        return html ` <div class="controls">
      ${['euclid', 'taxicab']
            .map((p) => p)
            .map((path) => html `<button
            class="${cssClassOrientation(path)}"
            @click=${() => this._setPath(path)}
          >
            ${path}
          </button>`)}
    </div>`;
    }
};
__decorate([
    property()
], ShowPathControls.prototype, "showPath", void 0);
ShowPathControls = __decorate([
    customElement('rectangle-showpath-controls')
], ShowPathControls);
export { ShowPathControls };
//# sourceMappingURL=ShowPathControls.js.map