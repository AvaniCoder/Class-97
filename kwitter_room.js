
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAMclTM8rCw7cOdF8wGn0wuMyYIGlo5reg",
      authDomain: "kwitter-cb365.firebaseapp.com",
      databaseURL: "https://kwitter-cb365-default-rtdb.firebaseio.com",
      projectId: "kwitter-cb365",
      storageBucket: "kwitter-cb365.appspot.com",
      messagingSenderId: "786499929309",
      appId: "1:786499929309:web:5447bbcb3e04c8460d8734"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update(
      {
            purpose : "Making Rooms"
      }      
      );
      window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name"+Room_names);
                  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}