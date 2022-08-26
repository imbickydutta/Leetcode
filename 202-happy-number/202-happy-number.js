/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let obj = {};
    while(n != 1){
        let ans = 0;
        while(n){
            ans += (n%10)**2
            n=Math.floor(n/10)
        }
        n=ans
        if(obj[n]) {
            return false
        }
        obj[n] = true;
    }
    return true
};