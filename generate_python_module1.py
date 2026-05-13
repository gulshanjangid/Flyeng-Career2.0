def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_1_lessons = [
    {
        "title": "1.1 Why Python is a Top Placement Skill in 2026",
        "emoji": "🚀",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand Python's dominance in Backend, AI, and Scripting roles in 2026.</li>
                <li>Identify key companies and job roles that primarily use Python.</li>
                <li>Recognize the "2026 Python Stack" (FastAPI, Pydantic, PyTorch) vs legacy stacks.</li>
                <li>Articulate why "Python is slow" is no longer a valid blocker for modern engineering.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: The "Universal" Language</h3>
            <p>
                In 2026, Python is not just a scripting language; it is the <strong>operating system of the AI era</strong>. 
                While languages like C++ or Rust win on raw CPU cycles, Python wins on <em>developer cycles</em> and ecosystem integration.
            </p>
            <div class="p-4 bg-slate-900 rounded-xl border-l-4 border-blue-500">
                <h4 class="font-bold text-white">The "Glue" Concept</h4>
                <p class="mt-2">Implementing a Neural Network in C from scratch takes months. In Python, it takes lines. 
                Python handles the high-level logic, while libraries like PyTorch call optimized C++/CUDA code under the hood. 
                You get the speed of C with the ease of English.</p>
            </div>
            <p class="mt-4">
                <strong>Placement Perspective:</strong> Recruiters don't just look for "Python". They look for:
                <br>1. <strong>Backend Proficiency:</strong> (FastAPI, AsyncIO) - Building scalable APIs.
                <br>2. <strong>Data/AI Literacy:</strong> (Pandas, Simple ML) - Handling data-driven features.
                <br>3. <strong>Problem Solving:</strong> Using Python's concise syntax to crush coding interviews (LeetCode/DSA).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            <p>Python 2026 relies on <strong>Type Hinting</strong> and <strong>Modern Syntax</strong>.</p>
            {code_block("""
# Legacy Python (Pre-2020 style) - AVOID IN INTERVIEWS
def get_user(id):
    return {"id": id, "name": "Unknown"}

# Modern Python (2026 style) - DO THIS
from typing import TypedDict, Optional

class User(TypedDict):
    id: int
    name: str

def get_user(user_id: int) -> User:
    return {"id": user_id, "name": "Unknown"}
""", filename="modern_vs_legacy.py")}

            <h3 class="text-2xl font-bold text-white mb-4">4. Real-Life Industry Use Cases</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-slate-800 p-4 rounded-lg">
                    <h5 class="font-bold text-indigo-400">1. AI Wrappers</h5>
                    <p class="text-sm mt-2">Startups allow users to "chat with PDF". The backend is Python (FastAPI) which receives the PDF, chunks it (LangChain), and sends it to OpenAI. This is 90% of new startups in 2026.</p>
                </div>
                <div class="bg-slate-800 p-4 rounded-lg">
                    <h5 class="font-bold text-indigo-400">2. High-Frequency Trading</h5>
                    <p class="text-sm mt-2">While the core execution engine is C++, the strategy logic, data analysis, and backtesting are all Python (NumPy/Pandas) due to development speed.</p>
                </div>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">5. Variants & Advanced Notes</h3>
            <p>
                <strong>CPython vs. PyPy vs. Mojo:</strong>
                <br>Most jobs use standard <strong>CPython</strong>.
                <br><strong>PyPy</strong> is a JIT compiler alternative for pure Python speed.
                <br><strong>Mojo</strong> is a new superset of Python for AI hardware, gaining traction in 2026 for performance-critical AI code. Stick to CPython for placements unless asked.
            </p>
        </div>
        """
    },
    {
        "title": "1.2 Setting Up Python 3.11+ (Environment Mastery)",
        "emoji": "🛠️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Install Python 3.11+ correctly on Windows/Mac/Linux.</li>
                <li>Understand the difference between System Python and User Python.</li>
                <li>Master <code>venv</code> for isolated project environments (Critical for avoiding "Dependency Hell").</li>
                <li>Configure VS Code with the Black formatter and Pylance.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: The "Environment" Problem</h3>
            <p>
                Imagine Project A needs <code>Django 2.0</code> and Project B needs <code>Django 4.0</code>. 
                If you install libraries globally, they overwrite each other. 
                <br><strong>Solution: Virtual Environments.</strong>
                Think of a Virtual Environment (venv) as a "sandbox". Every project gets its own playground with its own toys (libraries).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            
            <h4 class="font-bold text-white mt-4">Creating a Venv (Windows)</h4>
            {code_block("""
# 1. Check version
python --version

# 2. Create venv (named 'venv')
python -m venv venv

# 3. Activate
.\\venv\\Scripts\\activate

# 4. Verify (Where is python running from?)
where python
# Should point to ...\\your_project\\venv\\Scripts\\python.exe
""", lang="powershell", filename="setup_windows.ps1")}

            <h4 class="font-bold text-white mt-4">Creating a Venv (Mac/Linux)</h4>
            {code_block("""
# 1. Create
python3 -m venv venv

# 2. Activate
source venv/bin/activate
""", lang="bash", filename="setup_unix.sh")}

            <h3 class="text-2xl font-bold text-white mb-4">4. Common Mistakes</h3>
             <ul class="list-disc list-inside space-y-2 text-red-300">
                <li><strong>Mistake:</strong> Installing everything with `pip install x` globally.
                    <br><span class="text-green-400">Fix:</span> Always activate venv first.</li>
                <li><strong>Mistake:</strong> Committing the `venv` folder to GitHub.
                    <br><span class="text-green-400">Fix:</span> Add `venv/` to your `.gitignore` file.</li>
            </ul>
        </div>
        """
    },
    {
        "title": "1.3 First Steps: Scripts vs REPL",
        "emoji": "👣",
        "content": f"""
        <div class="space-y-6 text-slate-300">
             <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Execute code via Interactive Shell (REPL) vs Script Files (.py).</li>
                <li>Master Input/Output with `print()` and `input()`.</li>
                <li>Write effective single-line and docstring comments.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: The REPL</h3>
            <p>
                <strong>REPL</strong> stands for <strong>R</strong>ead, <strong>E</strong>val, <strong>P</strong>rint, <strong>L</strong>oop.
                It's Python's "Instant Messenger". You type a line, Python replies immediately. 
                <br>Great for testing small logic (e.g., "What does this slice do?"). 
                <br><strong>Scripts (.py)</strong> are for permanent programs.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# --- Output ---
print("Hello", "World", sep=" | ", end="!!\\n")
# Output: Hello | World!!

# --- Input ---
# input() always returns a STRING
age_str = input("Enter age: ") 
# You must cast it to do math
age = int(age_str)

# --- Comments ---
# Single line comment

\"\"\"
Multi-line Docstring.
Usually used to describe a module or function.
\"\"\"
""", filename="io_basics.py")}

            <h3 class="text-2xl font-bold text-white mb-4">4. Worked Example: The Greeting Bot</h3>
            {code_block("""
def greeting_bot():
    print("--- WELCOME SYSTEM ---")
    
    # getting inputs
    name = input("Username: ")
    # Chained conversion
    year = int(input("Year of Birth: ")) 
    
    # Logic
    current_year = 2026
    age = current_year - year
    
    # f-string formatting (The modern way)
    print(f"Access Granted. User: {name.upper()} | Age: {age}")

# Executing
greeting_bot()
""", filename="bot.py")}
            <p><strong>Note:</strong> We used <code>f"Content {{variable}}"</code>. This is called an <strong>f-string</strong>. Never use <code>"Age: " + str(age)</code> in 2026. It's slow and unreadable.</p>
        </div>
        """
    },
    {
        "title": "1.4 Variables & Data Types",
        "emoji": "📦",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Understand Dynamic Typing in Python (Variables are tags, not boxes).</li>
                <li>Master the Primitives: `int`, `float`, `str`, `bool`.</li>
                <li>Understand Immutability fundamentals.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: Variables as Tags</h3>
            <p>
                In C++, `int a = 10` creates a box named `a` and puts `10` inside. 
                In Python, `10` is an object in memory. `a` is just a sticky note (reference) attached to it.
                <br>If you do `a = 20`, you aren't changing the `10`. You are moving the sticky note to a new object `20`.
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# --- Primitives ---
x = 10          # int (arbitrary precision in Python 3!)
y = 3.14        # float (double precision C-double)
name = 'Flyeng' # str
is_active = True # bool

# --- Type Checking ---
print(type(x)) # <class 'int'>

# --- Type Conversion ---
price = "99.99"
total = float(price) * 2 
print(int(total)) # 199 (Truncates decimal)
""", filename="types.py")}

            <h3 class="text-2xl font-bold text-white mb-4">4. Edge Case: Float Precision</h3>
            <div class="p-4 bg-yellow-900/30 rounded-lg border border-yellow-700">
                <p>Floats are binary approximations.</p>
                {code_block("""
print(0.1 + 0.2)
# Output: 0.30000000000000004
# Use 'decimal' module for money!
""", filename="float_error.py")}
            </div>
        </div>
        """
    },
    {
        "title": "1.5 Operators & Expressions",
        "emoji": "➗",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Distinguish between Division `/` and Floor Division `//`.</li>
                <li>Use Logical Operators `and`, `or`, `not` (Short-circuiting).</li>
                <li>Master Membership operators `in`, `not in`.</li>
                <li>Understand Identity `is` vs Equality `==`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            
            <h4 class="font-bold text-white mt-4">Arithmetic</h4>
            {code_block("""
a = 15
b = 4

print(a / b)   # 3.75 (Standard Division)
print(a // b)  # 3    (Floor/Integer Division)
print(a % b)   # 3    (Modulus/Remainder)
print(a ** b)  # 50625 (Power: 15^4)
""", filename="math_ops.py")}

            <h4 class="font-bold text-white mt-4">Logical & Comparison</h4>
            {code_block("""
# Chained Comparison (Python Exclusive Feature!)
x = 10
if 5 < x < 15:  # Same as: 5 < x and x < 15
    print("x is in range")

# Short Circuit
def expensive_check():
    print("Checking...")
    return True

# If first part is False, expensive_check() is NEVER run
if False and expensive_check():
    print("Won't happen")
""", filename="logic.py")}

            <h3 class="text-2xl font-bold text-white mb-4">3. Critical Interview Topic: `is` vs `==`</h3>
            <p>
                <code>==</code> checks <strong>Value</strong> (content).
                <br><code>is</code> checks <strong>Identity</strong> (memory address).
            </p>
            {code_block("""
list_a = [1, 2, 3]
list_b = [1, 2, 3]

print(list_a == list_b) # True (Content is same)
print(list_a is list_b) # False (Two different objects in memory)

a = 10
b = 10
print(a is b) # True (Python internals cache small integers!)
""", filename="identity.py")}
        </div>
        """
    },
    {
        "title": "1.6 Control Flow 1: Conditionals",
        "emoji": "🔀",
        "content": f"""
        <div class="space-y-6 text-slate-300">
             <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Apply `if`, `elif`, `else` structures.</li>
                <li>Understand "Truthiness" (Falsy values).</li>
                <li>Use the Ternary Operator equivalent.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: Truthiness</h3>
            <p>In Python, empty structures evaluate to <code>False</code>. You don't need to check <code>len(x) > 0</code>.</p>
            <ul class="list-disc list-inside ml-4 text-slate-400">
                <li>Falsy: <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>{{}}</code>, <code>None</code>, <code>False</code></li>
                <li>Truthy: Everything else.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
users = []

if not users:  # Pythonic check for empty list
    print("No users found")
else:
    print(f"{len(users)} users active")

# Assignment Expressions (Walrus Operator :=) - Python 3.8+
# Calculates length, assigns it to n, and checks n > 3 in one line
if (n := len(users)) > 3:
    print(f"Too many users: {n}")
""", filename="conditionals.py")}

            <h4 class="font-bold text-white mt-4">Ternary Conditional</h4>
            {code_block("""
status = "Adult" if age >= 18 else "Minor"
""", filename="ternary.py")}
        </div>
        """
    },
    {
        "title": "1.7 Control Flow 2: Loops",
        "emoji": "🔁",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Master `for` loops with `range()` and iterables.</li>
                <li>Use `while` loops for state-based iteration.</li>
                <li>Control loops with `break`, `continue`, and the unique `else` block.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            
            <h4 class="font-bold text-white mt-4">For Loops (The Iterator Pattern)</h4>
            {code_block("""
# Range is [start, stop)
for i in range(1, 6, 2): 
    print(i) # 1, 3, 5

# Looping over collection
names = ["Alice", "Bob"]
for name in names:
    print(name)

# Using Index AND Value (enumerate) - INTERVIEW PATTERN
for idx, name in enumerate(names):
    print(f"Rank {idx+1}: {name}")
""", filename="loops.py")}

            <h3 class="text-2xl font-bold text-white mb-4">3. Advanced Feature: Loop `else`</h3>
            <p>The `else` block executes ONLY if the loop completed normally (i.e., NO `break` hit).</p>
            {code_block("""
# Search Pattern
target = 5
numbers = [1, 2, 3, 4]

for n in numbers:
    if n == target:
        print("Found!")
        break
else:
    print("Not found in list") 
# Helpful to avoid a 'found = False' flag variable
""", filename="loop_else.py")}
        </div>
        """
    },
    {
        "title": "1.8 Functions",
        "emoji": "🔧",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Define functions with `def`.</li>
                <li>Understand Positional vs Keyword Arguments.</li>
                <li>Master Default Arguments (and the Mutable Default Argument Trap).</li>
                <li>Scope: LEGB Rule (Local, Enclosing, Global, Built-in).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
def calculate_total(price, tax_rate=0.05, discount=0):
    total = price * (1 + tax_rate) - discount
    return total

# Keyword usage (More readable)
val = calculate_total(price=100, discount=10)

# Unpacking Arguments (*args, **kwargs)
def super_sum(*args):
    return sum(args)

print(super_sum(10, 20, 30)) # 60
""", filename="functions.py")}

            <h3 class="text-2xl font-bold text-white mb-4">3. The Mutable Default Trap (Interview Favorite)</h3>
            <p class="text-red-400">Never use a mutable object (list, dict) as a default argument.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h5 class="font-bold text-red-400">WRONG</h5>
                    {code_block("""
def append_x(items=[]):
    items.append('x')
    return items

print(append_x()) # ['x']
print(append_x()) # ['x', 'x'] !!
# The list is created ONCE at definition time.
""", filename="bad.py")}
                </div>
                <div>
                    <h5 class="font-bold text-green-400">RIGHT</h5>
                    {code_block("""
def append_x(items=None):
    if items is None:
        items = [] # New list every time
    items.append('x')
    return items
""", filename="good.py")}
                </div>
            </div>
        </div>
        """
    },
    {
        "title": "1.9 Coding Style & PEP 8",
        "emoji": "🎨",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Write pythonic code adhering to PEP 8.</li>
                <li>Naming conventions: `snake_case` vs `CamelCase`.</li>
                <li>Import ordering.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Essential PEP 8 Rules</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-700 text-indigo-400">
                            <th class="p-2">Element</th>
                            <th class="p-2">Convention</th>
                            <th class="p-2">Example</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr class="border-b border-slate-800">
                            <td class="p-2">Functions / Variables</td>
                            <td class="p-2">snake_case</td>
                            <td class="p-2"><code>calculate_tax</code></td>
                        </tr>
                        <tr class="border-b border-slate-800">
                            <td class="p-2">Classes</td>
                            <td class="p-2">CamelCase (PascalCase)</td>
                            <td class="p-2"><code>UserProfile</code></td>
                        </tr>
                        <tr class="border-b border-slate-800">
                            <td class="p-2">Constants</td>
                            <td class="p-2">UPPER_SNAKE_CASE</td>
                            <td class="p-2"><code>MAX_RETRIES</code></td>
                        </tr>
                        <tr class="border-b border-slate-800">
                            <td class="p-2">Protected/Private</td>
                            <td class="p-2">_leading_underscore</td>
                            <td class="p-2"><code>_internal_helper</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">3. Import Ordering</h3>
            <p class="text-sm text-slate-400">Always group imports in this order:</p>
            {code_block("""
# 1. Standard Library
import os
import sys

# 2. Third Party
import pandas as pd
import requests

# 3. Local Application
from my_app.models import User
from my_app.utils import helper
""", filename="imports.py")}
        </div>
        """
    },
    {
        "title": "1.10 Mini Project: CLI Task Manager",
        "emoji": "🏆",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Build a simple command-line Text Utility that reinforces: loops, conditionals, lists, and functions.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
import sys

tasks = []

def show_menu():
    print("\\n--- TASK MASTER 1.0 ---")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Remove Task")
    print("4. Exit")
    return input("Select Option (1-4): ")

def add_task():
    task = input("Enter Task Description: ").strip()
    if task:
        tasks.append(task)
        print("✅ Task Added!")
    else:
        print("⚠️ Cannot add empty task.")

def view_tasks():
    if not tasks:
        print("📭 No tasks yet.")
        return
    print("\\n--- YOUR TASKS ---")
    for idx, t in enumerate(tasks, 1):
        print(f"{idx}. {t}")

def remove_task():
    view_tasks()
    if not tasks:
        return
        
    choice = input("Enter number to remove: ")
    if choice.isdigit():
        idx = int(choice) - 1
        if 0 <= idx < len(tasks):
            removed = tasks.pop(idx)
            print(f"🗑️ Removed: {removed}")
        else:
            print("❌ Invalid number.")
    else:
        print("❌ Please enter a number.")

def main():
    while True:
        choice = show_menu()
        
        if choice == '1':
            add_task()
        elif choice == '2':
            view_tasks()
        elif choice == '3':
            remove_task()
        elif choice == '4':
            print("Goodbye! 👋")
            break
        else:
            print("Invalid Option. Try again.")

if __name__ == "__main__":
    main()
""", filename="task_manager.py")}
            
            <h4 class="font-bold text-white mt-4">Why this matters?</h4>
            <p>This simple script uses:</p>
            <ul class="list-disc list-inside text-sm text-slate-400">
                <li><code>while True</code> for the main app loop.</li>
                <li><code>enumerate</code> for user-friendly listing.</li>
                <li><code>input</code> handling and validation (<code>isdigit</code>).</li>
                <li>List methods (<code>append</code>, <code>pop</code>).</li>
                <li><code>if __name__ == "__main__":</code> block (Best practice for entry points).</li>
            </ul>
        </div>
        """
    }
]
