import { Position } from "../position";
import Heapify from "./heapify";

const id = (c: Position) =>  c.toString();

const shortestPath = (start: Position, goal: Position): {
    path: Position[];
    costs: number;
  } => {
    const frontier = new Heapify();
    frontier.push(start, 0);
    const cameFrom: { [key: string]: string | undefined } = {};
    const costSoFar: { [key: string]: number } = {};
    cameFrom[id(start)] = undefined;
    costSoFar[id(start)] = 0;
  
    while (frontier.length > 0) {
      const current = frontier.pop() as Position;
      if (current.equals(goal)) break;
      if (frontier.length > 1000) {
        throw new Error("No what kinda path are you searching for?!")
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
    let current: Position | null = goal;
    const path: Position[] = [];
    do {
      path.push(current)
      current = Position.fromString(cameFrom[current.toString()])
      if (current) current.system = start.system
    } while (current !== null && !current.equals(startPosition))
  
    return {path : path.reverse(), costs : costSoFar[id(goal)]};
  };

export type Path = {
  path: Position[];
}

export const euclidDistance = (from: Position | null, to: Position | null): Path => {
    if (!from || !to) return {path: []}
    return shortestPath(from.toEuclidPosition(), to.toEuclidPosition())
}

export const manhattanDistance = (start: Position | null, goal: Position | null) => 
  goal && start ? shortestPath(start.toManhattanPosition(), goal.toManhattanPosition()) : {path: []}