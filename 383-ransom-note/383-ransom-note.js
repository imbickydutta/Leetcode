/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ran = {}
    let mag = {}
    for(let el of ransomNote){
        ran[el] = (ran[el]||0)+1
    }
    
    for(let el of magazine){
        mag[el] = (mag[el]||0)+1
    }
    
    for(let key in ran){
        if(!mag[key] || mag[key] < ran[key]){
            return false
        }
    }
    return true
};