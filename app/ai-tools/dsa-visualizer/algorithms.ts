export type AlgorithmType = 'sorting' | 'searching' | 'data-structure';
export type VisualizationType = 'array' | 'linked-list' | 'stack' | 'queue' | 'tree' | 'graph' | 'heap' | 'string' | 'grid' | 'hanoi';

export interface BaseVisualizationState {
    description: string;
    type: VisualizationType;
}

export interface ArrayVisualizationState extends BaseVisualizationState {
    type: 'array';
    array: number[];
    activeIndices: number[]; // Indices being compared
    swapIndices: number[];   // Indices being swapped
    sortedIndices: number[]; // Indices that are sorted
    pivotIndex?: number;     // For Quick Sort
}

export interface LinkedListNode {
    id: string;
    value: number;
    nextId: string | null;
    highlight?: 'active' | 'visited' | 'found' | 'none' | 'match' | 'mismatch';
}

export interface LinkedListVisualizationState extends BaseVisualizationState {
    type: 'linked-list';
    nodes: LinkedListNode[];
    headId: string | null;
    activeId?: string | null;
}

export interface StackVisualizationState extends BaseVisualizationState {
    type: 'stack';
    stack: (number | string)[];
    highlightIndex?: number;
    operation?: 'push' | 'pop' | 'peek' | 'none';
}

export interface QueueVisualizationState extends BaseVisualizationState {
    type: 'queue';
    queue: number[];
    highlightIndex?: number;
    operation?: 'enqueue' | 'dequeue' | 'peek' | 'none';
}

export interface TreeNode {
    id: string;
    value: number;
    leftId: string | null;
    rightId: string | null;
    x: number;
    y: number;
    highlight?: 'active' | 'visited' | 'found' | 'none';
}

export interface TreeVisualizationState extends BaseVisualizationState {
    type: 'tree';
    nodes: TreeNode[];
    rootId: string | null;
    activeId?: string | null;
    message?: string;
}

export type VisualizationState =
    | ArrayVisualizationState
    | LinkedListVisualizationState
    | StackVisualizationState
    | QueueVisualizationState
    | TreeVisualizationState
    | GraphVisualizationState
    | HeapVisualizationState
    | StringVisualizationState
    | GridVisualizationState
    | HanoiVisualizationState;

export interface GraphNode {
    id: string;
    value: string | number;
    x: number;
    y: number;
    highlight?: 'active' | 'visited' | 'found' | 'none' | 'match' | 'mismatch';
}

export interface GraphEdge {
    source: string;
    target: string;
    weight?: number;
    highlight?: 'active' | 'visited' | 'none';
}

export interface GraphVisualizationState extends BaseVisualizationState {
    type: 'graph';
    nodes: GraphNode[];
    edges: GraphEdge[];
    isDirected: boolean;
    message?: string;
}

export interface HeapVisualizationState extends BaseVisualizationState {
    type: 'heap';
    tree: TreeVisualizationState; // Reuse Tree state for visualization
    array: number[]; // Underlying array representation
    message?: string;
}

export interface StringVisualizationState extends BaseVisualizationState {
    type: 'string';
    value: string;
    indices: { index: number; highlight: 'active' | 'match' | 'mismatch' | 'none' }[];
    message?: string;
}

export interface GridVisualizationState extends BaseVisualizationState {
    type: 'grid';
    grid: (number | string)[][];
    rows: number;
    cols: number;
    highlights: { row: number; col: number; color: 'active' | 'match' | 'mismatch' | 'none' }[];
    message?: string;
}

export interface HanoiVisualizationState extends BaseVisualizationState {
    type: 'hanoi';
    rods: number[][]; // 3 rods, each containing disk sizes
    move?: { disk: number; from: number; to: number };
    message?: string;
}

export interface Algorithm {
    id: string;
    name: string;
    type: AlgorithmType;
    category?: 'popular' | 'data-structure';
    description: string;
    timeComplexity: string;
    spaceComplexity: string;
    code: {
        cpp: string;
        java: string;
        python: string;
        javascript: string;
    };
    run: (data?: any) => Generator<VisualizationState>;
}

export const algorithms: Algorithm[] = [
    // --- Sorting Algorithms ---
    {
        id: "bubble-sort",
        name: "Bubble Sort",
        type: "sorting",
        description: `### Definition
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This pass through the list is repeated until the list is sorted.

### Real-World Example
Imagine a group of people lining up for a photo by height. You compare the first two people, swap them if the taller one is in front. Then you compare the 2nd and 3rd, and so on. You keep doing this until everyone is in order.

### Complexity Analysis
- Time Complexity: O(n²) in worst and average cases. O(n) in best case (already sorted).
- Space Complexity: O(1) auxiliary space (in-place sort).

### Pros & Cons
✅ Pros: 
- Simple to understand and implement.
- Detects already sorted lists efficiently.
- Stable sort (does not change relative order of equal elements).

❌ Cons: 
- Very slow for large datasets (O(n²)).
- Not practical for real-world production use.`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1])
                swap(arr[j], arr[j+1]);
        }
    }
}`,
            java: `void bubbleSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}`,
            python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]`,
            javascript: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}`
        },
        run: function* (initialArray: number[]) {
            const arr = [...initialArray];
            const n = arr.length;
            const sortedIndices: number[] = [];

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [j, j + 1],
                        swapIndices: [],
                        sortedIndices: [...sortedIndices],
                        description: `Comparing ${arr[j]} and ${arr[j + 1]}`
                    };

                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;

                        yield {
                            type: 'array',
                            array: [...arr],
                            activeIndices: [],
                            swapIndices: [j, j + 1],
                            sortedIndices: [...sortedIndices],
                            description: `Swapping ${arr[j + 1]} and ${arr[j]}`
                        };
                    }
                }
                sortedIndices.push(n - i - 1);
                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [],
                    swapIndices: [],
                    sortedIndices: [...sortedIndices],
                    description: `${arr[n - i - 1]} is now sorted`
                };
            }
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: Array.from({ length: n }, (_, i) => i),
                description: "Array is sorted!"
            };
        }
    },
    {
        id: "selection-sort",
        name: "Selection Sort",
        type: "sorting",
        description: `### Definition
Selection Sort divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items.

### Real-World Example
Sorting a hand of playing cards. You look through all your cards to find the smallest one and move it to the far left. Then you look through the remaining cards for the next smallest, and so on.

### Complexity Analysis
- Time Complexity: O(n²) in all cases.
- Space Complexity: O(1) auxiliary space.

### Pros & Cons
✅ Pros: 
- Simple to implement.
- Performs well on small lists.
- No additional memory required (in-place).
- Minimizes the number of swaps (O(n)).

❌ Cons: 
- O(n²) time complexity makes it inefficient on large lists.
- Not stable (relative order of equal elements might change).`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        swap(arr[min_idx], arr[i]);
    }
}`,
            java: `void selectionSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}`,
            python: `def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
            javascript: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr;
}`
        },
        run: function* (initialArray: number[]) {
            const arr = [...initialArray];
            const n = arr.length;
            const sortedIndices: number[] = [];

            for (let i = 0; i < n; i++) {
                let minIdx = i;

                for (let j = i + 1; j < n; j++) {
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [i, j, minIdx],
                        swapIndices: [],
                        sortedIndices: [...sortedIndices],
                        description: `Finding minimum: Comparing ${arr[j]} with current min ${arr[minIdx]}`
                    };

                    if (arr[j] < arr[minIdx]) {
                        minIdx = j;
                    }
                }

                if (minIdx !== i) {
                    let temp = arr[i];
                    arr[i] = arr[minIdx];
                    arr[minIdx] = temp;

                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [],
                        swapIndices: [i, minIdx],
                        sortedIndices: [...sortedIndices],
                        description: `Swapping ${arr[i]} (new min) with ${arr[minIdx]}`
                    };
                }

                sortedIndices.push(i);
                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [],
                    swapIndices: [],
                    sortedIndices: [...sortedIndices],
                    description: `${arr[i]} is now sorted`
                };
            }
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: Array.from({ length: n }, (_, i) => i),
                description: "Array is sorted!"
            };
        }
    },
    {
        id: "insertion-sort",
        name: "Insertion Sort",
        type: "sorting",
        description: `### Definition
Insertion Sort builds the final sorted array one item at a time. It iterates through the input elements and grows a sorted array behind it.

### Real-World Example
Sorting playing cards in your hands. You pick up a card, and insert it into the correct position among the cards you're already holding.

### Complexity Analysis
- Time Complexity: O(n²) worst/average case. O(n) best case (already sorted).
- Space Complexity: O(1) auxiliary space.

### Pros & Cons
✅ Pros: 
- Efficient for small data sets.
- Adaptive (fast for already sorted data).
- Stable sort.
- Online (can sort as it receives data).

❌ Cons: 
- O(n²) complexity, inefficient for large lists.`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
            java: `void insertionSort(int arr[]) {
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
            python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j] :
                arr[j+1] = arr[j]
                j -= 1
        arr[j+1] = key`,
            javascript: `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}`
        },
        run: function* (initialArray: number[]) {
            const arr = [...initialArray];
            const n = arr.length;
            let sortedIndices: number[] = [0];

            for (let i = 1; i < n; i++) {
                let key = arr[i];
                let j = i - 1;

                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [i],
                    swapIndices: [],
                    sortedIndices: [...sortedIndices],
                    description: `Selected key ${key} to insert`
                };

                while (j >= 0 && arr[j] > key) {
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [j, j + 1],
                        swapIndices: [],
                        sortedIndices: [...sortedIndices],
                        description: `Comparing ${key} with ${arr[j]}`
                    };

                    arr[j + 1] = arr[j];

                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [],
                        swapIndices: [j, j + 1],
                        sortedIndices: [...sortedIndices],
                        description: `Moving ${arr[j]} forward`
                    };

                    j = j - 1;
                }
                arr[j + 1] = key;
                sortedIndices = Array.from({ length: i + 1 }, (_, k) => k);

                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [],
                    swapIndices: [j + 1],
                    sortedIndices: [...sortedIndices],
                    description: `Inserted ${key} at position ${j + 1}`
                };
            }
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: Array.from({ length: n }, (_, i) => i),
                description: "Array is sorted!"
            };
        }
    },
    {
        id: "quick-sort",
        name: "Quick Sort",
        type: "sorting",
        description: `### Definition
Quick Sort is a divide-and-conquer algorithm. It picks an element as a 'pivot' and partitions the given array around the picked pivot.

### Real-World Example
Sorting a large stack of papers by date. You pick a random date (pivot), and throw all earlier papers to the left pile and later papers to the right pile. Then you repeat this for each pile.

### Complexity Analysis
- Time Complexity: O(n log n) average, O(n²) worst case.
- Space Complexity: O(log n) for recursion stack.

### Pros & Cons
✅ Pros: 
- Very fast in practice (O(n log n)).
- In-place (small auxiliary stack).

❌ Cons: 
- Unstable.
- Worst-case O(n²) if pivot is poor (though rare with good pivot choice).`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(log n)",
        code: {
            cpp: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
            java: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low-1);
    for (int j=low; j<high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return i+1;
}
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}`,
            python: `def partition(arr, low, high):
    i = (low-1)
    pivot = arr[high]
    for j in range(low, high):
        if arr[j] < pivot:
            i = i+1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return (i+1)

def quickSort(arr, low, high):
    if len(arr) == 1:
        return arr
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)`,
            javascript: `function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}`
        },
        run: function* (initialArray: number[]) {
            const arr = [...initialArray];
            const n = arr.length;
            const sortedIndices: number[] = [];

            function* quickSortHelper(low: number, high: number): Generator<VisualizationState> {
                if (low < high) {
                    let pivot = arr[high];
                    let i = (low - 1);

                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [],
                        swapIndices: [],
                        sortedIndices: [...sortedIndices],
                        pivotIndex: high,
                        description: `Partitioning subarray [${low}...${high}] with pivot ${pivot}`
                    };

                    for (let j = low; j < high; j++) {
                        yield {
                            type: 'array',
                            array: [...arr],
                            activeIndices: [j, high],
                            swapIndices: [],
                            sortedIndices: [...sortedIndices],
                            pivotIndex: high,
                            description: `Comparing ${arr[j]} with pivot ${pivot}`
                        };

                        if (arr[j] < pivot) {
                            i++;
                            let temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;

                            yield {
                                type: 'array',
                                array: [...arr],
                                activeIndices: [],
                                swapIndices: [i, j],
                                sortedIndices: [...sortedIndices],
                                pivotIndex: high,
                                description: `Swapping ${arr[j]} (smaller than pivot) to left`
                            };
                        }
                    }
                    let temp = arr[i + 1];
                    arr[i + 1] = arr[high];
                    arr[high] = temp;

                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [],
                        swapIndices: [i + 1, high],
                        sortedIndices: [...sortedIndices],
                        pivotIndex: i + 1,
                        description: `Moving pivot to correct position ${i + 1}`
                    };

                    let pi = i + 1;
                    sortedIndices.push(pi);

                    yield* quickSortHelper(low, pi - 1);
                    yield* quickSortHelper(pi + 1, high);
                } else if (low === high) {
                    sortedIndices.push(low);
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [],
                        swapIndices: [],
                        sortedIndices: [...sortedIndices],
                        description: `Element ${arr[low]} is sorted`
                    };
                }
            }

            yield* quickSortHelper(0, n - 1);

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: Array.from({ length: n }, (_, i) => i),
                description: "Array is sorted!"
            };
        }
    },
    // --- Searching Algorithms ---
    {
        id: "linear-search",
        name: "Linear Search",
        type: "searching",
        description: `### Definition
Linear Search sequentially checks each element of the list until a match is found or the whole list has been searched.

### Real-World Example
Looking for a specific book on a messy shelf where books are not organized. You have to check each book one by one until you find the one you want.

### Complexity Analysis
- Time Complexity: O(n) worst/average case. O(1) best case.
- Space Complexity: O(1) auxiliary space.

### Pros & Cons
✅ Pros: 
- Simple.
- Works on unsorted lists.

❌ Cons: 
- Slow for large lists (O(n)).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `int search(int arr[], int n, int x) {
    for (int i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}`,
            java: `public static int search(int arr[], int x) {
    int n = arr.length;
    for (int i = 0; i < n; i++) {
        if (arr[i] == x)
            return i;
    }
    return -1;
}`,
            python: `def search(arr, n, x):
    for i in range(0, n):
        if (arr[i] == x):
            return i
    return -1`,
            javascript: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`
        },
        run: function* (initialArray: number[]) {
            const arr = [...initialArray];
            const target = arr[Math.floor(arr.length / 2)];

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: `Searching for target: ${target}`
            };

            for (let i = 0; i < arr.length; i++) {
                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [i],
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Checking index ${i}: Is ${arr[i]} == ${target}?`
                };

                if (arr[i] === target) {
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [],
                        swapIndices: [],
                        sortedIndices: [i],
                        description: `Found target ${target} at index ${i}!`
                    };
                    return;
                }
            }
        }
    },
    {
        id: "binary-search",
        name: "Binary Search",
        type: "searching",
        description: `### Definition
Binary Search finds a target value within a sorted array. It compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half.

### Real-World Example
Looking up a word in a dictionary. You open the book to the middle. If the word you're looking for is alphabetically after the page you opened, you ignore the first half and look in the second half. You keep splitting until you find it.

### Complexity Analysis
- Time Complexity: O(log n) worst/average case. O(1) best case.
- Space Complexity: O(1) auxiliary space.

### Pros & Cons
✅ Pros: 
- Extremely fast (O(log n)).

❌ Cons: 
- Requires the list to be sorted first.`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `int binarySearch(int arr[], int l, int r, int x) {
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x) return m;
        if (arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}`,
            java: `int binarySearch(int arr[], int x) {
    int l = 0, r = arr.length - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x) return m;
        if (arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}`,
            python: `def binary_search(arr, x):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (high + low) // 2
        if arr[mid] < x:
            low = mid + 1
        elif arr[mid] > x:
            high = mid - 1
        else:
            return mid
    return -1`,
            javascript: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`
        },
        run: function* (initialArray: number[]) {
            const arr = [...initialArray].sort((a, b) => a - b);
            const target = arr[Math.floor(arr.length * 0.7)];

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: `Sorted array for Binary Search. Searching for: ${target}`
            };

            let left = 0;
            let right = arr.length - 1;

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);

                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [mid, left, right],
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Checking mid ${mid} (${arr[mid]}). Range: [${left}, ${right}]`
                };

                if (arr[mid] === target) {
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [mid],
                        swapIndices: [],
                        sortedIndices: [mid],
                        description: `Found target ${target} at index ${mid}!`
                    };
                    return;
                }

                if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: `Target ${target} not found in the array.`
            };
        }
    },
    {
        id: "bst-operations",
        name: "Binary Search Tree",
        type: "data-structure",
        description: `### Definition
A Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties:
1. The left subtree of a node contains only nodes with keys lesser than the node's key.
2. The right subtree of a node contains only nodes with keys greater than the node's key.
3. The left and right subtree each must also be a binary search tree.

### Real-World Example
A hierarchical file system or a database index where you can quickly find items by navigating down branches.

### Pros & Cons
✅ Pros: 
- Fast lookup, addition and removal (O(log n) on average).
- Ordered data structure.

❌ Cons: 
- Can become unbalanced (skewed), degrading to O(n).`,
        timeComplexity: "Search/Insert/Delete: O(log n) avg",
        spaceComplexity: "O(n)",
        code: {
            cpp: `struct Node {
    int data;
    Node *left, *right;
    Node(int val) : data(val), left(NULL), right(NULL) {}
};

Node* insert(Node* root, int val) {
    if (!root) return new Node(val);
    if (val < root->data)
        root->left = insert(root->left, val);
    else
        root->right = insert(root->right, val);
    return root;
}`,
            java: `class Node {
    int key;
    Node left, right;
    public Node(int item) {
        key = item;
        left = right = null;
    }
}

Node insert(Node root, int key) {
    if (root == null) return new Node(key);
    if (key < root.key)
        root.left = insert(root.left, key);
    else if (key > root.key)
        root.right = insert(root.right, key);
    return root;
}`,
            python: `class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root`,
            javascript: `class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insert(root, value) {
  if (!root) return new Node(value);
  if (value < root.value) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }
  return root;
}`
        },
        run: function* () {
            // Helper for tree nodes
            let nodes: TreeNode[] = [];
            let rootId: string | null = null;
            let idCounter = 0;
            const createNode = (val: number, x: number, y: number): TreeNode => ({
                id: `node-${idCounter++}`,
                value: val,
                leftId: null,
                rightId: null,
                x, y
            });

            // Initial state
            yield {
                type: 'tree',
                nodes: [],
                rootId: null,
                description: "Empty BST created"
            };

            const valuesToInsert = [50, 30, 70, 20, 40, 60, 80];

            for (const val of valuesToInsert) {
                yield {
                    type: 'tree',
                    nodes: [...nodes],
                    rootId: rootId,
                    description: `Inserting ${val}...`
                };

                if (!rootId) {
                    const newNode = createNode(val, 0, 0);
                    nodes.push(newNode);
                    rootId = newNode.id;
                    yield {
                        type: 'tree',
                        nodes: [...nodes],
                        rootId: rootId,
                        activeId: newNode.id,
                        description: `Inserted root ${val}`
                    };
                    continue;
                }

                let currentId = rootId;
                let depth = 0;
                // Simple layout logic

                while (true) {
                    const current = nodes.find(n => n.id === currentId)!;

                    yield {
                        type: 'tree',
                        nodes: [...nodes],
                        rootId: rootId,
                        activeId: current.id,
                        description: `Comparing ${val} with ${current.value}`
                    };

                    if (val < current.value) {
                        if (current.leftId) {
                            currentId = current.leftId;
                            depth++;
                        } else {
                            // Calculate position based on parent
                            const newNode = createNode(val, current.x - 60 / (depth + 1), current.y + 60);
                            nodes.push(newNode);
                            current.leftId = newNode.id;
                            yield {
                                type: 'tree',
                                nodes: [...nodes],
                                rootId: rootId,
                                activeId: newNode.id,
                                description: `Inserted ${val} to the left of ${current.value}`
                            };
                            break;
                        }
                    } else {
                        if (current.rightId) {
                            currentId = current.rightId;
                            depth++;
                        } else {
                            const newNode = createNode(val, current.x + 60 / (depth + 1), current.y + 60);
                            nodes.push(newNode);
                            current.rightId = newNode.id;
                            yield {
                                type: 'tree',
                                nodes: [...nodes],
                                rootId: rootId,
                                activeId: newNode.id,
                                description: `Inserted ${val} to the right of ${current.value}`
                            };
                            break;
                        }
                    }
                }
            }

            yield {
                type: 'tree',
                nodes: [...nodes],
                rootId: rootId,
                description: "BST Construction Completed"
            };
        }
    },
    {
        id: "array-operations",
        name: "Array Operations",
        type: "data-structure",
        description: `### Definition
An Array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.

### Real-World Example
A row of mailboxes in an apartment building. Each mailbox has a unique number (index), and you can go directly to any mailbox if you know its number.

### Pros & Cons
✅ Pros: 
- Fast access (O(1)) if index is known.
- Memory efficient (no overhead per element).

❌ Cons: 
- Fixed size (in static arrays).
- Insertion/deletion is slow (O(n)) as elements need to shift.`,
        timeComplexity: "Access: O(1), Insert/Delete: O(n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `// Access
int x = arr[i];

// Insert (Vector)
vector<int> v;
v.insert(v.begin() + i, val);

// Delete (Vector)
v.erase(v.begin() + i);`,
            java: `// Access
int x = arr[i];

// Insert (ArrayList)
ArrayList<Integer> list = new ArrayList<>();
list.add(i, val);

// Delete (ArrayList)
list.remove(i);`,
            python: `// Access
x = arr[i]

// Insert
arr.insert(i, val)

// Delete
arr.pop(i)`,
            javascript: `// Access
let x = arr[i];

// Insert
arr.splice(i, 0, val);

// Delete
arr.splice(i, 1);`
        },
        run: function* () {
            let arr = [10, 20, 30, 40, 50];
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                sortedIndices: [],
                swapIndices: [],
                description: "Initial Array"
            };

            // Max/Min Simulation
            let maxVal = arr[0];
            let minVal = arr[0];
            for (let i = 1; i < arr.length; i++) {
                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [i],
                    sortedIndices: [],
                    swapIndices: [],
                    description: `Comparing ${arr[i]} with current max ${maxVal} and min ${minVal}`
                };
                if (arr[i] > maxVal) maxVal = arr[i];
                if (arr[i] < minVal) minVal = arr[i];
            }
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                sortedIndices: [],
                swapIndices: [],
                description: `Found Max: ${maxVal}, Min: ${minVal}`
            };

            // Rotate Array (Left by 1)
            let first = arr.shift();
            if (first !== undefined) arr.push(first);
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [arr.length - 1],
                sortedIndices: [],
                swapIndices: [],
                description: "Rotated Array Left by 1"
            };
        }
    },
    {
        id: "stack-operations",
        name: "Stack Operations",
        type: "data-structure",
        description: `### Definition
A Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO (Last In First Out) or FILO (First In Last Out).

### Real-World Example
A stack of plates in a cafeteria. You put a new plate on top (Push), and you take the top plate off (Pop). You can't take a plate from the middle without removing the ones above it.

### Pros & Cons
✅ Pros: 
- Efficient management of data that needs to be reversed or backtracked (e.g., Undo feature).
- Fast operations (O(1)).

❌ Cons: 
- No random access to elements.`,
        timeComplexity: "Push: O(1), Pop: O(1)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `// Using STL
#include <stack>
stack<int> s;
s.push(10);
s.pop();
int top = s.top();

// Custom Implementation
class Stack {
    int top;
    int arr[100];
public:
    Stack() { top = -1; }
    void push(int x) { arr[++top] = x; }
    int pop() { return arr[top--]; }
};`,
            java: `// Using Java Collection
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.pop();
int top = stack.peek();

// Custom Implementation
class Stack {
    int arr[] = new int[100];
    int top = -1;
    void push(int x) { arr[++top] = x; }
    int pop() { return arr[top--]; }
}`,
            python: `stack = []
stack.append(10) # Push
stack.pop()      # Pop
top = stack[-1]  # Peek`,
            javascript: `class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}`
        },
        run: function* () {
            let stack: number[] = [];
            const operations = [
                { op: 'push', val: 10 },
                { op: 'push', val: 20 },
                { op: 'push', val: 30 },
                { op: 'peek', val: null },
                { op: 'pop', val: null },
                { op: 'push', val: 40 },
                { op: 'pop', val: null },
                { op: 'pop', val: null },
            ];

            yield {
                type: 'stack',
                stack: [],
                description: "Empty Stack created",
                operation: 'none'
            };

            for (const action of operations) {
                if (action.op === 'push' && action.val !== null) {
                    stack.push(action.val);
                    yield {
                        type: 'stack',
                        stack: [...stack],
                        highlightIndex: stack.length - 1,
                        operation: 'push',
                        description: `Pushing ${action.val} onto the stack`
                    };
                } else if (action.op === 'pop') {
                    const popped = stack.pop();
                    yield {
                        type: 'stack',
                        stack: [...stack],
                        operation: 'pop',
                        description: `Popped ${popped} from the stack`
                    };
                } else if (action.op === 'peek') {
                    yield {
                        type: 'stack',
                        stack: [...stack],
                        highlightIndex: stack.length - 1,
                        operation: 'peek',
                        description: `Peeking at top element: ${stack[stack.length - 1]}`
                    };
                }
            }
            yield {
                type: 'stack',
                stack: [...stack],
                description: "Stack operations completed",
                operation: 'none'
            };
        }
    },
    {
        id: "queue-operations",
        name: "Queue Operations",
        type: "data-structure",
        description: `### Definition
A Queue is a linear structure which follows the FIFO (First In First Out) order. Elements are added at the rear and removed from the front.

### Real-World Example
A line of people waiting for a bus. The first person in line is the first one to get on the bus.

### Pros & Cons
✅ Pros: 
- Fair resource allocation (FCFS).
- Useful for buffering data.

❌ Cons: 
- No random access.`,
        timeComplexity: "Enqueue: O(1), Dequeue: O(1)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `// Using STL
#include <queue>
queue<int> q;
q.push(10); // Enqueue
q.pop();    // Dequeue
int front = q.front();`,
            java: `// Using Java Collection
Queue<Integer> q = new LinkedList<>();
q.add(10); // Enqueue
q.remove(); // Dequeue
int front = q.peek();`,
            python: `from collections import deque
q = deque()
q.append(10) # Enqueue
q.popleft()  # Dequeue`,
            javascript: `class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
}`
        },
        run: function* () {
            let queue: number[] = [];
            const operations = [
                { op: 'enqueue', val: 10 },
                { op: 'enqueue', val: 20 },
                { op: 'enqueue', val: 30 },
                { op: 'peek', val: null },
                { op: 'dequeue', val: null },
                { op: 'enqueue', val: 40 },
                { op: 'dequeue', val: null },
            ];

            yield {
                type: 'queue',
                queue: [],
                description: "Empty Queue created",
                operation: 'none'
            };

            for (const action of operations) {
                if (action.op === 'enqueue' && action.val !== null) {
                    queue.push(action.val);
                    yield {
                        type: 'queue',
                        queue: [...queue],
                        highlightIndex: queue.length - 1,
                        operation: 'enqueue',
                        description: `Enqueueing ${action.val}`
                    };
                } else if (action.op === 'dequeue') {
                    const dequeued = queue.shift();
                    yield {
                        type: 'queue',
                        queue: [...queue],
                        operation: 'dequeue',
                        description: `Dequeued ${dequeued}`
                    };
                } else if (action.op === 'peek') {
                    yield {
                        type: 'queue',
                        queue: [...queue],
                        highlightIndex: 0,
                        operation: 'peek',
                        description: `Peeking at front element: ${queue[0]}`
                    };
                }
            }
            yield {
                type: 'queue',
                queue: [...queue],
                description: "Queue operations completed",
                operation: 'none'
            };
        }
    },
    {
        id: "linked-list-operations",
        name: "Linked List Operations",
        type: "data-structure",
        description: `### Definition
A Linked List is a linear data structure where elements are not stored at contiguous memory locations. The elements are linked using pointers.

### Real-World Example
A treasure hunt where each clue tells you where to find the next clue. You have to follow the chain from the beginning to reach the end.

### Pros & Cons
✅ Pros: 
- Dynamic size.
- Easy insertion/deletion.

❌ Cons: 
- No random access (must traverse).
- Extra memory for pointers.`,
        timeComplexity: "Access: O(n), Insert: O(1)*",
        spaceComplexity: "O(n)",
        code: {
            cpp: `struct Node {
    int data;
    Node* next;
};

void insert(Node head_ref, int new_data) {
    Node* new_node = new Node();
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}`,
            java: `class Node {
    int data;
    Node next;
    Node(int d) { data = d; next = null; }
}

public void push(int new_data) {
    Node new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}`,
            python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def push(head, new_data):
    new_node = Node(new_data)
    new_node.next = head
    return new_node`,
            javascript: `class Node {
  constructor(element) {
    this.element = element;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    var node = new Node(element);
    if (this.head == null)
      this.head = node;
    else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}`
        },
        run: function* () {
            // Helper to generate IDs
            let idCounter = 0;
            const createNode = (val: number): LinkedListNode => ({ id: `node-${idCounter++}`, value: val, nextId: null });

            let nodes: LinkedListNode[] = [];
            let headId: string | null = null;

            yield {
                type: 'linked-list',
                nodes: [],
                headId: null,
                description: "Empty Linked List created"
            };

            // Operation 1: Add 10
            let node1 = createNode(10);
            nodes.push(node1);
            headId = node1.id;
            yield {
                type: 'linked-list',
                nodes: [...nodes],
                headId: headId,
                activeId: node1.id,
                description: "Added head node 10"
            };

            // Operation 2: Add 20
            let node2 = createNode(20);
            nodes.push(node2);
            node1.nextId = node2.id;
            yield {
                type: 'linked-list',
                nodes: [...nodes],
                headId: headId,
                activeId: node2.id,
                description: "Appended node 20"
            };

            // Operation 3: Add 30
            let node3 = createNode(30);
            nodes.push(node3);
            node2.nextId = node3.id;
            yield {
                type: 'linked-list',
                nodes: [...nodes],
                headId: headId,
                activeId: node3.id,
                description: "Appended node 30"
            };

            // Operation 4: Traverse
            yield {
                type: 'linked-list',
                nodes: [...nodes],
                headId: headId,
                description: "Starting traversal..."
            };

            let currentId: string | null = headId;
            while (currentId) {
                let curr = nodes.find(n => n.id === currentId);
                if (!curr) break;
                yield {
                    type: 'linked-list',
                    nodes: nodes.map(n => ({ ...n, highlight: n.id === currentId ? 'active' : 'none' })),
                    headId: headId,
                    activeId: currentId,
                    description: `Visiting node ${curr.value}`
                };
                currentId = curr.nextId;
            }

            yield {
                type: 'linked-list',
                nodes: nodes.map(n => ({ ...n, highlight: 'none' })),
                headId: headId,
                description: "Traversal completed"
            };

            // Loop Detection Simulation
            // Create a loop: Connect last node to second node
            if (nodes.length > 2) {
                nodes[nodes.length - 1].nextId = nodes[1].id;
                yield {
                    type: 'linked-list',
                    nodes: [...nodes],
                    headId: headId,
                    description: "Created a loop for detection demo (Last -> Second)"
                };

                // Floyd's Cycle-Finding Algorithm
                let slow: string | null = headId;
                let fast: string | null = headId;
                let loopFound = false;

                yield {
                    type: 'linked-list',
                    nodes: [...nodes],
                    headId: headId,
                    description: "Starting Floyd's Cycle Detection (Tortoise and Hare)"
                };

                while (slow && fast) {
                    // Move slow by 1
                    let slowNode = nodes.find(n => n.id === slow);
                    slow = slowNode?.nextId || null;

                    // Move fast by 2
                    let fastNode = nodes.find(n => n.id === fast);
                    let nextFast = nodes.find(n => n.id === fastNode?.nextId);
                    fast = nextFast?.nextId || null;

                    if (!fast) break;

                    yield {
                        type: 'linked-list',
                        nodes: nodes.map(n => ({
                            ...n,
                            highlight: n.id === slow ? 'active' : n.id === fast ? 'mismatch' : 'none'
                        })),
                        headId: headId,
                        description: `Slow at ${nodes.find(n => n.id === slow)?.value}, Fast at ${nodes.find(n => n.id === fast)?.value}`
                    };

                    if (slow === fast) {
                        loopFound = true;
                        yield {
                            type: 'linked-list',
                            nodes: nodes.map(n => ({
                                ...n,
                                highlight: n.id === slow ? 'match' : 'none'
                            })),
                            headId: headId,
                            description: "Loop Detected! Slow and Fast pointers met."
                        };
                        break;
                    }
                }
            }
        }
    },
    {
        id: "dijkstra",
        name: "Dijkstra's Algorithm",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Dijkstra's algorithm finds the shortest path from a starting node to all other nodes in a weighted graph.

### Real-World Example
GPS Navigation. Finding the shortest route from your home to a destination, considering distance or traffic as weights.

### Complexity Analysis
- Time Complexity: O(E + V log V) with priority queue.
- Space Complexity: O(V).`,
        timeComplexity: "O(E + V log V)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `void dijkstra(int src) {
    priority_queue<iPair, vector<iPair>, greater<iPair>> pq;
    pq.push(make_pair(0, src));
    dist[src] = 0;
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        for (auto x : adj[u]) {
            int v = x.first;
            int weight = x.second;
            if (dist[v] > dist[u] + weight) {
                dist[v] = dist[u] + weight;
                pq.push(make_pair(dist[v], v));
            }
        }
    }
}`,
            java: `void dijkstra(int src) {
    PriorityQueue<Node> pq = new PriorityQueue<>();
    pq.add(new Node(src, 0));
    dist[src] = 0;
    while (!pq.isEmpty()) {
        int u = pq.poll().node;
        for (Node neighbor : adj.get(u)) {
            if (dist[neighbor.node] > dist[u] + neighbor.cost) {
                dist[neighbor.node] = dist[u] + neighbor.cost;
                pq.add(new Node(neighbor.node, dist[neighbor.node]));
            }
        }
    }
}`,
            python: `def dijkstra(src):
    pq = [(0, src)]
    dist[src] = 0
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        for v, weight in adj[u]:
            if dist[u] + weight < dist[v]:
                dist[v] = dist[u] + weight
                heapq.heappush(pq, (dist[v], v))`,
            javascript: `function dijkstra(graph, start) {
  const distances = {};
  const pq = new PriorityQueue();
  distances[start] = 0;
  pq.enqueue(start, 0);
  while (!pq.isEmpty()) {
    const { element: u } = pq.dequeue();
    for (const neighbor in graph[u]) {
      const weight = graph[u][neighbor];
      const newDist = distances[u] + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue(neighbor, newDist);
      }
    }
  }
  return distances;
}`
        },
        run: function* () {
            // Graph setup
            const nodes: GraphNode[] = [
                { id: 'A', value: 'A', x: 100, y: 100 },
                { id: 'B', value: 'B', x: 300, y: 50 },
                { id: 'C', value: 'C', x: 300, y: 150 },
                { id: 'D', value: 'D', x: 500, y: 100 },
            ];
            const edges: GraphEdge[] = [
                { source: 'A', target: 'B', weight: 4 },
                { source: 'A', target: 'C', weight: 2 },
                { source: 'B', target: 'C', weight: 1 },
                { source: 'B', target: 'D', weight: 5 },
                { source: 'C', target: 'D', weight: 8 },
                { source: 'C', target: 'B', weight: 1 }, // Undirected effectively
            ];

            const dist: Record<string, number> = { A: 0, B: Infinity, C: Infinity, D: Infinity };
            const visited: Set<string> = new Set();
            const pq: { id: string, dist: number }[] = [{ id: 'A', dist: 0 }];

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, value: `${n.id} (∞)` })),
                edges: edges,
                isDirected: false,
                description: "Initialized distances to Infinity, Start (A) to 0"
            };

            while (pq.length > 0) {
                pq.sort((a, b) => a.dist - b.dist);
                const { id: u, dist: d } = pq.shift()!;

                if (visited.has(u)) continue;
                visited.add(u);

                yield {
                    type: 'graph',
                    nodes: nodes.map(n => ({
                        ...n,
                        value: `${n.id} (${dist[n.id] === Infinity ? '∞' : dist[n.id]})`,
                        highlight: n.id === u ? 'active' : visited.has(n.id) ? 'visited' : 'none'
                    })),
                    edges: edges,
                    isDirected: false,
                    description: `Processing node ${u} with distance ${d}`
                };

                // Find neighbors
                const neighbors = edges.filter(e => e.source === u || e.target === u);
                for (const edge of neighbors) {
                    const v = edge.source === u ? edge.target : edge.source;
                    if (visited.has(v)) continue;

                    const weight = edge.weight || 0;
                    const newDist = d + weight;

                    yield {
                        type: 'graph',
                        nodes: nodes.map(n => ({
                            ...n,
                            value: `${n.id} (${dist[n.id] === Infinity ? '∞' : dist[n.id]})`,
                            highlight: n.id === u ? 'active' : n.id === v ? 'found' : visited.has(n.id) ? 'visited' : 'none'
                        })),
                        edges: edges.map(e => ({
                            ...e,
                            highlight: (e === edge) ? 'active' : 'none'
                        })),
                        isDirected: false,
                        description: `Checking neighbor ${v} (weight ${weight})`
                    };

                    if (newDist < dist[v]) {
                        dist[v] = newDist;
                        pq.push({ id: v, dist: newDist });
                        yield {
                            type: 'graph',
                            nodes: nodes.map(n => ({
                                ...n,
                                value: `${n.id} (${dist[n.id]})`,
                                highlight: n.id === v ? 'match' : 'none'
                            })),
                            edges: edges,
                            isDirected: false,
                            description: `Updated distance for ${v} to ${newDist}`
                        };
                    }
                }
            }
            yield {
                type: 'graph',
                nodes: nodes.map(n => ({
                    ...n,
                    value: `${n.id} (${dist[n.id]})`,
                    highlight: 'visited'
                })),
                edges: edges,
                isDirected: false,
                description: "Shortest paths found!"
            };
        }
    },
    {
        id: "fast-slow-pointers",
        name: "Fast & Slow Pointers",
        type: "data-structure",
        category: "popular",
        description: `### Definition
The Fast & Slow Pointers technique (Tortoise and Hare) uses two pointers moving at different speeds to detect cycles or find the middle of a linked list.

### Real-World Example
Detecting if a race track is a loop. If a fast runner laps a slow runner, it's a loop.

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(1).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
            java: `public boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`,
            python: `def hasCycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast: return True
    return False`,
            javascript: `function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`
        },
        run: function* () {
            // Create nodes
            const nodes: LinkedListNode[] = [
                { id: '1', value: 1, nextId: '2' },
                { id: '2', value: 2, nextId: '3' },
                { id: '3', value: 3, nextId: '4' },
                { id: '4', value: 4, nextId: '5' },
                { id: '5', value: 5, nextId: '6' },
                { id: '6', value: 6, nextId: '3' }, // Cycle back to 3
            ];
            const headId = '1';

            let slow = headId;
            let fast = headId;

            yield {
                type: 'linked-list',
                nodes: [...nodes],
                headId: headId,
                description: "Initialized Slow and Fast pointers at Head"
            };

            while (true) {
                // Move Slow
                const slowNode = nodes.find(n => n.id === slow);
                const nextSlow = slowNode?.nextId;

                // Move Fast
                const fastNode = nodes.find(n => n.id === fast);
                const nextFast = nodes.find(n => n.id === fastNode?.nextId)?.nextId;

                if (!nextFast || !nodes.find(n => n.id === fastNode?.nextId)) {
                    yield {
                        type: 'linked-list',
                        nodes: [...nodes],
                        headId: headId,
                        description: "Fast pointer reached end. No cycle."
                    };
                    break;
                }

                slow = nextSlow!;
                fast = nextFast!;

                yield {
                    type: 'linked-list',
                    nodes: nodes.map(n => ({
                        ...n,
                        highlight: n.id === slow ? 'active' : n.id === fast ? 'mismatch' : 'none'
                    })),
                    headId: headId,
                    description: `Slow moves to ${nodes.find(n => n.id === slow)?.value}, Fast moves to ${nodes.find(n => n.id === fast)?.value}`
                };

                if (slow === fast) {
                    yield {
                        type: 'linked-list',
                        nodes: nodes.map(n => ({
                            ...n,
                            highlight: n.id === slow ? 'match' : 'none'
                        })),
                        headId: headId,
                        description: "Cycle Detected! Slow and Fast pointers met."
                    };
                    break;
                }
            }
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
        id: "sliding-window",
        name: "Sliding Window",
        type: "data-structure",
        category: "popular",
        description: `### Definition
The Sliding Window technique is used to perform a required operation on a specific window size of a given array or string. The window slides over the data to find the optimal solution.

### Real-World Example
Calculating the moving average of stock prices over the last 30 days. As a new day comes, the window shifts by one day.

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(1).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `int maxSum(int arr[], int n, int k) {
    if (n < k) return -1;
    int max_sum = 0;
    for (int i = 0; i < k; i++) max_sum += arr[i];
    int window_sum = max_sum;
    for (int i = k; i < n; i++) {
        window_sum += arr[i] - arr[i - k];
        max_sum = max(max_sum, window_sum);
    }
    return max_sum;
}`,
            java: `public int maxSum(int[] arr, int k) {
    if (arr.length < k) return -1;
    int maxSum = 0;
    for (int i = 0; i < k; i++) maxSum += arr[i];
    int windowSum = maxSum;
    for (int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}`,
            python: `def max_sum(arr, k):
    if len(arr) < k: return -1
    max_sum = sum(arr[:k])
    window_sum = max_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i-k]
        max_sum = max(max_sum, window_sum)
    return max_sum`,
            javascript: `function maxSum(arr, k) {
  if (arr.length < k) return -1;
  let maxSum = 0;
  for (let i = 0; i < k; i++) maxSum += arr[i];
  let windowSum = maxSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}`
        },
        run: function* (initialArray: number[]) {
            const arr = (initialArray && initialArray.length > 0) ? [...initialArray] : [1, 4, 2, 10, 2, 3, 1, 0, 20];
            const k = 4;
            let maxSum = 0;
            let windowSum = 0;

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: `Finding Max Sum Subarray of size k=${k}`
            };

            // Initial window
            for (let i = 0; i < k; i++) {
                windowSum += arr[i];
                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: Array.from({ length: i + 1 }, (_, idx) => idx),
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Building initial window. Sum: ${windowSum}`
                };
            }
            maxSum = windowSum;

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: Array.from({ length: k }, (_, idx) => idx),
                swapIndices: [],
                sortedIndices: [],
                description: `Initial Window Sum: ${windowSum}. Max Sum: ${maxSum}`
            };

            for (let i = k; i < arr.length; i++) {
                windowSum += arr[i] - arr[i - k];
                maxSum = Math.max(maxSum, windowSum);

                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: Array.from({ length: k }, (_, idx) => i - k + 1 + idx),
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Sliding window. New Sum: ${windowSum}. Max Sum: ${maxSum}`
                };
            }

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: `Algorithm Completed. Max Sum: ${maxSum}`
            };
        }
    },
    {
        id: "two-pointers",
        name: "Two Pointers",
        type: "data-structure",
        category: "popular",
        description: `### Definition
The Two Pointers technique uses two pointers to iterate through the data structure (usually an array or linked list) to solve problems efficiently, often reducing time complexity from O(n²) to O(n).

### Real-World Example
Finding two numbers in a sorted list that add up to a specific target. You start with pointers at the beginning and end, and move them inwards.

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(1).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `vector<int> twoSum(vector<int>& numbers, int target) {
    int l = 0, r = numbers.size() - 1;
    while (l < r) {
        int sum = numbers[l] + numbers[r];
        if (sum == target) return {l + 1, r + 1};
        else if (sum < target) l++;
        else r--;
    }
    return {};
}`,
            java: `public int[] twoSum(int[] numbers, int target) {
    int l = 0, r = numbers.length - 1;
    while (l < r) {
        int sum = numbers[l] + numbers[r];
        if (sum == target) return new int[]{l + 1, r + 1};
        else if (sum < target) l++;
        else r--;
    }
    return new int[]{};
}`,
            python: `def twoSum(numbers, target):
    l, r = 0, len(numbers) - 1
    while l < r:
        s = numbers[l] + numbers[r]
        if s == target: return [l + 1, r + 1]
        elif s < target: l += 1
        else: r -= 1
    return []`,
            javascript: `function twoSum(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    else if (sum < target) l++;
    else r--;
  }
  return [];
}`
        },
        run: function* (initialArray: number[]) {
            // Ensure sorted for Two Sum demo
            const arr = (initialArray && initialArray.length > 0) ? [...initialArray].sort((a, b) => a - b) : [10, 20, 35, 50, 75, 80];
            const target = 70; // Example target

            let l = 0;
            let r = arr.length - 1;

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [l, r],
                swapIndices: [],
                sortedIndices: [],
                description: `Two Sum (Target: ${target}). Pointers at ${l} (${arr[l]}) and ${r} (${arr[r]})`
            };

            while (l < r) {
                const sum = arr[l] + arr[r];
                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [l, r],
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Checking sum: ${arr[l]} + ${arr[r]} = ${sum}`
                };

                if (sum === target) {
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [],
                        swapIndices: [],
                        sortedIndices: [l, r],
                        description: `Found target! Indices ${l} and ${r}`
                    };
                    return;
                } else if (sum < target) {
                    l++;
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [l, r],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Sum too small. Moving left pointer to ${l}`
                    };
                } else {
                    r--;
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [l, r],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Sum too large. Moving right pointer to ${r}`
                    };
                }
            }
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Target not found."
            };
        }
    },
    {
        id: "topological-sort",
        name: "Topological Sort",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Topological Sort is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge u -> v, vertex u comes before v in the ordering.

### Real-World Example
Task scheduling with dependencies. If Task A must be done before Task B, A comes before B in the topological sort.

### Complexity Analysis
- Time Complexity: O(V + E).
- Space Complexity: O(V).`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `void topologicalSortUtil(int v, bool visited[], stack<int>& Stack) {
    visited[v] = true;
    for (auto i = adj[v].begin(); i != adj[v].end(); ++i)
        if (!visited[*i])
            topologicalSortUtil(*i, visited, Stack);
    Stack.push(v);
}`,
            java: `void topologicalSortUtil(int v, boolean visited[], Stack<Integer> stack) {
    visited[v] = true;
    for (Integer i : adj.get(v))
        if (!visited[i])
            topologicalSortUtil(i, visited, stack);
    stack.push(v);
}`,
            python: `def topologicalSortUtil(v, visited, stack):
    visited[v] = True
    for i in adj[v]:
        if visited[i] == False:
            topologicalSortUtil(i, visited, stack)
    stack.insert(0, v)`,
            javascript: `function topologicalSortUtil(v, visited, stack) {
  visited[v] = true;
  for (let i of adj[v]) {
    if (!visited[i]) topologicalSortUtil(i, visited, stack);
  }
  stack.push(v);
}`
        },
        run: function* () {
            // Graph setup (DAG)
            const nodes: GraphNode[] = [
                { id: '0', value: '0', x: 100, y: 100 },
                { id: '1', value: '1', x: 300, y: 100 },
                { id: '2', value: '2', x: 100, y: 200 },
                { id: '3', value: '3', x: 300, y: 200 },
                { id: '4', value: '4', x: 500, y: 150 },
                { id: '5', value: '5', x: 200, y: 50 },
            ];
            const edges: GraphEdge[] = [
                { source: '5', target: '0' },
                { source: '5', target: '2' },
                { source: '4', target: '0' },
                { source: '4', target: '1' },
                { source: '2', target: '3' },
                { source: '3', target: '1' },
            ];

            const adj: Record<string, string[]> = {
                '0': [], '1': [], '2': ['3'], '3': ['1'], '4': ['0', '1'], '5': ['0', '2']
            };
            const visited = new Set<string>();
            const stack: string[] = [];

            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges,
                isDirected: true,
                description: "Initial DAG. Starting Topological Sort (DFS based)."
            };

            function* dfs(u: string): Generator<VisualizationState> {
                visited.add(u);
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => ({ ...n, highlight: n.id === u ? 'active' : visited.has(n.id) ? 'visited' : 'none' })),
                    edges: edges,
                    isDirected: true,
                    description: `Visiting ${u}`
                };

                const neighbors = adj[u] || [];
                for (const v of neighbors) {
                    if (!visited.has(v)) {
                        yield* dfs(v);
                    }
                }

                stack.push(u);
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => ({ ...n, highlight: visited.has(n.id) ? 'visited' : 'none' })),
                    edges: edges,
                    isDirected: true,
                    description: `Finished ${u}. Pushed to Stack: [${stack.join(', ')}]`
                };
            }

            for (const node of nodes) {
                if (!visited.has(node.id)) {
                    yield* dfs(node.id);
                }
            }

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited' })),
                edges: edges,
                isDirected: true,
                description: `Topological Sort Completed: ${stack.reverse().join(' -> ')}`
            };
        }
    },
    {
        id: "merge-intervals",
        name: "Merge Intervals",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

### Real-World Example
Calendar scheduling. Merging meeting times to find free slots or total busy time.

### Complexity Analysis
- Time Complexity: O(n log n).
- Space Complexity: O(n).`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    for (auto interval : intervals) {
        if (merged.empty() || merged.back()[1] < interval[0]) {
            merged.push_back(interval);
        } else {
            merged.back()[1] = max(merged.back()[1], interval[1]);
        }
    }
    return merged;
}`,
            java: `public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    LinkedList<int[]> merged = new LinkedList<>();
    for (int[] interval : intervals) {
        if (merged.isEmpty() || merged.getLast()[1] < interval[0]) {
            merged.add(interval);
        } else {
            merged.getLast()[1] = Math.max(merged.getLast()[1], interval[1]);
        }
    }
    return merged.toArray(new int[merged.size()][]);
}`,
            python: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
            javascript: `function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const interval of intervals) {
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
    }
  }
  return merged;
}`
        },
        run: function* () {
            // Intervals: [1,3], [2,6], [8,10], [15,18]
            // Represented as array for simplicity in visualization: [1,3, 2,6, 8,10, 15,18]
            // But better to visualize as 2D array or just objects
            const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
            // Flatten for array visualization? Or use a custom visualization?
            // Let's use array visualization but treat pairs as units if possible, or just visualize the flat array
            // Better: Use 'array' type but description explains the pairs.

            yield {
                type: 'array',
                array: [1, 3, 2, 6, 8, 10, 15, 18],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Intervals: [1,3], [2,6], [8,10], [15,18]. Sorted by start time."
            };

            const merged: number[][] = [];
            for (const interval of intervals) {
                yield {
                    type: 'array',
                    array: [1, 3, 2, 6, 8, 10, 15, 18], // Static for now, dynamic would be better
                    activeIndices: [],
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Processing interval [${interval[0]}, ${interval[1]}]`
                };

                if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
                    merged.push(interval);
                    yield {
                        type: 'array',
                        array: [1, 3, 2, 6, 8, 10, 15, 18],
                        activeIndices: [],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `No overlap. Added [${interval[0]}, ${interval[1]}] to merged list.`
                    };
                } else {
                    const prev = merged[merged.length - 1];
                    prev[1] = Math.max(prev[1], interval[1]);
                    yield {
                        type: 'array',
                        array: [1, 3, 2, 6, 8, 10, 15, 18],
                        activeIndices: [],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Overlap detected! Merged with previous to [${prev[0]}, ${prev[1]}]`
                    };
                }
            }

            yield {
                type: 'array',
                array: merged.flat(),
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: `Merge Complete: ${JSON.stringify(merged)}`
            };
        }
    },
    {
        id: "valid-parentheses",
        name: "Valid Parentheses",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

### Real-World Example
Code editors checking for matching brackets. Compilers parsing code.

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(n).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `bool isValid(string s) {
    stack<char> stack;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') stack.push(c);
        else {
            if (stack.empty()) return false;
            if (c == ')' && stack.top() != '(') return false;
            if (c == '}' && stack.top() != '{') return false;
            if (c == ']' && stack.top() != '[') return false;
            stack.pop();
        }
    }
    return stack.empty();
}`,
            java: `public boolean isValid(String s) {
    Stack<Character> stack = new Stack<Character>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}`,
            python: `def isValid(s):
    stack = []
    map = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in map:
            top_element = stack.pop() if stack else '#'
            if map[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack`,
            javascript: `var isValid = function(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else {
      if (c !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};`
        },
        run: function* (initialData: any) {
            const s = typeof initialData === 'string' && initialData ? initialData : "{[]}";
            const stack: string[] = [];
            const map: Record<string, string> = {
                "(": ")",
                "[": "]",
                "{": "}"
            };

            // Map string chars to numbers for stack visualization (ASCII or arbitrary)
            // Or better, just visualize the stack logic conceptually
            // Since our stack visualization expects numbers, we might need to map chars to numbers
            // Let's map: (->1, )->-1, [->2, ]->-2, {->3, }->-3
            const charToNum: Record<string, number> = {
                '(': 1, ')': -1,
                '[': 2, ']': -2,
                '{': 3, '}': -3
            };

            yield {
                type: 'stack',
                stack: [],
                description: `Checking string: "${s}"`,
                operation: 'none'
            };

            for (let i = 0; i < s.length; i++) {
                const char = s[i];

                if (map[char]) {
                    stack.push(char);
                    yield {
                        type: 'stack',
                        stack: stack.map(c => charToNum[c]),
                        highlightIndex: stack.length - 1,
                        operation: 'push',
                        description: `Push open bracket '${char}' to stack`
                    };
                } else {
                    if (stack.length === 0) {
                        yield {
                            type: 'stack',
                            stack: [],
                            operation: 'none',
                            description: `Error: Found closing '${char}' but stack is empty. Invalid!`
                        };
                        return;
                    }

                    const top = stack[stack.length - 1];
                    if ((char === ')' && top === '(') ||
                        (char === ']' && top === '[') ||
                        (char === '}' && top === '{')) {
                        stack.pop();
                        yield {
                            type: 'stack',
                            stack: stack.map(c => charToNum[c]),
                            operation: 'pop',
                            description: `Matched '${top}' with '${char}'. Popped from stack.`
                        };
                    } else {
                        yield {
                            type: 'stack',
                            stack: stack.map(c => charToNum[c]),
                            operation: 'none',
                            description: `Error: Mismatch! Expected closing for '${top}', found '${char}'.`
                        };
                        return;
                    }
                }
            }

            if (stack.length === 0) {
                yield {
                    type: 'stack',
                    stack: [],
                    operation: 'none',
                    description: "Success! String is valid."
                };
            } else {
                yield {
                    type: 'stack',
                    stack: stack.map(c => charToNum[c]),
                    operation: 'none',
                    description: "Error! Stack not empty. Invalid."
                };
            }
        }
    }

    ,
    {
        id: "heap-operations",
        name: "Heap Operations (Min Heap)",
        type: "data-structure",
        description: `### Definition
A Heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property. In a Min Heap, the key at root must be minimum among all keys present in Binary Heap.

### Operations
- Insert: Add a new key to the heap.
- Extract Min: Remove the minimum element (root) from the heap.

### Complexity Analysis
- Time Complexity: Insert O(log n), Extract Min O(log n).
- Space Complexity: O(n).`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `void insert(int val) {
    heap.push_back(val);
    int i = heap.size() - 1;
    while (i != 0 && heap[parent(i)] > heap[i]) {
        swap(heap[i], heap[parent(i)]);
        i = parent(i);
    }
}`,
            java: `void insert(int val) {
    heap.add(val);
    int i = heap.size() - 1;
    while (i != 0 && heap.get(parent(i)) > heap.get(i)) {
        swap(i, parent(i));
        i = parent(i);
    }
}`,
            python: `def insert(self, k):
    self.heapList.append(k)
    self.currentSize = self.currentSize + 1
    self.percUp(self.currentSize)`,
            javascript: `insert(val) {
  this.heap.push(val);
  this.bubbleUp();
}`
        },
        run: function* () {
            const arr: number[] = [];
            const nodes: TreeNode[] = [];
            let idCounter = 0;

            const updateTree = () => {
                // Convert array to tree nodes for visualization
                const newNodes: TreeNode[] = [];
                if (arr.length === 0) return newNodes;

                for (let i = 0; i < arr.length; i++) {
                    const x = 400 + (i % 2 === 0 ? -1 : 1) * (200 / (Math.floor(Math.log2(i + 1)) + 1));
                    // Simplified layout for demo
                    newNodes.push({
                        id: `node-${i}`,
                        value: arr[i],
                        leftId: (2 * i + 1 < arr.length) ? `node-${2 * i + 1}` : null,
                        rightId: (2 * i + 2 < arr.length) ? `node-${2 * i + 2}` : null,
                        x: 0, y: 0 // Layout handled by renderer usually, or need explicit calc
                    });
                }
                return newNodes;
            };

            yield {
                type: 'heap',
                tree: { type: 'tree', nodes: [], rootId: null, description: "Empty Min Heap" },
                array: [],
                description: "Empty Min Heap created"
            };

            const operations = [10, 20, 5, 30, 2, 15];

            for (const val of operations) {
                arr.push(val);
                yield {
                    type: 'heap',
                    tree: { type: 'tree', nodes: updateTree(), rootId: 'node-0', description: `Inserted ${val}` },
                    array: [...arr],
                    description: `Inserted ${val} at end`
                };

                // Bubble Up Simulation
                let i = arr.length - 1;
                while (i > 0) {
                    const parent = Math.floor((i - 1) / 2);
                    if (arr[i] < arr[parent]) {
                        yield {
                            type: 'heap',
                            tree: { type: 'tree', nodes: updateTree(), rootId: 'node-0', description: `Comparing ${arr[i]} with parent ${arr[parent]}` },
                            array: [...arr],
                            description: `Comparing ${arr[i]} with parent ${arr[parent]}`
                        };

                        // Swap
                        [arr[i], arr[parent]] = [arr[parent], arr[i]];
                        i = parent;

                        yield {
                            type: 'heap',
                            tree: { type: 'tree', nodes: updateTree(), rootId: 'node-0', description: `Swapped ${arr[i]} with ${arr[parent]}` },
                            array: [...arr],
                            description: `Swapped to restore heap property`
                        };
                    } else {
                        break;
                    }
                }
            }
            yield {
                type: 'heap',
                tree: { type: 'tree', nodes: updateTree(), rootId: 'node-0', description: "Heap Construction Complete" },
                array: [...arr],
                description: "Heap Construction Complete"
            };
        }
    },
    {
        id: "graph-bfs-dfs",
        name: "Graph Traversals (BFS/DFS)",
        type: "data-structure",
        description: `### Definition
Graph traversals visit all the nodes in a graph.
- BFS (Breadth-First Search): Explores neighbor nodes first, before moving to the next level neighbors.
- DFS (Depth-First Search): Explores as far as possible along each branch before backtracking.

### Complexity Analysis
- Time Complexity: O(V + E).
- Space Complexity: O(V).`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `// BFS
void bfs(int start) {
    queue<int> q;
    q.push(start);
    visited[start] = true;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`,
            java: `// BFS
void bfs(int start) {
    Queue<Integer> q = new LinkedList<>();
    q.add(start);
    visited[start] = true;
    while (!q.isEmpty()) {
        int u = q.poll();
        for (int v : adj.get(u)) {
            if (!visited[v]) {
                visited[v] = true;
                q.add(v);
            }
        }
    }
}`,
            python: `# BFS
def bfs(start):
    queue = [start]
    visited.add(start)
    while queue:
        u = queue.pop(0)
        for v in adj[u]:
            if v not in visited:
                visited.add(v)
                queue.append(v)`,
            javascript: `// BFS
function bfs(start) {
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length > 0) {
    const u = queue.shift();
    for (const v of adj[u]) {
        if (!visited.has(v)) {
            visited.add(v);
            queue.push(v);
        }
    }
  }
}`
        },
        run: function* () {
            const nodes: GraphNode[] = [
                { id: '0', value: '0', x: 200, y: 100 },
                { id: '1', value: '1', x: 100, y: 200 },
                { id: '2', value: '2', x: 300, y: 200 },
                { id: '3', value: '3', x: 50, y: 300 },
                { id: '4', value: '4', x: 150, y: 300 },
                { id: '5', value: '5', x: 250, y: 300 },
                { id: '6', value: '6', x: 350, y: 300 },
            ];
            const edges: GraphEdge[] = [
                { source: '0', target: '1' }, { source: '0', target: '2' },
                { source: '1', target: '3' }, { source: '1', target: '4' },
                { source: '2', target: '5' }, { source: '2', target: '6' },
            ];
            const adj: Record<string, string[]> = {
                '0': ['1', '2'], '1': ['3', '4'], '2': ['5', '6'],
                '3': [], '4': [], '5': [], '6': []
            };

            // BFS Demo
            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges,
                isDirected: false,
                description: "Starting BFS from Node 0"
            };

            const queue = ['0'];
            const visited = new Set(['0']);

            while (queue.length > 0) {
                const u = queue.shift()!;
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => ({ ...n, highlight: n.id === u ? 'active' : visited.has(n.id) ? 'visited' : 'none' })),
                    edges: edges,
                    isDirected: false,
                    description: `Visiting ${u}`
                };

                for (const v of adj[u]) {
                    if (!visited.has(v)) {
                        visited.add(v);
                        queue.push(v);
                        yield {
                            type: 'graph',
                            nodes: nodes.map(n => ({ ...n, highlight: n.id === u ? 'active' : visited.has(n.id) ? 'visited' : 'none' })),
                            edges: edges,
                            isDirected: false,
                            description: `Discovered neighbor ${v}, adding to queue`
                        };
                    }
                }
            }
            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited' })),
                edges: edges,
                isDirected: false,
                description: "BFS Completed"
            };
        }
    },
    {
        id: "string-operations",
        name: "String Operations",
        type: "data-structure",
        description: `### Definition
Common string manipulations like Reversing a string or checking for Palindromes.

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(n) (if creating new string).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `string reverseString(string s) {
    int n = s.length();
    for (int i = 0; i < n / 2; i++)
        swap(s[i], s[n - i - 1]);
    return s;
}`,
            java: `public String reverseString(String s) {
    char[] word = s.toCharArray();
    int i = 0, j = s.length() - 1;
    while (i < j) {
        char temp = word[i];
        word[i] = word[j];
        word[j] = temp;
        i++; j--;
    }
    return new String(word);
}`,
            python: `def reverse_string(s):
    return s[::-1]`,
            javascript: `function reverseString(s) {
  return s.split('').reverse().join('');
}`
        },
        run: function* () {
            const str = "HELLO";
            const chars = str.split('');

            yield {
                type: 'string',
                value: str,
                indices: chars.map((_, i) => ({ index: i, highlight: 'none' })),
                description: `Original String: ${str}`
            };

            // Reverse Simulation
            let l = 0, r = chars.length - 1;
            while (l < r) {
                yield {
                    type: 'string',
                    value: chars.join(''),
                    indices: chars.map((_, i) => ({ index: i, highlight: (i === l || i === r) ? 'active' : 'none' })),
                    description: `Swapping ${chars[l]} and ${chars[r]}`
                };

                [chars[l], chars[r]] = [chars[r], chars[l]];
                l++;
                r--;

                yield {
                    type: 'string',
                    value: chars.join(''),
                    indices: chars.map((_, i) => ({ index: i, highlight: 'none' })),
                    description: `Swapped. Current: ${chars.join('')}`
                };
            }
            yield {
                type: 'string',
                value: chars.join(''),
                indices: [],
                description: `Reversed String: ${chars.join('')}`
            };
        }
    },
    {
        id: "recursion-fibonacci",
        name: "Fibonacci (Recursion)",
        type: "data-structure", // Categorized as data-structure for now to show in dropdown, or maybe 'popular'
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
            // Visualize recursion tree using TreeVisualization
            let idCounter = 0;
            const createNode = (val: string, x: number, y: number): TreeNode => ({
                id: `node-${idCounter++}`,
                value: parseInt(val) || 0, // Just for type, display label in message? No, value is number.
                leftId: null, rightId: null, x, y
            });

            const nodes: TreeNode[] = [];

            yield {
                type: 'tree',
                nodes: [],
                rootId: null,
                description: "Calculating Fib(4) recursively..."
            };

            // Simplified linear visualization of stack calls for now, or build a tree?
            // Building a tree dynamically is hard without layout engine.
            // Let's use Stack visualization to show the recursion stack!

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
    }

    ,
    {
        id: "greedy-activity-selection",
        name: "Activity Selection (Greedy)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
The Activity Selection problem is a greedy algorithm problem that involves selecting the maximum number of activities that can be performed by a single person or machine, assuming that a person can only work on a single activity at a time.

### Complexity Analysis
    - Time Complexity: O(n log n)(if sorting is required).
- Space Complexity: O(1).`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `void selectActivities(vector < int > s, vector < int > f) {
    int i = 0;
    cout << i << " ";
    for (int j = 1; j < s.size(); j++) {
        if (s[j] >= f[i]) {
            cout << j << " ";
            i = j;
        }
    }
} `,
            java: `void selectActivities(int s[], int f[], int n) {
    int i = 0;
    System.out.print(i + " ");
    for (int j = 1; j < n; j++) {
        if (s[j] >= f[i]) {
            System.out.print(j + " ");
            i = j;
        }
    }
} `,
            python: `def select_activities(s, f):
n = len(f)
i = 0
print(i, end = ' ')
for j in range(1, n):
    if s[j] >= f[i]:
        print(j, end = ' ')
i = j`,
            javascript: `function selectActivities(s, f) {
    let i = 0;
    console.log(i);
    for (let j = 1; j < s.length; j++) {
        if (s[j] >= f[i]) {
            console.log(j);
            i = j;
        }
    }
} `
        },
        run: function* () {
            // Activities: [Start, End]
            const activities = [
                { id: 0, start: 1, end: 2 },
                { id: 1, start: 3, end: 4 },
                { id: 2, start: 0, end: 6 },
                { id: 3, start: 5, end: 7 },
                { id: 4, start: 8, end: 9 },
                { id: 5, start: 5, end: 9 }
            ];
            // Sort by end time (already sorted here for simplicity, but usually step 1)

            // Visualize as intervals on a timeline
            // Using ArrayVisualization for simplicity, but ideally a Gantt chart style
            // Let's use a custom String/Array hybrid or just text description updates with highlighting

            yield {
                type: 'array',
                array: activities.map(a => a.end), // Visualizing End times
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Activities sorted by End Time: " + activities.map(a => `[${a.start},${a.end}]`).join(", ")
            };

            let i = 0;
            let selected = [0];

            yield {
                type: 'array',
                array: activities.map(a => a.end),
                activeIndices: [0],
                swapIndices: [],
                sortedIndices: [0],
                description: `Selected Activity 0[${activities[0].start}, ${activities[0].end}]`
            };

            for (let j = 1; j < activities.length; j++) {
                yield {
                    type: 'array',
                    array: activities.map(a => a.end),
                    activeIndices: [i, j],
                    swapIndices: [],
                    sortedIndices: [...selected],
                    description: `Checking Activity ${j} [${activities[j].start}, ${activities[j].end}] against last selected end time ${activities[i].end} `
                };

                if (activities[j].start >= activities[i].end) {
                    selected.push(j);
                    i = j;
                    yield {
                        type: 'array',
                        array: activities.map(a => a.end),
                        activeIndices: [j],
                        swapIndices: [],
                        sortedIndices: [...selected],
                        description: `Selected Activity ${j} (Start ${activities[j].start} >= End ${activities[i].end})`
                    };
                } else {
                    yield {
                        type: 'array',
                        array: activities.map(a => a.end),
                        activeIndices: [j],
                        swapIndices: [],
                        sortedIndices: [...selected],
                        description: `Skipped Activity ${j} (Overlap)`
                    };
                }
            }
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
            // 2D Grid Visualization using Array of Arrays? 
            // Current ArrayVisualization only supports 1D. 
            // We can flatten it or use a custom 'grid' type if we had one.
            // For now, let's visualize the filling of the DP table row by row using 1D array updates
            // or just show the current state of calculation.

            // Let's simulate the 1D DP array approach or just show the values being computed.

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
            };

            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    yield {
                        type: 'grid',
                        grid: displayGrid,
                        rows: m + 2,
                        cols: n + 2,
                        highlights: [{ row: i + 1, col: j + 1, color: 'active' }, { row: i + 1, col: 0, color: 'active' }, { row: 0, col: j + 1, color: 'active' }],
                        description: `Comparing ${s1[i - 1]} (Row ${i}) and ${s2[j - 1]} (Col ${j})`
                    };

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
                        };
                    } else {
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                        displayGrid[i + 1][j + 1] = dp[i][j];
                        yield {
                            type: 'grid',
                            grid: displayGrid,
                            rows: m + 2,
                            cols: n + 2,
                            highlights: [{ row: i + 1, col: j + 1, color: 'mismatch' }],
                            description: `No match.Max of top(${dp[i - 1][j]}) and left(${dp[i][j - 1]}) = ${dp[i][j]} `
                        };
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
            };
        }
    },
    {
        id: "recursion-tower-of-hanoi",
        name: "Tower of Hanoi (Recursion)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Tower of Hanoi is a mathematical puzzle where we have three rods and n disks.The objective is to move the entire stack to another rod, obeying the following simple rules:
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
3. No disk may be placed on top of a smaller disk.

### Complexity Analysis
    - Time Complexity: O(2 ^ n).
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
} `,
            java: `void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
    if (n == 1) {
        System.out.println("Move disk 1 from rod " + from_rod + " to rod " + to_rod);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    System.out.println("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
} `,
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
            // Visualize using 3 Stacks!
            // Rod A, Rod B, Rod C
            // We need a custom visualization or reuse Stack but show 3 of them?
            // The current StackVisualization only supports 1 stack.
            // We can use 'array' to represent the rods maybe? Or just text description for now.
            // Better: Use 'string' type to show the move "Disk 1: A -> C"

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
        id: "graph-bfs",
        name: "Breadth First Search (BFS)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Breadth First Search (BFS) is a graph traversal algorithm that explores all the vertices of a graph at the current depth level before moving on to the vertices at the next depth level.

### Complexity Analysis
- Time Complexity: O(V + E).
- Space Complexity: O(V).`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `void bfs(int start, vector<vector<int>>& adj, int V) {
    vector<bool> visited(V, false);
    queue<int> q;
    visited[start] = true;
    q.push(start);
    while(!q.empty()) {
        int u = q.front(); q.pop();
        cout << u << " ";
        for(int v : adj[u]) {
            if(!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`,
            java: `void bfs(int start, List<List<Integer>> adj, int V) {
    boolean[] visited = new boolean[V];
    Queue<Integer> q = new LinkedList<>();
    visited[start] = true;
    q.add(start);
    while(!q.isEmpty()) {
        int u = q.poll();
        System.out.print(u + " ");
        for(int v : adj.get(u)) {
            if(!visited[v]) {
                visited[v] = true;
                q.add(v);
            }
        }
    }
}`,
            python: `def bfs(start, adj):
    visited = set()
    q = [start]
    visited.add(start)
    while q:
        u = q.pop(0)
        print(u, end=" ")
        for v in adj[u]:
            if v not in visited:
                visited.add(v)
                q.append(v)`,
            javascript: `function bfs(start, adj) {
  const visited = new Set();
  const q = [start];
  visited.add(start);
  while (q.length > 0) {
    const u = q.shift();
    console.log(u);
    for (const v of adj[u]) {
      if (!visited.has(v)) {
        visited.add(v);
        q.push(v);
      }
    }
  }
}`
        },
        run: function* () {
            // Graph structure: 0->1, 0->2, 1->3, 1->4, 2->5, 2->6
            const nodes: GraphNode[] = [
                { id: '0', value: 0, x: 300, y: 50 },
                { id: '1', value: 1, x: 150, y: 150 },
                { id: '2', value: 2, x: 450, y: 150 },
                { id: '3', value: 3, x: 75, y: 250 },
                { id: '4', value: 4, x: 225, y: 250 },
                { id: '5', value: 5, x: 375, y: 250 },
                { id: '6', value: 6, x: 525, y: 250 }
            ];
            const edges: GraphEdge[] = [
                { source: '0', target: '1' }, { source: '0', target: '2' },
                { source: '1', target: '3' }, { source: '1', target: '4' },
                { source: '2', target: '5' }, { source: '2', target: '6' }
            ];
            const adj: Record<string, string[]> = {
                '0': ['1', '2'], '1': ['3', '4'], '2': ['5', '6'],
                '3': [], '4': [], '5': [], '6': []
            };

            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges,
                isDirected: true,
                description: "Starting BFS from Node 0"
            };

            const queue: string[] = ['0'];
            const visited = new Set<string>();
            visited.add('0');

            // Highlight start node
            yield {
                type: 'graph',
                nodes: nodes.map(n => n.id === '0' ? { ...n, highlight: 'active' } : n),
                edges: edges,
                isDirected: true,
                description: "Queue: [0]. Visited: {0}"
            };

            while (queue.length > 0) {
                const u = queue.shift()!;

                yield {
                    type: 'graph',
                    nodes: nodes.map(n => n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                    edges: edges,
                    isDirected: true,
                    description: `Processing Node ${u}`
                };

                for (const v of adj[u]) {
                    if (!visited.has(v)) {
                        visited.add(v);
                        queue.push(v);
                        yield {
                            type: 'graph',
                            nodes: nodes.map(n => n.id === v ? { ...n, highlight: 'match' } : n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                            edges: edges.map(e => (e.source === u && e.target === v) ? { ...e, highlight: 'active' } : e),
                            isDirected: true,
                            description: `Visiting neighbor ${v}, adding to queue.`
                        };
                    }
                }

                // Mark u as fully processed (visited)
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                    edges: edges,
                    isDirected: true,
                    description: `Finished processing Node ${u}. Queue: [${queue.join(', ')}]`
                };
            }

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited' })),
                edges: edges,
                isDirected: true,
                description: "BFS Traversal Complete"
            };
        }
    },
    {
        id: "graph-dfs",
        name: "Depth First Search (DFS)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Depth First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking.

### Complexity Analysis
- Time Complexity: O(V + E).
- Space Complexity: O(V).`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `void dfs(int u, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[u] = true;
    cout << u << " ";
    for(int v : adj[u]) {
        if(!visited[v]) {
            dfs(v, adj, visited);
        }
    }
}`,
            java: `void dfs(int u, List<List<Integer>> adj, boolean[] visited) {
    visited[u] = true;
    System.out.print(u + " ");
    for(int v : adj.get(u)) {
        if(!visited[v]) {
            dfs(v, adj, visited);
        }
    }
}`,
            python: `def dfs(u, adj, visited):
    visited.add(u)
    print(u, end=" ")
    for v in adj[u]:
        if v not in visited:
            dfs(v, adj, visited)`,
            javascript: `function dfs(u, adj, visited) {
  visited.add(u);
  console.log(u);
  for (const v of adj[u]) {
    if (!visited.has(v)) {
      dfs(v, adj, visited);
    }
  }
}`
        },
        run: function* () {
            const nodes: GraphNode[] = [
                { id: '0', value: 0, x: 300, y: 50 },
                { id: '1', value: 1, x: 150, y: 150 },
                { id: '2', value: 2, x: 450, y: 150 },
                { id: '3', value: 3, x: 75, y: 250 },
                { id: '4', value: 4, x: 225, y: 250 },
                { id: '5', value: 5, x: 375, y: 250 },
                { id: '6', value: 6, x: 525, y: 250 }
            ];
            const edges: GraphEdge[] = [
                { source: '0', target: '1' }, { source: '0', target: '2' },
                { source: '1', target: '3' }, { source: '1', target: '4' },
                { source: '2', target: '5' }, { source: '2', target: '6' }
            ];
            const adj: Record<string, string[]> = {
                '0': ['1', '2'], '1': ['3', '4'], '2': ['5', '6'],
                '3': [], '4': [], '5': [], '6': []
            };

            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges,
                isDirected: true,
                description: "Starting DFS from Node 0"
            };

            const visited = new Set<string>();
            const stack: string[] = ['0'];

            while (stack.length > 0) {
                const u = stack.pop()!;

                if (!visited.has(u)) {
                    visited.add(u);
                    yield {
                        type: 'graph',
                        nodes: nodes.map(n => n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                        edges: edges,
                        isDirected: true,
                        description: `Visiting Node ${u}`
                    };

                    // Add neighbors to stack (reverse order to visit left first if desired, but standard stack is fine)
                    const neighbors = adj[u] || [];
                    for (let i = neighbors.length - 1; i >= 0; i--) {
                        const v = neighbors[i];
                        if (!visited.has(v)) {
                            stack.push(v);
                            yield {
                                type: 'graph',
                                nodes: nodes.map(n => n.id === v ? { ...n, highlight: 'match' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                                edges: edges.map(e => (e.source === u && e.target === v) ? { ...e, highlight: 'active' } : e),
                                isDirected: true,
                                description: `Pushing neighbor ${v} to stack`
                            };
                        }
                    }
                }
            }

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited' })),
                edges: edges,
                isDirected: true,
                description: "DFS Traversal Complete"
            };
        }
    },
    {
        id: "graph-dijkstra",
        name: "Dijkstra's Algorithm",
        type: "data-structure",
        category: "popular",
        description: `### Complexity Analysis
        - Time Complexity: O(E + V log V).
        - Space Complexity: O(V).`,
        timeComplexity: "O(E + V log V)",
        spaceComplexity: "O(V)",
        code: {
            cpp: `vector<int> dijkstra(int V, vector<vector<pair<int, int>>>& adj, int S) {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> dist(V, 1e9);
    dist[S] = 0;
    pq.push({0, S});
    while (!pq.empty()) {
        int dis = pq.top().first;
        int node = pq.top().second;
        pq.pop();
        if (dis > dist[node]) continue;
        for (auto it : adj[node]) {
            int v = it.first;
            int w = it.second;
            if (dis + w < dist[v]) {
                dist[v] = dis + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,
            java: `class Solution {
    static int[] dijkstra(int V, ArrayList<ArrayList<ArrayList<Integer>>> adj, int S) {
        PriorityQueue<Pair> pq = new PriorityQueue<Pair>((x,y) -> x.distance - y.distance);
        int[] dist = new int[V];
        Arrays.fill(dist, (int)1e9);
        dist[S] = 0;
        pq.add(new Pair(0, S));
        while(pq.size() != 0) {
            int dis = pq.peek().distance;
            int node = pq.peek().node;
            pq.remove();
            for(int i = 0; i < adj.get(node).size(); i++) {
                int edgeWeight = adj.get(node).get(i).get(1);
                int adjNode = adj.get(node).get(i).get(0);
                if(dis + edgeWeight < dist[adjNode]) {
                    dist[adjNode] = dis + edgeWeight;
                    pq.add(new Pair(dist[adjNode], adjNode));
                }
            }
        }
        return dist;
    }
}`,
            python: `import heapq
def dijkstra(V, adj, S):
    pq = []
    heapq.heappush(pq, (0, S))
    dist = [float('inf')] * V
    dist[S] = 0
    while pq:
        d, node = heapq.heappop(pq)
        if d > dist[node]: continue
        for neighbor, weight in adj[node]:
            if dist[node] + weight < dist[neighbor]:
                dist[neighbor] = dist[node] + weight
                heapq.heappush(pq, (dist[neighbor], neighbor))
    return dist`,
            javascript: `function dijkstra(V, adj, S) {
    let dist = new Array(V).fill(Infinity);
    dist[S] = 0;
    let pq = [[0, S]];
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        let [d, u] = pq.shift();
        if (d > dist[u]) continue;
        for (let [v, w] of adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push([dist[v], v]);
            }
        }
    }
    return dist;
}`
        },
        run: function* () {
            const nodes: GraphNode[] = [
                { id: 'A', value: 'A', x: 100, y: 150 },
                { id: 'B', value: 'B', x: 300, y: 50 },
                { id: 'C', value: 'C', x: 300, y: 250 },
                { id: 'D', value: 'D', x: 500, y: 150 }
            ];
            const edges: GraphEdge[] = [
                { source: 'A', target: 'B', weight: 4 },
                { source: 'A', target: 'C', weight: 2 },
                { source: 'B', target: 'C', weight: 1 },
                { source: 'B', target: 'D', weight: 5 },
                { source: 'C', target: 'D', weight: 8 }, // 2 -> 8 is 10, but B->D is 5 (total 9 via B). Wait. A->C(2)->D(8)=10. A->B(4)->D(5)=9. A->B(4)->C(1) is 5, worse than A->C(2).
                // Let's adjust weights to make it interesting.
                // A->B=4, A->C=2.
                // B->C=5 (so A->B->C = 9, A->C=2 better)
                // B->D=10 (A->B->D = 14)
                // C->D=3 (A->C->D = 5) -> Shortest to D is 5.
            ];
            // Re-defining edges for clarity in run
            const edges2: GraphEdge[] = [
                { source: 'A', target: 'B', weight: 4 },
                { source: 'A', target: 'C', weight: 2 },
                { source: 'B', target: 'C', weight: 5 },
                { source: 'B', target: 'D', weight: 10 },
                { source: 'C', target: 'D', weight: 3 }
            ];

            const adj: any = {
                'A': [['B', 4], ['C', 2]],
                'B': [['C', 5], ['D', 10]],
                'C': [['D', 3]],
                'D': []
            };

            yield {
                type: 'graph',
                nodes: nodes,
                edges: edges2,
                isDirected: true,
                description: "Starting Dijkstra from Node A"
            };

            // Distances
            const dist: any = { 'A': 0, 'B': Infinity, 'C': Infinity, 'D': Infinity };
            const visited = new Set<string>();

            while (visited.size < nodes.length) {
                // Find min dist node not visited
                let u: string | null = null;
                let minDist = Infinity;
                for (const node of nodes) {
                    if (!visited.has(node.id) && dist[node.id] < minDist) {
                        minDist = dist[node.id];
                        u = node.id;
                    }
                }

                if (u === null) break; // No reachable nodes left

                visited.add(u);
                yield {
                    type: 'graph',
                    nodes: nodes.map(n => n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                    edges: edges2,
                    isDirected: true,
                    description: `Processing Node ${u} (Dist: ${dist[u]})`
                };

                for (const [v, w] of adj[u]) {
                    if (!visited.has(v)) {
                        yield {
                            type: 'graph',
                            nodes: nodes.map(n => n.id === v ? { ...n, highlight: 'match' } : n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                            edges: edges2.map(e => (e.source === u && e.target === v) ? { ...e, highlight: 'active' } : e),
                            isDirected: true,
                            description: `Checking neighbor ${v} with weight ${w}`
                        };

                        if (dist[u] + w < dist[v]) {
                            dist[v] = dist[u] + w;
                            yield {
                                type: 'graph',
                                nodes: nodes.map(n => n.id === v ? { ...n, highlight: 'match', value: `${n.id}:${dist[v]}` } : n.id === u ? { ...n, highlight: 'active' } : visited.has(n.id) ? { ...n, highlight: 'visited' } : n),
                                edges: edges2,
                                isDirected: true,
                                description: `Updated distance for ${v} to ${dist[v]}`
                            };
                        }
                    }
                }
            }

            yield {
                type: 'graph',
                nodes: nodes.map(n => ({ ...n, highlight: 'visited', value: `${n.id}:${dist[n.id]}` })),
                edges: edges2,
                isDirected: true,
                description: "Shortest paths calculated."
            };
        }
    },
    {
        id: "sorting-merge-sort",
        name: "Merge Sort",
        type: "sorting",

        description: `### Definition
Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

### Complexity Analysis
- Time Complexity: O(n log n).
- Space Complexity: O(n).`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
        code: {
            cpp: `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
            java: `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[] = new int[n1];
    int R[] = new int[n2];
    for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
void sort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        sort(arr, l, m);
        sort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
            python: `def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m
    L = [0] * (n1)
    R = [0] * (n2)
    for i in range(0, n1): L[i] = arr[l + i]
    for j in range(0, n2): R[j] = arr[m + 1 + j]
    i = 0; j = 0; k = l
    while i < n1 and j < n2:
        if L[i] <= R[j]: arr[k] = L[i]; i += 1
        else: arr[k] = R[j]; j += 1
        k += 1
    while i < n1: arr[k] = L[i]; i += 1; k += 1
    while j < n2: arr[k] = R[j]; j += 1; k += 1

def mergeSort(arr, l, r):
    if l < r:
        m = l+(r-l)//2
        mergeSort(arr, l, m)
        mergeSort(arr, m+1, r)
        merge(arr, l, m, r)`,
            javascript: `function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    var i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
function mergeSort(arr, l, r) {
    if (l >= r) return;
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}`
        },
        run: function* () {
            const arr = [38, 27, 43, 3, 9, 82, 10];
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Initial Array"
            };

            // Simplified visualization of the process
            // Ideally we'd show the tree structure of recursive calls
            // But for now, let's just show the array updates

            // Recursive Merge Sort generator
            function* mergeSort(a: number[], start: number, end: number): Generator<any> {
                if (start >= end) return;

                const mid = Math.floor((start + end) / 2);
                yield* mergeSort(a, start, mid);
                yield* mergeSort(a, mid + 1, end);
                yield* merge(a, start, mid, end);
            }

            function* merge(a: number[], start: number, mid: number, end: number): Generator<any> {
                yield {
                    type: 'array',
                    array: [...a],
                    activeIndices: [start, end], // Show range being merged
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Merging range [${start}, ${mid}] and [${mid + 1}, ${end}]`
                };

                // Perform merge
                const left = a.slice(start, mid + 1);
                const right = a.slice(mid + 1, end + 1);
                let i = 0, j = 0, k = start;

                while (i < left.length && j < right.length) {
                    yield {
                        type: 'array',
                        array: [...a],
                        activeIndices: [k],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Comparing ${left[i]} and ${right[j]}`
                    };

                    if (left[i] <= right[j]) {
                        a[k] = left[i];
                        i++;
                    } else {
                        a[k] = right[j];
                        j++;
                    }
                    k++;
                    yield {
                        type: 'array',
                        array: [...a],
                        activeIndices: [k - 1],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Placed ${a[k - 1]} at index ${k - 1}`
                    };
                }

                while (i < left.length) {
                    a[k] = left[i];
                    i++; k++;
                    yield {
                        type: 'array',
                        array: [...a],
                        activeIndices: [k - 1],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Placed remaining ${a[k - 1]} at index ${k - 1}`
                    };
                }

                while (j < right.length) {
                    a[k] = right[j];
                    j++; k++;
                    yield {
                        type: 'array',
                        array: [...a],
                        activeIndices: [k - 1],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Placed remaining ${a[k - 1]} at index ${k - 1}`
                    };
                }
            }

            yield* mergeSort(arr, 0, arr.length - 1);

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: arr.map((_, i) => i),
                description: "Sorted!"
            };
        }
    },
    {
        id: "sorting-quick-sort",
        name: "Quick Sort",
        type: "sorting",

        description: `### Definition
Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

### Complexity Analysis
- Time Complexity: O(n log n) (Average), O(n^2) (Worst).
- Space Complexity: O(log n).`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(log n)",
        code: {
            cpp: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
            java: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
void sort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        sort(arr, low, pi - 1);
        sort(arr, pi + 1, high);
    }
}`,
            python: `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i = i + 1
            (arr[i], arr[j]) = (arr[j], arr[i])
    (arr[i + 1], arr[high]) = (arr[high], arr[i + 1])
    return i + 1

def quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)`,
            javascript: `function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`
        },
        run: function* () {
            const arr = [10, 7, 8, 9, 1, 5];
            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Initial Array"
            };

            function* partition(arr: number[], low: number, high: number): Generator<any> {
                const pivot = arr[high];
                let i = (low - 1);

                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [high],
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Pivot chosen: ${pivot}`
                };

                for (let j = low; j <= high - 1; j++) {
                    yield {
                        type: 'array',
                        array: [...arr],
                        activeIndices: [high, j, i + 1],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Comparing ${arr[j]} with pivot ${pivot}`
                    };

                    if (arr[j] < pivot) {
                        i++;
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        yield {
                            type: 'array',
                            array: [...arr],
                            activeIndices: [high],
                            swapIndices: [i, j],
                            sortedIndices: [],
                            description: `Swapped ${arr[i]} and ${arr[j]}`
                        };
                    }
                }
                [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
                yield {
                    type: 'array',
                    array: [...arr],
                    activeIndices: [],
                    swapIndices: [i + 1, high],
                    sortedIndices: [],
                    description: `Placed pivot ${pivot} at correct position ${i + 1}`
                };
                return i + 1;
            }

            function* quickSort(arr: number[], low: number, high: number): Generator<any> {
                if (low < high) {
                    const pi = yield* partition(arr, low, high);
                    yield* quickSort(arr, low, pi - 1);
                    yield* quickSort(arr, pi + 1, high);
                }
            }

            yield* quickSort(arr, 0, arr.length - 1);

            yield {
                type: 'array',
                array: [...arr],
                activeIndices: [],
                swapIndices: [],
                sortedIndices: arr.map((_, i) => i),
                description: "Sorted!"
            };
        }
    },
    {
        id: "greedy-fractional-knapsack",
        name: "Fractional Knapsack (Greedy)",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Given weights and values of n items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack. We can break items for maximizing the total value of knapsack.

### Complexity Analysis
- Time Complexity: O(n log n).
- Space Complexity: O(1).`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `struct Item { int value, weight; };
bool cmp(struct Item a, struct Item b) {
    double r1 = (double)a.value / (double)a.weight;
    double r2 = (double)b.value / (double)b.weight;
    return r1 > r2;
}
double fractionalKnapsack(int W, struct Item arr[], int n) {
    sort(arr, arr + n, cmp);
    int curWeight = 0;
    double finalvalue = 0.0;
    for (int i = 0; i < n; i++) {
        if (curWeight + arr[i].weight <= W) {
            curWeight += arr[i].weight;
            finalvalue += arr[i].value;
        } else {
            int remain = W - curWeight;
            finalvalue += arr[i].value * ((double)remain / (double)arr[i].weight);
            break;
        }
    }
    return finalvalue;
}`,
            java: `class Item { int value, weight; }
class itemComparator implements Comparator<Item> {
    public int compare(Item a, Item b) {
        double r1 = (double)a.value / (double)a.weight;
        double r2 = (double)b.value / (double)b.weight;
        if(r1 < r2) return 1;
        else if(r1 > r2) return -1;
        else return 0;
    }
}
double fractionalKnapsack(int W, Item arr[], int n) {
    Arrays.sort(arr, new itemComparator());
    int curWeight = 0;
    double finalvalue = 0.0;
    for (int i = 0; i < n; i++) {
        if (curWeight + arr[i].weight <= W) {
            curWeight += arr[i].weight;
            finalvalue += arr[i].value;
        } else {
            int remain = W - curWeight;
            finalvalue += arr[i].value * ((double)remain / (double)arr[i].weight);
            break;
        }
    }
    return finalvalue;
}`,
            python: `class Item:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight

def fractionalKnapsack(W, arr):
    arr.sort(key=lambda x: (x.value/x.weight), reverse=True)
    finalvalue = 0.0
    for item in arr:
        if item.weight <= W:
            W -= item.weight
            finalvalue += item.value
        else:
            finalvalue += item.value * (W / item.weight)
            break
    return finalvalue`,
            javascript: `function fractionalKnapsack(W, arr, n) {
    arr.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
    let curWeight = 0;
    let finalvalue = 0.0;
    for (let i = 0; i < n; i++) {
        if (curWeight + arr[i].weight <= W) {
            curWeight += arr[i].weight;
            finalvalue += arr[i].value;
        } else {
            let remain = W - curWeight;
            finalvalue += arr[i].value * (remain / arr[i].weight);
            break;
        }
    }
    return finalvalue;
}`
        },
        run: function* () {
            const items = [
                { id: 1, value: 60, weight: 10 },
                { id: 2, value: 100, weight: 20 },
                { id: 3, value: 120, weight: 30 }
            ];
            const capacity = 50;

            yield {
                type: 'array',
                array: items.map(i => i.value),
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Items: " + items.map(i => `[V:${i.value}, W:${i.weight}]`).join(', ') + `. Capacity: ${capacity}`
            };

            // Calculate ratios
            const ratios = items.map(i => ({ ...i, ratio: i.value / i.weight }));
            ratios.sort((a, b) => b.ratio - a.ratio);

            yield {
                type: 'array',
                array: ratios.map(i => i.ratio),
                activeIndices: [],
                swapIndices: [],
                sortedIndices: [],
                description: "Sorted by Value/Weight Ratio: " + ratios.map(i => `[${i.ratio.toFixed(2)}]`).join(", ")
            };

            let currentWeight = 0;
            let finalValue = 0;

            for (const item of ratios) {
                if (currentWeight + item.weight <= capacity) {
                    currentWeight += item.weight;
                    finalValue += item.value;
                    yield {
                        type: 'array',
                        array: ratios.map(i => i.value),
                        activeIndices: [],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Took full item (V:${item.value}, W:${item.weight}). Current Weight: ${currentWeight}, Value: ${finalValue}`
                    };
                } else {
                    const remain = capacity - currentWeight;
                    finalValue += item.value * (remain / item.weight);
                    yield {
                        type: 'array',
                        array: ratios.map(i => i.value),
                        activeIndices: [],
                        swapIndices: [],
                        sortedIndices: [],
                        description: `Took fractional item (V:${item.value}, W:${item.weight}). Fraction: ${remain}/${item.weight}. Final Value: ${finalValue}`
                    };
                    break;
                }
            }
        }
    },
    {
        id: "sorting-heap-sort",
        name: "Heap Sort",
        type: "sorting",
        description: `### Definition
Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region.

### Complexity Analysis
- Time Complexity: O(n log n).
- Space Complexity: O(1).`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}
void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}`,
            java: `public void sort(int arr[]) {
    int n = arr.length;
    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}
void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        heapify(arr, n, largest);
    }
}`,
            python: `def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2
    if l < n and arr[i] < arr[l]: largest = l
    if r < n and arr[largest] < arr[r]: largest = r
    if largest != i:
        (arr[i], arr[largest]) = (arr[largest], arr[i])
        heapify(arr, n, largest)

def heapSort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1): heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        (arr[i], arr[0]) = (arr[0], arr[i])
        heapify(arr, i, 0)`,
            javascript: `function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}`
        },
        run: function* () {
            const arr = [12, 11, 13, 5, 6, 7];
            const n = arr.length;

            // Helper to generate tree nodes from array
            const getTreeNodes = (array: number[], activeIndices: number[] = [], sortedIndices: number[] = []) => {
                const nodes = [];
                for (let i = 0; i < array.length; i++) {
                    const level = Math.floor(Math.log2(i + 1));
                    const levelStartIndex = Math.pow(2, level) - 1;
                    const itemsInLevel = Math.pow(2, level);
                    const positionInLevel = i - levelStartIndex;
                    const x = (positionInLevel + 0.5) * (800 / itemsInLevel) - 400; // Centered
                    const y = level * 60;

                    nodes.push({
                        id: `node-${i}`,
                        value: array[i],
                        x: x,
                        y: y,
                        highlight: activeIndices.includes(i) ? 'active' : sortedIndices.includes(i) ? 'visited' : 'normal'
                    });
                }
                return nodes;
            };

            yield {
                type: 'heap',
                array: [...arr],
                tree: { nodes: getTreeNodes(arr) },
                description: "Initial Array"
            };

            function* heapify(n: number, i: number): Generator<any> {
                let largest = i;
                const l = 2 * i + 1;
                const r = 2 * i + 2;

                yield {
                    type: 'heap',
                    array: [...arr],
                    tree: { nodes: getTreeNodes(arr, [i, l, r].filter(idx => idx < n)) },
                    description: `Heapify: Checking root ${arr[i]} with children`
                };

                if (l < n && arr[l] > arr[largest]) largest = l;
                if (r < n && arr[r] > arr[largest]) largest = r;

                if (largest !== i) {
                    [arr[i], arr[largest]] = [arr[largest], arr[i]];
                    yield {
                        type: 'heap',
                        array: [...arr],
                        tree: { nodes: getTreeNodes(arr, [i, largest]) },
                        description: `Swapped ${arr[i]} and ${arr[largest]}`
                    };
                    yield* heapify(n, largest);
                }
            }

            // Build heap (rearrange array)
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                yield* heapify(n, i);
            }

            yield {
                type: 'heap',
                array: [...arr],
                tree: { nodes: getTreeNodes(arr) },
                description: "Max Heap Built"
            };

            // One by one extract an element from heap
            for (let i = n - 1; i > 0; i--) {
                [arr[0], arr[i]] = [arr[i], arr[0]];
                yield {
                    type: 'heap',
                    array: [...arr],
                    tree: { nodes: getTreeNodes(arr, [0, i], Array.from({ length: n - i }, (_, k) => n - 1 - k)) }, // Highlight sorted part?
                    description: `Moved max element ${arr[i]} to end`
                };
                yield* heapify(i, 0);
            }

            yield {
                type: 'heap',
                array: [...arr],
                tree: { nodes: getTreeNodes(arr, [], arr.map((_, i) => i)) },
                description: "Sorted!"
            };
        }
    },

    {
        id: "string-palindrome",
        name: "Palindrome Check",
        type: "data-structure", // Using string visualization
        category: "popular",
        description: `### Definition
A palindrome is a string that reads the same forward and backward. We use two pointers to check characters from both ends.

### Complexity Analysis
- Time Complexity: O(n).
- Space Complexity: O(1).`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: {
            cpp: `bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++; right--;
    }
    return true;
}`,
            java: `boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left++; right--;
    }
    return true;
}`,
            python: `def isPalindrome(s):
    return s == s[::-1]`,
            javascript: `function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++; right--;
    }
    return true;
}`
        },
        run: function* () {
            const str = "MADAM";
            let left = 0;
            let right = str.length - 1;
            let isPalindrome = true;

            const getIndices = (l: number, r: number, status: string) => {
                return str.split('').map((char, index) => ({
                    index,
                    highlight: index === l || index === r ? status : 'normal'
                }));
            };

            yield {
                type: 'string',
                value: str,
                indices: getIndices(left, right, 'active'),
                description: "Start checking from ends"
            };

            while (left < right) {
                yield {
                    type: 'string',
                    value: str,
                    indices: getIndices(left, right, 'active'),
                    description: `Comparing ${str[left]} and ${str[right]}`
                };

                if (str[left] !== str[right]) {
                    isPalindrome = false;
                    yield {
                        type: 'string',
                        value: str,
                        indices: getIndices(left, right, 'mismatch'),
                        description: "Mismatch found! Not a palindrome."
                    };
                    break;
                } else {
                    yield {
                        type: 'string',
                        value: str,
                        indices: getIndices(left, right, 'match'),
                        description: "Match! Move pointers inward."
                    };
                    left++;
                    right--;
                }
            }

            if (isPalindrome) {
                yield {
                    type: 'string',
                    value: str,
                    indices: str.split('').map((_, i) => ({ index: i, highlight: 'found' })),
                    description: "It is a Palindrome!"
                };
            }
        }
    },
    {
        id: "binary-tree",
        name: "Binary Tree",
        type: "data-structure",
        category: "data-structure",
        description: `### Definition
A Binary Tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.

### Traversals
- Inorder: Left, Root, Right
- Preorder: Root, Left, Right
- Postorder: Left, Right, Root

### Complexity Analysis
- Time Complexity: O(n) for traversals.
- Space Complexity: O(h) where h is height.`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)",
        code: {
            cpp: `struct Node {
    int data;
    Node* left;
    Node* right;
};
void inorder(Node* root) {
    if (!root) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}
void preorder(Node* root) {
    if (!root) return;
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}
void postorder(Node* root) {
    if (!root) return;
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}`,
            java: `class Node {
    int data;
    Node left, right;
}
void inorder(Node root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.data + " ");
    inorder(root.right);
}
void preorder(Node root) {
    if (root == null) return;
    System.out.print(root.data + " ");
    preorder(root.left);
    preorder(root.right);
}
void postorder(Node root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.data + " ");
}`,
            python: `class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=" ")
        inorder(root.right)

def preorder(root):
    if root:
        print(root.val, end=" ")
        preorder(root.left)
        preorder(root.right)

def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val, end=" ")`,
            javascript: `class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function inorder(root) {
    if (!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
function preorder(root) {
    if (!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
function postorder(root) {
    if (!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}`
        },
        run: function* (data?: any) {
            const nodes: TreeNode[] = [
                { id: '1', value: 1, leftId: '2', rightId: '3', x: 0, y: 0 },
                { id: '2', value: 2, leftId: '4', rightId: '5', x: -50, y: 60 },
                { id: '3', value: 3, leftId: '6', rightId: null, x: 50, y: 60 },
                { id: '4', value: 4, leftId: null, rightId: null, x: -75, y: 120 },
                { id: '5', value: 5, leftId: null, rightId: null, x: -25, y: 120 },
                { id: '6', value: 6, leftId: null, rightId: null, x: 25, y: 120 }
            ];

            yield {
                type: 'tree',
                nodes: nodes,
                rootId: '1',
                description: "Binary Tree Visualization"
            };

            if (data?.mode === 'inorder') {
                const visited: string[] = [];
                function* inorder(nodeId: string | null): Generator<any> {
                    if (!nodeId) return;
                    const node = nodes.find(n => n.id === nodeId)!;

                    yield* inorder(node.leftId);

                    yield {
                        type: 'tree',
                        nodes: nodes.map(n => ({ ...n, highlight: n.id === nodeId ? 'active' : visited.includes(n.id) ? 'visited' : 'none' })),
                        rootId: '1',
                        description: `Visiting ${node.value} (Inorder)`
                    };
                    visited.push(nodeId);

                    yield* inorder(node.rightId);
                }
                yield* inorder('1');
            } else if (data?.mode === 'preorder') {
                const visited: string[] = [];
                function* preorder(nodeId: string | null): Generator<any> {
                    if (!nodeId) return;
                    const node = nodes.find(n => n.id === nodeId)!;

                    yield {
                        type: 'tree',
                        nodes: nodes.map(n => ({ ...n, highlight: n.id === nodeId ? 'active' : visited.includes(n.id) ? 'visited' : 'none' })),
                        rootId: '1',
                        description: `Visiting ${node.value} (Preorder)`
                    };
                    visited.push(nodeId);

                    yield* preorder(node.leftId);
                    yield* preorder(node.rightId);
                }
                yield* preorder('1');
            } else if (data?.mode === 'postorder') {
                const visited: string[] = [];
                function* postorder(nodeId: string | null): Generator<any> {
                    if (!nodeId) return;
                    const node = nodes.find(n => n.id === nodeId)!;

                    yield* postorder(node.leftId);
                    yield* postorder(node.rightId);

                    yield {
                        type: 'tree',
                        nodes: nodes.map(n => ({ ...n, highlight: n.id === nodeId ? 'active' : visited.includes(n.id) ? 'visited' : 'none' })),
                        rootId: '1',
                        description: `Visiting ${node.value} (Postorder)`
                    };
                    visited.push(nodeId);
                }
                yield* postorder('1');
            }
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
                highlights.push({ row: r, col: c, color: 'active' });
                return { grid: board, highlights };
            };

            function isSafe(board: number[][], row: number, col: number) {
                for (let i = 0; i < col; i++)
                    if (board[row][i]) return false;
                for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
                    if (board[i][j]) return false;
                for (let i = row, j = col; j >= 0 && i < N; i++, j--)
                    if (board[i][j]) return false;
                return true;
            }

            function* solve(col: number): Generator<any> {
                if (col >= N) return true;

                for (let i = 0; i < N; i++) {
                    if (isSafe(board, i, col)) {
                        board[i][col] = 1;
                        const { grid, highlights } = formatGrid(i, col);
                        yield {
                            type: 'grid',
                            rows: N,
                            cols: N,
                            grid: grid.map(r => [...r]),
                            highlights: highlights,
                            description: `Placed Queen at (${i}, ${col})`
                        };

                        if (yield* solve(col + 1)) return true;

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

            yield* solve(0);
            yield {
                type: 'grid',
                rows: N,
                cols: N,
                grid: board,
                highlights: [],
                description: "Solution Found!"
            };
        }
    },
    {
        id: "rat-in-maze",
        name: "Rat in a Maze",
        type: "data-structure", // Using grid
        category: "popular",
        description: `### Definition
Find a path from source (0,0) to destination (N-1, N-1) in a maze.

### Complexity Analysis
- Time Complexity: O(2^(N^2)).
- Space Complexity: O(N^2).`,
        timeComplexity: "O(2^(N^2))",
        spaceComplexity: "O(N^2)",
        code: {
            cpp: `bool solve(int r, int c) {
    if (r == N-1 && c == N-1) return true;
    if (isSafe(r, c)) {
        sol[r][c] = 1;
        if (solve(r+1, c)) return true;
        if (solve(r, c+1)) return true;
        sol[r][c] = 0; // Backtrack
        return false;
    }
    return false;
}`,
            java: `boolean solve(int r, int c) {
    if (r == N-1 && c == N-1) return true;
    if (isSafe(r, c)) {
        sol[r][c] = 1;
        if (solve(r+1, c)) return true;
        if (solve(r, c+1)) return true;
        sol[r][c] = 0; // Backtrack
        return false;
    }
    return false;
}`,
            python: `def solve(r, c):
    if r == N-1 and c == N-1: return True
    if is_safe(r, c):
        sol[r][c] = 1
        if solve(r+1, c): return True
        if solve(r, c+1): return True
        sol[r][c] = 0 # Backtrack
        return False
    return False`,
            javascript: `function solve(r, c) {
    if (r === N-1 && c === N-1) return true;
    if (isSafe(r, c)) {
        sol[r][c] = 1;
        if (solve(r+1, c)) return true;
        if (solve(r, c+1)) return true;
        sol[r][c] = 0; // Backtrack
        return false;
    }
    return false;
}`
        },
        run: function* () {
            const maze = [
                [1, 0, 0, 0],
                [1, 1, 0, 1],
                [0, 1, 0, 0],
                [1, 1, 1, 1]
            ];
            const n = maze.length;
            const sol = Array(n).fill(0).map(() => Array(n).fill(0));

            const formatGrid = (currentR: number, currentC: number) => {
                const displayGrid = maze.map((row, r) => row.map((val, c) => val === 0 ? 'W' : ' '));
                const highlights: { row: number; col: number; color: 'active' | 'match' | 'mismatch' | 'none' }[] = [];

                for (let r = 0; r < n; r++) {
                    for (let c = 0; c < n; c++) {
                        if (sol[r][c] === 1) highlights.push({ row: r, col: c, color: 'match' });
                        else if (maze[r][c] === 0) highlights.push({ row: r, col: c, color: 'mismatch' });
                    }
                }
                highlights.push({ row: currentR, col: currentC, color: 'active' });
                return { grid: displayGrid, highlights };
            };

            function* solve(r: number, c: number): Generator<any> {
                if (r === n - 1 && c === n - 1 && maze[r][c] === 1) {
                    sol[r][c] = 1;
                    const { grid, highlights } = formatGrid(r, c);
                    yield {
                        type: 'grid',
                        rows: n,
                        cols: n,
                        grid: grid,
                        highlights: highlights,
                        description: "Destination Reached!"
                    };
                    return true;
                }

                if (r >= 0 && r < n && c >= 0 && c < n && maze[r][c] === 1 && sol[r][c] === 0) {
                    sol[r][c] = 1;
                    const { grid, highlights } = formatGrid(r, c);
                    yield {
                        type: 'grid',
                        rows: n,
                        cols: n,
                        grid: grid,
                        highlights: highlights,
                        description: `Moving to (${r}, ${c})`
                    };

                    if (yield* solve(r + 1, c)) return true;
                    if (yield* solve(r, c + 1)) return true;

                    sol[r][c] = 0; // Backtrack
                    const { grid: grid2, highlights: highlights2 } = formatGrid(r, c);
                    yield {
                        type: 'grid',
                        rows: n,
                        cols: n,
                        grid: grid2,
                        highlights: highlights2,
                        description: `Backtracking from (${r}, ${c})`
                    };
                    return false;
                }
                return false;
            }

            yield* solve(0, 0);
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
    },
    {
        id: "flood-fill",
        name: "Flood Fill",
        type: "data-structure",
        category: "popular",
        description: `### Definition
Flood fill, also called seed fill, is an algorithm that determines and connects the area that is connected to a given node in a multi-dimensional array.

### Complexity Analysis
- Time Complexity: O(N*M).
- Space Complexity: O(N*M).`,
        timeComplexity: "O(N*M)",
        spaceComplexity: "O(N*M)",
        code: {
            cpp: `void floodFill(int r, int c, int newColor) {
    if (r<0 || r>=rows || c<0 || c>=cols) return;
    if (image[r][c] != startColor) return;
    image[r][c] = newColor;
    floodFill(r-1, c, newColor);
    floodFill(r+1, c, newColor);
    floodFill(r, c-1, newColor);
    floodFill(r, c+1, newColor);
}`,
            java: `void floodFill(int r, int c, int newColor) {
    if (r<0 || r>=rows || c<0 || c>=cols) return;
    if (image[r][c] != startColor) return;
    image[r][c] = newColor;
    floodFill(r-1, c, newColor);
    floodFill(r+1, c, newColor);
    floodFill(r, c-1, newColor);
    floodFill(r, c+1, newColor);
}`,
            python: `def flood_fill(r, c, new_color):
    if r<0 or r>=rows or c<0 or c>=cols: return
    if image[r][c] != start_color: return
    image[r][c] = new_color
    flood_fill(r-1, c, new_color)
    flood_fill(r+1, c, new_color)
    flood_fill(r, c-1, new_color)
    flood_fill(r, c+1, new_color)`,
            javascript: `function floodFill(r, c, newColor) {
    if (r<0 || r>=rows || c<0 || c>=cols) return;
    if (image[r][c] !== startColor) return;
    image[r][c] = newColor;
    floodFill(r-1, c, newColor);
    floodFill(r+1, c, newColor);
    floodFill(r, c-1, newColor);
    floodFill(r, c+1, newColor);
}`
        },
        run: function* () {
            const image = [
                [1, 1, 1],
                [1, 1, 0],
                [1, 0, 1]
            ];
            const sr = 1, sc = 1, newColor = 2;
            const rows = image.length;
            const cols = image[0].length;
            const startColor = image[sr][sc];

            const formatGrid = (r: number, c: number) => {
                const highlights: { row: number; col: number; color: 'active' | 'match' | 'mismatch' | 'none' }[] = [];
                highlights.push({ row: r, col: c, color: 'active' });
                return { grid: image, highlights };
            };

            if (startColor === newColor) return;

            function* dfs(r: number, c: number): Generator<any> {
                if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== startColor) {
                    return;
                }

                image[r][c] = newColor;
                const { grid, highlights } = formatGrid(r, c);
                yield {
                    type: 'grid',
                    rows: rows,
                    cols: cols,
                    grid: grid.map(row => [...row]),
                    highlights: highlights,
                    description: `Filling (${r}, ${c}) with color ${newColor}`
                };

                yield* dfs(r - 1, c);
                yield* dfs(r + 1, c);
                yield* dfs(r, c - 1);
                yield* dfs(r, c + 1);
            }

            yield* dfs(sr, sc);
            yield {
                type: 'grid',
                rows: rows,
                cols: cols,
                grid: image,
                highlights: [],
                description: "Flood Fill Complete!"
            };
        }
    }
];


