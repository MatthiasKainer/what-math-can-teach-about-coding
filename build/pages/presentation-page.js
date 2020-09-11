import { html, css } from 'lit-element';
import { pureLit } from 'pure-lit';
const styles = css `
  :host {
    position: relative;
    display: inline-block;
    border: solid 1px gray;
    width: 100%;
    height: 100%;
    background-color: var(--colorMain);
  }
  * {
    text-align: center;
    font-family: 'Martel Sans', sans-serif;
  }
  .scroller {
    display: block;
    position: absolute;
    bottom: 0px;
    left: 20px;
    cursor: pointer;
  }
  .scroller.next {
    right: 20px;
    left: auto;
  }
`;
pureLit('presentation-page', (element) => html `<slot></slot> ${element.last
    ? ''
    : html `<div
          class="scroller next"
          @click=${() => {
        var _a;
        (_a = element.nextElementSibling) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    }}
        >
          next
        </div>`}
    ${element.first
    ? ''
    : html `<div
          class="scroller"
          @click=${() => {
        var _a;
        (_a = element.previousElementSibling) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    }}
        >
          prev
        </div>`}`, {
    styles,
    defaults: {
        first: false,
        last: false
    }
});
//# sourceMappingURL=presentation-page.js.map