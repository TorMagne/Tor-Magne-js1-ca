const form = document.querySelector('#contact-form');
const Name = document.querySelector('#name');
const nameError = document.querySelector('#nameError');

function formValidation(event) {
  event.preventDefault();
  //   form.reset();
  if (name.value.length > 0) {
    nameError.style.display = 'none';
  }
  console.log('hello');
}

form.addEventListener('submit', formValidation);
