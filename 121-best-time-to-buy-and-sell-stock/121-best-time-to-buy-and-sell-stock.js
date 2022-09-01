/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    
    for(let i = 1;i<prices.length;i++){
        profit = prices[i] - min
        if(profit > max) max = profit
        
        if(prices[i] < min) min = prices[i]
    }
    
    
    
    return max
};