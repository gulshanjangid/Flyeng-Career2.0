import re

# Paths
course_data_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
m2_script_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\update_genai_m2.py'

def restore_m2():
    print("🔍 Reading files...")
    
    # 1. Extract M2 Content from the previous script
    with open(m2_script_path, 'r', encoding='utf-8') as f:
        script_content = f.read()
        
    # Regex to find the content string (between new_module_content = """ and """)
    # We use a non-greedy match.
    match = re.search(r'new_module_content = """(.*?)"""', script_content, re.DOTALL)
    if not match:
        print("❌ Could not extract M2 content from script.")
        return
        
    m2_content = match.group(1).strip()
    print("✅ Extracted Module 2 content.")

    # 2. Read course-data.ts
    with open(course_data_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    print(f"📄 Read {len(lines)} lines from course-data.ts")

    # 3. Find End of Module 1
    # We look for "1.11 The Journey Ahead in This Course" then the closing brace of that lesson, then closing brace of lessons array, then closing brace of module.
    # But relying on line numbers is risky if unrelated changes happened. 
    # Let's search for the Module 1 title, then its end.
    
    m1_end_idx = -1
    for i, line in enumerate(lines):
        if 'title: "1.11 The Journey Ahead in This Course"' in line:
            # Found last lesson of M1. Now skip ahead to find end of M1 object.
            # It should be:
            # ...
            # `
            # }
            # ]
            # }  <-- End of M1
            
            # Let's verify strict structure around 21333 context
            # Look for line 21333 which we saw was "            }"
            pass
            
    # Based on previous view_file, M1 end was at 21333.
    # Let's Verify line 21333 is "            }"
    # And line 21334 is "        ]"
    # And line 21335 is "    },"
    
    # We will accept a small margin of error by searching nearby
    scan_start = 21300
    scan_end = 21400
    
    found_gap = False
    gap_start = -1
    
    for i in range(scan_start, scan_end):
        # Pattern: } (M1 End) \n ] (Array End - BAD) \n }, (Genai End - BAD) \n { (M2 Start)
        original_chunk = "".join(lines[i:i+4])
        if "}\n" in lines[i] and "]\n" in lines[i+1] and "}," in lines[i+2] and "{\n" in lines[i+3]:
            print(f"✅ Found broken gap at line {i+1}")
            gap_start = i
            found_gap = True
            break
            
    if not found_gap:
        print("❌ Could not find the specific broken syntax pattern (} ] }, {).")
        # Fallback: Just look for M1 End and M3 Start
        
    # 4. Find Start of Module 3
    # "3. Core Python for Generative AI Engineers"
    m3_start_idx = -1
    for i, line in enumerate(lines):
        if 'title: "3. Core Python for Generative AI Engineers"' in line:
            # The line BEFORE this is usually "{" (Start of M3)
            if "{" in lines[i-1]:
                m3_start_idx = i - 1
                print(f"✅ Found Module 3 Start at line {m3_start_idx + 1}")
                break
            elif "{" in lines[i-2]: # Maybe empty line
                m3_start_idx = i - 2
                print(f"✅ Found Module 3 Start at line {m3_start_idx + 1}")
                break

    if m3_start_idx == -1:
        print("❌ Could not find Module 3 start.")
        return

    # 5. Define Replacement Range
    # We want to keep everything up to gaps_start (End of M1).
    # Then insert Comma + M2 + Comma.
    # Then resume at m3_start_idx.
    
    # If we found the gap explicitly:
    if found_gap:
        # lines[gap_start] is "}" (End of M1)
        # We want to KEEP lines[:gap_start+1] (including })
        
        prefix = lines[:gap_start+1]
        suffix = lines[m3_start_idx:]
        
        # Construct new content
        # Note: We need a comma after M1.
        # And a comma after M2.
        
        new_lines = prefix
        new_lines.append(",\n") # Comma after M1
        new_lines.append(m2_content)
        new_lines.append(",\n") # Comma after M2
        new_lines.extend(suffix)
        
        # Write back
        with open(course_data_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
            
        print("✅ Restored Module 2 and fixed syntax!")
        
    else:
        print("⚠️ Parsing logic failed. Aborting to avoid damage.")

if __name__ == "__main__":
    restore_m2()
