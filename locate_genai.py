file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def locate():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        for i, line in enumerate(lines):
            if "genai:" in line or "genai :" in line:
                print(f"Found 'genai' key at line {i+1}: {line.strip()}")
                # Print next few lines to confirm it's the right object
                for j in range(1, 10):
                    if i+j < len(lines):
                        print(f"  Line {i+1+j}: {lines[i+j].strip()}")
                return

        print("❌ Could not find 'genai:' key")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    locate()
