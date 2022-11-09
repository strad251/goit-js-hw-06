

const inputEl = document.querySelector("#validation-input");

const totalLenght = inputEl.getAttribute("data-length");
const intTotallenght = parseInt(totalLenght, 6);

const onInputEl = () => {
  if (inputEl.value.length === intTotallenght) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
  if (inputEl.value.length === 0) {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
  if (inputEl.value.length !== intTotallenght && inputEl.value.length !== 0) {
    inputEl.classList.add("invalid");
  }
};  

inputEl.addEventListener('blur', onInputEl);



