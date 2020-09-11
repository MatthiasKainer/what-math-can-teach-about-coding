import { LitElement } from 'lit-element';
import { Orientation } from './calculatorFactor';
export declare class Line extends LitElement {
    static get styles(): import("lit-element").CSSResult[];
    orientation: Orientation;
    parent: 'rectangle' | 'hexagon';
    color: string | null;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=Line.d.ts.map