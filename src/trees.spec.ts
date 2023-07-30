import { describe, expect, it } from "@jest/globals";
import { binaryTreeMock, binaryTreeMockI } from "./mock_data/build_trees.mock";
import { BinaryTree } from "./trees";

describe("Data structure", () => {
  let mockData: binaryTreeMockI[];
  beforeEach(() => {
    mockData = [...binaryTreeMock];
  });

  describe("Binary Tree", () => {
    it("should not create for empty inputs", () => {
      const mockData: number[] = [];
      let treeObj = new BinaryTree();
      const val = treeObj.buildTree(mockData);
      expect(val).toBeNull();
    });

    it("should create for given input", () => {
      for (let i = 0; i < mockData.length; i++) {
        let treeObj = new BinaryTree();
        const val = treeObj.buildTree(mockData[i].inputVal);
        expect(val).toEqual(mockData[i].builtTreeOutput);
      }
    });
  });

  describe("PreOrder Traversal", () => {
    it("must return empty array for null input", () => {
      let treeObj = new BinaryTree();
      const preOrderTraversalVal = treeObj.preOrderTraversal(null);
      expect(preOrderTraversalVal).toEqual([]);
    });

    it("must return preOrder value", () => {
      for (let i = 0; i < mockData.length; i++) {
        let treeObj = new BinaryTree();
        const preOrderTraversalVal = treeObj.preOrderTraversal(
          mockData[i].builtTreeOutput
        );
        expect(preOrderTraversalVal).toEqual(
          mockData[i].preOrderTraversalOutput
        );
      }
    });
  });

  describe("InOrder Traversal", () => {
    it("must return empty array for null input", () => {
      let treeObj = new BinaryTree();
      const inOrderTraversalVal = treeObj.inOrderTraversal(null);
      expect(inOrderTraversalVal).toEqual([]);
    });

    it("must return inOrder value", () => {
      for (let i = 0; i < mockData.length; i++) {
        let treeObj = new BinaryTree();
        const inOrderTraversalVal = treeObj.inOrderTraversal(
          mockData[i].builtTreeOutput
        );
        expect(inOrderTraversalVal).toEqual(mockData[i].inOrderTraversalOutput);
      }
    });
  });

  describe("PostOrder Traversal", () => {
    it("must return empty array for null input", () => {
      let treeObj = new BinaryTree();
      const postOrderTraversalVal = treeObj.postOrderTraversal(null);
      expect(postOrderTraversalVal).toEqual([]);
    });

    it("must return inOrder value", () => {
      for (let i = 0; i < mockData.length; i++) {
        let treeObj = new BinaryTree();
        const postOrderTraversalVal = treeObj.postOrderTraversal(
          mockData[i].builtTreeOutput
        );
        expect(postOrderTraversalVal).toEqual(
          mockData[i].postOrderTraversalOutput
        );
      }
    });
  });

  describe("LevelOrder Traversal", () => {
    it("must return empty array for null input", () => {
      let treeObj = new BinaryTree();
      const levelOrderTraversalVal = treeObj.levelOrderTraversal(null);
      expect(levelOrderTraversalVal).toEqual([]);
    });

    it("must return inOrder value", () => {
      for (let i = 0; i < mockData.length; i++) {
        let treeObj = new BinaryTree();
        const levelOrderTraversalVal = treeObj.levelOrderTraversal(
          mockData[i].builtTreeOutput
        );
        expect(levelOrderTraversalVal).toEqual(
          mockData[i].levelOrderTraversalOutput
        );
      }
    });
  });
});
