import { BTNode, BinaryTree } from "../../trees";

export class FindAllAncestorsOfANode<T> extends BinaryTree<T> {
  public getAncestorsNode(BT: BTNode<T>, nodeData: T) {
    let collector: T[] = [];
    let ancestors: T[] = [];
    this.getAncestorsNodeRec(BT, nodeData, collector, ancestors);
    return ancestors;
  }

  private getAncestorsNodeRec(
    BT: BTNode<T> | null,
    nodeData: T,
    collector: T[],
    ancestors: T[]
  ) {
    if (BT == null) {
      return;
    }

    collector.push(BT.data);

    if (BT.data === nodeData) {
      ancestors.push(...collector);
    }

    if (BT.left == null && BT.right == null) {
      collector.pop();
      return;
    }

    this.getAncestorsNodeRec(BT.left, nodeData, collector, ancestors);
    this.getAncestorsNodeRec(BT.right, nodeData, collector, ancestors);
    collector.pop();
  }
}

type Ancestors<T> = {
  preOrderData: T[];
  node: T;
};

export function findAncestorsOfNode() {
  const preOrderInp: Ancestors<number>[] = [
    {
      preOrderData: [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1],
      node: 5,
    },
    {
      preOrderData: [
        1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1,
      ],
      node: 9,
    },
  ];

  for (let i = 0; i < preOrderInp.length; i++) {
    const objAncestorsOfNode: FindAllAncestorsOfANode<number> =
      new FindAllAncestorsOfANode<number>();
    const builtTree = objAncestorsOfNode.buildTree(preOrderInp[i].preOrderData);
    console.log(JSON.stringify(builtTree));

    if (builtTree) {
      const collectionBranches = objAncestorsOfNode.getAncestorsNode(
        builtTree,
        preOrderInp[i].node
      );
      console.log(`Index: ${i}, value: ${JSON.stringify(collectionBranches)}`);
    }
  }
}
