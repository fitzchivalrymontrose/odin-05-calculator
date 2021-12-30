// Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.

//     add
//     subtract
//     multiply
//     divide

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function addBtn(a, b) {
    return a + b;
}

function subtractBtn(a, b) {
    return a - b;
}

function multiplyBtn(a, b) {
    return a * b;
}

function divideBtn(a, b) {
    return a / b;
}

let TOTAL = 0;

function operate(operator, a, b) {
    // choose operator function
    // pass a and b to said function
    // return result

    // chain result into new operation if more inputs are made
    // keep open somehow listening for more, after displaying result

    // do operation, display result, if more input, use result as
    // first of two arguments of the next operation,
    // do the same thing again, operate, display, update? running total
}