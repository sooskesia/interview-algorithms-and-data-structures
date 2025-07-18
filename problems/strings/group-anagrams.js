// Problem: Group Anagrams
// Given an array of strings, group the anagrams together.

// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return Array.from(map.values());
}

// Test
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
