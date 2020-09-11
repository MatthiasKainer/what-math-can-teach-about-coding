import { customElement, LitElement, css, html, property } from 'lit-element';
import { InteractiveRectangle } from '../InteractiveRectangle';
@customElement('rectangle-manhattan-distance')
export class ManhattanRectangleDistance extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin: 5px auto;
        width: 20rem;
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
  @property({ type: Object })
  selected: InteractiveRectangle | null = null;
  @property({ type: Object })
  hover: InteractiveRectangle | null = null;
  render() {
    if (!this.selected || !this.hover)
      return html``;
    return html`<div>
        ${this.selected.rectangle.toString()} ->
        ${this.hover.rectangle.toString()}
      </div>
      <div class="presenter">
        <div>
          |${this.hover.rectangle.coords.col} -
          ${this.selected.rectangle.coords.col}| +
          |${this.hover.rectangle.coords.row} -
          ${this.selected.rectangle.coords.row}|
        </div>
        <div>
          = ${this.selected.rectangle.manhattanDistance(this.hover.rectangle)}
        </div>
      </div>`;
  }
}
