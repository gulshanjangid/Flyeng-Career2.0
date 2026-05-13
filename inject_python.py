
import json
import re

COURSE_DATA_FILE = "lib/course-data.ts"
PYTHON_JSON_FILE = "python_curriculum.json"

def find_block_bounds(content, start_marker):
    start_idx = content.find(start_marker)
    if start_idx == -1:
        return None, None
    
    # Start counting braces from the opening brace of the marker
    # Marker is "python: {" or similar. We assume the last char is '{'
    open_brace_idx = content.find("{", start_idx)
    if open_brace_idx == -1:
        return None, None
    
    depth = 0
    in_quote = False
    quote_char = None
    
    for i in range(open_brace_idx, len(content)):
        char = content[i]
        
        # Simple string handling to ignore braces in strings
        if char in ['"', "'", "`"]:
            if not in_quote:
                in_quote = True
                quote_char = char
            elif char == quote_char and content[i-1] != "\\":
                in_quote = False
        
        if not in_quote:
            if char == "{":
                depth += 1
            elif char == "}":
                depth -= 1
                if depth == 0:
                    return start_idx, i + 1
    
    return None, None

def inject_python_content():
    # 1. Load generated content
    with open(PYTHON_JSON_FILE, "r", encoding="utf-8") as f:
        py_data = json.load(f)

    # 2. Build Python Object structure
    modules_list = []
    for mod_key, mod_val in py_data.items():
        modules_list.append({
            "title": mod_val['title'],
            "lessons": mod_val["lessons"]
        })

    python_obj = {
        "title": "Python for 2026: Modern Engineering",
        "instructor": "Nikhil Jangid",
        "description": "The only Python course that matters. Async, Typing, Rust-tooling, and AI Architecture.",
        "icon": "Terminal", 
        "color": "text-yellow-400",
        "modules": modules_list
    }
    
    # Serialize
    json_str = json.dumps(python_obj, indent=8)
    json_str = json_str.replace('"Terminal"', 'Terminal')

    # 3. Read File
    with open(COURSE_DATA_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # 4. Remove existing Python key if present
    start, end = find_block_bounds(content, "python: {")
    if start is not None:
        print(f"Found existing Python block at indices {start}-{end}. Removing...")
        # Check for trailing comma
        if end < len(content) and content[end] == ",":
            end += 1
        content = content[:start] + content[end:]
    
    # 5. Insert New Python Key
    # Logic: Insert before 'genai: {' if exists, else append to end of object
    genai_start = content.find("genai: {")
    
    if genai_start != -1:
        print("Inserting before 'genai'...")
        # We need to ensure comma handling is correct.
        # usually previous block ends with `},` or `}`.
        # We insert `python: { ... },\n\n`
        
        to_insert = f"\n    python: {json_str},\n\n    "
        content = content[:genai_start] + to_insert + content[genai_start:]
    else:
        print("Appending to end of 'courseData'...")
        last_brace = content.rfind("};")
        to_insert = f",\n\n    python: {json_str}\n" 
        content = content[:last_brace] + to_insert + content[last_brace:]

    # 6. Ensure Import
    if "Terminal" not in content and ", Terminal" not in content:
         content = content.replace('from "lucide-react"', ', Terminal } from "lucide-react"')

    # 7. Write
    with open(COURSE_DATA_FILE, "w", encoding="utf-8") as f:
        f.write(content)
        
    print("Success.")

if __name__ == "__main__":
    inject_python_content()
