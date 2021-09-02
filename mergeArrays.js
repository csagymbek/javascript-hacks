const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];
const arrayThree = [...arrayOne, ...arrayTwo]; // spread operator
const arrayFour = arrayOne.concat(arrayTwo); // Array.prototype.concat()
const arrayFive = [].concat(arrayOne, arrayTwo);
const arraySix = new Array().concat(arrayOne, arrayTwo);
console.log(arrayThree);
console.log(arrayFour);
console.log(arrayFive);
console.log(arraySix);
