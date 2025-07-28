// block scope

// if (true) {
//   const a = 20;
//   let b = 30;
//   var c = 20;
//   //   console.log(a, b);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// var can be print on block scope or global scope , it can not declair and again use
// it is problematic var
// => global variable can be use on global scope and block scope
// => block scope variable only use block scope but var can be create problem (block scope ke barhar bhi use karta hai)

// function one() {
//   const username = "hitesh";
//   function two() {
//     const website = "youtube";
//     console.log(username); // no error pairent variable use
//   }
//   // console.log(website); error block scope error
//   two();
// }
// one();

// hosting in javascript

addOne(5);
function addOne(num) {
  return num + 1;
}
const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
