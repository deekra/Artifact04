function validateForm(){
 var validFirstName=false;
 var letters = /^[A-Za-z]+$/;
 var validLastName=false;
 var errorMessages ="";
 
  
  if (FirstName==="null" || FirstName==="" || FirstName.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
  else
   validFirstName = true;
