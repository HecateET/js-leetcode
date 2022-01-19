/**
 * 485. 最大连续 1 的个数
 * https://leetcode-cn.com/problems/max-consecutive-ones/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
     var indexCount=0;
     var maxCount =0;
     var flagNum = 1;
    nums.forEach(item=>{
        if(item == flagNum){
            indexCount++;
        }else{
            if(indexCount > maxCount){
                maxCount = indexCount
            }
            indexCount = 0;
        }
    })
   if(indexCount>maxCount) maxCount = indexCount
    return maxCount
}

// let nums= [2,3,4,4,4,5,5,2,3,1,1,1,1,1,1];
let nums = [1,2,1,1,1,3,3]
let result =findMaxConsecutiveOnes(nums)
console.log(result)