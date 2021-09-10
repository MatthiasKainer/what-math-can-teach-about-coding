import {css, html} from 'lit';
import {pureLit} from 'pure-lit';
import {InteractiveRectangle} from '../InteractiveRectangle';

const styles = css`
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

type Props = {
  selected: InteractiveRectangle | null;
  hover: InteractiveRectangle | null;
};

export default pureLit(
  'rectangle-manhattan-distance',
  ({selected, hover}: Props) => {
    if (!selected || !hover) return html``;
    return html`<div>
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
  },
  { 
    styles
  }
);