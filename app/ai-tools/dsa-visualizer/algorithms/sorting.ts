import { Algorithm, VisualizationState } from './types';

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
                    activeIndices: [start, end], 
                    swapIndices: [],
                    sortedIndices: [],
                    description: `Merging range [${start}, ${mid}] and [${mid + 1}, ${end}]`
                };

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

            const getTreeNodes = (array: number[], activeIndices: number[] = [], sortedIndices: number[] = []) => {
                const nodes = [];
                for (let i = 0; i < array.length; i++) {
                    const level = Math.floor(Math.log2(i + 1));
                    const levelStartIndex = Math.pow(2, level) - 1;
                    const itemsInLevel = Math.pow(2, level);
                    const positionInLevel = i - levelStartIndex;
                    const x = (positionInLevel + 0.5) * (800 / itemsInLevel) - 400; 
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

            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                yield* heapify(n, i);
            }

            yield {
                type: 'heap',
                array: [...arr],
                tree: { nodes: getTreeNodes(arr) },
                description: "Max Heap Built"
            };

            for (let i = n - 1; i > 0; i--) {
                [arr[0], arr[i]] = [arr[i], arr[0]];
                yield {
                    type: 'heap',
                    array: [...arr],
                    tree: { nodes: getTreeNodes(arr, [0, i], Array.from({ length: n - i }, (_, k) => n - 1 - k)) },
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
    }
];
