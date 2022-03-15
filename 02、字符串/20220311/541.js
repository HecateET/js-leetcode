/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    const l = s.length;
    const arr = Array.from(s);
    for (let i = 0; i < l; i += 2 * k) {
        reverse(arr, i, Math.min(i + k, l) - 1);
    }
    return arr.join('');
};

var reverse = function(arr,i,j){
    while(i<j){
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        i++;
        j--;
    }
}