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
exports.findDiameter = exports.FindLongestDiameter = void 0;
var trees_1 = require("../trees");
// TODO;
var FindLongestDiameter = /** @class */ (function (_super) {
    __extends(FindLongestDiameter, _super);
    function FindLongestDiameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindLongestDiameter.prototype.getLongestDiameter = function (BT) {
        var collector = [];
        var diameter = [];
        this.getLongestDiameterRec(BT, collector, diameter);
        return diameter;
    };
    FindLongestDiameter.prototype.getLongestDiameterRec = function (BT, collector, diameter) {
        if (diameter === void 0) { diameter = []; }
        if (BT == null) {
            return;
        }
        collector.push(BT.data);
        if (BT.left == null && BT.right == null) {
        }
        this.getLongestDiameterRec(BT.left, collector, diameter);
        this.getLongestDiameterRec(BT.right, collector, diameter);
        collector.pop();
    };
    return FindLongestDiameter;
}(trees_1.BinaryTree));
exports.FindLongestDiameter = FindLongestDiameter;
function findDiameter() {
    var preOrderInp = [
        [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
        [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objFindLongestDiameter = new FindLongestDiameter();
        var builtTree = objFindLongestDiameter.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var collectionBranches = objFindLongestDiameter.getLongestDiameter(builtTree);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(collectionBranches)));
        }
    }
}
exports.findDiameter = findDiameter;
//# sourceMappingURL=find_longest_diameter.js.map