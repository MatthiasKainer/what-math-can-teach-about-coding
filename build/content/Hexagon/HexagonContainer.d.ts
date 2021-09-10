import { LitElementWithProps } from 'pure-lit';
import { FuzzyCoords } from '../../math/position';
import { HexagonLabel } from './Labels';
import { PathStyle } from './Lines';
import { Orientation, Coordinates } from './types';
declare type Props = {
    orientation: Orientation;
    coordinates: Coordinates;
    distance: string | null;
    rows: number;
    cols: number;
    label: HexagonLabel;
    showButtons: boolean;
    highlight: FuzzyCoords | null;
    selectDefault: string | null;
    pathFrom: string | null;
    pathTo: string | null;
    blocked: string[];
    expensive: string[];
    ignoreBlocked: boolean;
    ignoreBoundaries: boolean;
    showPath: PathStyle | null;
};
declare const _default: LitElementWithProps<Props>;
export default _default;
export declare type State<T> = {
    get: () => T;
    set: (update: T) => void;
};
//# sourceMappingURL=HexagonContainer.d.ts.map