const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = form.username.value;

  if(usernamePattern.test(username)) {
    feedback.textContent = 'that username is valid!'
  } else {
    feedback.textContent = 'username must containe letters only and be between 6 and 12 characters long';
  }

});


form.username.addEventListener('keyup', e => {
  console.log(e);
  // console.log(e.target.value, form.username.value);
  if(usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');
  }
});
