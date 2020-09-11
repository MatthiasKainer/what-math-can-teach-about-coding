import {LitElement, customElement, html, property, css, TemplateResult} from 'lit-element';
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
  return value !== undefined && value !== null && (value as TemplateResult).processor !== undefined
}

@customElement('hexagon-distance')
export class Distance extends LitElement {
  static get styles() {
    return css`
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
  }

  @property({type: Object})
  selected: InteractiveHexagon | null = null;
  @property({type: Object})
  hovered: InteractiveHexagon | null = null;

  @property({type: Boolean})
  hideHead = false

  @property({type: Object})
  renderer: DistanceRenderer = new DistanceRenderer();

  render() {
    if (!this.selected || !this.hovered) return html``;
    const {show, printFormula, printResult} = this.renderer;
    const result = printResult()
    const renderedResult = isTemplateResult(result) 
      ? result : `= ${result}`
    return html`${!this.hideHead ? html`<div>
        ${show(this.selected)} -> ${show(this.hovered)}
      </div>` : ""}
      <div class="presenter">
        <div>
          ${printFormula()}
        </div>
        <div>
          ${renderedResult}
        </div>
      </div>`;
  }
}
