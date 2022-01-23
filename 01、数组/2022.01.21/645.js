//645. 错误的集合
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let arr =[0,0],len = nums.length
    nums.sort((a,b)=>a-b)
    let prv = 0
    for(let i=0; i<len; i++){
        const now = nums[i]
        if(prv == now){
            arr[0]= prv
        }else if(now-prv > 1){
            arr[1] = prv+1
        }
        prv = now;
    }
    if(nums[len-1]!==len) arr[1] = len;
    return arr
};

let nums = [2,2]
let arr = findErrorNums(nums)
console.log(arr)