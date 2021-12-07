const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt')[0].split(',').map(number => +number);

const max = Math.max(...input);
const min = Math.min(...input);

const fuelConsumed = (crabPos, pos) => {
    const stepsToMove = Math.abs(crabPos - pos);
    let fuelConsumed = 0;
    for(let i = 1; i <= stepsToMove; i++){
        fuelConsumed += i;
    }
    return fuelConsumed;
}

let fuelConsumptions = [];

for(let pos = min; pos <= max; pos++){
    let fuel = 0;
    input.forEach(crab => {
        fuel += fuelConsumed(crab, pos);
    })
    fuelConsumptions.push(fuel);
}

console.log(Math.min(...fuelConsumptions));