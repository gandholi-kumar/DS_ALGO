/*
Given a binary tree and two nodes, the task is to check if the nodes are siblings of each other or not.
Two nodes are said to be siblings if they are present at the same level, and their parents are same.

Input : 
       1
      /  \
     2    3
    / \  / \
   4   5 6  7
First node is 4 and Second node is 6.
Output : No, they are not siblings.

Input :
         1
        /  \
       5    6
      /    /  \
     7    3    4
First node is 3 and Second node is 4
Output : Yes

*/

import { BTNode, BinaryTree } from "../trees";

export class Sibling extends BinaryTree<number> {
  // Method to validate the nodes
  public isSibling(bT: BTNode<number>, child1: number, child2: number) {
    let collector: number[] = [];
    let branches: number[][] = [];
    this.isSiblingRec(bT, collector, branches);
    return branches;
  }

  private isSiblingRec(
    bT: BTNode<number> | null,
    collector: number[],
    branches: number[][]
  ) {
    if (bT == null) {
      return;
    }

    collector.push(bT.data);

    if (bT.left == null && bT.right == null) {
      branches.push([...collector]);
      collector.pop();
      return;
    }

    this.isSiblingRec(bT.left, collector, branches);
    this.isSiblingRec(bT.right, collector, branches);
    collector.pop();
  }
}

export function practice() {
  const preOrderInp: number[] = [
    1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1,
  ];

  const objSibling: Sibling = new Sibling();
  const builtTree = objSibling.buildTree(preOrderInp);
  console.log(JSON.stringify(builtTree));

  if (builtTree) {
    const postOrder = objSibling.isSibling(builtTree, 4, 5);
    console.log(JSON.stringify(postOrder));
  }
}
