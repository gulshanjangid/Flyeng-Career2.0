import re
import json

with open("lib/tcs-mock-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# The 8 coding questions provided by the user, formatted correctly
coding_qs = [
    {
        "subject": "Coding Logic",
        "question": "Problem Statement:\nA chocolate factory is packing chocolates into packets. The chocolate packets are placed on a conveyor belt, represented by an array of integers. Different types of chocolates are represented by positive integers, while an empty packet is represented by 0. The factory supervisor wants all the empty packets to be pushed to the end of the conveyor belt so they can be removed easily, while maintaining the relative order of the non-empty packets.\nWrite a program to move all zeros to the end of the array.\n\nConstraints:\n1 <= N <= 10^5 (Where N is the number of packets)\n0 <= A[i] <= 10^4 (Where A[i] is the value of the packet at the i-th position)\n\nTest Cases:\nTest Case 1:\nInput: N = 8, Arr = [4, 5, 0, 1, 9, 0, 5, 0]\nOutput: 4 5 1 9 5 0 0 0\nExplanation: All non-zero elements map original sequence, zeros shifted to back.\n\nTest Case 2:\nInput: N = 5, Arr = [0, 0, 0, 1, 2]\nOutput: 1 2 0 0 0",
        "options": ["O(N) Time, O(1) Space", "O(N^2) Time, O(1) Space", "O(N) Time, O(N) Space", "O(N log N) Time, O(1) Space"],
        "correctAnswer": "O(N) Time, O(1) Space",
        "explanation": "Standard Two-Pointer Approach (Fast pointer traversing, Slow pointer swapping non-zeros). Achieves O(N) Time constraint without extra arrays."
    },
    {
        "subject": "Coding Logic",
        "question": "Problem Statement:\nAn automobile company manufactures both two-wheelers (TW) and four-wheelers (FW). A factory manager wants to calculate the exact number of two-wheelers and four-wheelers produced based on the total number of vehicles and the total number of wheels currently in the assembly line.\nWrite a program to find the number of two-wheelers and four-wheelers given the inputs V (Total vehicles) and W (Total wheels).\n\nConstraints:\n2 <= W\nW % 2 == 0\nV < W\nIf inputs are invalid, print INVALID INPUT.\n\nTest Cases:\nTest Case 1:\nInput: V = 200, W = 540\nOutput: TW = 130 FW = 70\nExplanation: 130 * 2 = 260. 70 * 4 = 280. Total wheels = 540. Total vehicles = 200.\n\nTest Case 2:\nInput: V = 5, W = 8\nOutput: INVALID INPUT",
        "options": ["FW = (W - 2V)/2", "TW = (4V - W)/2", "FW = (4V - W)/2", "Both FW = (W - 2V)/2 and TW = (4V - W)/2"],
        "correctAnswer": "Both FW = (W - 2V)/2 and TW = (4V - W)/2",
        "explanation": "Algebraic equations: TW + FW = V; 2*TW + 4*FW = W. Multiplying first equation by 2 yields TW = (4V - W)/2. Subtracting yields FW = (W - 2V)/2."
    },
    {
        "subject": "Coding Logic",
        "question": "Problem Statement:\nTeam A has set a target of N-1 runs. Team B's goal is to score exactly N-1 runs to win. You are given an array of length N, where each element represents the maximum number of runs Team B can score on that particular ball.\nThe total number of balls Team B plays will equal the total number of runs they score. Starting from the first ball (index 0), your task is to determine if Team B can score exactly N-1 runs.\n\nInput Format:\nFirst line: Single integer N.\nSecond line: N space-separated integers a1, a2, ..., aN.\n\nOutput Format:\nSingle Boolean (true or false)\n\nConstraints:\n1 <= arr.length <= 10^5\n0 <= arr[i] <= 10^5",
        "options": ["Dynamic Programming", "Greedy / Jump Game pattern", "Binary Search", "Breadth-First Search"],
        "correctAnswer": "Greedy / Jump Game pattern",
        "explanation": "This logic maps perfectly to the classic \"Jump Game\" algorithm. Determine maximum reach sequentially. If maxReach >= N-1 at any point while iterating reachable indices, return true."
    },
    {
        "subject": "Coding Logic",
        "question": "Problem Statement:\nLuke has a bookshelf with n books, each with height a_i. He recently bought a new shelf to keep some of his books. He walks from left to right, deciding for each book whether to leave it or place it on the new shelf. Books on the new shelf must be in strictly increasing order of height.\nYour task is to find the maximum number of books Luke can place on his new shelf.\n\nInput Format:\nFirst line: integer n\nSecond line: n space-separated integers heights\n\nOutput Format:\nMax number of books on new shelf.\n\nConstraints:\n1 <= n <= 10^4\n0 <= a_i <= 10^8",
        "options": ["Longest Common Subsequence", "Knapsack 0/1", "Longest Increasing Subsequence (LIS)", "Kadane's Algorithm"],
        "correctAnswer": "Longest Increasing Subsequence (LIS)",
        "explanation": "This is a direct application of the Longest Increasing Subsequence (LIS) algorithm. To achieve optimal time for N=10^4, use the O(N log N) approach with Binary Search (Patience Sorting)."
    },
    {
        "subject": "Coding Logic",
        "question": "Problem Statement:\nA cruise ship tracks the number of guests entering and leaving the ship at every hour. You are given two integer arrays, E and L, both of size T.\nE[i]: guests entering at hour i.\nL[i]: guests leaving at hour i.\nFind the maximum number of guests present on the cruise at any given instance.\n\nConstraints:\n1 <= T <= 25\n0 <= E[i] <= 500\n0 <= L[i] <= 500\n\nTest Cases:\nInput: T = 5, E = [7, 0, 5, 1, 3], L = [1, 2, 1, 3, 4]\nOutput: 8\nExplanation:\nHour 1: 7 in, 1 out (Total 6)\nHour 2: 0 in, 2 out (Total 4)\nHour 3: 5 in, 1 out (Total 8, Maximum)",
        "options": ["O(T) running sum", "O(T^2) nested loop", "O(T log T) sorting", "Prefix Sum array approach"],
        "correctAnswer": "O(T) running sum",
        "explanation": "Simple O(T) running sum implementation. Initialize max_guests = 0, current_guests = 0. For each hour i, current_guests += E[i] - L[i]. Update max_guests."
    },
    {
        "subject": "Coding Logic",
        "question": "Problem Statement:\nSweet Seventeen (Base 17 to Decimal)\nGiven a string input representing a number in Base 17, convert it to a decimal (Base 10) integer. Digits are 0-9, and A-G (or a-g) represent 10 to 16.\n\nConstraints:\nString length <= 10 characters.\nValid alphanumeric Base 17.\n\nTest Cases:\nTest Case 1:\nInput: 1A\nOutput: 27\nExplanation: (1 * 17^1) + (10 * 17^0) = 17 + 10 = 27.\n\nTest Case 2:\nInput: 23GF\nOutput: 10980",
        "options": ["Iterate and multiply by 17^i", "int(val, 17)", "Both are valid approaches", "Bitwise shifting"],
        "correctAnswer": "Both are valid approaches",
        "explanation": "In Python or Java, native base conversion functions exist like int('1A', 17) or Integer.parseInt(val, 17). Manually, iterate the string in reverse multiplying mapped values by powers of 17."
    },
    {
        "subject": "Coding Logic",
        "question": "Problem Statement:\nPrior Greater Elements (Sunrise Building Problem)\nGiven an integer array representing heights of a series of buildings in a line, a building sees the sunrise if it is strictly taller than all buildings to its left. The first building always sees the sunrise.\nWrite a program to count exactly how many buildings see the sunrise.\n\nConstraints:\n1 <= N <= 10^5\n1 <= Height[i] <= 10^4\n\nTest Cases:\nTest Case 1:\nInput: N = 6, Arr = [7, 4, 8, 2, 9, 6]\nOutput: 3\nExplanation: Buildings 7, 8, 9.\n\nTest Case 2:\nInput: N = 4, Arr = [3, 4, 5, 8]\nOutput: 4",
        "options": ["O(N^2) backward scan", "O(N) single pass tracking maxHeight", "O(N log N) segment tree", "O(1) mathematics"],
        "correctAnswer": "O(N) single pass tracking maxHeight",
        "explanation": "Maintains a running `max_seen` variable. Loop i from 0 to N. If array[i] > max_seen: increment counter, update max_seen = array[i]. Exact O(N) constraint match."
    },
    {
        "subject": "Coding Logic",
        "question": "Problem Statement:\nOdd Balloon Color\nA party planner is arranging balloons. Colors are represented by single characters ('r' for red). Find the first color that appears an odd number of times in the sequence. If all appear even times, output 'All are even'.\n\nConstraints:\n1 <= N <= 50\nAlphabetic characters (Case matters).\n\nTest Cases:\nTest Case 1:\nInput: N = 7, Arr = ['r', 'g', 'b', 'b', 'g', 'y', 'y']\nOutput: r\nExplanation: 'r' appears 1 time (odd). First to meet condition.\n\nTest Case 2:\nInput: N = 4, Arr = [a, a, b, b]\nOutput: All are even",
        "options": ["O(N^2) counting", "O(N) hash map / frequency array", "Bitwise XOR operator", "Both Hash Map and Bitwise XOR"],
        "correctAnswer": "Both Hash Map and Bitwise XOR",
        "explanation": "If strictly looking for the *only* odd occurring element, Bitwise XOR is O(N) time O(1) space. However, to find the *first* occurring odd sequentially, a Hash Map counting frequencies, followed by a second pass, is safest."
    }
]

# We need to parse out Set 1, Set 2, Set 3
# and replace their last 2 questions with coding_qs 1-6
# Then we construct Set 4 and Set 5 by copying Set 2 and Set 3 but replacing last 2 questions with coding_qs 7-8

def to_dict(q_obj, qid, section):
    return f"""      {{
        id: "{qid}",
        section: "{section}",
        subject: "{q_obj['subject']}",
        question: `{q_obj['question']}`,
        options: {json.dumps(q_obj['options'])},
        correctAnswer: "{q_obj['correctAnswer']}",
        explanation: "{q_obj['explanation']}"
      }}"""

# We'll use regex to grab the arrays of questions for Sets 1, 2, 3
sets_match = list(re.finditer(r'id:\s*"tcs-2026-set[1-3]",\s*title:\s*".*?",\s*durationMins:\s*\d+,\s*totalQs:\s*\d+,\s*questions:\s*\[([\s\S]*?)\]\n\s*\}', content))

if len(sets_match) == 3:
    set1_qs = sets_match[0].group(1)
    set2_qs = sets_match[1].group(1)
    set3_qs = sets_match[2].group(1)
    
    # helper to replace last 2 questions (Coding Logic)
    def replace_coding(qs_string, coding1, coding2, offset):
        # find the last two objects
        # Instead, just split by \{ id: and rebuild
        objects = list(re.finditer(r'\{[\s\S]*?id:\s*"[^"]*"[\s\S]*?\}', qs_string))
        base_qs = qs_string[:objects[-2].start()] # everything before last two
        
        c1 = to_dict(coding1, f"s{offset}-q29", "Advanced")
        c2 = to_dict(coding2, f"s{offset}-q30", "Advanced")
        
        return base_qs + c1 + ",\n" + c2 + "\n    "

    new_set1 = replace_coding(set1_qs, coding_qs[0], coding_qs[1], 1)
    new_set2 = replace_coding(set2_qs, coding_qs[2], coding_qs[3], 2)
    new_set3 = replace_coding(set3_qs, coding_qs[4], coding_qs[5], 3)
    
    # Duplicate base to generate Set 4 and 5
    # For Set 4, use base of Set 2, change IDs
    new_set4 = re.sub(r's2-', 's4-', new_set2)
    new_set4 = replace_coding(new_set4, coding_qs[6], coding_qs[7], 4)
    # Fix IDs again just in case replace_coding broke them
    
    # For Set 5, use base of Set 3, change IDs
    new_set5 = re.sub(r's3-', 's5-', new_set3)
    # Give Set 5 some random questions for the end? The user provided 8 questions (which covers 4 sets).
    # Since we need 5 sets (10 coding qs), let's reuse Q1 and Q2 for Set 5.
    new_set5 = replace_coding(new_set5, coding_qs[0], coding_qs[1], 5)

    # Reconstruct whole file
    head = content[:sets_match[0].start(1)]
    mid1 = content[sets_match[0].end(1):sets_match[1].start(1)]
    mid2 = content[sets_match[1].end(1):sets_match[2].start(1)]
    tail = content[sets_match[2].end(1):] # this includes the closing ] at the end!
    
    # The tail has ']' and ';' after '}'
    # We need to insert Set 4 and Set 5 before the final '];'
    
    set4_text = f""",
  {{
    id: "tcs-2026-set4",
    title: "TCS NQT 2026 Ninja Level (Set 4)",
    durationMins: 90,
    totalQs: 30,
    questions: [
{new_set4}
    ]
  }}"""

    set5_text = f""",
  {{
    id: "tcs-2026-set5",
    title: "TCS NQT 2026 Digital Level (Set 5)",
    durationMins: 90,
    totalQs: 30,
    questions: [
{new_set5}
    ]
  }}"""

    tail = tail.replace("\n];", f"{set4_text}{set5_text}\n];")
    
    final_content = head + new_set1 + mid1 + new_set2 + mid2 + new_set3 + tail
    
    with open("lib/tcs-mock-data.ts", "w", encoding="utf-8") as f:
        f.write(final_content)
    print("Successfully injected 8 custom coding questions and expanded to 5 Mock Sets!")
else:
    print("Could not find 3 sets in regex.")
