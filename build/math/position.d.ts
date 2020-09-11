import { Cube } from './cube/cube';
export interface Coords {
    row: number;
    col: number;
}
export interface FuzzyCoords {
    row?: number;
    col?: number;
}
export declare function overlappingCoord(a: Coords, b: FuzzyCoords | null): boolean;
export declare function euclidPointDistance(a: Coords, b: Coords): number;
export declare function manhattanPointDistance(a: Coords, b: Coords): number;
export declare class Position implements Coords {
    row: number;
    col: number;
    system: "manhattan" | "euclid";
    vector(to: Position): Position;
    toCube(): Cube;
    toCoords(): {
        col: number;
        row: number;
    };
    neighbor(direction: number): Position;
    neighbors(): Position[];
    distance(other: Position): number;
    manhattanDistance(other: Position): number;
    add(transpose: Position): Position;
    remove(prevPosition: Position): Position;
    equals(other?: Position | null): boolean;
    toString(): string;
    toEuclidPosition(): Position;
    toManhattanPosition(): Position;
    static fromString(val?: string | null): Position | null;
    constructor(row: number, col: number, system?: "manhattan" | "euclid");
}
export declare const p: ({ row, col }: {
    row: number;
    col: number;
}) => Position;
export declare const positionFromAnyPosition: ({ row, col, }: {
    row: number;
    col: number;
}) => Position;
//# sourceMappingURL=position.d.ts.map