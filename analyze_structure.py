import re

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def analyze_structure():
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    with open('structure_log.txt', 'w', encoding='utf-8') as log:
        log.write(f"Total lines: {len(lines)}\n")
        regex = re.compile(r'title:\s*"(.*?)"')
        for i, line in enumerate(lines):
            match = regex.search(line)
            if match:
                log.write(f"Line {i+1}: {match.group(1)}\n")

if __name__ == "__main__":
    analyze_structure()
