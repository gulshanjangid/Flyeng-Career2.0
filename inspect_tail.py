file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def inspect_tail():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        print(f"Total lines: {len(lines)}")
        print("--- LAST 50 LINES ---")
        for i, line in enumerate(lines[-50:]):
            print(f"{len(lines)-50+i+1}: {line.strip()}")
            
    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    inspect_tail()
