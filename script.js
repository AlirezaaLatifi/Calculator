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

/* * * Functionalities * * */

let currentStr = "";

// reset
(function resetValues() {
    operationEl.textContent = resultEl.textContent = 0;
})();

// darkmode
darkmodebBtn.addEventListener("click", function () {
    bodyEl.classList.toggle("dark-mode");
});
