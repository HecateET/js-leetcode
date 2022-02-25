/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let row = mat.length;
    let col = mat[0].length;
    if(r*c != row * col && col!=0) return mat;

    let arr =  ans = new Array(r).fill(0).map(() => new Array(c).fill(0))
    for(let i=0; i< row*col; i++){
        arr[Math.floor(i/c)][i%c] = mat[Math.floor(i/col)][i%col];
    }
    return arr;
};

let mat = [[1,2],[3,4]], r = 2, c = 4;
let result = matrixReshape(mat,r,c);
console.log(result)