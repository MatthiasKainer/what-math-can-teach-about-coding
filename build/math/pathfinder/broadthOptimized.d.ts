import { Cube } from "../cube/cube";
import { PathResult } from "./type";
export declare const shortestPath: (start: Cube, goal: Cube, isBlocked: (p: Cube) => boolean) => PathResult;
export declare const BroadthOptimizedPathTo: (start: Cube, goal: Cube, isBlocked: (p: Cube) => boolean) => PathResult;
export declare const BroadthOptimizedDistance: (start: Cube, goal: Cube, isBlocked: (p: Cube) => boolean) => number;
//# sourceMappingURL=broadthOptimized.d.ts.map