var goats = ["cruisin-goat", "kissing-goat", "sassy-goat", "smiling-goat", "sweater-goat"];

var button = document.getElementById("get-img");
button.addEventListener("click", handler);

function handler() {
  var img = document.querySelector("#da-img img");
  var index = Math.floor(Math.random() * goats.length);
  img.setAttribute("src", `img/${goats[index]}.jpg`);
}

var cats = ["Ginger", "Ally", "Luna", "Mandy"];

var index = Math.floor(Math.random() * cats.length);

console.log(cats[index]);

var catEls = document.getElementsByClassName("cat");

console.log(catEls);

function clickhandler(event) {
  alert(event.target.innerHTML);
  event.target.setAttribute("style", "background-color: red;");
}

for (var i = 0; i < catEls.length; i++) {
  catEls[i].addEventListener("click", clickhandler);
}
