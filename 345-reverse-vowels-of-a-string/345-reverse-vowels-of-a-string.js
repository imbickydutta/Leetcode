/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let res = [];
    let vowels= [];
    let obj = {a:1,e:1,i:1,o:1,u:1,A:1,E:1,I:1,O:1,U:1};
    
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==1){
            vowels.push(s[i])
            res.push(-1)
        } else {
            res.push(s[i])
        }
    }
    
    for(let i=0;i<res.length;i++){
        if(res[i] == -1){
            res[i] = vowels.pop()
        }
    }
    
    return res.join("")
};