import { Cube } from "../cube/cube";
import { PathResult } from "./type";
export declare const shortestPath: (start: Cube, goal: Cube, isBlocked: (p: Cube) => boolean) => PathResult;
export declare const CubeAStarPathTo: (start: Cube, goal: Cube, isBlocked: (p: Cube) => boolean) => PathResult;
export declare const CubeAStarDistance: (start: Cube, goal: Cube, isBlocked: (p: Cube) => boolean) => number;
//# sourceMappingURL=broadth.d.ts.map