function validatePhone(value) {
  console.log(value)
  var regex = /^0[1-9](\d{2}){4}$/;
  var result = true;
  if (value !== '') {
    result = regex.test(value);
  }
  // publish to bubble
  bubble_fn_valid_phone(result)
}

function initValidatePhone() {
  var phoneInput = document.querySelector('#phoneinput');
  if (phoneInput) {
    // inital state
    validatePhone(phoneInput.value);
    
    // listen for changes
    phoneInput.addEventListener('input', (e) => {
      validatePhone(e.target.value)
    });
  }
}

function init() {
  initValidatePhone();
}

$(document).ready(function(){
  init();
})
