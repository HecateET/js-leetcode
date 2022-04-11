/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const setMap = new Map();
    setMap.set('I', 1);
    setMap.set('V', 5);
    setMap.set('X', 10);
    setMap.set('L', 50);
    setMap.set('C', 100);
    setMap.set('D', 500);
    setMap.set('M', 1000);  
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const value = setMap.get(s[i]);
        if (i < n - 1 && value < setMap.get(s[i + 1])) {
            ans -= value;
        } else {
            ans += value;
        }
    }
    return ans;
};