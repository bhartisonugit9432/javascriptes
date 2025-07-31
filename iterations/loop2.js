const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNums.filter((num) => num > 5);
// console.log(newNum);

const newNum = myNums.filter((num) => {
  //   return num > 5;
});
// console.log(newNum);

// using forEach iteration
// const newNums = []
// myNums.forEach((num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// });
// console.log(newNums);

const books = [
  { title: "book one", gener: "history", publish: "1981", adition: "2004" },
  { title: "book two", gener: "fiction", publish: "2005", adition: "2006" },
  { title: "book three", gener: "history", publish: "2001", adition: "2001" },
  {
    title: "book four",
    gener: "science - fiction",
    publish: "2006",
    adition: "2004",
  },
  { title: "book five", gener: "history", publish: "2004", adition: "2010" },
  { title: "book six", gener: "math", publish: "2002", adition: "2008" },
  { title: "book seven", gener: "science", publish: "1983", adition: "2009" },
  {
    title: "book eight",
    gener: "science - fiction",
    publish: "1980",
    adition: "2006",
  },
];

const userbooks = books.filter((bk) => bk.publish > "2000");
console.log(userbooks);
