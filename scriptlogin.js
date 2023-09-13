// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAytIUAfY5ROb56_FLRMDyoHAbzDJY9Uy0",
    authDomain: "jhos-2.firebaseapp.com",
    projectId: "jhos-2",
    storageBucket: "jhos-2.appspot.com",
    messagingSenderId: "675775504646",
    appId: "1:675775504646:web:46e27069c5732b2146fe87",
    measurementId: "G-BH5VVLXYGD"
};

firebase.initializeApp(firebaseConfig);

// Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Inloggen gelukt
            window.location.href = 'dashboard.html';
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
});

// Registreren
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Registreren gelukt
            window.location.href = 'dashboard.html';
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
});
