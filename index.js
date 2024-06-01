var fnameEle = document.getElementById('fname');
var lnameEle = document.getElementById('lname');
var emailEle = document.getElementById('email');
var passwordEle = document.getElementById('password');
var confirmPasswordEle = document.getElementById('confirmPassword');

var fnameErrorMsg = document.getElementById('fnameErrorMsg');
var lnameErrorMsg = document.getElementById('lnameErrorMsg');
var emailErrorMsg = document.getElementById('emailErrorMsg');
var passwordErrorMsg = document.getElementById('passwordErrorMsg');
var confirmPasswordErrorMsg = document.getElementById('confirmPasswordErrorMsg');


// function handleSubmit(){}
document.getElementById('sign_up_form').addEventListener('submit', handleSubmit)
function handleSubmit(e) {
    e.preventDefault();
    console.log(fnameEle.value);
    console.log(lnameEle.value);
    console.log(emailEle.value);

    // first name validation
    if (fnameEle.value === '') {
        fnameErrorMsg.innerHTML = "Field should not be empty";
        fnameErrorMsg.style.color = "Orange";
    }
    else if (fnameEle.value.length < 3) {
        fnameErrorMsg.innerHTML = "Please enter firstname is of atleast 3 letter";
        fnameErrorMsg.style.color = "Red";
        // return false;
    }
    else {
        fnameErrorMsg.innerHTML = '';
    }

    // last name validation
    if (lnameEle.value === '') {
        lnameErrorMsg.innerHTML = "Field should not be empty";
        lnameErrorMsg.style.color = "Orange";
    }
    else if (lnameEle.value.length < 3) {
        lnameErrorMsg.innerHTML = "Please enter lastname is of atleast 3 letter";
        lnameErrorMsg.style.color = "Red";
        // return false;
    }
    else {
        lnameErrorMsg.innerHTML = '';
    }

    // email validation
    if (emailEle.value === '') {
        emailErrorMsg.innerHTML = "Field should not be empty";
        emailErrorMsg.style.color = "Orange";
    }
    else if (!emailEle.value.toString().includes('@')) {
        emailErrorMsg.innerHTML = "Please provide valid Email";
        emailErrorMsg.style.color = "Red";
    }
    else {
        emailErrorMsg.innerHTML = '';
    }

    // password validation
    if (passwordEle.value === '') {
        passwordErrorMsg.innerHTML = "Field should not be empty";
        passwordErrorMsg.style.color = "Orange";
    }
    else if (passwordEle.value.length < 8) {
        passwordErrorMsg.innerHTML = "Password should container atleast 8 letters";
        passwordErrorMsg.style.color = "Red";
    }
    else {
        passwordErrorMsg.innerHTML = '';
    }

    // confirm password validation
    if (confirmPasswordEle.value === '') {
        confirmPasswordErrorMsg.innerHTML = "Field should not be empty";
        confirmPasswordErrorMsg.style.color = "Orange";
    }
    else if (confirmPasswordEle.value.length < 8) {
        confirmPasswordErrorMsg.innerHTML = "Password should container atleast 8 letters";
        confirmPasswordErrorMsg.style.color = "Red";
    }
    else if (passwordEle.value !== confirmPasswordEle.value) {
        confirmPasswordErrorMsg.innerHTML = "Password is not matching..please check once"
        confirmPasswordErrorMsg.style.color = "Red";
    }
    else {
        confirmPasswordErrorMsg.innerHTML = '';
    }
}
