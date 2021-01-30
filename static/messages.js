function sendMessageToUser(username , note){
  //var username = document.getElementById('userName').innerHTML;
  //var note = document.getElementById('note').innerHTML;
  var postListRef = firebase.database().ref('users/' + username +'/newMessages');
  var newPostRef = postListRef.push();
  newPostRef.set({
      entry:note,
  });
  console.log("test worked");
}

sendMessageToUser('kylejava' , 'This is a test');
