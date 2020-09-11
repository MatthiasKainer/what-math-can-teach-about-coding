import { customElement, LitElement, css, html, property } from 'lit-element';
@customElement('rectangle-row')
export class RectangleRow extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
  @property({ type: Number })
  row = 0;
  render() {
    return html` <slot></slot> `;
  }
}
