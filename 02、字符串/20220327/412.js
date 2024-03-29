/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
     let arr = new Array(n).fill(0)
    for(let i=1;i<=n;i++){
        if(i%5 == 0 && i%3 ==0){
            arr[i-1] = 'FizzBuzz'
        }else if(i%5 == 0 && i%3!=0){
            arr[i-1] = 'Buzz'
        }else if(i%3 == 0  && i%5!=0){
            arr[i-1] = 'Fizz'
        }else {
            arr[i-1] = i+'';
        }
    }
    return arr;
};

let n = 5;
let result = fizzBuzz(n);
console.log(result)