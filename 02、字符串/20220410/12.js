/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const valSymbols = [
        [1000,'M'],
        [900,'CM'],
        [500,'D'],
        [400,'CD'],
        [100,'C'],
        [90,'XC'],
        [50,'L'],
        [40,'XL'],
        [10,'X'],
        [9,'IX'],
        [5,'V'],
        [4,'IV'],
        [1,'I']
    ];
    const roman = [];
    for(const[val,symbol] of valSymbols){
        while(num>=val){
            num -= val;
            roman.push(symbol);
        }
        if(num==0){
            break;
        }
    }
    return roman.join('')
};

let num = 4;
let res = intToRoman(num);
console.log(res)