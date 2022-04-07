/**
 * @param {string} equation
 * @return {string}
 */
 var solveEquation = function(equation) {
    let left = equation.split('=')[0]
        right = equation.split('=')[1]
    let [leftX,leftNum] =getNums(left)
    let [rightX,rightNum] =getNums(right);
    let xNum = leftX - rightX,
        num =rightNum- leftNum;
    
    if(xNum === 0 && num ===0){
        return 'Infinite solutions'
    }else if(xNum ===0){
        return 'No solutions'
    }else {
        return `x=${num/xNum}`;
    }
    
};

var getNums =function(str){
    let xNum=0, num =0
    let temp = "";
    for(let c of str){
        if(c === 'x'){
            if(temp && temp!=='+' && temp!=='-'){
                xNum = xNum + Number(temp)
            }else{
                xNum = xNum + Number(temp + 1)
            }
            temp = ''
        }else if(c ==='+' || c === '-'){ 
            num += Number(temp);
            temp = c;
        }else {
            temp += c;
        }
    }

    num += Number(temp);
    return [xNum,num]
}

let equation =  "2x+5-3+x=6+x-2"
let res = solveEquation(equation);
console.log(res)
