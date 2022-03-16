/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    const counts = new Array(26).fill(0);

    //遍历s，统计每个字符出现的次数
    for(const c of s){
        counts[c.charCodeAt(0)-97]++;
    }
    for(const c of t){
        counts[c.charCodeAt(0)-97]--;
        if(counts[c.charCodeAt(0)-97]<0){
            return c;
        }
    }
    return ''
};

let s = "abcd", t = "abcde";
let result = findTheDifference(s,t);
console.log(result);