var uservalidate=false;
var passvalidate=false;
// Calling username and password validation function 
function validation(){
this.usernameValidation()
 this.passwordValidation()
 if(uservalidate==true && passvalidate==true){
    window.location.href="success.html"
 }
}

// Username Validation
function usernameValidation(){
    var usernamelength =document.getElementById("username_id").value.length;

    if((usernamelength < 3 && usernamelength >0) || (usernamelength > 10)){
        document.getElementById("usererror").style.display='block'
        document.getElementById("userempty").style.display='none'
        }
        else if(usernamelength > 2 && usernamelength < 11){  
            uservalidate =true;
        }
        else { 
            document.getElementById("userempty").style.display='block'
            document.getElementById("usererror").style.display='none'
        }
}

// Password Validation
function passwordValidation(){
    var passwordlength =document.getElementById("password_id").value.length;
     if((passwordlength < 5 && passwordlength>0)|| (passwordlength > 12)){
        document.getElementById("passworderror").style.display='block'
        document.getElementById("passwordempty").style.display='none'
        }
        else if(passwordlength > 4 && passwordlength < 13){  
            passvalidate =true;
        }
        else { 
            document.getElementById("passwordempty").style.display='block'
            document.getElementById("passworderror").style.display='none'
        }
}