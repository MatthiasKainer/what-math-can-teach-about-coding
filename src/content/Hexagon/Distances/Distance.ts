import {html, css, TemplateResult} from 'lit';
import { pureLit } from 'pure-lit';
import {InteractiveHexagon} from '../InteractiveHexagon';

export class DistanceRenderer {
  constructor(
    public printFormula: () => string | TemplateResult = () => '',
    public printResult: () => string | TemplateResult = () => '',
    public show: (hexagon: InteractiveHexagon) => string = (hexagon) =>
      hexagon.cube.toString()
  ) {}
}

function isTemplateResult(value: string | TemplateResult): value is TemplateResult {
  return value !== undefined && value !== null && (value as TemplateResult)._$litType$ !== undefined
}

type Props = {
  selected: InteractiveHexagon | null;
  hovered: InteractiveHexagon | null;

  hideHead : boolean;

  renderer: DistanceRenderer;
}

const styles = css`
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

export default pureLit('hexagon-distance', (prop: Props) => {
  if (!prop.selected || !prop.hovered) return html``;
    const {show, printFormula, printResult} = prop.renderer;
    const result = printResult()
    const renderedResult = isTemplateResult(result) 
      ? result : `= ${result}`
    return html`${!prop.hideHead ? html`<div>
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
})