const allLongestString = (arrayString: string[]): string[] => {
  let longestString = 0;
  const longestWord = [];

  arrayString.forEach((val) => {
    longestString = longestString < val.length ? val.length : longestString;
  });

  arrayString.forEach((val) => {
    if (longestString === val.length) {
      longestWord.push(val);
    }
  });

  return longestWord;
};

console.log(
  allLongestString(["ab", "abc", "efg", "cf", "of", "abcde", "efghi"])
);
