/**
 * Build the Node for a Binary tree
 * data: holds the node value
 * left: holds the left subtree of a node
 * right: holds the right subtree of a node
 */
class BTNode {
  data: number;
  left: BTNode | null;
  right: BTNode | null;

  constructor(inp: number) {
    this.data = inp;
    this.left = null;
    this.right = null;
  }
}

/**
 * Builds Binary tree which is collection of Nodes
 *
 */
class BinaryTree {
  idx = -1;

  /**
   * Constructs the Binary tree for given array of nodes (pre-order Binary tree),
   * here -1 represents null value for a node i.e no further node exists.
   * @param nodes Holds the list of node data to build a binary tree
   * @returns Binary tree or null
   */
  buildTree(nodes: number[]): BTNode | null {
    this.idx++;

    if (nodes[this.idx] == -1) {
      return null;
    }

    let newNode = new BTNode(nodes[this.idx]);
    newNode.left = this.buildTree(nodes);
    newNode.right = this.buildTree(nodes);
    return newNode;
  }
}

function mainFunction() {
  const arrTrees: number[][] = [
    [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
    [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
  ];

  for (let i = 0; i < arrTrees.length; i++) {
    const objBinaryTree = new BinaryTree();
    const nodes = objBinaryTree.buildTree(arrTrees[i]);
    if (nodes) {
      console.log(`Index: ${i}, Value: ${JSON.stringify(nodes)}`);
    }
  }
}

mainFunction();
