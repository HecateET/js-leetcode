/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    const counts = new Array(10).fill(0)
    const len = secret.length;
    let xA = 0,xB=0;
    for(let i=0;i<len;i++){
        if(secret[i]==guess[i]){
            xA++;
        }else{
           
            if(counts[guess.charAt(i)-'0']-- > 0){
                xB++;
            }
            if(counts[secret.charAt(i)-'0']++ < 0){
                xB++;
            }
        }
    }
    return `${xA}A${xB}B`;
};

let secret = '1123',guess='0111'
let result = getHint(secret,guess);
console.log(result)