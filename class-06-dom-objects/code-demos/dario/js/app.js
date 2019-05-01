//Array;
var things = [5, 5, 'Ginger', ['fido', 'butch'], true, console.log, {}];

//Object Literals
var person = {
  firstname: 'Darface',
  hairColor: 'black',
  height: 750,
  names: ['Fido', 'Butch'],
  greet: function() {
    // This is a method (which is a function that's a property of an object)
    console.log(things);
    console.log(`Hello ${this.firstname}`);
  }
};

//We'll talk more about scope later
function fun() {
  var cow = 'Betsy';
  function goodness() {
    console.log(cow);
  }
  console.log(cow);
}

//console.log(cow);

//dot Notation

//object name is followed by a dot then given the property name

console.log(person.height);
person.greet();
//Array method push
things.push('House');
/*
pop()
slice()
push()
shift()
unshift()
indexOf()
join()
*/
/*
String methods
toUpperCase();
toLowerCase();
charAt();
split();

*/
// console.error('Oh noes!');
var welcomeElem = document.getElementById('welcome');
welcomeElem.textContent += ' Kara';

function redify() {
  var welcomeElem = document.getElementById('welcome');
  welcomeElem.className = 'red';
}

function clearClasses() {
  var welcomeElem = document.getElementById('welcome');
  welcomeElem.className = '';
}

//Adding Event listener
var readifyButtonElem = document.getElementById('redifyButton');
readifyButtonElem.addEventListener('click', redify);

var newStoreButtonElem = document.getElementById('newStoreBtn');
newStoreButtonElem.addEventListener('click', renderStore);

//Event Listener for adding new list items
function renderStore() {
  var inputElem = document.getElementById('stores');
  var storesList = document.querySelector('#storesList');
  var listItem = document.createElement('li');
  listItem.textContent = inputElem.value;
  inputElem.value = '';

  storesList.appendChild(listItem);
}
