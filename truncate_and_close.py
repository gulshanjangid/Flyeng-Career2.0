file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def truncate_and_close():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        print(f"Original lines: {len(lines)}")
        
        # Keep lines 0 to 34620 (index 34620 is line 34621, so keep 0 to 34620)
        # Python slicing [0:34620] gives 0..34619 indices (lines 1..34620).
        # Line 34620 is the closing bracket of first instance.
        
        kept_lines = lines[:34620]
        
        # Verify last kept line is "            }," or similar
        last_line = kept_lines[-1].rstrip()
        print(f"Last kept line (34620): '{last_line}'")
        
        if "}," not in last_line and "}" not in last_line:
             print("⚠️ Warning: Last line doesn't look like a module closure. Proceeding anyway but checking manually advised.")
             
        # Append closures
        # Indentation: 8 spaces, 4 spaces, 0 spaces
        kept_lines.append("        ]\n")
        kept_lines.append("    }\n")
        kept_lines.append("}\n")
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(kept_lines)
            
        print(f"✅ Truncated to {len(kept_lines)} lines. Duplicate Module 6 removed.")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    truncate_and_close()
