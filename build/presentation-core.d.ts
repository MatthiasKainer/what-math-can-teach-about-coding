import { LitElement } from 'lit-element';
import './pages/presentation-page';
import './pages/presentation-created-with';
import './content/Rectangle';
import './content/2D/Graph';
import './content/Hexagon';
import './content/3D/Graph';
import { HexagonContainer } from './content/Hexagon';
export declare class PresentationCore extends LitElement {
    static styles: import("lit-element").CSSResult;
    pathsTo: {
        first: string;
        second: {
            ignoreObstacle: boolean;
            target: string;
        };
        third: {
            target: string;
            label: string;
        };
        fourth: {
            target: string;
            label: string;
        };
        fifth: {
            target: string;
            label: string;
        };
    };
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'presentation-core': PresentationCore;
        'hexagon-container': HexagonContainer;
    }
}
//# sourceMappingURL=presentation-core.d.ts.map