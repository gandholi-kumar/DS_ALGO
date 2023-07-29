/*
class Add {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  display() {
    console.log("SUm: ", this.x + this.y);
  }
}

let addVal = new Add(3, 6);
addVal.display();
 */
var LeafNode = /** @class */ (function () {
    function LeafNode(inp) {
        this.data = inp;
        this.left = null;
        this.right = null;
    }
    LeafNode.prototype.getData = function () {
        console.log(this.data);
    };
    return LeafNode;
}());
// let nodeVal = new LeafNode(3);
// nodeVal.getData();
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
    }
    BinaryTree.buildTree = function (nodes) {
        this.idx++;
        if (nodes[this.idx] == -1) {
            return null;
        }
        var newNode = new LeafNode(nodes[this.idx]);
        newNode.left = this.buildTree(nodes);
        newNode.right = this.buildTree(nodes);
        return newNode;
    };
    BinaryTree.idx = -1;
    return BinaryTree;
}());
function mainFunction() {
    var treesNodeData = [
        1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1,
    ];
    var nodes = BinaryTree.buildTree(treesNodeData);
    if (nodes) {
        console.log(nodes.data);
    }
}
