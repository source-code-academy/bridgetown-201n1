'use strict';

//var input = prompt('Give me some input!').toLowerCase();

// if (input === 'y') {
//   alert('It\'s true');
// }

// if (input === 'y') {
//   alert('It\'s true');
// } else {
//   alert('It\'s false');
// }

//

// switch (input) {
// case 'y':
// case 'yes':
//   alert('This is a clear case of yes!');
//   break;
// case 'n':
// case 'no':
//   alert('This is a clear case of yes!');
//   break;
// default:
//   alert('I dunno what that is');
// }

// Loops

var cats = ['tabby', 'kitteh', 'grey'];

//counting or looping over things with numerical indices
for (var i = 0; i < cats.length; i++) {
  console.log({ [i]: cats[i] });
}

var j = 5;

// run once first
do {
  console.log('I will always run ', j);
  j++;
} while (j < 5);

// run only when true
while (j < 10) {
  console.log('I will not always run ', j);
  j++;
}

cats.forEach(function(cat) {
  console.log('For each cat: ', cat);
});
