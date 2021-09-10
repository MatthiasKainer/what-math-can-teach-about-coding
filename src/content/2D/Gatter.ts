
import { html } from 'lit';
import { pureLit } from 'pure-lit';
import { r } from '../../arrays/range';

export default pureLit(
  'graph-gatter',
  () =>
    html`${r(0, 4).map((row) =>
      r(0, 4).map(
        (col) =>
          html`<graph-gatter-element
            x="${row}"
            y="${col}"
          ></graph-gatter-element>`
      )
    )}`
);