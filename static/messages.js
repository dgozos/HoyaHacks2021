var database = firebase.database();
function sendMessageToUser(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var username = document.getElementById('userName').value;
      var note = document.getElementById('note').value;
      var postListRef = firebase.database().ref('users/' + username +'/messages');
      var newPostRef = postListRef.push();
      newPostRef.set({
          newNote:note,
      });
      document.getElementById('note').value = "";
      document.getElementById('confirm').innerHTML = "Message has been sent to " + userName;
      console.log("Message has been sent to user");
      document
    } else {
      console.log("No User");
    }
  });
}

function viewMessages(){
  var currentNote = document.getElementById('note').innerHTML;
  var counter = 0;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var notes = [];
      var leadsRef = database.ref('/users/' +user.displayName + '/messages');
      leadsRef.on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            var note = (childData['entry']);
            notes.push(note);
          });
        document.getElementById('note').innerHTML = notes[counter];
      });
    } else {
      console.log("No User");
    }
  });
}
