/*
Given a binary tree, check whether it is a mirror of itself.

For example, this binary tree is symmetric: 

     1
   /   \
  2     2
 / \   / \
3   4 4   3

But the following is not:
    1
   / \
  2   2
   \   \
   3    3
*/

import { BTNode, BinaryTree } from "../trees";

export class isSymmentric<T> extends BinaryTree<T> {
    public isSymmentricTree(BT: BTNode<T> | null): boolean {
        if (!BT) return false;

        return this.isSymmentircTreeRec(BT, BT);
    }

    private isSymmentircTreeRec(BT1: BTNode<T> | null, BT2: BTNode<T> | null): boolean {
        if (BT1 === null && BT2 === null) return true;

        if (BT1 !== null && BT2 !== null && BT1.data === BT2.data) {
            return (this.isSymmentircTreeRec(BT1.left, BT2.right) && this.isSymmentircTreeRec(BT1.right, BT2.left))
        }

        return false;
    }
}


export function isSymmentricTree() {
    const preOrderInp: number[][] = [
        [1, 2, 3, -1, -1, 4, -1, -1, 2, 4, -1, -1, 3, -1, -1],
        [1, 2, -1, 3, -1, -1, 2, -1, 3, -1, -1],
        [1, 2, -1, -1, 3, 4, -1, -1, -1],
    ];

    for (let i = 0; i < preOrderInp.length; i++) {
        const objIsSymmentric: isSymmentric<number> =
            new isSymmentric<number>();
        const builtTree = objIsSymmentric.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));

        if (builtTree) {
            const collectionBranches = objIsSymmentric.isSymmentricTree(builtTree);
            console.log(`Index: ${i}, value: ${JSON.stringify(collectionBranches)}`);
        }
    }
}