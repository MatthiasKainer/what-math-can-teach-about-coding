import { html } from "lit";
export * from "./ManhattanRectangleDistance";
export * from "./RectangleDistance";
export const distanceViewFactory = (distanceView, flatRectangles) => {
    switch (distanceView) {
        case 'manhattan':
        default:
            return html `<rectangle-manhattan-distance
          .selected="${flatRectangles().find((r) => r.selected)}"
          .hover="${flatRectangles().find((r) => r.hovered)}"
        ></rectangle-manhattan-distance>`;
            break;
        case 'geometry':
            return html `<rectangle-distance
          .selected="${flatRectangles().find((r) => r.selected)}"
          .hover="${flatRectangles().find((r) => r.hovered)}"
        ></rectangle-distance>`;
        case 'none':
            return html ``;
    }
};
//# sourceMappingURL=index.js.map