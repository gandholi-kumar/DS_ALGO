"use strict";
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
exports.findHeight = exports.FindHeightOfTree = void 0;
var trees_1 = require("../trees");
var FindHeightOfTree = /** @class */ (function (_super) {
    __extends(FindHeightOfTree, _super);
    function FindHeightOfTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindHeightOfTree.prototype.getHeight = function (BT) {
        if (BT.left == null || BT.right == null) {
            return 1;
        }
        else {
            var leftHeight = this.getHeight(BT.left);
            var rightHeight = this.getHeight(BT.right);
            var maxHeight = Math.max(leftHeight, rightHeight) + 1;
            return maxHeight;
        }
    };
    return FindHeightOfTree;
}(trees_1.BinaryTree));
exports.FindHeightOfTree = FindHeightOfTree;
function findHeight() {
    var preOrderInp = [
        [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
        [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objFindHeightOfTree = new FindHeightOfTree();
        var builtTree = objFindHeightOfTree.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var collectionBranches = objFindHeightOfTree.getHeight(builtTree);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(collectionBranches)));
        }
    }
}
exports.findHeight = findHeight;
//# sourceMappingURL=find_height_of_tree.js.map