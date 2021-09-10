import { html } from 'lit';
import { pureLit } from 'pure-lit';
import './Distance';
import { DistanceRenderer } from './Distance';
const rn = (n) => (n >= 0 ? `+${n}` : `${n}`);
export default pureLit('hexagon-distance-manahattan-cube-hint', (props) => {
    const selected = props.hexagons.reduce((_, row) => _ || row.find((hexagon) => hexagon.selected), undefined);
    const hovered = props.hexagons.reduce((_, row) => _ || row.find((hexagon) => hexagon.hovered), undefined);
    if (!selected || !hovered)
        return html ``;
    return html `
      <hexagon-distance
        hideHead
        .selected=${selected}
        .hovered=${hovered}
        .renderer=${new DistanceRenderer(() => html `<pre style="font-size: 1rem;">
${rn(hovered.cube.x)} -> ${rn(selected.cube.x)}
${rn(hovered.cube.y)} -> ${rn(selected.cube.y)}
${rn(hovered.cube.z)} -> ${rn(selected.cube.z)}
</pre>`, () => html `<pre
              style="font-size: 1rem;"
            ><br> => &nbsp;&nbsp;&nbsp;${selected.cube
        .distance(hovered.cube)
        .toString()}</pre>`, (hexagon) => hexagon.cube.toString())}
      ></hexagon-distance>
    `;
}, {
    defaults: {
        hexagons: [],
    },
});
//# sourceMappingURL=ManhattanCube.js.map