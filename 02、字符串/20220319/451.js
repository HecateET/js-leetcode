/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let map = new Map();
    const l = s.length;
    for(let i=0;i<l;i++){
        const c = s[i];
        const freq = (map.get(c) || 0) + 1;
        map.set(c,freq);
    }
    const list = [...map.keys()];
    list.sort((a,b)=>{
        return map.get(b) - map.get(a);
    });
    let sArr = [];
    const size = list.length;
    for(let i=0;i<size;i++){
        const c = list[i];
        const freq = map.get(c);
        for(let j=0;j< freq;j++){
            sArr.push(c);
        }
    }
    return sArr.join('');
};

let  s = 'ccAabbaa';
let result = frequencySort(s);
console.log(result)