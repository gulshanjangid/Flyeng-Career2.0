import re

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def audit_tags():
    print(f"Scanning {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    patterns = [
        (r'<\s+/', "Space between < and /"),
        (r'</\s+[a-zA-Z]', "Space between / and tag name"),
        (r'<\s+[a-zA-Z]', "Space between < and tag name"),
        (r'&lt;', "Escaped < symbol (might show as text)"),
        (r'`\s+<', "Backtick followed by space and < (indentation check)")
    ]
    
    found_issues = 0
    
    for i, line in enumerate(lines):
        # We only care about lines inside `content: ` blocks, roughly.
        # But global scan is safer.
        
        for pattern, desc in patterns:
            if re.search(pattern, line):
                print(f"Line {i+1}: {desc}")
                print(f"  {line.strip()[:100]}...") # Print snippet
                found_issues += 1
                if found_issues > 20: 
                    print("... (Stopping after 20 matches)")
                    return

    if found_issues == 0:
        print("✅ No obvious malformed tag patterns found.")

if __name__ == "__main__":
    audit_tags()
