
const inputRef = document.getElementById('validation-input')

  inputRef.addEventListener("change", (event) => {
    
    if (Number(event.target.getAttribute('data-length')) === event.target.value.length) {
      event.target.classList.remove('invalid');
      event.target.classList.add('valid');
    } else {
      event.target.classList.remove('valid');
      event.target.classList.add('invalid');
    }
  });
