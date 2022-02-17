/**
 * @param {number[][]} img
 * @return {number[][]}
 */
 var imageSmoother = function(img) {

    //结果数组
    let res=[];
    for(let i=0;i<img.length;i++){

        //行数和列数
        const rLen=img.length;
        const cLen=img[i].length;

        //每一行数组
        let line=[]
        for(let j=0;j<cLen;j++){

            let count=0,sum=0;
            //判断i和j的边间
            for(let r=Math.max(i-1,0);r<=Math.min(i+1,rLen-1);r++){
                for(let c=Math.max(j-1,0);c<=Math.min(j+1,cLen-1);c++){
                    sum+=img[r][c];
                    count++;
                }
            }
            line.push(Math.floor(sum/count));
        }
        res.push(line);
    }
    
    return res;
};
