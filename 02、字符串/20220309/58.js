/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let wordArr = s.split(' ');
    let arr =[]
    console.log('')
    wordArr.forEach((item)=>{
        if(item!=''){
            arr.push(item)
        }
    })
    return arr[arr.length-1].length;
};

let s ="luffy is still joyboy"
let result = lengthOfLastWord(s);
console.log(result)