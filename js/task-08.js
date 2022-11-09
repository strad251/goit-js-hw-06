

const loginFormEl = document.querySelector('.login-form')

const inputEls = document.querySelectorAll('input')

const userData = {};

const onLoginFormElSubmit = event => {
  event.preventDefault();

  inputEls.forEach(input => {
    if (input.value.trim() === '') {
      alert("All fields required.")
    }
  });

  userData.email = loginFormEl.elements.email.value;
  userData.password = loginFormEl.elements.password.value;
  
  console.log(userData);
  
  event.target.reset();
};



loginFormEl.addEventListener('submit', onLoginFormElSubmit);

