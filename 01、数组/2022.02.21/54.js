/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
     if(!matrix.length || !matrix[0].length){
         return[]
     }
    let left = 0,right = matrix[0].length-1;
    let top =0,down = matrix.length-1;
    let arr =[];

    while(true){
        for(let i=left; i<=right;++i){
            arr.push(matrix[top][i]);
        }
        top++;
        if(top>down) break;
        for(let i=top;i<=down;++i){
            arr.push(matrix[i][right]);
        }
        right--;
        if(left>right) break;
        for(let i=right; i>=left;--i){
            arr.push(matrix[down][i]);
        }
        down--;
        if(top > down) break;
        for(let i=down; i>=top; --i){
            arr.push(matrix[i][left]);
        }
        left++;
        if(left>right) break;
    }
    return arr;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let result = spiralOrder(matrix);
console.log(result)