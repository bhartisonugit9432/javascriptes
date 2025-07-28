// const myArr = [0, 1, 2, 3, 4, 5];
// let myArr2 = ["sunday", "monday", "tuesday"];
// myArr.push(6);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

// console.log("A", myArr);
// const myn1 = myArr.slice(1, 3);
// console.log("new Array");
// console.log("B", myn1);
// console.log("old array");
// console.log(myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("new splice Array");
// console.log("C", myn2);
// console.log("old array");
// console.log(myArr);

// const mcu = ["thor", "capton America", "iron man"];
// const dc = ["super man", "flush", "batman"];
// const ISH = ["ram charan", "allu arjun", "prabhas", "Jr ntr"];

// const newArray = mcu.concat(dc);
// console.log(newArray);

// const n1 = mcu.push(dc);
// console.log(mcu);

// const all_hero = [...mcu, ...dc, ...ISH];
// console.log(all_hero);

const another_array = [1, 2, 3, [4, 5, 6], 5, 6, [4, , 5, [6, 7]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("sonu bharti"));
console.log(Array.from("sonu bharti"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
