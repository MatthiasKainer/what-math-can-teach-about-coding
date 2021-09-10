import {css, html} from 'lit';
import {pureLit} from 'pure-lit';
import '../Line';

const styles = css`
  :host {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  svg {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  svg line {
    stroke: var(--colorShow);
    stroke-width: 3;
  }
  slot {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;

export default pureLit(
  'graph-3d',
  () => html`
    <svg>
      <line x1="20%" y1="0%" x2="20%" y2="90%" />
      <line x1="15%" y1="80%" x2="100%" y2="80%" />
      <line x1="0%" y1="100%" x2="50%" y2="50%" />
    </svg>
    <slot></slot>
  `,
  {
    styles
  }
);
