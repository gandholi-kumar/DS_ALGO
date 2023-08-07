"use strict";
/*
Given a binary tree, the task is to convert the binary tree into its Mirror tree.
Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged.

            1           |         1
           / \          |        / \
          2   3         |       3   2
             /          |        \
            4           |         4
            
            4           |          4
           / \          |         / \
         2     7        |       7     2
        / \   / \       |      / \   / \
       1   3 6   9      |     9   6 3   1

LeetCode:  https://leetcode.com/problems/invert-binary-tree/submissions/
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMirrorTree = exports.MirrorTree = void 0;
var trees_1 = require("../trees");
var MirrorTree = /** @class */ (function (_super) {
    __extends(MirrorTree, _super);
    function MirrorTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MirrorTree.prototype.buildMirrorTree = function (BT) {
        if (!BT)
            return null;
        var temp = BT.left;
        BT.left = BT.right;
        BT.right = temp;
        this.buildMirrorTree(BT.left);
        this.buildMirrorTree(BT.right);
        return BT;
    };
    return MirrorTree;
}(trees_1.BinaryTree));
exports.MirrorTree = MirrorTree;
function getMirrorTree() {
    var preOrderInp = [
        [1, 2, -1, -1, 3, 4, -1, -1, -1],
        [4, 2, 1, -1, -1, 3, -1, -1, 7, 6, -1, -1, 9, -1, -1],
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objMirrorTree = new MirrorTree();
        var builtTree = objMirrorTree.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var collectionBranches = objMirrorTree.buildMirrorTree(builtTree);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(collectionBranches)));
        }
    }
}
exports.getMirrorTree = getMirrorTree;
//# sourceMappingURL=mirror_tree.js.map