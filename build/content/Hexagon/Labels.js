var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, customElement, css, property } from 'lit-element';
import { p } from '../../math/position';
import { BroadthOptimizedDistance } from '../../math/pathfinder/broadthOptimized';
let UncoverDistance = class UncoverDistance extends LitElement {
    constructor() {
        super(...arguments);
        this.distance = undefined;
        this.label = undefined;
    }
    static get styles() {
        return css `
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
    render() {
        var _a;
        if (!this.distance)
            return "";
        return html `
    <div style="animation-delay: ${this.distance / 2}s;">
      ${(_a = this.label) !== null && _a !== void 0 ? _a : this.distance}
    </div>
    `;
    }
};
__decorate([
    property({ type: Number })
], UncoverDistance.prototype, "distance", void 0);
__decorate([
    property()
], UncoverDistance.prototype, "label", void 0);
UncoverDistance = __decorate([
    customElement('label-uncover-distance')
], UncoverDistance);
export { UncoverDistance };
const flattenHexagons = (hexagons) => hexagons
    .reduce((prev, curr) => [...prev, ...curr], []);
const findSelected = (hexagons) => hexagons
    .find((h) => h.selected);
const findBlocked = (hexagons) => hexagons
    .filter((h) => h.blocked);
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
            if (!selected)
                return ``;
            const map = flatHexagons.map(h => h.cube);
            const blocked = findBlocked(flatHexagons).map(b => b.cube);
            const distance = BroadthOptimizedDistance(cube, selected.cube, (c) => !map.some(cube => cube.equals(c)) || blocked.some(cube => cube.equals(c)));
            return html `<label-uncover-distance distance="${distance}" ></label-uncover-distance>`;
        }
        case 'uncover-cube-a*-distance': {
            if (!pathResult)
                return "";
            if (!pathResult.visited)
                return "";
            if ([...pathResult.path].pop().equals(cube.toPosition())) {
                return html `<label-uncover-distance distance="${pathResult.visited.length / 2}" label="Goal"></label-uncover-distance>`;
            }
            const indexOfVisited = pathResult.visited.indexOf(cube.toPosition().toString());
            if (indexOfVisited < 0)
                return "";
            return html `<label-uncover-distance distance="${indexOfVisited / 2}" label="Head"></label-uncover-distance>`;
        }
        case 'none':
            return "";
        case 'coords':
        default:
            return `${p(cube.toCoords()).toString()}`;
    }
};
//# sourceMappingURL=Labels.js.map