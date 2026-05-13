import { Algorithm, VisualizationState } from './types';

export const dpAlgorithms: Algorithm[] = [
    {
        id: "dp-climbing-stairs",
        name: "Climbing Stairs (DP)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(n).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `int climbStairs(int n) {
    if (n <= 2) return n;
    vector<int> dp(n + 1);
    dp[1] = 1; dp[2] = 2;
    for (int i = 3; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2];
    return dp[n];
}`,
            java: `public int climbStairs(int n) {
    if (n <= 2) return n;
    int[] dp = new int[n + 1];
    dp[1] = 1; dp[2] = 2;
    for (int i = 3; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2];
    return dp[n];
}`,
            python: `def climbStairs(n):
    if n <= 2: return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]`,
            javascript: `function climbStairs(n) {
  if (n <= 2) return n;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`
        },
        run: function* () {
            const n = 5;
            const dp = new Array(n + 1).fill(0);

            yield {
                type: 'array',
                array: [...dp],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: `Initialize DP array of size ${n + 1}`
            };

            dp[1] = 1;
            yield {
                type: 'array',
                array: [...dp],
                activeIndices: [1],
                swapIndices: [],
                sortedIndices: [],
                description: "Base case: dp[1] = 1 (1 way to climb 1 step)"
            };

            dp[2] = 2;
            yield {
                type: 'array',
                array: [...dp],
                activeIndices: [2],
                swapIndices: [],
                sortedIndices: [],
                description: "Base case: dp[2] = 2 (2 ways to climb 2 steps: 1+1, 2)"
            };

            for (let i = 3; i <= n; i++) {
                yield {
                    type: 'array',
                    array: [...dp],
                    activeIndices: [i, i - 1, i - 2],
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Calculating dp[${i}] = dp[${i - 1}] + dp[${i - 2}]`
                };

                dp[i] = dp[i - 1] + dp[i - 2];

                yield {
                    type: 'array',
                    array: [...dp],
                    activeIndices: [i],
                    swapIndices: [],
                    sortedIndices: [],
                    description: `dp[${i}] = ${dp[i - 1]} + ${dp[i - 2]} = ${dp[i]}`
                };
            }

            yield {
                type: 'array',
                array: [...dp],
                activeIndices: [n],
                swapIndices: [],
                sortedIndices: [],
                description: `Result: ${dp[n]} ways to climb ${n} steps.`
            };
        }
    },
    {
        id: "dp-lcs",
        name: "Longest Common Subsequence (DP)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
The Longest Common Subsequence(LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences(often just two sequences).

### Complexity Analysis
    - Time Complexity: O(m * n).
- Space Complexity: O(m * n).`,
        timeComplexity: "O(m * n)",
        spaceComplexity: "O(m * n)",
        code: {
            cpp: `int lcs(string X, string Y, int m, int n) {
    if (m == 0 || n == 0) return 0;
    if (X[m - 1] == Y[n - 1]) return 1 + lcs(X, Y, m - 1, n - 1);
    else return max(lcs(X, Y, m, n - 1), lcs(X, Y, m - 1, n));
} `,
            java: `int lcs(char[] X, char[] Y, int m, int n) {
    if (m == 0 || n == 0) return 0;
    if (X[m - 1] == Y[n - 1]) return 1 + lcs(X, Y, m - 1, n - 1);
    else return max(lcs(X, Y, m, n - 1), lcs(X, Y, m - 1, n));
} `,
            python: `def lcs(X, Y, m, n):
if m == 0 or n == 0: return 0
if X[m - 1] == Y[n - 1]: return 1 + lcs(X, Y, m - 1, n - 1)
else: return max(lcs(X, Y, m, n - 1), lcs(X, Y, m - 1, n))`,
            javascript: `function lcs(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
} `
        },
        run: function* () {
            const s1 = "ABC";
            const s2 = "AC";

            const m = s1.length;
            const n = s2.length;
            const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

            // Initialize 2D Grid for Visualization
            const grid: (number | string)[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
            // Add headers
            const displayGrid: (number | string)[][] = [
                [' ', ' ', ...s2.split('')],
                [' ', 0, ...Array(n).fill(0)],
                ...s1.split('').map((char, i) => [char, 0, ...Array(n).fill(0)])
            ];

            yield {
                type: 'grid',
                grid: displayGrid,
                rows: m + 2,
                cols: n + 2,
                highlights: [],
                description: "Initializing DP table..."
            } as any;

            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    yield {
                        type: 'grid',
                        grid: displayGrid,
                        rows: m + 2,
                        cols: n + 2,
                        highlights: [
                            { row: i + 1, col: j + 1, color: 'active' },
                            { row: i + 1, col: 0, color: 'active' },
                            { row: 0, col: j + 1, color: 'active' }
                        ],
                        description: `Comparing ${s1[i - 1]} (Row ${i}) and ${s2[j - 1]} (Col ${j})`
                    } as any;

                    if (s1[i - 1] === s2[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                        displayGrid[i + 1][j + 1] = dp[i][j];
                        yield {
                            type: 'grid',
                            grid: displayGrid,
                            rows: m + 2,
                            cols: n + 2,
                            highlights: [{ row: i + 1, col: j + 1, color: 'match' }],
                            description: `Match! 1 + diagonal(${dp[i - 1][j - 1]}) = ${dp[i][j]} `
                        } as any;
                    } else {
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                        displayGrid[i + 1][j + 1] = dp[i][j];
                        yield {
                            type: 'grid',
                            grid: displayGrid,
                            rows: m + 2,
                            cols: n + 2,
                            highlights: [{ row: i + 1, col: j + 1, color: 'mismatch' }],
                            description: `No match. Max of top(${dp[i - 1][j]}) and left(${dp[i][j - 1]}) = ${dp[i][j]} `
                        } as any;
                    }
                }
            }

            yield {
                type: 'grid',
                grid: displayGrid,
                rows: m + 2,
                cols: n + 2,
                highlights: [{ row: m + 1, col: n + 1, color: 'found' }],
                description: `LCS Length: ${dp[m][n]} `
            } as any;
        }
    },
    {
        id: "kadanes-algorithm",
        name: "Kadane's Algorithm",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Kadane's Algorithm finds the contiguous subarray within a one-dimensional numeric array which has the largest sum.

### Real-World Example
Stock Market. Finding the best time period to buy and sell (or just holding period) to maximize profit if you could trade everyday.

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(1).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `int maxSubArray(vector<int>& nums) {
    int max_so_far = INT_MIN, max_ending_here = 0;
    for (int x : nums) {
        max_ending_here += x;
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;
        if (max_ending_here < 0)
            max_ending_here = 0;
    }
    return max_so_far;
}`,
            java: `public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0], maxEndingHere = nums[0];
    for (int i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}`,
            python: `def maxSubArray(nums):
    max_so_far = nums[0]
    max_ending_here = nums[0]
    for i in range(1, len(nums)):
        max_ending_here = max(nums[i], max_ending_here + nums[i])
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far`,
            javascript: `function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}`
        },
        run: function* (initialArray: number[]) {
            const arr = (initialArray && initialArray.length > 0) ? [...initialArray] : [-2, 1, -3, 4, -1, 2, 1, -5, 4];
            let maxSoFar = arr[0];
            let maxEndingHere = arr[0];
            let start = 0, end = 0, s = 0;

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [0],
                swapIndices: [],
                sortedIndices: [],
                description: `Initialize maxSoFar = ${maxSoFar}, maxEndingHere = ${maxEndingHere}`
            };

            for (let i = 1; i < arr.length; i++) {
                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [i],
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Processing element ${arr[i]}`
                };

                if (arr[i] > maxEndingHere + arr[i]) {
                    maxEndingHere = arr[i];
                    s = i; // Reset start of subarray
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [i],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Start new subarray at ${arr[i]} (Previous sum negative)`
                    };
                } else {
                    maxEndingHere += arr[i];
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [i],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Add ${arr[i]} to current subarray. Sum: ${maxEndingHere}`
                    };
                }

                if (maxEndingHere > maxSoFar) {
                    maxSoFar = maxEndingHere;
                    end = i;
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [i],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `New Max Sum Found: ${maxSoFar}`
                    };
                }
            }
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: `Algorithm Completed. Max Subarray Sum: ${maxSoFar}`
            };
        }
    },
    {
        id: "knapsack",
        name: "0/1 Knapsack Problem",
        type: "data-structure", // Using grid/table visualization
        category: "popular",
        description: `### Definition
Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.

### Complexity Analysis
- Time Complexity: O(N*W).
- Space Complexity: O(N*W).`,
        timeComplexity: "O(N*W)",
        spaceComplexity: "O(N*W)",
        code: {
            cpp: `int knapSack(int W, int wt[], int val[], int n) {
    int i, w;
    vector<vector<int>> K(n + 1, vector<int>(W + 1));
    for (i = 0; i <= n; i++) {
        for (w = 0; w <= W; w++) {
            if (i == 0 || w == 0) K[i][w] = 0;
            else if (wt[i - 1] <= w)
                K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }
    return K[n][W];
}`,
            java: `int knapSack(int W, int wt[], int val[], int n) {
    int i, w;
    int K[][] = new int[n + 1][W + 1];
    for (i = 0; i <= n; i++) {
        for (w = 0; w <= W; w++) {
            if (i == 0 || w == 0) K[i][w] = 0;
            else if (wt[i - 1] <= w)
                K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }
    return K[n][W];
}`,
            python: `def knapSack(W, wt, val, n):
    K = [[0 for x in range(W + 1)] for x in range(n + 1)]
    for i in range(n + 1):
        for w in range(W + 1):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif wt[i-1] <= w:
                K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w])
            else:
                K[i][w] = K[i-1][w]
    return K[n][W]`,
            javascript: `function knapSack(W, wt, val, n) {
    let i, w;
    let K = new Array(n + 1);
    for (i = 0; i <= n; i++) K[i] = new Array(W + 1);
    for (i = 0; i <= n; i++) {
        for (w = 0; w <= W; w++) {
            if (i === 0 || w === 0) K[i][w] = 0;
            else if (wt[i - 1] <= w)
                K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }
    return K[n][W];
}`
        },
        run: function* () {
            const val = [60, 100, 120];
            const wt = [10, 20, 30];
            const W = 50;
            const n = val.length;
            const dp = Array(n + 1).fill(0).map(() => Array(W + 1).fill(0));

            const formatGrid = (i: number, w: number) => {
                const displayGrid = dp.map(row => row.map(v => v));
                const highlights: { row: number; col: number; color: 'active' | 'match' | 'mismatch' | 'none' }[] = [];
                highlights.push({ row: i, col: w, color: 'active' });
                return { grid: displayGrid, highlights };
            };

            for (let i = 0; i <= n; i++) {
                for (let w = 0; w <= W; w++) {
                    if (i === 0 || w === 0) {
                        dp[i][w] = 0;
                    } else if (wt[i - 1] <= w) {
                        dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
                    } else {
                        dp[i][w] = dp[i - 1][w];
                    }

                    // Visualize every few steps or important updates to avoid too many frames
                    if (w % 10 === 0 || w === W) {
                        const { grid, highlights } = formatGrid(i, w);
                        // We can use grid visualization for DP table
                        // Mapping DP table to grid structure
                        yield {
                            type: 'grid',
                            rows: n + 1,
                            cols: Math.min(W + 1, 10), // Truncate cols for display if needed, or show full
                            grid: grid.map(r => r.slice(0, 10)), // Just showing first 10 cols for demo
                            highlights: highlights.filter(h => h.col < 10),
                            description: `Computing DP[${i}][${w}]`
                        };
                    }
                }
            }
            yield {
                type: 'grid',
                rows: n + 1,
                cols: 10,
                grid: dp.map(r => r.slice(0, 10)),
                highlights: [],
                description: `Max Value: ${dp[n][W]}`
            };
        }
    }
];
