/**
 * @param {string} s
 * @return {string}
 */
 var originalDigits = function(s) {
    const c = new Map();
    for(const ch of s){
        c.set(ch,(c.get(ch) || 0) +1);
    }

    const word = new Array(10).fill(0);
    word[0] = c.get('z') || 0;
    word[2] = c.get('w') || 0;
    word[4] = c.get('u') || 0;
    word[6] = c.get('x') || 0;
    word[8] = c.get('g') || 0;

    word[5] = (c.get('f') || 0) - word[4];
    word[3] = (c.get('h') || 0) - word[8];
    word[7] = (c.get('s') || 0) - word[6];

    word[1] = (c.get('o') || 0 ) - word[0] - word[2] -word[4];

    word[9] = (c.get('i') || 0) - word[5] - word[6] - word[8];

    const result = [];
    for(let i=0;i<10;++i){
        for(let j=0;j<word[i]; ++j){
            result.push(String.fromCharCode(i + '0'.charCodeAt()));
        }
    }
    return result.join('')
};

let s = 'fviefuro';
let result = originalDigits(s);
console.log(result)