import { BTNode, BinaryTree } from "../trees";

export class FindHeightOfTree<T> extends BinaryTree<T> {
  public getHeight(BT: BTNode<T>) {
    if (BT.left == null || BT.right == null) {
      return 1;
    } else {
      const leftHeight: number = this.getHeight(BT.left);
      const rightHeight: number = this.getHeight(BT.right);
      const maxHeight: number = Math.max(leftHeight, rightHeight) + 1;
      return maxHeight;
    }
  }
}

export function findHeight() {
  const preOrderInp: number[][] = [
    [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
    [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
  ];

  for (let i = 0; i < preOrderInp.length; i++) {
    const objFindHeightOfTree: FindHeightOfTree<number> =
      new FindHeightOfTree<number>();
    const builtTree = objFindHeightOfTree.buildTree(preOrderInp[i]);
    console.log(JSON.stringify(builtTree));

    if (builtTree) {
      const collectionBranches = objFindHeightOfTree.getHeight(builtTree);
      console.log(`Index: ${i}, value: ${JSON.stringify(collectionBranches)}`);
    }
  }
}
