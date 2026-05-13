
import { Algorithm, VisualizationState } from "./types";

export const sortingAlgorithms: Algorithm[] = [
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
    }
];
