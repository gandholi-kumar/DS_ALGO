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
    public isSymmentrictree(BT: BTNode<T> | null) {
        if(!BT) return null;



    }
}