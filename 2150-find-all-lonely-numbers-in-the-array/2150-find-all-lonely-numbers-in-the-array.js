/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    nums.sort((a,b)=>a-b)
    if(nums.length == 1) return nums
    console.log(nums)
    let newArr=[];
    if(nums[1] != nums[0] && nums[1] != nums[0] + 1 ) newArr.push(nums[0])
    if(nums[nums.length-1] != nums[nums.length-2] && nums[nums.length-1]!=nums[nums.length-2]+1) newArr.push(nums[nums.length-1])
    for(let i=1;i<nums.length-1;i++){
        if(nums[i-1] != nums[i]-1 && nums[i+1]!=nums[i]+1 && nums[i+1]!=nums[i] && nums[i-1] != nums[i] ){
            newArr.push(nums[i])
        }
    }
    return(newArr)
};