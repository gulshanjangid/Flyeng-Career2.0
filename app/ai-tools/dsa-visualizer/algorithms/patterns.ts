import { Algorithm, VisualizationState, LinkedListNode } from './types';

export const patternAlgorithms: Algorithm[] = [
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
        id: "fast-slow-pointers",
        name: "Fast & Slow Pointers",
        type: "data-structure",
        category: "popular",
        description: `### Definition
The Fast & Slow Pointers technique (Tortoise and Hare) uses two pointers moving at different speeds to detect cycles or find the middle of a linked list.

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
            const nodes: LinkedListNode[] = [
                { id: '1', value: 1, nextId: '2' },
                { id: '2', value: 2, nextId: '3' },
                { id: '3', value: 3, nextId: '4' },
                { id: '4', value: 4, nextId: '5' },
                { id: '5', value: 5, nextId: '6' },
                { id: '6', value: 6, nextId: '3' },
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
                const slowNode = nodes.find(n => n.id === slow);
                const nextSlow = slowNode?.nextId;

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
    }
];
