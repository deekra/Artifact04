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


  var Firstname = document.getElementById("firstname").value;
  
  if (Firstname === "null" ||
      Firstname === "" ||
      !Firstname.match(letters) ||
      Firstname.length > 20) 
  {
    errorMessages = errorMessages + "<p> First Name is required, only letters are allowed and it cannot be greater than 20 characters.</p>";
  }
  else {
    validFirstname = true;
  } 
  
  var Lastname = document.getElementById("lastname").value;
  
  if (Lastname === "null" ||
      Lastname === "" || 
      !Lastname.match(letters) ||
      Lastname.length > 50) 
  {
    errorMessages = errorMessages + "<p> Last Name is required, only letters are allowed and cannot be greater than 50 characters. </p>";
  }
  else {
    validLastname = true;
  } 
  
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
 return (validFirstname && validLastname);

}
