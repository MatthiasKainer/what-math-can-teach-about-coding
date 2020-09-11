import { lineDrawer } from "../Line/lineDrawer";
import { CubeAStarPathTo } from "../../math/pathfinder/a";
const blockedField = (map, blocked) => (cube) => {
    if (map) {
        if (!map.some(field => field.equals(cube)))
            return true;
    }
    if (blocked) {
        if (blocked.some(field => field.equals(cube)))
            return true;
    }
    return false;
};
export const drawPrecalculatedLine = (path, pathFrom, pathResult) => {
    switch (path) {
        case 'taxicab':
            if (!pathResult || !pathFrom)
                return null;
            return lineDrawer(pathFrom, pathResult, "cube");
        default:
            return null;
    }
};
export const drawLine = (path, pathFrom, pathTo, map, blocked) => {
    switch (path) {
        case 'taxicab':
            if (!pathTo || !pathFrom)
                return null;
            return lineDrawer(pathFrom, CubeAStarPathTo(pathFrom.toCube(), pathTo.toCube(), map, blockedField(map, blocked)), "cube");
        default:
            return null;
    }
};
//# sourceMappingURL=Lines.js.map