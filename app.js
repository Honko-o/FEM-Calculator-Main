const themeBtn = Array.from(
  document.querySelectorAll('.selection-control button')
);

const changeTheme = (e) => {
  // Get The Number of Clicked Element with indexOf + 1
  const themeNumber = themeBtn.indexOf(e.target) + 1;
  // Remove Theme Classes on The Body
  document.body.classList.remove('theme-1', 'theme-2', 'theme-3');
  // Add Theme Class on The Body
  document.body.classList.add(`theme-${themeNumber}`);
};

const selectActiveTheme = (e) => {
  // Remove Every Active Class
  themeBtn.forEach((el) => el.classList.remove('active'));
  // Add Active Class on the Clicked Element
  e.target.classList.add('active');
  changeTheme(e);
};

themeBtn.forEach((button) =>
  button.addEventListener('click', selectActiveTheme)
);

// Functionality Part
const calcField = document.querySelector('.calc-field');
const numbers = Array.from(document.querySelectorAll('.number'));
const delBtn = document.getElementById('del-btn');
const mulBtn = document.getElementById('mul-btn');
const divBtn = document.getElementById('div-btn');
const addBtn = document.getElementById('add-btn');
const subBtn = document.getElementById('sub-btn');
const resetBtn = document.getElementById('reset-btn');
const equBtn = document.getElementById('equal-btn');

let firstNum = calcField.children[0].innerText;
let secNum = '';
let result = 0;
let isFirstTime = true;
let isAdd = false;
let isSub = false;
let isMul = false;
let isDiv = false;

const changeContentSpace = () => {
  if (
    calcField.children[0].offsetWidth > calcField.offsetWidth - 20 ||
    calcField.children[0].innerText.length >= 12
  ) {
    // console.log('font-size = 1rem');
    calcField.style.fontSize = '1rem';
  } else {
    // console.log('font-size = deleted');
    calcField.style.removeProperty('font-size');
  }
};
const changeSecondOrFirstNum = () => {
  if (!isAdd && !isSub && !isMul && !isDiv) {
    firstNum = +calcField.children[0].innerText;
  } else if (isAdd || isSub || isMul || isAdd) {
    secNum = +calcField.children[0].innerText;
  }
};
const typeNumber = (e) => {
  calcField.children[0].innerText += e.target.innerText;
  changeSecondOrFirstNum();
  changeContentSpace();
};
const delNumber = () => {
  const numberLength = calcField.children[0].innerText.length;
  const numberArray = calcField.children[0].innerText.split('');

  if (numberLength === 0) {
    return;
  }
  numberArray.pop();
  calcField.children[0].innerText = numberArray.join('');
  changeSecondOrFirstNum();
  changeContentSpace();
};
// I am stuck here
const addNumber = () => {
  if (isFirstTime) {
    result += +firstNum + +secNum;
    isFirstTime = false;
  } else {
    result += +secNum;
  }
  if (firstNum === 0 || firstNum === '') {
    return;
  }
  // Here is the Problem
  if (isAdd) {
    calcField.children[0].innerText = result;
    isAdd = false;
  } else {
    calcField.children[0].innerText = '';
  }

  isAdd = true;
  console.log(`firstNum = ${firstNum}`);
  console.table(`secondNum = ${secNum}`);
  console.log(`result = ${result}`);
};

numbers.forEach((number) => number.addEventListener('click', typeNumber));
addBtn.addEventListener('click', addNumber);
delBtn.addEventListener('click', delNumber);

// const subNumber = () => {};
// const mulNumber = () => {};
// const divNumber = () => {};
// const reset = () => {};
// const equalResult = () => {};
