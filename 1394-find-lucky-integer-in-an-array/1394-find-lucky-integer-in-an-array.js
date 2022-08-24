/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let ans = -1;
    let obj = {};
    for(let el of arr){
        obj[el] = (obj[el] || 0) + 1
    }
    
    let max = -Infinity;
    
    for(let key in obj){
        if(key == obj[key] && key > max){
            max = +key
            ans = key
        }
    }
    return ans
};