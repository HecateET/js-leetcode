/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const map = new Object();
    for(let s of strs){
        let counts = new Array(26).fill(0);
        for(let c of s){
            counts[c.charCodeAt(0)-97]++
        }
        map[counts] ? map[counts].push(s) : map[counts]=[s];
    }
    return Object.values(map);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
let result = groupAnagrams(strs)
console.log(result)