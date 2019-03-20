function breadthFirstArray(root) {

    let queue = [ root ];

    let result = [];

    while (queue.length) {
        let currentNode = queue.shift();
        result.push(currentNode.val);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }            
    }

    return result;
}

module.exports = {
    breadthFirstArray
};