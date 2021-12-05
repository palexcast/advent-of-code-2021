const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt').map(nr => nr.split(' -> ')).map(([from, to]) => {
    const [x1, y1] = from.split(',');
    const [x2, y2] = to.split(',');
    return {
        x1, y1, x2, y2
    }
});


const increment = (x, y) => {
    const key = `${x}-${y}`;
    map[key] = (map[key] ?? 0) + 1;
}

const drawLine = (x1, y1, x2, y2) => {
    if (x1 === x2) {
        const from = y1 > y2 ? y2 : y1;
        const to = y1 > y2 ? y1 : y2;
        for (let y = from; y <= to; y++) {
            increment(x1, y);
        }
    } else if (y1 === y2) {
        const from = x1 > x2 ? x2 : x1;
        const to = x1 > x2 ? x1 : x2;
        for (let x = from; x <= to; x++) {
            increment(x, y1);
        }
    } else {
        const diff = x1 > x2 ? x1 - x2 : x2 - x1;
        const incX = x1 < x2;
        const incY = y1 < y2;
        for (let i = 0; i <= diff; i++) {
            increment(x1 + (incX ? i : -i), y1 + (incY ? i : -i));
        }
    }
}

const map = {};

for (let i = 0; i < input.length; i++) {
    const {x1, y1, x2, y2} = input[i];
    drawLine(+x1, +y1, +x2, +y2);
}

let cnt = Object.values(map).filter(val => val > 1).length;

console.log(cnt)