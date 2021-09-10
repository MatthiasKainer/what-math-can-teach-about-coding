import './Gatter';
import './GatterElement';
import './Point';
import './Line';
import {css, html} from 'lit';
import {pureLit} from 'pure-lit';

type Props = {
  withGatter: boolean;
  withLines: boolean;
};

const styles = css`
  :host {
    position: relative;
    display: block;
    border-left: 4px solid var(--colorShow);
    border-bottom: 4px solid var(--colorShow);
    width: 33%;
    height: 60%;
    margin: 0 auto;
    z-index: 4;
  }
`;

export default pureLit(
  'graph-element',
  ({withGatter, withLines}: Props) =>
    html`
      <graph-point x="1" y="1"></graph-point>
      <graph-point x="2" y="2"></graph-point>
      <graph-point x="2" y="4"></graph-point>
      <graph-point x="4" y="2"></graph-point>
      ${withGatter ? html`<graph-gatter></graph-gatter>` : html``}
      ${withLines
        ? html`<graph-element-line
            .coords="${[{x1: 1, x2: 2, y1: 1, y2: 2}]}"
          ></graph-element-line>`
        : ''}
    `,
  {
    styles,
    defaults: {
      withGatter: false,
      withLines: false,
    },
  }
);
