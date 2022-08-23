/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let el, count=0;
    let k = arr.length * 0.25;
    let temp=arr[0]
    for(let char of arr){
        if(char == temp){
            count++;
            if(count > k){
                return char;
            }
        } else {
            temp = char;
            count = 1;
        }
    }
};