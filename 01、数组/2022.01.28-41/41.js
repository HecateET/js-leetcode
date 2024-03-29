/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    for(let i =0; i<nums.length; i++){
        while(nums[i]>0 && nums[i] <=nums.length && nums[i]!==nums[nums[i]-1]){
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i]!=i+1){
            return i+1;
        }
    }
    return nums.length + 1
};

var firstMissingPositive = function(nums) {

    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            return i
        }
    }
    return nums.length +1
}