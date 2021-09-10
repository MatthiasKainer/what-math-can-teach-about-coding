import { html } from 'lit';
import './HexagonCube';
import { host, arrowsCSS, childrenCSS, hexagonCss, } from './HexagonElement.styles';
import { pureLit } from 'pure-lit';
const styles = [host, hexagonCss, arrowsCSS, childrenCSS];
const defaults = {
    orientation: 'flat',
    selected: false,
    hovered: false,
    blocked: false,
    showDirections: false,
    showCube: false,
    label: 'center',
    size: null,
    lines: [],
};
export default pureLit('hexagon-element', (element) => {
    const dispatchEvent = (name) => element.dispatchEvent(new CustomEvent(name));
    const size = element.size
        ? `width: ${element.size}; height: ${element.size}; margin-left: calc(${element.size} * 0.55));`
        : '';
    const arrows = element.showDirections
        ? html `<div class="arrows ${element.orientation}">
          <div class="up">⇑</div>
          <div class="ne">⇑</div>
          <div class="se">⇑</div>
          <div class="nw">⇑</div>
          <div class="sw">⇑</div>
          <div class="down">⇑</div>
        </div>`
        : '';
    const cube = element.showCube ? html `<hexagon-cube></hexagon-cube>` : '';
    const lines = () => element.lines.map((line) => html `<line-element orientation="${line}"></line-element>`);
    return html `${cube}
      <div
        class="hexagon ${element.orientation} ${element.selected
        ? 'selected'
        : element.hovered
            ? 'hovered'
            : ''} ${element.blocked ? 'blocked' : ''}"
        @mouseover=${() => dispatchEvent('hover')}
        @mouseout=${() => dispatchEvent('unhover')}
        @click=${() => dispatchEvent('select')}
        style="${size}"
      >
        <div class="lineContainer">${lines()}</div>
      </div>
      ${arrows}
      <div
        class="children ${element.orientation} ${element.selected ||
        element.hovered
        ? 'active'
        : ''}
      ${element.label}"
        @mouseover=${() => dispatchEvent('hover')}
        @mouseout=${() => dispatchEvent('unhover')}
        @click=${() => dispatchEvent('select')}
      >
        <slot
          @mouseover=${() => dispatchEvent('hover')}
          @mouseout=${() => dispatchEvent('unhover')}
          @click=${() => dispatchEvent('select')}
        ></slot>
      </div>`;
}, {
    styles,
    defaults
});
//# sourceMappingURL=HexagonElement.js.map