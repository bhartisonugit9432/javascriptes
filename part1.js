const FindLongestWord = (str) => {
  if ((str.trim().length = 0)) {
    return false;
  }
  words = str.split("");
  words = words.sort();
  console.log(words);
};
console.log(
  FindLongestWord("thing doesn't work. Anyone know how to go about this")
);
