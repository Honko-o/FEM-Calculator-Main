import * as helpers from './helpers.js';

const themeBtns = Array.from(
  document.querySelectorAll('.selection-control button')
);

const changeTheme = (e) => {
  const themeNumber = themeBtns.indexOf(e.target) + 1;
  helpers.default.changeBodyTheme(themeNumber);
  window.localStorage.setItem('theme', `${themeNumber}`);
};

const selectClickedActiveTheme = (e) => {
  themeBtns.forEach((el) => el.classList.remove('active'));
  e.target.classList.add('active');
  changeTheme(e);
};

if (window.localStorage.getItem('theme')) {
  const themeNumber = window.localStorage.getItem('theme');
  helpers.default.changeBodyTheme(themeNumber);
  helpers.default.addThemeBtnActiveClass(themeBtns, themeNumber);
} else {
  helpers.default.changeBodyTheme('1');
  themeBtns[0].classList.add('active');
}

themeBtns.forEach((button) =>
  button.addEventListener('click', selectClickedActiveTheme)
);

// Functionality Part
const calcField = document.querySelector('.calc-field');
const numbersBtn = Array.from(document.querySelectorAll('.number'));
const operations = Array.from(document.querySelectorAll('.operation'));
const delBtn = document.getElementById('del-btn');
const resetBtn = document.getElementById('reset-btn');
const equBtn = document.getElementById('equal-btn');
let result = 0;

const changeContentSpace = () => {
  if (
    calcField.children[0].offsetWidth > calcField.offsetWidth - 20 ||
    calcField.children[0].innerText.length >= 12
  ) {
    calcField.style.fontSize = '1rem';
  } else {
    calcField.style.removeProperty('font-size');
  }
};

const delNumber = () => {
  const numberLength = calcField.children[0].innerText.length;
  const numberArray = calcField.children[0].innerText.split('');

  if (numberLength === 0) {
    return;
  }
  numberArray.pop();
  calcField.children[0].innerText = numberArray.join('');
  changeContentSpace();
};

const printOperationOrNumber = (e) => {
  calcField.children[0].innerText += e.target.innerText;
  changeContentSpace();
};

const reset = () => {
  calcField.children[0].innerText = '';
  result = 0;
};

const calculateExpression = () => {
  const expression = calcField.children[0].innerText
    .replace(/,/g, '')
    .replace(/x/g, '*');
  result = Number(helpers.default.parseExpression(expression)()).toLocaleString(
    'en'
  );
  calcField.children[0].innerText = result;
  changeContentSpace();
};

// Event Listeners
numbersBtn.forEach((number) => {
  number.addEventListener('click', printOperationOrNumber);
});
operations.forEach((operation) =>
  operation.addEventListener('click', printOperationOrNumber)
);
delBtn.addEventListener('click', delNumber);
equBtn.addEventListener('click', calculateExpression);
resetBtn.addEventListener('click', reset);
document.addEventListener('keypress', (e) => {
  console.log(e.key);
  switch (e.key) {
    case '.':
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '+':
    case '-':
    case '/':
    case '*':
    case 'x':
      calcField.children[0].innerText += e.key;
      break;
    case '=':
      calculateExpression();
      break;
    case 'Backspace':
      delNumber();
      break;
  }
});
