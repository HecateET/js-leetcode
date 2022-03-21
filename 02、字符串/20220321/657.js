/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let x=0,y=0;
    for(let i=0;i<moves.length;i++){
        const ch = moves.charAt(i);
        if(ch =='U'){
            y++;
        }else if(ch =='D'){
            y--;
        }else if(ch == 'L'){
            x++;
        }else if(ch == 'R'){
            x--;
        }
    }
    return x==0 && y==0
};
var judgeCircle = function(moves) {
    let x=0,y=0;
    for(ch of moves){
        console.log(ch);
        switch(ch){
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x++;
                break;
            case 'R':
                x--;
                break;
        }
    }
    return x==0 && y==0
};

let moves = "RRUDLLR"
let result = judgeCircle(moves);
console.log(result)