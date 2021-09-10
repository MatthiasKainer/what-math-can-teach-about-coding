import {css, html} from 'lit';
import {r} from '../../arrays/range';
import {Position} from '../../math/position';
import {InteractiveRectangle, statefulRectangle} from './InteractiveRectangle';
import {distanceViewFactory} from './Distance';

import './RectangleElement';
import './RectangleRow';
import {lineDrawer, LineResult} from '../Line/lineDrawer';
import './ShowPathControls';
import {
  euclidDistance,
  manhattanDistance,
} from '../../math/pathfinder/RectPathfinder';
import {LitElementWithProps, pureLit, useOnce, useState} from 'pure-lit';

export type ShowPath = 'euclid' | 'taxicab';
type Distance = 'manhattan';

const styles = css`
  :host {
    display: block;
    margin-top: calc(16rem - 20px);
  }
`;

type Show = 'distance' | 'coords' | 'none';

type Props = {
  show: Show;
  distance: Distance;
  selectDefault: string | null;
  cols: number;
  showPath: ShowPath | null;
  showPathControls: boolean;
  euclidPathTo: string | null;
  manhattanPathTo: string | null;
};

const defaults: Props = {
  show: 'coords',
  distance: 'manhattan',
  selectDefault: null,
  cols: 3,
  showPath: null,
  showPathControls: false,
  euclidPathTo: null,
  manhattanPathTo: null,
};

export default pureLit(
  'rectangle-container',
  (element: LitElementWithProps<Props>) => {
    const initalElements = r(0, element.cols).map((row) =>
      r(0, element.cols).map((col) => statefulRectangle({row, col}))
    );
    const rectangle = useState(
      element,
      initalElements
    );
    const showPath = useState(
      element,
      element.showPath
    );

    useOnce(element, () => {
      if (element.selectDefault) {
        const selected = Position.fromString(element.selectDefault);
        if (selected) {
          rectangle.set(
            selectRectangle(
              rectangle.get(),
              element.show,
              selected.row,
              selected.col
            )
          );
        }
      }
    });

    const flatRectangles = () =>
      rectangle.get().reduce((prev, curr) => [...prev, ...curr], []);

    const distanceView = distanceViewFactory(element.distance, flatRectangles);

    const drawLine = () => {
      switch (showPath.get()) {
        case 'euclid':
          if (!element.euclidPathTo) return null;
          return lineDrawer(
            Position.fromString(element.selectDefault!),
            euclidDistance(
              Position.fromString(element.selectDefault!),
              Position.fromString(element.euclidPathTo)
            )
          );
        case 'taxicab':
          if (!element.manhattanPathTo) return null;
          return lineDrawer(
            Position.fromString(element.selectDefault!),
            manhattanDistance(
              Position.fromString(element.selectDefault!),
              Position.fromString(element.manhattanPathTo)
            )
          );
        default:
          return null;
      }
    };

    const lines: LineResult | null = drawLine();
    return html`${rectangle.get().map(
      (row, rowIndex) =>
        html`<rectangle-row>
          ${row.map(
            (col, colIndex) => html`<rectangle-element
              .rect="${col}"
              .lines="${lines
                ? lines[new Position(rowIndex, colIndex).toString()] ?? []
                : []}"
              show="${element.show}"
              @click="${() => {
                rectangle.set(
                  selectRectangle(
                    rectangle.get(),
                    element.show,
                    rowIndex,
                    colIndex
                  )
                );
              }}"
              @mouseover=${() => {
                rectangle.set(
                  hoverRectangle(rectangle.get(), element.show, rowIndex, colIndex)
                );
              }}
            ></rectangle-element>`
          )}
        </rectangle-row>`
    )}
    ${element.showPathControls
      ? html`
          <rectangle-showpath-controls
            showPath=${showPath.get()}
            @changeShowPath="${(e: CustomEvent) => {
              showPath.set(e.detail.showPath);
            }}"
          ></rectangle-showpath-controls>
        `
      : ''}
    ${distanceView}`;
  },
  {
    styles,
    defaults,
  }
);

function selectRectangle(
  rectangles: InteractiveRectangle[][],
  show: Show,
  selectedRowIndex: number,
  selectedColIndex: number
) {
  rectangles.forEach((row, rowIndex) => {
    row.forEach((rectangle, colIndex) => {
      if (rowIndex === selectedRowIndex && colIndex === selectedColIndex) {
        rectangles[rowIndex][colIndex] = statefulRectangle(
          rectangle.rectangle.coords,
          !rectangle.selected
        );
      } else if (show === 'distance') {
        rectangles[rowIndex][colIndex] = statefulRectangle(
          rectangle.rectangle.coords,
          false
        );
        rectangles[rowIndex][colIndex].distance = rectangles[selectedRowIndex][
          selectedColIndex
        ].rectangle.manhattanDistance(rectangles[rowIndex][colIndex].rectangle);
      } else if (rectangle.selected) {
        rectangles[rowIndex][colIndex] = statefulRectangle(
          rectangle.rectangle.coords,
          false
        );
      }
    });
  });
  return [...rectangles];
}

function hoverRectangle(
  rectangles: InteractiveRectangle[][],
  show: Show,
  selectedRowIndex: number,
  selectedColIndex: number
) {
  if (show === 'distance') return rectangles;
  rectangles.forEach((row, rowIndex) => {
    row.forEach((rectangle, colIndex) => {
      if (rowIndex === selectedRowIndex && colIndex === selectedColIndex) {
        rectangles[rowIndex][colIndex] = statefulRectangle(
          rectangle.rectangle.coords,
          rectangle.selected,
          true
        );
      } else if (rectangle.hovered) {
        rectangles[rowIndex][colIndex] = statefulRectangle(
          rectangle.rectangle.coords,
          rectangle.selected,
          false
        );
      }
    });
  });
  return [...rectangles];
}
