import { css } from "lit";

export default css`
:host {
  display: block;
  margin-top: 6rem;
}
.row {
  transition: all 500ms linear;
}
.even,
.odd {
  transition: all 500ms linear;
}

.hexagons .row {
  /* reverse the z-index order of the hexagons to deal with weird margins */
  transform: rotateY(1deg);
  transform-origin: 0 0;
  transform-style: preserve-3d;
}
.hexagons.flat .row {
  margin-top: -3.9rem;
}
.hexagons.flat .odd {
  margin-right: 9.25rem;
}
.hexagons.pointy .row {
  margin-top: -2.1rem;
}
.hexagons.pointy .odd {
  margin-right: 5.5rem;
}
`