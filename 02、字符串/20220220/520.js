/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
     // 如果第一个字母是小写的时候
    if(word.length >=2 && word[0] === word[0].toLowerCase() && word[1] === word[1].toUpperCase()){
        return false;
    }
    // 无论第一个字母大写还是小写。
    for(let i=2; i<word.length;++i){
        if(word[i] === word[i].toLowerCase() ^ word[1] === word[1].toLowerCase()){
            return false;
        }
    }
    return true;
};
let word = 'mL'
let result  = detectCapitalUse(word)
console.log(result)