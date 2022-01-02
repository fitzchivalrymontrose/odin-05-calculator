let currentOutput = '';
let prevOutput = '';
let currentOperand = '';
let prevOperand = '';
let currentOperator = '';
let prevOperator = '';

const currentOutputDisplay = document.querySelector('#output-current');
const prevOutputDisplay = document.querySelector('#output-prev');

const numBtns = document.querySelectorAll('.num-btn');
const opBtns = document.querySelectorAll('.op-btn');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');
const backBtn = document.querySelector('#back-btn');

numBtns.forEach(num => {
    num.addEventListener('click', handleNumberBtn);
});
opBtns.forEach(op => {
    op.addEventListener('click', handleOperatorBtn);
});
equalsBtn.addEventListener('click', handleEqualsBtn);
clearBtn.addEventListener('click', handleClearBtn);
backBtn.addEventListener('click', handleBackBtn);

function handleNumberBtn(e) {
    console.log(e.target);
    // add digit to currentOperand
    
    // update display
    updateDisplay();
}

function handleOperatorBtn(e) {
    console.log(e.target);
    currentOperator = e.target.textContent;
    // update display
    // complete previous operation, if there is one
    // set operator
    // update current and prevOperands
}

function handleEqualsBtn(e) {
    console.log(e.target);
    // perform operation
    // update display
    // update current/prevOperants
}

function handleClearBtn(e) {
    console.log(e.target);
    // clear display
    // clear all variables
}

function handleBackBtn(e) {
    console.log(e.target);
}

/////////////////////////////////////////////////////////
function operate(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            return parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            return operparseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            return parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            break;
    }
}

function updateDisplay() {
    currentOutputDisplay.textContent = currentOperand;
    prevOutputDisplay.textContent = prevOperand;
}

