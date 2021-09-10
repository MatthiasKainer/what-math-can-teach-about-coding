import { Cube } from '../../math/cube/cube';
import { InteractiveHexagon } from './InteractiveHexagon';
import { PathResult } from '../../math/pathfinder/type';
export declare type HexagonLabel = 'none' | 'coords' | 'cube-coords' | 'cube-distance' | 'distance' | 'uncover-cube-breadth-distance' | 'uncover-cube-a*-distance';
declare type Props = {
    distance?: number;
    label?: string;
};
declare const _default: import("pure-lit").LitElementWithProps<Props>;
export default _default;
export declare const showLabel: (cube: Cube, label: HexagonLabel, hexagons: InteractiveHexagon[][], pathResult: PathResult | null) => string | import("lit").TemplateResult<1>;
//# sourceMappingURL=Labels.d.ts.map