/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var complexNumberMultiply = function(num1, num2) {
    let arr1 = [num1.split('+')[0],num1.split('+')[1].split('i')[0]]
    let arr2 = [num2.split('+')[0],num2.split('+')[1].split('i')[0]]
    let a = arr1[0],ai = arr1[1],b = arr2[0],bi = arr2[1];
    return (a * b - ai * bi) + '+'+(a * bi  + ai * b) + 'i'; 
};

let num1 = "1+4i", num2 = "1+i"
let result = complexNumberMultiply(num1,num2);
console.log(result)