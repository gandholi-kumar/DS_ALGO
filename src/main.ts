import { findAncestorsOfNode } from "./core_concepts/find_all_ancestors_of_a_node";
import { findAncestorsOfArrayOfNode } from "./core_concepts/find_all_ancestors_of_arr_of_nodes";
import { findBranches } from "./core_concepts/find_all_branches";
import { findAllLeafNodes } from "./core_concepts/find_all_leaf_nodes";
import { BinaryTree } from "./trees";

function mainFunction() {
  const arrTrees: number[][] = [
    [],
    [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
    [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
  ];

  for (let i = 0; i < arrTrees.length; i++) {
    // Building tree
    const objBinaryTree = new BinaryTree<number>();
    const nodes = objBinaryTree.buildTree(arrTrees[i]);
    if (nodes) {
      console.log(`Index: ${i}, Value: ${JSON.stringify(nodes)}`);
    }

    // Pre order traversal
    const preOrderTraversalVal = objBinaryTree.preOrderTraversal(nodes);
    console.log(`preOrderTraversalVal: ${preOrderTraversalVal}`);

    // In order traversal
    const inOrderTraversalVal = objBinaryTree.inOrderTraversal(nodes);
    console.log(`inOrderTraversalVal: ${inOrderTraversalVal}`);

    // Post order traversal
    const postOrderTraversalVal = objBinaryTree.postOrderTraversal(nodes);
    console.log(`postOrderTraversalVal: ${postOrderTraversalVal}`);

    // Level order traversal
    const levelOrderTraversalVal = objBinaryTree.levelOrderTraversal(nodes);
    console.log(`levelOrderTraversalVal: ${levelOrderTraversalVal}`);
  }
  console.log(
    ` ----------------------------------------------------------------------------- `
  );

  const arrTreeAlpha: string[][] = [
    ["a", "b", "c", "-1", "-1", "d", "-1", "-1", "e", "-1", "f", "-1", "-1"],
    [
      "k",
      "l",
      "m",
      "n",
      "-1",
      "-1",
      "o",
      "-1",
      "-1",
      "p",
      "-1",
      "-1",
      "q",
      "-1",
      "r",
      "-1",
      "s",
      "-1",
      "-1",
    ],
  ];

  for (let i = 0; i < arrTreeAlpha.length; i++) {
    // Building tree
    const objBinaryTree = new BinaryTree<string>();
    const nodes = objBinaryTree.buildTree(arrTreeAlpha[i]);
    if (nodes) {
      console.log(`Index: ${i}, Value: ${JSON.stringify(nodes)}`);
    }

    // Pre order traversal
    const preOrderTraversalVal = objBinaryTree.preOrderTraversal(nodes);
    console.log(`preOrderTraversalVal: ${preOrderTraversalVal}`);

    // In order traversal
    const inOrderTraversalVal = objBinaryTree.inOrderTraversal(nodes);
    console.log(`inOrderTraversalVal: ${inOrderTraversalVal}`);

    // Post order traversal
    const postOrderTraversalVal = objBinaryTree.postOrderTraversal(nodes);
    console.log(`postOrderTraversalVal: ${postOrderTraversalVal}`);

    // Level order traversal
    const levelOrderTraversalVal = objBinaryTree.levelOrderTraversal(nodes);
    console.log(`levelOrderTraversalVal: ${levelOrderTraversalVal}`);
  }
}

/* Practice functionCalls */
// mainFunction();
// practice();
// findBranches();
// findAncestorsOfNode();
// findAncestorsOfArrayOfNode();
findAllLeafNodes();
