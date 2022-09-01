/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let ans = ""
    let rem = 1;
    for(let i = digits.length - 1; i>=0;i--){
        if(digits[i] == 9 && rem == 1){
            ans = 0 + ans;
            rem = 1;
        } else if(rem == 1){
            ans = (digits[i]+1) + ans
            rem = 0
        } else {
            ans = digits[i] + ans
        }
    }
    if(rem == 1) ans = 1 + ans;
    return ans.split("")
};