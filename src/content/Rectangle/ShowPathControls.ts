import { customElement, LitElement, css, html, property } from 'lit-element';
import { ShowPath } from './index';
@customElement('rectangle-showpath-controls')
export class ShowPathControls extends LitElement {
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
  @property()
  showPath: ShowPath = 'euclid';
  _setPath(showPath: ShowPath) {
    const event = new CustomEvent('changeShowPath', {
      detail: {
        showPath,
      },
    });
    this.showPath = showPath;
    this.dispatchEvent(event);
  }
  render() {
    const cssClassOrientation = (showPath: ShowPath) => {
      return this.showPath === showPath ? 'active' : '';
    };
    return html` <div class="controls">
      ${['euclid', 'taxicab']
        .map((p) => p as ShowPath)
        .map((path: ShowPath) => html`<button
            class="${cssClassOrientation(path)}"
            @click=${() => this._setPath(path)}
          >
            ${path}
          </button>`)}
    </div>`;
  }
}
