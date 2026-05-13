
file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def fix_file():
    print("Reading file...")
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    print(f"Total lines: {len(lines)}")
    
    # Part 1: DSA + GenAI M1-M16
    # Keep lines 0 to 27209 (inclusive, 0-indexed)
    # Line 27210 in 1-indexed is index 27209.
    # 27208: } (End of M16.10)
    # 27209: ] (End of M16 lessons)
    # 27210: } (End of M16 module)
    
    # Let's verify the content at index 27209 (Line 27210)
    # It should be "            }"
    
    print(f"Line 27210 content: {lines[27209]}")
    
    part1 = lines[:27210] 
    
    # Part 2: Java
    # Java starts at Line 27678 (Index 27677) -> "java: {"
    # Java ends at Line 31646 (Index 31645) -> "},"
    
    print(f"Line 27678 content: {lines[27677]}")
    print(f"Line 31646 content: {lines[31645]}")
    
    part2 = lines[27677:31646]
    
    # Construct new content
    new_lines = []
    new_lines.extend(part1)
    new_lines.append("\n        ]\n    },\n") # Close GenAI modules and object
    new_lines.extend(part2)
    new_lines.append("\n}\n") # Close courseData
    
    print(f"New total lines: {len(new_lines)}")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

    print("File fixed successfully!")

if __name__ == "__main__":
    fix_file()
