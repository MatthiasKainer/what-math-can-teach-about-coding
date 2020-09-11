import {LitElement, customElement, property, html} from 'lit-element';
import {InteractiveHexagon} from '../InteractiveHexagon';

import './Distance';
import {DistanceRenderer} from './Distance';

const rn = (n: number) => 
    n >= 0 ? `+${n}` : `${n}`

@customElement('hexagon-distance-manahattan-cube-hint')
export class ManhattanCube extends LitElement {
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
        hideHead
        .selected=${selected}
        .hovered=${hovered}
        .renderer=${new DistanceRenderer(
          () => html`<pre style="font-size: 1rem;">
${rn(hovered.cube.x)} -> ${rn(selected.cube.x)}
${rn(hovered.cube.y)} -> ${rn(selected.cube.y)}
${rn(hovered.cube.z)} -> ${rn(selected.cube.z)}
</pre>`,
          () => html`<pre style="font-size: 1rem;"><br> => &nbsp;&nbsp;&nbsp;${selected.cube.distance(hovered.cube).toString()}</pre>`,
          (hexagon: InteractiveHexagon) => hexagon.cube.toString()
        )}
      ></hexagon-distance>
    `;
  }
}
