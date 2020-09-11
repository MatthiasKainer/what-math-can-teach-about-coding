var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, html } from 'lit-element';
import './Distance';
import { manhattanPointDistance } from '../../../math/position';
import { DistanceRenderer } from './Distance';
let ManhattanBox = class ManhattanBox extends LitElement {
    constructor() {
        super(...arguments);
        this.hexagons = [];
    }
    render() {
        const selected = this.hexagons.reduce((_, row) => _ || row.find((hexagon) => hexagon.selected), undefined);
        const hovered = this.hexagons.reduce((_, row) => _ || row.find((hexagon) => hexagon.hovered), undefined);
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
    }
};
__decorate([
    property()
], ManhattanBox.prototype, "hexagons", void 0);
ManhattanBox = __decorate([
    customElement('hexagon-distance-manahattan-box')
], ManhattanBox);
export { ManhattanBox };
//# sourceMappingURL=ManhattanBox.js.map