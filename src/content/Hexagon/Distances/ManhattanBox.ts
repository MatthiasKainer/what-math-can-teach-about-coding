import {LitElement, customElement, property, html} from 'lit-element';
import {InteractiveHexagon} from '../InteractiveHexagon';

import './Distance';
import {manhattanPointDistance} from '../../../math/position';
import { DistanceRenderer } from './Distance';

@customElement('hexagon-distance-manahattan-box')
export class ManhattanBox extends LitElement {
  @property()
  hexagons: InteractiveHexagon[][] = [];

  render() {
    const selected = this.hexagons.reduce(
      (_: InteractiveHexagon | undefined, row) =>
        _ || row.find((hexagon) => hexagon.selected),
      undefined
    );
    const hovered = this.hexagons.reduce(
      (_: InteractiveHexagon | undefined, row) =>
        _ || row.find((hexagon) => hexagon.hovered),
      undefined
    );
    if (!selected || !hovered) return html``;
    return html`
      <hexagon-distance
        .selected=${selected}
        .hovered=${hovered}
        .renderer=${
            new DistanceRenderer(
                () =>
                `${selected.cube
                  .toPosition()
                  .toString()}-${hovered.cube.toPosition().toString()}`,
                () =>
                  manhattanPointDistance(
                    selected.cube.toCoords(),
                    hovered.cube.toCoords()
                  ).toString(),
                (hexagon: InteractiveHexagon) =>
                  hexagon.cube.toPosition().toString()
            )
        }
      ></hexagon-distance>
    `;
  }
}
