import { rect } from "../../math/rectangle";
export class InteractiveRectangle {
    constructor(rectangle, selected, hovered = false, distance = 0) {
        this.rectangle = rectangle;
        this.selected = selected;
        this.hovered = hovered;
        this.distance = distance;
    }
}
export const statefulRectangle = (coords, selected = false, hovered = false) => {
    return new InteractiveRectangle(rect(coords), selected, hovered);
};
//# sourceMappingURL=InteractiveRectangle.js.map