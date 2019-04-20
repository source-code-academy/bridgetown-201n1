'use strict';

//Push and pop work on the end fo the array
// var cats = [];
// console.log({ cats });
// var response = prompt('What\'s a good name for a cat', 'Type a cat\'s name');
// cats.push(response);

// var response = prompt('What\'s a good name for a cat', 'Type a cat\'s name');
// cats.push(response);
// console.log({ cats });

// var currentCat = cats.pop();

// alert(currentCat);
// console.log({ cats });

// shift and unshift work on the front of the array

// var dogs = [];
// console.log(dogs);

// dogs.unshift(prompt('Dog Name'));
// console.log(dogs);
// dogs.unshift(prompt('Dog Name'));
// console.log(dogs);

// var current = dogs.shift();
// console.log(current);

//Filling an array with a value
// var cars = ['Nissan', 'Suzuki', 'Toyota', 'Audi', 'BWM'];
// console.log(cars);
// cars.fill('Lexus');
// console.log(cars);
// cars.fill('Tesla', 1, 3);
// console.log(cars);
// cars.fill('Skoda', cars.length - 2);
// console.log(cars);

//Splice can remove or insert an element at a specific position or range
// var animals = ['cat', 'more cats', 'dogs', 'monkeys', 'deer', 'horses'];
// animals.splice(0, 2);
// console.log(animals);
// animals.splice(1, 1, 'cats', 'more cats');
// console.log(animals);

//Split a list stored as a string into ana array

var shows = 'Game of Thrones, The 100, Dark Matter';
var showsArr = shows.split(',');
console.log(showsArr);

var gamesStr = 'Pokemon Tetris Patatap';
var games = gamesStr.split(' ');
console.log(games);

//Join
var movies = ['Avengers', 'The Matrix', 'Men in Black', 'Grease'];
var movieStr = movies.join('-');
console.log(movieStr);

// Functions

//function defintion
function renderOne(item) {
  var list = document.getElementById('list');
  var listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
}

renderOne('Damien'); //Damien
renderOne('Dario'); //Tabby
renderOne('Kara'); //Butch
renderOne('Halle'); //Avengers

function renderAll(param) {
  for (var i = 0; i < param.length; i++) {
    renderOne(param[i]);
  }
}

renderAll(movies);
