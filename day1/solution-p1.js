const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt').map(i => +i)

let cnt = 0;


for (let i = 1; i < input.length; i++){
    if(input[i] > input[i-1]){
        cnt++;
    }
}

console.log(cnt)