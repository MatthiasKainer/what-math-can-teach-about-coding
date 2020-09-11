import {Cube} from '../../math/cube/cube';
import {InteractiveHexagon} from './InteractiveHexagon';
import {html, LitElement, customElement, css, property} from 'lit-element';
import {p} from '../../math/position';
import { PathResult } from '../../math/pathfinder/type';
import { BroadthOptimizedDistance } from '../../math/pathfinder/broadthOptimized';

export type HexagonLabel =
  | 'none'
  | 'coords'
  | 'cube-coords'
  | 'cube-distance'
  | 'distance'
  | 'uncover-cube-breadth-distance'
  | 'uncover-cube-a*-distance';

@customElement('label-uncover-distance')
export class UncoverDistance extends LitElement {
  static get styles() {
    return css`
      div {
        display: inline-block;
        opacity: 0;
        animation: fadeIn 10s;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;
  }

  @property({type: Number})
  distance?: number = undefined
  @property()
  label?: string = undefined

  render() {
    if (!this.distance) return "";
    return html`
    <div style="animation-delay: ${this.distance/2}s;">
      ${this.label ?? this.distance}
    </div>
    `
  }
}

const flattenHexagons = (hexagons: InteractiveHexagon[][]) =>
  hexagons
  .reduce((prev, curr) => [...prev, ...curr], [])

const findSelected = (hexagons: InteractiveHexagon[]) =>
  hexagons
    .find((h) => h.selected);

const findBlocked = (hexagons: InteractiveHexagon[]) =>
    hexagons
      .filter((h) => h.blocked);

export const showLabel = (
  cube: Cube,
  label: HexagonLabel,
  hexagons: InteractiveHexagon[][],
  pathResult: PathResult | null
) => {
  switch (label) {
    case 'distance': {
      const selected = hexagons
        .reduce((prev, curr) => [...prev, ...curr], [])
        .find((h) => h.selected);
      return selected
        ? cube
            .toPosition()
            .manhattanDistance(selected.cube.toPosition())
            .toString()
        : '';
    }
    case 'cube-distance': {
      const selected = findSelected(flattenHexagons(hexagons));
      return selected ? cube.distance(selected.cube).toString() : '';
    }
    case 'cube-coords':
      return html`${cube.z}<br />${cube.x}&nbsp;&nbsp;&nbsp;${cube.y}`;
    case 'uncover-cube-breadth-distance': {
      const flatHexagons = flattenHexagons(hexagons)
      const selected = findSelected(flatHexagons);
      if (!selected) return ``

      const map = flatHexagons.map(h => h.cube) 
      const blocked = findBlocked(flatHexagons).map(b => b.cube)
      const distance = BroadthOptimizedDistance(cube, selected.cube, (c) => !map.some(cube => cube.equals(c)) || blocked.some(cube => cube.equals(c)))
      return html`<label-uncover-distance distance="${distance}" ></label-uncover-distance>`
    }
    case 'uncover-cube-a*-distance': {
      if (!pathResult) return ""

      if (!pathResult.visited) return ""
      if ([...pathResult.path].pop()!.equals(cube.toPosition())) {
          return html`<label-uncover-distance distance="${pathResult.visited.length/2}" label="Goal"></label-uncover-distance>`
      }
      const indexOfVisited = pathResult.visited.indexOf(cube.toPosition().toString())
      if (indexOfVisited < 0) return ""

      return html`<label-uncover-distance distance="${indexOfVisited/2}" label="Head"></label-uncover-distance>`
    }
    case 'none':
      return ""
    case 'coords':
    default:
      return `${p(cube.toCoords()).toString()}`;
  }
};
