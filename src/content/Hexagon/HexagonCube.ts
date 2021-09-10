import {css, html} from 'lit';
import {pureLit} from 'pure-lit';

export default pureLit(
  'hexagon-cube',
  () => html`
    <svg>
      <text x="47%" y="25%">z</text>
      <text x="20%" y="60%">x</text>
      <text x="75%" y="60%">y</text>
      <line x1="49%" x2="49%" y1="46%" y2="96%"></line>
      <line x1="3%" y1="25%" x2="49%" y2="46%"></line>
      <line y1="46%" x1="49%" y2="25%" x2="94%"></line>
    </svg>
  `,
  {
    styles: css`
      :host {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
      }
      svg {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
      svg line {
        stroke: var(--colorContrast);
        stroke-width: 1;
      }
    `,
  }
);
