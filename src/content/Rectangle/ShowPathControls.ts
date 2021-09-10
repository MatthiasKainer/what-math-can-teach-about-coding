import { css, html } from 'lit';
import { LitElementWithProps, pureLit, useState } from 'pure-lit';
import { ShowPath } from './index';

const styles = css`
.controls {
}
button {
  display: inline-block;
  margin: 5px 0;
  background: var(--colorShow);
  border: 1px solid var(--colorShow);
  color: var(--colorContrast);
  cursor: pointer;
  transition: all 1s linear;
}
button.active {
  background: var(--colorContrast);
  border: 1px solid var(--colorShow);
  color: var(--colorShow);
}
`;

const dispatchEvent = (element: LitElementWithProps<{showPath: ShowPath}>, showPath: ShowPath) => {
  const event = new CustomEvent('changeShowPath', {
    detail: {
      showPath,
    },
  });
  element.dispatchEvent(event);
}

pureLit('rectangle-showpath-controls', (element: LitElementWithProps<{showPath: ShowPath}>) => {
  const {get, set} = useState(element, element.showPath)

  console.log("active showpath control", )
  const cssClassOrientation = (showPath: ShowPath) => {
    return get() === showPath ? 'active' : '';
  };
  return html` <div class="controls">
    ${['euclid', 'taxicab']
      .map((p) => p as ShowPath)
      .map((path: ShowPath) => html`<button
          class="${cssClassOrientation(path)}"
          @click=${() => {
            dispatchEvent(element, path);
            set(path)
          }}
        >
          ${path}
        </button>`)}
  </div>`;
}, {
  styles,
  defaults: {
    showPath: 'euclid'
  }
})
