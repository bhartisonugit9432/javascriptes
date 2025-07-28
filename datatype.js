// "use strict";
// console.log(3 + 3);
// console.log("3" + 3);
// console.log(3 + "3");
// console.log("3" + "3");
// console.log("3" + 3 + 1);
// console.log(3 + 3 + "3");

// console.log(typeof "sonu bharti");
// let score = "33abc";
// console.log(typeof score);
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let score = true;
// let a = Number(score);
// console.log(a);
// console.log(typeof a);

// let isLoggedIn = "sonu";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// let value = 3;
// let negValue = -value;
// console.log(negValue);
// console.log(typeof negValue);

// console.log(+true);
// console.log(+"");

// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter);

// let a = 4;
// let b = a++;
// let c = ++b;
// console.log("a : " + a);
// console.log("c : " + c);

// console.log("b : " + b);

// console.log(null == 0);
// console.log(null > 0);
// console.log(null < 0);
// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);

// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outSideTemp = null;
// let userEmail;
// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId);

// const heros = ["ABC", "ABC", "ABC"];
// let myObj = {
//   name: "sonu",
//   age: 24,
// };
// const myfunction = function () {
//   console.log("hellow world");
// };

// console.log(myfunction);
// console.log(typeof myfunction);
// console.log(myObj);
// console.log(typeof myObj);

// const bigNumber = 2451458748547n;
// console.log(typeof bigNumber);

// string

// const name = "sonu";
// const repocount = 50;

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const gameName = new String("Sonu Bharti");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf("t"));

// const newString = gameName.substring(0, 6);
// console.log(newString);
// const anotherString = gameName.slice(-6, 11);
// console.log(anotherString);

const newString = "         sonu bharti     ";
console.log(newString);
console.log(newString.trim());

const url = "https//:sonubharti.com/sonu%20bharti";
console.log(url.replace("%20", "_"));
console.log(url.includes("sunder"));
console.log(url.split("_"));
