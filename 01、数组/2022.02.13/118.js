/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let arr = [];
    for(let i=0;i<numRows;i++){
        // 初始化
        const rows = new Array(i+1).fill(1);
        // 最左边和最右边的值都是1，所以j=0和j=length-1;不需要再单独计算
        for(let j=1;j<rows.length-1;j++){
            // 上一行的的下标：i-1, 左上角：j-1 和右上角：j
            rows[j] = arr[i-1][j]+arr[i-1][j-1]
        }
        arr.push(rows);
    }
    return arr;
};
let numRows = 5;
let result = generate(numRows);
console.log(result)