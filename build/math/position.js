import { Cube } from './cube/cube';
import { r } from '../arrays/range';
export function overlappingCoord(a, b) {
    if (!b)
        return false;
    if (a.col === b.col || !b.col) {
        if (a.row === b.row)
            return true;
    }
    if (a.row === b.row || !b.row) {
        if (a.col === b.col)
            return true;
    }
    return false;
}
export function euclidPointDistance(a, b) {
    return Math.sqrt(Math.pow(b.col - a.col, 2) + Math.pow(b.row - a.row, 2));
}
export function manhattanPointDistance(a, b) {
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
};
export class Position {
    constructor(row, col, system = "manhattan") {
        this.row = row;
        this.col = col;
        this.system = system;
    }
    vector(to) {
        return new Position(to.row - this.row, to.col - this.col);
    }
    toCube() {
        const x = this.col;
        const z = this.row - (this.col + (this.col & 1)) / 2;
        const y = -x - z;
        return new Cube(x, y, z);
    }
    toCoords() {
        const { row, col } = this;
        return { col, row };
    }
    neighbor(direction) {
        const neighbour = p(neigboursMaps[this.system][direction]);
        neighbour.system = this.system;
        return this.add(neighbour);
    }
    neighbors() {
        return r(0, neigboursMaps[this.system].length - 1).map((dir) => this.neighbor(dir));
    }
    distance(other) {
        return euclidPointDistance(this, other);
    }
    manhattanDistance(other) {
        return manhattanPointDistance(this, other);
    }
    add(transpose) {
        const { col, row } = this;
        return new Position(row + transpose.row, col + transpose.col, this.system);
    }
    remove(prevPosition) {
        const { col, row } = this;
        return new Position(row - prevPosition.row, col - prevPosition.col, this.system);
    }
    equals(other) {
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
    static fromString(val) {
        if (!val)
            return null;
        const [col, row] = val.split(':').map((i) => parseInt(i, 10));
        return new Position(row, col);
    }
}
export const p = ({ row, col }) => new Position(row, col);
export const positionFromAnyPosition = ({ row, col, }) => new Position(row, col);
//# sourceMappingURL=position.js.map