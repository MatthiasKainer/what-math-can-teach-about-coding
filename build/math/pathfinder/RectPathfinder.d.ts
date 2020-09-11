import { Position } from "../position";
export declare type Path = {
    path: Position[];
};
export declare const euclidDistance: (from: Position | null, to: Position | null) => Path;
export declare const manhattanDistance: (start: Position | null, goal: Position | null) => {
    path: Position[];
    costs: number;
} | {
    path: never[];
};
//# sourceMappingURL=RectPathfinder.d.ts.map