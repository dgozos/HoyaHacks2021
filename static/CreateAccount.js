
var database = firebase.database();
function createAccount(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    location.href = '/complete';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage);
    document.getElementById('error').innerHTML = errorMessage;
  //  console.log(user.isEmailVerified());
  });
}

function finishAccount(){
  var userName = document.getElementById('username').value;
  var name = document.getElementById('fullName').value;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase.database().ref('users/'+ userName +'/userInfo').set({
          username: userName,
          name: name
        });

      console.log("User Has Been Added.");
    } else {
      console.log("No User");
    }
  });
}
