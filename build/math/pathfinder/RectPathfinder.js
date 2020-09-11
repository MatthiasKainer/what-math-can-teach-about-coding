import { Position } from "../position";
import Heapify from "./heapify";
const id = (c) => c.toString();
const shortestPath = (start, goal) => {
    const frontier = new Heapify();
    frontier.push(start, 0);
    const cameFrom = {};
    const costSoFar = {};
    cameFrom[id(start)] = undefined;
    costSoFar[id(start)] = 0;
    while (frontier.length > 0) {
        const current = frontier.pop();
        if (current.equals(goal))
            break;
        if (frontier.length > 1000) {
            throw new Error("No what kinda path are you searching for?!");
        }
        for (const next of current.neighbors()) {
            const distance = goal.distance(next);
            const newCost = costSoFar[id(current)] + distance;
            if (!costSoFar[id(next)] || newCost < costSoFar[id(next)]) {
                costSoFar[id(next)] = newCost;
                const priority = newCost + distance;
                frontier.push(next, priority);
                cameFrom[id(next)] = current.toString();
            }
        }
    }
    const startPosition = start;
    let current = goal;
    const path = [];
    do {
        path.push(current);
        current = Position.fromString(cameFrom[current.toString()]);
        if (current)
            current.system = start.system;
    } while (current !== null && !current.equals(startPosition));
    return { path: path.reverse(), costs: costSoFar[id(goal)] };
};
export const euclidDistance = (from, to) => {
    if (!from || !to)
        return { path: [] };
    return shortestPath(from.toEuclidPosition(), to.toEuclidPosition());
};
export const manhattanDistance = (start, goal) => goal && start ? shortestPath(start.toManhattanPosition(), goal.toManhattanPosition()) : { path: [] };
//# sourceMappingURL=RectPathfinder.js.map