
 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
  var rotate = function(matrix) {
    let m = matrix.length;
    for(let i=0;i< Math.floor(m/2);i++){
        for(let j=0;j< Math.floor((m+1)/2);j++){
            let tem = matrix[i][j]
            matrix[i][j] = matrix[m-1-j][i];
            matrix[m-j-1][i] = matrix[m-i-1][m-j-1];
            matrix[m-i-1][m-j-1] = matrix[j][m-i-1];
            matrix[j][m-i-1] = tem
            // console.log('arr:  i',m-1-j,'j',i,arr[i][j],' matrix:','i:',i,'j:',j, ' ',matrix[i][j])
        }
    }
};

  

let matrix =[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
let result = rotate(matrix);
console.log(result)
