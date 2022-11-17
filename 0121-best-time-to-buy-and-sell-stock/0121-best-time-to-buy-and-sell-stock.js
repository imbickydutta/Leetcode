/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let maxProfit = 0;
    for(let i=0;i<prices.length;i++){
        if(min > prices[i]){
            min = prices[i]
        }
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min
        }
    }
    return maxProfit
};