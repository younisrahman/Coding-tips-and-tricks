// console.log('Hello World');
// Remove falsy values from any array
let miscellaneous = [
  '🍎',
  false,
  '🍊',
  NaN,
  0,
  undefined,
  '🌶️',
  null,
  '',
  '🥭',
];
let cleanArray = miscellaneous.filter(Boolean);
console.log(cleanArray);

//
// Using !! in front of any value
console.log(!!'mashrafi'); // true
console.log(!!1); // true
console.log(!!0); // false
console.log(!!undefined); // false
// We can also use Boolean() to achieve same
console.log(Boolean('mashrafi')); // true

//
// Resizing any array
let animals = ['🐕', '🐒', '🦊', '🐅'];
// We can use array's length property
animals.length = 3;
console.log(animals); // ["🐕", "🐒", "🦊"]

//
// How to flattern a multi-dimensional array
let smileys = ['🥰', ['😄', '😃'], '😉', ['🥲', '😑']];
// We can use array.flat() method to flattern one level array
console.log(smileys.flat()); // ['🥰', '😄', '😃', '😉', '🥲', '😑']
// Multi level array
let smileys2 = ['🥰', ['😄', '😃', ['🥲', '😑']], '😉'];
// We can pass 'Infinity' parameter to array.flat function
console.log(smileys2.flat()); // ['🥰', '😄', '😃', '🥲', '😑', '😉']
console.log(smileys2.flat(Infinity)); // ['🥰', '😄', '😃', '🥲', '😑', '😉']

//
// Short conditionals
const captain = 'Mashrafi';
// Instead of doing this
if (captain === 'Mashrafi') {
  console.log('❤️');
}
// We can use &&
captain === 'Mashrafi' && console.log('❤️');
// And instead of doing this
if (captain !== 'Mashrafi') {
  console.log('😡');
}
// We can use ||
captain === 'Mashrafi' || console.log('😡');

//
// Replace all occurances of a string
const quote =
  'React is a JS framework & this framework is the most popular front-end framework right now';
// Replace all occurances of 'framework' with 'library'
console.log(quote.replace(/framework/g, 'library')); // React is a JS library & this library is the most popular front-end library right now

//
// Log values with variable names smartly
const library1 = 'jQuery';
const library2 = 'React';
// Instead of doing this
console.log(`library1 - ${library1}`); // library1 - jQuery
console.log(`library2 - ${library2}`); // library2 - React
// We can do this
console.log({ library1 }); // {library1: 'jQuery'}
console.log({ library2 }); // {library2: 'React'}

//
// Know performance of a task
// We can wrap our task with performance.now()
const startTime = performance.now();
for (let i = 0; i <= 50; i++) {
  console.log(i);
}
const endTime = performance.now();
console.log(`loop took ${endTime - startTime} milliseconds to finish`);
