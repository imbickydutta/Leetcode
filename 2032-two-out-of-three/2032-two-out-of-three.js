/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let map1 = {};
    let map2 = {};
    let map3 = {};
    
    for(let el of nums1){
        map1[el] = 1;
    }
    
    for(let el of nums2){
        map2[el] = 1;
    }
    
    for(let el of nums3){
        map3[el] = 1;
    }
    let arr = [];
    for(let k in map1){
        if(map2[k] || map3[k]){
            arr.push(k);
            map2[k] = 0
            map3[k] = 0
            map1[k] = 0
        }
    }
    for(let k in map2){
        if(map3[k] || map1[k]){
            arr.push(k);
            map2[k] = 0
            map3[k] = 0
            map1[k] = 0
        }
    }
    for(let k in map3){
        if(map2[k] || map1[k]){
            arr.push(k);
            map2[k] = 0
            map3[k] = 0
            map1[k] = 0
        }
    }
    return arr
};