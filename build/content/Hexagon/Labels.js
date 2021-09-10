import { html, css } from 'lit';
import { p } from '../../math/position';
import { BroadthOptimizedDistance } from '../../math/pathfinder/broadthOptimized';
import { pureLit } from 'pure-lit';
export default pureLit('label-uncover-distance', (props) => {
    var _a;
    if (!props.distance)
        return html ``;
    return html `
      <div style="animation-delay: ${props.distance / 2}s;">
        ${(_a = props.label) !== null && _a !== void 0 ? _a : props.distance}
      </div>
    `;
}, {
    styles: css `
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
    `,
});
const flattenHexagons = (hexagons) => hexagons.reduce((prev, curr) => [...prev, ...curr], []);
const findSelected = (hexagons) => hexagons.find((h) => h.selected);
const findBlocked = (hexagons) => hexagons.filter((h) => h.blocked);
export const showLabel = (cube, label, hexagons, pathResult) => {
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
            return html `${cube.z}<br />${cube.x}&nbsp;&nbsp;&nbsp;${cube.y}`;
        case 'uncover-cube-breadth-distance': {
            const flatHexagons = flattenHexagons(hexagons);
            const selected = findSelected(flatHexagons);
            console.log("Selected", selected);
            if (!selected)
                return ``;
            const map = flatHexagons.map((h) => h.cube);
            const blocked = findBlocked(flatHexagons).map((b) => b.cube);
            const distance = BroadthOptimizedDistance(cube, selected.cube, (c) => !map.some((cube) => cube.equals(c)) ||
                blocked.some((cube) => cube.equals(c)));
            console.log("Uncover distance", distance);
            return html `<label-uncover-distance
        .distance="${distance}"
      ></label-uncover-distance>`;
        }
        case 'uncover-cube-a*-distance': {
            if (!pathResult)
                return '';
            if (!pathResult.visited)
                return '';
            if ([...pathResult.path].pop().equals(cube.toPosition())) {
                return html `<label-uncover-distance
          .distance="${pathResult.visited.length / 2}"
          .label=${"Goal"}
        ></label-uncover-distance>`;
            }
            const indexOfVisited = pathResult.visited.indexOf(cube.toPosition().toString());
            if (indexOfVisited < 0)
                return '';
            return html `<label-uncover-distance
        .distance="${indexOfVisited / 2}"
        .label=${"Head"}
      ></label-uncover-distance>`;
        }
        case 'none':
            return '';
        case 'coords':
        default:
            return `${p(cube.toCoords()).toString()}`;
    }
};
//# sourceMappingURL=Labels.js.map