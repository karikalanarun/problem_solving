'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function hourGlassElementsAtIndex(arr, i, j) {
    const firstRowElements = arr[i].slice(j, j + 3)
    const secondRowElements = arr[i + 1] ? arr[i + 1].slice(j + 1, j + 2) : []
    const lastRowElements = arr[i + 2] ? arr[i + 2].slice(j, j + 3) : []
    return [...firstRowElements, ...secondRowElements, ...lastRowElements]
}

function hourGlassSumAtIndex(arr, i, j) {
    let hourGlass = hourGlassElementsAtIndex(arr, i, j)
    return hourGlass.length === 7 ? hourGlass.reduce((a, b) => a + b, 0) : null;
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let sum = hourGlassSumAtIndex(arr, i, j);
            max = sum !== null ? Math.max(max, sum) : max
        }
    }
    return max
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
