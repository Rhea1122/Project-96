var firebaseConfig = {
apiKey: "AIzaSyCycFEz1x6o26L08f-e1J1Pq8ccrVs72ac",
authDomain: "kwitter-c-94-7f594.firebaseapp.com",
databaseURL: "https://kwitter-c-94-7f594-default-rtdb.firebaseio.com",
projectId: "kwitter-c-94-7f594",
storageBucket: "kwitter-c-94-7f594.appspot.com",
messagingSenderId: "204741716914",
appId: "1:204741716914:web:a0f6d990c8157ffd2892ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
console.log("user name is " + username);
document.getElementById("user_name").innerHTML = " Welcome " + username + "!!";

function addroom()
{
     roomname = document.getElementById("room_name").value;
     localStorage.setItem("room_name", roomname);
     window.location = "kwitter_page.html";
}

function getData() 
{
     firebase.database().ref("/").on('value',
function(snapshot) 
{
     document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
     Room_names = childKey;
//Start code
row =  "<div class='room_name' id="+ Room_names +" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names + " </div> <hr>";
document.getElementById("output").innerHTML += room;
//End code
});});}

function redirectToRoomName(name)
{
     localStorage.setItem("room_name" , name);
     window.location = "kwitter_page.html";
}

function logout() 
{
     localStorage.removeItem("user_name"); 
     localStorage.removeItem("room_name"); 
     window.location = "index.html"; 
}