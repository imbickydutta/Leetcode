/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
    for(let i =1;i<arr.length;i++){
        if(arr[i] == arr[i-1]) arr.splice(i--, 1)
    }
    return arr.length;
};




