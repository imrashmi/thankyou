$('#classModal').modal('show')

function validateForm() {
  var name = document.forms["newpayment"]["name"].value;
  var email = document.forms["newpayment"]["email"].value;
  var mobile = document.forms["newpayment"]["mobile"].value;
  var amount = document.forms["newpayment"]["amount"].value;
  if (name = email = mobile = amount == "") {
    alert("Name must be filled out");
    return false;
  }
}
