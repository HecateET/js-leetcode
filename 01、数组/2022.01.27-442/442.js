/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let arrCount = {};
  let resultArr = [];
  for (const [i, num] of nums.entries()) {
    if (arrCount[num]) {
      arrCount[num]++;
    }else{
      arrCount[num] = 1;
    }
    if(arrCount[num]==2) {
        resultArr.push(num)
    }
  }
/* //   console.log("arrCount:", arrCount);
//   for (const i in arrCount) {
//       console.log("arrCountfor-I:",i)
//     if (arrCount[i] == 2) {
//       resultArr.push(parseInt(i));
//     }
//   }
//   console.log("resulute:", resultArr); */
  return resultArr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function (nums) {
    let arrCount = {};
    let resultArr = [];
    for (num of nums) {
      if (arrCount[num]) {
        arrCount[num]++;
      }else{
        arrCount[num] = 1;
      }
      if(arrCount[num]==2) {
          resultArr.push(num)
      }
    }
    return resultArr;
  };

let nums = [4, 3, 2, 7, 8, 2, 3, 1,3];
let result = findDuplicates(nums);
console.log("last-Result:", result);
