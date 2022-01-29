/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    citations.sort((a,b) => a-b)
    for(let i=0; i<citations.length; i++){
        let h = citations.length - i;
        if(h <= citations[i]){
            return h;
        }
    }
    return 0;
};

let arr = [1,3,1]
let result = hIndex(arr);
console.log(result)