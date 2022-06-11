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
// general operation
markedBtns.forEach((el) => {
    el.addEventListener("click", function (e) {
        setOperationStr(e.target);
        displayOperation();
        calcResult();
        displayResult();
    });
});

equalBtn.addEventListener("click", function () {
    displayfinalResult();
});

// functions

function setOperationStr(obj) {
    operationStr += obj.textContent;
}

function displayOperation() {
    operationEl.textContent = operationStr;
}

function calcResult() {
    // calc
    let regex = /[\*\/%]/g;
    let newStr = operationStr;
    console.log(newStr);
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
    console.log(newStr);

    const numbersArr = newStr.match(/\d+\.?(\d+)?/g).map((el) => +el);
    console.log(numbersArr);
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

function displayResult() {
    resultEl.textContent = result;
}
function displayfinalResult() {
    resultEl.textContent = "";
    operationEl.textContent = result;
}

// reset
(function resetValues() {
    operationEl.textContent = resultEl.textContent = 0;
})();

// darkmode
darkmodebBtn.addEventListener("click", function () {
    bodyEl.classList.toggle("dark-mode");
});
