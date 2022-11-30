function validateForm(){
var validFirstname = false;
 var letters = /^[A-Za-z]+$/;
 var validLastname = false;
 var errorMessages ="";
 var validEmail = false;
 var validPhone = false;
 var numbers = /^[0-9]+$/;
 var validUsername = false;
 var validPassword = false;
 var validAddress = false;
 var validCity = false;
 var validState = false;
 var validCountry = false;
 var validZipcode = false;

    function validateFirstname() {
  var Firstname = document.getElementById("Firstname").value;
  console.log(validFirstname);
  if (contactUs.Firstname.value==="null"|| 
      contactUs.Firstname.value==="" ||
      contactUs.Firstname.value.match(letters) ||
      contactUs.Firstname.value.length > 20 || contactUs.Firstname.value.length < 0)
  {
   alert( "The First Name is required, only letters are accepted and it cannot be greater than 20 characters." );
    errorMessages += "<p>The First Name is required, only letters are accepted and it cannot be greater than 20 characters</p>";
  }
     else
  {
    validFirstname = true;
  }
        document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validFirstname);
}
 
 document.getElementById("errorMessages").innerHTML = errorMessages;
 return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode);
}
 
