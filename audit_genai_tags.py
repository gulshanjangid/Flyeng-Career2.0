import re

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def audit_genai_tags():
    print(f"Scanning GENAI content starting from line 20800 in {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    start_line = 20800
    if len(lines) < start_line:
        start_line = 0
        
    patterns = [
        (r'<\s+/', "Space between < and /"),
        (r'</\s+[a-zA-Z]', "Space between / and tag name"),
        (r'<\s+[a-zA-Z]', "Space between < and tag name"),
        (r'&lt;strong', "Escaped strong tag"),
        (r'&lt;span', "Escaped span tag"),
        (r'&lt;div', "Escaped div tag"),
    ]
    
    found = 0
    for i in range(start_line, len(lines)):
        line = lines[i]
        for pattern, desc in patterns:
            if re.search(pattern, line):
                print(f"Line {i+1}: {desc}")
                print(f"  {line.strip()[:100]}...")
                found += 1
                if found > 20: return

    if found == 0:
        print("✅ No issues found in GenAI section.")

if __name__ == "__main__":
    audit_genai_tags()
