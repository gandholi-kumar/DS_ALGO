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
exports.findAllLeafNodes = exports.FindAllLeafNodes = void 0;
var trees_1 = require("../trees");
var FindAllLeafNodes = /** @class */ (function (_super) {
    __extends(FindAllLeafNodes, _super);
    function FindAllLeafNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindAllLeafNodes.prototype.getAllLeafNodes = function (BT) {
        var collector = [];
        this.getAllLeafNodesRec(BT, collector);
        return collector;
    };
    FindAllLeafNodes.prototype.getAllLeafNodesRec = function (BT, collector) {
        if (BT == null) {
            return;
        }
        if (BT.left == null && BT.right == null) {
            collector.push(BT.data);
            return;
        }
        this.getAllLeafNodesRec(BT.left, collector);
        this.getAllLeafNodesRec(BT.right, collector);
    };
    return FindAllLeafNodes;
}(trees_1.BinaryTree));
exports.FindAllLeafNodes = FindAllLeafNodes;
function findAllLeafNodes() {
    var preOrderInp = [
        [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
        [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objFindAllLeafNodes = new FindAllLeafNodes();
        var builtTree = objFindAllLeafNodes.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var allLeafNodes = objFindAllLeafNodes.getAllLeafNodes(builtTree);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(allLeafNodes)));
        }
    }
}
exports.findAllLeafNodes = findAllLeafNodes;
//# sourceMappingURL=find_all_leaf_nodes.js.map