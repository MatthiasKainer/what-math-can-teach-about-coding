import { css, html } from 'lit';
import { pureLit } from 'pure-lit';

export interface LineCoords {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  }

export type Props = {
  coords: LineCoords[]
}


export const styles = css`
:host {
  display: inline-block;
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
  transform: rotate(180deg) scaleX(-1);
}
svg line {
  stroke: var(--colorContrast);
  stroke-width: 3;
}
`
export default pureLit('graph-element-line', () => 
  html`<svg>
    <line x1="0px" y1="0px" x2="100px" y2="100px" />
    <line x1="100px" y1="100px" x2="200px" y2="200px" />
    <line x1="200px" y1="200px" x2="400px" y2="200px" />
  </svg>`,
  { styles }
)