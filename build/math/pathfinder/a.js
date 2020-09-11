import Heapify from "./heapify";
import { Position } from "../position";
const id = (c) => c.toPosition().toString();
export const shortestPath = (start, goal, map, isBlocked) => {
    const frontier = new Heapify();
    frontier.push(start, 0);
    const cameFrom = {};
    const costSoFar = {};
    const visited = [];
    cameFrom[id(start)] = id(start);
    costSoFar[id(start)] = 0;
    if (start.equals(goal))
        return {
            path: []
        };
    if (isBlocked(goal))
        return {
            path: []
        };
    while (frontier.length > 0) {
        const current = frontier.pop();
        if (current.equals(goal))
            break;
        if (frontier.length > 1000) {
            throw new Error("No what kinda path are you searching for?!");
        }
        visited.push(current.toPosition().toString());
        for (const next of current.neighbors().filter(neighbour => !cameFrom[id(neighbour)]).map(neighbour => { var _a; return (_a = map === null || map === void 0 ? void 0 : map.find(i => i.equals(neighbour))) !== null && _a !== void 0 ? _a : neighbour; })) {
            if (isBlocked(next))
                continue;
            if (!visited.some(i => i === id(next)))
                visited.push(id(next));
            const newCost = costSoFar[id(current)] + next.cost();
            if (!costSoFar[id(next)] || newCost < costSoFar[id(next)]) {
                costSoFar[id(next)] = newCost;
                frontier.push(next, newCost + goal.heuristic(next));
                cameFrom[id(next)] = current.toPosition().toString();
            }
        }
    }
    const startPosition = start.toPosition();
    let current = goal.toPosition();
    const path = [];
    do {
        path.push(current);
        current = Position.fromString(cameFrom[current.toString()]);
    } while (current !== null && !current.equals(startPosition));
    return { path: path.reverse(), visited };
};
export const CubeAStarPathTo = shortestPath;
export const CubeAStarDistance = (start, goal, map, isBlocked) => {
    return shortestPath(start, goal, map, isBlocked).path.length;
};
//# sourceMappingURL=a.js.map