'use strict';

const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handlerForm);

function handlerForm(evt) {
    evt.preventDefault()
    
    const {elements: {email, password}} = evt.currentTarget;
    const userData = {'email': email.value.trim(), 'password': password.value.trim()};

    if (userData.email === '' || userData.password === '') {
        return alert('All form fields must be filled in');
    };

    console.log(userData);
    evt.currentTarget.reset();
};