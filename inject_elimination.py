import json
import re

elimination = {
  "id": "tcs-nqt-2026-elimination-cheat-sheet",
  "title": "TCS NQT 2026 Option Elimination Techniques",
  "description": "Hyper-detailed guide on Option Elimination. Crucial for speed: attempt all questions, eliminate 2-3 options in 10-15 secs per Q.",
  "icon": "Zap",
  "phase": 4,
  "phaseTitle": "Master Syllabus",
  "topics": [
    {
      "id": "nqt-elim-mindset",
      "title": "01. Key Mindset & Framework",
      "description": "Foundational principles before diving into specific section elimination.",
      "subTopics": [
        {
          "id": "nqt-elim-framework",
          "title": "Core Elimination Strategy",
          "concepts": [
            {"title": "POE (Process of Elimination)", "description": "Always scan options first → cross out obvious wrongs → compare remaining. If 2 left, guess (no penalty!)."},
            {"title": "Trap Spotting", "description": "TCS loves 'near-miss' options (e.g., forgot to subtract remainder in HCF, mismatched connector in Verbal)."},
            {"title": "Section Balance", "description": "Quant (calc traps), Reasoning (logic breaks), Verbal (context/grammar mismatches)."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Practice Drill: In mocks, note exactly why you eliminated an option (e.g., 'extreme word in RC').",
            "⚡ Time Hacks: If Q takes >1 min, quickly eliminate 2 + guess → move on."
          ]
        }
      ]
    },
    {
      "id": "nqt-elim-general",
      "title": "02. General Elimination Techniques",
      "description": "Foundational techniques applied across all sections.",
      "subTopics": [
        {
          "id": "nqt-elim-gen-core",
          "title": "Rules & Lookouts",
          "concepts": [
            {"title": "Extreme/Absolute Options", "description": "Eliminate 'always/all/never/only/none/every' unless explicitly supported."},
            {"title": "Mismatch with Data", "description": "If option contradicts given info or formula (e.g., non-multiples in AP/GP), eliminate immediately."},
            {"title": "Plug-In/Back-Solve", "description": "Substitute options into equation/pattern. Start with B or C (often correct)."},
            {"title": "Approximation/Rounding", "description": "Round numbers to eliminate far-off values quickly."}
          ],
          "formulas": [
            {"title": "Advanced Trick: Scan Vertically", "formula": "Read options column-wise for patterns (e.g., all positive except one negative)."},
            {"title": "Advanced Trick: Batch Elimination", "formula": "In sets (e.g., Reasoning seating), eliminate across Qs if one invalidates."}
          ],
          "proTips": [
            "⚡ Parity Check: If pattern is even, heavily eliminate odd options.",
            "⚡ Reverse Engineering: Assume option is true → see if it uniquely fits the Q."
          ]
        }
      ]
    },
    {
      "id": "nqt-elim-quant",
      "title": "03. Quantitative Aptitude Elimination",
      "description": "Specific traps for numerical and calculation based problems.",
      "subTopics": [
        {
          "id": "nqt-elim-quant-core",
          "title": "Numerical Triggers",
          "concepts": [
            {"title": "Calculation Traps", "description": "Eliminate if it definitely doesn't match quick approx/mental math (e.g., divisor ending)."},
            {"title": "Formula Mismatch", "description": "Use HCF×LCM=Product; definitively eliminate if the option fails this check."},
            {"title": "Number System Lookouts", "description": "Check place value position; eliminate if the place value doesn't securely match."}
          ],
          "formulas": [
            {"title": "Series Check", "formula": "In an AP, check the common difference `d`. Eliminate options not matching `+d`."},
            {"title": "Divisibility Rules", "formula": "Use divisibility to eliminate options that don't satisfy the demanded remainder strictly."}
          ],
          "proTips": [
            "⚡ Types Check: In geometric progressions (GP), solidly eliminate non-multiples.",
            "⚡ PYQ Trick: In Time Speed Distance, if the relative speed sign is physically impossible, firmly eliminate."
          ]
        }
      ]
    },
    {
      "id": "nqt-elim-logical",
      "title": "04. Logical Reasoning Elimination",
      "description": "Finding impossible logical statements, visual impossibilities, and boolean breaks.",
      "subTopics": [
        {
          "id": "nqt-elim-log-core",
          "title": "Logic Breaking Techniques",
          "concepts": [
            {"title": "Pattern Break", "description": "In series, eliminate if it purely does not fit the established AP/GP/Fib bounds."},
            {"title": "Diagram Inconsistency", "description": "In seating, unequivocally eliminate options that violently violate 'next to/opposite'."},
            {"title": "Visual/Cube Blocks", "description": "Eliminate if explicitly opposite faces are shown touching, or cuts are purely asymmetric."}
          ],
          "formulas": [
            {"title": "Syllogism Venn Check", "formula": "Draw quick overlaps. Eliminate mathematically impossible conclusions (e.g., 'all A are B' heavily invalidates 'no A is B')."},
            {"title": "Data Sufficiency", "formula": "Eliminate if statement 1 alone solidly suffices but the heavily tricky option requires both."}
          ],
          "proTips": [
            "⚡ Blood/Direction: Eliminate entirely if the gender or primary cardinal direction violently mismatches."
          ]
        }
      ]
    },
    {
      "id": "nqt-elim-verbal",
      "title": "05. Verbal Ability Elimination",
      "description": "Contextual mismatches, grammatical impossibilities, and sentence structure flaws.",
      "subTopics": [
        {
          "id": "nqt-elim-verb-core",
          "title": "Grammar & Context Filters",
          "concepts": [
            {"title": "Grammar/Error ID", "description": "Check Subject-Verb agreement natively first. Eliminate plural verbs for singular collective subjects."},
            {"title": "RC Inference Tricks", "description": "Eliminate extremes/non-implied choices. If it's a direct explicit quote for an 'inference' question, forcefully eliminate."}
          ],
          "formulas": [
            {"title": "Completion: Comparison vs Contrast", "formula": "If the sentence uses 'but', eliminate agreeing options. If it uses 'likewise', rigidly eliminate purely opposite ones."},
            {"title": "Completion: Cause-Effect", "formula": "If jumping words like 'therefore' appear, absolutely eliminate any non-result options."}
          ],
          "proTips": [
            "⚡ Para Jumbles: Solidly eliminate any completely broken links or wrong openers starting completely with a native hanging pronoun.",
            "⚡ Formal Language: Definitively eliminate completely casual contractions (can't, won't) exclusively in formal contexts."
          ]
        }
      ]
    }
  ]
}

with open("lib/aptitude-data.ts", "r", encoding="utf-8") as f:
    text = f.read()

# Locate insertion point which is before the tcs-nqt-2026-cheat-sheet starts
start = text.find('\"tcs-nqt-2026-cheat-sheet\": {')
if start == -1:
    print('Failed to find hook point')
else:
    e = json.dumps(elimination, indent=4)
    e = re.sub(r'\"([a-zA-Z_][a-zA-Z0-9_]*)\":', r'\1:', e)
    
    # We want to inject it just before the tcs-nqt-2026-cheat-sheet
    final_text = text[:start] + f'"tcs-nqt-2026-elimination-cheat-sheet": {e},\n  ' + text[start:]
    
    with open("lib/aptitude-data.ts", "w", encoding="utf-8") as f:
        f.write(final_text)
    
    print('Fully completely injected the elimination cheat sheet.')
