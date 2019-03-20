function depthFirstSearch(root, targetVal) {

    let stack = [ root ];

    while (stack.length > 0){
        let currentNode = stack.pop();

        if (currentNode.val === targetVal) {
            return currentNode;
        }

        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);
        
    }
    return null;
}


module.exports = {
    depthFirstSearch
};