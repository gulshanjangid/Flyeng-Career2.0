import os

def clean_file():
    target_file = 'lib/course-data.ts'
    
    with open(target_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    start_index = -1
    end_index = -1
    
    # Locate the start: "python: pythonCourse"
    for i, line in enumerate(lines):
        if 'python: pythonCourse' in line:
            start_index = i
            break
            
    # Locate the end: "};" at the end of the file
    # We search from the end backwards
    for i in range(len(lines) - 1, -1, -1):
        if '};' in line: # checking the loop variable 'line' is wrong if using range, need lines[i]
            # Wait, correcting logic
            pass
            
    for i in range(len(lines) - 1, -1, -1):
        if lines[i].strip() == '};':
            end_index = i
            break

    if start_index != -1 and end_index != -1:
        # We want to keep lines up to start_index (inclusive)
        # And keep lines from end_index (inclusive)
        # We want to DELETE everything between them.
        
        # Check if there are lines to delete
        if start_index < end_index - 1:
            print(f"Deleting lines from {start_index+1} to {end_index-1}")
            
            new_lines = lines[:start_index+1] + lines[end_index:]
            
            # Write back
            with open(target_file, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            print("Successfully cleaned up the file.")
        else:
            print("No lines to delete between target markers.")
    else:
        print(f"Could not find markers. Start: {start_index}, End: {end_index}")

if __name__ == "__main__":
    clean_file()
