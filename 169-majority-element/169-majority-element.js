/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    for(let el of nums){
        obj[el] = obj[el] + 1 || 1
        if(obj[el] > nums.length/2) return el;
    };
};