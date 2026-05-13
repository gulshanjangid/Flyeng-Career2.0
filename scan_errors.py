
import re

filename = 'lib/course-data.ts'

with open(filename, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Scanning {len(lines)} lines...")

# Find lines that start with backtick (ignoring whitespace)
# BUT are not valid delimiters.
# Valid lines:
# 1. `content: \`` (matches `content: `)
# 2. `\`` (just backtick, maybe trailing comma `\`,`)
# 3. Lines inside the `content` string can start with backtick if they are code blocks, e.g. ```python
#    But usually those are inside the string. 
#    The corruption we saw was AT THE FILE LEVEL (indentation similar to `</div>` or `},`).
#    The debris lines we saw had content like:
#    `seed=42\`). It forces...`
#    `index.ts\`, making sure...`
#    `List[dict]\`. Get really...`
#    They seem to start with a backtick immediately (no indent? or matching indent?).
#    In view_file, they had NO indent? Or same indent as div?
#    21812: `seed=42...` (No indent shown in my checks? 21812: `seed=...`)
#    22498: `List[dict]...` (No indent shown)
#    But 21810 had indentation.
#    So maybe checking for lines starting with `^`.*` is good.

debris_count = 0
for i, line in enumerate(lines):
    stripped = line.strip()
    # Check if line starts with backtick
    if stripped.startswith('`'):
        # Valid cases:
        # 1. ` (just closing backtick)
        # 2. `, (closing backtick with comma)
        # 3. ` `` (maybe triple backtick for markdown code block inside content?)
        #    BUT if it's inside content, checks are harder.
        #    However, the corruption is OUTSIDE the intended content block structure wise?
        #    No, strictly speaking, because of the missing comma or extra closing, it breaks the TS object structure.
        #    The corruption IS inside the file structure.
        
        # In the debris visible:
        # `seed=42\`). ...
        # `List[dict]\`. ...
        # They have text AFTER the backtick.
        
        # Valid `content` usually ends with:
        # ... </div>
        # `,
        
        # If a line is ONLY "`" or "`," it is likely valid (end of content).
        if stripped == '`' or stripped == '`,':
            continue
            
        # If it starts with ``` (markdown code block), it SHOULD be inside a string?
        # If we are strictly parsing TS, it's hard. 
        # But `course-data.ts` has huge multiline strings.
        # A line starting with ``` inside a string is VALID.
        # A line starting with `Text...` inside a string COULD be valid text.
        
        # The key differentiator: The debris lines appeared AFTER a `</div>` line (end of previous HTML) 
        # AND BEFORE the real closing backtick.
        # And they look like partial sentences starting with a backtick.
        
        # Let's print them to manual review.
        if stripped.startswith('`, questions:'):
             continue
             
        if len(stripped) > 5 and not stripped.startswith('```'):
             print(f"Line {i+1}: {stripped[:50]}...")
             debris_count += 1

print(f"Found {debris_count} potential debris lines.")
