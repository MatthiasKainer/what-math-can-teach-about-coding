import './HexagonCube';
import { Orientation } from './types';
import { CardinalPoints } from '../Line';
import { LitElementWithProps } from 'pure-lit';
declare type LabelOrientation = 'center' | 'top';
declare type Props = {
    orientation: Orientation;
    selected: boolean;
    hovered: boolean;
    blocked: boolean;
    showDirections: boolean;
    showCube: boolean;
    label: LabelOrientation;
    size: string | null;
    lines: CardinalPoints[];
};
declare const _default: LitElementWithProps<Props>;
export default _default;
//# sourceMappingURL=HexagonElement.d.ts.map