const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt')[0].split(',').map(number => +number);

const max = Math.max(...input);
const min = Math.min(...input);

let fuelConsumptions = [];

for(let pos = min; pos <= max; pos++){
    let fuel = 0;
    input.forEach(crab => {
        fuel +=  Math.abs(crab - pos);
    })
    fuelConsumptions.push(fuel);
}

console.log(Math.min(...fuelConsumptions));