const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt').map(line => line.split(''));

let gammaRate = '';
let epsilonRate = '';

for (let posInLine = 0; posInLine < input[0].length; posInLine++) {
    let zeroBitCount = 0;
    let oneBitCount = 0;
    for (let lineNr = 0; lineNr < input.length; lineNr++) {
        switch (input[lineNr][posInLine]) {
            case '0':
                zeroBitCount++;
                break;
            case '1':
                oneBitCount++;
                break;
        }
    }
    if (zeroBitCount > oneBitCount) {
        gammaRate += 0;
        epsilonRate += 1;
    } else {
        gammaRate += 1;
        epsilonRate += 0;
    }
}

const gammaRateDec = parseInt(gammaRate, 2);
const epsilonRateDec = parseInt(epsilonRate, 2);

console.log(gammaRateDec * epsilonRateDec)