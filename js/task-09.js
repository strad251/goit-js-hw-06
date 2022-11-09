

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color')
const changeColor = () => {

  document.body.style.backgroundColor = getRandomHexColor();
  colorSpanEl.innerHTML = getRandomHexColor();

}

changeColorBtn.addEventListener('click', changeColor);