import { Rectangle, rect } from "../../math/rectangle";
import { Coords } from "../../math/position";

export class InteractiveRectangle {
    constructor(
      public rectangle: Rectangle,
      public selected: boolean,
      public hovered = false,
      public distance = 0
    ) {}
  }
  
 export const statefulRectangle = (
    coords: Coords,
    selected = false,
    hovered = false
  ) => {
    return new InteractiveRectangle(rect(coords), selected, hovered);
  };
  