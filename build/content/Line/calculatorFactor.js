const c = (x1, y1, x2, y2) => {
    return { x1, y1, x2, y2 };
};
const rectangleCalculator = (orientation) => {
    switch (orientation) {
        case 'south':
            return c('50%', '100%', '50%', '50%');
        case 'west':
            return c('0%', '50%', '50%', '50%');
        case 'east':
            return c('100%', '50%', '50%', '50%');
        case 'north-west':
            return c('0%', '0%', '50%', '50%');
        case 'south-west':
            return c('0%', '100%', '50%', '50%');
        case 'north-east':
            return c('100%', '0%', '50%', '50%');
        case 'south-east':
            return c('100%', '100%', '50%', '50%');
        case 'north':
        default:
            return c('50%', '0%', '50%', '50%');
    }
};
export const calculatorFactory = (geometricEntity) => {
    switch (geometricEntity) {
        case 'rectangle':
        default:
            return rectangleCalculator;
    }
};
//# sourceMappingURL=calculatorFactor.js.map