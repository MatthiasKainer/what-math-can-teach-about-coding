import { Cube } from '../cube/cube';
import { PathResult } from './type';
export declare function shortestPath(start: Cube, goal: Cube, isBlocked: (p: Cube) => boolean): PathResult;
export declare const BreadthFirstDistance: (start: Cube, goal: Cube, isBlocked: (p: Cube) => boolean) => number;
//# sourceMappingURL=breath.d.ts.map