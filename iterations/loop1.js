// for of

const arr = [1, 2, 3, 4, 5, 6, 7];
for (const num of arr) {
  //   console.log(num);
}

const greetings = "HELLO WORLD!";
for (const greet of greetings) {
  //   console.log(`Each char is : ${greet}`);
}

const map = new Map();

map.set("IN", "India");
map.set("USA", "United state of america");
map.set("Fr", "France");
map.set("IN", "India");
// console.log(map);

for (let key of map) {
  //   console.log(key);
}

for (let [key, value] of map) {
  //   console.log(key, ":-", value);
}

// Object me iteration not working
// const myObj = {
//   " game1": callofduty,
//   game2: spiderman,
// };

// for (let [key, value] of myObj) {
//   console.log(key, ":-", value);
// }

// ---------- for in iterations ----------

// Object

const myObj = {
  cpp: "c++",
  js: "javascript",
  swift: "swift for apple",
  rb: "ruby",
};

for (const key in myObj) {
  //   console.log(`${key} short cut is for ${myObj[key]}`);
}

// Array

const programming = ["js", "java", "py", "rb", "cpp", "php"];
for (const key in programming) {
  //   console.log(programming[key]);
}

// forEach loop

const coding = ["js", "java", "py", "rb", "cpp", "php"];

coding.forEach(function (item) {
  console.log(item);
});

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

coding.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

const myCoding = [
  {
    language: "javascript",
    languageFileName: "js",
  },
  {
    language: "java",
    languageFileName: "java",
  },
  {
    language: "python",
    languageFileName: "py",
  },
];
myCoding.forEach((item) => {
  console.log(item.languageFileName + ":" + item.language);
});

// forEach does not return anything, it returns

const value = coding.forEach((item) => {
  console.log(item);
  // return item;
});
// but it returns undefined
// console.log(value);
