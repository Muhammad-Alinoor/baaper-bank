const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',function(){
    // user email
    const emailField = document.getElementById('email-field');
    const userEmail =emailField.value;
    // user password
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    if(userEmail == 'owner@myBank.com' && userPassword == 'secret'){
        console.log(userEmail,userPassword)
        window.location.href= 'bank.html';
    }
})