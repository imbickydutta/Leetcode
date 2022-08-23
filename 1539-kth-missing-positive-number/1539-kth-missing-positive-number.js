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
        if((arr[i] - arr[i-1]) <= count){
            console.log(arr[i] - arr[i-1], count)
            count-= arr[i] - (arr[i-1] + 1)
        } else {
            console.log("hello")
           return (arr[i] - ((arr[i] - arr[i-1])-count)) 
        }
    }
    console.log(arr[arr.length-1] + count)
    return arr[arr.length-1] + count
};