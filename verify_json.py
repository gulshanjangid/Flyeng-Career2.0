
import json
import os

try:
    with open("master_curriculum.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    print("JSON Load Success!")
    keys = list(data.keys())
    print(f"Keys found: {keys}")
    
    # Check last key content
    last_key = keys[-1]
    print(f"Last Key: {last_key}")
    print(f"Content type: {type(data[last_key])}")
    print(f"Lessons in last key: {len(data[last_key].get('lessons', []))}")
    
except json.JSONDecodeError as e:
    print(f"JSON Decode Error: {e}")
    # Read tail
    with open("master_curriculum.json", "r", encoding="utf-8") as f:
        lines = f.readlines()
        print("Last 10 lines:")
        for line in lines[-10:]:
            print(line.strip())
except Exception as e:
    print(f"Error: {e}")
