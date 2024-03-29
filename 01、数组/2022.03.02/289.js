/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    // 八个方向的偏移量
    const idx = [0, 1, 0, -1, -1, -1, 1, 1];
    const jdx = [1, 0, -1, 0, 1, -1, 1, -1];

    // 数组副本
    const CopyBoard = board.map(ary => {
        // 值是基础类型（Number），不存在引用问题，直接解构比较方便
        return [...ary];
    });


    // 遍历每个细胞
    for(let i = 0; i < CopyBoard.length; i++) {
        for(let j = 0; j < CopyBoard[i].length; j++) {
            
            // 周边活细胞统计
            let liveAmount = 0;

            // 八个方向都走一遍
            for(let index = 0; index < 8; index++) {
                let x = i + idx[index];
                let y = j + jdx[index];

                // 边界规避
                if(x < 0 || y < 0 || x >= CopyBoard.length || y >= CopyBoard[i].length) continue;
                
                // 活细胞则计数加1
                liveAmount += CopyBoard[x][y] ? 1 : 0;
            }

            // 该位置细胞死活决策
            if(liveAmount < 2 || liveAmount > 3) {
                board[i][j] = 0;
            } else if (liveAmount <= 3 && CopyBoard[i][j]) {
                board[i][j] = 1;
            } else if (liveAmount === 3 && !CopyBoard[i][j]) {
                board[i][j] = 1;
            }
        }
    }
};


// /**
//  * @param {number[][]} board
//  * @return {void} Do not return anything, modify board in-place instead.
//  */
//  var gameOfLife = function(board) {
//     let nerghbors = [0,1,-1];
//     let row = board.length;
//     let low = board[0].length;

//     //创建一个复制数组，并将board内的值一一复制
//     let copyBoard = new Array(row).fill(0).map(()=>new Array(low).fill(0));
//     for(let i=0; i<row;i++){
//         for(let j=0; j<low;j++){
//             copyBoard[i][j] = board[i][j];
//         }
//     }

//     // 遍历每一个格子的细胞
//     for(let i=0; i<row;i++){
//         for(let j=0; j< low;j++){
//             // 对于每个细胞统计他的8个相邻的位置的活细胞数量
//             let liveNerghbor = 0;
//             for(let m=0; m<3;m++){
//                 for(let n=0; n<3; j++){
//                     if(!nerghbors[m] ==0 && nerghbors[n]==0){
//                         let r = (i+ nerghbors[m]);
//                         let c = (j+ nerghbors[n]);
//                         if((r<row && r >=0) && (c < col && c>=0)&& (copyBoard[r][c] == 1)){
//                             liveNerghbor +=1;
//                         }
//                     }
//                 }
//             }

//             //规则1or 规则3
//             if((copyBoard[i][j] == 1) && (liveNerghbor<2 || liveNerghbor > 3)){
//                 board[i][j] = 0;
//             }
//             if(copyBoard[i][j] ==0 && liveNerghbor==3){
//                 board[i][j] = 1;
//             }
//         }
//     }
// };
