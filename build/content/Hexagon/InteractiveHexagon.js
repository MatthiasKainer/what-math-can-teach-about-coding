import { p } from '../../math/position';
export class InteractiveHexagon {
    constructor(cube, selected, hovered = false, blocked = false, distance = 0) {
        this.cube = cube;
        this.selected = selected;
        this.hovered = hovered;
        this.blocked = blocked;
        this.distance = distance;
    }
}
export function isCoord(base) {
    return base && !isNaN(base.col) && !isNaN(base.row);
}
export const statefulHexagon = (base, selected = false, hovered = false) => {
    return isCoord(base)
        ? new InteractiveHexagon(p(base).toCube(), selected, hovered)
        : new InteractiveHexagon(base, selected, hovered);
};
//# sourceMappingURL=InteractiveHexagon.js.map