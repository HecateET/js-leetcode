/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
    nums.sort((a,b)=> a-b)
    let len = nums.length;
    return Math.max(nums[0]*nums[1]*nums[len-1],nums[len-1]*nums[len-2]*nums[len-3])
};
let  nums = [1,2,3]

let max = maximumProduct(nums)
console.log(max)