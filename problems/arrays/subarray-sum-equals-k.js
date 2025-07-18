// Problem: Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// Input: nums = [1,1,1], k = 2
// Output: 2

function subarraySum(nums, k) {
  let map = new Map([[0, 1]]);
  let sum = 0, count = 0;

  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

// Test
console.log(subarraySum([1,1,1], 2)); // 2
