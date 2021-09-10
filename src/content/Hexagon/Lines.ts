import {Position} from '../../math/position';
import { lineDrawer } from "../Line/lineDrawer";
import { CubeAStarPathTo } from "../../math/pathfinder/a";
import { Cube } from '../../math/cube/cube';
import { PathResult } from '../../math/pathfinder/type';

export type PathStyle = 'taxicab' | 'broad';

const blockedField = (map?: Cube[], blocked?: Cube[]) => (cube: Cube) => {
    if (map) {
        if (!map.some(field => field.equals(cube))) return true;
    }
    if (blocked) {
        if (blocked.some(field => field.equals(cube))) return true;
    }

    return false;
}

export const drawPrecalculatedLine =  (path: PathStyle | null, pathFrom: Position | null, pathResult?: PathResult | null) => {
  switch (path) {
    case 'taxicab':
      if (!pathResult || !pathFrom) return null;
      return lineDrawer(
        pathFrom,
        pathResult,
        "cube"
      );
    default:
      return null;
  }
}

export const drawLine = (path: PathStyle | null, pathFrom: Position | null, pathTo: Position | null, map?: Cube[], blocked? : Cube[]) => {
  switch (path) {
    case 'taxicab':
      if (!pathTo || !pathFrom) return null;
      return lineDrawer(
        pathFrom,
        CubeAStarPathTo(
          pathFrom.toCube(),
          pathTo.toCube(),
          map,
          blockedField(map, blocked)
        ),
        "cube"
      );
    default:
      return null;
  }
};