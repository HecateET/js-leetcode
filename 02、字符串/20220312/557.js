/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let words = s.split(' ');
    for(let i=0;i<words.length;i++){
        console.log('翻转前：',words[i],typeof words[i])
        if(words[i]!=''){
            words[i] = words[i].split('').reverse().join('');
            words[i] = reverseString(words[i])
           
        }
    }
    return words.join(' ')
};

let reverseString = function(arr){
    const l = arr.length;
    for(let i=0,j=l-1; i<j;i++,j--){
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}

let s = "Let's take LeetCode contest"
let result = reverseWords(s);
console.log(result)