/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let wordArr = s.split(' ');
    const wl = wordArr.length;
    let arr=[]
    for(let i=0; i<wl;i++){
        const l = wordArr[i].length;
        if(l != 0){
           arr.push(wordArr[i]);
        }
    }
    const al = arr.length
    for(let i=0,j=al-1;i<j;i++,j--){
        if(arr[i]!=''){
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
 
    return arr.join(' ');
};

let s ="  Bob    Loves  Alice   "
let result = reverseWords(s);
console.log(result)