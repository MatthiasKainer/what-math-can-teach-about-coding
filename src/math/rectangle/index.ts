import {Coords, manhattanPointDistance} from '../position';

export class Rectangle {
  distance(other: Rectangle) {
    return Math.sqrt(
      Math.pow(this.coords.col - other.coords.col, 2) +
        Math.pow(this.coords.row - other.coords.row, 2)
    );
  }

  manhattanDistance(other: Rectangle) {
    return manhattanPointDistance(this.coords, other.coords);
  }

  toString() {
    return `${this.coords.col}:${this.coords.row}`;
  }

  constructor(public coords: Coords) {}
}

export const rect = (coords: Coords) => new Rectangle(coords);
