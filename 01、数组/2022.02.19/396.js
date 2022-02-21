// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxRotateFunction = function (nums) {
//   let n = nums.length;
//   let max = -Number.MAX_VALUE;
//   for (let i = 0; i < n; ++i) {
//     let rotateArr = rotate(nums, i);
//     let resultAdd= 0
//     for(let j=0; j<rotateArr.length;++j){
//         resultAdd+= rotateArr[j]*j;
//     }
//     if(resultAdd>max){
//         max = resultAdd
//     }
//   }
//   return max;
// };

// var rotate = function (nums, k) {
//   let n = nums.length;
//   let arr = new Array(n);
//   for (let i = 0; i < n; ++i) {
//     arr[(i + k) % n] = nums[i];
//   }
//   for (let i = 0; i < n; ++i) {
//     nums[i] = arr[i];
//   }
//   return nums;
// };
// // let nums = [4,3,2,6] 


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
    let n = nums.length;
    let f=0,sum=0;
    for(let i=0; i<n;i++){
        sum += nums[i];
        f += nums[i] * i;
    }
    let result = f;
    for(let i=1; i<n; i++){
        f = f + sum - n * nums[n-i];
       result = result > f ? result : f;
    }
    return result;
};
let nums = [18,4,13,-1,2,7,19,14,11,0,-9,9,4,2,-2,-7,18,18,-7,-5,9,6,-8,3,13,0,15,9,10,-1,17,13,13,-8,3,8,4,19,10,-8,18,15,11,13,11,1,14,2,10,1,11,5,18,5,-8,13,-10,5,-8,-9,-5,9,10,-10,-3,-3,-4,-4,-8,-10];
console.log(maxRotateFunction(nums));