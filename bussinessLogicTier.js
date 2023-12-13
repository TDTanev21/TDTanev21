function attemptLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username === 'TDTanev21' && password === 'Tedo1234') {
        alert('You\'ve successfully logged in!');
    } else {
        alert('Try again!');
    }
}