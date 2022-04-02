/**
 * @param {string[]} timePoints
 * @return {number}
 */
 var findMinDifference = function(timePoints) {
    timePoints.sort()
    let result = Number.MAX_VALUE
    let t0 = getMinutes(timePoints[0]);
    let preMin = t0
    for(let i=1; i<timePoints.length;++i){
        const min = getMinutes(timePoints[i]);
        result = Math.min(result,min- preMin);
        preMin = min;
    }
    result = Math.min(result,t0+1440-preMin)
    return result;
};

const getMinutes = (t) => {
    return ((t[0].charCodeAt() - '0'.charCodeAt()) * 10 + (t[1].charCodeAt() - '0'.charCodeAt())) * 60 + (t[3].charCodeAt() - '0'.charCodeAt()) * 10 + (t[4].charCodeAt() - '0'.charCodeAt());
}

let timePoints = ["23:59","00:00"]
let result = findMinDifference(timePoints)
console.log(result)