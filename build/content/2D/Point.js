import { css, html } from 'lit';
import { pureLit } from 'pure-lit';
import { stepSize } from './const';
export const styles = css `
  .point {
    display: block;
    position: absolute;
    border: 3px solid var(--colorHighlight);
    z-index: 4;
  }
  .label {
    display: block;
    position: absolute;
    margin-left: -0.5rem;
    margin-bottom: 1rem;
    line-height: 1rem;
    font-size: 1rem;
    z-index: 3;
  }
`;
export default pureLit('graph-point', ({ x, y, step }) => {
    const position = `left:${x * step - 2}px;bottom:${y * step - 2}px;`;
    return html `
      <div class="point" style="${position}"></div>
      <div class="label" style="${position}">x: ${x}<br />y:${y}</div>
    `;
}, {
    styles,
    defaults: {
        x: 0,
        y: 0,
        step: stepSize,
    },
});
//# sourceMappingURL=Point.js.map