
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_3_lessons = [
    {
        "title": "3.1 File Handling: The 'With' Statement",
        "emoji": "📂",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Read and Write text files safely.</li>
                <li>Understand the Context Manager protocol (`with` statement).</li>
                <li>Handle encoding issues (UTF-8).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Intuitive Theory: Resource Leaks</h3>
            <p>
                Opening a file asks the OS for a "file handle". If you don't close it, you leak resources. 
                <br><strong>The Old Way:</strong> Manually calling `f.close()`. Risk: If code crashes before close, file stays open.
                <br><strong>The New Way:</strong> The `with` block auto-closes the file, ANY time you leave the block (even on error).
            </p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# Reading a file (Standard Pattern)
try:
    with open("data.txt", "r", encoding="utf-8") as f:
        content = f.read() # Reads ENTIRE file into RAM
        print(content)
except FileNotFoundError:
    print("File not found!")

# Reading line by line (Memory Safe for large files)
with open("large_log.txt", "r") as f:
    for line in f:
        process(line.strip())

# Writing (Overwrites existing!)
with open("output.txt", "w") as f:
    f.write("Hello File!\\n")
    
# Appending
with open("log.txt", "a") as f:
    f.write("New Log Entry\\n")
""", filename="files.py")}
        </div>
        """
    },
    {
        "title": "3.2 Structured Data: JSON & CSV",
        "emoji": "📊",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Parse and Dump JSON data (The language of APIs).</li>
                <li>Read and Write CSV files representing tabular data.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. JSON Handling</h3>
            <p><strong>Serialization (Dump):</strong> Python Dict -> JSON String.
            <br><strong>Deserialization (Load):</strong> JSON String -> Python Dict.</p>

            {code_block("""
import json

data = {
    "name": "Flyeng",
    "skills": ["Python", "AI"],
    "active": True
}

# 1. To String
json_str = json.dumps(data, indent=2) 
print(json_str)

# 2. To File
with open("config.json", "w") as f:
    json.dump(data, f, indent=4)

# 3. From String
parsed = json.loads('{"id": 1}')
""", filename="json_ops.py")}

            <h3 class="text-2xl font-bold text-white mb-4">3. CSV Handling</h3>
            {code_block("""
import csv

# Writing CSV
with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Score"])
    writer.writerow(["Alice", 95])
    
# Reading as Dict (Best for Named Columns)
with open("students.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['Name']} scored {row['Score']}")
""", filename="csv_ops.py")}
        </div>
        """
    },
    {
        "title": "3.3 Exception Handling: Graceful Failure",
        "emoji": "🛡️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Handle crashes with `try`, `except`, `else`, `finally`.</li>
                <li>Catch specific exceptions (Don't catch bare `Exception`).</li>
                <li>Raise custom errors for business logic.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Full Block</h3>
            {code_block("""
def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero!")
        return None
    except TypeError as e:
        print(f"Wrong type: {e}")
        return None
    else:
        # Runs ONLY if no exception occurred
        print("Division successful")
        return result
    finally:
        # Runs ALWAYS (Cleanup)
        print("Op finished")

divide(10, 2)
""", filename="exceptions.py")}

            <h3 class="text-2xl font-bold text-white mb-4">3. Raising Errors</h3>
            {code_block("""
def register(age):
    if age < 18:
        raise ValueError("Must be 18+")
    print("Welcome")
    
# Custom Exception
class InvalidTokenError(Exception):
    pass
""", filename="custom_error.py")}
        </div>
        """
    },
    {
        "title": "3.4 Modules & Packages",
        "emoji": "📦",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Import from standard library, pip packages, and local files.</li>
                <li>Understand `__init__.py` (Makes a folder a package).</li>
                <li>Master `if __name__ == "__main__":`.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Project Structure</h3>
            <div class="p-4 bg-slate-900 rounded-lg font-mono text-sm text-slate-400">
                my_project/<br>
                ├── main.py<br>
                ├── requirements.txt<br>
                └── utils/<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── __init__.py<br>
                &nbsp;&nbsp;&nbsp;&nbsp;└── math_tools.py
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">3. Code Pattern</h3>
            {code_block("""
# In utils/math_tools.py
def add(a, b):
    return a + b

if __name__ == "__main__":
    # This runs ONLY when you run this file directly
    print("Testing add:", add(1, 2))

# In main.py
from utils.math_tools import add

print(add(10, 20)) 
# "Testing add..." will NOT print here.
""", filename="imports.py")}
        </div>
        """
    },
    {
        "title": "3.5 Pip & Virtual Environments",
        "emoji": "🌐",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Use `pip` to install/uninstall packages.</li>
                <li>Freeze dependencies into `requirements.txt`.</li>
                <li>Introduction to modern tools: `uv` (faster replacement).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Essential Commands</h3>
            {code_block("""
# Install a package (e.g., requests)
pip install requests

# Save all current packages to file
pip freeze > requirements.txt

# Install from file (New Teammate Setup)
pip install -r requirements.txt

# --- Modern Era (uv) ---
# pip is slow. 'uv' is written in Rust and is 100x faster.
# uv pip install requests
""", lang="bash", filename="terminal.sh")}
        </div>
        """
    },
    {
        "title": "3.6 Debugging: Print vs Logging",
        "emoji": "🐛",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Stop using `print("here")` for production code.</li>
                <li>Use the `logging` module for structured logs (Info, Warning, Error).</li>
                <li>Basic VS Code Debugger usage (Breakpoints).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Why Logging?</h3>
            <p>Print goes to console and is lost. Logs can be saved to files, sent to dashboards (Datadog), and have severity levels.</p>

            {code_block("""
import logging

# Basic Setup
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def run_task():
    logging.info("Task started")
    try:
        x = 1 / 0
    except ZeroDivisionError:
        logging.error("Task failed: Division by zero", exc_info=True)

run_task()
""", filename="logger.py")}
        </div>
        """
    },
    {
        "title": "3.7 Mini Project: Validated Data Cleaner",
        "emoji": "🧹",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Read a messy CSV of users, validate emails, and save clean rows to JSON. Logs errors to a file.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
import csv
import json
import logging

# Setup Logging to File
logging.basicConfig(filename='cleaner.log', level=logging.INFO)

def is_valid_email(email):
    return "@" in email and "." in email

def clean_data(input_file, output_file):
    clean_rows = []
    
    try:
        with open(input_file, "r") as f:
            reader = csv.DictReader(f)
            
            for row in reader:
                email = row.get("email", "").strip()
                if is_valid_email(email):
                    clean_rows.append({
                        "name": row.get("name", "Unknown").title(),
                        "email": email
                    })
                else:
                    logging.warning(f"Skipping invalid email: {email}")

        with open(output_file, "w") as f:
            json.dump(clean_rows, f, indent=4)
            
        print(f"Successfully cleaned {len(clean_rows)} rows.")

    except FileNotFoundError:
        logging.critical("Input file missing!")
        print("Error: Input file not found.")

# Simulate usage
if __name__ == "__main__":
    # Create dummy data
    with open("raw.csv", "w", newline="") as f:
        f.write("name,email\\nalice,alice@gmail.com\\nbob,bob_at_gmail")
    
    clean_data("raw.csv", "clean.json")
""", filename="cleaner.py")}
        </div>
        """
    }
]
