/*
Given a binary tree, the task is to convert the binary tree into its Mirror tree. 
Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged. 

            1           |         1
           / \          |        / \  
          2   3         |       3   2
             /          |        \
            4           |         4
            
            4           |          4
           / \          |         / \
         2     7        |       7     2
        / \   / \       |      / \   / \
       1   3 6   9      |     9   6 3   1 

LeetCode:  https://leetcode.com/problems/invert-binary-tree/submissions/
*/

import { BTNode, BinaryTree } from "../trees";

export class MirrorTree<T> extends BinaryTree<T> {
    public buildMirrorTree(BT: BTNode<T> | null) {
        if (!BT) return null;

        const temp = BT.left;
        BT.left = BT.right;
        BT.right = temp;

        this.buildMirrorTree(BT.left);
        this.buildMirrorTree(BT.right);

        return BT;
    }
}

export function getMirrorTree() {
    const preOrderInp: number[][] = [
        [1, 2, -1, -1, 3, 4, -1, -1, -1],
        [4, 2, 1, -1, -1, 3, -1, -1, 7, 6, -1, -1, 9, -1, -1],
    ];

    for (let i = 0; i < preOrderInp.length; i++) {
        const objMirrorTree: MirrorTree<number> =
            new MirrorTree<number>();
        const builtTree = objMirrorTree.buildTree(preOrderInp[i]);
        console.log(JSON.stringify(builtTree));

        if (builtTree) {
            const collectionBranches = objMirrorTree.buildMirrorTree(builtTree);
            console.log(`Index: ${i}, value: ${JSON.stringify(collectionBranches)}`);
        }
    }
}