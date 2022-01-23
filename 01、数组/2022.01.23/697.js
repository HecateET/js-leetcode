var findShortestSubArray = function(nums) {
    const mp = {} //初始化哈希函数

    // 使用Object.entries() 将对象输出为可枚举的键值对数组 for...of循环
    // 哈希数组存储 例如：[1,2,2,3,4,5,6,2,3]
    //  mp[1][0] = 3 // 记录每个数出现的个数
    //  mp[1][1] = [i,i];//记录出现的个数后的下标记right
    // mp[1][2] = i //记录， 出现的下逼标记
    for(const [i,num] of nums.entries()){
        if(num in mp){
            mp[num][0]++;
            mp[num][2] = i;
        }else {
            mp[num] = [1,i,i]
        }
    }

    let maxNum = 0, minLen =0;
    for(const[count,left,right] of Object.values(mp)){
        if(maxNum <count){
            maxNum = count;
            minLen = right - left +1;
        }else if(maxNum === count){
            if(minLen >(right-left+1)){
                minLen = right - left +1;
            }
        }
    }
    return minLen
}