import re

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'
output_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\audit_report.txt'

def audit():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        report = []
        report.append(f"Total lines: {len(lines)}")
        
        # Check module definition
        report.append("\n--- Scanning for '6. Transformers' title ---")
        for i, line in enumerate(lines):
            if "6. Transformers & Modern LLM Architecture" in line:
                report.append(f"Line {i+1}: {line.strip()}")

        # Check lesson 6-1
        report.append("\n--- Scanning for 'genai-6-1' ---")
        for i, line in enumerate(lines):
            if "genai-6-1" in line:
                report.append(f"Line {i+1}: {line.strip()}")
                
        # Check end of file structure explicitly
        report.append("\n--- Last 20 lines ---")
        for i, line in enumerate(lines[-20:]):
            report.append(f"Line {len(lines)-20+i+1}: {line.strip()}")

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(report))
            
        print("✅ Audit complete. Check audit_report.txt")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    audit()
