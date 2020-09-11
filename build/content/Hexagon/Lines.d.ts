import { Position } from '../../math/position';
import { Cube } from '../../math/cube/cube';
import { PathResult } from '../../math/pathfinder/type';
export declare type PathStyle = 'taxicab' | 'broad';
export declare const drawPrecalculatedLine: (path: "taxicab" | "broad" | null, pathFrom: Position | null, pathResult?: PathResult | null | undefined) => import("../Line/lineDrawer").LineResult | null;
export declare const drawLine: (path: "taxicab" | "broad" | null, pathFrom: Position | null, pathTo: Position | null, map?: Cube[] | undefined, blocked?: Cube[] | undefined) => import("../Line/lineDrawer").LineResult | null;
//# sourceMappingURL=Lines.d.ts.map