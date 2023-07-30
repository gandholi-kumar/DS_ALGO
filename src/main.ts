import { BinaryTree } from "./trees";

function mainFunction() {
  const arrTrees: number[][] = [
    [],
    [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
    [1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1],
  ];

  for (let i = 0; i < arrTrees.length; i++) {
    // Building tree
    const objBinaryTree = new BinaryTree();
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
}

mainFunction();
