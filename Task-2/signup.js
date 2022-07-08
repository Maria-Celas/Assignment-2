// To show password
const togglePassword = document.querySelector("#togglePassword");
      const password = document.querySelector("#id_password");

      togglePassword.addEventListener("click", function (e) {
        // toggle the type attribute
        const type =
          password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        // toggle the eye slash icon
        this.classList.toggle("fa-eye-slash");
      });


// Document is ready
$(document).ready(function () {

  let usernameError = false;
  let emailError = false;
  let passwordError = false;

  // Submit button
  $("#submit_form").click(function () {
  validateUsername();
  validateEmail();
  validatePassword();
 
  if (
    usernameError == true &&
    emailError  == true &&
    passwordError == true
  ) {
    
    window.location.href = 'welcome.html';
     
   } //else {
  //   return false;
  // }
});

    // Validate Username
    $("#usercheck").hide();
    $("#usernames").keyup(function () {
      validateUsername();
    });

    function validateUsername() {
      let usernameValue = $("#usernames").val();
      if (usernameValue.length == "") {
        $("#usercheck").show();
        $("#usercheck").html("**Username cannot be empty");
        return false;
      } else if (usernameValue.length < 3 || usernameValue.length > 10) {
        $("#usercheck").show();
        $("#usercheck").html("**length of username must be between 3 and 10");        
        return false;
      } else {
        $("#usercheck").hide();
        usernameError = true;
      }
    }

    // Validate Email
$("#emailcheck").hide();
$("#mail-id").keyup(function () {
  validateEmail();
}); 
function validateEmail() {
  let emailValue = $("#mail-id").val();
  var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (emailValue.length == "") {
    $("#emailcheck").show();
    $("#emailcheck").html("**Email id cannot be empty");
    return false;
  } else if (!emailValue.match(email_regex) ){
    $("#emailcheck").show();
    $("#emailcheck").html("**Please enter a valid email id");
    return false;
  } else {
    $("#emailcheck").hide();
    emailError = true;
  }
}

 // Validate Password
 $("#passwordcheck").hide();
 $("#id_password").keyup(function () {
   validatePassword();
 });
 function validatePassword() {
   let passwordValue = $("#id_password").val();
   if (passwordValue.length == "") {
     $("#passwordcheck").show();
     $("#passwordcheck").html("**Password cannot be empty");
     return false;
   }
   if (passwordValue.length < 3 || passwordValue.length > 10) {
     $("#passwordcheck").show();
     $("#passwordcheck").html(
       "**length of your password must be between 3 and 10"
     );
     $("#passwordcheck").css("color", "red");
     
     return false;
   } else {
     $("#passwordcheck").hide();
     passwordError = true;
   }
 }
});
