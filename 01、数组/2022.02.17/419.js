/**
 * @param {character[][]} board
 * @return {number}
 */
 var countBattleships = function(board) {
    const row = board.length; //行数
    const col = board[0].length; //列数
    let resultNum = 0;
    for(let i=0; i<row; ++i){
        for(let j=0; j<col;++j){
            console.log(board[i][j]);
            if(board[i][j] === 'X'){
                board[i][j] = '.';
                for(let k=j+1; k<col && board[i][k] === 'X'; ++k){
                    board[i][k] = '.';
                }
                console.log(board,'\n');
                for(let k=i+1; k<row && board[k][j] === 'X'; ++k){
                    board[k][j] = '.';
                }
                console.log(board,'\n');
                resultNum++;
                console.log(board,'\n');
            }
        }
    }
    return resultNum;
};

let board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
let result = countBattleships(board);
console.log(result)