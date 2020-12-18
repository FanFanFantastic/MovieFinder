(function () {


    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDa_aZnyIZHiB0JDjVZuiqNhSYtg0CJQYs",
    authDomain: "exchangebae-6243e.firebaseapp.com",
    databaseURL: "https://exchangebae-6243e.firebaseio.com",
    projectId: "exchangebae-6243e",
    storageBucket: "exchangebae-6243e.appspot.com",
    messagingSenderId: "290400641503"
    };
    firebase.initializeApp(config);
    
    //Getting elements
    const textEmail = document.getElementById('userEmail');
    const textPassword = document.getElementById('userPassword');
    const BtnSignUp = document.getElementById('signUpBtn');
    
    //Add Event
    BtnSignUp.addEventListener("click",e => {
        //Get email and password
        const email = textEmail.valve;
        const pass = textPassword.value;
        const auth = firebase.auth();
        
        //Sign Up to FireBase
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        
        promise.catch(e => console.log(e.message) );
        
    })


    


})