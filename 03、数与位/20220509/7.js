/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let rev = 0;
    while(x!==0){
        const d = x % 10;
        x = ~~(x/10);
        rev = rev *10 +d;
        if(rev < Math.pow(-2,31) || rev> Math.pow(2,31)-1) {
            return 0
        }
    }
    return rev
};

let x  = -1345
let res = reverse(x);
console.log(res)