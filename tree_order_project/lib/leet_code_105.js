
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

}
function buildTree(preorder, inorder) {
    if (preorder.length === 0) return null;
    let rootNode = new TreeNode(preorder.shift());
    let rootIndex = inorder.indexOf(rootNode.val);
    inorder.splice(rootIndex,1);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = inorder.slice(rootIndex); 
    let leftPreorder = preorder.slice(0, leftInorder.length);
    let rightPreorder = preorder.slice(leftInorder.length); 
    rootNode.left = buildTree(leftPreorder, leftInorder);
    rootNode.right = buildTree(rightPreorder, rightInorder);
    return rootNode;
}