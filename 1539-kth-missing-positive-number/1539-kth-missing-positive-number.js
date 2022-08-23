/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    if(arr[0] > k){
        return k
    }
    
    let count = k+1-arr[0];
    for(let i=1;i<arr.length;i++){
        let diff = arr[i] - arr[i-1];
        if(diff <= count){
            count-= diff -1
        } else {
           return (arr[i] - (diff-count)) 
        }
    }
    return arr[arr.length-1] + count
};