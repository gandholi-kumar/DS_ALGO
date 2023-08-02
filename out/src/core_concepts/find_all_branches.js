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
exports.findBranches = exports.FindAllBranches = void 0;
var trees_1 = require("../trees");
var FindAllBranches = /** @class */ (function (_super) {
    __extends(FindAllBranches, _super);
    function FindAllBranches() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindAllBranches.prototype.findBranches = function (bT) {
        var collector = [];
        var branches = [];
        this.findBranchesRec(bT, collector, branches);
        return branches;
    };
    FindAllBranches.prototype.findBranchesRec = function (bT, collector, branches) {
        if (bT == null) {
            return;
        }
        collector.push(bT.data);
        if (bT.left == null && bT.right == null) {
            branches.push(__spreadArray([], collector, true));
            collector.pop();
            return;
        }
        this.findBranchesRec(bT.left, collector, branches);
        this.findBranchesRec(bT.right, collector, branches);
        collector.pop();
    };
    return FindAllBranches;
}(trees_1.BinaryTree));
exports.FindAllBranches = FindAllBranches;
function findBranches() {
    var preOrderInp = [
        [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
        [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objFindAllBranches = new FindAllBranches();
        var builtTree = objFindAllBranches.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var collectionBranches = objFindAllBranches.findBranches(builtTree);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(collectionBranches)));
        }
    }
}
exports.findBranches = findBranches;
//# sourceMappingURL=find_all_branches.js.map