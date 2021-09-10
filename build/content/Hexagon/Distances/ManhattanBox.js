import { html } from 'lit';
import './Distance';
import { manhattanPointDistance } from '../../../math/position';
import { DistanceRenderer } from './Distance';
import { pureLit } from 'pure-lit';
export default pureLit('hexagon-distance-manahattan-box', (props) => {
    const selected = props.hexagons.reduce((_, row) => _ || row.find((hexagon) => hexagon.selected), undefined);
    const hovered = props.hexagons.reduce((_, row) => _ || row.find((hexagon) => hexagon.hovered), undefined);
    if (!selected || !hovered)
        return html ``;
    return html `
      <hexagon-distance
        .selected=${selected}
        .hovered=${hovered}
        .renderer=${new DistanceRenderer(() => `${selected.cube
        .toPosition()
        .toString()}-${hovered.cube.toPosition().toString()}`, () => manhattanPointDistance(selected.cube.toCoords(), hovered.cube.toCoords()).toString(), (hexagon) => hexagon.cube.toPosition().toString())}
      ></hexagon-distance>
    `;
}, {
    defaults: {
        hexagons: [],
    },
});
//# sourceMappingURL=ManhattanBox.js.map