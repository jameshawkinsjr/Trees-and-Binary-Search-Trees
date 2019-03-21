
function isBalanced(root) {
    if (!root) return true;

    let stack = [ root ];
    
    while (stack.length) {
        let currentNode = stack.shift();
        let leftHeight = treeHeight(currentNode.left);
        let rightHeight = treeHeight(currentNode.right);
        
        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);
    }
    return true;

}
function treeHeight(root) {
    if (!root) return;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}