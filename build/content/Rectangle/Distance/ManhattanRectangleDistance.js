import { css, html } from 'lit';
import { pureLit } from 'pure-lit';
const styles = css `
  :host {
    display: block;
    margin: 5px auto;
    width: 20rem;
  }
  .presenter {
    display: flex;
  }
  .presenter div {
    flex-grow: 1;
  }
  .presenter div:first-child {
    text-align: left;
  }
  .presenter div:last-child {
    text-align: right;
  }
`;
export default pureLit('rectangle-manhattan-distance', ({ selected, hover }) => {
    if (!selected || !hover)
        return html ``;
    return html `<div>
        ${selected.rectangle.toString()} -> ${hover.rectangle.toString()}
      </div>
      <div class="presenter">
        <div>
          |${hover.rectangle.coords.col} - ${selected.rectangle.coords.col}| +
          |${hover.rectangle.coords.row} - ${selected.rectangle.coords.row}|
        </div>
        <div>
          = ${selected.rectangle.manhattanDistance(hover.rectangle)}
        </div>
      </div>`;
}, {
    styles
});
//# sourceMappingURL=ManhattanRectangleDistance.js.map