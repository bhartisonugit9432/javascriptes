// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

// if else if else coditions

// const balance = 1000;

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else if (balance < 1200) {
//   console.log("less than 1200");
// } else {
//   console.log("greater than 1000");
// }

// const UserLoggedIn = true;
// const debitCard = true;
// const loginWithEmail = true;
// const loginWithGoogle = false;

// if (UserLoggedIn && debitCard && 5 == 6) {
//   console.log("allow to buy course");
// }
// if (loginWithGoogle || loginWithEmail) {
//   console.log("user logged in");
// }

// ++++++++++++++++++++++++++ Switch Statement ++++++++++++++++++++++++++++

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// ---------numbers----------

// const month = 3;
// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Fev");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 2:
//     console.log("April");

//     break;

//   default:
//     console.log("default case match");

//     break;
// }

// ---------String----------

// const month = "march";
// switch (month) {
//   case "jan":
//     console.log("Jan");
//     break;
//   case "fev":
//     console.log("Fev");
//     break;
//   case "march":
//     console.log("March");
//     break;
//   case "april":
//     console.log("April");

//     break;

//   default:
//     console.log("default case match");

//     break;
// }

// +++++++++++++++ Truthy +++++++++++

// const userEmail = "shiv@gmail.com";
// const userEmail = "";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user Email");
// }

// -------falsy----------

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// -----------truthy---------

// "0", 'false', " ", [], {}, function(){}

// check Array is empty

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

// check object is empty

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("object is empty");
// }

// Nullish coaleseing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
