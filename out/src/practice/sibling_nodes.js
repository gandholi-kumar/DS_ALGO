"use strict";
/*
Given a binary tree and two nodes, the task is to check if the nodes are siblings of each other or not.
Two nodes are said to be siblings if they are present at the same level, and their parents are same.

Input :
       1
      /  \
     2    3
    / \  / \
   4   5 6  7
First node is 4 and Second node is 6.
Output : No, they are not siblings.

Input :
         1
        /  \
       5    6
      /    /  \
     7    3    4
First node is 3 and Second node is 4
Output : Yes

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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.practice = exports.Sibling = void 0;
var trees_1 = require("../trees");
var Sibling = /** @class */ (function (_super) {
    __extends(Sibling, _super);
    function Sibling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method to validate the nodes
    Sibling.prototype.isSibling = function (bT, child1, child2) {
        var collector = [];
        var branches = [];
        this.isSiblingRec(bT, collector, branches);
        return branches;
    };
    Sibling.prototype.isSiblingRec = function (bT, collector, branches) {
        if (bT == null) {
            return;
        }
        collector.push(bT.data);
        if (bT.left == null && bT.right == null) {
            branches.push(__spreadArray([], collector, true));
            collector.pop();
            return;
        }
        this.isSiblingRec(bT.left, collector, branches);
        this.isSiblingRec(bT.right, collector, branches);
        collector.pop();
    };
    return Sibling;
}(trees_1.BinaryTree));
exports.Sibling = Sibling;
function practice() {
    var preOrderInp = [
        1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1,
    ];
    var objSibling = new Sibling();
    var builtTree = objSibling.buildTree(preOrderInp);
    console.log(JSON.stringify(builtTree));
    if (builtTree) {
        var postOrder = objSibling.isSibling(builtTree, 4, 5);
        console.log(JSON.stringify(postOrder));
    }
}
exports.practice = practice;
//# sourceMappingURL=sibling_nodes.js.map