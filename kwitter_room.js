
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyC4z70ap1iagn1mT0MWBp_K0hMkb29L9XE",
  authDomain: "kwitter-dd7b5.firebaseapp.com",
  databaseURL: "https://kwitter-dd7b5.firebaseio.com",
  projectId: "kwitter-dd7b5",
  storageBucket: "kwitter-dd7b5.appspot.com",
  messagingSenderId: "137938573193",
  appId: "1:137938573193:web:6bc193aa2ecfa5c846b358",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData()
 {  
   firebase.database().ref("/").on('value', function(snapshot) 

{ 
  document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
