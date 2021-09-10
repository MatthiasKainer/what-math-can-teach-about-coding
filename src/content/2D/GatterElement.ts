import {css, html} from 'lit';
import {pureLit} from 'pure-lit';
import {stepSize} from './const';

type Props = {
  x: number;
  y: number;
  step: number;
};

export default pureLit(
  'graph-gatter-element',
  ({x, y, step}: Props) =>
    html`<div style="${`left:${x * step}px;bottom:${y * step}px;`}"></div>`,
  {
    defaults: {
      x: 0,
      y: 0,
      step: stepSize,
    },
    styles: [
      css`
        div {
          display: block;
          position: absolute;
          width: ${stepSize}px;
          height: ${stepSize}px;
          border-top: 1px dashed var(--colorFocus);
          border-right: 1px dashed var(--colorFocus);
          z-index: 2;
        }
      `,
    ],
  }
);
