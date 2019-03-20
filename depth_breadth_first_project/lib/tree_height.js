function treeHeight(root) {
    if (!root) return -1;

    let queue = [ root ];

    let height = 0;

    while (queue.length) {
        let currentNode = queue.shift();

        if (currentNode.left || currentNode.right) height += 1;

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        
    }
    return height;
}


module.exports = {
    treeHeight
};