// function sayMyName() {
//   console.log("S");
//   console.log("O");
//   console.log("N");
//   console.log("U");
//   console.log("B");
//   console.log("H");
//   console.log("A");
//   console.log("R");
//   console.log("T");
//   console.log("I");
// }
// sayMyName();

// function addtwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// function addtwoNumbers(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// const result = addtwoNumbers(3, 5);
// console.log("Result:", result);

// function loginUserMessage(username) {
//   return `${username} just loggedin`;
// }
// // console.log(loginUserMessage("sonu"));
// console.log(loginUserMessage());

// function loginUserMessage(username) {
//   if (!username) {
//     console.log("please enter username");
//     return;
//   }
//   return `${username} just loggedin`;
// }
// // console.log(loginUserMessage("sonu"));
// console.log(loginUserMessage());

// By default set username

// function loginUserMessage(username = "sam") {
//   return `${username} just logged in`;
// }
// console.log(loginUserMessage())

// cart calculate

// function cartCalculate(...num1) {
//   return num1;
// }

// console.log(cartCalculate(200, 400, 500));

// handle Object

// const user = {
//   username: "sonu bharti",
//   price: 199,
// };

// function handleObject(anyObject) {
//   console.log(
// `user name is ${anyObject.username} and price is ${anyObject.price}`
//   );
// }

// // handleObject(user);
// handleObject({
//   username: "sonu bharti",
//   price: 299,
// });

const mynewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(mynewArray));
// console.log(returnSecondValue([400, 600, 300, 100]));
