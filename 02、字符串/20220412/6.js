/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let len = s.length
    if(numRows === 1 || numRows>=len){
        return s;
    }
    const t = numRows*2 - 2;
    let res = []

    for(let i=0;i<numRows;i++){ //矩阵的行
        for(let j=0; j< len-i; j+=t){ //起始下标
            res.push(s[j+i]);
            if (0 < i && i < numRows - 1 && j + t - i < len) {
                res.push(s[j + t - i]); // 当前周期的第二个字符
            }
        }
    }
    return res.join('')
};

let s = "PAYPALISHIRING", numRows = 3
let res = convert(s,numRows);

console.log(res)
