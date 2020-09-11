import {property, customElement, LitElement, css, html} from 'lit-element';
import {InteractiveRectangle} from './InteractiveRectangle';
import { Orientation } from '../Line';
import "../Line/Line"

@customElement('rectangle-element')
export class RectangleElement extends LitElement {
  static get styles() {
    return css`
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
  }
  @property({type: Object})
  rect: InteractiveRectangle | null = null;

  @property()
  show: 'distance' | 'coords' | 'none' = 'coords';

  @property({type: Array})
  lines: Orientation[] = []

  render() {
    const classes = [
      this.rect?.selected ? 'active' : '',
      this.rect?.hovered ? 'hovered' : '',
    ];
    const labels = () => {
      switch (this.show) {
        case 'distance':
          return html`${this.rect?.distance.toString()}`;
        case 'none':
          return html`&nbsp;`;
        case 'coords':
        default:
          return html`${this.rect?.rectangle.toString()}`;
      }
    };

    const lines = () => 
      this.lines.map(line => html`<line-element orientation="${line}"></line-element>`)

    return html`${lines()}<div class="${classes.join(' ')}">
      ${labels()}
    </div>`;
  }
}
