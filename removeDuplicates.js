function removeDuplicates(nums){
    if (nums.length === 0) return [];
    let i = 0;
    for(j=1 ; j<nums.length ; j++){
        if(nums[i]!==nums[j]){
            i++
            nums[i]=nums[j]

        }

    }
    return nums.slice(0,i+1)
}

let nums=[3,2,2,1,1,5,6,7,7]
console.log(removeDuplicates(nums))