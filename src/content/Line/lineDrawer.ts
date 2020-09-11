import {Orientation} from '.';
import {Path} from '../../math/pathfinder/RectPathfinder';
import {Position} from '../../math/position';
import {Cube} from '../../math/cube/cube';

export type LineResult = {[key: string]: Orientation[]};

export type LineType = 'cube' | 'rectangle';

const typeMaps = {
  rectangle: {
    '0:-1': 'north',
    '1:-1': 'north-east',
    '1:0': 'east',
    '1:1': 'south-east',
    '0:1': 'south',
    '-1:1': 'south-west',
    '-1:0': 'west',
    '-1:-1': 'north-west',
  },
  cube: {
    '0:1:-1': 'north',
    '1:0:-1': 'north-east',
    '1:-1:0': 'south-east',
    '0:-1:1': 'south',
    '-1:0:1': 'south-west',
    '-1:1:0': 'north-west',
  },
};

type MinimalPosition = {
  toString: () => string;
  remove: (other: MinimalPosition) => MinimalPosition;
}

export const lineDrawer = (
  from: Position | null,
  distance: Path,
  type: LineType = 'rectangle'
) => {
  const result: LineResult = {};
  if (!from) return result;

  const transposeMap: {[key: string]: Orientation} = typeMaps[type] as {
    [key: string]: Orientation;
  };

  const toPositionType = (p: Position): Position | Cube =>
    type === 'cube' ? p.toCube() : p;
  const toPositionTypes: MinimalPosition[] = [from, ...distance.path].map(toPositionType) as unknown as MinimalPosition[]

  let prevPosition: MinimalPosition | null = null;
  for (const position of toPositionTypes) {
    result[position.toString()] = [];
    if (prevPosition) {
      result[position.toString()].push(
        transposeMap[prevPosition.remove(position).toString()]
      );
      result[prevPosition.toString()].push(
        transposeMap[position.remove(prevPosition).toString()]
      );
    }
    prevPosition = position;
  }

  return result;
};
