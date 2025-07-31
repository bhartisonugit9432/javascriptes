const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers = newNum.map((num) => {
//   return num + 10;
// });
// console.log(newNumbers);

const newNumbers = newNum.forEach((num) => {
  //   console.log(num + 10);
});
// console.log(newNumbers);

// chaining rule examole
const newNums = newNum
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);
// console.log(newNums);

// useReducer()

const abc = [1, 2, 3];

// const myTotal = abc.reduce(function (acc, currval) {
//   console.log(`acc: ${acc}, currval: ${currval}`);
//   return acc + currval;
// }, 0);
// console.log(myTotal);

const myTotal = abc.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

const shopingCart = [
  {
    item: "js course",
    price: 2999,
  },
  {
    item: "py course",
    price: 12999,
  },
  {
    item: "java course",
    price: 21999,
  },
  {
    item: "mobile dev course",
    price: 25999,
  },
];

const priceToPay = shopingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
