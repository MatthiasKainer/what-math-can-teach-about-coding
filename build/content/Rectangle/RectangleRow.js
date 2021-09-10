import { css, html } from 'lit';
import { pureLit } from 'pure-lit';
export default pureLit('rectangle-row', () => html ` <slot></slot> `, {
    styles: css `
    :host {
      display: block;
    }
  `,
});
//# sourceMappingURL=RectangleRow.js.map