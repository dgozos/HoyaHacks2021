var database = firebase.database();
function sendMessageToUser(){
  var username = document.getElementById('userName').innerHTML;
  var note = document.getElementById('note').innerHTML;
  var postListRef = firebase.database().ref('users/' + username +'/newMessages');
  var newPostRef = postListRef.push();
  newPostRef.set({
      newNote:note,
  });
}
