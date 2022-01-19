/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 时间复杂度： 使用 Set 去重的复杂度为O(n)；
 * 排序复杂度为 O(n\log{n})O(nlogn)。整体复杂度为 O(n\log{n})O(nlogn)
 * 时间复杂度：O(n\log n)O(nlogn)，其中 nn 是数组 \textit{nums}nums 的长度。排序需要 O(n\log n)O(nlogn) 的时间。
 * 空间复杂度：O(\log n)O(logn)。排序需要的栈空间为 O(\log n)O(logn)。
 */ 
//1、 排序+去重
 var thirdMax = function(nums) {
    //降序
    nums= nums.sort((a,b)=>{
        return  b-a
    })
    // 去重
    nums = [...new Set(nums)]
    return nums.length >= 3 ?nums[2]:nums[0];
};

/**
 * 一次遍历
 * 插入和删除操作
 */
var thirdMax = function(nums){
    let a = -Number.MAX_VALUE ,b= -Number.MAX_VALUE,c= -Number.MAX_VALUE;
    for(const item of nums){
        if(item>a){
            c=b;
            b=a;
            a=item
        }else if(a>item && item>b){
            c = b;
            b = item
        }else if(b>item && item>c){
            c = item
        }
    }
    console.log(a,b,c)
    return c= -Number.MAX_VALUE ? a:c;
}

console.log(thirdMax([2,3,3,4]))

