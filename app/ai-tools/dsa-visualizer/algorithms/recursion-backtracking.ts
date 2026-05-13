import { Algorithm, VisualizationState, TreeNode } from './types';

export const recursionAlgorithms: Algorithm[] = [
    {
        id: "recursion-fibonacci",
        name: "Fibonacci (Recursion)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
The Fibonacci numbers are the numbers in the following integer sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

### Complexity Analysis
- Time Complexity: O(2^n) (Naive Recursion).
- Space Complexity: O(n) (Recursion Stack).`,
        timeComplexity: "O(2^n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}`,
            java: `public int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}`,
            python: `def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)`,
            javascript: `function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}`
        },
        run: function* () {
            const stack: string[] = [];
            const n = 4;

            function* fib(k: number): Generator<any> {
                stack.push(`fib(${k})`);
                yield {
                    type: 'stack',
                    stack: [...stack],
                    operation: 'push',
                    description: `Calling fib(${k})`
                };

                if (k <= 1) {
                    stack.pop();
                    yield {
                        type: 'stack',
                        stack: [...stack],
                        operation: 'pop',
                        description: `fib(${k}) returns ${k}`
                    };
                    return k;
                }

                const a = yield* fib(k - 1);
                const b = yield* fib(k - 2);

                stack.pop();
                yield {
                    type: 'stack',
                    stack: [...stack],
                    operation: 'pop',
                    description: `fib(${k}) returns ${a} + ${b} = ${a + b}`
                };
                return a + b;
            }

            yield* fib(n);
        }
    },
    {
        id: "recursion-tower-of-hanoi",
        name: "Tower of Hanoi (Recursion)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective is to move the entire stack to another rod, obeying the following simple rules:
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
3. No disk may be placed on top of a smaller disk.

### Complexity Analysis
- Time Complexity: O(2^n).
- Space Complexity: O(n).`,
        timeComplexity: "O(2^n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    if (n == 1) {
        cout << "Move disk 1 from rod " << from_rod << " to rod " << to_rod << endl;
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    cout << "Move disk " << n << " from rod " << from_rod << " to rod " << to_rod << endl;
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}`,
            java: `void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    if (n == 1) {
        System.out.println("Move disk 1 from rod " + from_rod + " to rod " + to_rod);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    System.out.println("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}`,
            python: `def tower_of_hanoi(n, from_rod, to_rod, aux_rod):
    if n == 1:
        print("Move disk 1 from rod", from_rod, "to rod", to_rod)
        return
    tower_of_hanoi(n - 1, from_rod, aux_rod, to_rod)
    print("Move disk", n, "from rod", from_rod, "to rod", to_rod)
    tower_of_hanoi(n - 1, aux_rod, to_rod, from_rod)`,
            javascript: `function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n === 1) {
        console.log(\`Move disk 1 from \${from_rod} to \${to_rod}\`);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    console.log(\`Move disk \${n} from \${from_rod} to \${to_rod}\`);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}`
        },
        run: function* () {
            const n = 3;
            // Initialize rods: Rod 0 has [3, 2, 1], others empty
            const rods: number[][] = [[3, 2, 1], [], []];

            yield {
                type: 'hanoi',
                rods: JSON.parse(JSON.stringify(rods)),
                description: "Goal: Move all disks from Rod A (0) to Rod C (2)"
            };

            function* move(k: number, from: number, to: number, aux: number): Generator<any> {
                if (k === 1) {
                    const disk = rods[from].pop()!;
                    rods[to].push(disk);
                    yield {
                        type: 'hanoi',
                        rods: JSON.parse(JSON.stringify(rods)),
                        move: { disk, from, to },
                        description: `Move Disk ${disk}: Rod ${String.fromCharCode(65 + from)} -> Rod ${String.fromCharCode(65 + to)}`
                    };
                    return;
                }
                yield* move(k - 1, from, aux, to);

                const disk = rods[from].pop()!;
                rods[to].push(disk);
                yield {
                    type: 'hanoi',
                    rods: JSON.parse(JSON.stringify(rods)),
                    move: { disk, from, to },
                    description: `Move Disk ${disk}: Rod ${String.fromCharCode(65 + from)} -> Rod ${String.fromCharCode(65 + to)}`
                };

                yield* move(k - 1, aux, to, from);
            }

            yield* move(n, 0, 2, 1);
            yield {
                type: 'hanoi',
                rods: JSON.parse(JSON.stringify(rods)),
                description: "Solved! All disks moved to Rod C"
            };
        }
    },
    {
        id: "n-queens",
        name: "N-Queens Problem",
        type: "data-structure", // Using grid
        category: "popular",
        description: `### Definition
Place N queens on an NxN chessboard such that no two queens attack each other.

### Complexity Analysis
- Time Complexity: O(N!).
- Space Complexity: O(N^2).`,
        timeComplexity: "O(N!)",
        spaceComplexity: "O(N^2)",
        code: {
            cpp: `bool isSafe(int board[N][N], int row, int col) {
    int i, j;
    for (i = 0; i < col; i++) if (board[row][i]) return false;
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j]) return false;
    for (i = row, j = col; j >= 0 && i < N; i++, j--) if (board[i][j]) return false;
    return true;
}
bool solveNQUtil(int board[N][N], int col) {
    if (col >= N) return true;
    for (int i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQUtil(board, col + 1)) return true;
            board[i][col] = 0; // BACKTRACK
        }
    }
    return false;
}`,
            java: `boolean isSafe(int board[][], int row, int col) {
    int i, j;
    for (i = 0; i < col; i++) if (board[row][i] == 1) return false;
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j] == 1) return false;
    for (i = row, j = col; j >= 0 && i < N; i++, j--) if (board[i][j] == 1) return false;
    return true;
}
boolean solveNQUtil(int board[][], int col) {
    if (col >= N) return true;
    for (int i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQUtil(board, col + 1)) return true;
            board[i][col] = 0; // BACKTRACK
        }
    }
    return false;
}`,
            python: `def isSafe(board, row, col):
    for i in range(col):
        if board[row][i] == 1: return False
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j] == 1: return False
    for i, j in zip(range(row, N, 1), range(col, -1, -1)):
        if board[i][j] == 1: return False
    return True

def solveNQUtil(board, col):
    if col >= N: return True
    for i in range(N):
        if isSafe(board, i, col):
            board[i][col] = 1
            if solveNQUtil(board, col + 1): return True
            board[i][col] = 0
    return False`,
            javascript: `function isSafe(board, row, col) {
    for (let i = 0; i < col; i++) if (board[row][i]) return false;
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j]) return false;
    for (let i = row, j = col; j >= 0 && i < N; i++, j--) if (board[i][j]) return false;
    return true;
}
function solveNQUtil(board, col) {
    if (col >= N) return true;
    for (let i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQUtil(board, col + 1)) return true;
            board[i][col] = 0; // BACKTRACK
        }
    }
    return false;
}`
        },
        run: function* () {
            const N = 4;
            const board = Array(N).fill(0).map(() => Array(N).fill(0));

            const formatGrid = (r: number, c: number) => {
                const highlights: { row: number; col: number; color: 'active' | 'match' | 'mismatch' | 'none' }[] = [];
                for (let i = 0; i < N; i++) {
                    for (let j = 0; j < N; j++) {
                        if (board[i][j] === 1) highlights.push({ row: i, col: j, color: 'match' });
                    }
                }
                highlights.push({ row: r, col: c, color: 'active' });
                return { grid: board, highlights };
            };

            function isSafe(board: number[][], row: number, col: number) {
                // Check this row on left side
                for (let i = 0; i < col; i++)
                    if (board[row][i]) return false;
                // Check upper diagonal on left side
                for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
                    if (board[i][j]) return false;
                // Check lower diagonal on left side
                for (let i = row, j = col; j >= 0 && i < N; i++, j--)
                    if (board[i][j]) return false;
                return true;
            }

            function* solveNQUtil(col: number): Generator<any> {
                if (col >= N) return true;

                for (let i = 0; i < N; i++) {
                    const { grid, highlights } = formatGrid(i, col);
                    yield {
                        type: 'grid',
                        rows: N,
                        cols: N,
                        grid: grid.map(r => [...r]),
                        highlights: highlights,
                        description: `Trying Queen at (${i}, ${col})`
                    };

                    if (isSafe(board, i, col)) {
                        board[i][col] = 1;
                        yield* solveNQUtil(col + 1);
                        if (board.flat().filter(x => x === 1).length === N) return true; // Found solution

                        board[i][col] = 0; // Backtrack
                        const { grid: grid2, highlights: highlights2 } = formatGrid(i, col);
                        yield {
                            type: 'grid',
                            rows: N,
                            cols: N,
                            grid: grid2.map(r => [...r]),
                            highlights: highlights2,
                            description: `Backtracking from (${i}, ${col})`
                        };
                    }
                }
                return false;
            }

            yield* solveNQUtil(0);
            yield {
                type: 'grid',
                rows: N,
                cols: N,
                grid: board,
                highlights: board.flatMap((row, r) => row.map((val, c) => val === 1 ? { row: r, col: c, color: 'match' } : null)).filter(Boolean),
                description: "N-Queens Solved!"
            };
        }
    },
    {
        id: "sudoku-solver",
        name: "Sudoku Solver",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Solve a 9x9 Sudoku puzzle by filling the empty cells.

### Complexity Analysis
- Time Complexity: O(9^(n*n)).
- Space Complexity: O(n*n).`,
        timeComplexity: "O(9^(n*n))",
        spaceComplexity: "O(n*n)",
        code: {
            cpp: `bool solve() {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == 0) {
                for (int num = 1; num <= 9; num++) {
                    if (isValid(i, j, num)) {
                        board[i][j] = num;
                        if (solve()) return true;
                        board[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}`,
            java: `boolean solve() {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == 0) {
                for (int num = 1; num <= 9; num++) {
                    if (isValid(i, j, num)) {
                        board[i][j] = num;
                        if (solve()) return true;
                        board[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}`,
            python: `def solve():
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                for num in range(1, 10):
                    if is_valid(i, j, num):
                        board[i][j] = num
                        if solve(): return True
                        board[i][j] = 0
                return False
    return True`,
            javascript: `function solve() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(i, j, num)) {
                        board[i][j] = num;
                        if (solve()) return true;
                        board[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}`
        },
        run: function* () {
            const board = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ];
            const n = 9;

            const formatGrid = (r: number, c: number) => {
                const highlights: { row: number; col: number; color: 'active' | 'match' | 'mismatch' | 'none' }[] = [];
                highlights.push({ row: r, col: c, color: 'active' });
                return { grid: board, highlights };
            };

            function isValid(board: number[][], row: number, col: number, num: number) {
                for (let x = 0; x < 9; x++) {
                    if (board[row][x] === num || board[x][col] === num ||
                        board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + (x % 3)] === num) {
                        return false;
                    }
                }
                return true;
            }

            function* solve(): Generator<any> {
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n; j++) {
                        if (board[i][j] === 0) {
                            for (let num = 1; num <= 9; num++) {
                                if (isValid(board, i, j, num)) {
                                    board[i][j] = num;
                                    const { grid, highlights } = formatGrid(i, j);
                                    yield {
                                        type: 'grid',
                                        rows: n,
                                        cols: n,
                                        grid: grid.map(row => [...row]),
                                        highlights: highlights,
                                        description: `Trying ${num} at (${i}, ${j})`
                                    };

                                    if (yield* solve()) return true;

                                    board[i][j] = 0;
                                    const { grid: grid2, highlights: highlights2 } = formatGrid(i, j);
                                    yield {
                                        type: 'grid',
                                        rows: n,
                                        cols: n,
                                        grid: grid2.map(row => [...row]),
                                        highlights: highlights2,
                                        description: `Backtracking from (${i}, ${j})`
                                    };
                                }
                            }
                            return false;
                        }
                    }
                }
                return true;
            }

            yield* solve();
            yield {
                type: 'grid',
                rows: n,
                cols: n,
                grid: board,
                highlights: [],
                description: "Solved!"
            };
        }
    }
];
