const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt');

const findOxygenGeneratorRating = (numbers, pos = 0) => {
    if(numbers.length === 1){
        return numbers[0];
    }
    const mostCommon = mostCommonInPos(numbers, pos) ?? '1';
    const filteredNumbers = numbers.filter(number => number[pos] === mostCommon);
    return findOxygenGeneratorRating(filteredNumbers, pos + 1);
};


const findCo2ScrubberRating = (numbers, pos = 0) => {
    if(numbers.length === 1){
        return numbers[0];
    }
    const mostCommon = mostCommonInPos(numbers, pos) ?? '1';
    const leastCommon = mostCommon === '1' ? '0' : '1';
    const filteredNumbers = numbers.filter(number => number[pos] === leastCommon);
    return findCo2ScrubberRating(filteredNumbers, pos + 1);
};


const mostCommonInPos = (numbers, pos) => {
    const ones = numbers.filter(number => number[pos] === '1').length;
    const zeros = numbers.filter(number => number[pos] === '0').length;
    if(ones === zeros){
        return undefined;
    }
    return ones > zeros ? '1' : '0';
}

const oxygenGeneratorRatingBits = findOxygenGeneratorRating(input);
const co2ScrubberRatingBits = findCo2ScrubberRating(input);

const oxygenGeneratorRating = parseInt(oxygenGeneratorRatingBits, 2);
const co2ScrubberRating = parseInt(co2ScrubberRatingBits, 2);

console.log(oxygenGeneratorRating * co2ScrubberRating)