import { binaryTreeMockI } from "./build_trees.mock";

export interface CoreConceptsMockI<T> extends binaryTreeMockI<T> {
    allBranches: T[];
    allAncestorsOfNode: T[];
    allAncestorsOfArrayOfNode: T[][];
}

export const coreConceptMock: CoreConceptsMockI<number>[] = [
    {
        index: 0,
        inputVal: [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1],
        visualization: "src/mock_data/tree_visualization.md",
        builtTreeOutput: {
            data: 1,
            left: {
                data: 2,
                left: {
                    data: 4,
                    left: null,
                    right: null,
                },
                right: {
                    data: 5,
                    left: null,
                    right: null,
                },
            },
            right: {
                data: 3,
                left: null,
                right: {
                    data: 6,
                    left: null,
                    right: null,
                },
            },
        },
        preOrderTraversalOutput: [1, 2, 4, 5, 3, 6],
        inOrderTraversalOutput: [4, 2, 5, 1, 3, 6],
        postOrderTraversalOutput: [4, 5, 2, 6, 3, 1],
        levelOrderTraversalOutput: [1, 2, 3, 4, 5, 6],
        allBranches: [],
        allAncestorsOfNode: [],
        allAncestorsOfArrayOfNode: [[1,2],[1,2,5],[1,3,6]]
    },

    {
        index: 1,
        inputVal: [
            1, 2, 4, 7, -1, -1, 8, -1, -1, 5, -1, -1, 3, -1, 6, -1, 9, -1, -1,
        ],
        visualization: "src/mock_data/tree_visualization.md",
        builtTreeOutput: {
            data: 1,
            left: {
                data: 2,
                left: {
                    data: 4,
                    left: {
                        data: 7,
                        left: null,
                        right: null,
                    },
                    right: {
                        data: 8,
                        left: null,
                        right: null,
                    },
                },
                right: {
                    data: 5,
                    left: null,
                    right: null,
                },
            },
            right: {
                data: 3,
                left: null,
                right: {
                    data: 6,
                    left: null,
                    right: {
                        data: 9,
                        left: null,
                        right: null,
                    },
                },
            },
        },
        preOrderTraversalOutput: [1, 2, 4, 7, 8, 5, 3, 6, 9],
        inOrderTraversalOutput: [7, 4, 8, 2, 5, 1, 3, 6, 9],
        postOrderTraversalOutput: [7, 8, 4, 5, 2, 9, 6, 3, 1],
        levelOrderTraversalOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        allBranches: [],
        allAncestorsOfNode: [],
        allAncestorsOfArrayOfNode: [[1,2,4],[1,2,5],[1,3,6,9]]
    },
]