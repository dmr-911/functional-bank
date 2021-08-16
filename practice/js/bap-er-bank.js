document.getElementById("login-submit").addEventListener('click', function () {
    // get the email
    const email = document.getElementById('email');
    // get the password
    const password = document.getElementById('password');
    if (email.value == 'mizan' && password.value == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Wrong input given');
    }
});