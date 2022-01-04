let currentOperand = '';
let secondOperand = '';
let waitingForSecondOperand = false;

let lastButtonPressed = '';

let currentOperator = '';

const currentOutputDisplay = document.querySelector('#output-current');
const prevOutputDisplay = document.querySelector('#output-prev');

currentOutputDisplay.textContent = '';
prevOutputDisplay.textContent = '';

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
    if (lastButtonPressed === 'equal') {
        allClear();
    }
    if (waitingForSecondOperand === false) {
        currentOperand += e.target.textContent;
    }
    else {
        secondOperand += e.target.textContent; 
    }
    lastButtonPressed = 'num';
    updateDisplay();
}

function handleOperatorBtn(e) {
    lastButtonPressed = 'op';
    if (secondOperand === '') {
        waitingForSecondOperand = true;
        currentOperator = e.target.textContent;
    }
    else {
        currentOperand = operate(currentOperator, currentOperand, secondOperand);
        waitingForSecondOperand = true;
        secondOperand = '';
        currentOperator = e.target.textContent;
    }
    updateDisplay();
}

function handleEqualsBtn(e) {
    lastButtonPressed = 'equal';
    if (currentOperator === '' || currentOperand === '' || secondOperand === '') {
        return;
    }
    else if (lastButtonPressed === 'op') {
        return;
    }
    else {
        currentOperand = operate(currentOperator, currentOperand, secondOperand);
        secondOperand = '';
        currentOperator = '';
        waitingForSecondOperand = false;
        updateDisplay();
    }
}

function handleClearBtn() {
    allClear();
}

function handleBackBtn(e) {

}

/////////////////////////////////////////////////////////
function operate(operator, operand1, operand2) {
    console.log(`Start: op1: ${operand1}, op2: ${operand2}, operator: ${operator}`);
    switch (operator) {
        case '+':
            console.log(`End: op1: ${operand1}, op2: ${operand2}, operator: ${operator}`);
            return parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            console.log(`End: op1: ${operand1}, op2: ${operand2}, operator: ${operator}`);
            return parseFloat(operand1) - parseFloat(operand2);
            break;
        case 'x':
            console.log(`End: op1: ${operand1}, op2: ${operand2}, operator: ${operator}`);
            return parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            console.log(`End: op1: ${operand1}, op2: ${operand2}, operator: ${operator}`);
            return parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            break;
    }
}

function updateDisplay() {
    if (waitingForSecondOperand === false) {
        currentOutputDisplay.textContent = currentOperand;
        prevOutputDisplay.textContent = secondOperand;
    }
    currentOutputDisplay.textContent = secondOperand;
    prevOutputDisplay.textContent = currentOperand;
}

function allClear() {
    currentOperand = '';
    secondOperand = '';
    waitingForSecondOperand = false;
    lastButtonPressed = '';
    currentOperator = '';
    updateDisplay();
}