/*
Write a function to determine if two trees are identical or not:

Two trees are identical when they have the same data and the arrangement of data is also the same

Input:
        tree1: [1, 2, 4, -1, -1, -1, 3, -1, -1],
        tree2: [1, 2, 4, -1, -1, -1, 3, -1, -1],

                   1                    1
                 /   \                /   \
                2     3              2     3
               /                    /
              4                    4

Output: Both trees are identical = TRUE

Input:
        tree1: [1, 2, -1, -1, 3, 4, -1, -1, -1],
        tree2: [1, 5, 4, -1, -1, -1, 3, -1, -1],

                   1                    1
                 /   \                /   \
                2     3              5     3
                     /              /
                    4              4

Output: Trees are not identical = FALSE

*/

import { BTNode, BinaryTree } from "../trees";

export class IsTreesIdentical<T> extends BinaryTree<T> {
  
  public isTwoTreesIdentical(BT1: BTNode<T>, BT2: BTNode<T>): boolean {
    let queue: BTNode<T>[] = [];

    if (BT1 != null && BT2 != null) {
      queue.push(BT1);
      queue.push(BT2);


      while (queue.length >= 2) {
        let currentNodeBT1 = queue[0];
        let currentNodeBT2 = queue[1];

        if (queue[0].data === queue[1].data) {
          queue.shift();
          queue.shift();
        } else {
          return false;
        }

        if (((currentNodeBT1.left == null && currentNodeBT2.left != null) || (currentNodeBT1.left != null && currentNodeBT2.left == null)) ||
          (currentNodeBT1.right == null && currentNodeBT2.right != null) || (currentNodeBT1.right != null && currentNodeBT2.right == null)
        ) {
          return false;
        }

        if (currentNodeBT1.left && currentNodeBT2.left) {
          queue.push(currentNodeBT1.left);
          queue.push(currentNodeBT2.left);
        }

        if (currentNodeBT1.right && currentNodeBT2.right) {
          queue.push(currentNodeBT1.right);
          queue.push(currentNodeBT2.right);
        }

      }
    }
    return true;
  }
}

interface isIdenticalTrees<T> {
  trees: {
    tree1: T[],
    tree2: T[],
  }[]
}

export function isIndenticalTrees() {
  const preOrderInp: isIdenticalTrees<number> = {
    trees: [
      {
        tree1: [1, 2, 4, -1, -1, -1, 3, -1, -1],
        tree2: [1, 2, 4, -1, -1, -1, 3, -1, -1],
      },
      {
        tree1: [1, 2, -1, -1, 3, 4, -1, -1, -1],
        tree2: [1, 5, 4, -1, -1, -1, 3, -1, -1],
      },
      {
        tree1: [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
        tree2: [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
      },
      {
        tree1: [1],
        tree2: [1],
      },
      {
        tree1: [1],
        tree2: [3],
      },
    ]
  }

  for (let i = 0; i < preOrderInp.trees.length; i++) {
    const objFindLongestBranch1: IsTreesIdentical<number> =
      new IsTreesIdentical<number>();
    const builtTree1 = objFindLongestBranch1.buildTree(preOrderInp.trees[i].tree1);
    console.log(JSON.stringify(builtTree1));

    const objFindLongestBranch2: IsTreesIdentical<number> =
      new IsTreesIdentical<number>();
    const builtTree2 = objFindLongestBranch2.buildTree(preOrderInp.trees[i].tree2);
    console.log(JSON.stringify(builtTree2));

    if (builtTree1 && builtTree2) {
      const isIdentical =
        objFindLongestBranch1.isTwoTreesIdentical(builtTree1, builtTree2);
      console.log(`Index: ${i}, value: ${JSON.stringify(isIdentical)}`);
    }
  }
}
