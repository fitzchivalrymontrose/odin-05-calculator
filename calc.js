let currentOperand = '';
let secondOperand = '';
let waitingForSecondOperand = false;
let lastButtonPressed = '';
let currentOperator = '';
let addingTo = '';

const currentOutputDisplay = document.querySelector('#output-current');
const prevOutputDisplay = document.querySelector('#output-prev');
const operatorDisplay = document.querySelector('#output-operator');
currentOutputDisplay.textContent = '';
prevOutputDisplay.textContent = '';
operatorDisplay.textContent = '';

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
        if (e.target.textContent === '.') {
            if (currentOperand.includes('.')) {
                return;
            }
            else {
                currentOperand += '.';
                addingTo = 'current';
            }
        }
        else {        
            currentOperand += e.target.textContent;
            addingTo = 'current';
        }
    }
    else {
        if (e.target.textContent === '.') {
            if (secondOperand.includes('.')) {
                return;
            }
            else {
                secondOperand += '.';
                addingTo = 'current';
            }
        }
        else {        
            secondOperand += e.target.textContent;
            addingTo = 'second';
        }
    }
    lastButtonPressed = 'num';
    updateDisplay();
}
function handleOperatorBtn(e) {
    lastButtonPressed = 'op';
    operatorDisplay.textContent = e.target.textContent;
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
        operatorDisplay.textContent = '';
        waitingForSecondOperand = false;
        updateDisplay();
    }
}
function handleClearBtn() {
    allClear();
}
function handleBackBtn(e) {
    removeDigit();
    updateDisplay();
}
/////////////////////////////////////////////////////////
function operate(operator, operand1, operand2) {
    console.log(`Start: op1: ${operand1}, op2: ${operand2}, operator: ${operator} lbp: ${lastButtonPressed}`);
    switch (operator) {
        case '+':
            return parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            return parseFloat(operand1) - parseFloat(operand2);
            break;
        case 'x':
            return parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            if (operand2 === '0') {
                alert(`it doesn't do that divide by 0 thing`);
                lastButtonPressed = 'equal';
                break;
            }
            else {
                return parseFloat(operand1) / parseFloat(operand2);
                break;
            };    
        default:
            break;
    }
    console.log(`End: op1: ${operand1}, op2: ${operand2}, operator: ${operator} lbp: ${lastButtonPressed}`);
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
    operatorDisplay.textContent = '';
}
function removeDigit() {
    if (addingTo === 'current') {
        currentOperand = currentOperand.slice(0, -1);
    }
    else if (addingTo === 'second') {
        secondOperand = secondOperand.slice(0, -1);
    }
}