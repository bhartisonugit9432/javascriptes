// create a symble object and print

const mySym = Symbol("key1");

const JsUser = {
  name: "sonu",
  "full name": " sonu bharti",
  email: "sonu23@gmail.com",
  [mySym]: "mykey1",
  location: "siddharth nagar",
  isLogin: false,
  lastLoginDay: ["monday", "saturday"],
};
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.email);
// JsUser.email = "sonubharti12@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "sonukumar25@gmail.com";
// console.log(JsUser);

// console.log(typeof JsUser[mySym]); // String

JsUser.greeting = function () {
  console.log("Hello Js Users");
};
JsUser.greetingTwo = function () {
  console.log(`Hello Js Users, ${this["full name"]}`);
  console.log(`${this.email}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
