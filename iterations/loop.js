// for loops

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     console.log("5 is the best number");
//   }

//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop ${i}`);

//   for (let j = 0; j <= 10; j++) {
//     console.log(`inner loop ${j} and inner loop ${i}`);
//   }
// }

// table of 2 to 30

// for (let i = 2; i <= 30; i++) {
//   console.log(`table of ${i}`);

//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

const myArray = [
  "iron man",
  "spider man",
  "captain america",
  "thor",
  "black panther",
  "halk",
  "lady thor",
];
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// break and continue

// for (let n = 1; n <= 20; n++) {
//   if (n == 5) {
//     console.log(`Detected 5`);
//     // break;
//     continue;
//   }
//   console.log(`value of n ${n}`);
// }

// break can be use is loop to stop

// continue can be condition to pause and continue loop work

let arr = 0;
// while (index <= 10) {
//   console.log(`value of index is ${index}`);
//   index = index + 2;
// }

while (arr < myArray.length) {
  console.log(`name of hero : ${myArray[arr]}`);
  arr = arr + 1;
}
