function attemptLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Read data from an external file (for educational purposes, not suitable for production)
    var fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.onchange = function() {
        var file = fileInput.files[0];
        var reader = new FileReader("dataTier.txt");

        reader.onload = function(e) {
            var data = e.target.result.split('\n');
            var storedUsername = data[0].trim();
            var storedPassword = data[1].trim();

            // Simulate backend authentication
            if (username === storedUsername && password === storedPassword) {
                alert('You\'ve successfully logged in!');
            } else {
                alert('Try again!');
            }
        };

        reader.readAsText(file);
    };

    fileInput.click();
}