// Function to authenticate the user credentials start
var login = function() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function() {
        
        alert("Login Success.");
        // redirect to app page
        window.location.href = "./pages/app.html";

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Login not success.\n" + errorMessage);
        // ...
    });
}
// Function to authenticate the user credentials end


// Function to register the user start
var register = function() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(ValidateEmail(email) & checkPasswordLength(password)) {

        firebase.auth().createUserWithEmailAndPassword(email.value,password.value).then(function() {

            alert("Login Success.");
            // redirect to app page
            window.location.href = "./app.html";
    
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Login not success.\n" + errorMessage);
            // ...
        });

    }
}
// Function to register the user end

function checkPasswordLength(inputtxt) {
    var field = inputtxt.value;
    if(field.length < 8)
    {
        alert("Password length is not enough.");
        return false;
    } else {
        return true;
    }
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!inputText.value.match(mailformat))
    {
        alert("You have entered an invalid email address!");
        return false;
    }
    else
    {
        return ture;
    }
}
