
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_6_lessons = [
    {
        "title": "6.1 Time & Space Complexity Analysis (Deep Dive)",
        "emoji": "⏱️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Calculate Big O for Recursive and Iterative solutions.</li>
                <li>Understand "Amortized Analysis" (Why appending to a list is O(1)).</li>
                <li>Identify O(1), O(log N), O(N), O(N log N), O(2^N).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Visual Guide to Growth</h3>
            <p>
                <strong>O(1):</strong> Hash Map Lookup.<br>
                <strong>O(log N):</strong> Binary Search.<br>
                <strong>O(N):</strong> Linear Scan.<br>
                <strong>O(N log N):</strong> Sorting (Timsort/Merge Sort).<br>
                <strong>O(2^N):</strong> Recursion without Memoization (Fibonacci).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# O(N) Space & Time
def factorial(n):
    if n == 0: return 1
    return n * factorial(n-1)

# O(1) Space, O(N) Time
def factorial_iter(n):
    res = 1
    for i in range(1, n+1):
        res *= i
    return res
""", filename="complexity.py")}
        </div>
        """
    },
    {
        "title": "6.2 Sliding Window Technique",
        "emoji": "🪟",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Recognize problems solvable with Sliding Window (Subarrays/Substrings).</li>
                <li>Implement Fixed Size vs Variable Size windows.</li>
                <li>Reduce O(N^2) brute force to O(N).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>Instead of recalculating the entire subarray sum every time, just subtract the element leaving the window and add the element entering it.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Worked Example: Max Sum Subarray of Size K</h3>
            {code_block("""
def max_sum_subarray(nums, k):
    max_sum = 0
    window_sum = sum(nums[:k])
    max_sum = window_sum
    
    # Slide
    for i in range(len(nums) - k):
        # Subtract outgoing, Add incoming
        window_sum = window_sum - nums[i] + nums[i+k]
        max_sum = max(max_sum, window_sum)
        
    return max_sum

print(max_sum_subarray([2, 1, 5, 1, 3, 2], 3)) # 9 (5+1+3)
""", filename="sliding_window.py")}
        </div>
        """
    },
    {
        "title": "6.3 Two Pointers Technique",
        "emoji": "👉",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Solve "Sorted Array" problems efficiently.</li>
                <li>Implement "Fast & Slow" pointers (Floyd's Cycle Detection).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
# Problem: Check if palindrome (ignoring non-alphanumeric)
def is_palindrome(s):
    l, r = 0, len(s) - 1
    
    while l < r:
        if not s[l].isalnum():
            l += 1
            continue
        if not s[r].isalnum():
            r -= 1
            continue
        if s[l].lower() != s[r].lower():
            return False
        l += 1
        r -= 1
    return True
""", filename="two_pointers.py")}
        </div>
        """
    },
    {
        "title": "6.4 Python's heapq (Priority Queues)",
        "emoji": "🔝",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `heapq` for O(log N) push/pop.</li>
                <li>Solve "Top K Elements" problems.</li>
                <li>Implement Min-Heap vs Max-Heap (Python defaults to Min).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Top K Pattern</h3>
            {code_block("""
import heapq

nums = [3, 2, 1, 5, 6, 4]
k = 2

# Efficient way to find Kth largest
# Maintain a min-heap of size K
min_heap = []

for num in nums:
    heapq.heappush(min_heap, num)
    if len(min_heap) > k:
        heapq.heappop(min_heap)
        
print(min_heap[0]) # The Kth largest element (4)
""", filename="heap_demo.py")}
        </div>
        """
    },
    {
        "title": "6.5 Searching & Sorting (Bisect Module)",
        "emoji": "🔎",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `bisect` module for binary search (Don't reinvent the wheel).</li>
                <li>Master Custom Sorting with `key=lambda x: ...`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Power of Bisect</h3>
            {code_block("""
import bisect

sorted_scores = [10, 20, 30, 40, 50]

# Where to insert 25 to keep it sorted?
idx = bisect.bisect_left(sorted_scores, 25)
print(idx) # 2 (between 20 and 30)

bisect.insort(sorted_scores, 25)
print(sorted_scores) # [10, 20, 25, 30, 40, 50]
""", filename="binary_search.py")}

            <h3 class="text-2xl font-bold text-white mb-4">3. Complex Sorting</h3>
            {code_block("""
data = ["a-1", "b-10", "c-3"]
# Sort by the number after dash
sorted_data = sorted(data, key=lambda x: int(x.split("-")[1]))
# ['a-1', 'c-3', 'b-10']
""", filename="sort_key.py")}
        </div>
        """
    },
    {
        "title": "6.6 Recursion & Memoization",
        "emoji": "🧠",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand the Base Case and Recursive Step.</li>
                <li>Use `@lru_cache` to optimize recursion (Dynamic Programming made easy).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Optimization Magic</h3>
            {code_block("""
from functools import lru_cache

# Without cache: O(2^N) - Terrible for N=40
# With cache: O(N) - Instant
@lru_cache(maxsize=None)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

print(fib(50)) # 12586269025
""", filename="memoization.py")}
        </div>
        """
    },
    {
        "title": "6.7 Linked Lists & Trees (Python Classes)",
        "emoji": "🌳",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Implement Node classes for Lists and Trees.</li>
                <li>Perform BFS/DFS traversals.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Standard Implementations</h3>
            {code_block("""
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# DFS Traversal (Preorder)
def dfs(node):
    if not node: return
    print(node.val)
    dfs(node.left)
    dfs(node.right)
""", filename="ds_nodes.py")}
        </div>
        """
    },
    {
        "title": "6.8 Mock Interview: Valid Parentheses",
        "emoji": "✅",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Problem</h3>
            <p>Given a string containing '(', ')', '{{', '}}', '[' and ']', determine if the input string is valid.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution (Stack)</h3>
            {code_block("""
def is_valid(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    
    for char in s:
        if char in mapping:
            # Closing bracket. Pop check.
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            # Opening bracket. Push.
            stack.append(char)
            
    return not stack # True if stack is empty

print(is_valid("()[]{}")) # True
print(is_valid("([)]"))   # False
""", filename="valid_parens.py")}
        </div>
        """
    }
]
