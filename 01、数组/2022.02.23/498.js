/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findDiagonalOrder = function(mat) {
    let arr = [];
    let row = mat.length;
    if(!row) return arr;
    let col = mat[0].length;
    if(!col) return arr;
    let flag = true;
    for(let i=0; i<row+col-1; i++){
        let limitRow = flag ? row : col;
        let limitCol = flag ? col : row;

        let x = i <limitRow ? i :limitRow -1;
        let y = i - x;
        while(x>=0 && y< limitCol){
            arr.push(flag? mat[x][y]:mat[y][x]);
            x--;
            y++;
        }
        flag = !flag;
    }
    return arr
};

let mat = [[1,2,3],[4,5,6],[7,8,9]]
let result = findDiagonalOrder(mat)
console.log(result)
// 输出：[1,2,4,7,5,3,6,8,9]