"use strict";

function Message(message, sender, speechStyle) {
  this.message = message;
  this.sender = sender.toUpperCase();
  this.speech = speechStyle;
}

Message.prototype.say = function() {
  switch (this.speechStyle) {
  case "shout":
    return `<span> ${this.message.toUpperCase()}</span>`;
  case "swear":
    return "<span> @#%$#$@@#$ </span>";
  case "quiet":
    return `<span style="font-size: .5em"> ${this.message}</span>`;
  case "smooth":
    return `<span style="font-style: italic"> ${this.message}</span>`;
  default:
    return `<span> ${this.message}</span>`;
  }
};

Message.prototype.render = function() {
  //Append this message to our section so ti's visible in the browser
  var chatArea = document.getElementById("chat-area");

  var messageContainer = document.createElement("li");
  messageContainer.className = "message-container";

  var senderInitials = document.createElement("h2");
  var senderPhoto = document.createElement("img");
  var senderMessage = document.createElement("span");

  senderInitials.textContent = this.sender;
  senderMessage.innerHTML = this.say();
  senderPhoto.setAttribute("src", `img/${this.sender.toLowerCase()}.jpg`);

  messageContainer.appendChild(senderInitials);
  messageContainer.appendChild(senderPhoto);
  messageContainer.appendChild(senderMessage);

  chatArea.appendChild(messageContainer);
};

// We want a function to handle the form
function handleMessage(event) {
  event.preventDefault();
  //gets data from form
  var form = event.target;
  var message = form.elements["message"].value;
  var sender = form.elements["sender"].value;

  //create a message object
  var msg = new Message(message, sender);
  //render the message
  msg.render();
}

//Attach Event listener to form
var chatForm = document.getElementById("chat-form");
chatForm.addEventListener("submit", handleMessage);

var halle = document.getElementById("halle");
var damien = document.getElementById("damien");
var kara = document.getElementById("kara");

halle.addEventListener("click", function() {
  alert("Ouch that hurts!");
  this.firstChild.setAttribute("style", "width:10px;");
});

damien.addEventListener("mouseover", function() {
  console.log(this.firstChild);
  this.firstChild.setAttribute("style", "width:100px;");
});
damien.addEventListener("mouseout", function() {
  console.log(this.firstChild);
  this.firstChild.setAttribute("style", "width:50px;");
});

kara.addEventListener("mouseover", function() {
  console.log(this.firstChild);
  this.firstChild.className = "highlight";
});

kara.addEventListener("mouseout", function() {
  console.log(this.firstChild);
  this.firstChild.className = "";
});
