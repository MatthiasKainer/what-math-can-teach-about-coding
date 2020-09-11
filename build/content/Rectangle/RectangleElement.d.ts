import { LitElement } from 'lit-element';
import { InteractiveRectangle } from './InteractiveRectangle';
import { Orientation } from '../Line';
import "../Line/Line";
export declare class RectangleElement extends LitElement {
    static get styles(): import("lit-element").CSSResult;
    rect: InteractiveRectangle | null;
    show: 'distance' | 'coords' | 'none';
    lines: Orientation[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=RectangleElement.d.ts.map