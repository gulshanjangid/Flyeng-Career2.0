import { Algorithm, VisualizationState, TreeNode, LinkedListNode, GraphNode, GraphEdge } from './types';

export const dataStructureAlgorithms: Algorithm[] = [
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

            // Add nodes
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

            // Traverse
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
        }
    },
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
            let idCounter = 0;

            const updateTree = () => {
                const newNodes: TreeNode[] = [];
                if (arr.length === 0) return newNodes;

                for (let i = 0; i < arr.length; i++) {
                    const x = 400 + (i % 2 === 0 ? -1 : 1) * (200 / (Math.floor(Math.log2(i + 1)) + 1));
                    newNodes.push({
                        id: `node-${i}`,
                        value: arr[i],
                        leftId: (2 * i + 1 < arr.length) ? `node-${2 * i + 1}` : null,
                        rightId: (2 * i + 2 < arr.length) ? `node-${2 * i + 2}` : null,
                        x: 0, y: 0
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
    }
];
