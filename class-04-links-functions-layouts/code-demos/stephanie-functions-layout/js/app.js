'use strict';
var userPoints = 0;

console.log('hello world!');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

// var valid = validateName(user);
while (!validateName(user)) {
  user = prompt('What is your name? Really, we need it.');
  // valid = validateName(user);
}
// give it the thing we want to validate
// get back some indication of whether its valid or not. how about a boolean

function validateName(input) {
  // validate that it is truthy (not an empty string, and not null)
  if (input) {
    return true;
  }
  return false;
}

// TODO: write a validateNumber

if (user !== 'stephanie') {
  alert('too bad you\'re not a stephanie');
}

alert('Hi ' + user + '! I am so glad you decided to come to my site.');

var answer = prompt('Is Stephanie\'s favorite food popcorn.', 'type yes or no').toLowerCase();
console.log(answer);

var foodsILike = ['tatertots', 'juanitas tortilla chips', 'popcorn', 'kale'];
var penguinsILike = ['gentoo', 'adelie', 'chinstrap'];
// var printList = function () {
//   for (var i = 0; i < foodsILike.length; i++) {
//     console.log(foodsILike[i]);
//   }
// };

function printList (listName) {
  for (var i = 0; i < listName.length; i++) {
    console.log(listName[i]);
  }
}

printList(foodsILike);
printList(penguinsILike);

if (answer === 'yes' || answer === 'y') {
  userPoints++;
} else {
  alert('Wrong! try again');
}

alert('you have ' + userPoints + ' points.');

// functions! print list, validate
