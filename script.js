const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password')
const confrimPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

form.addEventListener('submit', function(e){
    e.preventDefault()//prevents the form from submtting 
})

const isRequired = value => value === '' ? flase : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const isPasswordStrong = (password)=>{
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

