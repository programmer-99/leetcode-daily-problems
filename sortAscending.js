function sortAscending(nums){
    for (let i = 0; i < nums.length-1; i++) {
        for(let j= 0 ; j < nums.length-1-i ; j++){
            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j]=nums[j+1];
                nums[j+1] = temp
            }
        }
    }
    return nums
}
let arr = [1,4,6,7,3,2]
console.log(sortAscending(arr))