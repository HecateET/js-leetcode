/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
[1,3,5,6,7] ; 4;
[1,2,3,4,]
/**
 * 1、运行超时，不可取
 */
//  var findPoisonedDuration = function(timeSeries, duration) {
//      let arr = []
//      //遍历数组
//     timeSeries.forEach(item=>{
//         let arr1 = []
//         // 记录每一次攻击的中毒时间
//         for(let i=0;i<duration;i++){
//             arr1.push(item+i)
//         }
//         arr.push(arr1)
//     })
//     arr = arr.flat() //二维数组转1维数组
//     //数组去重
//     arr = arr.filter((item,index,arr)=>{
//         return arr.indexOf(item,0) === index;
//     })
//     return arr.length
// };


//  timeSeries [t+ duration-1]  时间是中毒的 
// 1、timeSeries[i]-timerSeries[i-1] >= duration 时， 说明上一次攻击到下一攻击到中毒时间已结束，中毒时间为 duration 
// 2、timeSeries[i]-timerSeries[i-1]< duration 时，则上一次攻击的中毒时间还没结束，说一，上次中毒的时间则是： timeSeries[i]-timeSeries[i-1]
var findPoisonedDuration = function(timeSeries, duration) {
    let len = timeSeries.length, timeCount = 0;
    for(let i=1;i<len;++i){
        let oneCount = timeSeries[i] - timeSeries[i-1];
        if(oneCount>=duration){
            timeCount += duration;
        }else{
            timeCount += oneCount;
        }
    }
    timeCount+=duration
    return timeCount;
};

let resulte = findPoisonedDuration([1,2,3,4,5,6,7,8,9],100000)
console.log(resulte)

//2
// var findPoisonedDuration = function(timeSeries, duration) {
//     let len = timeSeries.length, timeCount = 0;
//     for(let i=1;i<len;++i){
//         let oneCount = timeSeries[i] - timeSeries[i-1];
//         if(oneCount>=duration){
//             timeCount += duration;
//         }else{
//             timeCount += oneCount;
//         }
//     }
//     timeCount+=duration
//     return timeCount;
// };

//3
var findPoisonedDuration = function(timeSeries, duration) {
    let timeCount = timeSeries.length * duration
    for(let i=1;i<timeSeries.length;i++){
        if(timeSeries[i]-timeSeries[i-1]<duration){
            timeCount -= duration-timeSeries[i]+timeSeries[i-1]
        }
    }
    return timeCount;
};