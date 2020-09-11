import { Rectangle } from "../../math/rectangle";
import { Coords } from "../../math/position";
export declare class InteractiveRectangle {
    rectangle: Rectangle;
    selected: boolean;
    hovered: boolean;
    distance: number;
    constructor(rectangle: Rectangle, selected: boolean, hovered?: boolean, distance?: number);
}
export declare const statefulRectangle: (coords: Coords, selected?: boolean, hovered?: boolean) => InteractiveRectangle;
//# sourceMappingURL=InteractiveRectangle.d.ts.map