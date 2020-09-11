import { LitElement } from 'lit-element';
export interface LineCoords {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}
export declare class Line extends LitElement {
    coords: LineCoords[];
    step: number;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=Line.d.ts.map