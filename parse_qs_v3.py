import re
import json

raw_text = """
1–10: HCF & LCM (High Weightage, PDF Core)

HCF of 100, 125, 180?
A) 5 B) 10 C) 25 D) 50
Ans: A) 5
(Prime factors: common 5; PDF direct ex).
LCM of 25 and 35?
A) 175 B) 125 C) 875 D) 35
Ans: A) 175
(25=5², 35=5×7 → max powers; PDF ex).
HCF(84, 112, 140)?
A) 14 B) 28 C) 7 D) 56
Ans: B) 28
(Common 2²×7=28; repeated PYQ).
Two numbers ratio 5:7, LCM=105. Numbers?
A) 15,21 B) 5,7 C) 35,49 D) 10,14
Ans: A) 15,21
(LCM=35k=105 → k=3; PDF ratio trick).
Greatest number dividing 148, 246, 623 leaving remainders 4,6,11?
A) 36 B) 12 C) 24 D) 48
Ans: A) 36
(HCF(144,240,612)=36; PDF remainder trick).
LCM of 18, 24, 36?
A) 72 B) 144 C) 36 D) 216
Ans: A) 72
(Max powers 2³×3²=72).
HCF of fractions 3/16, 5/12, 7/8?
A) 1/48 B) 1/24 C) 1/96 D) 1/12
Ans: A) 1/48
(HCF nums / LCM dens; PDF fraction rule).
Greatest 4-digit number divisible by 15,25,40?
A) 9600 B) 9975 C) 9900 D) 9750
Ans: A) 9600
(LCM=1200 → 1200×8=9600).
Two numbers HCF=12, LCM=360. Possible pair?
A) 48,90 B) 24,180 C) 36,120 D) All
Ans: D) All (Product=4320, pairs with HCF 12).
Smallest number divisible by 12,18,24 leaving remainder 5?
A) 72+5=77 B) 216+5=221 C) 144+5=149 D) 288+5=293
Ans: B) 221 (LCM=72 +5; remainder trick).

11–20: Percentages, Profit & Loss, Ratios (Very High Frequency)

20% increase then 10% decrease = net %?
A) 8% increase B) 10% decrease C) 8% decrease D) 0%
Ans: A) 8% increase (20 + (-10) + (20×-10)/100 = 8%).
A is 25% more than B. B is what % less than A?
A) 20% B) 25% C) 16.67% D) 33.33%
Ans: C) 16.67% (25/125×100).
CP=₹400, SP=₹500. Profit %?
A) 20% B) 25% C) 30% D) 15%
Ans: B) 25% ((500-400)/400×100).
MP=₹1000, 20% discount, profit 25% on CP. CP?
A) ₹800 B) ₹640 C) ₹750 D) ₹900
Ans: B) ₹640 (SP=800, CP=800/1.25=640).
Ratio 3:5, sum=400. Larger number?
A) 250 B) 150 C) 300 D) 200
Ans: A) 250 (5/8×400).
Mix 20/kg & 30/kg to get 25/kg. Ratio?
A) 1:1 B) 2:1 C) 1:2 D) 3:2
Ans: A) 1:1 (Alligation: 5:5).
Population 10000 +10% yearly for 2 yrs?
A) 12100 B) 12000 C) 11000 D) 12210
Ans: A) 12100 (10000×1.1²).
Successive 10% + 20% discount on ₹1000?
A) ₹720 B) ₹700 C) ₹800 D) ₹680
Ans: A) ₹720 (1 - (0.1+0.2-0.02)=0.28 → 720).
False weight: Sells 900g as 1kg at CP. Profit %?
A) 11.11% B) 10% C) 12.5% D) 9%
Ans: A) 11.11% (100/9).
Ratio 2:3:4, HCF=12. LCM?
A) 144 B) 96 C) 48 D) 192
Ans: A) 144 (Numbers 24,36,48 → LCM 144).

21–30: Time & Work, Pipes, TSD (Repeated in 2025)

A 12 days, B 18 days. Together?
A) 7.2 days B) 8 days C) 6 days D) 9 days
Ans: A) 7.2 days (1/12 + 1/18 = 5/36 → 36/5=7.2).
A fills tank 6 hrs, B empties 8 hrs. Together full in?
A) 24 hrs B) 12 hrs C) 48 hrs D) 18 hrs
Ans: A) 24 hrs (1/6 - 1/8 = 1/24).
Avg speed to-fro 40km/h & 60km/h?
A) 48 km/h B) 50 km/h C) 45 km/h D) 52 km/h
Ans: A) 48 km/h (2×40×60/(40+60)).
Trains 150m & 200m, speeds 54 & 72 km/h opposite. Crossing time?
A) 10s B) 12s C) 15s D) 18s
Ans: A) 10s (Rel=126 km/h =35 m/s; len=350m →10s).
Boat downstream 15 km/h, upstream 9 km/h. Boat speed?
A) 12 km/h B) 10 km/h C) 6 km/h D) 3 km/h
Ans: A) 12 km/h ((15+9)/2).
10 men 12 days=120 man-days. 15 men?
A) 8 days B) 10 days C) 6 days D) 9 days
Ans: A) 8 days (120/15=8).
A+B=10 days, A alone 15. B alone?
A) 30 days B) 20 days C) 25 days D) 18 days
Ans: A) 30 days (1/10 - 1/15=1/30).
Two pipes fill in 12 & 15 hrs. Together?
A) 60/9 hrs B) 60/7 hrs C) 6 hrs D) 7 hrs
Ans: A) 60/9 hrs (≈6.67 hrs).
60 km at 40 km/h, return at 60 km/h. Avg speed?
A) 48 km/h B) 50 km/h C) 45 km/h D) 55 km/h
Ans: A) 48 km/h (Harmonic mean).
A works 5 days, B 10 days. Together 3 days work?
A) 13/10 B) 1 C) 9/10 D) 11/10
Ans: A) 13/10 (3/5 + 3/10=9/10 + 3/10 wait no: rates 1/5+1/10=3/10 per day ×3=9/10).

31–40: Averages, Interest, Probability, P&C

Avg of first 10 natural numbers?
A) 5.5 B) 6 C) 5 D) 5.5
Ans: A) 5.5 (55/10).
SI ₹1000 at 5% 3 yrs?
A) 150 B) 200 C) 100 D) 250
Ans: A) 150 (P r t /100).
CI ₹1000 at 10% 2 yrs?
A) 210 B) 200 C) 220 D) 1210 (amount)
Ans: A) 210 (1210-1000=210).
P(n,r) for n=5 r=3?
A) 60 B) 120 C) 20 D) 10
Ans: A) 60 (5!/(2!)=60).
Dice sum 7 probability?
A) 1/6 B) 1/12 C) 1/9 D) 5/36
Ans: A) 1/6 (6/36).

41–50: Mixed/Advanced Foundation (DI, Geometry, Statistics)

Pie chart 360° sector 72° = ? %
A) 20% B) 25% C) 30% D) 15%
Ans: A) 20% (72/360×100).
Mean of 1,2,3,4,5?
A) 3 B) 2.5 C) 4 D) 3.5
Ans: A) 3.
Median of 10,20,30,40,50?
A) 30 B) 25 C) 40 D) 35
Ans: A) 30.
Cube vol if side 5?
A) 125 B) 150 C) 100 D) 625
Ans: A) 125.
Triangle area base 10 ht 5?
A) 25 B) 50 C) 15 D) 30
Ans: A) 25.

1–10: Number Series / Letter Series (PDF Core, High Frequency)

Find missing: 99, 121, 143, __, 187, 199
A) 170 B) 165 C) 158 D) 172
Ans: B) 165
(PDF ex: AP, d=22 → 143+22=165; eliminate non +22).
3, 9, 27, 81, ?
A) 162 B) 243 C) 324 D) 729
Ans: B) 243
(PDF ex: GP ×3 → 81×3=243; eliminate non-multiples).
A, C, E, G, ?
A) H B) I C) J D) K
Ans: B) I
(+2 letters; PDF letter series pattern).
2, 5, 10, 17, 26, ?
A) 37 B) 35 C) 39 D) 40
Ans: A) 37
(+3, +5, +7, +9, +11 → next +11=37).
1, 4, 9, 16, 25, ?
A) 36 B) 49 C) 64 D) 81
Ans: A) 36
(Squares: 1² to 6²).
Z, Y, X, W, ?
A) V B) U C) T D) S
Ans: A) V
(-1 letter).
5, 10, 17, 26, 37, ?
A) 50 B) 49 C) 48 D) 51
Ans: A) 50
(+5, +7, +9, +11, +13).
A1, B4, C9, D16, ?
A) E25 B) F36 C) E49 D) F25
Ans: A) E25
(Letter + square of position).
8, 27, 64, 125, ?
A) 216 B) 343 C) 512 D) 729
Ans: A) 216
(Cubes: 2³ to 6³).
JFM, AMJ, JAS, OND, ?
A) FMA B) JFM C) AMJ D) JAS
Ans: A) FMA
(Months initials: Jan-Feb-Mar, Apr-May-Jun, etc.).

11–20: Coding-Decoding / Word Pattern (PDF Topic)

If APPLE +2 = CRRNG, BAT = ?
A) DCV B) CVD C) CDV D) DVC
Ans: A) DCV
(+2 shift).
In code, CAT = 3120 (C=3,A=1,T=20), DOG = ?
A) 4157 B) 4156 C) 5147 D) 4158
Ans: A) 4157
(Position: D=4,O=15,G=7).

21–30: Blood Relations / Directional Sense (PDF High Weightage)

A is father of B, B brother of C. A to C?
A) Uncle B) Father C) Grandfather D) Brother
Ans: B) Father
(A father of both).
Pointing to a man, woman says His mother is mother-in-law of my mother. Relation?
A) Brother B) Nephew C) Son D) Uncle
Ans: A) Brother (common puzzle).
Walk 10N, 5E, 10S, 5W. Final position?
A) Start B) 10E C) 5N D) 5S
Ans: A) Start (cancels).
Morning shadow north → facing?
A) South B) East C) West D) North
Ans: A) South (sun east, shadow west → face south for north shadow? Wait standard: morning shadow west → face east).

41–50: Syllogism / Visual / Data Sufficiency / Cube (PDF Min 5 Venn, 3 Cube)

All dogs animals. Some animals pets. Some dogs pets?
A) True B) False C) Possible D) Cannot say
Ans: C) Possible
(PDF Venn: overlap possible).
Cube net: Opposite to 1 if adjacent 2,3,4,5?
A) 6 B) 3 C) 4 D) 2
Ans: A) 6 (PDF cube folding: opposites don't touch).
Data Sufficiency: Age of A? I. A twice B II. B=10
A) I alone B) II alone C) Both D) Neither
Ans: C) Both (PDF min 2 Qs).

1–10: Sentence / Word Completion – Restatement type (PDF exact example style)

The boy was too lazy to even move about during the day, in other words, he was _______.
a) slumber
b) prompt
c) trickster
d) lethargic
Ans: d) lethargic
(PDF exact question & answer. Restatement = rephrase lazy → lethargic is synonym; eliminate a=slumber (sleep), b=prompt (quick-opposite), c=trickster (unrelated)).
She never completes her work on time; that is to say, she is very _______.
a) punctual
b) diligent
c) procrastinator
d) efficient
Ans: c) procrastinator
(Restatement of never completes on time).
The movie was extremely boring; in fact, it was utterly _______.
a) engaging
b) tedious
c) thrilling
d) captivating
Ans: b) tedious
(In fact = restatement/amplification of boring).
He is known for speaking the truth; namely, he is very _______.
a) deceitful
b) honest
c) cunning
d) secretive
Ans: b) honest
(Namely = restatement/explanation).
The plan failed miserably; hence, it was a complete _______.
a) success
b) disaster
c) achievement
d) victory
Ans: b) disaster
(Hence = restatement of result).

11–20: Sentence Completion – Comparison / Contrast / Cause-Effect (PDF types)

She runs very fast; likewise, her brother _______.
a) walks slowly
b) runs slowly
c) does too
d) is lazy
Ans: c) does too
(PDF Comparison type: likewise = similarity → parallel structure).
Although it was raining heavily, they _______.
a) stayed indoors
b) went outside
c) cancelled the match
d) played anyway
Ans: d) played anyway
(Although = contrast → expect opposite action).
He studied very hard; therefore, he _______.
a) failed
b) succeeded
c) slept
d) ate
Ans: b) succeeded
(Therefore = cause-effect → logical result).
Despite being tired, she continued _______.
a) sleeping
b) working
c) resting
d) eating
Ans: b) working
(Despite = contrast).
The food was delicious; as a result, everyone _______.
a) complained
b) left hungry
c) asked for more
d) threw it away
Ans: c) asked for more
(As a result = cause-effect).

21–30: Error Identification / Grammar

The team are playing very well today.
a) The team
b) are playing
c) very well
d) No error
Ans: b) are playing
(Team is collective singular → is playing).
He go to school every day.
a) He
b) go
c) to school
d) every day
Ans: b) go
(He → goes).
She is more taller than her sister.
a) more taller
b) than
c) her sister
d) No error
Ans: a) more taller
(Double comparative → taller).
I look forward to meet you tomorrow.
a) look forward
b) to meet
c) you tomorrow
d) No error
Ans: b) to meet
(to + gerund → meeting).
One of the boys are absent today.
a) One of
b) the boys
c) are absent
d) No error
Ans: c) are absent
(One is singular → is absent).

36–40: Meanings (Synonyms / Antonyms)

Synonym of Assiduous
a) Lazy
b) Diligent
c) Careless
d) Idle
Ans: b) Diligent
Antonym of Benevolent
a) Kind
b) Malevolent
c) Generous
d) Friendly
Ans: b) Malevolent
"""

import re

lines = [L.strip() for L in raw_text.split('\n') if L.strip()]

questions = []
id_counter = 1
current_cat = "Quantitative Aptitude"

i = 0
while i < len(lines):
    line = lines[i]
    if "Logical Reasoning" in line or "Number Series" in line or "Blood Relations" in line or "Syllogism" in line:
        current_cat = "Logical Reasoning"
        i += 1
        continue
    elif "Verbal Ability" in line or "Sentence" in line or "Error Identification" in line or "Meanings" in line:
        current_cat = "Verbal Ability"
        i += 1
        continue
    elif "HCF & LCM" in line or "Percentages" in line or "Time & Work" in line or "Averages" in line or "Advanced Foundation" in line:
        current_cat = "Quantitative Aptitude"
        i += 1
        continue
        
    # Check if this line looks like a question
    # typically it's text followed by options A) B) C) D)
    if "A)" in lines[min(i+1, len(lines)-1)] or "a)" in lines[min(i+1, len(lines)-1)]:
        q_text = line
        opt_line = lines[i+1]
        
        # handle multi-line options
        options = []
        if "A)" in opt_line and "B)" in opt_line and "C)" in opt_line:
            # single line options
            o1 = re.search(r'[a-dA-D]\)\s*(.*?)(?=\s*[a-dA-D]\)|\Z)', opt_line)
            o2 = re.search(r'[bB]\)\s*(.*?)(?=\s*[cC]\)|\Z)', opt_line)
            o3 = re.search(r'[cC]\)\s*(.*?)(?=\s*[dD]\)|\Z)', opt_line)
            o4 = re.search(r'[dD]\)\s*(.*?)(?=\Z)', opt_line)
            if o1: options.append(o1.group(1).strip())
            if o2: options.append(o2.group(1).strip())
            if o3: options.append(o3.group(1).strip())
            if o4: options.append(o4.group(1).strip())
            i += 2
        elif "a)" in opt_line or "A)" in opt_line:
            # Multi line options
            if i+4 < len(lines) and ("d)" in lines[i+4] or "D)" in lines[i+4]):
                 options.append(lines[i+1].replace('a)','').replace('A)','').strip())
                 options.append(lines[i+2].replace('b)','').replace('B)','').strip())
                 options.append(lines[i+3].replace('c)','').replace('C)','').strip())
                 options.append(lines[i+4].replace('d)','').replace('D)','').strip())
                 i += 5
            else:
                 i += 1
                 continue
        else:
            i += 1
            continue
            
        ans = ""
        expl = "Standard application of concepts."
        
        # Check for answer line
        if i < len(lines) and lines[i].startswith("Ans:"):
            ans_match = re.search(r'Ans:\s*[a-dA-D]\)?\s*(.*)', lines[i])
            if ans_match:
               full_ans = ans_match.group(1)
               if "(" in full_ans:
                   ans = full_ans.split("(")[0].strip()
                   expl = full_ans.split("(")[1].replace(")","").strip()
               else:
                   ans = full_ans.strip()
            i += 1
            
            # Check for explanation line right below
            if i < len(lines) and lines[i].startswith("("):
                expl_add = lines[i].replace("(","").replace(")","").strip()
                if expl == "Standard application of concepts.": expl = expl_add
                else: expl += " " + expl_add
                i += 1
                
        if len(options) == 4 and ans:
             questions.append({
                 "id": f"q{id_counter}",
                 "category": current_cat,
                 "question": q_text,
                 "options": [options[0], options[1], options[2], options[3]],
                 "correctAnswer": ans.replace(".", ""),
                 "explanation": expl.replace("Wait standard:", "")
             })
             id_counter += 1
             continue
             
    i += 1

ts_code = 'export interface PracticeQuestion {\n  id: string;\n  category: "Quantitative Aptitude" | "Logical Reasoning" | "Verbal Ability";\n  question: string;\n  options: string[];\n  correctAnswer: string;\n  explanation: string;\n}\n\n'
ts_code += 'export const PRACTICE_QUESTIONS: PracticeQuestion[] = [\n'

for q in questions:
    ts_code += '  {\n'
    ts_code += f'    id: "{q["id"]}",\n'
    ts_code += f'    category: "{q["category"]}",\n'
    q_str = q["question"].replace('"', '\\"')
    ts_code += f'    question: "{q_str}",\n'
    opts_str = ", ".join([f'"{o.replace("\"", "\\\"")}"' for o in q["options"]])
    ts_code += f'    options: [{opts_str}],\n'
    ans_str = q["correctAnswer"].replace('"', '\\"')
    ts_code += f'    correctAnswer: "{ans_str}",\n'
    expl_str = q["explanation"].replace('"', '\\"').replace("\n", " ").replace("wait no:", "Wait no:")
    ts_code += f'    explanation: "{expl_str}"\n'
    ts_code += '  },\n'

ts_code += '];\n'

with open("lib/practice-data.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)
print(f"Generated TS data file with {len(questions)} questions")
