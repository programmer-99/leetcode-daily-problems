function sortedArrayToBST(nums){

    if(nums.length == 0) return null;

    function buildTree(start , end){

        if(start > end == 0 ) return null;

        let mid = Math.floor((start+end)/2);
        let node = new TreeNode(nums(mide));

        node.left = buildTree(start , mid-1);
        node.right = buildTree(mid+1, end)

        return node;

    }
    return buildTree(0, nums.length-1)

}

let nums = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(nums))