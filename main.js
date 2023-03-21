function validatePhone(value) {
  var regex = /^0[1-9](\d{2}){4}$/;
  var result = true;
  if (value !== '') {
    result = regex.test(value);
  }

  bubble_fn_valid_phone(result)
}
