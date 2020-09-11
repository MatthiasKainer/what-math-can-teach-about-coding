export const lineDrawer = (from, distance) => {
    const result = {};
    if (!from)
        return result;
    const transposeMap = {
        "0:-1": "north",
        "1:-1": "north-east",
        "1:0": "east",
        "1:1": "south-east",
        "0:1": "south",
        "-1:1": "south-west",
        "-1:0": "west",
        "-1:-1": "north-west",
    };
    let prevPosition = null;
    for (const position of [from, ...distance.path]) {
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