import { css, html } from 'lit';
import {pureLit} from 'pure-lit';
import {InteractiveRectangle} from '../InteractiveRectangle';

const styles = css`
  :host {
    display: block;
    margin: 5px auto;
    width: 70vw;
  }
  .presenter {
    display: flex;
    font-size: 2rem;
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

const defaults = {
  selected: null,
  hover: null
}

export default pureLit('rectangle-distance', ({selected, hover}: Props) => {
  if (!selected || !hover) return html``;
  return html`<div>
      ${selected.rectangle.toString()} ->
      ${hover.rectangle.toString()}
    </div>
    <div class="presenter">
      <div>
        sqrt((${hover.rectangle.coords.col} -
        ${selected.rectangle.coords.col})^2 +
        (${hover.rectangle.coords.row} -
        ${selected.rectangle.coords.row})^2)
      </div>
      <div>
        = ${selected.rectangle.distance(hover.rectangle).toFixed(2)}
      </div>
    </div>`;
}, { styles, defaults });