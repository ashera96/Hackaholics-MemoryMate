// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBElcSBIqe2koIyB6pD9aAFglAq82Fu90c",
    authDomain: "hackaholics-memorymate.firebaseapp.com",
    databaseURL: "https://hackaholics-memorymate.firebaseio.com",
    projectId: "hackaholics-memorymate",
    storageBucket: "hackaholics-memorymate.appspot.com",
    messagingSenderId: "618931079152"
  };
  var app = firebase.initializeApp(config);
  var db = firebase.firestore(app);

// Function to register the user start
var register = function() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");


    if(ValidateEmail(email) & checkPasswordLength(password)) {


        firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function() {
          alert("Registered Successfully");
          window.location.href = './app.html';
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });

    }
}
// Function to register the user end

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
        alert("Login failed\n" + errorMessage);
        // ...
    });
}
// Function to authenticate the user credentials end



function checkPasswordLength(inputtxt) {
    var field = inputtxt.value;
    if(field.length < 6)
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
        return true;
    }
}