import { Position } from "../position";
export declare class Cube {
    x: number;
    y: number;
    z: number;
    costs: number;
    equals(other: Cube): boolean;
    add(transpose: Cube): Cube;
    remove(cube: Cube): Cube;
    vector(to: Cube): Cube;
    distance(other: Cube): number;
    heuristic(other: Cube): number;
    range(distance: number): Cube[];
    direction(direction: number): Cube;
    directionTo(neighbor: Cube): Cube | null;
    neighbor(direction: number): Cube;
    neighbors(): Cube[];
    cost(): number;
    toPosition(): Position;
    toCoords(): {
        col: number;
        row: number;
    };
    toString(): string;
    constructor(x: number, y: number, z: number, costs?: number);
}
//# sourceMappingURL=cube.d.ts.map