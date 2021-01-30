var database = firebase.database();
function sendMessageToUser(){
  username = 'kylejava';
  note = 'this is a test';
  //var username = document.getElementById('userName').innerHTML;
  //var note = document.getElementById('note').innerHTML;
  var postListRef = firebase.database().ref('users/' + username +'/newMessages');
  var newPostRef = postListRef.push();
  newPostRef.set({
      newNote:note,
  });
  console.log("test worked");
}

function moveNewMessageToOld(){
  var message = document.getElementById('message').innerHTML;
  var postListRef = firebase.database().ref('users/' + username +'/oldMessages');
  var newPostRef = postListRef.push();
  newPostRef.set({
      entry:message,
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  } else {
    sendMessageToUser();
  }
});
