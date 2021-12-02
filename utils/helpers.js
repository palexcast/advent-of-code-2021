const fs = require('fs');

const getInput = (file) => {
    const path = `${file}`;
    return fs.readFileSync(path, 'utf-8');
};


const getInputFormatted = (file) => {
    const input = getInput(file);
    const formatted = input.split('\n');
    if(formatted[formatted.length - 1].trim() === ''){
        return formatted.slice(0, formatted.length - 1);
    }
    return formatted;
};

const unique = (...arr) => {
    if (!arr || arr.length === 0 || (arr.length === 1 && !arr[0])) {
        return;
    }
    const content = [].concat(...arr);
    return Array.from(new Set(content));
}

const intersect = (...arr) => {
    if (!arr || arr.length === 0 || (arr.length === 1 && !arr[0])) {
        return;
    }
    if(arr.length === 1){
        return arr[0];
    }
    return arr[0].filter(val => arr.every(innerArr => innerArr.indexOf(val) >= 0))
}

const copy = (obj) => JSON.parse(JSON.stringify(obj));

module.exports = {
    getInput,
    getInputFormatted,
    unique,
    intersect,
    copy
}