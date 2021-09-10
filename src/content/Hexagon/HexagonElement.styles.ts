import { css } from "lit";

export const host = css`
:host {
  position: relative;
  display: inline-block;

  --flat-left: 3.3rem;
  --pointy-left: -0.5rem;
}
`
export const hexagonCss = css`
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

export const arrowsCSS = css`
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
export const childrenCSS = css`
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