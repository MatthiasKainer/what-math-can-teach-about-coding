var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, html } from 'lit-element';
import './Distance';
import { DistanceRenderer } from './Distance';
const rn = (n) => n >= 0 ? `+${n}` : `${n}`;
let ManhattanCube = class ManhattanCube extends LitElement {
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
        hideHead
        .selected=${selected}
        .hovered=${hovered}
        .renderer=${new DistanceRenderer(() => html `<pre style="font-size: 1rem;">
${rn(hovered.cube.x)} -> ${rn(selected.cube.x)}
${rn(hovered.cube.y)} -> ${rn(selected.cube.y)}
${rn(hovered.cube.z)} -> ${rn(selected.cube.z)}
</pre>`, () => html `<pre style="font-size: 1rem;"><br> => &nbsp;&nbsp;&nbsp;${selected.cube.distance(hovered.cube).toString()}</pre>`, (hexagon) => hexagon.cube.toString())}
      ></hexagon-distance>
    `;
    }
};
__decorate([
    property()
], ManhattanCube.prototype, "hexagons", void 0);
ManhattanCube = __decorate([
    customElement('hexagon-distance-manahattan-cube-hint')
], ManhattanCube);
export { ManhattanCube };
//# sourceMappingURL=ManhattanCube.js.map