function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        max = Math.max(max, area);

        // Move the smaller height pointer
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

// Test Cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1]));                     // Output: 1
