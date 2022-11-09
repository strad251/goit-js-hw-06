

let input = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

input.oninput = () => {
    if (input.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = input.value;
    }
}