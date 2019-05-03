/* Remember We can use js to manipulate the html using the DOM
Document Object Model
*/

var sectionElem = document.querySelector("#table-data");
//document.getElementById('table-data')

console.log(sectionElem);

//naive approach doesn't work for html
sectionElem.textContent = "<p>Hello</p>";
console.log(sectionElem);
//
sectionElem.innerHTML = "<p>World</p>";

//create a new html element
var paraElem = document.createElement("span");
//add content to that element
paraElem.textContent = "Hello Darface!";
//append the element to the parent in the dom
sectionElem.appendChild(paraElem);

//Let's think in 2D! and create a table

var tableElem = document.createElement("table");
sectionElem.appendChild(tableElem);

var tableRow = document.createElement("tr");
tableElem.appendChild(tableRow);

var tableCell = document.createElement("td");
tableCell.textContent = "Hello Halle";
tableRow.appendChild(tableCell);

tableCell = document.createElement("td");
tableCell.textContent = "Hello Dario";
tableRow.appendChild(tableCell);

tableCell = document.createElement("td");
tableCell.textContent = "Hello Marc";
tableRow.appendChild(tableCell);

tableRow = document.createElement("tr");
tableElem.appendChild(tableRow);

tableCell = document.createElement("td");
tableCell.textContent = "Goodbye Halle";
tableRow.appendChild(tableCell);

tableCell = document.createElement("td");
tableCell.textContent = "Goodbye Dario";
tableRow.appendChild(tableCell);

tableCell = document.createElement("td");
tableCell.textContent = "Goodbye Marc";
tableRow.appendChild(tableCell);

/* Remember we can compress multiples steps into one by creating a function */
function render(parent, elemType, data) {
  var elem = document.createElement(elemType);
  if (data) {
    elem.textContent = data;
  }
  parent.appendChild(elem);
  return elem;
}

var newTable = render(sectionElem, "table");
var newRow = render(newTable, "tr");

render(newRow, "td", "See You Halle");
render(newRow, "td", "See You Dario");
render(newRow, "td", "See You MArc");

var names = ["Halle", "Dario", "Marc"];

var newerRow = render(newTable, "tr");
// for (var i = 0; i < names.length; i++) {
//   render(newerRow, 'td', 'In a while ' + names[i]);
// }

/* Array methods
.forEach
.map
.filter
.reduce
.find
*/
names.forEach(function(item) {
  render(newerRow, "td", "In a while " + item);
});

/* Constructors */

// Same concept applie to object creation
//We can manually create multiple object of the same type by assigin similar literals

var person = {
  name: "Darface",
  height: 178,
  hairColor: "atomic purple",
  gender: "m",
  greet: function(name) {
    console.log("What's Up " + name + "!");
  }
};
var person1 = {
  name: "Fango",
  height: 164,
  hairColor: "atomic purple",
  gender: "m",
  greet: function(name) {
    console.log("How's it going " + name + "?");
  }
};
var person2 = {
  name: "Ginger",
  height: 120,
  hairColor: "neon pink",
  gender: "f",
  greet: function(name) {
    console.log("Hiya " + name);
  }
};
var person3 = {
  name: "Susy",
  height: 178,
  hairColor: "toxic green",
  gender: "f",
  greet: function(name) {
    console.log(name + ", how you doing?");
  }
};

/* you get the point */
/*If we decide to change the way that the method works or add a attribute then we need to change it in each instance */
var person5 = {
  name: "Darface5",
  height: 178,
  hairColor: "atomic purple",
  gender: "m",
  greeting: "What's Up!",
  greet: function(name) {
    var greeting = this.greeting + " " + name;
    console.log(greeting);
    return greeting;
  }
};
console.log(person, person1,person2,person3,person5);
/* We can create a function to create these similar objects in a single step too! */

function Person(name, height, hairColor, gender, greeting) {
  /*we can define attributes*/
  this.name = name;
  this.height = height;
  this.hairColor = hairColor;
  this.gender = gender;
  this.greeting = greeting;

  /* we can define methods as well */
  this.greet = function(name) {
    var greeting = this.greeting + " " + name;
    console.log(greeting);
    return greeting;
  };
  /* but the more long methods we have the more clutter wer get!*/
  this.renderTable = function(name) {
    var tableElem = document.querySelector("table#report");
    console.log(tableElem);
    var tableRow = render(tableElem, "tr");
    var fields = [this.name, this.height, this.hairColor, this.gender, this.greet];
    console.log(fields);
    fields.forEach(field => {
      var data = typeof field === "function" ? this.greet(name) : field;
      render(tableRow, "td", data);
      console.log({ data });
    });
  };
}

/* Now we can create new objects in a one liner using the new keyword*/
var person7 = new Person("Marc", 183, "hot pink", "M", "Yeah Dude");
var person8 = new Person("Darface", 183, "hot purple", "M", "Wha gine on");
console.log(person7);

/* To reduce clutter in our constructor we can define methods outside of the constructor and assign it to the prototype */
Person.prototype.renderTable2 = function(name) {
  var tableElem = document.querySelector("table#report");
  console.log(tableElem);
  var tableRow = render(tableElem, "tr");
  var fields = [this.name, this.height, this.hairColor, this.gender, this.greet];
  console.log(fields);
  fields.forEach(field => {
    var data = typeof field === "function" ? this.greet(name) : field;
    render(tableRow, "td", data);
    console.log({ data });
  });
};

function renderTableHeadings() {
  var tableElem = render(sectionElem, "table");
  tableElem.setAttribute("id", "report");
  var tableRow = render(tableElem, "tr");
  var headings = ["Name", "Height", "Hair Color", "Gender", "Greeting"];

  headings.forEach(heading => {
    render(tableRow, "th", heading);
  });
}

renderTableHeadings();
person8.renderTable("Kara");
person7.renderTable2("Halle");
