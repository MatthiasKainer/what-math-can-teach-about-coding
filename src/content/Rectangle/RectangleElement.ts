import {css, html} from 'lit';
import {InteractiveRectangle} from './InteractiveRectangle';
import {CardinalPoints} from '../Line';
import '../Line/Line';
import {pureLit} from 'pure-lit';

const styles = css`
  :host {
    position: relative;
    display: inline-block;
  }
  div {
    display: inline-block;
    width: 4rem;
    height: calc(4rem - 1rem);
    background: var(--colorShow);
    cursor: pointer;
    border: 2px solid var(--colorMain);
    padding-top: 1rem;
    transition: all 250ms linear;
  }
  div.active {
    background-color: var(--colorHighlight);
    color: var(--colorShow);
  }
  div.hovered {
    background-color: var(--colorFocus);
    color: var(--colorShow);
  }
`;

type Props = {
  rect: InteractiveRectangle | null;
  show: 'distance' | 'coords' | 'none';
  lines: CardinalPoints[];
};

const defaults: Props = {
  rect: null,
  show: 'coords',
  lines: [],
};

export default pureLit(
  'rectangle-element',
  ({rect, show, lines}: Props) => {
    const classes = [
      rect?.selected ? 'active' : '',
      rect?.hovered ? 'hovered' : '',
    ];
    const labels = () => {
      switch (show) {
        case 'distance':
          return html`${rect?.distance.toString()}`;
        case 'none':
          return html`&nbsp;`;
        case 'coords':
        default:
          return html`${rect?.rectangle.toString()}`;
      }
    };

    return html`${lines.map(
        (line) => html`<line-element orientation="${line}"></line-element>`
      )}
      <div class="${classes.join(' ')}">
        ${labels()}
      </div>`;
  },
  {styles, defaults}
);
