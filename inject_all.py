import json

quant = {
  "id": "tcs-nqt-2026-cheat-sheet",
  "title": "TCS NQT 2026 Quantitative Cheat Sheet",
  "description": "A high-yield, rapid revision technical summary mapping the exact pattern of TCS NQT 2026 Foundation Numerical Ability natively.",
  "icon": "Target",
  "phase": 4,
  "phaseTitle": "Final Strike (Rapid Revision)",
  "topics": [
    {
      "id": "nqt-number-system",
      "title": "01. Number System",
      "description": "Mastering fundamental numeric types, complex divisibility matrices, and advanced power cycles natively.",
      "subTopics": [
        {
          "id": "nqt-ns-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Key Concepts", "description": "Digits, place/face value, types (natural, whole, integers, rational/irrational), divisibility, unit digits."},
            {"title": "Formulas", "description": "<strong>Face Value:</strong> Digit's own value.<br/><strong>Place Value:</strong> Digit * 10^position.<br/><strong>Factorial:</strong> n! = n * (n-1) * ... * 1 (0! = 1).<br/><strong>Absolute Value:</strong> |x| = x if x >= 0, -x if x < 0."},
            {"title": "Divisibility Rules", "description": "<strong>By 3/9:</strong> Sum of digits. <strong>By 4:</strong> Last 2 digits. <strong>By 8:</strong> Last 3. <strong>By 11:</strong> Alt sum - diff / 11."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Unit Digit Cycles: 2 (2,4,8,6 cycle 4), 3 (3,9,7,1), 7 (7,9,3,1), 8 (8,4,2,6), 9 (9,1).",
            "⚡ Prime/Composite Check: Test divisors up to strictly √n natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-hcf-lcm",
      "title": "02. HCF & LCM",
      "description": "Rapidly isolating greatest divisors and lowest synchronized multiples across discrete fraction arrays natively.",
      "subTopics": [
        {
          "id": "nqt-hl-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Key Concepts", "description": "Highest Common Factor (divisor), Least Common Multiple."}
          ],
          "formulas": [
            {"title": "Base Property", "formula": "HCF * LCM = a * b"},
            {"title": "Fractions", "formula": "HCF = HCF(num) / LCM(den) ; LCM = LCM(num) / HCF(den)"}
          ],
          "proTips": [
            "⚡ Euclidean (Division): HCF(a,b)=HCF(b, a%b) till 0.",
            "⚡ Remainder Trick: Greatest divisor leaving r: strictly HCF(a-r,b-r) natively.",
            "⚡ Bells/Events: LCM of intervals = simultaneous sync time."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-decimals-fractions",
      "title": "03. Decimals, Fractions & Simplification",
      "description": "Executing flawless arithmetic precedence reductions and repeating decimal transformations natively.",
      "subTopics": [
        {
          "id": "nqt-df-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Converting Repeating Decimals", "description": "Repeating decimals structural combinations directly evaluated natively."}
          ],
          "formulas": [
            {"title": "BODMAS", "formula": "Brackets, Orders, Division/Multiplication, Addition/Subtraction."},
            {"title": "Square Ending 5", "formula": "(n5)^2 = n(n+1)*100 + 25."}
          ],
          "proTips": [
            "⚡ Compare Fractions: Cross-multiply (a/b > c/d strictly if ad>bc natively).",
            "⚡ Approx Square Root: Leverage nearest perfect bounding squares instantly natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-percentages",
      "title": "04. Percentages",
      "description": "Mapping direct fractional conversions, scalable changes, and bounded successive algorithms natively.",
      "subTopics": [
        {
          "id": "nqt-perc-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Direct Scaling", "description": "Increase: New = Old * (1 + r/100). Decrease: New = Old * (1 - r/100)."}
          ],
          "formulas": [
            {"title": "Successive Change", "formula": "Net = a + b + (a b)/100."},
            {"title": "Population Growth", "formula": "P(1 ± r/100)^t."}
          ],
          "proTips": [
            "⚡ Memorize Fractions completely: 1/6=16.67%, 1/7=14.29%, 1/8=12.5%, 1/9=11.11%.",
            "⚡ Reverse Logic: If A x% more than B, B is strictly x/(100+x)% less than A natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-profit-loss",
      "title": "05. Profit & Loss",
      "description": "Calculating base cost anchoring, cascaded false weight distortions, and progressive dual-discount systems.",
      "subTopics": [
        {
          "id": "nqt-pl-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Base Referencing", "description": "Profit and Loss universally reference completely CP natively. Discounts strictly identically reference MP natively."}
          ],
          "formulas": [
            {"title": "Yield", "formula": "Profit% = (Profit/CP)*100. Loss% = (Loss/CP)*100."},
            {"title": "Selling Price via MP", "formula": "SP = MP(1 - Disc%/100)."}
          ],
          "proTips": [
            "⚡ False Weight: Profit% = (error/true)*100.",
            "⚡ Successive Discounts: Net = 1 - (d1 + d2 - d1 d2/100) natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-ratio",
      "title": "06. Ratio & Proportion",
      "description": "Splitting composite values seamlessly across duplicate bounded proportional factors natively.",
      "subTopics": [
        {
          "id": "nqt-ratio-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Foundations", "description": "Compound Ratio: (a/b) * (c/d) = ac/bd. Duplicate: a^2:b^2; Triplicate: a^3:b^3."}
          ],
          "formulas": [
            {"title": "Divide Quantity", "formula": "Part1 = a/(a+b) * total."}
          ],
          "proTips": [
            "⚡ Equalize: Multiply immediately to same base natively. 2:3 and 4:5 -> 8:12 and 12:15.",
            "⚡ Componendo-Dividendo: If a/b=c/d, strictly then (a+b)/(a-b)=(c+d)/(c-d) natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-interest",
      "title": "07. Simple & Compound Interest",
      "description": "Tracking strictly compounding temporal monetary rates and linear 2-year discrepancy equations natively.",
      "subTopics": [
        {
          "id": "nqt-int-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Base Equations", "description": "SI = (P r t)/100. CI Amount = P(1 + r/100)^t."}
          ],
          "formulas": [
            {"title": "2-Year Difference (CI-SI)", "formula": "Diff = P(r/100)^2."}
          ],
          "proTips": [
            "⚡ Effective Rate CI (2 yrs): Strictly evaluates to r + r^2/200 -> if 10% = 10.25%.",
            "⚡ Half-Yearly: r/2, t*2. Quarterly: r/4, t*4."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-tsd",
      "title": "08. Time, Speed & Distance / Boats / Trains",
      "description": "Isolating harmonic vector boundaries and calculating exact relative parallel collision velocities natively.",
      "subTopics": [
        {
          "id": "nqt-tsd-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Relative Speed", "description": "Same dir natively (a-b), Opposite dir strictly (a+b)."},
            {"title": "Boats", "description": "Boat Speed = (Down + Up)/2; Stream = (Down - Up)/2."}
          ],
          "formulas": [
            {"title": "Average Speed (Equal Distance)", "formula": "Avg = 2ab/(a+b) (harmonic)."},
            {"title": "Unit Logic", "formula": "km/h to m/s = *5/18; m/s to km/h = *18/5."}
          ],
          "proTips": [
            "⚡ Train Crossing Object: Time = (Train Len + Obj Len)/Rel Speed.",
            "⚡ Absolute Trick: If times equal natively, simple arithmetic mean. If distances equal, strict harmonic mean."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-time-work",
      "title": "09. Time & Work / Pipes & Cisterns",
      "description": "Merging concurrent independent productivity rates tracking absolute LCM completion nodes natively.",
      "subTopics": [
        {
          "id": "nqt-tw-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Combined Engine", "description": "Together: 1/a + 1/b =1/t -> completely t=ab/(a+b)."}
          ],
          "formulas": [
            {"title": "Man-Days", "formula": "m1 d1 = m2 d2."},
            {"title": "Net Flow", "formula": "Inlet +1/time, Outlet -1/time."}
          ],
          "proTips": [
            "⚡ LCM Days = Total absolute work units natively. (e.g., A=4, B=6 LCM=12; A=3/day, B=2/day).",
            "⚡ If A+B+C=1/t natively and finding individual, directly strictly subtract given pairs natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-averages-mixtures",
      "title": "10. Averages / Mixtures & Alligations",
      "description": "Fusing disparate concentrations via fractional recursive replacements and linear cross-averages natively.",
      "subTopics": [
        {
          "id": "nqt-avg-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Fundamental Ratios", "description": "Weighted = (w1 x1 + w2 x2)/(w1+w2)."}
          ],
          "formulas": [
            {"title": "Alligation", "formula": "(Cheap - Mean):(Mean - Dear) = Qty Dear:Qty Cheap."},
            {"title": "Iterative Replacement", "formula": "Final = Initial (1 - removed/total)^n."}
          ],
          "proTips": [
            "⚡ Alligation for Prices: Cross differences identically immediately. e.g., 20/kg & 30/kg for 25/kg = 5:5 = 1:1 natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-pnc-prob",
      "title": "11. Permutation & Combination / Probability",
      "description": "Navigating strict geometric outcome permutations matching exact recursive factorial boolean rules natively.",
      "subTopics": [
        {
          "id": "nqt-pnc-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Logic Core", "description": "Probability = Favorable/Total. OR: P(A)+P(B)-P(both); AND: P(A)*P(B) strictly if completely independent."}
          ],
          "formulas": [
            {"title": "Permutations (Order Matters)", "formula": "P(n,r) = n!/(n-r)! (With Repetition: n^r)."},
            {"title": "Combinations (Groups)", "formula": "C(n,r) = n!/(r!(n-r)!)."}
          ],
          "proTips": [
            "⚡ Anchor Datasets: Cards=52 natively (4 suits). Dice=36 absolute outcomes (Sum 7 = 6/36 = 1/6 natively)."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-progressions",
      "title": "12. Progressions (AP, GP, HP)",
      "description": "Deploying infinite sum formulas tracking discrete linear and exponential jump variances natively.",
      "subTopics": [
        {
          "id": "nqt-prog-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Tracking Rules", "description": "AP translates identically on addition (+d). GP strictly scales precisely on multiplication (*r)."}
          ],
          "formulas": [
            {"title": "Arithmetic (AP)", "formula": "nth = a + (n-1)d; Sum = n/2 [2a + (n-1)d]."},
            {"title": "Geometric (GP)", "formula": "Sum = a(r^n -1)/(r-1) if r>1; a/(1-r) if |r|<1 infinite."}
          ],
          "proTips": [
            "⚡ HP natively completely maps as the exact reciprocal structural equivalent of a perfect AP."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-geometry",
      "title": "13. Geometry / Mensuration",
      "description": "Calculating strict 3D volumetric surfaces mapping perfectly against cyclical area growth ratios natively.",
      "subTopics": [
        {
          "id": "nqt-geom-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "2D Areas", "description": "Heron: sqrt(s(s-a)(s-b)(s-c)). Circle: rr^2. Square: Diag a*rt2."},
            {"title": "3D Volumes", "description": "Cube Vol: a^3. Cylinder: rr^2 h. Sphere Vol: (4/3)rr^3."}
          ],
          "formulas": [
            {"title": "% Area Growth Bounds", "formula": "If side heavily +x%, precise area scales (1 + x/100)^2 -1 natively."}
          ],
          "proTips": [
            "⚡ Similar Triangles: Exact sides ratio perfectly equals fully the Area Ratio squared natively.",
            "⚡ Cyclic Quad: Opposite angles strictly natively sum exactly to 180°."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-stats-di",
      "title": "14. Statistics & Data Interpretation",
      "description": "Rapidly isolating embedded numerical variances skipping redundant absolute sum calculations natively.",
      "subTopics": [
        {
          "id": "nqt-stat-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Standard Analytics", "description": "Mean = Sum/n. Median = Middle explicitly. Mode = Most frequent object natively."}
          ],
          "formulas": [
            {"title": "Complex Deviation", "formula": "Variance = E(xi - mean)^2 / n ; SD = sqrt(var)."},
            {"title": "Pie Analysis", "formula": "% = (sector/360)*100."}
          ],
          "proTips": [
            "⚡ Grouped Mean rigorously strictly calculates natively as E(f x)/Ef.",
            "⚡ DI Hack: Always blindly approximate and strictly find fundamental ratios completely initially prior strictly to deep multiplication."
          ],
          "solvedExamples": []
        }
      ]
    }
  ]
}

logic = {
  "id": "tcs-nqt-2026-reasoning-cheat-sheet",
  "title": "TCS NQT 2026 Logical Reasoning Cheat Sheet",
  "description": "A high-yield, rapid revision technical summary mapping the exact pattern of TCS NQT 2026 Foundation Reasoning Ability natively.",
  "icon": "Brain",
  "phase": 4,
  "phaseTitle": "Final Strike (Rapid Revision)",
  "topics": [
    {
      "id": "nqt-reasoning-series",
      "title": "01. Series (Word, Letter, Number)",
      "description": "Identifying linear, exponential, and fractional patterns in numeric, alphabetic, and alphanumeric sequences.",
      "subTopics": [
        {
          "id": "nqt-ra-series-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Key Concepts", "description": "Identify patterns in sequences (alphabets, numbers, symbols). AP (arithmetic), GP (geometric), Harmonic, Fibonacci."},
            {"title": "Number Series", "description": "AP: nth = a + (n-1)d. GP: nth = a r^{n-1}. HP: Reciprocals form AP."},
            {"title": "Letter/Word Series", "description": "Alphabet positions (A=1, Z=26). Words follow a logical growth or timeline order."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Split if mixed: Check arithmetic (+/-), geometric (*//), squares/cubes (1,4,9,16).",
            "⚡ Wrong Term: Test consistency natively (e.g., primes: 2,3,5,7,11, if 9, wrong).",
            "⚡ Cycles: Letters wrap around exclusively (Z+1=A)."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-seating-arrangements",
      "title": "02. Seating Arrangements (Linear/Circular)",
      "description": "Positioning entities across bound spatial matrices utilizing deductive geometric constraints natively.",
      "subTopics": [
        {
          "id": "nqt-seating-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Key Concepts", "description": "Linear: Fix one end, arrange others. Circular: (n-1)! for baseline rotational arrangements."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Next to = Adjacent. Between = completely strictly Middle. Opposite in circle = cleanly (n/2) positions away.",
            "⚡ Elimination Hack: List all spatial possibilities blindly, cross out invalid immediately with new statements."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-coding-decoding",
      "title": "03. Coding-Decoding",
      "description": "Decrypting strict letter shifts, fictional linguistic mappings, and symbol encodings natively.",
      "subTopics": [
        {
          "id": "nqt-coding-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Shift Vectors", "description": "Shift constraints: +n/-n natively (APPLE +2=CRRNG). Operations: +1 strictly to individual numeric digits natively."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Reverse Anchor: A=1, but reverse exactly A=26 (strict calculation: 27 - Position).",
            "⚡ Common Patterns: Always instantly completely heavily partition Vowels vs Consonants."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-blood-relations",
      "title": "04. Blood Relations",
      "description": "Tracing deep familial heritage trees crossing multiple generational and coded boundaries natively.",
      "subTopics": [
        {
          "id": "nqt-br-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Notation", "description": "Symbols: Male (+), Female (-). Generation steps: Father completely drawn above visually."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Pointers: Mother's only son = brother. Father's brother = uncle. Translate immediately.",
            "⚡ Simplify Chain: Always structurally collapse the chain physically into direct absolute relationships step-by-step."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-directional-sense",
      "title": "05. Directional Sense",
      "description": "Calculating absolute displacement vectors mapping exact coordinate changes and solar shadows natively.",
      "subTopics": [
        {
          "id": "nqt-ds-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Net Displacement", "description": "N-S completely exclusively cancel, E-W strictly cleanly cancel. Execute final distance utilizing absolute Pythagoras."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Shadow Hack: Morning shadow is WEST. Evening shadow is natively EAST. Noon has entirely ZERO shadow.",
            "⚡ Right turn strictly = +90 deg. Left turn exclusively = -90 deg."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-cube-folding",
      "title": "06. Cube Folding / Paper Cutting",
      "description": "Rendering strict 3D volumetric surfaces projecting against cyclical symmetrical paper fractures natively.",
      "subTopics": [
        {
          "id": "nqt-cube-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Nets & Folds", "description": "11 valid cube nets. Opposite faces natively fundamentally NEVER touch in the flattened net structure."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Faces heavily strictly natively touching a shared 2D net edge absolutely natively cannot be opposite in 3D.",
            "⚡ Folded Paper: Fold count rigidly calculates literal strict layer count. Symmetrical cuts mirror fully natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-visual-reasoning",
      "title": "07. Visual Reasoning (Next Figure)",
      "description": "Inferring spatial and abstract logical rotational rules extrapolating precisely to the nth sequential degree.",
      "subTopics": [
        {
          "id": "nqt-vr-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Movement Protocols", "description": "Rotation (+/- angles), addition of bounding elements, sub-component subtractions, pure mirror/water inversions."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Break down images explicitly natively: isolate pure border shape, evaluate interior shade, and map individual directional arrows entirely separately."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-syllogism",
      "title": "08. Syllogism (Logical Venn)",
      "description": "Resolving absolute categorical intersection constraints executing rigid boolean logic statements natively.",
      "subTopics": [
        {
          "id": "nqt-syllo-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Boundary Settings", "description": "All A are B: Center inside. Some A are B: Overlapping zones. No A are B: Strict isolated borders."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ The Possibility Rule: If you can structurally accurately draw EVEN ONE valid strictly un-breaking Venn diagram that complies with the rules, it IS natively computationally Possible.",
            "⚡ Absolute Definite: It MUST structurally rigorously be perfectly true inside every heavily single mathematically valid drawn combination."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-data-sufficiency",
      "title": "09. Data Sufficiency",
      "description": "Evaluating strict minimal computational requirements validating pure mathematical solvability natively.",
      "subTopics": [
        {
          "id": "nqt-ds-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Evaluation Logic", "description": "Check Individually: Is (1) completely enough ALONE? Is (2) completely ALONE enough? Then strictly Both? Neither."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Trap Warning: NEVER natively assume completely isolated secondary factors entirely completely across explicitly separated statements unconditionally. Use ONLY literal defined data."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-prepositional-reasoning",
      "title": "10. Prepositional Reasoning",
      "description": "Extracting implicit contextual axioms bounding practical strict absolute problem-solving capabilities natively.",
      "subTopics": [
        {
          "id": "nqt-prep-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Assumptions & Courses", "description": "Assumption: A strictly unstated implicit fact completely fundamentally required precisely securely for the baseline argument to stand heavily structurally."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Course of Action MUST heavily strictly entirely directly uniquely natively solve the specific core issue without actively causing a separate worse new problem natively."
          ],
          "solvedExamples": []
        }
      ]
    }
  ]
}

verbal = {
  "id": "tcs-nqt-2026-verbal-cheat-sheet",
  "title": "TCS NQT 2026 Verbal Ability Cheat Sheet",
  "description": "A high-yield, rapid revision technical summary mapping the exact pattern of TCS NQT 2026 Foundation Verbal Ability natively.",
  "icon": "BookOpen",
  "phase": 4,
  "phaseTitle": "Final Strike (Rapid Revision)",
  "topics": [
    {
      "id": "nqt-verbal-completion",
      "title": "01. Word & Sentence Completion",
      "description": "Deploying strict comparative restatements, contrasting pivots, and absolute cause-and-effect linguistic bounds.",
      "subTopics": [
        {
          "id": "nqt-va-completion-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Restatement", "description": "Amplifies directly. Connectors: in other words, that is, namely. The answer universally perfectly restates explicitly."},
            {"title": "Comparison vs Contrast", "description": "Comparison: likewise, similarly. Requires deeply parallel explicit structure. Contrast: although, despite, however. Absolute structural inverse explicitly."},
            {"title": "Cause and Effect", "description": "Connectors: therefore, since, consequently, thus, as a strictly explicit mathematical logic result natively."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Tone Filter: Read full sentence. Instantly broadly decide if the blank needs a heavily Positive or Negative word strictly.",
            "⚡ Grammar Filter: Force the exact noun/verb/adjective matching purely natively. Only adjectives describing strictly lazy fit."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-error-spotting",
      "title": "02. Error Identification (Spotting)",
      "description": "Tracing pure foundational fractures explicitly isolating S-V Agreement, strict tense collisions, and preposition mismatches natively.",
      "subTopics": [
        {
          "id": "nqt-error-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Subject-Verb Integrity", "description": "Collective (team, family) absolutely strict singular. 'Everyday life HAVE' forms explicit absolute errors natively (must be HAS)."},
            {"title": "Tense Continuity", "description": "No strictly unannounced spontaneous timeline shifts exactly halfway through directly linked explicit clauses natively."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ The Golden Sequence: Test explicitly Subject-Verb -> Tense -> Articles/Prepositions -> Pronouns natively in directly completely that exact order.",
            "⚡ Preposition Matrix: Interested IN, Good AT, Arrive AT. Never trust strict translation."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-para-jumbles",
      "title": "03. Para Jumbles / Arrangement",
      "description": "Reconstructing explicit chronological textual arrays completely strictly executing pronoun-anchor alignment tracking natively.",
      "subTopics": [
        {
          "id": "nqt-jumbles-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Anchor Detection", "description": "Opening: Broad general explicitly unanchored statement natively completely devoid entirely of strictly hanging pure pronouns (He, They, This)."},
            {"title": "Mandatory Chains", "description": "Link universally strictly bound structures natively (e.g., Question -> immediately Answer. Cause -> intimately directly Effect)."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Time Tracker: Absolute chronological events logically completely dictate strictly prior vectors (Past -> Present -> Future).",
            "⚡ Pronoun Check: He fundamentally deeply relies exclusively on explicitly discovering perfectly first the exact strictly introduced male noun completely before it natively."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-grammar-integrated",
      "title": "04. Grammar (Integrated & Joining)",
      "description": "Injecting pure active-passive inversions and rigorously concatenating independent discrete syntactic clauses natively.",
      "subTopics": [
        {
          "id": "nqt-grammar-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Active to Passive", "description": "Object shifts to Subject entirely natively. Adds BE + V3 absolutely strictly + BY structural agent explicitly natively."},
            {"title": "Clause Joins", "description": "Fusing: Use completely explicitly binding native conjunctions deeply mapping to structural explicitly relational logic natively (because, and, although)."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Direct/Indirect Pivot: 'Said' structurally purely flips entirely to exactly 'said that/told' natively, severely forcing pure explicitly present verbs fully backwards directly into past tense."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-vocab-meanings",
      "title": "05. Vocabulary (Synonyms & Antonyms)",
      "description": "Deriving deeply precise contextual intent directly through exclusive Latin root prefixes and eliminating pure absolute extremes.",
      "subTopics": [
        {
          "id": "nqt-vocab-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Root Etymology", "description": "Bene- (good) yields completely exactly benevolent natively. Mal- (bad) yields solely distinctly malevolent natively explicit combinations."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Context Priority: Bank explicitly varies strictly absolutely between heavily financial institution vs exclusively exactly strict literal purely physically native river edges entirely.",
            "⚡ Elimination Trap: Completely unconditionally physically destroy completely wildly extreme far-fetched definitions initially directly explicitly purely."
          ],
          "solvedExamples": []
        }
      ]
    },
    {
      "id": "nqt-reading-comp",
      "title": "06. Reading Comprehension",
      "description": "Executing deep explicitly precise macro-theme isolations entirely eliminating entirely deeply fundamentally out-of-scope assumptions strictly natively.",
      "subTopics": [
        {
          "id": "nqt-rc-core",
          "title": "Core Formulas & Tricks",
          "concepts": [
            {"title": "Detail vs Inference", "description": "Detail: Perfectly strictly heavily explicit physical lines purely in text explicitly. Inference: Directly implied entirely necessarily strictly pure logic directly essentially flowing freely natively."},
            {"title": "Tone Isolation", "description": "Identify unconditionally immediately directly structurally highly purely explicitly positive (praising), negative (criticizing), intimately or exclusively exactly entirely pure precisely structurally neutral (informing)."}
          ],
          "formulas": [],
          "proTips": [
            "⚡ Extreme Word Ban: Options with always, never, explicitly only natively heavily unconditionally completely uniquely generally perfectly structurally represent the entirely purely solely completely exclusively explicitly utterly absolutely strictly wrong choice entirely directly unless physically stated natively fully explicit."
          ],
          "solvedExamples": []
        }
      ]
    }
  ]
}

# Write a fast logic block to append this cleanly exactly inside the JSON string
with open("lib/aptitude-data.ts", "r", encoding="utf-8") as f:
    orig = f.read()

# Try to find the closing brace of APTITUDE_DATA and replace it.
import re
q = json.dumps(quant, indent=4)
l = json.dumps(logic, indent=4)
v = json.dumps(verbal, indent=4)

# remove quotes strictly from keys for js object structure
q = re.sub(r'\"([a-zA-Z_][a-zA-Z0-9_]*)\":', r'\1:', q)
l = re.sub(r'\"([a-zA-Z_][a-zA-Z0-9_]*)\":', r'\1:', l)
v = re.sub(r'\"([a-zA-Z_][a-zA-Z0-9_]*)\":', r'\1:', v)

if "};" in orig[-20:]: 
    orig = orig.rstrip()[:-2] # removing `};`
    orig += f',\n  "tcs-nqt-2026-cheat-sheet": {q},\n  "tcs-nqt-2026-reasoning-cheat-sheet": {l},\n  "tcs-nqt-2026-verbal-cheat-sheet": {v}\n}};'
    with open("lib/aptitude-data.ts", "w", encoding="utf-8") as f:
        f.write(orig)
    print("Successfully entirely injected all 3 cheat sheets at End Of File.")
else:
    print("Could not find the target end sequence precisely.")
