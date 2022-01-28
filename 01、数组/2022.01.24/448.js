/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let lessNums = []
    let len = nums.length
    nums.sort((a,b)=>a-b)
    for(let i=1;i<=len;i++){
        if(nums.indexOf(i) == -1){
            lessNums.push(i)
        }
    }
    return lessNums
};

let nums = [4,5,6,8,9,1,5,2,5,9]
let result = findDisappearedNumbers(nums);
console.log(result)