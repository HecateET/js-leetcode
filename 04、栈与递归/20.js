/**
 * 栈的解法
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const n = s.length;
    if(n%2 === 1){
        return false;
    }
    const map1 = new Map([[')', '('],[']', '['],['}', '{']]);
    const stack1 = [];
    for(let ch of s){
        if(map1.has(ch)){
            if(!stack1.length || stack1[stack1.length-1]!== map1.get(ch)){
                return false;
            }
            stack1.pop();
        }else{
            stack1.push(ch);
        }
    };
    return !stack1.length;
};

/**
 * 非栈解法
 * @param {} s 
 * @returns 
 */
var isValid = function(s) {
    let length;
    do{
      length = s.length;
      s = s.replace("()","").replace("{}","").replace("[]","");
    }while(length != s.length);
    return s.length == 0;
  }

let s = "()[]{}";
// s = "(]"s = "{[]}"