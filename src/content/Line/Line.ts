import {html, css} from 'lit';
import { pureLit } from 'pure-lit';
import {CardinalPoints, calculatorFactory} from './calculatorFactor';

const LineStyle = css`
:host {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
svg {
  width: 100%;
  height: 100%;
}
svg line {
  stroke: var(--colorContrast);
  stroke-width: 5;
}
`;

type Props = {
  orientation: CardinalPoints;
  parent: 'rectangle' | 'hexagon';
  color: string | null;
}

const defaults: Props = {
  orientation: "none",
  parent: 'rectangle',
  color: null
}

export default pureLit("line-element", ({orientation, parent, color}: Props) => {
  if (orientation === 'none') return html``;
    const lineCoords = calculatorFactory(parent)(orientation);
    return html`<svg>
      <line
        x1="${lineCoords.x1}"
        y1="${lineCoords.y1}"
        x2="${lineCoords.x2}"
        y2="${lineCoords.y2}"
        style="${color ? "stroke:${color};" : ""}"
      />
    </svg>`;
},
{
  styles: [LineStyle],
  defaults
})
