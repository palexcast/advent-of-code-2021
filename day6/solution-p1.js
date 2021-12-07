const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt')[0].split(',');

const days = [{day: 0, nr: 0}, {day: 1, nr: 0}, {day: 2, nr: 0}, {day: 3, nr: 0}, {day: 4, nr: 0}, {day: 5, nr: 0}, {day: 6, nr: 0}, {day: 7, nr: 0}, {day: 8, nr: 0}];

const tick = () => {
    const spawns = days[0].nr;
    for(let i = 0; i <= 7; i++){
        days[i].nr = days[i + 1].nr;
    }
    days[8].nr = spawns;
    days[6].nr += spawns;
}

input.forEach(fish => {
    days[+fish].nr++;
})

for (let i = 1; i <= 80; i++) {
    tick();
}

const sum = days.map(day => day.nr).reduce((a, b) => a + b, 0);

console.log(sum);