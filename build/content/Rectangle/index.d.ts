import './RectangleElement';
import './RectangleRow';
import './ShowPathControls';
import { LitElementWithProps } from 'pure-lit';
export declare type ShowPath = 'euclid' | 'taxicab';
declare type Distance = 'manhattan';
declare type Show = 'distance' | 'coords' | 'none';
declare type Props = {
    show: Show;
    distance: Distance;
    selectDefault: string | null;
    cols: number;
    showPath: ShowPath | null;
    showPathControls: boolean;
    euclidPathTo: string | null;
    manhattanPathTo: string | null;
};
declare const _default: LitElementWithProps<Props>;
export default _default;
//# sourceMappingURL=index.d.ts.map