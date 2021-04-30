let calciContainer = document.querySelector('.calci-container');
let inpuContainer = document.querySelector('.input-container');
let outputContainer = document.querySelector('.output-container');
let btns = document.querySelectorAll('button');
let bottomLine = document.querySelector('.bottom-line');
let output = document.querySelector('.output');
let operators = document.querySelector('.operators');

//night mode
const nightModeClickHandler = () => {
  calciContainer.style.background = '#2b2a27';
  inpuContainer.style.background = '#2f384f';
  btns.forEach(item => {
    item.style.background = '#2b2a27';
    item.style.color = '#d9caca';
  });
  outputContainer.style.color = '#dadde6';
  bottomLine.style.color = '#8ee6e4';
};

//day theme
const lightModeClickHandler = () => {
  calciContainer.style.background = '#fcfcfc';
  inpuContainer.style.background = '#f7cdcd';
  btns.forEach(item => {
    item.style.background = '#d9caca';
    item.style.color = '#2b2a27';
  });
  outputContainer.style.color = '#2b2a27';
  bottomLine.style.color = '#2b2a27';
};

//airthmetic operation
let arr = [];
let res;
const buttonClickHandler = val => {
  if (val >= 0 && val <= 9) {
    let text = document.createTextNode(`${val}`);
    if (arr.length == 1 || arr.length == 3)
      arr.push(arr.pop() * 10 + Number(val));
    else arr.push(Number(val));
    if (arr.length == 3) {
      let second = arr[2];
      let oper = arr[1];
      let first = arr[0];
      let result = output;
      if (oper == '+') result.textContent = `${Number(first) + Number(second)}`;
      else if (oper == '-')
        result.textContent = `${Number(first) - Number(second)}`;
      else if (oper == 'x')
        result.textContent = `${Number(first) * Number(second)}`;
      else if (oper == '/')
        result.textContent = `${Number(first) / Number(second)}`;
      // arr.push(result.textContent);
      res = Number(result.textContent);
    }
    operators.appendChild(text);
  } else if (val == '+' || val == '-' || val == 'x' || val == '/') {
    let span = document.createElement('SPAN');
    let text = document.createTextNode(` ${val} `);
    if (arr.length == 3) {
      arr = [];
      arr.push(res);
    }
    arr.push(val);
    span.classList.add('operands');
    span.appendChild(text);
    operators.appendChild(span);
  }
};

//all clear
const allClearClickHandler = () => {
  operators.textContent = '';
  output.textContent = 0;
  arr = [];
};

//dt click operation
// const dotClickHandler = () => {
//   arr.push(arr.pop() + '.');
//   console.log(arr);
// };
