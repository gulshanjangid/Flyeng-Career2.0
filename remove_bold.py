import os

file_path = r'c:\Users\hp\Desktop\Flyeng Career\Final Folder\app\ai-tools\dsa-visualizer\algorithms.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content.replace('**', '')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Removed ** from algorithms.ts")