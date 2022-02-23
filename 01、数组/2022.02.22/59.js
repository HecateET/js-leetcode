/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    const circle = Math.ceil(n / 2)
    let id = 1
    function doCircle (cur) {
        for (let i = cur; i < n - cur; i ++) {
            ans[cur][i] = id ++
        }
        for (let i = cur + 1; i < n - cur; i ++) {
            ans[i][n - cur - 1] = id ++
        }
        for (let i = n - cur - 2; i >= cur; i --) {
            ans[n - cur - 1][i] = id ++
        }
        for (let i = n - cur - 2; i > cur; i --) {
            ans[i][cur] = id ++
        }
    }
    const ans = new Array(n).fill(0)
        .map(() => new Array(n).fill(0))
    for (let i = 0; i < circle; i ++) {
        doCircle(i)
    }
    return ans
};