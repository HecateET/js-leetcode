/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let len = nums.length;
    let ansArr = new Array(len);
    ansArr[0] = 1;
    for(let i=1;i<len;i++){
        ansArr[i] = nums[i-1] * ansArr[i-1];
    }
    let right =1;
    for(let i=len-1; i>=0;i--){
        ansArr[i] = ansArr[i] * right;
        right *= nums[i];
    }
    return ansArr
};