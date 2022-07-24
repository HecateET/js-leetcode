/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left =0 ,right = nums.length-1;
    while(left<=right){
        let mid = Math.floor(left+(right-left)/2);
        if(nums[mid]>target){
            right = mid-1;
        }else if(nums[mid]<target){
            left = mid+1;
        }else{
            return mid;
        }
    }
    return -1;
};

let nums =[-1,0,3,5,9,12],target =9;
let res = search(nums,target);
console.log(res)