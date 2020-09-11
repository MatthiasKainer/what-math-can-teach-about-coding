import { Cube } from '../../math/cube/cube';
import { Coords } from '../../math/position';
export declare class InteractiveHexagon {
    cube: Cube;
    selected: boolean;
    hovered: boolean;
    blocked: boolean;
    distance: number;
    constructor(cube: Cube, selected: boolean, hovered?: boolean, blocked?: boolean, distance?: number);
}
export declare function isCoord(base: Coords | Cube): base is Coords;
export declare const statefulHexagon: (base: Cube | Coords, selected?: boolean, hovered?: boolean) => InteractiveHexagon;
//# sourceMappingURL=InteractiveHexagon.d.ts.map