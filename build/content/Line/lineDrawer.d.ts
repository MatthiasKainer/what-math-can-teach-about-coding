import { CardinalPoints } from '.';
import { Path } from '../../math/pathfinder/RectPathfinder';
import { Position } from '../../math/position';
export declare type LineResult = {
    [key: string]: CardinalPoints[];
};
export declare type LineType = 'cube' | 'rectangle';
export declare const lineDrawer: (from: Position | null, distance: Path, type?: LineType) => LineResult;
//# sourceMappingURL=lineDrawer.d.ts.map