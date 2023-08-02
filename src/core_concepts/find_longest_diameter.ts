import { BTNode, BinaryTree } from "../trees";

// TODO;
export class FindLongestDiameter<T> extends BinaryTree<T> {
  public getLongestDiameter(BT: BTNode<T>) {
    let collector: T[] = [];
    let diameter: T[][] = [];
    this.getLongestDiameterRec(BT, collector, diameter);
    return diameter;
  }

  private getLongestDiameterRec(
    BT: BTNode<T> | null,
    collector: T[],
    diameter: T[][] = []
  ) {
    if (BT == null) {
      return;
    }

    collector.push(BT.data);

    if (BT.left == null && BT.right == null) {
    }
    this.getLongestDiameterRec(BT.left, collector, diameter);
    this.getLongestDiameterRec(BT.right, collector, diameter);

    collector.pop();
  }
}

export function findDiameter() {
  const preOrderInp: number[][] = [
    [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
    [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
  ];

  for (let i = 0; i < preOrderInp.length; i++) {
    const objFindLongestDiameter: FindLongestDiameter<number> =
      new FindLongestDiameter<number>();
    const builtTree = objFindLongestDiameter.buildTree(preOrderInp[i]);
    console.log(JSON.stringify(builtTree));

    if (builtTree) {
      const collectionBranches =
        objFindLongestDiameter.getLongestDiameter(builtTree);
      console.log(`Index: ${i}, value: ${JSON.stringify(collectionBranches)}`);
    }
  }
}
