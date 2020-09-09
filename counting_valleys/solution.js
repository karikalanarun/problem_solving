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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    const values = {
        "U": 1,
        "D": -1
    }
    let totalValleys = 0;
    let currentAlt = 0;
    for (let index = 0; index < s.length; index++) {
        const char = s[index];
        currentAlt += values[char]
        if (currentAlt === 0) {
            if (values[char] === 1) {
                totalValleys++;
            }
        }
    }
    return totalValleys
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
