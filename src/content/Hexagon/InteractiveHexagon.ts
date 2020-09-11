import {Cube} from '../../math/cube/cube';
import {Coords, p} from '../../math/position';

export class InteractiveHexagon {
  constructor(
    public cube: Cube,
    public selected: boolean,
    public hovered = false,
    public blocked = false,
    public distance = 0
  ) {}
}

export function isCoord(base: Coords | Cube): base is Coords {
  return base && !isNaN((base as Coords).col) && !isNaN((base as Coords).row);
}

export const statefulHexagon = (
  base: Coords | Cube,
  selected = false,
  hovered = false
) => {
  return isCoord(base)
    ? new InteractiveHexagon(p(base).toCube(), selected, hovered)
    : new InteractiveHexagon(base as Cube, selected, hovered);
};
