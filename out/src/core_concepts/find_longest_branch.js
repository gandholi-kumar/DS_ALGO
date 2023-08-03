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
exports.findBranch = exports.FindLongestBranch = void 0;
var trees_1 = require("../trees");
// TODO;
var FindLongestBranch = /** @class */ (function (_super) {
    __extends(FindLongestBranch, _super);
    function FindLongestBranch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindLongestBranch.prototype.getLongestBranch = function (BT) {
        var collector = [];
        var branch = [[]];
        this.getLongestBranchRec(BT, collector, branch);
        return branch;
    };
    FindLongestBranch.prototype.getLongestBranchRec = function (BT, collector, branch) {
        if (BT == null) {
            return;
        }
        collector.push(BT.data);
        if (BT.left == null && BT.right == null) {
            if (branch[0].length < collector.length) {
                branch.length = 0;
                branch.push(__spreadArray([], collector, true));
            }
            else if (branch[0].length === collector.length) {
                branch.push(__spreadArray([], collector, true));
            }
            collector.pop();
            return;
        }
        this.getLongestBranchRec(BT.left, collector, branch);
        this.getLongestBranchRec(BT.right, collector, branch);
        collector.pop();
    };
    return FindLongestBranch;
}(trees_1.BinaryTree));
exports.FindLongestBranch = FindLongestBranch;
function findBranch() {
    var preOrderInp = [
        [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
        [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
        [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, 3, -1, 6, -1, 9, -1, -1, 10, -1, -1]
    ];
    for (var i = 0; i < preOrderInp.length; i++) {
        var objFindLongestBranch = new FindLongestBranch();
        var builtTree = objFindLongestBranch.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));
        if (builtTree) {
            var collectionBranches = objFindLongestBranch.getLongestBranch(builtTree);
            console.log("Index: ".concat(i, ", value: ").concat(JSON.stringify(collectionBranches)));
        }
    }
}
exports.findBranch = findBranch;
//# sourceMappingURL=find_longest_branch.js.map