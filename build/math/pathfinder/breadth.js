import { Position } from '../position';
import Queue from './heapify';
const s = (c) => c.toPosition().toString();
export function shortestPath(start, goal, isBlocked) {
    const frontier = new Queue();
    frontier.push(start);
    const cameFrom = {};
    cameFrom[s(start)] = undefined;
    if (isBlocked(goal) || start.equals(goal))
        return {
            path: []
        };
    const validNeighbors = (current) => current.neighbors().filter(field => !isBlocked(field));
    while (frontier.length > 0) {
        const current = frontier.pop();
        if (current.equals(goal))
            break;
        for (const next of validNeighbors(current)) {
            if (cameFrom[s(next)])
                continue;
            frontier.push(next);
            cameFrom[s(next)] = s(current);
        }
    }
    const startPosition = start.toPosition();
    let current = goal.toPosition();
    const path = [];
    do {
        path.push(current);
        current = Position.fromString(cameFrom[current.toString()]);
    } while (current !== null && !current.equals(startPosition));
    return { path: path.reverse() };
}
export const BreadthFirstPath = shortestPath;
export const BreadthFirstDistance = (start, goal, isBlocked) => {
    return shortestPath(start, goal, isBlocked).path.length;
};
//# sourceMappingURL=breadth.js.map