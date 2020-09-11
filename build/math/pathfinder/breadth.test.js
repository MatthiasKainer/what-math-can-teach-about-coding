import { BreadthFirstPath } from "./breadth";
import { Cube } from "../cube/cube";
import { expect } from "@open-wc/testing";
import { r } from "../../arrays/range";
import { Position } from "../position";
suite("breadth first test", () => {
    test("should find a way from start to goal", () => {
        const map = r(0, 4).reduce((prev, col) => [...prev, ...r(0, 4).map(row => new Position(row, col).toCube())], []);
        const distance = BreadthFirstPath(new Cube(3, -1, -2), new Cube(0, 0, 0), (p) => !map.some(m => m.equals(p)));
        expect(distance.path.length).equal(3);
    });
});
//# sourceMappingURL=breadth.test.js.map