/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let str = s.toLocaleLowerCase().replace(/[\W_]/ig, '');
    let len = str.length;
    for(let i=0; i<Math.ceil(len/2);i++){
        if(str[i]!== str[len-i-1]){
            return false
        }
    }
    return true
};

let s = 'A man, a plan, a canal: Panama'
let result = isPalindrome(s)
console.log(result)