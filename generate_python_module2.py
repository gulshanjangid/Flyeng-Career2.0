
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_2_lessons = [
    {
        "title": "2.1 Strings: The Interview Bread & Butter",
        "emoji": "🧵",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Master String Immutability and why it matters for memory.</li>
                <li>Perform complex Slicing `[start:stop:step]`.</li>
                <li>Utilize essential methods: `split`, `join`, `strip`, `replace`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: Strings are Tuples of Characters</h3>
            <p>
                In Python, strings are <strong>immutable</strong>. You cannot change a character in place.
                <br><code>s[0] = 'a'</code> throws a TypeError.
                <br>To "change" a string, you create a <em>new</em> string. This is crucial for understanding time complexity (concatenation loops are O(N^2) if done poorly).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
text = "  Python Programming  "

# 1. Cleaning
clean = text.strip().lower() # "python programming"

# 2. Slicing [start : stop : step]
print(clean[0:6])   # "python"
print(clean[::-1])  # "gnimmargorp nohtyp" (Reverse - Interview Trick!)

# 3. Splitting & Joining (The most common op)
words = clean.split() # ['python', 'programming']
csv_row = ",".join(words) # "python,programming"
""", filename="string_ops.py")}

            <h3 class="text-2xl font-bold text-white mb-4">4. Common Mistake: String Concatenation</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h5 class="font-bold text-red-400">Slow (O(N^2))</h5>
                    {code_block("""
res = ""
for w in words:
    res += w + " "
""", filename="slow.py")}
                </div>
                <div>
                    <h5 class="font-bold text-green-400">Fast (O(N))</h5>
                    {code_block("""
# Use list join
res = " ".join(words)
""", filename="fast.py")}
                </div>
            </div>
        </div>
        """
    },
    {
        "title": "2.2 Lists: Dynamic Arrays",
        "emoji": "📜",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand List internals (Dynamic Array mechanics).</li>
                <li>Master List Comprehensions (The Pythonic signature).</li>
                <li>Know the cost of operations: `pop(0)` vs `pop()`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: Dynamic Arrays</h3>
            <p>
                Python lists are NOT linked lists. They are C arrays (contiguous memory) that resize automatically.
                <br><strong>Append:</strong> O(1) amortized (fast).
                <br><strong>Insert/Delete at start:</strong> O(N) (slow - everything shifts).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            
            <h4 class="font-bold text-white mt-4">List Comprehensions</h4>
            {code_block("""
nums = [1, 2, 3, 4, 5]

# Goal: Square even numbers
# Old Way
res = []
for n in nums:
    if n % 2 == 0:
        res.append(n*n)

# Pythonic Way
# [expression for item in list if conditional]
squares = [n*n for n in nums if n % 2 == 0] 
print(squares) # [4, 16]
""", filename="comprehension.py")}

            <h3 class="text-2xl font-bold text-white mb-4">4. Visualizing Methods</h3>
            {code_block("""
stack = [10, 20]
stack.append(30) # [10, 20, 30] - O(1)
top = stack.pop() # 30 - O(1)

queue_attempt = [10, 20]
# BAD PERFORMANCE for Queues
front = queue_attempt.pop(0) # 10 - O(N) Shift!
# Use collections.deque for Queues
""", filename="list_perf.py")}
        </div>
        """
    },
    {
        "title": "2.3 Tuples, Sets, and Frozensets",
        "emoji": "🧊",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Tuples: Immutable lists (Keys for dicts, Return values).</li>
                <li>Sets: O(1) lookups and Mathematical operations.</li>
                <li>Frozensets: Use a set as a key in a dict.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Comparison Table</h3>
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-6">
                <thead><tr class="bg-slate-800 text-white"><th class="p-2">Type</th><th class="p-2">Mutable?</th><th class="p-2">Ordered?</th><th class="p-2">Duplicates?</th><th class="p-2">Use Case</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-2">List</td><td class="p-2">Yes</td><td class="p-2">Yes</td><td class="p-2">Yes</td><td class="p-2">General purpose</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Tuple</td><td class="p-2">No</td><td class="p-2">Yes</td><td class="p-2">Yes</td><td class="p-2">Fixed records, dict keys</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Set</td><td class="p-2">Yes</td><td class="p-2">No</td><td class="p-2">No</td><td class="p-2">Unique items, O(1) check</td></tr>
                </tbody>
            </table>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# --- Set Logic (Venn Diagrams) ---
devs = {"Alice", "Bob"}
managers = {"Bob", "Charlie"}

print(devs.intersection(managers)) # {'Bob'}
print(devs.difference(managers))   # {'Alice'}
print(devs.union(managers))        # {'Alice', 'Bob', 'Charlie'}

# --- Deduplication Trick ---
ids = [1, 2, 2, 3, 3, 3]
unique_ids = list(set(ids)) # [1, 2, 3]
""", filename="sets.py")}
        </div>
        """
    },
    {
        "title": "2.4 Dictionaries: Hash Maps",
        "emoji": "📖",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand Hashing and Key constraints (must be immutable/hashable).</li>
                <li>Master `get()`, `setdefault()`, and iteration patterns.</li>
                <li>Use Dictionary Comprehensions.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
user = {"id": 1, "name": "Alice"}

# 1. Safe Access
# print(user["age"]) -> KeyError
print(user.get("age", 18)) # Returns 18 if 'age' missing

# 2. Iteration (Crucial for Interviews)
for k, v in user.items():
    print(f"{k} -> {v}")

# 3. Dict Comprehension
# Swap keys and values
codes = {"A": 1, "B": 2}
inverted = {v: k for k, v in codes.items()}
# {1: 'A', 2: 'B'}
""", filename="dicts.py")}

            <h3 class="text-2xl font-bold text-white mb-4">4. Advanced: Defaultdict</h3>
            <p>Avoids the "check if key exists" initialization boilerplate.</p>
            {code_block("""
from collections import default_dict

# Grouping words by first letter
words = ["apple", "apricot", "banana"]
grouped = default_dict(list)

for w in words:
    grouped[w[0]].append(w)
    
# {'a': ['apple', 'apricot'], 'b': ['banana']}
""", filename="grouping.py")}
        </div>
        """
    },
    {
        "title": "2.5 Nested Structures",
        "emoji": "🎁",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Navigate 'JSON-like' structures (Lists of Dicts).</li>
                <li>Handle Deep Copies vs Shallow Copies.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Worked Example: API Response Parse</h3>
            {code_block("""
data = {
    "users": [
        {"id": 1, "roles": ["admin", "editor"]},
        {"id": 2, "roles": ["viewer"]}
    ],
    "meta": {"page": 1}
}

# Goal: Get all roles of user 1
target_roles = []
for u in data["users"]:
    if u["id"] == 1:
        target_roles = u["roles"]
        break

print(target_roles) # ['admin', 'editor']
""", filename="nesting.py")}

            <h3 class="text-2xl font-bold text-white mb-4">3. The Copy Trap</h3>
            {code_block("""
import copy

original = [[1, 2], [3, 4]]
shallow = original.copy() 

# Modifying inner list AFFECTS shallow copy
original[0][0] = 999 
print(shallow[0][0]) # 999 !!

# Use deepcopy for nested structures
deep = copy.deepcopy(original)
""", filename="copy_trap.py")}
        </div>
        """
    },
    {
        "title": "2.6 Solving Classic Problems with Built-ins",
        "emoji": "🧩",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Replace 10 lines of loop code with 1 line of `collections.Counter`.</li>
                <li>Solve "Two Sum" using a dictionary (O(N)).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Power of Counter</h3>
            {code_block("""
from collections import Counter

s = "leelee"
counts = Counter(s)
# Counter({'e': 4, 'l': 2})

# Top K Frequent elements
print(counts.most_common(1)) # [('e', 4)]
""", filename="counter.py")}

            <h3 class="text-2xl font-bold text-white mb-4">3. Two Sum (Interview Classic)</h3>
            <p><strong>Problem:</strong> Find indices of two numbers adding to Target.</p>
            {code_block("""
def two_sum(nums, target):
    seen = {} # map val -> index
    
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9)) # [0, 1]
""", filename="two_sum_opt.py")}
        </div>
        """
    },
    {
        "title": "2.7 Introduction to Time Complexity",
        "emoji": "⏱️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand Big O notation in the context of Python built-ins.</li>
                <li>Memorize complexity of common operations.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Python Complexity Cheatsheet</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead><tr class="border-b border-indigo-500"><th class="p-2">Operation</th><th class="p-2">Structure</th><th class="p-2">Complexity</th><th class="p-2">Note</th></tr></thead>
                    <tbody class="text-sm">
                        <tr class="bg-slate-900/50"><td class="p-2"><code>x in s</code></td><td class="p-2">List</td><td class="p-2 text-red-400">O(N)</td><td class="p-2">Linear Search</td></tr>
                        <tr><td class="p-2"><code>x in s</code></td><td class="p-2">Set/Dict</td><td class="p-2 text-green-400">O(1)</td><td class="p-2">Hash Lookup</td></tr>
                        <tr class="bg-slate-900/50"><td class="p-2"><code>sort()</code></td><td class="p-2">List</td><td class="p-2 text-yellow-400">O(N log N)</td><td class="p-2">Timsort</td></tr>
                        <tr><td class="p-2"><code>len(s)</code></td><td class="p-2">Any</td><td class="p-2 text-green-400">O(1)</td><td class="p-2">Cached attribute</td></tr>
                        <tr class="bg-slate-900/50"><td class="p-2"><code>pop(0)</code></td><td class="p-2">List</td><td class="p-2 text-red-400">O(N)</td><td class="p-2">Shift all elements</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">3. Why it matters?</h3>
            {code_block("""
# Finding common items

list1 = range(100000)
list2 = range(100000)

# BAD: O(N*M) - Quadratic
# if x in list2 -> scans list2 every time
common = [x for x in list1 if x in list2] 

# GOOD: O(N+M) - Linear
set2 = set(list2) # O(M)
# if x in set2 -> Instant O(1)
common = [x for x in list1 if x in set2] 
""", filename="optimization.py")}
        </div>
        """
    },
    {
        "title": "2.8 Mini Problem Set: Placement-Style",
        "emoji": "🏋️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">Placement Challenge</h3>
            <p>Try solving these before looking at the code. These are Day 1 Placement Questions.</p>

            <h4 class="font-bold text-white mt-4">1. Valid Anagram</h4>
            <p class="text-sm text-slate-400">Given two strings s and t, return true if t is an anagram of s.</p>
            {code_block("""
def is_anagram(s, t):
    # Pythonic One-Liner (O(N) space/time)
    return Counter(s) == Counter(t) 

    # Sorting approach (O(N log N) time, O(1) space)
    # return sorted(s) == sorted(t)
""", filename="anagram.py")}

            <h4 class="font-bold text-white mt-4">2. Group Anagrams</h4>
            <p class="text-sm text-slate-400">Group ["eat", "tea", "tan", "ate", "nat", "bat"]</p>
            {code_block("""
def group_anagrams(strs):
    groups = default_dict(list)
    
    for s in strs:
        # Key must be immutable (tuple)
        key = tuple(sorted(s)) 
        groups[key].append(s)
        
    return list(groups.values())
""", filename="group_anagrams.py")}
        </div>
        """
    }
]
