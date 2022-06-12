"use strict";
console.log("Connected");

/* * * DOM Elements * * */
const bodyEl = document.querySelector("body");
// actions
const historyBtn = document.querySelector(".result__history");
const darkmodebBtn = document.querySelector(".result__darkmode");
const undoBtn = document.querySelector(".result__undo");
// result
const operationEl = document.querySelector(".result__operation");
const resultEl = document.querySelector(".result__result");
const resultOperatorEl = document.querySelector(".result__operator");
// operands
const clearBtn = document.querySelector(".operation__clear");
const negetiveBtn = document.querySelector(".operation__negetive");
const remainderBtn = document.querySelector(".operation__remainder");
const divideBtn = document.querySelector(".operation__divide");
const multiplyBtn = document.querySelector(".operation__multiply");
const minusBtn = document.querySelector(".operation__minus");
const addBtn = document.querySelector(".operation__add");
const equalBtn = document.querySelector(".operation__equal");
const numberBtns = document.querySelectorAll(".operation__num");
const markedBtns = document.querySelectorAll(".btn--marked");

/* * * Functionalities * * */
let operationStr = "";
let result = 0;

// Initializer
resetValues();

// Marked Btn EventListener
markedBtns.forEach((el) => {
    el.addEventListener("click", function (e) {
        // to reset for starting again after pressing equal btn
        if (resultEl.textContent === "") {
            resetValues();
        }

        setOperationStr(e.target);
        // checks if it passes the filters in setOperationStr function
        if (operationStr) {
            displayOperation();
            calcResult();
            displayResult();
        }
    });
});

// Equal Btn EventListener
equalBtn.addEventListener("click", function () {
    displayfinalResult();
});

// AC Btn EventListener
clearBtn.addEventListener("click", function () {
    resetValues();
});
// -------------------------------------------------------------------------------------------------------------------------

/* * * Functionalities * * */

// set operationStr
function setOperationStr(obj) {
    //  if its first entery, don't accept operator.
    //  else if the last entry was operator, don't accept operator for current entry.
    if (operationStr === "") {
        !Number(obj.textContent) ? "" : (operationStr += obj.textContent);
    } else if (!Number(operationStr.slice(-1))) {
        !Number(obj.textContent) ? "" : (operationStr += obj.textContent);
    } else {
        operationStr += obj.textContent;
    }
}

// Display operationStr
function displayOperation() {
    operationEl.textContent = operationStr;
}

// Calculate Result
function calcResult() {
    let newStr = operationStr;

    // Operator's Priority
    let regex = /[\*\/%]/g;
    while (regex.test(newStr)) {
        newStr = newStr.replace(
            /(\d+\.?(\d+)?)([\*\/%])(\d+\.?(\d+)?)/,
            function (match, num1, subNum1, operator, num2, subNum2) {
                if (operator === "*") {
                    return num1 * num2;
                } else if (operator === "/") {
                    return num1 / num2;
                } else {
                    return num1 % num2;
                }
            }
        );
    }

    // Operations
    const numbersArr = newStr.match(/\d+\.?(\d+)?/g).map((el) => +el);
    const operatorsArr = newStr.match(/[\*\/%+-]/g);
    result = numbersArr.reduce((pre, curr, i) => {
        switch (operatorsArr[i - 1]) {
            case "+":
                return pre + curr;
            case "-":
                return pre - curr;
            case "*":
                return pre * curr;
            case "/":
                return pre / curr;
            case "%":
                return pre % curr;
            default:
                console.log("The operator is not supported");
                break;
        }
    });
}

// Display Result
function displayResult() {
    resultEl.textContent = result;
}

// Display Final Result
function displayfinalResult() {
    resultEl.textContent = "";
    operationEl.textContent = result;
}

// Reset
function resetValues() {
    operationStr = "";
    operationEl.textContent = resultEl.textContent = 0;
    result = 0;
}

// -------------------------------------------------------------------------------------------------------------------------

// Darkmode
darkmodebBtn.addEventListener("click", function () {
    bodyEl.classList.toggle("dark-mode");
});
