/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let n = nums.length;
    let arr = new Array(n);
    for(let i=0; i<n;++i){
        arr[(i+k)%n] = nums[i];
    }
    for(let i=0; i<n;++i){
        nums[i] = arr[i]
    }
    console.log(nums)
};

let nums = [1,2,3,4,5,6,7], k = 3;
rotate(nums,k)
// let result = rotate(nums,k);
