import { Cube } from "../cube/cube";
import { PathResult } from "./type";
export declare const shortestPath: (start: Cube, goal: Cube, map: Cube[] | undefined, isBlocked: (p: Cube) => boolean) => PathResult;
export declare const CubeAStarPathTo: (start: Cube, goal: Cube, map: Cube[] | undefined, isBlocked: (p: Cube) => boolean) => PathResult;
export declare const CubeAStarDistance: (start: Cube, goal: Cube, map: Cube[] | undefined, isBlocked: (p: Cube) => boolean) => number;
//# sourceMappingURL=a.d.ts.map