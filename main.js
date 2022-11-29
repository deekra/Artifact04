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
  
 
  var Firstname = document.getElementById("Firstname").value;
  var validLastname = document.getElementById("Lastname").value;
  var validEmail = document.getElementById("Email").value;
  var validPhone = document.getElementById("Phone").value;
  var validUsername = document.getElementById("Username").value;
  var validPassword = document.getElementById("Password").value;
  var validAddress = document.getElementById("Address").value;
  var validCity = document.getElementById("City").value;
  var validState = document.getElementById("State").value;
  var validCountry = document.getElementById("Country").value;
  var validZipcode = document.getElementById("Zipcode").value;

  if (contactUs.Firstname.value==="null"|| 
      contactUs.Firstname.value==="" ||
      contactUs.Firstname.value.match(letters) ||
      contactUs.Firstname.value.length > 20 ||  
      contactUs.Firstname.value.length < 0)
      errorMessages += "<p>The First Name is required, only letters are accepted and it cannot be greater than 20 characters</p>";
  else
   validFirstName = true;
 
  if (contactUs.Lastname.value==="null" ||
      contactUs.Lasttname.value==="" ||
      contactUs.Lastname.value.match(letters) || 
      contactUs.Lastname.value.length > 50)
    errorMessages += "<p>The Last Name is required, only letters are accepted and it cannot be greater than 50 characters</p>";
  else
   validLastname = true;
 
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length)
  
  if (isNaN(Phone) || Phone.length >15 || Phone===null || Phone==="" || Phone.value.match(numbers) )
  For example errorMessages = "<p>Invalid phone number </p>";
else
  return true;
 
  if (Username==="null" || Username==="" ||  Username.length >12 ||  Username.length < 0)
    errorMessages += "<p>The Username is required and cannot be greater than 12 characters</p>";
  else
   validFirstName = true;
 
  if (Password==="null" || Password==="" || Password.length > 7 || Password.length < 0)
    errorMessages += "<p>The Password is required and cannot be greater than 7 characters</p>";
  else
   validFirstName = true;
 
 if (Address==="null" ||  Address==="" || Address.length < 0)
    errorMessages += "<p>The Address is required </p>";
  else
   validFirstName = true;
 
 if (City==="null" || City==="" || City.length < 0)
    errorMessages += "<p>The City is required </p>";
  else
   validFirstName = true;
 
 
 document.getElementById("errorMessages").innerHTML = errorMessages;
 
 return (validFirstname);
 return (validLastname);

