/**
 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {
    const l = score.length;
    let ranking = [...score];
    ranking.sort((a,b)=> b-a);
    let resultArr = [];
    for(let i=0;i<l;i++){
        let index = ranking.indexOf(score[i])
        if(index==0){
            resultArr.push('Gold Medal');
        }else if(index==1){
            resultArr.push('Silver Medal');
        }else if(index==2){
            resultArr.push('Bronze Medal');
        }else{
            resultArr.push((index+1).toString())
        }
    }
    return resultArr;
};

let score =[5,4,3,2,1]
let result = findRelativeRanks(score)
console.log('jieguo:',result)