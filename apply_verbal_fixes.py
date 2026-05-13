import json
import re

quant = {
  "id": "tcs-nqt-2026-cheat-sheet",
  "title": "TCS NQT 2026 Quantitative Cheat Sheet",
  "description": "Comprehensive, ultra-dense technical summary mapping the exact pattern of TCS NQT 2026 Foundation Numerical Ability.",
  "icon": "Target",
  "phase": 4,
  "phaseTitle": "Master Syllabus",
  "topics": [
    {
      "id": "nqt-number-system",
      "title": "01. Number System & Divisibility",
      "description": "Fundamental numeric properties, cyclicity, remainders, and divisibility matrices.",
      "subTopics": [
        {
          "id": "nqt-ns-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Classification", "description": "Natural (1+), Whole (0+), Integers(...,-1,0,1,...), Prime (2,3,5...), Co-Prime (HCF=1)."},
            {"title": "Divisibility Rules", "description": "<b>3/9:</b> Sum of digits. <b>4:</b> Last 2 digits. <b>8:</b> Last 3. <b>11:</b> |Sum(Odd pos) - Sum(Even pos)| = 0 or 11. <b>7/13/17:</b> Osculator method."}
          ],
          "formulas": [
            {"title": "Factorial (n!)", "formula": "n! = n * (n-1) * ... * 1. Note: 0! = 1. Trailing zeros in n! = [n/5] + [n/25] + [n/125] + ..."},
            {"title": "Remainder Theorem", "formula": "(A * B * C) % N = [(A%N) * (B%N) * (C%N)] % N"},
            {"title": "Fermat's Theorem", "formula": "a^(p-1) / p leaves remainder 1 (if p is prime and a is not divisible by p)."}
          ],
          "proTips": [
            "⚡ Unit Digit Cyclicity: 2,3,7,8 cycle every 4 powers. 4,9 cycle every 2. 0,1,5,6 always end in themselves.",
            "⚡ Number of Factors of N = (p^a)(q^b) is (a+1)(b+1)."
          ]
        }
      ]
    },
    {
      "id": "nqt-hcf-lcm",
      "title": "02. HCF & LCM Applications",
      "description": "Greatest common divisors and recursive multi-fraction synchronizations.",
      "subTopics": [
        {
          "id": "nqt-hcf-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Definitions", "description": "HCF perfectly divides numbers. LCM is perfectly divisible by numbers."}
          ],
          "formulas": [
            {"title": "Base Equation", "formula": "HCF(a,b) * LCM(a,b) = a * b"},
            {"title": "Fractions", "formula": "HCF = HCF(num)/LCM(den). LCM = LCM(num)/HCF(den)."},
            {"title": "Remainder Logic", "formula": "Greatest number dividing x,y,z leaving r1,r2,r3: HCF(x-r1, y-r2, z-r3)."}
          ],
          "proTips": [
            "⚡ Synchronous Events (traffic lights/bells): Always find the LCM of given intervals.",
            "⚡ Difference Rule: The HCF of any two numbers NEVER exceeds their absolute difference."
          ]
        }
      ]
    },
    {
      "id": "nqt-percentages",
      "title": "03. Percentages & Depreciation",
      "description": "Scaling ratios, population decay, bounding limits and election algorithms.",
      "subTopics": [
        {
          "id": "nqt-perc-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Base Shift", "description": "If A is x% more than B, B is [(x)/(100+x)] * 100% less than A."}
          ],
          "formulas": [
            {"title": "Successive % Change", "formula": "Net = X + Y + (XY/100). (Use negative for decrease)."},
            {"title": "Population Dynamics", "formula": "Final = Initial * (1 ± R/100)^N"},
            {"title": "Passing Marks", "formula": "Total Marks = (Difference in Marks) / (Difference in %)"}
          ],
          "proTips": [
            "⚡ Memorize Fractional Equivalents natively: 1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.",
            "⚡ Product Constancy: If Price +25% (1/4), Consumption must be -20% (1/5) to keep Expenditure constant."
          ]
        }
      ]
    },
    {
      "id": "nqt-profit-loss",
      "title": "04. Profit, Loss & Discount",
      "description": "Cost anchoring, marked price manipulation, and dishonest vendor equations.",
      "subTopics": [
        {
          "id": "nqt-pl-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Base Anchors", "description": "Profit/Loss is ALWAYS calculated on CP. Discount is ALWAYS calculated on MP."}
          ],
          "formulas": [
            {"title": "Yield Equation", "formula": "SP = CP * (1 ± Profit/Loss%). Also SP = MP * (1 - Discount%)."},
            {"title": "Direct CP to MP", "formula": "MP/CP = (100 + Profit%) / (100 - Discount%)"},
            {"title": "Dishonest Dealer", "formula": "Profit% = (True Weight - False Weight) / False Weight * 100"}
          ],
          "proTips": [
            "⚡ Buy X Get Y Free: Equivalent Discount% = [Y / (X+Y)] * 100.",
            "⚡ Selling 2 items at same SP, one at x% profit, other at x% loss -> NET LOSS = (x/10)^2 %."
          ]
        }
      ]
    },
    {
      "id": "nqt-sici",
      "title": "05. Simple & Compound Interest",
      "description": "Linear and exponential asset compounding, discrepancy deltas, and split terms.",
      "subTopics": [
        {
          "id": "nqt-sici-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "SI vs CI Properties", "description": "SI grows linearly. CI grows exponentially. 1st year SI = 1st year CI (if compounded annually)."}
          ],
          "formulas": [
            {"title": "SI Formula", "formula": "SI = (P * R * T) / 100. Amount = P + SI."},
            {"title": "CI Formula", "formula": "Amount = P * (1 + R/100)^T. CI = Amount - P."},
            {"title": "2-Year CI-SI Difference", "formula": "Diff = P * (R/100)^2"},
            {"title": "3-Year CI-SI Difference", "formula": "Diff = P * (R/100)^2 * (3 + R/100)"}
          ],
          "proTips": [
            "⚡ Half-Yearly: Rate becomes R/2, Time becomes 2T. Quarterly: R/4, 4T.",
            "⚡ Effective 2-Yr CI Rate: It's exactly R + R + (R^2)/100."
          ]
        }
      ]
    },
    {
      "id": "nqt-ratio",
      "title": "06. Ratio, Proportion & Ages",
      "description": "Linear proportional division, mixtures balancing, and temporal boundary anchoring.",
      "subTopics": [
        {
          "id": "nqt-ratio-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Proportion Law", "description": "a:b :: c:d implies ad = bc (Product of extremes = Product of means)."},
            {"title": "Ages Rule", "description": "Age difference between two people is CONSTANT across all times (past, present, future)."}
          ],
          "formulas": [
            {"title": "Third & Fourth Proportions", "formula": "Third prop to a,b = (b^2)/a. Fourth to a,b,c = (b*c)/a. Mean prop = sqrt(a*b)."},
            {"title": "Componendo & Dividendo", "formula": "If a/b = c/d, then (a+b)/(a-b) = (c+d)/(c-d)."}
          ],
          "proTips": [
            "⚡ Merging Ratios: To combine a:b and b:c, find LCM of 'b' or use N-method: a*b1 : b1*b2 : b2*c.",
            "⚡ Coin Problems: Always multiply number of coins by their exact denomination value to map to Total Value."
          ]
        }
      ]
    },
    {
      "id": "nqt-tsd",
      "title": "07. Time, Speed & Distance / Trains / Boats",
      "description": "Harmonic averages, relative collision velocities, and fluid offset shifts.",
      "subTopics": [
        {
          "id": "nqt-tsd-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Relative Speed", "description": "Same direction: (S1 - S2). Opposite direction: (S1 + S2)."},
            {"title": "Boats & Streams", "description": "Downstream Ds = B + S. Upstream Us = B - S. Boat = (Ds+Us)/2, Stream = (Ds-Us)/2."}
          ],
          "formulas": [
            {"title": "Average Speed (Equal Dist)", "formula": "Avg Speed = (2xy) / (x + y). Harmonic Mean."},
            {"title": "Unit Conversions", "formula": "km/h to m/s -> Multiply by 5/18. m/s to km/h -> Multiply by 18/5."},
            {"title": "Train Crossings", "formula": "Time = (L_train + L_object) / Relative Speed. (Object length = 0 for poles/men)."}
          ],
          "proTips": [
            "⚡ Early/Late Difference: Distance = (S1*S2)/(S1-S2) * Time Difference.",
            "⚡ Bullet/Gunshot Trick: Distance = Speed of Sound * Difference in Time Intervals."
          ]
        }
      ]
    },
    {
      "id": "nqt-timework",
      "title": "08. Time & Work / Pipes & Cisterns",
      "description": "Concurrent completion rates, alternate day cycles, and positive/negative flows.",
      "subTopics": [
        {
          "id": "nqt-tw-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Efficiency & Time", "description": "Efficiency is strictly inversely proportional to Time. More efficiency = Less Time."},
            {"title": "Combined Work", "description": "If A = x days, B = y days. Together = (xy)/(x+y) days."}
          ],
          "formulas": [
            {"title": "MDH Formula", "formula": "(M1 * D1 * H1) / W1 = (M2 * D2 * H2) / W2"},
            {"title": "Pipes Filling/Emptying", "formula": "Net 1hr work = 1/A + 1/B - 1/C (where C is the exit pipe)."}
          ],
          "proTips": [
            "⚡ LCM Method: Always assume Total Work = LCM of given days to avoid fractions entirely.",
            "⚡ Alternate Days: Find total efficiency for a full 2-day combined cycle first before dividing total work."
          ]
        }
      ]
    },
    {
      "id": "nqt-pnc",
      "title": "09. Permutations, Combinations & Probability",
      "description": "Combinatorial boundaries, factorial matrices, conditional intersections.",
      "subTopics": [
        {
          "id": "nqt-pnc-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "AND vs OR", "description": "AND (both conditions must occur) = Multiply. OR (either condition) = Add."},
            {"title": "Basic Probability", "description": "P(E) = Desired Outcomes / Total Possible Outcomes. P(Not E) = 1 - P(E)."}
          ],
          "formulas": [
            {"title": "Permutations (Arrangement)", "formula": "nPr = n! / (n-r)!. Words with repeating letters: n! / (p1! * p2! ...)."},
            {"title": "Combinations (Selection)", "formula": "nCr = n! / [r! * (n-r)!]. Note: nCr = nCn-r."},
            {"title": "Circular Permutations", "formula": "Objects in circle: (n-1)!. Pearls in necklace: (n-1)! / 2."}
          ],
          "proTips": [
            "⚡ Vowels Together: Bind them as a single rigid super-block. Then multiply by their internal permutations.",
            "⚡ Dice Outcomes: 2 Dice Total = 36. 3 Dice = 216. Highest probability sum for 2 dice is explicitly exactly 7 (6/36)."
          ]
        }
      ]
    },
    {
      "id": "nqt-geometry",
      "title": "10. Geometry & Mensuration",
      "description": "Rigid 2D boundaries, 3D fluid capacities, theorem validations natively.",
      "subTopics": [
        {
          "id": "nqt-geom-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Triangles", "description": "Sum of 2 sides > 3rd side. Pythagoras: H^2 = P^2 + B^2."},
            {"title": "Euler's Polyhedron", "description": "Faces + Vertices - Edges = 2."}
          ],
          "formulas": [
            {"title": "2D Areas", "formula": "Equilateral Triangle: (sqrt(3)/4)*a^2. Circle: πr^2. Trapezium: 0.5 * (a+b) * h."},
            {"title": "3D Volumes & Surface", "formula": "Cone Vol: (1/3)πr^2h. Sphere Vol: (4/3)πr^3. Cylinder CSA: 2πrh. Hemisphere TSA: 3πr^2."}
          ],
          "proTips": [
            "⚡ Internal Angle of Regular Polygon = [180 * (n-2)] / n. Exterior Angle = 360 / n.",
            "⚡ Square Diagonal = a√2. Cube Diagonal = a√3."
          ]
        }
      ]
    }
  ]
}

logic = {
  "id": "tcs-nqt-2026-reasoning-cheat-sheet",
  "title": "TCS NQT 2026 Logical Reasoning Cheat Sheet",
  "description": "Comprehensive, ultra-dense technical summary mapping the exact pattern of TCS NQT 2026 Foundation Reasoning Ability.",
  "icon": "Brain",
  "phase": 4,
  "phaseTitle": "Master Syllabus",
  "topics": [
    {
      "id": "nqt-series-alpha",
      "title": "01. Number & Alphabet Series",
      "description": "Mathematical progressions, sequential shifts, twin primes, alternating logic.",
      "subTopics": [
        {
          "id": "nqt-series-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Alphabet Mapping", "description": "A=1, B=2 ... Z=26. Reverse: Z=1 ... A=26 (Reverse = 27 - Forward position)."},
            {"title": "Number Patterns", "description": "Squares (1,4,9,16), Cubes (1,8,27,64), Primes (2,3,5,7,11,13), Fibonacci (1,1,2,3,5,8)."}
          ],
          "formulas": [
            {"title": "Opposite Letter Pairs", "formula": "A-Z (AZad), B-Y (BoY), C-X (CruX), D-W (DoWn), E-V (EVen), F-U (FUll), G-T (GT road), H-S (HighSchool), I-R (Indian Rail), J-Q (Jungle Queen), K-P (KanPur), L-O (LOve), M-N (MaN)."}
          ],
          "proTips": [
            "⚡ EJOTY Rule: Memorize 5,10,15,20,25. E=5, J=10, O=15, T=20, Y=25 for immediate index retrieval.",
            "⚡ Double Difference: If series jumps erratically, test difference of the difference layer iteratively."
          ]
        }
      ]
    },
    {
      "id": "nqt-seating",
      "title": "02. Seating Arrangements",
      "description": "Geometric bindings, center-facing vectors vs outbound vectors, relative nodes.",
      "subTopics": [
        {
          "id": "nqt-seat-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Linear Dynamics", "description": "Facing North: Right is East, Left is West. Facing South: Right is West, Left is East."},
            {"title": "Circular Dynamics", "description": "Center Facing: Left = Clockwise, Right = Anti-Clockwise. Outward Facing: Left = Anti, Right = Clockwise."}
          ],
          "formulas": [
            {"title": "Rotational Mapping", "formula": "For N persons in a circle facing center, person directly opposite sits exactly N/2 positions away."}
          ],
          "proTips": [
            "⚡ Absolute Anchor Rule: Start drawing exclusively with definitive 'Left/Right' statements. NEVER start with 'A is between B and C' (too many cases).",
            "⚡ Edge Tracking: Keep track of absolute line limits if ends are defined."
          ]
        }
      ]
    },
    {
      "id": "nqt-blood",
      "title": "03. Blood Relations",
      "description": "Generational trees, coded boolean markers, pointing paradoxes natively.",
      "subTopics": [
        {
          "id": "nqt-br-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Symbology", "description": "Male (+), Female (-), Sibling (- / horizontal line), Marriage (=), Generation drop (Vertical line down)."},
            {"title": "Core Relationships", "description": "Paternal = Father's side. Maternal = Mother's side. Nephew/Niece = Sibling's child."}
          ],
          "formulas": [
            {"title": "Generational Levels", "formula": "Gen 0 (Self, Siblings, Cousins, Spouse). Gen +1 (Parents, Uncles/Aunts). Gen -1 (Children, Nephews/Nieces)."}
          ],
          "proTips": [
            "⚡ Backward Decoding: In 'A @ B $ C', start reading/drawing the tree backwards rigidly from C to exactly A.",
            "⚡ The 'My/Only' Keyword: If facing a 'pointing to photograph' query, center exactly on the word 'my/mine' and replace it with speaker's definitive identity."
          ]
        }
      ]
    },
    {
      "id": "nqt-direction",
      "title": "04. Direction Sense & Shadows",
      "description": "Compass grids, Pythagorean shortest-distance algorithms, solar projections.",
      "subTopics": [
        {
          "id": "nqt-dir-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Compass Standard", "description": "North (Top), South (Bottom), East (Right), West (Left). NE, NW, SE, SW."},
            {"title": "Turn Metrics", "description": "Right Turn = +90 Degrees Clockwise. Left Turn = -90 Degrees Anti-Clockwise."}
          ],
          "formulas": [
            {"title": "Shortest Distance", "formula": "D = sqrt( (X2-X1)^2 + (Y2-Y1)^2 ). Standard Pythagorean Hypotenuse."},
            {"title": "Shadow Constraints", "formula": "Sunrise (Sun in East): Shadows fall strictly WEST. Sunset (Sun in West): Shadows fall strictly EAST. 12 Noon: NO shadow explicitly."}
          ],
          "proTips": [
            "⚡ Morning Face Setup: If walking towards North in the morning, shadow falls tightly to your Left side.",
            "⚡ U-Turn Equivalent: Two consecutive Right turns or Two consecutive Left turns = Facing opposite initial direction."
          ]
        }
      ]
    },
    {
      "id": "nqt-syllogism",
      "title": "05. Syllogism (Logical Deductions)",
      "description": "Venn intersections, definite false versus possible true boolean logic.",
      "subTopics": [
        {
          "id": "nqt-syllo-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Absolute Propositions", "description": "Universal Positive: ALL A are B (A inside B). Universal Negative: NO A is B (A detached from B)."},
            {"title": "Partial Propositions", "description": "Particular Positive: SOME A are B (A and B overlap). Particular Negative: SOME A are NOT B."}
          ],
          "formulas": [
            {"title": "Only a Few Logic", "formula": "'Only a few A are B' strictly implies: BOTH 'Some A are B' AND 'Some A are NOT B' are definitively true."}
          ],
          "proTips": [
            "⚡ Definite Conclusion Rule: Must rigidly be entirely TRUE in every single completely possible geometrical Venn diagram natively drawn.",
            "⚡ Possibility Rule: True if logically valid in even ONE extremely warped (but technically legal) Venn diagram representation."
          ]
        }
      ]
    },
    {
      "id": "nqt-coding",
      "title": "06. Coding & Decoding",
      "description": "Matrix transpositions, direct substitutions, word logic shifts.",
      "subTopics": [
        {
          "id": "nqt-cd-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Shift Coding", "description": "BAT -> D CV (+2 to each letter explicitly)."},
            {"title": "Deciphering Sentences", "description": "'pit na mo' = 'come here', 'na sa' = 'go here' -> 'na' definitively means 'here'."}
          ],
          "formulas": [
            {"title": "Vowel vs Consonant Separation", "formula": "Vowels (A, E, I, O, U) undergo completely separate operations (e.g., Vowels +1, Consonants -1)."}
          ],
          "proTips": [
            "⚡ Diagonal Shifts: In a 5-letter word, Letter 1 shifts and sits exactly at Position 5, L2 at P4, L3 at P3, etc.",
            "⚡ Arithmetic Codes: CAT = 3+1+20 = 24. Always quickly check sum, product, or reversed alphabetical sum heavily natively."
          ]
        }
      ]
    },
    {
      "id": "nqt-data-suff",
      "title": "07. Data Sufficiency",
      "description": "Evaluating minimum necessary datasets for absolute definitive outputs.",
      "subTopics": [
        {
          "id": "nqt-dsuff-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "The Golden Workflow", "description": "Test Stmt 1 alone severely. Then strictly test Stmt 2 alone exclusively. Only if BOTH fail individually, brutally combine them."}
          ],
          "formulas": [
            {"title": "Uniqueness Requirement", "formula": "If the question asks 'What is X?', the data is only sufficient if X yields a single, definitive absolute value. Not a range (unless asked)."}
          ],
          "proTips": [
            "⚡ Trap Identification: Never computationally assume explicitly geometric figures are perfectly drawn precisely to absolute scale (unless entirely specified).",
            "⚡ Do exactly NOT explicitly solve heavily. Just rigorously determine if it CAN strictly be legally solved."
          ]
        }
      ]
    }
  ]
}

verbal = {
  "id": "tcs-nqt-2026-verbal-cheat-sheet",
  "title": "TCS NQT 2026 Verbal Ability Cheat Sheet",
  "description": "Comprehensive, highly accurate technical summary detailing grammar rules, vocabulary, tenses, and exact communication logic for TCS NQT 2026.",
  "icon": "BookOpen",
  "phase": 4,
  "phaseTitle": "Master Syllabus",
  "topics": [
    {
      "id": "nqt-reading",
      "title": "01. Reading Comprehension",
      "description": "Macro-thematic extraction, eliminating extreme inferences, structural scanning.",
      "subTopics": [
        {
          "id": "nqt-rc-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Thematic Scanning", "description": "Read Paragraph 1 (Main Idea), Paragraph Final (Conclusion), and the first/last lines of inner paragraphs."},
            {"title": "Question Categories", "description": "Global (Main Idea, Title), Local (Specific Fact, Line Ref), Inferential (Implied but unstated by the author)."}
          ],
          "formulas": [
            {"title": "Tone Vocabulary Matrix", "formula": "Positive (Laudatory, Optimistic). Negative (Acerbic, Cynical). Neutral (Objective, Analytical)."}
          ],
          "proTips": [
            "⚡ Ban Extreme Exclusives: Options containing NEVER, ALWAYS, ONLY, ALL, MUST are statistically 95% false.",
            "⚡ Out of Scope Elimination: If the topic wasn't mentioned anywhere in the passage, permanently discard it."
          ]
        }
      ]
    },
    {
      "id": "nqt-jumbles",
      "title": "02. Paragraph Jumbles (Arrangement)",
      "description": "Connecting explicit chronological strings, pronoun bindings, and causal loops.",
      "subTopics": [
        {
          "id": "nqt-pj-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Opening Sentence (Anchor)", "description": "Standalone. Introduces a noun, theory, or timeframe. Must be devoid of hanging pronouns (He, This, Consequently)."},
            {"title": "Mandatory Pairs", "description": "A deep physical link between two highly specific sentences that absolutely MUST go together."}
          ],
          "formulas": [
            {"title": "Transition Linkages", "formula": "However/But (Contradicts previous). Thus/Therefore (Concludes previous directly). Secondly/Also (Continues logic)."}
          ],
          "proTips": [
            "⚡ Acronym/Noun Rule: 'World Health Organization' uniquely comes before 'WHO' structurally.",
            "⚡ Chronology Sweep: Past timelines proceed exactly forward linearly to Present and Future."
          ]
        }
      ]
    },
    {
      "id": "nqt-grammar",
      "title": "03. Error Spotting & Grammar",
      "description": "Subject-verb agreement conventions, prepositional rules, and conditional forms.",
      "subTopics": [
        {
          "id": "nqt-gram-core",
          "title": "Formulas & Analytical Tricks",
          "concepts": [
            {"title": "Subject-Verb Agreement", "description": "Neither/Nor and Either/Or: The verb agrees strictly with the closest adjacent noun. Example: Neither books nor PEN IS."},
            {"title": "Singular Collectives", "description": "Words like Furniture, Information, Scenery, Equipment, Luggage, Poetry, and Advice are always singular uncountable nouns."}
          ],
          "formulas": [
            {"title": "Conditional Types", "formula": "Zero (If present, present). First (If present, will + V1). Second (If past, would + V1). Third (If had + V3, would have + V3)."}
          ],
          "proTips": [
            "⚡ As well as / Along with Rule: The verb agrees exclusively with the FIRST subject, ignoring any following nouns.",
            "⚡ Since vs For Distinction: 'Since' marks a specific starting point in time (Since 2010). 'For' tracks a total duration (For 3 years)."
          ]
        }
      ]
    },
    {
      "id": "nqt-tenses",
      "title": "04. Tense Table Formulas",
      "description": "Mathematical blueprints of verb tenses, time shifts, and chronological structural maps.",
      "subTopics": [
        {
          "id": "nqt-tense-core",
          "title": "Tense Structures & Logic",
          "concepts": [
            {"title": "Present Tense Logic", "description": "Simple (Universal truths/habits), Continuous (Happening now), Perfect (Just completed), Perfect Cont. (Started past, continuing now)."},
            {"title": "Past Tense Logic", "description": "Simple (Completed action), Continuous (Was happening), Perfect (Action BEFORE another past action)."}
          ],
          "formulas": [
            {"title": "Present Tense Formulas", "formula": "Simple: S + V1/V5 + O. Cont: S + am/is/are + V(ing) + O. Perfect: S + has/have + V3 + O. Perfect Cont: S + has/have + been + V(ing) + Since/For."},
            {"title": "Past Tense Formulas", "formula": "Simple: S + V2 + O. Cont: S + was/were + V(ing) + O. Perfect: S + had + V3 + O. Perfect Cont: S + had + been + V(ing)."},
            {"title": "Future Tense Formulas", "formula": "Simple: S + will/shall + V1 + O. Cont: S + will be + V(ing). Perfect: S + will have + V3. Perfect Cont: S + will have been + V(ing)."}
          ],
          "proTips": [
            "⚡ Keyword Detection: 'Yesterday/Ago' strictly triggers Simple Past (V2). 'Recently/Lately' triggers Present Perfect (has/have + V3).",
            "⚡ Before/After Rule for Past Perfect: 1st Action = Past Perfect (had V3). 2nd Action = Simple Past (V2)."
          ]
        }
      ]
    },
    {
      "id": "nqt-voice-speech",
      "title": "05. Active/Passive Voice & Direct/Indirect Speech",
      "description": "Syntactic transformations, subject-object inversions, and reporting verb state changes.",
      "subTopics": [
        {
          "id": "nqt-voice-core",
          "title": "Voice Rules & Speech Formulas",
          "concepts": [
            {"title": "Voice Principle", "description": "Active (Subject performs action). Passive (Subject receives action). The core tense NEVER changes in Voice transformation."},
            {"title": "Speech Principle", "description": "If Reporting Verb is in Past Tense (said), the reported speech's tense MUST shift backward in time."}
          ],
          "formulas": [
            {"title": "Active to Passive Conversion", "formula": "Simple: Obj + is/are/was/were + V3 + by + Subj. Continuous: Add 'being + V3'. Perfect: Add 'been + V3'. Modals: Modal + be + V3."},
            {"title": "Direct to Indirect Speech (Tense Shift)", "formula": "Present Simple -> Past Simple. Present Cont -> Past Cont. Present Perf -> Past Perf. Past Simple -> Past Perfect. Past Perf -> No Change."},
            {"title": "Speech (Modal Shift)", "formula": "Will -> Would, Can -> Could, May -> Might, Shall -> Should."}
          ],
          "proTips": [
            "⚡ Voice Tip: Perfect Continuous (Present/Past/Future) and Future Continuous CANNOT be converted into Passive Voice natively.",
            "⚡ Speech Time Markers: 'Today' -> 'that day'. 'Tomorrow' -> 'the next day'. 'Yesterday' -> 'the previous day'. 'Here' -> 'there'."
          ]
        }
      ]
    },
    {
      "id": "nqt-vocab",
      "title": "06. Vocab, Synonyms & Antonyms",
      "description": "Latin-Greek root fractures, exact phrasal mapping, pure contextual deductions.",
      "subTopics": [
        {
          "id": "nqt-voc-core",
          "title": "Word Formats & Analytical Tricks",
          "concepts": [
            {"title": "Root Morphology", "description": "Mal (bad): Malice, Malign. Bene (good): Benevolent. Chron (time): Chronic. Loc/Loq (speak): Loquacious."},
            {"title": "Confusing Pairs", "description": "Affect (Verb: to influence) vs Effect (Noun: the result). Principal (Head master/money) vs Principle (Rule/Truth)."}
          ],
          "formulas": [
            {"title": "Contextual Guessing", "formula": "Positive sentence context strictly necessitates a positive synonym. Negative context necessitates a negative one. Pay attention to transition words like 'Although' or 'But'."},
            {"title": "Top High-Frequency Synonyms", "formula": "Abundant (Copious, Ample), Mitigate (Alleviate, Assuage), Obscure (Ambiguous, Vague), Diligent (Assiduous, Industrious), Ephemeral (Transient, Fleeting)."},
            {"title": "Top High-Frequency Antonyms", "formula": "Benevolent (Malevolent), Ostracize (Embrace, Welcome), Frugal (Extravagant, Prodigal), Cacophony (Euphony, Harmony), Lethargic (Energetic, Vivacious)."}
          ],
          "proTips": [
            "⚡ Elimination Strategy: If two identically synonymous options exist in a single-choice question, both are typically conceptually wrong.",
            "⚡ Degree of Intensity: 'Angry' vs 'Furious'. Choose the synonym that matches the exact emotional intensity of the prompt word."
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
    q = json.dumps(quant, indent=4)
    l = json.dumps(logic, indent=4)
    v = json.dumps(verbal, indent=4)
    
    # Strip quotes from keys
    q = re.sub(r'\"([a-zA-Z_][a-zA-Z0-9_]*)\":', r'\1:', q)
    l = re.sub(r'\"([a-zA-Z_][a-zA-Z0-9_]*)\":', r'\1:', l)
    v = re.sub(r'\"([a-zA-Z_][a-zA-Z0-9_]*)\":', r'\1:', v)
    
    # Slice exactly
    final_text = text[:start] + f'"tcs-nqt-2026-cheat-sheet": {q},\n  "tcs-nqt-2026-reasoning-cheat-sheet": {l},\n  "tcs-nqt-2026-verbal-cheat-sheet": {v}\n}};\n'
    
    with open("lib/aptitude-data.ts", "w", encoding="utf-8") as f:
        f.write(final_text)
    
    print('Fully updated and completely injected ultra-dense, completely revised verbal cheat sheets.')
