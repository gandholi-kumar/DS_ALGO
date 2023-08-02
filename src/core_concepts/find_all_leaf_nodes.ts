import { BTNode, BinaryTree } from "../trees";

export class FindAllLeafNodes<T> extends BinaryTree<T> {
    public getAllLeafNodes(BT: BTNode<T>): T[] {
        let collector: T[] = [];
        this.getAllLeafNodesRec(BT, collector);
        return collector;
    }

    private getAllLeafNodesRec(BT: BTNode<T> | null, collector: T[]) {
        if (BT == null) {
            return;
        }

        if (BT.left == null && BT.right == null) {
            collector.push(BT.data);
            return;
        }

        this.getAllLeafNodesRec(BT.left, collector);
        this.getAllLeafNodesRec(BT.right, collector);
    }
}


export function findAllLeafNodes() {
    const preOrderInp: number[][] = [
      [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
      [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
    ];
  
    for (let i = 0; i < preOrderInp.length; i++) {
      const objFindAllLeafNodes: FindAllLeafNodes<number> = new FindAllLeafNodes<number>();
      const builtTree = objFindAllLeafNodes.buildTree(preOrderInp[i]);
      console.log(JSON.stringify(builtTree));
  
      if (builtTree) {
        const allLeafNodes = objFindAllLeafNodes.getAllLeafNodes(builtTree);
        console.log(`Index: ${i}, value: ${JSON.stringify(allLeafNodes)}`);
      }
    }
  }