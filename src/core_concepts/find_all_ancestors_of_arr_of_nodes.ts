import { BTNode, BinaryTree } from "../trees";

export class FindAllAncestorsOfArrayOfNode<T> extends BinaryTree<T> {
    public getFindAllAncestorsOfArrayOfNode(BT: BTNode<T>, nodesData: T[]) {
        let collector: T[] = [];
        let ancestorsArray: T[][] = [];
        this.getFindAllAncestorsOfArrayOfNodeRec(BT, nodesData, collector, ancestorsArray);
        return ancestorsArray;
    }

    private getFindAllAncestorsOfArrayOfNodeRec(BT: BTNode<T> | null, nodesData: T[], collector: T[], ancestorsArray: T[][]) {
        if (BT == null) {
            return;
        }

        collector.push(BT.data);

        if (nodesData.includes(BT.data)) {
            ancestorsArray.push([...collector]);
        }

        if (BT.left == null && BT.right == null) {
            collector.pop();
            return;
        }

        this.getFindAllAncestorsOfArrayOfNodeRec(BT.left, nodesData, collector, ancestorsArray);
        this.getFindAllAncestorsOfArrayOfNodeRec(BT.right, nodesData, collector, ancestorsArray);
        collector.pop();
    }
}

type Ancestors<T> = {
    preOrderData: T[];
    node: T[];
};

export function findAncestorsOfArrayOfNode() {
    const preOrderInp: Ancestors<number>[] = [
        {
            preOrderData: [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
            node: [5, 6, 2],
        },
        {
            preOrderData: [
                1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1,
            ],
            node: [9, 5, 4],
        },
    ];

    for (let i = 0; i < preOrderInp.length; i++) {
        const objAncestorsOfNode: FindAllAncestorsOfArrayOfNode<number> =
            new FindAllAncestorsOfArrayOfNode<number>();
        const builtTree = objAncestorsOfNode.buildTree(preOrderInp[i].preOrderData);
        console.log(JSON.stringify(builtTree));

        if (builtTree) {
            const collectionBranches = objAncestorsOfNode.getFindAllAncestorsOfArrayOfNode(
                builtTree,
                preOrderInp[i].node
            );
            console.log(`Index: ${i}, value: ${JSON.stringify(collectionBranches)}`);
        }
    }
}
