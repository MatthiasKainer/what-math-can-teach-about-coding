import { Cube } from '../../math/cube/cube';
import { InteractiveHexagon } from './InteractiveHexagon';
import { LitElement } from 'lit-element';
import { PathResult } from '../../math/pathfinder/type';
export declare type HexagonLabel = 'none' | 'coords' | 'cube-coords' | 'cube-distance' | 'distance' | 'uncover-cube-breadth-distance' | 'uncover-cube-a*-distance';
export declare class UncoverDistance extends LitElement {
    static get styles(): import("lit-element").CSSResult;
    distance?: number;
    label?: string;
    render(): "" | import("lit-element").TemplateResult;
}
export declare const showLabel: (cube: Cube, label: HexagonLabel, hexagons: InteractiveHexagon[][], pathResult: PathResult | null) => string | import("lit-element").TemplateResult;
//# sourceMappingURL=Labels.d.ts.map