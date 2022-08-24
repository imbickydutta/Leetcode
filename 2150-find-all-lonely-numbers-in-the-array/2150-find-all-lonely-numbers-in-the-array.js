/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    let obj = {};
    for(let i=0;i<nums.length;i++){
        obj[nums[i]] = (obj[nums[i]] || 0)+1
    }
    let arr=[];
    for(let key in obj){
        console.log(obj[key],obj[key-1],obj[key+1] )
        if(obj[key]==1 && obj[+key-1]==undefined && obj[+key+1]==undefined){
            arr.push(key)
        }
    }
    return arr;
};