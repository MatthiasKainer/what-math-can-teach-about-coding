import { LitElement, customElement, html } from 'lit-element';
import { r } from '../../arrays/range';
@customElement('graph-gatter')
export class Gatter extends LitElement {
    render() {
        return html`${r(0, 4).map((row) => r(0, 4).map((col) => html`<graph-gatter-element
            x="${row}"
            y="${col}"
          ></graph-gatter-element>`))}`;
    }
}
