var allLongestString = function (arrayString) {
    var longestString = 0;
    var longestWord = [];
    for (var _i = 0, arrayString_1 = arrayString; _i < arrayString_1.length; _i++) {
        val = arrayString_1[_i];
        longestString = longestString < val.length ? val.length : longestString;
    }
    // for (val of arrayString) {
    //   if (longestString === val.length) {
    //     longestWord.push(val);
    //   }
    // }
    arrayString.filter(function (value) {
        console.log(longestString);
        return value.length;
    });
    // return ans;
};
console.log(allLongestString(["ab", "abc", "efg", "cf", "of", "abcde", "efghi"]));
