
import re

def verify_modules():
    file_path = r'lib/course-data.ts'
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Regex to find module titles (assuming they start with a number and a dot, inside title: "...")
        # Note: Lesson titles also match this pattern (e.g., "1.1"), but Module titles clearly start with "X. "
        # We can look for the specific strings provided by the user to be exact, 
        # or just list all "title:" lines that look like main modules.
        
        # Pattern for "title: "1. ..."" or "title: "16. ...""
        # We'll valid matches are "1. ", "2. ", ... "16. "
        
        matches = re.findall(r'title:\s*"((\d+)\.\s.*?)"', content)
        
        print(f"Found {len(matches)} potential module titles (checking for 1-16):")
        
        found_modules = set()
        for title, num in matches:
            # Filter out lesson titles like "1.1" (which would be captured as "1.1" by a simpler regex, 
            # but here our regex (\d+) captures the main number. 
            # Wait, "1.1" is "title: "1.1 ...". 
            # My regex `(\d+)\.` will match "1." in "1.1".
            # Let's refine. Module titles usually don't have a second dot immediately?
            # Actually, the user's titles are "1. Introduction...", "16. AI Ecosystem..."
            # Lessons are "1.1 ...", "16.1 ..."
            
            # Let's check if the title starts with "Number. " (space) vs "Number.Number"
            
            if re.match(r'^\d+\.\s', title):
                print(f"✅ {title}")
                found_modules.add(int(num))
            # else:
            #     print(f"  (Lesson?) {title}")
                
        missing = []
        for i in range(1, 17):
            if i not in found_modules:
                missing.append(i)
                
        if not missing:
            print("\n🎉 SUCCESS: All 16 Modules are present!")
        else:
            print(f"\n❌ ERROR: Missing Modules: {missing}")
            
    except Exception as e:
        print(f"Error reading file: {e}")

if __name__ == "__main__":
    verify_modules()
