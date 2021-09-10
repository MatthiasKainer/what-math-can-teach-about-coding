import {html, css} from 'lit';
import {dispatch, LitElementWithProps, pureLit} from 'pure-lit';
import { Orientation, Coordinates } from './types';

const styles = css`
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

export type Props = {
  orientation: Orientation;
  coordinates: Coordinates;
};

const defaults: Props = {
  orientation: 'flat',
  coordinates: 'even-q',
};

export default pureLit(
  'hexagon-controls',
  (element: LitElementWithProps<Props>) => {

    console.log("element.coordinates", element.coordinates)
    const cssClassOrientation = (orientation: string) => {
      return element.orientation === orientation ? 'active' : '';
    };
    const cssClassCoords = (coordinates: string) => {
      return element.coordinates?.startsWith(coordinates) ? 'active' : '';
    };
    
    const setOrientation = (orientation: 'flat' | 'pointy') =>
      dispatch(element, 'changeOrientation', orientation);

    const setCoordinates = (coordinates: Coordinates) => 
      dispatch(element, 'changeCoordinates', coordinates);

    return html` <div class="controls">
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
  },
  {
    defaults,
    styles,
  }
);
