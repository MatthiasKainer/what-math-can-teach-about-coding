import { LitElement } from 'lit-element';
import './RectangleElement';
import './RectangleRow';
import "./ShowPathControls";
export declare type ShowPath = 'euclid' | 'taxicab';
export declare class RectangleContainer extends LitElement {
    rectangles: import("./InteractiveRectangle").InteractiveRectangle[][];
    static get styles(): import("lit-element").CSSResult;
    constructor(rectangles?: import("./InteractiveRectangle").InteractiveRectangle[][]);
    selectRectangle(selectedRowIndex: number, selectedColIndex: number): void;
    hoverRectangle(selectedRowIndex: number, selectedColIndex: number): void;
    show: 'distance' | 'coords' | 'none';
    distance: string;
    selectDefault: string | null;
    cols: number;
    showPath: ShowPath | null;
    showPathControls: boolean;
    euclidPathTo: string | null;
    manhattanPathTo: string | null;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map