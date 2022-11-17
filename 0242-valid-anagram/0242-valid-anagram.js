/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj = {};
    //step 1
    for(let el of s){
        obj[el] = obj[el] + 1 || 1;
    }
    //step 2
    for(let el of t){
        if(obj[el]){
            obj[el]--
        } else {
            return false
        }
    }
    
    for(let key in obj){
        if(obj[key] > 0) return false
    }
    
    return true; 
};