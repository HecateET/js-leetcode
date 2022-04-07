/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    // / 去除头部空格
    let sArr = s.trim()
    let reg = /\d/  // 仅限数字0~9
    let flag = false;   // 是否为负数，默认否
    const len = sArr.length;
    let index = 0;
    if(index == len){
        return 0;
    }
    if(sArr[index] == '-' || sArr[index] == '+'){
         // 如果第一个字符是正负号，则判断第二个字符是否是数字
        if(!reg.test(sArr[index+1])) return 0
    }else {
         // 如果第一个字符不是正负号，则判断第一个字符是否是数字
        if(!reg.test(sArr[index])) return 0
    }
    let result = 0;
    let nums = [];  // 数字数组
    for(let i=0;i<len;i++){
        if(!nums.length && sArr[i] === '-'){
             // nums为空的情况下，遇到正负号
            flag = true;
            continue
        }else if(!nums.length && sArr[i] === '+'){
            continue
        }
        // 将数字字符放入nums，若遇到非数字，直接跳出循环
        if(reg.test(sArr[i])){
            nums.push(sArr[i])
        }else{
            break;
        }
    }
    const numLen = nums.length;
     // 构造最后的数字
    for(let i=numLen-1;i>=0;i--){
        result += nums[i] *10 **(numLen-1-i);
    }
    const [MIN,MAX] =[-(2**31),2**31-1];
    // 若是负数，判断-res和MIN的大小
    // 若是证书，判断res和MAX的大小
    return flag ? (-result < MIN ? MIN: -result):(result > MAX ? MAX : result);
};

let s = "4193 with words"
let res = myAtoi(s)
console.log(res)