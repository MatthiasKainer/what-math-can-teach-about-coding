import { LitElement } from 'lit-element';
import { FuzzyCoords } from '../../math/position';
import './HexagonElement';
import './HexagonControls';
import { InteractiveHexagon } from './InteractiveHexagon';
import { HexagonLabel } from './Labels';
import { PathStyle } from './Lines';
export declare class HexagonContainer extends LitElement {
    hexagons: InteractiveHexagon[][];
    static get styles(): import("lit-element").CSSResult;
    constructor(hexagons: InteractiveHexagon[][]);
    orientation: 'flat' | 'pointy';
    coordinates: string;
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
    connectedCallback(): void;
    _selectHandled(hexagon: InteractiveHexagon): boolean;
    apply(hexagon: InteractiveHexagon, field: 'selected' | 'hovered', value: boolean, only?: boolean): void;
    select(hexagon: InteractiveHexagon): void;
    hover(hexagon: InteractiveHexagon): void;
    unhover(hexagon: InteractiveHexagon): void;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map