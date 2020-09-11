import { r } from "../../arrays/range";
import { Position } from "../position";
export class Cube {
    constructor(x, y, z, costs = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.costs = costs;
    }
    equals(other) {
        return other !== null &&
            this.x === other.x &&
            this.y === other.y &&
            this.z === other.z;
    }
    add(transpose) {
        const { x, y, z } = this;
        return new Cube(x + transpose.x, y + transpose.y, z + transpose.z);
    }
    remove(cube) {
        const { x, y, z } = this;
        return new Cube(x - cube.x, y - cube.y, z - cube.z);
    }
    vector(to) {
        return new Cube(to.x - this.x, to.y - this.y, to.z - this.z);
    }
    distance(other) {
        return Math.max(Math.abs(this.x - other.x), Math.abs(this.y - other.y), Math.abs(this.z - other.z));
    }
    heuristic(other) {
        return Math.abs(this.x - other.x) +
            Math.abs(this.y - other.y) +
            Math.abs(this.z - other.z);
    }
    range(distance) {
        const results = [];
        for (let x = -distance; x <= distance; x++) {
            for (let y = Math.max(-distance, -x - distance); y <= Math.min(distance, -x + distance); y++) {
                results.push(this.add(new Cube(x, y, -x - y)));
            }
        }
        return results;
    }
    direction(direction) {
        return cubeDirections[direction];
    }
    directionTo(neighbor) {
        const dir = r(0, 5)
            .find((dir) => this.neighbor(dir).equals(neighbor));
        return (dir !== undefined && dir >= 0) ? this.direction(dir) : null;
    }
    neighbor(direction) {
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
        return `${this.x}:${this.y}:${this.z}`;
    }
}
const cubeDirections = [
    new Cube(+1, -1, 0),
    new Cube(+1, 0, -1),
    new Cube(0, +1, -1),
    new Cube(-1, +1, 0),
    new Cube(-1, 0, +1),
    new Cube(0, -1, +1),
];
//# sourceMappingURL=cube.js.map