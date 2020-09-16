

function slice(string, startingInd, endInd) {
    let result = ""
    if (startingInd < 0) {
        startingInd = string.length + startingInd
    }
    if (endInd < 0) {
        endInd = string.length + endInd
    }
    let i = startingInd;
    if (endInd === undefined) {
        endInd = Infinity
    }
    while (i < string.length && i < endInd) {
        result += string[i]
        i++;
    }
    return result
}

function indexOf(string, sub) {
    let i = 0;
    let index = -1;
    while ((i + sub.length - 1) < string.length) {
        let resultString = slice(string, i, i + sub.length);
        if (resultString === sub) {
            index = i;
            break;
        }
        i++;
    }
    return index
}

exports.slice = slice

exports.indexOf = indexOf;