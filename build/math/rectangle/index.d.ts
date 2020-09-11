import { Coords } from '../position';
export declare class Rectangle {
    coords: Coords;
    distance(other: Rectangle): number;
    manhattanDistance(other: Rectangle): number;
    toString(): string;
    constructor(coords: Coords);
}
export declare const rect: (coords: Coords) => Rectangle;
//# sourceMappingURL=index.d.ts.map