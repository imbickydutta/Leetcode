/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    var ans = -1;
    var obj = {};
    for(var el of arr){
        obj[el] = (obj[el] || 0) + 1
    }
    
    var max = -Infinity;
    
    for(var key in obj){
        if(key == obj[key] && key > max){
            max = +key
            ans = key
        }
    }
    return ans
};