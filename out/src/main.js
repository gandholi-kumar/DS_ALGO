"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var determine_if_two_trees_are_identical_1 = require("./practice/determine_if_two_trees_are_identical");
var trees_1 = require("./trees");
function mainFunction() {
    var arrTrees = [
        [],
        [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
        [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
        [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, 3, -1, 6, -1, 9, -1, -1, 10, -1, -1]
    ];
    for (var i = 0; i < arrTrees.length; i++) {
        // Building tree
        var objBinaryTree = new trees_1.BinaryTree();
        var nodes = objBinaryTree.buildTree(arrTrees[i]);
        if (nodes) {
            console.log("Index: ".concat(i, ", Value: ").concat(JSON.stringify(nodes)));
        }
        // Pre order traversal
        var preOrderTraversalVal = objBinaryTree.preOrderTraversal(nodes);
        console.log("preOrderTraversalVal: ".concat(preOrderTraversalVal));
        // In order traversal
        var inOrderTraversalVal = objBinaryTree.inOrderTraversal(nodes);
        console.log("inOrderTraversalVal: ".concat(inOrderTraversalVal));
        // Post order traversal
        var postOrderTraversalVal = objBinaryTree.postOrderTraversal(nodes);
        console.log("postOrderTraversalVal: ".concat(postOrderTraversalVal));
        // Level order traversal
        var levelOrderTraversalVal = objBinaryTree.levelOrderTraversal(nodes);
        console.log("levelOrderTraversalVal: ".concat(levelOrderTraversalVal));
    }
    console.log(" ----------------------------------------------------------------------------- ");
    var arrTreeAlpha = [
        ["a", "b", "c", "-1", "-1", "d", "-1", "-1", "e", "-1", "f", "-1", "-1"],
        [
            "k",
            "l",
            "m",
            "n",
            "-1",
            "-1",
            "o",
            "-1",
            "-1",
            "p",
            "-1",
            "-1",
            "q",
            "-1",
            "r",
            "-1",
            "s",
            "-1",
            "-1",
        ],
    ];
    for (var i = 0; i < arrTreeAlpha.length; i++) {
        // Building tree
        var objBinaryTree = new trees_1.BinaryTree();
        var nodes = objBinaryTree.buildTree(arrTreeAlpha[i]);
        if (nodes) {
            console.log("Index: ".concat(i, ", Value: ").concat(JSON.stringify(nodes)));
        }
        // Pre order traversal
        var preOrderTraversalVal = objBinaryTree.preOrderTraversal(nodes);
        console.log("preOrderTraversalVal: ".concat(preOrderTraversalVal));
        // In order traversal
        var inOrderTraversalVal = objBinaryTree.inOrderTraversal(nodes);
        console.log("inOrderTraversalVal: ".concat(inOrderTraversalVal));
        // Post order traversal
        var postOrderTraversalVal = objBinaryTree.postOrderTraversal(nodes);
        console.log("postOrderTraversalVal: ".concat(postOrderTraversalVal));
        // Level order traversal
        var levelOrderTraversalVal = objBinaryTree.levelOrderTraversal(nodes);
        console.log("levelOrderTraversalVal: ".concat(levelOrderTraversalVal));
    }
}
/* Core functionCalls */
// mainFunction();
// findBranches();
// findAncestorsOfNode();
// findAncestorsOfArrayOfNode();
// findAllLeafNodes();
// findHeight();
// findBranch();
/* Practice functionCalls*/
(0, determine_if_two_trees_are_identical_1.isIndenticalTrees)();
//# sourceMappingURL=main.js.map