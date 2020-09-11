import { LitElement, TemplateResult } from 'lit-element';
import { InteractiveHexagon } from '../InteractiveHexagon';
export declare class DistanceRenderer {
    printFormula: () => string | TemplateResult;
    printResult: () => string | TemplateResult;
    show: (hexagon: InteractiveHexagon) => string;
    constructor(printFormula?: () => string | TemplateResult, printResult?: () => string | TemplateResult, show?: (hexagon: InteractiveHexagon) => string);
}
export declare class Distance extends LitElement {
    static get styles(): import("lit-element").CSSResult;
    selected: InteractiveHexagon | null;
    hovered: InteractiveHexagon | null;
    hideHead: boolean;
    renderer: DistanceRenderer;
    render(): TemplateResult;
}
//# sourceMappingURL=Distance.d.ts.map