import {LitElement, customElement, html, property, css} from 'lit-element';

@customElement('hexagon-controls')
export class HexagonControls extends LitElement {
  static get styles() {
    return css`
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

  _setOrientation(orientation: 'flat' | 'pointy') {
    const event = new CustomEvent('changeOrientation', {
      detail: {
        orientation,
      },
    });
    this.orientation = orientation;
    this.dispatchEvent(event);
  }

  _setCoordinates(coordinates: string) {
    const event = new CustomEvent('changeCoordinates', {
      detail: {
        coordinates,
      },
    });
    this.coordinates = coordinates;
    this.dispatchEvent(event);
  }

  @property()
  orientation: 'flat' | 'pointy' = 'flat';

  @property()
  coordinates = 'even-q';

  render() {
    const cssClassOrientation = (orientation: string) => {
      return this.orientation === orientation ? 'active' : '';
    };
    const cssClassCoords = (coordinates: string) => {
      return this.coordinates.startsWith(coordinates) ? 'active' : '';
    };

    return html` <div class="controls">
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
}
