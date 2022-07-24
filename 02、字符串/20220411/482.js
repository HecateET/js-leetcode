/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
    let result =[]
    let count = 0

    for(let i = s.length-1; i>=0; i--){
        if(s[i] !== '-'){
            count++;
            result.push(s[i].toUpperCase());

            if(count % k == 0){
                result.push('-');
            }
        }
    }

    if(result.length>0 && result[result.length-1] === '-'){
        result.pop();
    }
    return result.reverse().join('');
};

let s ="5F3Z-2e-9-w",k=4;
let res = licenseKeyFormatting(s,k)
console.log(res)