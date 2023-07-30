"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.BTNode = void 0;
/**
 * Build the Node for a Binary tree
 * data: holds the node value
 * left: holds the left subtree of a node
 * right: holds the right subtree of a node
 */
var BTNode = /** @class */ (function () {
    function BTNode(inp) {
        this.data = inp;
        this.left = null;
        this.right = null;
    }
    return BTNode;
}());
exports.BTNode = BTNode;
/**
 * Builds Binary tree which is collection of Nodes
 *
 */
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.idx = -1;
    }
    /**
     * Constructs the Binary tree for given array of nodes (pre-order Binary tree),
     * here -1 represents null value for a node i.e no further node exists.
     * @param nodes Holds the list of node data to build a binary tree
     * @returns Binary tree or null
     */
    BinaryTree.prototype.buildTree = function (nodes) {
        this.idx++;
        if (nodes.length === 0 || nodes[this.idx] == -1) {
            return null;
        }
        var newNode = new BTNode(nodes[this.idx]);
        newNode.left = this.buildTree(nodes);
        newNode.right = this.buildTree(nodes);
        return newNode;
    };
    /**
     * PreOrder Traversal of a Binary tree
     * Root -> Left subtree -> Right subtree
     * @param tree holds the Binary tree
     * @returns array of node data for a given Binary tree
     */
    BinaryTree.prototype.preOrderTraversal = function (tree) {
        var arrPreOrder = [];
        this.preOrderRec(tree, arrPreOrder);
        return arrPreOrder;
    };
    /**
     * PreOrder recursive call to traversal over Binary tree
     * @param tree hold the Binary tree
     * @param inOrderArr memo array of tree data
     * @returns value of a node in Binary tree
     */
    BinaryTree.prototype.preOrderRec = function (tree, arrVal) {
        if (tree == null) {
            return;
        }
        arrVal.push(tree.data);
        this.preOrderRec(tree.left, arrVal);
        this.preOrderRec(tree.right, arrVal);
    };
    /**
     * InOrder Traversal of a Binary tree
     * Left subtree -> Root -> Right subtree
     * @param tree holds the Binary tree
     * @returns array of node data for a given Binary tree
     */
    BinaryTree.prototype.inOrderTraversal = function (tree) {
        var inOrderArr = [];
        this.inOrderRec(tree, inOrderArr);
        return inOrderArr;
    };
    /**
     * InOrder recursive call to traversal over Binary tree
     * @param tree hold the Binary tree
     * @param inOrderArr memo array of tree data
     * @returns value of a node in Binary tree
     */
    BinaryTree.prototype.inOrderRec = function (tree, inOrderArr) {
        if (tree == null) {
            return;
        }
        this.inOrderRec(tree.left, inOrderArr);
        inOrderArr.push(tree.data);
        this.inOrderRec(tree.right, inOrderArr);
    };
    /**
     * PostOrder Traversal of a Binary tree
     * Left subtree -> Right subtree -> Root
     * @param tree holds the Binary tree
     * @returns array of node data for a given Binary tree
     */
    BinaryTree.prototype.postOrderTraversal = function (tree) {
        var postOrderArr = [];
        this.postOrderRec(tree, postOrderArr);
        return postOrderArr;
    };
    /**
     * PostOrder recursive call to traversal over Binary tree
     * @param tree hold the Binary tree
     * @param inOrderArr memo array of tree data
     * @returns value of a node in Binary tree
     */
    BinaryTree.prototype.postOrderRec = function (tree, postOrderArr) {
        if (tree == null) {
            return;
        }
        this.postOrderRec(tree.left, postOrderArr);
        this.postOrderRec(tree.right, postOrderArr);
        postOrderArr.push(tree.data);
    };
    /**
     * LevelOrder Traversal of a Binary tree
     * From Root till it reaches leaf nodes
     * @param tree holds the Binary tree
     * @returns array of node data for a given Binary tree
     */
    BinaryTree.prototype.levelOrderTraversal = function (tree) {
        var levelOrderArr = [];
        var queue = [];
        this.levelOrderRec(tree, levelOrderArr, queue);
        return levelOrderArr;
    };
    /**
     *
     * @param tree hold the Binary tree
     * @param levelOrderArr memo array of tree data
     * @param queue memo queue of tree data
     * @returns value of a node in Binary tree
     */
    BinaryTree.prototype.levelOrderRec = function (tree, levelOrderArr, queue) {
        if (tree == null) {
            return;
        }
        queue.push(tree);
        queue.push(null);
        while (queue.length !== 0) {
            var currentNode = queue.shift();
            if (currentNode == undefined || currentNode == null) {
                if (queue.length === 0) {
                    break;
                }
                else {
                    queue.push(null);
                }
            }
            else {
                levelOrderArr.push(currentNode.data);
                if (currentNode.left !== null) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right);
                }
            }
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=trees.js.map