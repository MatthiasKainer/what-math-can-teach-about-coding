var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, css, html, property } from 'lit-element';
import "./HexagonCube";
const hexagonCss = css `
  .hexagon {
    cursor: pointer;
    display: inline-block;
    background: var(--colorShow);
    width: 6rem;
    height: 6rem;
    -webkit-clip-path: polygon(
      25% 5%,
      75% 5%,
      100% 50%,
      75% 95%,
      25% 95%,
      0% 50%
    );
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    transition: all 500ms linear;
    z-index: 1;
  }
  .hexagon.flat {
    margin-left: var(--flat-left);
    transform: rotate(0deg);
  }
  .hexagon.hovered {
    background: var(--colorFocus);
  }
  .hexagon.selected {
    background: var(--colorHighlight);
  }
  .hexagon.blocked {
    background: var(--colorContrast);
    color: var(--colorShow);
  }
  
  .hexagon.pointy {
    margin-left: var(--pointy-left);
    transform: rotate(90deg);
  }
  .lineContainer {
    position:relative;
    width: 155%;
    height: 100%;
    margin: 0 auto;
  }
`;
const arrowsCSS = css `
  .arrows {
    display: inline-block;
    position: absolute;
    left: -3rem;
    top: -3rem;
    height: calc(100% + 6rem);
    z-index: 0;
    transition: all 500ms linear;
  }
  .arrows.flat {
    width: calc(100% - var(--flat-left) + 6rem);
    margin-left: var(--flat-left);
    transform: rotate(0deg);
  }
  .arrows.pointy {
    width: calc(100% - var(--pointy-left) + 6rem);
    margin-left: var(--pointy-left);
    transform: rotate(90deg);
  }
  .arrows div {
    text-align: center;
    font-size: 4rem;
  }
  .arrows .up {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .arrows .ne {
    position: absolute;
    top: 4rem;
    width: 100%;
    transform: rotate(60deg);
    left: 8rem;
  }
  .arrows .se {
    position: absolute;
    top: 15rem;
    width: 100%;
    transform: rotate(120deg);
    left: 8rem;
  }
  .arrows .nw {
    position: absolute;
    top: 4rem;
    width: 100%;
    transform: rotate(-60deg);
    right: 8rem;
  }
  .arrows .sw {
    position: absolute;
    top: 15rem;
    width: 100%;
    transform: rotate(-120deg);
    right: 8rem;
  }
  .arrows .down {
    transform: rotate(180deg);
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
const childrenCSS = css `
  .children {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    text-align: center;
    left: 0;
    top: 35%;
    color: var(--colorContrast);
    transition: all 500ms linear;
    z-index: 1;
  }
  .children.top {
    top: 18%;
  }
  .children.active {
    color: var(--colorShow);
  }
  .children.flat {
    width: calc(100% - var(--flat-left));
    margin-left: var(--flat-left);
  }
  .children.pointy {
    width: calc(100% - var(--pointy-left));
    margin-left: var(--pointy-left);
  }
`;
let HexagonElement = class HexagonElement extends LitElement {
    constructor() {
        super(...arguments);
        this.orientation = 'flat';
        this.selected = false;
        this.hovered = false;
        this.blocked = false;
        this.showDirections = false;
        this.showCube = false;
        this.label = "center";
        this.size = null;
        this.lines = [];
    }
    static get styles() {
        return [
            css `
        :host {
          position: relative;
          display: inline-block;

          --flat-left: 3.3rem;
          --pointy-left: -0.5rem;
        }
      `,
            hexagonCss,
            arrowsCSS,
            childrenCSS,
        ];
    }
    _select() {
        this.dispatchEvent(new CustomEvent('select'));
    }
    _hover() {
        this.dispatchEvent(new CustomEvent('hover'));
    }
    _unhover() {
        this.dispatchEvent(new CustomEvent('unhover'));
    }
    render() {
        const size = this.size
            ? `width: ${this.size}; height: ${this.size}; margin-left: calc(${this.size} * 0.55));`
            : '';
        const arrows = this.showDirections
            ? html `<div class="arrows ${this.orientation}">
          <div class="up">⇑</div>
          <div class="ne">⇑</div>
          <div class="se">⇑</div>
          <div class="nw">⇑</div>
          <div class="sw">⇑</div>
          <div class="down">⇑</div>
        </div>`
            : '';
        const cube = this.showCube ? html `<hexagon-cube></hexagon-cube>` : '';
        const lines = () => this.lines.map(line => html `<line-element orientation="${line}"></line-element>`);
        return html `${cube} 
      <div
        class="hexagon ${this.orientation} ${this.selected
            ? 'selected'
            : this.hovered
                ? 'hovered'
                : ''} ${this.blocked ? "blocked" : ""}"
        @mouseover=${() => this._hover()}
        @mouseout=${() => this._unhover()}
        @click=${() => this._select()}
        style="${size}"
      >
        <div class="lineContainer">${lines()}</div>
      </div>
      ${arrows}
      <div
        class="children ${this.orientation} ${this.selected || this.hovered
            ? 'active'
            : ''}
          ${this.label}"
        @mouseover=${() => this._hover()}
        @mouseout=${() => this._unhover()}
        @click=${() => this._select()}
      >
        <slot
          @mouseover=${() => this._hover()}
          @mouseout=${() => this._unhover()}
          @click=${() => this._select()}
        ></slot>
      </div>`;
    }
};
__decorate([
    property()
], HexagonElement.prototype, "orientation", void 0);
__decorate([
    property({ type: Boolean })
], HexagonElement.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean })
], HexagonElement.prototype, "hovered", void 0);
__decorate([
    property({ type: Boolean })
], HexagonElement.prototype, "blocked", void 0);
__decorate([
    property({ type: Boolean })
], HexagonElement.prototype, "showDirections", void 0);
__decorate([
    property({ type: Boolean })
], HexagonElement.prototype, "showCube", void 0);
__decorate([
    property()
], HexagonElement.prototype, "label", void 0);
__decorate([
    property()
], HexagonElement.prototype, "size", void 0);
__decorate([
    property({ type: Array })
], HexagonElement.prototype, "lines", void 0);
HexagonElement = __decorate([
    customElement('hexagon-element')
], HexagonElement);
export { HexagonElement };
//# sourceMappingURL=HexagonElement.js.map