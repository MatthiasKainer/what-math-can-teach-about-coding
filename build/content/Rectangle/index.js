import { css, html } from 'lit';
import { r } from '../../arrays/range';
import { Position } from '../../math/position';
import { statefulRectangle } from './InteractiveRectangle';
import { distanceViewFactory } from './Distance';
import './RectangleElement';
import './RectangleRow';
import { lineDrawer } from '../Line/lineDrawer';
import './ShowPathControls';
import { euclidDistance, manhattanDistance, } from '../../math/pathfinder/RectPathfinder';
import { pureLit, useOnce, useState } from 'pure-lit';
const styles = css `
  :host {
    display: block;
    margin-top: calc(16rem - 20px);
  }
`;
const defaults = {
    show: 'coords',
    distance: 'manhattan',
    selectDefault: null,
    cols: 3,
    showPath: null,
    showPathControls: false,
    euclidPathTo: null,
    manhattanPathTo: null,
};
export default pureLit('rectangle-container', (element) => {
    const initalElements = r(0, element.cols).map((row) => r(0, element.cols).map((col) => statefulRectangle({ row, col })));
    const rectangle = useState(element, initalElements);
    const showPath = useState(element, element.showPath);
    useOnce(element, () => {
        if (element.selectDefault) {
            const selected = Position.fromString(element.selectDefault);
            if (selected) {
                rectangle.set(selectRectangle(rectangle.get(), element.show, selected.row, selected.col));
            }
        }
    });
    const flatRectangles = () => rectangle.get().reduce((prev, curr) => [...prev, ...curr], []);
    const distanceView = distanceViewFactory(element.distance, flatRectangles);
    const drawLine = () => {
        switch (showPath.get()) {
            case 'euclid':
                if (!element.euclidPathTo)
                    return null;
                return lineDrawer(Position.fromString(element.selectDefault), euclidDistance(Position.fromString(element.selectDefault), Position.fromString(element.euclidPathTo)));
            case 'taxicab':
                if (!element.manhattanPathTo)
                    return null;
                return lineDrawer(Position.fromString(element.selectDefault), manhattanDistance(Position.fromString(element.selectDefault), Position.fromString(element.manhattanPathTo)));
            default:
                return null;
        }
    };
    const lines = drawLine();
    return html `${rectangle.get().map((row, rowIndex) => html `<rectangle-row>
          ${row.map((col, colIndex) => {
        var _a;
        return html `<rectangle-element
              .rect="${col}"
              .lines="${lines
            ? (_a = lines[new Position(rowIndex, colIndex).toString()]) !== null && _a !== void 0 ? _a : [] : []}"
              show="${element.show}"
              @click="${() => {
            rectangle.set(selectRectangle(rectangle.get(), element.show, rowIndex, colIndex));
        }}"
              @mouseover=${() => {
            rectangle.set(hoverRectangle(rectangle.get(), element.show, rowIndex, colIndex));
        }}
            ></rectangle-element>`;
    })}
        </rectangle-row>`)}
    ${element.showPathControls
        ? html `
          <rectangle-showpath-controls
            showPath=${showPath.get()}
            @changeShowPath="${(e) => {
            showPath.set(e.detail.showPath);
        }}"
          ></rectangle-showpath-controls>
        `
        : ''}
    ${distanceView}`;
}, {
    styles,
    defaults,
});
function selectRectangle(rectangles, show, selectedRowIndex, selectedColIndex) {
    rectangles.forEach((row, rowIndex) => {
        row.forEach((rectangle, colIndex) => {
            if (rowIndex === selectedRowIndex && colIndex === selectedColIndex) {
                rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, !rectangle.selected);
            }
            else if (show === 'distance') {
                rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, false);
                rectangles[rowIndex][colIndex].distance = rectangles[selectedRowIndex][selectedColIndex].rectangle.manhattanDistance(rectangles[rowIndex][colIndex].rectangle);
            }
            else if (rectangle.selected) {
                rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, false);
            }
        });
    });
    return [...rectangles];
}
function hoverRectangle(rectangles, show, selectedRowIndex, selectedColIndex) {
    if (show === 'distance')
        return rectangles;
    rectangles.forEach((row, rowIndex) => {
        row.forEach((rectangle, colIndex) => {
            if (rowIndex === selectedRowIndex && colIndex === selectedColIndex) {
                rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, rectangle.selected, true);
            }
            else if (rectangle.hovered) {
                rectangles[rowIndex][colIndex] = statefulRectangle(rectangle.rectangle.coords, rectangle.selected, false);
            }
        });
    });
    return [...rectangles];
}
//# sourceMappingURL=index.js.map