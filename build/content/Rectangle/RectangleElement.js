import { css, html } from 'lit';
import '../Line/Line';
import { pureLit } from 'pure-lit';
const styles = css `
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
const defaults = {
    rect: null,
    show: 'coords',
    lines: [],
};
export default pureLit('rectangle-element', ({ rect, show, lines }) => {
    const classes = [
        (rect === null || rect === void 0 ? void 0 : rect.selected) ? 'active' : '',
        (rect === null || rect === void 0 ? void 0 : rect.hovered) ? 'hovered' : '',
    ];
    const labels = () => {
        switch (show) {
            case 'distance':
                return html `${rect === null || rect === void 0 ? void 0 : rect.distance.toString()}`;
            case 'none':
                return html `&nbsp;`;
            case 'coords':
            default:
                return html `${rect === null || rect === void 0 ? void 0 : rect.rectangle.toString()}`;
        }
    };
    return html `${lines.map((line) => html `<line-element orientation="${line}"></line-element>`)}
      <div class="${classes.join(' ')}">
        ${labels()}
      </div>`;
}, { styles, defaults });
//# sourceMappingURL=RectangleElement.js.map