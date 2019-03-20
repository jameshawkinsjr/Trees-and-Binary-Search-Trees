function treeSum(root) {
    let sum = 0;

    if (!root) return sum;
    let stack = [ root ];

    while (stack.length){
        let currentNode = stack.pop();

        sum += currentNode.val;

        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);
    }

    return sum;

}


module.exports = {
    treeSum
};