// Problem: Container With Most Water
// Given n non-negative integers a1, a2, ..., an where each represents a point at coordinate (i, ai),
// find two lines that together with the x-axis form a container, such that the container contains the most water.

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

function maxArea(height) {
  let left = 0, right = height.length - 1, max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    max = Math.max(max, h * w);

    height[left] < height[right] ? left++ : right--;
  }

  return max;
}

// Test
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
