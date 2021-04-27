const nightModeClickHandler = () => {
  document.querySelector('.calci-container').style.background = '#2b2a27';
  document.querySelector('.input-container').style.background = '#2f384f';
  document.querySelectorAll('button').forEach(item => {
    item.style.background = '#2b2a27';
    item.style.color = '#d9caca';
  });
  document.querySelector('.output-container').style.color = '#dadde6';
  document.querySelector('.bottom-line').style.color = '#8ee6e4';
};
const lightModeClickHandler = () => {
  document.querySelector('.calci-container').style.background = '#fcfcfc';
  document.querySelector('.input-container').style.background = '#f7cdcd';
  document.querySelectorAll('button').forEach(item => {
    item.style.background = '#d9caca';
    item.style.color = '#2b2a27';
  });
  document.querySelector('.output-container').style.color = '#2b2a27';
  document.querySelector('.bottom-line').style.color = '#2b2a27';
};
