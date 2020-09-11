import { html } from 'lit-element';
import { r } from '../../../arrays/range';
import { statefulHexagon } from '../InteractiveHexagon';
const rows = 6;
const cols = 5;
const naiveEvenCoordinateSystem = (hexagons, onRenderElement) => hexagons.map((rows, row) => html `<div class="row ${(row & 1) === 0 ? 'even' : 'odd'}">
        ${rows.map((hexagon) => onRenderElement(hexagon))}
      </div>`);
const naiveOddCoordinateSystem = (hexagons, onRenderElement) => hexagons.map((rows, row) => html `<div class="row ${(row & 1) === 0 ? 'odd' : 'even'}">
        ${rows.map((hexagon) => onRenderElement(hexagon))}
      </div>`);
export const coordinateData = () => r(0, rows).map((row) => r(0, cols).map((col) => statefulHexagon({ row, col })));
export const coordinateRenderer = (name, hexagons, onRenderElement) => {
    switch (name) {
        case 'even-q':
        case 'even-q-naive':
            return naiveEvenCoordinateSystem(hexagons, onRenderElement);
        case 'odd-q':
        case 'odd-q-naive':
        default:
            return naiveOddCoordinateSystem(hexagons, onRenderElement);
    }
};
//# sourceMappingURL=index.js.map