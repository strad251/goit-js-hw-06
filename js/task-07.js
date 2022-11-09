const fontControl = document.querySelector('#font-size-control')

const textControl = document.querySelector('#text')

fontControl.oninput = () => {
  textControl.style.fontSize = fontControl.value + 'px';
};