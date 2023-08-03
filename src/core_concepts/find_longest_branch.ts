import { BTNode, BinaryTree } from "../trees";

// TODO;
export class FindLongestBranch<T> extends BinaryTree<T> {
  public getLongestBranch(BT: BTNode<T>) {
    let collector: T[] = [];
    let branch: T[] = [];
    this.getLongestBranchRec(BT, collector, branch);
    return branch;
  }

  private getLongestBranchRec(
    BT: BTNode<T> | null,
    collector: T[],
    branch: T[]
  ) {
    if (BT == null) {
      return;
    }

    collector.push(BT.data);

    if (BT.left == null && BT.right == null) {
      if(branch.length <= collector.length) {
        branch.length = 0;
        branch.push(...collector);
      }
      collector.pop();
      return;
    }

    this.getLongestBranchRec(BT.left, collector, branch);
    this.getLongestBranchRec(BT.right, collector, branch);

    collector.pop();
  }
}

export function findBranch() {
  const preOrderInp: number[][] = [
    [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
    [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
    [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, 3, -1, 6, -1, 9, -1, -1, 10, -1, -1]
  ];

  for (let i = 0; i < preOrderInp.length; i++) {
    const objFindLongestBranch: FindLongestBranch<number> =
      new FindLongestBranch<number>();
    const builtTree = objFindLongestBranch.buildTree(preOrderInp[i]);
    console.log(JSON.stringify(builtTree));

    if (builtTree) {
      const collectionBranches =
        objFindLongestBranch.getLongestBranch(builtTree);
      console.log(`Index: ${i}, value: ${JSON.stringify(collectionBranches)}`);
    }
  }
}
