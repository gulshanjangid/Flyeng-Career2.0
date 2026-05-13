import json
import re

COURSE_DATA_PATH = r"lib/course-data.ts"
JSON_PATH = "hyper_content.json"

def main():
    print("Loading content...")
    with open(JSON_PATH, "r", encoding="utf-8") as f:
        hyper_content = json.load(f)

    with open(COURSE_DATA_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()

    print(f"Loaded {len(lines)} lines from {COURSE_DATA_PATH}")

    new_lines = []
    i = 0
    replacement_count = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Detect Module Title similar to: title: "5. AI Retrieval Systems
        # Regex: title:\s*"(\d+)\.
        match = re.search(r'title:\s*"(\d+)\.', line)
        
        if match:
            module_num = match.group(1)
            
            if module_num in hyper_content:
                print(f"--> Found Module {module_num} at line {i+1}")
                
                # 1. We are at `title: "..."`. We need to back-track slightly in `new_lines` to find the opening `{`.
                #    In `course-data.ts`, formatting is usually:
                #    `            {`
                #    `                title: "..."`
                #    So we expect the previous line in `new_lines` to contain `{`.
                
                found_start = False
                back_idx = len(new_lines) - 1
                limit = 5
                while back_idx >= 0 and limit > 0:
                    if "{" in new_lines[back_idx]:
                        # Check if this line is a comment or code? 
                        # Assuming structural brace.
                        new_lines = new_lines[:back_idx] # Cut off the old `{`
                        found_start = True
                        break
                    back_idx -= 1
                    limit -= 1
                
                if not found_start:
                    print(f"    WARNING: Could not find opening brace for Module {module_num}. Skipping replacement.")
                    new_lines.append(line)
                    i += 1
                    continue
                
                # 2. Insert New Content
                print(f"    Injecting new content for Module {module_num}...")
                new_mod = hyper_content[module_num]
                
                # Format
                block = "            {\n"
                block += f'                title: "{new_mod["title"]}",\n'
                block += "                lessons: [\n"
                for lesson in new_mod["lessons"]:
                    block += "                    {\n"
                    block += f'                        id: "{lesson["id"]}",\n'
                    block += f'                        title: "{lesson["title"]}",\n'
                    block += f'                        duration: "{lesson["duration"]}",\n'
                    block += f'                        type: \'{lesson["type"]}\',\n'
                    block += "                        content: `\n"
                    block += lesson["content"].strip() + "\n"
                    block += "`\n"
                    block += "                    },\n"
                block += "                ]\n"
                block += "            }"
                
                new_lines.append(block)
                replacement_count += 1
                
                # 3. Skip Old Content
                #    We need to advance `i` until we pass the closing brace `}` of this module.
                #    Indent based matching is safest.
                #    The opening brace was likely indent 12 (spaces).
                #    We act "dumb". We look for a line that is `            },` (12 spaces + `},`) OR `            }`
                
                found_end = False
                scan_i = i
                while scan_i < len(lines):
                    l = lines[scan_i]
                    # Check for explicit closing pattern
                    if l.strip().startswith("}"):
                        # Check indent roughly (or just accept it if it looks like a module closer)
                        if len(l) - len(l.lstrip()) == 12:
                            
                            # Found it.
                            # Does it have a comma?
                            if "," in l:
                                new_lines[-1] += ","
                            
                            i = scan_i + 1 # Continue from next line
                            found_end = True
                            break
                    scan_i += 1
                
                if not found_end:
                     print(f"    CRITICAL: Could not find closing brace for Module {module_num}. Aborting replacement safely.")
                     # Restore original lines? It's hard.
                     # We just crash or stop?
                     # Let's just output remainder and hope.
                     # But current state `new_lines` has the new content.
                     # The file cursor `i` is still at the title.
                     # If we continue using `i`, `new_lines` + `lines[i:]` will result in Duplicate content (New + Old).
                     # Worst case: duplicate module. Better than corruption.
                     new_lines.append(line)
                     i += 1
                
                continue 
                
        new_lines.append(line)
        i += 1

    print(f"Writing {len(new_lines)} lines to {COURSE_DATA_PATH}...")
    with open(COURSE_DATA_PATH, "w", encoding="utf-8") as f:
        f.write("".join(new_lines)) # `line` already has \n
    print(f"Success! Replaced {replacement_count} modules.")

if __name__ == "__main__":
    main()
