import {Cube} from './cube/cube';
import {r} from '../arrays/range';

export interface Coords {
  row: number;
  col: number;
}
export interface FuzzyCoords {
  row?: number;
  col?: number;
}

export function overlappingCoord(a: Coords, b: FuzzyCoords | null) {
  if (!b) return false;
  if (a.col === b.col || !b.col) {
    if (a.row === b.row) return true;
  }
  if (a.row === b.row || !b.row) {
    if (a.col === b.col) return true;
  }

  return false;
}

export function euclidPointDistance(a: Coords, b: Coords) {
  return Math.sqrt(Math.pow(b.col - a.col, 2) + Math.pow(b.row - a.row, 2));
}

export function manhattanPointDistance(a: Coords, b: Coords) {
  return Math.abs(Math.abs(a.col - b.col) + Math.abs(a.row - b.row));
}


const neigboursMaps = {
  manhattan: [
    { row: +0, col: -1 },
    { row: +1, col: +0 },
    { row: +0, col: +1 },
    { row: -1, col: +0 },
  ],
  euclid: [
    { row: +1, col: -1 },
    { row: -1, col: +1 },
    { row: +1, col: +0 },
    { row: +0, col: +1 },
    { row: -1, col: +0 },
    { row: +0, col: -1 },
    { row: -1, col: -1 },
    { row: +1, col: +1 },
  ]
}

export class Position implements Coords {
  vector(to: Position) {
    return new Position(to.row - this.row, to.col - this.col);
  }
  toCube() {
    const x = this.col;
    const z = this.row - (this.col + (this.col & 1)) / 2;
    const y = -x - z;
    return new Cube(x, y, z);
  }

  toCoords() {
    const {row, col} = this;
    return {col, row};
  }

  neighbor(direction: number) {
    const neighbour = p(neigboursMaps[this.system][direction]);
    neighbour.system = this.system;
    return this.add(neighbour);
  }

  neighbors() {
    return r(0, neigboursMaps[this.system].length - 1).map((dir) => this.neighbor(dir));
  }

  distance(other: Position) {
    return euclidPointDistance(this, other);
  }
  manhattanDistance(other: Position) {
    return manhattanPointDistance(this, other);
  }

  add(transpose: Position) {
    const {col, row} = this;
    return new Position(row + transpose.row, col + transpose.col, this.system);
  }
  remove(prevPosition: Position) {
    const {col, row} = this;
    return new Position(row - prevPosition.row, col - prevPosition.col, this.system);
  }

  equals(other?: Position | null) {
    return (other !== undefined && other !== null) && other.col === this.col && other.row === this.row;
  }

  toString() {
    return `${this.col}:${this.row}`;
  }

  toEuclidPosition() {
    return new Position(this.row, this.col, "euclid");
  }
  toManhattanPosition() {
    return new Position(this.row, this.col, "manhattan");
  }

  static fromString(val?: string | null) {
    if (!val) return null;
    const [col, row] = val.split(':').map((i) => parseInt(i, 10));
    return new Position(row, col);
  }

  constructor(
    public row: number,
    public col: number,
    public system: "manhattan" | "euclid" = "manhattan"
  ) {}
}

export const p = ({row, col}: {row: number; col: number}) =>
  new Position(row, col);

export const positionFromAnyPosition = ({
  row,
  col,
}: {
  row: number;
  col: number;
}) => new Position(row, col);


