// Problem: Coin Change
// Given coins of different denominations and a total amount, return the fewest coins needed to make up that amount.
// If not possible, return -1.

// Input: coins = [1,2,5], amount = 11
// Output: 3 (11 = 5+5+1)

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test
console.log(coinChange([1,2,5], 11)); // 3
