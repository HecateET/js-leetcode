/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
    let str = s.split(' ');
    let count = 0;
    str.forEach(item=>{
        if(item!=''){
            count++;
        }
    })
    return count;

};

let s =  " "
let result = countSegments(s);
console.log(result)