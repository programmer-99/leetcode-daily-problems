function plusOne(nums){

    for(i= nums.length -1 ; i >= 0 ; i--){
        nums[i]++;

        if(nums[i] < 10){
            return nums
        }

        nums[i]=0

    }
    nums.unshift(1);
    return nums;
}

console.log(plusOne([9,9,9]));  