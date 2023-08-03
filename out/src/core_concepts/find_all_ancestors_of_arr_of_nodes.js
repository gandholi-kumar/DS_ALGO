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
exports.findAncestorsOfArrayOfNode = exports.FindAllAncestorsOfArrayOfNode = void 0;
var trees_1 = require("../trees");
var FindAllAncestorsOfArrayOfNode = /** @class */ (function (_super) {
    __extends(FindAllAncestorsOfArrayOfNode, _super);
    function FindAllAncestorsOfArrayOfNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindAllAncestorsOfArrayOfNode.prototype.getFindAllAncestorsOfArrayOfNode = function (BT, nodesData) {
        var collector = [];
        var ancestorsArray = [];
        this.getFindAllAncestorsOfArrayOfNodeRec(BT, nodesData, collector, ancestorsArray);
        return ancestorsArray;
    };
    FindAllAncestorsOfArrayOfNode.prototype.getFindAllAncestorsOfArrayOfNodeRec = function (BT, nodesData, collector, ancestorsArray) {
        if (BT == null) {
            return;
        }
        collector.push(BT.data);
        if (nodesData.includes(BT.data)) {
            ancestorsArray.push(__spreadArray([], collector, true));
        }
        if (BT.left == null && BT.right == null) {
            collector.pop();
            return;
        }
        this.getFindAllAncestorsOfArrayOfNodeRec(BT.left, nodesData, collector, ancestorsArray);
        this.getFindAllAncestorsOfArrayOfNodeRec(BT.right, nodesData, collector, ancestorsArray);
        collector.pop();
    };
    return FindAllAncestorsOfArrayOfNode;
}(trees_1.BinaryTree));
exports.FindAllAncestorsOfArrayOfNode = FindAllAncestorsOfArrayOfNode;
function findAncestorsOfArrayOfNode() {
    var preOrderInp = [
        {
            preOrderData: [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
            node: [5, 6, 2],
        },
        {
            preOrderData: [
                1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1,
            ],
            node: [9, 5, 4],
        },
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objAncestorsOfNode = new FindAllAncestorsOfArrayOfNode();
        var builtTree = objAncestorsOfNode.buildTree(preOrderInp[i].preOrderData);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var collectionBranches = objAncestorsOfNode.getFindAllAncestorsOfArrayOfNode(builtTree, preOrderInp[i].node);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(collectionBranches)));
        }
    }
}
exports.findAncestorsOfArrayOfNode = findAncestorsOfArrayOfNode;
//# sourceMappingURL=find_all_ancestors_of_arr_of_nodes.js.map