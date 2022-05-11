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

const db = firebase.firestore()


//Signup Function
let signUpButton = document.getElementById('signup')
function signup() {
    console.log("clicked")

    localStorage.setItem("high",0);

    var email = document.getElementById("inputEmail").value
    var password = document.getElementById("inputPassword").value

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // location.reload();
            var user = userCredential.user;
            const name = email.toString().split("@");
            // console.log(name[0])

            const data = {
                Name: name[0],
                Password: password.toString(),
                Email: email.toString(),
            }

            var leaderboard = db.collection("LeaderBoard").doc("Fun")
            db.collection("User")
                .doc(email)
                .set(data)
                .then(() => {
                    leaderboard.set({
                        [name[0]]: 0,
                    }, { merge: true }).then(() => {
                        localStorage.setItem("Name", name[0]);
                        alert("User Created Successfully !");
                        window.location = "typequiz.html";
                    });
                })
                .catch(err => console.log(err))

        })
        .catch((error) => {
            var errorCode = error.code;
            // var errorMessage = error.message;
            if (errorCode == 'auth/email-already-in-use') {
                alert("Email Id already Present !");
                window.location = "index.html";
            }
            // console.log("error code", errorCode)
            // console.log("error Message", errorMessage)
        });
}


//SignIn function
function login() {
    console.log("clicked")

    localStorage.setItem("high",0);

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth.signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // location.reload();
            var user = userCredential.user;
            console.log("user", user.email)
            window.location = "typequiz.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // alert("error code", errorCode)
            alert(errorMessage)
        });
}



//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
// auth.onAuthStateChanged(function (user) {
//     if (user) {
//         window.location = "typequiz.html";
//         //is signed in
//     } else {
//         //no user signed in
//     }
// })
