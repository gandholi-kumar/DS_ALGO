import { BTNode, BinaryTree } from "../../trees";

export class FindAllBranches extends BinaryTree<number> {
  public findBranches(bT: BTNode<number>) {
    let collector: number[] = [];
    let branches: number[][] = [];
    this.findBranchesRec(bT, collector, branches);
    return branches;
  }

  private findBranchesRec(
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

    this.findBranchesRec(bT.left, collector, branches);
    this.findBranchesRec(bT.right, collector, branches);
    collector.pop();
  }
}

export function findBranches() {
  const preOrderInp: number[][] = [
    [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1],
    [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
  ];

  for (let i = 0; i < preOrderInp.length; i++) {
    const objFindAllBranches: FindAllBranches = new FindAllBranches();
    const builtTree = objFindAllBranches.buildTree(preOrderInp[i]);
    console.log(JSON.stringify(builtTree));

    if (builtTree) {
      const collectionBranches = objFindAllBranches.findBranches(builtTree);
      console.log(`Index: ${i}, value: ${JSON.stringify(collectionBranches)}`);
    }
  }
}
