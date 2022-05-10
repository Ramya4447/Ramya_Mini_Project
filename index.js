var firebaseConfig = {
    apiKey: "AIzaSyCmLhPZ9a5R82qJETsP9VxG69dpGJdXM2w",
    authDomain: "mini-project-bed7d.firebaseapp.com",
    projectId: "mini-project-bed7d",
    storageBucket: "mini-project-bed7d.appspot.com",
    messagingSenderId: "488951602643",
    appId: "1:488951602643:web:9d91b4973c0a53f868e326",
    measurementId: "G-LRPY423TJM"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()


auth.onAuthStateChanged(function(user) {
    if (user) {
  
      var email = user.email

      console.log(email);
    } else {
        window.location = "index.html";
    }
  })