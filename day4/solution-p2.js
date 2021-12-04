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

const findWinIdx = (boards, skipIdx) => {
    const wins = [];
    for (let i = 0; i < calls.length; i++) {
        if(skipIdx.includes(i)){
            continue;
        }
        if (hasWon(boards[i])) {
            wins.push(i);
        }
    }
    return wins;
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
const hasWonIdxList = [];

// Run to find last win
for (let i = 0; i < calls.length; i++) {
    for(let boardIdx = 0; boardIdx < boards.length; boardIdx++){
        markBoard(boards[boardIdx], calls[i])
    }
    hasWonIdxList.push(...findWinIdx(boards, hasWonIdxList));
}

const lastToWin = hasWonIdxList[hasWonIdxList.length - 1];
const boards2 = toBoards(input.slice(2, input.length))
let lastCall = 0;
const hasWonIdxList2 = [];

// Run again to stop when last board to win, wins.
for (let i = 0; i < calls.length && !hasWonIdxList2.includes(lastToWin); i++) {
    for(let boardIdx = 0; boardIdx < boards2.length; boardIdx++){
        markBoard(boards2[boardIdx], calls[i])
    }
    lastCall = calls[i];
    hasWonIdxList2.push(...findWinIdx(boards2, hasWonIdxList2));
}

const boardSum = calculateBoardSum(boards2[hasWonIdxList2[hasWonIdxList2.length -1]]);

console.log(boardSum * lastCall)