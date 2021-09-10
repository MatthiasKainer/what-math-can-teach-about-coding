import { html, css } from 'lit';
import { dispatch, pureLit } from 'pure-lit';
const styles = css `
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
const defaults = {
    orientation: 'flat',
    coordinates: 'even-q',
};
export default pureLit('hexagon-controls', (element) => {
    console.log("element.coordinates", element.coordinates);
    const cssClassOrientation = (orientation) => {
        return element.orientation === orientation ? 'active' : '';
    };
    const cssClassCoords = (coordinates) => {
        var _a;
        return ((_a = element.coordinates) === null || _a === void 0 ? void 0 : _a.startsWith(coordinates)) ? 'active' : '';
    };
    const setOrientation = (orientation) => dispatch(element, 'changeOrientation', orientation);
    const setCoordinates = (coordinates) => dispatch(element, 'changeCoordinates', coordinates);
    return html ` <div class="controls">
        <button
          class="${cssClassOrientation('flat')}"
          @click=${() => setOrientation('flat')}
        >
          Flat
        </button>
        <button
          class="${cssClassOrientation('pointy')}"
          @click=${() => setOrientation('pointy')}
        >
          Pointy
        </button>
      </div>
      <div class="controls">
        <button
          class="${cssClassCoords('even')}"
          @click=${() => setCoordinates('even-q-naive')}
        >
          Push Even Columns
        </button>
        <button
          class="${cssClassCoords('odd')}"
          @click=${() => setCoordinates('odd-q-naive')}
        >
          Push Odd Columns
        </button>
      </div>`;
}, {
    defaults,
    styles,
});
//# sourceMappingURL=HexagonControls.js.map