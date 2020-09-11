import { manhattanPointDistance } from '../position';
export class Rectangle {
    constructor(coords) {
        this.coords = coords;
    }
    distance(other) {
        return Math.sqrt(Math.pow(this.coords.col - other.coords.col, 2) +
            Math.pow(this.coords.row - other.coords.row, 2));
    }
    manhattanDistance(other) {
        return manhattanPointDistance(this.coords, other.coords);
    }
    toString() {
        return `${this.coords.col}:${this.coords.row}`;
    }
}
export const rect = (coords) => new Rectangle(coords);
//# sourceMappingURL=index.js.map