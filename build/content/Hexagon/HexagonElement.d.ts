import { LitElement } from 'lit-element';
import "./HexagonCube";
import { Orientation } from '../Line';
export declare class HexagonElement extends LitElement {
    static get styles(): import("lit-element").CSSResult[];
    orientation: string;
    selected: boolean;
    hovered: boolean;
    blocked: boolean;
    showDirections: boolean;
    showCube: boolean;
    label: "center" | "top";
    size: string | null;
    lines: Orientation[];
    _select(): void;
    _hover(): void;
    _unhover(): void;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=HexagonElement.d.ts.map