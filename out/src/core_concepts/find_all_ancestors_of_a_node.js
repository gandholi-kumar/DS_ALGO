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
exports.findAncestorsOfNode = exports.FindAllAncestorsOfANode = void 0;
var trees_1 = require("../trees");
var FindAllAncestorsOfANode = /** @class */ (function (_super) {
    __extends(FindAllAncestorsOfANode, _super);
    function FindAllAncestorsOfANode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindAllAncestorsOfANode.prototype.getAncestorsNode = function (BT, nodeData) {
        var collector = [];
        var ancestors = [];
        this.getAncestorsNodeRec(BT, nodeData, collector, ancestors);
        return ancestors;
    };
    FindAllAncestorsOfANode.prototype.getAncestorsNodeRec = function (BT, nodeData, collector, ancestors) {
        if (BT == null) {
            return;
        }
        collector.push(BT.data);
        if (BT.data === nodeData) {
            ancestors.push.apply(ancestors, collector);
        }
        if (BT.left == null && BT.right == null) {
            collector.pop();
            return;
        }
        this.getAncestorsNodeRec(BT.left, nodeData, collector, ancestors);
        this.getAncestorsNodeRec(BT.right, nodeData, collector, ancestors);
        collector.pop();
    };
    return FindAllAncestorsOfANode;
}(trees_1.BinaryTree));
exports.FindAllAncestorsOfANode = FindAllAncestorsOfANode;
function findAncestorsOfNode() {
    var preOrderInp = [
        {
            preOrderData: [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1],
            node: 5,
        },
        {
            preOrderData: [
                1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1,
            ],
            node: 9,
        },
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objAncestorsOfNode = new FindAllAncestorsOfANode();
        var builtTree = objAncestorsOfNode.buildTree(preOrderInp[i].preOrderData);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var collectionBranches = objAncestorsOfNode.getAncestorsNode(builtTree, preOrderInp[i].node);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(collectionBranches)));
        }
    }
}
exports.findAncestorsOfNode = findAncestorsOfNode;
//# sourceMappingURL=find_all_ancestors_of_a_node.js.map