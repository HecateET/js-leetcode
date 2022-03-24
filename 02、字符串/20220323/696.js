/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let i = 0, l = s.length,sum = 0;
    while(i<l-1){
        const  ch = s.charAt(i),next = s.charAt(i+1)
        if((ch == '0' && next == '1')||(ch == '1' && next == '0')){
            let left = i-1,right = i+2;
            sum++;
            while(left >=0 && right <=l-1){
                if(s.charAt(left)== ch && s.charAt(right) == next){
                    sum++;
                }else{
                    break;
                }
                left--,right++;
            }
        }
        i++
    }
    return sum
};

let s = '00111100'
let result = countBinarySubstrings(s)
console.log(result);
