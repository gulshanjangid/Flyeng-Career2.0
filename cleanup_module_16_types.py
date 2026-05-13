
import re

file_path = r"c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the start of Module 16 to limit the scope of our regex
module_title = 'title: "Module 16: The Future of AI (Grand Finale)",'
start_idx = content.find(module_title)

if start_idx == -1:
    print("Error: Could not find Module 16 title.")
    exit(1)

# Walk back to find opening brace of the module
module_start_brace = -1
for i in range(start_idx, -1, -1):
    if content[i] == '{':
        module_start_brace = i
        break

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

module_content = content[module_start_brace:module_end_brace+1]

# Replace type: "reading" with type: "article"
module_content = re.sub(r'type:\s*"reading"', 'type: "article"', module_content)

# Now put it back
new_full_content = content[:module_start_brace] + module_content + content[module_end_brace+1:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_full_content)

print("Successfully fixed types in Module 16.")
