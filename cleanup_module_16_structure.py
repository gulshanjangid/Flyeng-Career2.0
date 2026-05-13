
import re

file_path = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the start of Module 16 to limit the scope of our regex
# We start looking from the title we know exists
module_title = 'title: "Module 16: The Future of AI (Grand Finale)",'
start_idx = content.find(module_title)

if start_idx == -1:
    print("Error: Could not find Module 16 title.")
    exit(1)

# Find the end of Module 16 (counting braces)
# Note: The 'start_idx' is inside the module object. We need to go back closer to the opening brace, 
# but for regex replacement of properties *inside* the module, starting at title is fine, 
# actually we want to clean the WHOLE module object, so let's find the start brace.

# Walk back to find opening brace of the module
module_start_brace = -1
for i in range(start_idx, -1, -1):
    if content[i] == '{':
        module_start_brace = i
        break

if module_start_brace == -1:
    print("Error: Could not find module start brace.")
    exit(1)

# Walk forward to find the closing brace
brace_count = 0
module_end_brace = -1
for i in range(module_start_brace, len(content)):
    if content[i] == '{':
        brace_count += 1
    elif content[i] == '}':
        brace_count -= 1
        if brace_count == 0:
            module_end_brace = i
            break

if module_end_brace == -1:
    print("Error: Could not find module end brace.")
    exit(1)

module_content = content[module_start_brace:module_end_brace+1]

# 1. Remove strict Module properties that might not exist in type
# id: "genai-16",
module_content = re.sub(r'^\s*id:\s*"genai-16",\s*$', '', module_content, flags=re.MULTILINE)
# description: "...", (multiline supported by dotall?) No, usually single line string in my injection
module_content = re.sub(r'^\s*description:\s*".*?",\s*$', '', module_content, flags=re.MULTILINE)
# completed: 0,
module_content = re.sub(r'^\s*completed:\s*\d+,\s*$', '', module_content, flags=re.MULTILINE)
# total: 5,
module_content = re.sub(r'^\s*total:\s*\d+,\s*$', '', module_content, flags=re.MULTILINE)
# progress: 0,
module_content = re.sub(r'^\s*progress:\s*\d+,\s*$', '', module_content, flags=re.MULTILINE)
# isLocked: false,
module_content = re.sub(r'^\s*isLocked:\s*false,\s*$', '', module_content, flags=re.MULTILINE)

# 2. Remove Lesson properties
# completed: false,
module_content = re.sub(r'^\s*completed:\s*false,\s*$', '', module_content, flags=re.MULTILINE)

# Now put it back
new_full_content = content[:module_start_brace] + module_content + content[module_end_brace+1:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_full_content)

print("Successfully cleaned up Module 16 structure.")
