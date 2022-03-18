/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
    const counts = new Array(26).fill(0);

    for(const c of s){
        counts[c.charCodeAt(0)-97]++;
    }
    for(const c of t){
        counts[c.charCodeAt(0)-97]--;
        if(counts[c.charCodeAt(0)-97]<0){
            return false
        }
    }
    return true
};