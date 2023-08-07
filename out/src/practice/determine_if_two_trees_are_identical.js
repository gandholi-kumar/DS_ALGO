"use strict";
/*
Write a function to determine if two trees are identical or not:

Two trees are identical when they have the same data and the arrangement of data is also the same

Input:
        tree1: [1, 2, 4, -1, -1, -1, 3, -1, -1],
        tree2: [1, 2, 4, -1, -1, -1, 3, -1, -1],

                   1                    1
                 /   \                /   \
                2     3              2     3
               /                    /
              4                    4

Output: Both trees are identical = TRUE

Input:
        tree1: [1, 2, -1, -1, 3, 4, -1, -1, -1],
        tree2: [1, 5, 4, -1, -1, -1, 3, -1, -1],

                   1                    1
                 /   \                /   \
                2     3              5     3
                     /              /
                    4              4

Output: Trees are not identical = FALSE

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
exports.isIndenticalTrees = exports.IsTreesIdentical = void 0;
var trees_1 = require("../trees");
var IsTreesIdentical = /** @class */ (function (_super) {
    __extends(IsTreesIdentical, _super);
    function IsTreesIdentical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsTreesIdentical.prototype.isTwoTreesIdentical = function (BT1, BT2) {
        var queue = [];
        if (BT1 != null && BT2 != null) {
            queue.push(BT1);
            queue.push(BT2);
            while (queue.length >= 2) {
                var currentNodeBT1 = queue[0];
                var currentNodeBT2 = queue[1];
                if (queue[0].data === queue[1].data) {
                    queue.shift();
                    queue.shift();
                }
                else {
                    return false;
                }
                if (((currentNodeBT1.left == null && currentNodeBT2.left != null) || (currentNodeBT1.left != null && currentNodeBT2.left == null)) ||
                    (currentNodeBT1.right == null && currentNodeBT2.right != null) || (currentNodeBT1.right != null && currentNodeBT2.right == null)) {
                    return false;
                }
                if (currentNodeBT1.left && currentNodeBT2.left) {
                    queue.push(currentNodeBT1.left);
                    queue.push(currentNodeBT2.left);
                }
                if (currentNodeBT1.right && currentNodeBT2.right) {
                    queue.push(currentNodeBT1.right);
                    queue.push(currentNodeBT2.right);
                }
            }
        }
        else if (BT1 != null || BT2 != null) {
            return false;
        }
        return true;
    };
    IsTreesIdentical.prototype.betterApproach = function (BT1, BT2) {
        if (BT1 === null && BT2 === null)
            return true;
        if ((BT1 === null && BT2 !== null) || (BT1 !== null && BT2 === null))
            return false;
        var left = this.betterApproach(BT1.left, BT2.left);
        var right = this.betterApproach(BT1.right, BT2.right);
        if ((BT1 === null || BT1 === void 0 ? void 0 : BT1.data) === (BT2 === null || BT2 === void 0 ? void 0 : BT2.data) && left && right) {
            return true;
        }
        return false;
    };
    return IsTreesIdentical;
}(trees_1.BinaryTree));
exports.IsTreesIdentical = IsTreesIdentical;
function isIndenticalTrees() {
    var preOrderInp = {
        trees: [
            {
                tree1: [1, 2, 4, -1, -1, -1, 3, -1, -1],
                tree2: [1, 2, 4, -1, -1, -1, 3, -1, -1],
            },
            {
                tree1: [1, 2, -1, -1, 3, 4, -1, -1, -1],
                tree2: [1, 5, 4, -1, -1, -1, 3, -1, -1],
            },
            {
                tree1: [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
                tree2: [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
            },
            {
                tree1: [1],
                tree2: [1],
            },
            {
                tree1: [1],
                tree2: [3],
            },
        ]
    };
    for (var i = 0; i < preOrderInp.trees.length; i++) {
        var objFindLongestBranch1 = new IsTreesIdentical();
        var builtTree1 = objFindLongestBranch1.buildTree(preOrderInp.trees[i].tree1);
        console.log(JSON.stringify(builtTree1));
        var objFindLongestBranch2 = new IsTreesIdentical();
        var builtTree2 = objFindLongestBranch2.buildTree(preOrderInp.trees[i].tree2);
        console.log(JSON.stringify(builtTree2));
        // const isIdentical =
        //   objFindLongestBranch1.isTwoTreesIdentical(builtTree1, builtTree2);
        // console.log(`Index: ${i}, value: ${JSON.stringify(isIdentical)}`);
        var isIdentical = objFindLongestBranch1.betterApproach(builtTree1, builtTree2);
        console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(isIdentical)));
    }
}
exports.isIndenticalTrees = isIndenticalTrees;
//# sourceMappingURL=determine_if_two_trees_are_identical.js.map