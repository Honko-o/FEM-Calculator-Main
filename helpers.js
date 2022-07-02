const changeBodyTheme = (themeNumber) => {
  document.body.classList.remove('theme-1', 'theme-2', 'theme-3');
  // Add Theme Class on The Body
  document.body.classList.add(`theme-${themeNumber}`);
};

const addThemeBtnActiveClass = (themeBtns, themeNumber) => {
  themeBtns.forEach((button) => button.classList.remove('active'));
  themeBtns[themeNumber - 1].classList.add('active');
};

const parseExpression = (str) => Function(`'use strict';return (${str})`);

export default {
  changeBodyTheme,
  addThemeBtnActiveClass,
  parseExpression,
};
