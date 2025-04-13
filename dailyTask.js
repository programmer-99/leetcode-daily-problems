// dailyTask.js
console.log("This is today's LeetCode task!");

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
