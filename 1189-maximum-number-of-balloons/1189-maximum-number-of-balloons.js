/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let obj = {b:0,a:0,l:0,o:0,n:0};
    
    for(let char of text){
        obj[char] != undefined ? obj[char]++ : null
    }
    obj["o"] = Math.floor(obj["o"]/2);
    obj["l"] = Math.floor(obj["l"]/2);
    let min = Infinity;
    for(let key in obj){
        if(obj[key] < min){
            min = obj[key]
        }
    }
    return min
};