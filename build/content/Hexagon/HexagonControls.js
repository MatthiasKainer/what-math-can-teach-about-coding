var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html, property, css } from 'lit-element';
let HexagonControls = class HexagonControls extends LitElement {
    constructor() {
        super(...arguments);
        this.orientation = 'flat';
        this.coordinates = 'even-q';
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
    _setOrientation(orientation) {
        const event = new CustomEvent('changeOrientation', {
            detail: {
                orientation,
            },
        });
        this.orientation = orientation;
        this.dispatchEvent(event);
    }
    _setCoordinates(coordinates) {
        const event = new CustomEvent('changeCoordinates', {
            detail: {
                coordinates,
            },
        });
        this.coordinates = coordinates;
        this.dispatchEvent(event);
    }
    render() {
        const cssClassOrientation = (orientation) => {
            return this.orientation === orientation ? 'active' : '';
        };
        const cssClassCoords = (coordinates) => {
            return this.coordinates.startsWith(coordinates) ? 'active' : '';
        };
        return html ` <div class="controls">
        <button
          class="${cssClassOrientation('flat')}"
          @click=${() => this._setOrientation('flat')}
        >
          Flat
        </button>
        <button
          class="${cssClassOrientation('pointy')}"
          @click=${() => this._setOrientation('pointy')}
        >
          Pointy
        </button>
      </div>
      <div class="controls">
        <button
          class="${cssClassCoords('even')}"
          @click=${() => this._setCoordinates('even-q-naive')}
        >
          Push Even Columns
        </button>
        <button
          class="${cssClassCoords('odd')}"
          @click=${() => this._setCoordinates('odd-q-naive')}
        >
          Push Odd Columns
        </button>
      </div>`;
    }
};
__decorate([
    property()
], HexagonControls.prototype, "orientation", void 0);
__decorate([
    property()
], HexagonControls.prototype, "coordinates", void 0);
HexagonControls = __decorate([
    customElement('hexagon-controls')
], HexagonControls);
export { HexagonControls };
//# sourceMappingURL=HexagonControls.js.map