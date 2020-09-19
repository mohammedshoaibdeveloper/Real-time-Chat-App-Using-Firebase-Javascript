

var user;

firebase.auth().onAuthStateChanged(function(user){
//    console.log(user)
user=user
   window.location.href="chat.html"
})
function signup(){
    email=document.getElementById("email").value
    password=document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user)=>{
        console.log(user)
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      })
      
      
}

function getData(){
    let Email=document.getElementById("Email").value
    let Password=document.getElementById("Password").value
    firebase.auth().signInWithEmailAndPassword(Email, Password)
    .then((user)=>{

       
         localStorage.setItem("uid",user.user.email)
         window.location.href="chat.html"
    })
    
    .catch(function(error) {
        alert("Invalid Email or Password")
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      
      

  
}

// const signout = () => {
//         firebase.auth().signout()
//             .then(() => {
//                 window.location = "index.html"
    
//             })
//             .catch(() => {
    
//             })
//     }