import {TemplateResult, html} from 'lit-element';
import {r} from '../../../arrays/range';
import {statefulHexagon, InteractiveHexagon} from '../InteractiveHexagon';

const naiveEvenCoordinateSystem = (
  hexagons: InteractiveHexagon[][],
  onRenderElement: (hexagon: InteractiveHexagon) => TemplateResult
) =>
  hexagons.map(
    (rows, row) =>
      html`<div class="row ${(row & 1) === 0 ? 'even' : 'odd'}">
        ${rows.map((hexagon) => onRenderElement(hexagon))}
      </div>`
  );

const evenCoordinateSystem = (
  hexagons: InteractiveHexagon[][],
  onRenderElement: (hexagon: InteractiveHexagon) => TemplateResult
) =>
  hexagons.map(
    (rows) => {
      return html`<div class="row even">
        ${rows.filter(h => (h.cube.toCoords().col & 1) === 1).map((hexagon) => onRenderElement(hexagon))}
      </div><div class="row odd">
        ${rows.filter(h => (h.cube.toCoords().col & 1) === 0).map((hexagon) => onRenderElement(hexagon))}
      </div>`

    }
  );

const naiveOddCoordinateSystem = (
    hexagons: InteractiveHexagon[][],
  onRenderElement: (hexagon: InteractiveHexagon) => TemplateResult
) =>
  hexagons.map(
    (rows, row) =>
      html`<div class="row ${(row & 1) === 0 ? 'odd' : 'even'}">
        ${rows.map((hexagon) => onRenderElement(hexagon))}
      </div>`
  );

export const coordinateData = (rows: number, cols: number) =>
  r(0, rows).map((row) => r(0, cols).map((col) => statefulHexagon({row, col})));

export const coordinateRenderer = (
  name: string,
  hexagons: InteractiveHexagon[][],
  onRenderElement: (hexagon: InteractiveHexagon) => TemplateResult
) => {
  switch (name) {
    case 'even-q':
      return evenCoordinateSystem(hexagons, onRenderElement);
    case 'even-q-naive':
      return naiveEvenCoordinateSystem(hexagons, onRenderElement);
    case 'odd-q':
    case 'odd-q-naive':
    default:
      return naiveOddCoordinateSystem(hexagons, onRenderElement);
  }
};
