


showData()

var uid = localStorage.getItem("uid")

const msgerForm = get(".msger-inputarea");

const msgerInput = get(".msger-input");
msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  var key = firebase.database().ref('chat').push().key

  var messagesend = {
      message : msgText,
      key : key,
      user : uid

  }

  firebase.database().ref('chat/' + key).set(messagesend);
  document.getElementById('messageInp').value = "" ;

 
  
  botResponse();
  });

  function showData(){
    firebase.database().ref("chat").on("child_added", function (snapshot){
      if (snapshot.val().user == uid){

     
      console.log(snapshot.val().message)
      appendMessage(uid, "right", snapshot.val().message);
      msgerInput.value = "";
    }
    else{
      appendMessage(uid, "left", snapshot.val().message);
      msgerInput.value = "";

    }

   } )

  }




const msgerChat = get(".msger-chat");

// const BOT_MSGS = [
//   "Hi, how are you?",
//   "Ohh... I can't understand what you trying to say. Sorry!",
//   "I like to play games... But I don't know how to play!",
//   "Sorry if my answers are not relevant. :))",
//   "I feel sleepy! :("
// ];

// Icons made by Freepik from www.flaticon.com
// const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
// const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
// const BOT_NAME = "BOT";
// const PERSON_NAME = "Sajad";







function appendMessage(name, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
     

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
// if you like to play with bots then remove comment from function
// function botResponse() {
//   const r = random(0, BOT_MSGS.length - 1);
//   const msgText = BOT_MSGS[r];
//   const delay = msgText.split(" ").length * 100;

//   setTimeout(() => {
//     appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
//   }, delay);
// }


function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function sendMessage() {
  // get message
  var message = document.getElementById("message").value;

  // save in database
  firebase.database().ref("messages").push().set({
      "sender": userName ? userName : myName,
      "message": message
  });

  // prevent form from submitting
  return false;
}































