/**
 * Build the Node for a Binary tree
 * data: holds the node value
 * left: holds the left subtree of a node
 * right: holds the right subtree of a node
 */
export class BTNode {
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
export class BinaryTree {
  private idx = -1;

  /**
   * Constructs the Binary tree for given array of nodes (pre-order Binary tree),
   * here -1 represents null value for a node i.e no further node exists.
   * @param nodes Holds the list of node data to build a binary tree
   * @returns Binary tree or null
   */
  buildTree(nodes: number[]): BTNode | null {
    this.idx++;

    if (nodes.length === 0 || nodes[this.idx] == -1) {
      return null;
    }

    let newNode = new BTNode(nodes[this.idx]);
    newNode.left = this.buildTree(nodes);
    newNode.right = this.buildTree(nodes);
    return newNode;
  }

  /**
   * PreOrder Traversal of a Binary tree
   * Root -> Left subtree -> Right subtree
   * @param tree holds the Binary tree
   * @returns array of node data for a given Binary tree
   */
  preOrderTraversal(tree: BTNode | null): number[] {
    let arrPreOrder: number[] = [];
    this.preOrderRec(tree, arrPreOrder);
    return arrPreOrder;
  }

  /**
   * PreOrder recursive call to traversal over Binary tree
   * @param tree hold the Binary tree
   * @param inOrderArr memo array of tree data
   * @returns value of a node in Binary tree
   */
  private preOrderRec(
    tree: BTNode | null,
    arrVal: number[]
  ): number | undefined {
    if (tree == null) {
      return;
    }

    arrVal.push(tree.data);
    this.preOrderRec(tree.left, arrVal);
    this.preOrderRec(tree.right, arrVal);
  }

  /**
   * InOrder Traversal of a Binary tree
   * Left subtree -> Root -> Right subtree
   * @param tree holds the Binary tree
   * @returns array of node data for a given Binary tree
   */
  inOrderTraversal(tree: BTNode | null): number[] {
    let inOrderArr: number[] = [];
    this.inOrderRec(tree, inOrderArr);
    return inOrderArr;
  }

  /**
   * InOrder recursive call to traversal over Binary tree
   * @param tree hold the Binary tree
   * @param inOrderArr memo array of tree data
   * @returns value of a node in Binary tree
   */
  private inOrderRec(
    tree: BTNode | null,
    inOrderArr: number[]
  ): number | undefined {
    if (tree == null) {
      return;
    }

    this.inOrderRec(tree.left, inOrderArr);
    inOrderArr.push(tree.data);
    this.inOrderRec(tree.right, inOrderArr);
  }

  /**
   * PostOrder Traversal of a Binary tree
   * Left subtree -> Right subtree -> Root
   * @param tree holds the Binary tree
   * @returns array of node data for a given Binary tree
   */
  postOrderTraversal(tree: BTNode | null): number[] {
    let postOrderArr: number[] = [];
    this.postOrderRec(tree, postOrderArr);
    return postOrderArr;
  }

  /**
   * PostOrder recursive call to traversal over Binary tree
   * @param tree hold the Binary tree
   * @param inOrderArr memo array of tree data
   * @returns value of a node in Binary tree
   */
  private postOrderRec(
    tree: BTNode | null,
    postOrderArr: number[]
  ): number | undefined {
    if (tree == null) {
      return;
    }

    this.postOrderRec(tree.left, postOrderArr);
    this.postOrderRec(tree.right, postOrderArr);
    postOrderArr.push(tree.data);
  }

  /**
   * LevelOrder Traversal of a Binary tree
   * From Root till it reaches leaf nodes
   * @param tree holds the Binary tree
   * @returns array of node data for a given Binary tree
   */
  levelOrderTraversal(tree: BTNode | null): number[] {
    let levelOrderArr: number[] = [];
    let queue: Array<BTNode | null> = [];
    this.levelOrderRec(tree, levelOrderArr, queue);
    return levelOrderArr;
  }

  /**
   *
   * @param tree hold the Binary tree
   * @param levelOrderArr memo array of tree data
   * @param queue memo queue of tree data
   * @returns value of a node in Binary tree
   */
  private levelOrderRec(
    tree: BTNode | null,
    levelOrderArr: number[],
    queue: Array<BTNode | null>
  ): number | undefined {
    if (tree == null) {
      return;
    }
    queue.push(tree);
    queue.push(null);

    while (queue.length !== 0) {
      const currentNode: BTNode | null | undefined = queue.shift();

      if (currentNode == undefined || currentNode == null) {
        if (queue.length === 0) {
          break;
        } else {
          queue.push(null);
        }
      } else {
        levelOrderArr.push(currentNode.data);

        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
  }
}
