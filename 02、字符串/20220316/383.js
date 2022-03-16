/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length>magazine.length){
        return false
    }
    const counts = new Array(26).fill(0)
    for(const c of magazine){
        counts[c.charCodeAt(0)-97]++;
    }

    for(const c of ransomNote){
        counts[c.charCodeAt(0)-97]--;
        if(counts[c.charCodeAt(0)-97] <0){
            return false;
        }
    }
    return true
};