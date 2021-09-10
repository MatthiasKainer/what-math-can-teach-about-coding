import { InteractiveHexagon } from "../InteractiveHexagon";
import { html } from "lit";

import "./ManhattanBox"
import "./ManhattanCube"

export const distanceViewFactory = (
    distanceView: string,
    hexagons: InteractiveHexagon[][],
    style = ""
  ) => {
    switch (distanceView) {
      case 'manhattan-box':
        return html`<hexagon-distance-manahattan-box
          style="${style}"
          .hexagons=${hexagons}
        ></hexagon-distance-manahattan-box>`;
      case 'manhattan-cube-hint':
        return html`<hexagon-distance-manahattan-cube-hint
          style="${style}"
          .hexagons=${hexagons}
        ></hexagon-distance-manahattan-cube-hint>`;
      default:
      case 'none':
        return html``;
    }
  };