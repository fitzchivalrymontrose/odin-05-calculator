function addBtn(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtractBtn(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiplyBtn(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divideBtn(a, b) {
    return parseFloat(a) / parseFloat(b);
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

function logAll() {
    console.log(`operator: ${operator}`);
    console.log(`firstNum: ${firstNum}`);
    console.log(`secondNum: ${secondNum}`);
    console.log(`digits: ${digits}`);
    console.log(`lastButtonType: ${lastButtonType}`);
    console.log(`total: ${total}`);

}

const squares = document.querySelectorAll('button');
squares.forEach(square => {
    square.addEventListener('click', handleClick);
});

function handleClick(e) {
    
    logAll();

    
    
    switch (e.target.classList.value) {
        case 'num-btn':
            if (lastButtonType === 'op') {
                displayText.textContent = 0;
                digits.length = 0;
            }
            lastButtonType = 'numb';
            updateDisplay(e.target.textContent);
            // add digit to number
            digits.push(e.target.textContent);
            logAll(); 
            break;
            // add digit to display
        case 'op-btn':
            lastButtonType = 'op';
            // set operator
            if (operator == '') {
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
                        return;
                }
            }
            // save current digit list to number variable .join()           
            if (firstNum == 0) {
                firstNum = digits.join('');
                logAll();
            }
            else {
                if (secondNum == 0) {
                    secondNum = digits.join('');
                    total = operate(operator, firstNum, secondNum);
                    // operator = '';
                    displayText.textContent = total;
                    firstNum = total;
                    secondNum = 0;
                    logAll();                }
                else {

                    secondNum = digits.join('');
                    // total = operate(operator, firstNum, secondNum);
                    // displayText.textContent = total;
                    firstNum = total;
                    // secondNum = 0;
                    logAll();
                }
                

            }
            
            // reset digit list
            digits.length = 0;
            break;

            // if there is already a first number
            // save the digits to a second number variable

        case 'func-btn':
            switch (e.target.id) {
                case 'equals-btn':
                    lastButtonType = 'equal';
                    secondNum = digits.join('')
                    // run operation with current numbers and operation
                    total = operate(operator, firstNum, secondNum);
                    displayText.textContent = total;
                    logAll();                    
                    break;
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
                    if (digits.length > 1) {
                        digits.pop();
                        displayText.textContent = digits.join('');
                        break;
                    }
                    else {
                        digits.pop();
                        displayText.textContent = '0';
                    } 
                    break;
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
    let sum;
    switch (operator) {
        case 'addition':
            // operator = '';
            sum = addBtn(a, b);
            displayText.textContent = sum;
            return sum;
        case 'subtraction':
            // operator = '';
            sum = subtractBtn(a, b);
            displayText.textContent = sum;
            return sum;
        case 'multiplication':
            // operator = '';
            sum = multiplyBtn(a, b);
            displayText.textContent = sum;
            return sum;
        case 'division':
            // operator = '';
            sum = divideBtn(a, b);
            displayText.textContent = sum;
            return sum;
    }
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