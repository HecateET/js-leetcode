/**
 * @param {string} p
 * @return {number}
 */
 var findSubstringInWraproundString = function(p) {
    if(!p.length) return 0
    let pre =1,res =0,hash ={[p.charAt(0)]:1};
    for(let i=1;i<p.length;i++){
        const c = p[i]
        let cha = (p[i].charCodeAt(0)-97) - (p[i-1].charCodeAt(0)-97) ;
        if(cha=== -25 || cha === 1){
            pre+=1;
        }else{
            pre =1;
        }
        hash[c] = hash[c] ? Math.max(hash[c],pre):pre;
    }
    for(let key in hash){
        res+= hash[key]
    }
    return res;
};

let  s= 'zab';
let result = findSubstringInWraproundString(s)
console.log(result)