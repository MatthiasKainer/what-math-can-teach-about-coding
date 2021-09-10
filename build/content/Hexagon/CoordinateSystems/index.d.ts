import { TemplateResult } from 'lit';
import { InteractiveHexagon } from '../InteractiveHexagon';
export declare const coordinateData: (rows: number, cols: number) => InteractiveHexagon[][];
export declare const coordinateRenderer: (name: string, hexagons: InteractiveHexagon[][], onRenderElement: (hexagon: InteractiveHexagon) => TemplateResult<2 | 1>) => TemplateResult<1>[];
//# sourceMappingURL=index.d.ts.map