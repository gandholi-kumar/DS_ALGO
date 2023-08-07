"use strict";
/*
Given a binary tree, check whether it is a mirror of itself.

For example, this binary tree is symmetric:

     1
   /   \
  2     2
 / \   / \
3   4 4   3

But the following is not:
    1
   / \
  2   2
   \   \
   3    3
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
exports.isSymmentricTree = exports.isSymmentric = void 0;
var trees_1 = require("../trees");
var isSymmentric = /** @class */ (function (_super) {
    __extends(isSymmentric, _super);
    function isSymmentric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isSymmentric.prototype.isSymmentricTree = function (BT) {
        if (!BT)
            return false;
        return this.isSymmentircTreeRec(BT, BT);
    };
    isSymmentric.prototype.isSymmentircTreeRec = function (BT1, BT2) {
        if (BT1 === null && BT2 === null)
            return true;
        if (BT1 !== null && BT2 !== null && BT1.data === BT2.data) {
            return (this.isSymmentircTreeRec(BT1.left, BT2.right) && this.isSymmentircTreeRec(BT1.right, BT2.left));
        }
        return false;
    };
    return isSymmentric;
}(trees_1.BinaryTree));
exports.isSymmentric = isSymmentric;
function isSymmentricTree() {
    var preOrderInp = [
        [1, 2, 3, -1, -1, 4, -1, -1, 2, 4, -1, -1, 3, -1, -1],
        [1, 2, -1, 3, -1, -1, 2, -1, 3, -1, -1],
        [1, 2, -1, -1, 3, 4, -1, -1, -1],
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objIsSymmentric = new isSymmentric();
        var builtTree = objIsSymmentric.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var collectionBranches = objIsSymmentric.isSymmentricTree(builtTree);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(collectionBranches)));
        }
    }
}
exports.isSymmentricTree = isSymmentricTree;
//# sourceMappingURL=symmentric.js.map