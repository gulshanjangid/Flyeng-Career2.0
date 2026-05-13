import { Algorithm } from './types';

export const searchingAlgorithms: Algorithm[] = [
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
    }
];
