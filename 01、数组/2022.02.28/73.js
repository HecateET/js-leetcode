/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let row = new Array(m).fill(0);
    let col = new Array(n).fill(0);
    for(let i=0; i<m; i++){
        for(let j=0;j<n;j++){
            if(!matrix[i][j]){
                row[i] = col[j] = 1;
            }
        }
    }
    for(let i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(row[i] || col[j]){
                matrix[i][j] =0;
            }
        }
    }
    return matrix;
};

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
let result = setZeroes(matrix);
console.log(result)