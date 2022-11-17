/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map1 = {};
    
    for(let el of s){
        map1[el] = map1[el] + 1 || 1
    }
    
    for(let el of t){
        if(map1[el]){
            map1[el]--
        } else {
            return false;
        }
    }
    console.log(map1)
    for(let k in map1){
        if(map1[k] > 0) return false
        
    }
    return true
};