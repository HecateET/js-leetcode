/**
 * @param {number[]} nums
 * @return {string}
 */
 var optimalDivision = function(nums) {
    const ans = [], len = nums.length;
    ans.push(nums[0]);
    if(len>1){
        ans.push('/')
        if(len>2){
            ans.push('(');
        }
        ans.push(nums[1]);
        for(let i=2;i<len;i++){
            ans.push('/');
            ans.push(nums[i])
        }
        if(len>2){
            ans.push(')')
        }
    }
    return ans.join("")
};

let nums =  [1000,100,10,2]
let result = optimalDivision(nums)
console.log(result)