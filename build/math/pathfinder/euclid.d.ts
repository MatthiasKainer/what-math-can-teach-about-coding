import { Position } from "../position";
export declare type Path = {
    path: Position[];
    costs: number;
};
export declare const euclidDistance: (from: Position | null, to: Position | null) => Path;
export declare const manhattanPath: (start: Position | null, goal: Position | null) => {
    path: Position[];
    costs: number;
};
//# sourceMappingURL=euclid.d.ts.map