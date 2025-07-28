// Singleton Object

// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "sonu9478";
tinderUser.name = "sonu_bharti";
tinderUser.isloggedIn = false;
// console.log(tinderUser);

// const regularuser = {
//   email: "sonu123@gmail.com",
//   fulname: {
//     userfullname: {
//       firstname: "Sonu",
//       lastname: "bharti",
//     },
//   },
// };

//  merge of two object
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const obj4 = { 5: "a", 6: "b" };
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// const obj6 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(obj6);

// Database related method

// const Users = [
//   {
//     id: 1,
//     email: "sb@gmail.com",
//   },
//   {
//     name: "sonu",
//   },
//   {
//     number: 9654758475,
//   },
// ];

// Users.email;

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isloggedIn"));
