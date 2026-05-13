
import re

file_path = 'lib/course-data.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

lesson_pattern = r'id: "genai-(\d+)-(\d+)"'
matches = re.findall(lesson_pattern, content)

stats = {}
for mod_id, lesson_id in matches:
    mod_num = int(mod_id)
    if mod_num not in stats:
        stats[mod_num] = set()
    stats[mod_num].add(int(lesson_id))

print("AUDIT_START")
sorted_mods = sorted(stats.keys())
for m in sorted_mods:
    count = len(stats[m])
    print(f"MOD {m}: {count} lessons")
print("AUDIT_END")
