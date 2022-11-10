

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color')
const changeColor = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpanEl.innerHTML = randomColor;

}

changeColorBtn.addEventListener('click', changeColor);