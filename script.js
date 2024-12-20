const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password')
const confrimPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

form.addEventListener('submit', function(e){
    e.preventDefault()//prevents the form from submtting 

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid =checkconfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;


    //submit to the server if form is valid
    if(isFormValid){
        
    }
})

const isRequired = value => value === '' ? flase : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const isPasswordSecure = (password)=>{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}

const showError = (input, message) => {
    const formField = input.parentElement; //get the form-field element
    //add error class
    formField.classList.remove('success');
    formField.classList.add('error');

    //show error message
    const error = formField.querySelector('small');
    error.textContent = message;
}

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    //hide the error message 
    const error = formField.querySelector('small');
    error.textContent = '';
}


const checkUsername = () =>{
    
    let valid = false;

    const min = 3,
          max = 25;

    const username = usernameEl.value.trim()

    if(!isRequired(username)){
        showError(usernameEl, 'username cannot be blank1!');
    }else if(!isBetween(username.length, min,max)){
        showError(usernameEl,`username must be between ${min} and ${max}`);
    }else{
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}


const checkEmail = () => {

    let valid = false;
    const email = emailEl.value.trim()

    if(!isRequired(email)){
        showError(emailEl, `Email cannot be blank!`)
    }else if(!isEmailValid(email)){
        showError(emailEl, 'Email is not valid!')
    }else {
        showSuccess(emailEl)
        valid = true;
    }
    return valid;
}

const checkPassword = () =>{
    let valid = false;
    const password = passwordEl.value.trim()

    if(!isRequired(password)){
        showError(passwordEl, 'Email cannot be blank!');
    }else if(!isPasswordSecure(password)){
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    }else{
        showSuccess(passwordEl);
        valid = true;
    }

    return valid
}

const checkconfirmPassword = () => {

    let valid = true;
    const confirmPassword = confrimPasswordEl.value.trim()

    if(!isRequired(confirmPassword)){
        showError(confrimPasswordEl, 'Password cannot be blank!');
    }else if(password !== confirmPassword){
        showError(confrimPasswordEl, 'Passwords do not match!');
    }else{
        showSuccess(confirmPassword);
        valid = true;
    }
    return valid
}

