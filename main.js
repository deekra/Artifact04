function validateForm(){
 var validFirstName=false;
 var letters = /^[A-Za-z]+$/;
 var validLastName=false;
 var errorMessages ="";
 var validEmail = false;
 var validPassword = false;
 var validPhone = false;
 var numbers = /^[0-9]+$/;
  
 
  var FirstName = document.getElementById("FirstName").value;
  var validLastName = document.getElementById("LastName").value;

  if (FirstName==="null" || FirstName==="" ||  FirstName.value.match(letters) ||  FirstName.length > 20)
    errorMessages += "<p>The First Name is required, only letters are accepted and cannot be greater than 20 characters</p>";
  else
   validFirstName = true;
 
  if (LastName==="null" || LastName==="" ||  LastName.value.match(letters) || LastName.length > 50)
    errorMessages += "<p>The Last Name is required and cannot be greater than 50 characters</p>";
  else
   validFirstName = true;
 
 
 
 document.getElementById("errorMessages").innerHTML = errorMessages;
 
 return (validFirstName);
