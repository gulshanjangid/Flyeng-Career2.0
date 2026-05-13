import re

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\lib\course-data.ts'

def find_duplicates():
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        print(f"Total lines: {len(lines)}")
        
        # Search for Module 6 Title
        title_pattern = "6. Transformers & Modern LLM Architecture"
        count = 0
        for i, line in enumerate(lines):
            if title_pattern in line:
                count += 1
                print(f"Found Module 6 Title at line {i+1}: {line.strip()}")
                
        if count > 1:
            print("❌ DUPLICATE DETECTED!")
        else:
            print("✅ No duplicates found for Module 6 Title.")
            
        # Search for module ID start
        id_pattern = 'id: "genai-6"' # or 'id: "genai-6",' since it's likely a property
        # Actually it might be implicit if it's just in the array, but genai-6 lessons need a parent module.
        # Let's search for just the string "Transformers & Modern" to be safe.
        
        # Also check for lesson duplication "genai-6-1"
        lesson_pattern = 'id: "genai-6-1"'
        l_count = 0
        for i, line in enumerate(lines):
            if lesson_pattern in line:
                l_count += 1
                print(f"Found Lesson 6.1 at line {i+1}: {line.strip()}")
                
        if l_count > 1:
            print("❌ DUPLICATE LESSON DETECTED!")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    find_duplicates()
