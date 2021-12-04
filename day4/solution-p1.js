const {getInputFormatted} = require('../utils/helpers.js');
const input = getInputFormatted('input.txt');

const toBoards = (input) => {
    let idx = 0;
    let boardIdx = 0;
    const boards = [];
    while (input[idx] !== undefined) {
        if (input[idx] === '') {
            idx++;
            boardIdx++;
            continue;
        }
        const formattedRow = input[idx].split(' ').filter(item => item !== '').map(number => +number);
        if (boards[boardIdx] === undefined) {
            boards.push([formattedRow])
        } else {
            boards[boardIdx].push(formattedRow);
        }
        idx++;
    }
    return boards;
}

const markBoard = (board, calledNumber) => {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if(board[row][col] === calledNumber){
                board[row][col] = calledNumber * -1;
                return;
            }
        }
    }
}

const hasWon = (board) => {
    for (let row = 0; row < 5; row++) {
        // Check rows
        if (board[row][0] < 0 && board[row][1] < 0 && board[row][2] < 0 && board[row][3] < 0 && board[row][4] < 0) {
            return true;
        }
    }
    for (let col = 0; col < 5; col++) {
        // Check columns
        if (board[0][col] < 0 && board[1][col] < 0 && board[2][col] < 0 && board[3][col] < 0 && board[4][col] < 0) {
            return true;
        }
    }
}

const findWinIdx = (boards) => {
    for (let i = 0; i < calls.length; i++) {
        if (hasWon(boards[i])) {
            return i;
        }
    }
    return -1;
}

const calculateBoardSum = (board) => {
    let sum = 0;
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if(board[row][col] > 0){
                sum += board[row][col];
            }
        }
    }
    return sum;
}

const calls = input[0].split(',').map(number => +number);
const boards = toBoards(input.slice(2, input.length))
let winIdx = -1;
let lastCall = 0;
for (let i = 0; i < calls.length && winIdx === -1; i++) {
    for(let boardIdx = 0; boardIdx < boards.length; boardIdx++){
        markBoard(boards[boardIdx], calls[i])
    }
    lastCall = calls[i];
    winIdx = findWinIdx(boards);
}

const boardSum = calculateBoardSum(boards[winIdx]);

console.log(boardSum * lastCall)