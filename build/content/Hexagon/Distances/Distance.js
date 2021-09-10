import { html, css } from 'lit';
import { pureLit } from 'pure-lit';
export class DistanceRenderer {
    constructor(printFormula = () => '', printResult = () => '', show = (hexagon) => hexagon.cube.toString()) {
        this.printFormula = printFormula;
        this.printResult = printResult;
        this.show = show;
    }
}
function isTemplateResult(value) {
    return value !== undefined && value !== null && value._$litType$ !== undefined;
}
const styles = css `
:host {
  display: block;
  margin: 5px auto;
  width: 100%;
}
.presenter {
  display: flex;
}
.presenter div {
  flex-grow: 1;
}
.presenter div:first-child {
  text-align: left;
}
.presenter div:last-child {
  text-align: right;
}
`;
export default pureLit('hexagon-distance', (prop) => {
    if (!prop.selected || !prop.hovered)
        return html ``;
    const { show, printFormula, printResult } = prop.renderer;
    const result = printResult();
    const renderedResult = isTemplateResult(result)
        ? result : `= ${result}`;
    return html `${!prop.hideHead ? html `<div>
        ${show(prop.selected)} -> ${show(prop.hovered)}
      </div>` : ""}
      <div class="presenter">
        <div>
          ${printFormula()}
        </div>
        <div>
          ${renderedResult}
        </div>
      </div>`;
}, {
    styles,
    defaults: {
        selected: null,
        hovered: null,
        hideHead: false,
        renderer: new DistanceRenderer()
    }
});
//# sourceMappingURL=Distance.js.map