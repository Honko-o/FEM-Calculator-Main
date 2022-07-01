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
  console.log(e.target.innerText);
  calcField.children[0].innerText += e.target.innerText;
  changeContentSpace();
};
const reset = () => {
  calcField.children[0].innerText = '';
  result = 5;
};

// هان الشغل
const calculateExpression = () => {
  let operands = [];
  let numbers = [];
};

numbersBtn.forEach((number) => {
  number.addEventListener('click', printOperationOrNumber);
});
operations.forEach((operation) =>
  operation.addEventListener('click', printOperationOrNumber)
);

delBtn.addEventListener('click', delNumber);
equBtn.addEventListener('click', calculateExpression);
resetBtn.addEventListener('click', reset);

// const subNumber = () => {};
// const mulNumber = () => {};
// const divNumber = () => {};
// const reset = () => {};
// const equalResult = () => {};
