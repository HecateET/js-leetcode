/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = "1";
  for (let i = 2; i <= n; ++i) {
    const sArr = [];
    let start = 0,
      pos = 0;

    while (pos < str.length) {
      while (pos < str.length && str[pos] === str[start]) {
        pos++;
      }
      sArr.push("" + (pos - start) + str[start]);
      start = pos;
    }

    str = sArr.join("");
  }
  return str;
};

let n=4;
let res = countAndSay(n);
console.log(res);
