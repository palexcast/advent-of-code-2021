const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt');

let depth = 0;
let horizontalPosition = 0;

input.forEach(instruction => {
    const [command, value] = instruction.split(' ');
    switch (command) {
        case 'forward':
            horizontalPosition += +value;
            break;
        case 'down':
            depth += +value;
            break;
        case 'up':
            depth -= +value;
            break;
    }
})


console.log(depth * horizontalPosition)