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
export const lineDrawer = (from, distance, type = 'rectangle') => {
    const result = {};
    if (!from)
        return result;
    const transposeMap = typeMaps[type];
    const toPositionType = (p) => type === 'cube' ? p.toCube() : p;
    const toPositionTypes = [from, ...distance.path].map(toPositionType);
    let prevPosition = null;
    for (const position of toPositionTypes) {
        result[position.toString()] = [];
        if (prevPosition) {
            result[position.toString()].push(transposeMap[prevPosition.remove(position).toString()]);
            result[prevPosition.toString()].push(transposeMap[position.remove(prevPosition).toString()]);
        }
        prevPosition = position;
    }
    return result;
};
//# sourceMappingURL=lineDrawer.js.map