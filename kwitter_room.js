var firebaseConfig = {
    apiKey: "AIzaSyDfNGI1OTIemtUuGt2WlTY-742f2uli7H8",
    authDomain: "kwitter-69e05.firebaseapp.com",
    databaseURL: "https://kwitter-69e05-default-rtdb.firebaseio.com",
    projectId: "kwitter-69e05",
    storageBucket: "kwitter-69e05.appspot.com",
    messagingSenderId: "702366596441",
    appId: "1:702366596441:web:944640112dc9b1678d6048"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function add_room(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room name="+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}