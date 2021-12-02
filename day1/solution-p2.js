const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt').map(i => +i)

let windows = [];

for (let i = 2; i < input.length; i++){
    windows.push(input[i-2] + input[i-1] + input[i]);
}

let cnt = 0;

for (let i = 1; i < windows.length; i++){
    if(windows[i] > windows[i-1]){
        cnt++;
    }
}

console.log(cnt)