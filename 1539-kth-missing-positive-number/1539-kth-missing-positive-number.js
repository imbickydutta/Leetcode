/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let obj = {};
    for(let i =1;i<=arr.length+k;i++){
        obj[i]=0
    }
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]++
    }
    
    let count = 0;
    for(let key in obj){
        if(obj[key] == 0){
            count++
            if(count==k){
                return +key
            }
        }
    }
};