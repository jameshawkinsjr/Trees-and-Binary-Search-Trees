class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
         this.root = null;
    }

    insert(val, root=this.root) {
        const newNode = new TreeNode(val);
        if (!this.root){ 
            this.root = newNode;
            return;
        }

        if (val < root.val){
            if (!root.left){
                root.left = newNode;
            } else {
                this.insert(val, root.left);
            }
        } else if (val >= root.val){
            if (!root.right){
                root.right = newNode;
            } else {
                this.insert(val, root.right);
            }
        }
    }

    searchRecur(val, root=this.root) {
        // console.log("Val", val);
        // console.log("Root", root);
        // console.log("Root.val", root.val);
        // console.log(val == root.val);
        if (!this.root){ return false;}
        if (!root){ return false; }

        if (val == root.val){
            return true;
        } else if (val < root.val){
            if (root.left){
                return this.searchRecur(val, root.left);
            }
        } else if (val > root.val){
            if (root.right){
                return this.searchRecur(val, root.right);
            }
        }
        return false;
    }
    
    searchIter(val) {
        if (!this.root) return false;

        let currNode = this.root;
        while (currNode) {
            if (val < currNode.val) {
                currNode = currNode.left;
            } else if (val > currNode.val) {
                currNode = currNode.right;
            } else {
                return true;
            }
        }
        return false;
    }
   
}

module.exports = {
    TreeNode,
    BST
};