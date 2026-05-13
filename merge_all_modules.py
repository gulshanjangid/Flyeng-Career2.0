
import os

MASTER_PATH = "generate_cpp_course_master.py"
MODULE1_PATH = "generate_cpp_module1.py"
MODULE2_PATH = "generate_cpp_module2.py"
MODULE3_PATH = "generate_cpp_module3.py"
MODULE4_PATH = "generate_cpp_module4.py"
MODULE5_PATH = "generate_cpp_module5.py"
MODULE6_PATH = "generate_cpp_module6.py"
MODULE7_PATH = "generate_cpp_module7.py"
MODULE8_PATH = "generate_cpp_module8.py"
MODULE9_PATH = "generate_cpp_module9.py"
MODULE10_PATH = "generate_cpp_module10.py"
MODULE11_PATH = "generate_cpp_module11.py"
MODULE12_PATH = "generate_cpp_module12.py"
MODULE13_PATH = "generate_cpp_module13.py"
MODULE14_PATH = "generate_cpp_module14.py"
MODULE15_PATH = "generate_cpp_module15.py"
MODULE16_PATH = "generate_cpp_module16.py"

def read_content(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read().strip()
    except FileNotFoundError:
        print(f"Error: {path} not found.")
        return ""

def replace_block(lines, start_marker, new_content):
    start_index = -1
    end_index = -1
    
    # helper: find identifier
    for i, line in enumerate(lines):
        if start_marker in line:
            start_index = i
            break
            
    if start_index != -1:
        # Search for the end of the list manually
        # It's a list definition so it ends with "]"
        bracket_count = 0
        found_start = False
        
        for i in range(start_index, len(lines)):
            line = lines[i]
            bracket_count += line.count('[')
            bracket_count -= line.count(']')
            
            if line.count('[') > 0:
                found_start = True
            
            # If we started and balance hits 0 (or less), we are done
            if found_start and bracket_count <= 0:
                end_index = i
                break
                
    if start_index != -1 and end_index != -1 and new_content:
        print(f"Replacing block: {start_marker} (Lines {start_index+1}-{end_index+1})")
        return lines[:start_index] + [new_content + "\n"] + lines[end_index+1:]
    elif start_index != -1:
        print(f"Warning: Found start of {start_marker} but not end.")
        return lines
    else:
        print(f"Warning: Could not find block {start_marker}")
        return lines

# 1. Read Module Data
print("Reading Module 1...")
mod1_content = read_content(MODULE1_PATH)
print("Reading Module 2...")
mod2_content = read_content(MODULE2_PATH)
print("Reading Module 3...")
mod3_content = read_content(MODULE3_PATH)
print("Reading Module 4...")
mod4_content = read_content(MODULE4_PATH)
print("Reading Module 5...")
mod5_content = read_content(MODULE5_PATH)
print("Reading Module 6...")
mod6_content = read_content(MODULE6_PATH)
print("Reading Module 7...")
mod7_content = read_content(MODULE7_PATH)
print("Reading Module 8...")
mod8_content = read_content(MODULE8_PATH)
print("Reading Module 9...")
mod9_content = read_content(MODULE9_PATH)
print("Reading Module 10...")
mod10_content = read_content(MODULE10_PATH)
print("Reading Module 11...")
mod11_content = read_content(MODULE11_PATH)
print("Reading Module 12...")
mod12_content = read_content(MODULE12_PATH)
print("Reading Module 13...")
mod13_content = read_content(MODULE13_PATH)
print("Reading Module 14...")
mod14_content = read_content(MODULE14_PATH)
print("Reading Module 15...")
mod15_content = read_content(MODULE15_PATH)
print("Reading Module 16...")
mod16_content = read_content(MODULE16_PATH)

# 2. Read Master
print("Reading Master...")
with open(MASTER_PATH, "r", encoding="utf-8") as f:
    master_lines = f.readlines()

# 3. Replace Modules
master_lines = replace_block(master_lines, "module_1_lessons = [", mod1_content)
master_lines = replace_block(master_lines, "module_2_lessons = [", mod2_content)
master_lines = replace_block(master_lines, "module_3_lessons = [", mod3_content)
master_lines = replace_block(master_lines, "module_4_lessons = [", mod4_content)
master_lines = replace_block(master_lines, "module_5_lessons = [", mod5_content)
master_lines = replace_block(master_lines, "module_6_lessons = [", mod6_content)
master_lines = replace_block(master_lines, "module_7_lessons = [", mod7_content)
master_lines = replace_block(master_lines, "module_8_lessons = [", mod8_content)
master_lines = replace_block(master_lines, "module_9_lessons = [", mod9_content)
master_lines = replace_block(master_lines, "module_10_lessons = [", mod10_content)
master_lines = replace_block(master_lines, "module_11_lessons = [", mod11_content)
master_lines = replace_block(master_lines, "module_12_lessons = [", mod12_content)
master_lines = replace_block(master_lines, "module_13_lessons = [", mod13_content)
master_lines = replace_block(master_lines, "module_14_lessons = [", mod14_content)
master_lines = replace_block(master_lines, "module_15_lessons = [", mod15_content)
master_lines = replace_block(master_lines, "module_16_lessons = [", mod16_content)

# 5. Write Back
print("Writing Master...")
with open(MASTER_PATH, "w", encoding="utf-8") as f:
    f.writelines(master_lines)

print("Merge Complete!")
