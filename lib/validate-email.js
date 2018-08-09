function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$('#email').keyup(function() {
  if (validateEmail(this.value)) {
    $('#email').css("border-color", "green")
    $('span')
      .text('Valid.')
      .css("color", "green")
  } else {
    $('#email').css("border-color", "red")
    $('span')
      .text('Email address is not valid')
      .css("color", "red")
  }
})
