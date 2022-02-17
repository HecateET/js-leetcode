/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
 var maxCount = function(m, n, ops) {
    let mina = m, minb = n;
    for(const op of ops){
        mina = Math.min(mina,op[0]);
        minb = Math.min(minb,op[1]);
        console.log("op:",op)
        console.log("op[0]: ",op[0]," op[1]: ",op[1])
        console.log("mina: ",mina," minb: ",minb)
    }
    return mina * minb;
};

let m = 3, n = 3, ops=[[2,2],[3,3]];
let result = maxCount(m,n,ops);
console.log(result)