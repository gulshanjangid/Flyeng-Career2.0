import os

MASTER_PATH = "generate_cpp_course_master.py"
MODULE1_PATH = "generate_cpp_module1.py"
# Read Module 1 content (The new stuff)
with open(MODULE1_PATH, "r", encoding="utf-8") as f:
    new_module1_code = f.read().strip()
    # Remove the variable declaration part if it exists in the file to avoid duplication or just use it as is
    # The file starts with "module_1_lessons = [", so we can just use it directly.

# Read Master content
with open(MASTER_PATH, "r", encoding="utf-8") as f:
    master_lines = f.readlines()

# Find start and end of module_1_lessons
start_index = -1
end_index = -1

for i, line in enumerate(master_lines):
    if "module_1_lessons = [" in line:
        start_index = i
        break

# Find the end of the list. We know it ends before "module_2_lessons"
for i, line in enumerate(master_lines):
    if "module_2_lessons = [" in line:
        # The list likely ended a few lines before this.
        # Let's search backwards from here
        for j in range(i - 1, start_index, -1):
            if master_lines[j].strip() == "]":
                end_index = j
                break
        break

if start_index != -1 and end_index != -1:
    print(f"Found Module 1 block: Lines {start_index+1} to {end_index+1}")
    
    # We want to replace everything from start_index to end_index (inclusive) with new_module1_code
    # However, new_module1_code includes "module_1_lessons = [ ... ]"
    # So we can just replace the block.
    
    new_lines = master_lines[:start_index] + [new_module1_code + "\n"] + master_lines[end_index+1:]
    
    with open(MASTER_PATH, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    print("Successfully merged Module 1 content.")
else:
    print("Error: Could not find Module 1 block in master file.")
    print(f"Start: {start_index}, End: {end_index}")
