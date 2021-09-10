import { TemplateResult } from 'lit';
import { InteractiveHexagon } from '../InteractiveHexagon';
export declare class DistanceRenderer {
    printFormula: () => string | TemplateResult;
    printResult: () => string | TemplateResult;
    show: (hexagon: InteractiveHexagon) => string;
    constructor(printFormula?: () => string | TemplateResult, printResult?: () => string | TemplateResult, show?: (hexagon: InteractiveHexagon) => string);
}
declare const _default: import("pure-lit").LitElementWithProps<{
    selected: null;
    hovered: null;
    hideHead: boolean;
    renderer: DistanceRenderer;
}>;
export default _default;
//# sourceMappingURL=Distance.d.ts.map