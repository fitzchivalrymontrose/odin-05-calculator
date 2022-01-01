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

const displayText = document.querySelector('.display-text');
let total = 0;
let firstNum = 0;
let secondNum = 0;
let currentDigit = 0;
let operator = '';
let lastButtonType = '';

displayText.textContent = 0;
const digits = [];

const squares = document.querySelectorAll('button');
squares.forEach(square => {
    square.addEventListener('click', handleClick);
});

function handleClick(e) {
    
    console.log(e.target.id);
    console.log(e.target.classList.value);

    updateDisplay(e.target.textContent);
    
    switch (e.target.classList.value) {
        case 'num-btn':
            lastButtonType = 'numb';
            // add digit to number
            digits.push(e.target.textContent);
            console.log(digits); 
            break;
            // add digit to display
        case 'op-btn':
            lastButtonType = 'op';
            // set operator
            switch(e.target.id) {
                case 'add-btn':
                    operator = 'addition';
                    break;
                case 'subtract-btn':
                    operator = 'subtraction';
                    break;
                case 'multiply-btn':
                    operator = 'multiplication';
                    break;
                case 'divide-btn':
                    operator = 'division';
                    break;
                default:
                    break;
            }
            // save current digit list to number variable .join()           
            firstNum = digits.join('');
            console.log(firstNum);
            // reset digit list
            digits.length = 0;
            break;

            // if there is already a first number
            // save the digits to a second number variable

        case 'func-btn':
            switch (e.target.id) {
                case 'equals-btn':
                    lastButtonType = 'equal';
                case 'clear-btn':
                    lastButtonType = 'clear';
                    displayText.textContent = '0';
                    firstNum = 0;
                    secondNum = 0;
                    digits.length = 0;
                    operator = '';
                    break;
                case 'back-btn':
                    lastButtonType = 'back';
            }
    }
    console.log(operator);
}

function updateDisplay(text) {
    if (displayText.textContent == 0) {
        displayText.textContent = text;
    }
    else {
        displayText.textContent += text;
    }
}

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

function clearBtn() {

}