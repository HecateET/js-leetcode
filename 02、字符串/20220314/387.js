/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const counts = new Array(26).fill(0);

    // 遍历s，统计每个字符出现的次数
    for(const c of s){
        counts[c.charCodeAt(0)-97]++; //charcodeAt ACCII码，a-97
    }

    // 
    for(let i=0; i< s.length;i++){
        if(counts[s[i].charCodeAt(0)-97] == 1){
            return i;
        }
    }
    return -1;
};

let s = 'Afsfa'
let result = firstUniqChar(s);
console.log(result);
