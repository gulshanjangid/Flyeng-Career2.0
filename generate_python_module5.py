
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_5_lessons = [
    {
        "title": "5.1 Functional Programming: Map, Filter, Lambda",
        "emoji": "λ",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Write anonymous functions with `lambda`.</li>
                <li>Transform data streams with `map` and `filter`.</li>
                <li>Understand why List Comprehensions are often preferred.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>
                <strong>Functional Programming:</strong> Treating computation as the evaluation of mathematical functions, avoiding state changes.
                <br><strong>Lambda:</strong> A single-line, nameless function.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
nums = [1, 2, 3, 4, 5]

# Lambda Format: lambda inputs: output
square = lambda x: x * x

# 1. Map (Apply function to all)
# [1, 4, 9, 16, 25]
squares = list(map(lambda x: x*x, nums))

# 2. Filter (Keep if True)
# [2, 4]
evens = list(filter(lambda x: x%2 == 0, nums))

# 3. Reduce (Aggregate)
from functools import reduce
# 1*2*3*4*5 = 120
product = reduce(lambda acc, x: acc * x, nums)
""", filename="functional.py")}
        </div>
        """
    },
    {
        "title": "5.2 Decorators: The Magic Wrapper",
        "emoji": "🪄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand Functions as First-Class Citizens.</li>
                <li>Create Decorators to modify behavior (`@decorator`).</li>
                <li>Use `functools.wraps` to preserve metadata.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory</h3>
            <p>A decorator is a function that takes a function and returns a <em>new</em> function with added capabilities (logging, timing, auth check).</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
import time
from functools import wraps

def timer(func):
    @wraps(func) # Preserves func name/docstring
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

@timer
def heavy_compute():
    # Simulates work
    time.sleep(0.5) 
    print("Done")

heavy_compute()
# Output:
# Done
# heavy_compute took 0.5001s
""", filename="decorators.py")}
        </div>
        """
    },
    {
        "title": "5.3 Generators: Memory Efficient Streams",
        "emoji": "⚡",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `yield` to create Generators.</li>
                <li>Understand Lazy Evaluation (Compute on demand).</li>
                <li>Process infinite streams without crashing RAM.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. List vs Generator</h3>
            <table class="w-full text-left text-sm text-slate-300 border-collapse border border-slate-700 mb-6">
                <thead><tr class="bg-slate-800 text-white"><th class="p-2">Feature</th><th class="p-2">List</th><th class="p-2">Generator</th></tr></thead>
                <tbody>
                    <tr class="border-b border-slate-700"><td class="p-2">Keyword</td><td class="p-2"><code>return</code></td><td class="p-2"><code>yield</code></td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Memory</td><td class="p-2">Entire list in RAM</td><td class="p-2">One item at a time</td></tr>
                    <tr class="border-b border-slate-700"><td class="p-2">Speed</td><td class="p-2">Fast iteration</td><td class="p-2">Slight overhead</td></tr>
                </tbody>
            </table>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# List Approach (RAM Intensive)
def get_squares_list(n):
    res = []
    for i in range(n):
        res.append(i*i)
    return res

# Generator Approach (RAM Efficient)
def get_squares_gen(n):
    for i in range(n):
        yield i*i # Pauses execution here

# Usage
gen = get_squares_gen(1000000)
print(next(gen)) # 0
print(next(gen)) # 1
# loop consumes rest...
""", filename="generators.py")}
        </div>
        """
    },
    {
        "title": "5.4 Iterators & Iterables: Under the Hood",
        "emoji": "🔄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Make custom classes iterable (`__iter__`, `__next__`).</li>
                <li>Understand the difference between Iterable and Iterator.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Protocol</h3>
            <p>
                <strong>Iterable:</strong> Has `__iter__`. Returns an Iterator.
                <br><strong>Iterator:</strong> Has `__next__`. Returns data or raises `StopIteration`.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Custom Range Class</h3>
            {code_block("""
class MyRange:
    def __init__(self, start, end):
        self.current = start
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.current >= self.end:
            raise StopIteration
        val = self.current
        self.current += 1
        return val

# Works in for-loop
for i in MyRange(0, 3):
    print(i) # 0, 1, 2
""", filename="iterator.py")}
        </div>
        """
    },
    {
        "title": "5.5 Context Managers: Custom 'with' Blocks",
        "emoji": "🚪",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Create classes with `__enter__` and `__exit__`.</li>
                <li>Use `contextlib.contextmanager` decorator for simple resources.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Use Cases</h3>
            <p>Database connections, File locks, Timer blocks, Temporary directories.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Decorator Approach (Easy)</h3>
            {code_block("""
from contextlib import contextmanager

@contextmanager
def file_manager(filename, mode):
    f = open(filename, mode)
    try:
        yield f
    finally:
        f.close()
        print("File closed automatically")

with file_manager("test.txt", "w") as f:
    f.write("Hello")
""", filename="ctx_mgr.py")}
        </div>
        """
    },
    {
        "title": "5.6 Packing & Unpacking: *Args & **Kwargs",
        "emoji": "🎁",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Write flexible functions accepting any number of arguments.</li>
                <li>Unpack lists/dicts into function calls.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
# 1. Flexible Function
def log(*args, **kwargs):
    print(f"Positional: {args}")
    print(f"Keywords: {kwargs}")

log("Error", 500, user="admin", id=1)
# Positional: ('Error', 500)
# Keywords: {'user': 'admin', 'id': 1}

# 2. Unpacking into call
nums = [1, 2, 3]
print(*nums) # print(1, 2, 3)

data = {"sep": "-", "end": "!"}
print(1, 2, **data) 
# print(1, 2, sep="-", end="!") -> 1-2!
""", filename="args_kwargs.py")}
        </div>
        """
    },
    {
        "title": "5.7 Type Hinting: Modern Python",
        "emoji": "🏷️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `typing` module (`List`, `Dict`, `Optional`).</li>
                <li>Static Analysis concepts (mypy).</li>
                <li>Improve code readability and IDE autocompletion.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Before vs After</h3>
            {code_block("""
# Ambiguous
def process(items):
    return items[0]

# Typed (Python 3.9+)
def process_modern(items: list[str]) -> str:
    return items[0]

# Complex Types
from typing import Optional, Union

def find_user(id: int) -> Optional[dict]:
    if id == 1:
        return {"name": "Alice"}
    return None
""", filename="typing_demo.py")}
        </div>
        """
    },
    {
        "title": "5.8 Mini Project: Custom Analytics Pipeline",
        "emoji": "📈",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Build a log processing pipeline using Generators (to handle huge files) and Decorators (to time steps).</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
import time
import random

# Decorator for timing
def step_timer(func):
    def wrapper(*args, **kwargs):
        t1 = time.time()
        res = func(*args, **kwargs)
        print(f"Step '{func.__name__}' done in {time.time()-t1:.4f}s")
        return res
    return wrapper

# Generator 1: Read lines (Mock)
def log_reader(n):
    print("Reading logs...")
    for i in range(n):
        # Format: "IP,Status,Latency"
        yield f"192.168.1.{i%255},200,{random.randint(10, 500)}"

# Generator 2: Parse
def parse_logs(lines):
    for line in lines:
        parts = line.split(",")
        yield {
            "ip": parts[0],
            "status": int(parts[1]),
            "latency": int(parts[2])
        }

# Logic: Filter high latency
@step_timer
def run_pipeline(n):
    raw_stream = log_reader(n)
    parsed_stream = parse_logs(raw_stream)
    
    # Filter ONLY high latency (functional style)
    slow_requests = (r for r in parsed_stream if r['latency'] > 200)
    
    count = 0
    # Consumes the stream here
    for _ in slow_requests:
        count += 1
    return count

print(f"Slow requests found: {run_pipeline(1000000)}")
# Processes 1M simulated logs without RAM spike!
""", filename="pipeline.py")}
        </div>
        """
    }
]
