import { r } from "../../arrays/range";
import { Position } from "../position";

export class Cube {
  equals(other: Cube) {
      return other !== null && 
        this.x === other.x && 
        this.y === other.y &&
        this.z === other.z
  }
  add(transpose: Cube) {
    const { x, y, z } = this;
    return new Cube(x + transpose.x, y + transpose.y, z + transpose.z);
  }
  remove(cube: Cube) {
    const { x, y, z } = this;
    return new Cube(x - cube.x, y - cube.y, z - cube.z);
  }
  vector(to: Cube) {
      return new Cube(
        to.x - this.x,
        to.y - this.y,
        to.z - this.z,
      )
  }

  distance(other: Cube) {
    return Math.max(
      Math.abs(this.x - other.x),
      Math.abs(this.y - other.y),
      Math.abs(this.z - other.z)
    );
  }
  heuristic(other: Cube) {
    return Math.abs(this.x - other.x) +
      Math.abs(this.y - other.y) +
      Math.abs(this.z - other.z)
  }

  range(distance: number) {
    const results: Cube[] = [];
    for (let x = -distance; x <= distance; x++) {
      for (
        let y = Math.max(-distance, -x - distance);
        y <= Math.min(distance, -x + distance);
        y++
      ) {
        results.push(this.add(new Cube(x, y, -x - y)));
      }
    }
    return results;
  }

  direction(direction: number) {
    return cubeDirections[direction];
  }

  directionTo(neighbor: Cube): Cube | null {
    const dir = r(0, 5)
      .find((dir) => this.neighbor(dir).equals(neighbor))
    return (dir !== undefined && dir >= 0) ? this.direction(dir) : null;
  }

  neighbor(direction: number) {
    return this.add(this.direction(direction));
  }

  neighbors() {
    return r(0, 5).map((dir) => this.neighbor(dir));
  }

  cost() {
    return this.costs;
  }

  toPosition() {
    const col = this.x;
    const row = this.z + (this.x + (this.x & 1)) / 2;
    return new Position(row, col);
  }

  toCoords() {
    return this.toPosition().toCoords();
  }

  toString() {
    return `${this.x}:${this.y}:${this.z}`
  }

  constructor(public x: number, public y: number, public z: number, public costs = 1) {}
}

const cubeDirections = [
  new Cube(+1, -1, 0),
  new Cube(+1, 0, -1),
  new Cube(0, +1, -1),
  new Cube(-1, +1, 0),
  new Cube(-1, 0, +1),
  new Cube(0, -1, +1),
];
