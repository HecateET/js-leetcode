/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function(chars) {
//     const len = chars.length;
//     let write = 0,left=0;
//     for(let read = 0; read<len; read++){
//         if(read === len-1 || chars[read] !== chars[read + 1]){
//             chars[write++] = chars[read];
//             let num = read -left +1;
//             if(num>1){
//                 const anchor = write;
//                 while(num>0){
//                     chars[write++] = '' + num % 10;
//                     num = Math.floor(num/10);
//                 }
//                 reverse(chars,anchor,write-1);
//             }
//             left = read +1;
//         }
//     }
//     return write;
// };

// const reverse = (chars,left,right) =>{
//     while(left<right){
//         const temp = chars[left];
//         chars[left] = chars[right];
//         left++;
//         right--;
//     }
// }

var compress = function (chars) {
    let cur = '', // 当前字符
        index = 0 // 当前字符重复数

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === cur) {
            index += 1
            if (index === 2) {
                // 直接把第二个重复字符替换成数量2
                chars.splice(i, 1, index.toString())
            } else if(index > 2) {
                // 数字转字符串，用于插入字符
                const strIndex = index.toString()
                // 用于获取当前数值占据数组的长度
                const len = (index - 1).toString().length
                
                // 从第一个 cur 字符的后一位数字开始删除, 长度是数字的长度（len）加上把chars[i]一起删掉
                // 然后插入新的数值
                chars.splice(i - len, len + 1, ...strIndex)
                // 指针移动到下一位
                i += strIndex.length - len - 1
            }
        } else {
            cur = chars[i]
            index = 1
        }
    }

    return chars.length
};

let chars =["a","b","b","b","b","b","b","b","b","b","b","b","b"]
let res = compress(chars)
console.log(res)