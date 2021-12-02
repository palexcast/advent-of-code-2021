const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt');

let aim = 0;
let depth = 0;
let horizontalPosition = 0;

input.forEach(instruction => {
    const [command, value] = instruction.split(' ');
    switch (command) {
        case 'forward':
            horizontalPosition += +value;
            depth += aim * +value;
            break;
        case 'down':
            aim += +value;
            break;
        case 'up':
            aim -= +value;
            break;
    }
})


console.log(depth * horizontalPosition)