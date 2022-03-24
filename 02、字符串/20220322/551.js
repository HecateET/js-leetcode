/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
    let a = 0,l = 0,p=0;
    for(let i = 0,len=s.length;i<len;i++){
        const c = s.charAt(i);
        if(c == 'A'){
            a++
        }else if(c == 'L'){
            l++
            let pre = s.charAt(i-1),
                next = s.charAt(i+1);
            if(pre == 'L' && next == 'L'){
                return false
            }
        }else if(c == 'P'){
            p++;
        }
    }
    return a<2;
}
let s = 'LLL'
let result = checkRecord(s)
console.log(result)