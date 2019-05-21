//Order of Execution

//Placement of script tag
var theTable = document.getElementById("theTable");
console.log(theTable);
var theRow = render(theTable, "tr");
render(theRow, "td", "Hello From DarFace");
// level1(null);

//define render function
function render(parent, elementTag, data) {
  var element = document.createElement(elementTag);
  parent.appendChild(element);

  //ternary operator
  element.textContent = data ? data : "";
  //Short for of the following if statement
  /*
  if (data) {
    element.textContent = data;
  } else {
     element.textContent = ""
  }
  */

  return element;
}

//Error messages and the stack trace

function level1(element) {
  //This will pause execution at this line in the console
  level2(element);
}

function level2(element) {
  level3(element);
}

function level3(element) {
  level4(element);
}

function level4(element) {
  element.appendChild();
}

//Lifecycle and scope
//Declarative code: "Hey Computer, I have something that I want you to know about so we can use it later."

/*
var const let
function
class
*/

//Run when the script first loads, checks for syntax and other language errors.
//Hoists declarations so that they are available at execution time / runtime
/* Hoisting will make the program aware of the symbol i.e the variable name or function name
but it doesn't actually assign the value at that time. Function declarations are completely processed at that time but not function assignments!

function declaration looks like this:

function name () {}
or as an assignment inside of a Construction:
function Constructor() {
    this.method = function () {}
}

function assignment looks like this:

var name = function () {}
Person.prototype.name = function() {}

*/

var person = new Person("Darface");
person.shout();
person.cheat();

function Person(name) {
  this.name = name;
  this.shout = function() {
    console.log(`Hello ${this.name}`.toUpperCase());
  };
  this.cheat = namedFunction;
}

// person.shout();

Person.prototype.greet = function() {
  console.log(`Hello ${this.name}`);
};

person.greet();

function namedFunction() {
  console.log(`${this.name} is a dirty trickster!`);
}

namedFunction();

//Execution Context

/* Controls what is visible to the running code at a particular point */
var outsideVar = "";

function scopeEx(name) {
  //We have access to variables defined in the function and its parents
  console.log(name);
  outsideVar = name;
}

//We get a different scope for each call of the function so that our variables contain the correct unique data.
scopeEx("Dario");
scopeEx("Damien");

var name1 = "Dario";
var name2 = "Damien";

console.log(name1);
console.log(name2);

console.log({ outsideVar });
