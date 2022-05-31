"use strict";
console.log('Connected');


/* * * DOM Elements * * */

const bodyEl = document.querySelector('body');
// actions
const historyBtn = document.querySelector('.result__history');
const darkmodebBtn = document.querySelector('.result__darkmode');
const undoBtn = document.querySelector('.result__undo');
// result
const currentEl = document.querySelector('.result__current');
const mathEl = document.querySelector('.result__math');
const num1El = document.querySelector('.result__num1');
const num2El = document.querySelector('.result__num2');
const resultOperatorEl = document.querySelector('.result__operator');

// operands
const clearBtn = document.querySelector('.operation__clear');
const negetiveBtn = document.querySelector('.operation__negetive');
const remainderBtn = document.querySelector('.operation__remainder');
const divideBtn = document.querySelector('.operation__divide');
const multiplyBtn = document.querySelector('.operation__multiply');
const minusBtn = document.querySelector('.operation__minus');
const addBtn = document.querySelector('.operation__add');
const equalBtn = document.querySelector('.operation__equal');
const numberBtns = document.querySelectorAll('.operation__num');





/* * * Functionalities * * */

let current = 0;
let num1 = 0;
let num2 = 0;
let currentStr = "";


numberBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        currentStr += btn.textContent;
        displayCurrent(currentStr);
    })
});



// display current
function displayCurrent(currentStr) {
    currentEl.textContent = currentStr;
}


// reset 
(function resetValues() {
    current = num1 = num2 = 0
    currentEl.textContent = mathEl.textContent = 0;
})();


// darkmode 
darkmodebBtn.addEventListener('click', function () {
    bodyEl.classList.toggle('dark-mode');
});
