/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var checkPossibility = function(nums) {
    let boolean = true;
    for(let i=1;i<nums.length;i++){
        if(nums[i] < nums[i-1]){
            if(boolean){
                boolean = false;
                if(i>=2 && nums[i]<nums[i-2]){
                    nums[i] = nums[i - 1];
                }
            }else{
                console.log("nums:",nums)
                return false
            }
        }
    }
    console.log("nums:",nums)
    return true;
};

let nums = [4,2,3]
let result = checkPossibility(nums);

console.log("result:",result)
