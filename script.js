const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!firstName) {
        addError('first-name', 'First Name cannot be empty');
    } else {
        removeError('first-name');
    }

    if (!lastName) {
        addError('last-name', 'Last Name cannot be empty');
    } else {
        removeError('last-name');
    }
    
    if (!email) {
        addError('email', 'Email Adress cannot be empty');
    } else if (!validEmail(email)) {
        addError('email', 'Looks like this is not an email');
    } else {
        removeError('email');
    }
    
    if (!password) {
        addError('password', 'Password cannot be empty');
    } else {
        removeError('password');
    }
});

const addError = (input, msg) => {
    const inputBox = form[input].parentNode;
    inputBox.classList.add('error');

    const errText = inputBox.querySelector('small');
    errText.textContent = msg;
}

const removeError = input => {
    const inputBox = form[input].parentNode;
    inputBox.classList.remove('error');
}

function validEmail(email) {
    var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    return regex.test(String(email).toLocaleLowerCase());
}