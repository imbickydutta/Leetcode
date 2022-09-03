/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    for(let num of nums){
        console.log(obj[num])
        if (obj[num]){
            return true
        } else {
            obj[num] = 1
        }
    }
    return false
};