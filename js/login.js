//script file for index.html

document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})