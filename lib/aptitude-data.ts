export interface Concept {
  title: string;
  description: string;
}

export interface SubTopic {
  id: string;
  title: string;
  concepts: Concept[];
  formulas: { title: string; formula: string }[];
  proTips: string[];
  solvedExamples: { question: string; explanation: string; solution: string }[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  subTopics?: SubTopic[];
  concepts?: Concept[];
  formulas?: { title: string; formula: string }[];
  proTips?: string[];
  solvedExamples?: { question: string; explanation: string; solution: string }[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  phase: number;
  phaseTitle: string;
  topics: Topic[];
}

export const APTITUDE_DATA: Record<string, Category> = {
  "quant-general": {
    id: "quant-general",
    title: "Quantitative Aptitude",
    description: "The core mathematical foundations tested in 95% of entry-level assessments. Upgraded with 17 detailed modules and smart shortcuts.",
    icon: "Calculator",
    phase: 1,
    phaseTitle: "General Aptitude (The Foundation)",
    topics: [
      {
        id: "number-system",
        title: "01. Number System",
        description: "The absolute mathematical backbone. Covers Face/Place values, classifications, divisibility, and cycles.",
        subTopics: [
          {
            id: "basics",
            title: "Basics & Values",
            concepts: [
              { title: "Face Value vs. Place Value", description: "<strong>Face Value:</strong> Digit's own value (e.g., in 567, face of 6 is 6).<br/><strong>Place Value:</strong> Digit × Position (e.g., ones: ×1, tens: ×10, hundreds: ×100)." },
              { title: "Types of Numbers", description: "<strong>Natural:</strong> (1+), <strong>Whole:</strong> (0+), <strong>Integers:</strong> (...,-1,0,1,...), <strong>Rational:</strong> (p/q), <strong>Irrational:</strong> (non-repeating decimals)." }
            ],
            formulas: [
              { title: "Factorial", formula: "n! = n × (n-1) × ... × 1" }
            ],
            proTips: [
              "⚡ For large numbers, use place-value chart (e.g., crores=10^7, lakhs=10^5).",
              "⚡ Convert words to figures: Fill from right (ones) to left (crores)."
            ],
            solvedExamples: [
              { question: "In 70984, what is the place value of 9 and 0?", explanation: "", solution: "Use position multipliers. Place of 9 = 9 × 100 = 900. 0 is in thousands place = 0." }
            ]
          },
          {
            id: "divisibility",
            title: "Divisibility Rules & Cyclicity",
            concepts: [
              { title: "Key Divisibility Rules", description: "<ul><li><strong>2:</strong> Even</li><li><strong>3:</strong> Sum digits ÷3</li><li><strong>4:</strong> Last 2 digits ÷4</li><li><strong>5:</strong> Ends 0/5</li><li><strong>6:</strong> ÷2 and ÷3</li><li><strong>7:</strong> Double last digit, subtract from rest, ÷7</li><li><strong>8:</strong> Last 3 digits ÷8</li><li><strong>9:</strong> Sum digits ÷9</li><li><strong>10:</strong> Ends 0</li><li><strong>11:</strong> Alt sum-diff ÷11</li></ul>" },
              { title: "Unit Digit Cycles", description: "For powers (e.g., 2: 2,4,8,6 cycle every 4). 7: 7,9,3,1 cycle 4." }
            ],
            formulas: [],
            proTips: [
              "⚡ Trick for divisibility by 7: (First part ×2 - last digit) or recursive.",
              "⚡ Quick check: For prime/composite, test divisors up to √n.",
              "⚡ To find unit digit of a^b: Use cycle (find b mod sequence length)."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "hcf-lcm",
        title: "02. HCF and LCM",
        description: "Extracting common divisors and generating synchronized multiples across fractional arrays.",
        subTopics: [
          {
            id: "core-hcf-lcm",
            title: "HCF & LCM Core",
            concepts: [
              { title: "Prime Factorization Method", description: "<strong>HCF:</strong> Product of minimum powers.<br/><strong>LCM:</strong> Product of maximum powers." },
              { title: "Division Method", description: "<strong>HCF:</strong> Last non-zero remainder." }
            ],
            formulas: [
              { title: "Primary Base Formula", formula: "HCF(a,b) × LCM(a,b) = a × b" },
              { title: "Fraction Formulas", formula: "HCF = HCF(num) / LCM(den) <br/> LCM = LCM(num) / HCF(den)" },
              { title: "Remainder specific queries", formula: "Greatest divisor leaving remainder r: HCF(a-r, b-r). Smallest multiple leaving remainder r: LCM + r." }
            ],
            proTips: [
              "⚡ Always factorize first for accuracy (e.g., 100=2²×5², 125=5³ → HCF=5²=25).",
              "⚡ If co-prime (HCF=1), LCM = direct product.",
              "⚡ If one divides the other: HCF=smaller, LCM=larger.",
              "⚡ Ratio trick: If ratio a:b, HCF=h → Numbers = a×h, b×h; LCM = a×b×h.",
              "⚡ For bells ringing: LCM of intervals = time to ring together."
            ],
            solvedExamples: [
              { question: "Find LCM of 25 and 35.", explanation: "", solution: "Factorize completely. 25 = 5². 35 = 5 × 7. LCM = max powers = 5² × 7 = 175." }
            ]
          }
        ]
      },
      {
        id: "decimals-fractions",
        title: "03. Decimals & Fractions",
        description: "Transforming recurring decimals to fractions, simplifying base ratios, and managing precision bounds.",
        subTopics: [
          {
            id: "conversions",
            title: "Fraction Conversions & Reductions",
            concepts: [
              { title: "Decimal to Fraction", description: "Standard: 0.abcd = abcd / 10^4." },
              { title: "Repeating Decimals", description: "Pure Repeating: 0.ab = ab / 99. Mixed: 0.abc (bc repeats) = (a×99 + bc) / 999." }
            ],
            formulas: [
              { title: "Fraction Simplification", formula: "Divide both numerator and denominator by their absolute HCF." }
            ],
            proTips: [
              "⚡ Convert repeating to fraction: Subtract non-repeating part in the numerator.",
              "⚡ Trick for 1/n: Memorize common arrays (1/7 = 0.142857 repeating).",
              "⚡ Compare fractions: Cross-multiply (a/b > c/d if ad > bc).",
              "⚡ Divisibility shortcut: For 13, multiply last digit by 4, add to rest."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "ages",
        title: "04. Ages",
        description: "Linear algebraic mapping of age progressions, past vs future temporal tracking.",
        subTopics: [
          {
            id: "age-relations",
            title: "Age Vectors",
            concepts: [
              { title: "Present vs Future", description: "Let present ages be x, y; after n yrs: x+n, y+n." }
            ],
            formulas: [
              { title: "Ratio Timeline", formula: "Ratio now a:b, after n yrs c:d → (a×k + n) / (b×k + n) = c/d → Solve for k." },
              { title: "Average Age", formula: "Average = Sum of all ages / Total count." }
            ],
            proTips: [
              "⚡ Assume present ratio, scale directly with the geometric difference.",
              "⚡ Trick: Age difference remains perfectly constant over infinite time."
            ],
            solvedExamples: [
              { question: "A is twice B now. 5 yrs ago A was 3 times B. Find current ages.", explanation: "", solution: "Setup independent variables across temporal shifts. Let B=x, A=2x. 5 yrs ago: (2x-5) = 3(x-5) → 2x-5 = 3x-15 → x=10. B=10, A=20." }
            ]
          }
        ]
      },
      {
        id: "tsd",
        title: "05. Speed, Time & Distance / Trains / Boats",
        description: "Resolving geometric spatial equations mapping relative velocities colliding or separating across specific time vectors.",
        subTopics: [
          {
            id: "core-speed",
            title: "Core TSD & Relative Speed",
            concepts: [
              { title: "Metric Bases", description: "Distance = Speed × Time." },
              { title: "Relative Dynamics", description: "Same direction: Speed = |a - b|. Opposite direction: Speed = a + b." }
            ],
            formulas: [
              { title: "Average Speed", formula: "Total Distance / Total Time. If equal distances: Avg = 2ab/(a+b)." },
              { title: "Unit Conversion", formula: "km/h to m/s = × 5/18. m/s to km/h = × 18/5." }
            ],
            proTips: [
              "⚡ For meetings: Distance / Relative speed.",
              "⚡ Trick: If speeds a,b,c; time to meet = 2abc / (ab+bc+ca) on a circular track."
            ],
            solvedExamples: []
          },
          {
            id: "trains-boats",
            title: "Trains & Boats Logic",
            concepts: [
              { title: "Train Crossings", description: "Always add lengths for train crossing scenarios." },
              { title: "Boats in Streams", description: "Downstream = Boat + Stream. Upstream = Boat - Stream." }
            ],
            formulas: [
              { title: "Train Formula", formula: "Time = (Length of train + Length of object) / Relative Speed" },
              { title: "Boat Formula", formula: "Boat speed = (Down + Up)/2; Stream speed = (Down - Up)/2." }
            ],
            proTips: [
              "⚡ Boats: If upstream time t1, down t2 for d: Speed ratio = manipulate rates intrinsically.",
              "⚡ To convert km/h easily: Divide by 18, multiply by 5."
            ],
            solvedExamples: [
              { question: "Train 200m, platform 100m, running at 50km/h. Time to cross?", explanation: "", solution: "Combine lengths, convert speed. Total Distance = 300m. Speed = 50 × (5/18) = 125/9. Time = 300 / (125/9) = 21.6 seconds." }
            ]
          }
        ]
      },
      {
        id: "work-time",
        title: "06. Work & Time / Pipes & Cisterns",
        description: "Isolating combined efficiencies, reciprocal fraction arrays, and tracking intersecting dependencies for shared task completion.",
        subTopics: [
          {
            id: "efficiency-lcm",
            title: "Efficiency Models",
            concepts: [
              { title: "Work Definitions", description: "Work = Rate × Time (rate = 1/day if done alone)." }
            ],
            formulas: [
              { title: "Combined Engine", formula: "Together: 1/a + 1/b = 1/t." },
              { title: "Man-Days Constancy", formula: "m1 × d1 = m2 × d2." },
              { title: "Work Completion", formula: "Work done = 1 - remaining." }
            ],
            proTips: [
              "⚡ LCM of individual days = absolute total work units.",
              "⚡ Alternate work: Map cycle average rate over 2-day bursts.",
              "⚡ If A+B = 1/t and A alone is a: B = (a - t) / at."
            ],
            solvedExamples: [
              { question: "If A=5 days, B=10 days. Together time?", explanation: "", solution: "Add efficiency rates directly. Rate A = 1/5, Rate B = 1/10. Together = 3/10 per day. Time = 10/3 days." }
            ]
          },
          {
            id: "pipes",
            title: "Pipes & Leaks",
            concepts: [
              { title: "Flow Vectors", description: "Inlet is Positive (+), Outlet/Leak is Negative (-)." }
            ],
            formulas: [
              { title: "Net Fill Rate", formula: "If A fills in a, B empties in b: Net = 1/a - 1/b." }
            ],
            proTips: [
              "⚡ If solving a leak: find regular time, then observe when full with leak actively draining."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "averages-alligation",
        title: "07. Averages / Allegations & Mixtures",
        description: "Vectoring fractional replacement patterns, weighted averages across volatile datasets, and standard alligation rules.",
        subTopics: [
          {
            id: "basic-avg",
            title: "Averages & Harmonic Means",
            concepts: [
              { title: "Base Types", description: "Simple Average vs Weighted Average vs Harmonic Average." }
            ],
            formulas: [
              { title: "Standard", formula: "Average = Sum / n." },
              { title: "Weighted", formula: "Weighted Avg = (w1×x1 + w2×x2) / (w1+w2)." },
              { title: "Harmonic", formula: "2 targets: 2xy/(x+y). 3 targets: 3xyz/(xy + yz + xz)." }
            ],
            proTips: [
              "⚡ For average speed, definitively use harmonic arrays if distances are exactly equal.",
              "⚡ Incremental total: New total = Old total + New value."
            ],
            solvedExamples: []
          },
          {
            id: "mixtures",
            title: "Alligation & Replacements",
            concepts: [
              { title: "Cross Logic", description: "Determining concentration ratios strictly comparing isolated means." }
            ],
            formulas: [
              { title: "Alligation Equation", formula: "(Cheap - Mean) : (Mean - Dear) = Qty Dear : Qty Cheap." },
              { title: "Repeated Replacements", formula: "Final conc = Initial × (1 - removed/total)^n." }
            ],
            proTips: [
              "⚡ Alligation perfectly applies for speeds, prices, and concentration ratios. Just cross the difference."
            ],
            solvedExamples: [
              { question: "Mix 20/kg & 30/kg to get 25/kg. Ratio?", explanation: "", solution: "Apply the cross alligation method. (30 - 25) : (25 - 20) = 5 : 5 = 1:1." }
            ]
          }
        ]
      },
      {
        id: "ratio-proportions",
        title: "08. Ratio & Proportions",
        description: "Mastering relative scaling variables mapping against distinct bounds.",
        subTopics: [
          {
            id: "scaling",
            title: "Proportional Bounds",
            concepts: [
              { title: "Base Fractions", description: "Ratio a:b scales dynamically as a/b." }
            ],
            formulas: [
              { title: "Cross Logic", formula: "Proportion: a/b = c/d → ad=bc." },
              { title: "Distribution split", formula: "Part1 = a/(a+b) × total." },
              { title: "Compound Ratios", formula: "(a/b) × (c/d) = ac/bd." }
            ],
            proTips: [
              "⚡ Equalize absolute quantities by multiplying entire ratios.",
              "⚡ Inverse proportion: If x goes up, y strictly goes down.",
              "⚡ Trick: For incomes, structure ratios after mapping deductions."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "interests",
        title: "09. Simple & Compound Interest",
        description: "Navigating deep monetary inflation scaling across time arrays.",
        subTopics: [
          {
            id: "si-ci",
            title: "Linear SI vs Recursive CI",
            concepts: [
              { title: "Base Generation", description: "SI grows flatly. CI consumes past interest sequentially." }
            ],
            formulas: [
              { title: "SI Formula", formula: "SI = (P × r × t) / 100." },
              { title: "CI Total Formula", formula: "CI = P(1 + r/100)^t - P." },
              { title: "Two Year Identity", formula: "Diff CI-SI over 2 yrs = P(r/100)²." },
              { title: "Half-Yearly Modifier", formula: "Use r/2, and time becomes t×2." }
            ],
            proTips: [
              "⚡ Approx CI: Formulate via P + (P×r×t)/100 + approximate layered compounds locally.",
              "⚡ Trick: Effective absolute rate for CI â‰ˆ r + r²/200 structurally for 2 years."
            ],
            solvedExamples: []
          }
        ]
      },
    {
      id: "percentages-profit-loss",
      title: "04. Percentages / Profit & Loss",
      description: "Commercial algorithms resolving successive discounts and faulty geometric constraints.",
      subTopics: [
          {
            id: "percent-hacks",
            title: "Percentages & Fractions",
            concepts: [
              { title: "Systemic Metric Scaling", description: "Converting discrete fractions directly shapes structural math bypasses." }
            ],
            formulas: [
              { title: "Base Math", formula: "% = (part/whole) × 100." },
              { title: "Successive", formula: "a + b + ab/100." }
            ],
            proTips: [
              "⚡ Memorize: 12.5%=1/8, 33.33%=1/3.",
              "⚡ Reverse: If A is x% more than B, B is (x/(100+x))% less than A."
            ],
            solvedExamples: []
          },
          {
            id: "profit-hacks",
            title: "Merchants, Profit & False Weight",
            concepts: [
              { title: "Market Matrix", description: "Profit structurally references CP. Discounts strictly reference MP." }
            ],
            formulas: [
              { title: "Profit Yield", formula: "Profit% = (SP-CP)/CP × 100." },
              { title: "MP Link", formula: "MP = SP / (1 - disc/100)." },
              { title: "False Weight Output", formula: "Profit% = (error/true utilized weight) × 100." }
            ],
            proTips: [
              "⚡ Chain discounts: Net explicitly = 1 - (d1 + d2 - d1 d2/100)."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "progressions",
        title: "11. AP, GP, HP (Progressions)",
        description: "Infinite arithmetic leaps and geometric exponential scaling limits.",
        subTopics: [
          {
            id: "series",
            title: "Series Mathematics",
            concepts: [
              { title: "Structural Arrays", description: "AP scales on Addition (+d). GP scales on Multiplication (×r). HP maps inverse AP." }
            ],
            formulas: [
              { title: "AP", formula: "nth = a + (n-1)d. Sum = n/2 [2a + (n-1)d]." },
              { title: "GP", formula: "nth = a × r^(n-1). Sum = a(r^n - 1)/(r-1) if r>1." },
              { title: "HP Form", formula: "Reciprocals structurally map directly onto a perfect AP limit." }
            ],
            proTips: [
              "⚡ Trick: For infinite GP absolute sum strictly bounding |r|<1: Use a / (1-r)."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "probability",
        title: "12. Probability / Permutations & Combinations",
        description: "Extrapolating structural outcomes mapping across localized constraints.",
        subTopics: [
          {
            id: "pnc",
            title: "Outcomes & Selections",
            concepts: [
              { title: "Combinations vs Permutations", description: "Order matters in Permutations. Order is irrelevant heavily in Combinations." }
            ],
            formulas: [
              { title: "Probabilistic Space", formula: "P = Favorable / Total." },
              { title: "Logical Conditions", formula: "OR = P(A)+P(B)-P(both). AND = P(A)×P(B) strictly if completely independent." },
              { title: "Combinatorics Base", formula: "P(n,r) = n! / (n-r)!. C(n,r) = n! / (r! × (n-r)!)." }
            ],
            proTips: [
              "⚡ With repetition allowed, inherently use n^r.",
              "⚡ Standard references: Cards=52 total (4 suits), Dice=6^2=36 absolute paired sequential outcomes."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "geometry",
        title: "13. Geometry / Mensuration / Coordinates",
        description: "Mathematical representation scaling across 2D/3D visual volumes and bounding perimeters.",
        subTopics: [
          {
            id: "2d-3d",
            title: "Area, Volume & Bounding Space",
            concepts: [
              { title: "Coordinates Geometry Maps", description: "Visual tracking using strictly X,Y mapping planes." }
            ],
            formulas: [
              { title: "Triangles", formula: "Area = (base×ht)/2. Pythagoras: a² + b² = c²." },
              { title: "Circles & Quads", formula: "Circle: Area πr², Circum 2πr. Rectangle: Area l×b, Perim 2(l+b)." },
              { title: "3D Bodies", formula: "Cube: Vol a³, Surface 6a². Cylinder: Vol πr²h, Surface 2πr(h+r)." },
              { title: "Coordinates", formula: "Distance = √[(x2-x1)² + (y2-y1)²]." }
            ],
            proTips: [
              "⚡ Trick: % change specifically in bounded area if side scales +x%: strictly (1 + x/100)² - 1.",
              "⚡ Trick: For universally similar figures, absolute area ratio equals explicitly the (side ratio)²."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "linear-equations",
        title: "14. Linear Equations",
        description: "Matrix bounding solutions across paired multi-variable expressions.",
        subTopics: [
          {
            id: "equations",
            title: "Solving Vectors",
            concepts: [
              { title: "Simultaneous Math", description: "Identifying intersection points crossing multi-factor lines." }
            ],
            formulas: [
              { title: "Base Expression", formula: "ax + by = c; Solve intrinsically purely via targeted substitution/elimination." }
            ],
            proTips: [
              "⚡ Cross-multiply exclusively to scale direct fractional ratios locally."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "clocks-calendars",
        title: "15. Clocks & Calendars",
        description: "Mathematical alignment cycles strictly mapping rotational time fields and absolute solar references.",
        subTopics: [
          {
            id: "clock-cal",
            title: "Time Angular Alignment",
            concepts: [
              { title: "Clock Rotations", description: "Hands sync/overlap in complex periodic fractions." }
            ],
            formulas: [
              { title: "Angle Deviation Limit", formula: "Angle = |30H - 5.5M| (Take exactly minimum of 360-that mapping)." },
              { title: "Right Angles", formula: "22 right angles firmly manifest globally per strict 12-hr window." },
              { title: "Leap Math", formula: "Leap year: ÷4 but strictly NOT ÷100 identically unless fully ÷400." },
              { title: "Day Protocol Mapping", formula: "Day of week = (Year code + month code + exact date) modulo 7." }
            ],
            proTips: [
              "⚡ Clock gains/loses: Universally re-adjust scale true time via ratio.",
              "⚡ Calendar codes absolute: Jan=1, Feb=4, etc., paired strictly heavily alongside Century geometric codes."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "statistics",
        title: "16. Statistics",
        description: "Variance, absolute medians and mapping large asymmetrical numeric groups globally.",
        subTopics: [
          {
            id: "stat-values",
            title: "Mean, Median, Mode, Variance & SD",
            concepts: [
              { title: "Distributed Array Identifiers", description: "Calculating specific centerpoints of massive chaotic datasets." }
            ],
            formulas: [
              { title: "Core Basics", formula: "Mean = Sum/n. Median = Isolated Middle value (when completely sorted). Mode = Most overwhelmingly frequent value." },
              { title: "Complex Deviations", formula: "Variance = Sum(xi - mean)² / n. Standard Deviation (SD) = √variance." }
            ],
            proTips: [
              "⚡ For explicitly grouped large tables: Mean = Î£(f×x) / Î£f."
            ],
            solvedExamples: []
          }
        ]
      },
      {
        id: "data-interpretation",
        title: "17. Data Interpretation",
        description: "Rapidly extracting exact numerical truths formatted inside massive unrefined graphical and tabulated architectures.",
        subTopics: [
          {
            id: "di-graphs",
            title: "Pie, Tabular, Graphical, Bar & Line Logic",
            concepts: [
              { title: "Visual Dataset Parsing", description: "Bypassing calculations fully by strictly locating intersection geometric constraints locally." }
            ],
            formulas: [
              { title: "Pie Generation Map", formula: "% extrapolated from raw pie: (Specific Sector Angle / 360) × 100." },
              { title: "Growth Analytics", formula: "Growth% strictly = (new value - old base) / old base × 100." }
            ],
            proTips: [
              "⚡ Approximate constantly: Violently round complex numbers initially.",
              "⚡ Extract raw intrinsic ratios absolutely immediately from bars/tables first.",
              "⚡ Validate total structural sums globally to enforce absolute layout consistency."
            ],
            solvedExamples: []
          }
        ]
      }
    ]
  },
  "logical-reasoning": {
    id: "logical-reasoning",
    title: "Logical & Analytical Reasoning",
    description: "The complete 20-module cognitive processing suite evaluating constraint elimination, deductive inference, and structural mapping.",
    icon: "Brain",
    phase: 2,
    phaseTitle: "Logical Architecture (The Processor)",
    topics: [
      {
        id: "seating-arrangement",
        title: "01. Seating Arrangement",
        description: "Linear seating, mixed directions, double/parallel rows, circular inward/outward mapping, and multi-attribute placements.",
        subTopics: [
          {
            id: "linear-circular",
            title: "Linear & Circular Structures",
            concepts: [
              { title: "Linear Frameworks", description: "Single row (facing north), Single row (mixed directions), Double row seating, Parallel row seating. Left/Right tracking reverses when facing South." },
              { title: "Circular Frameworks", description: "Circular seating (facing center: Left is clockwise, Right is anti-clockwise). Circular seating (facing outward: Left is anti-clockwise, Right is clockwise). Mixed facing requires strict arrow tracking." }
            ],
            formulas: [
              { title: "Direction Polarity", formula: "North/Center = R(Anti), L(Clock) | South/Out = R(Clock), L(Anti)" }
            ],
            proTips: ["⚡ Fixed vs relative position clues must be isolated first. Never start with purely negative clues.", "⚡ Diagram > Mental Reasoning. Start with the entity having the maximum linked constraints."],
            solvedExamples: [
              {
                question: "Six people A, B, C, D, E, F sit in a circle facing the center. A is second to the left of C. B is between D and E. E is immediately right of C. Who sits to the immediate left of A?",
                explanation: "",
                solution: "Step 1: Draw 6 slots. Step 2: Fix C. Step 3: A is 2nd left of C (C -> gap -> A). Step 4: E is immediate right of C. Step 5: B is between D and E (meaning sequence is B, E, D or D, E, B). Since E is next to C, D must be on the other side of B. Sequence so far: C, E, B, D. Step 6: Remaining slot for F is to the immediate left of A. Answer is F."
              }
            ]
          },
          {
            id: "advanced-seating",
            title: "Advanced Variants",
            concepts: [
              { title: "Layered Matrices", description: "Variable gap problems, Immediate neighbor logic, Left–right shift problems, Conditional placement puzzles, Multi-attribute seating (color, city, profession etc.) requiring overlapping tables." }
            ],
            formulas: [],
            proTips: ["⚡ Place definite variables immediately. Never rewrite negative constraints constantly, mark them explicitly next to the slot.", "⚡ 'Who' refers to the immediately preceding person. 'And/But' refers to the first person in the sentence."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "puzzles",
        title: "02. Puzzles (Logical Grid)",
        description: "Executing complex box distribution, floor scheduling, and constraint intersection multi-variable arrays.",
        subTopics: [
          {
            id: "distribution-puzzles",
            title: "Distribution & Scheduling",
            concepts: [
              { title: "Base Grids", description: "Floor-based puzzles (Bottom is 1, Top is max), Box distribution puzzles, Day / Month scheduling puzzles (Map months with 30/31 days explicitly), Age-based puzzles based on a reference base year." }
            ],
            formulas: [
              { title: "Base Anchor Rule", formula: "Always anchor the most static variable (Days, Months, Floor numbers) continuously on the leftmost column." }
            ],
            proTips: ["⚡ Use absolute cross grids to cross out invalid overlapping attributes rapidly.", "⚡ Draw two possible projection lines immediately if an explicit split occurs. Do not erase."],
            solvedExamples: [
              {
                question: "Five boxes P, Q, R, S, T are kept one above the other. Two boxes are between P and S. R is immediately above S. T is below P but not at the bottom. Which box is at the bottom?",
                explanation: "",
                solution: "Case 1: P _ _ S. Case 2: S _ _ P. \nSince R is above S, Case 1 becomes P _ R S. \nT is below P but not bottom: In Case 1: P, T, R, S, Q (Bottom is Q). \nCase 2 is invalid because R above S would mean R _ _ P, but T must be below P and not bottom, meaning 6 boxes would form. Bottom is Q."
              }
            ]
          },
          {
            id: "advanced-mapping",
            title: "Multi-Variable Mapping",
            concepts: [
              { title: "Complex Layers", description: "3-variable mapping puzzles, 4-variable mapping grids, Coded puzzle sets, Binary attribute puzzles, Conditional assignment puzzles." }
            ],
            formulas: [],
            proTips: ["⚡ Lock the most rigid/dense constraint first to collapse variable chains immediately.", "⚡ Negative matching (X does not like Blue or Red) is heavily eliminated on a grid matrix."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "ranking-order",
        title: "03. Ranking & Order",
        description: "Isolating relative positional shifts, left/right total counting, and swapping logic.",
        subTopics: [
          {
            id: "basic-ranking",
            title: "Positional Mathematics",
            concepts: [
              { title: "Positional Tracking", description: "Position from left/right, Relative ranking, Reverse ranking, Middle position tracking." }
            ],
            formulas: [
              { title: "Total Entities", formula: "Total = (LeftRank + RightRank) - 1." },
              { title: "Entities Between", formula: "Middle = Total - (LeftRank + RightRank) [Non-overlapping case]" }
            ],
            proTips: ["⚡ Visualize explicitly with a line block. Never just sum numbers in mind blindly.", "⚡ If Left + Right > Total, it is an Overlapping case. Middle = (L+R) - Total - 2."],
            solvedExamples: [
              {
                question: "In a row of 40 students, Rahul is 15th from the left and Amit is 12th from the right. How many students are between them?",
                explanation: "",
                solution: "Total = 40. L = 15, R = 12. \nL+R = 27. Since Total > L+R, it's non-overlapping. \nMiddle = 40 - 27 = 13 students."
              }
            ]
          },
          {
            id: "complex-ranking",
            title: "Ties & Swapping",
            concepts: [
              { title: "Conditional Shifting", description: "Tie-based ranking, Rank after swapping entities." }
            ],
            formulas: [
              { title: "Swap Jump", formula: "New Rank - Old Rank = Total entities jumped = Other entity's new rank shift." }
            ],
            proTips: ["⚡ During swaps, evaluate the relative absolute distance jump between the two specific anchors.", "⚡ Always track the single static identity whose position fundamentally shifted from one side to the other."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "inequalities",
        title: "04. Inequalities",
        description: "Mapping mathematical symbols and assessing continuous boolean validity pathways without calculation.",
        subTopics: [
          {
            id: "inequality-chains",
            title: "Direct & Coded Systems",
            concepts: [
              { title: "Condition Chains", description: "Direct inequality, Coded inequality ($=≥, @=≤), Combined inequality chain stringing." }
            ],
            formulas: [
              { title: "Priority Engine", formula: "Priority rules: > or < (High) | ≥ or ≤ (Medium) | = (Low). Highest symbol in path wins." },
              { title: "Path Collision", formula: "A > B < C leads to NO relation explicitly between A and C." }
            ],
            proTips: ["⚡ Either/Or rigorously triggers exclusively when both conclusions are false individually AND they combine to form the exact broken relation (e.g., A ≥ B gives False for A > B and False for A = B individually, but Either/Or when queried together)."],
            solvedExamples: [
              {
                question: "Statements: P ≥ Q = R > S ≤ T. Conclusions: I. P > S, II. Q ≤ T",
                explanation: "",
                solution: "Path P to S: P ≥ Q = R > S. Priority is >, so P > S is TRUE. \nPath Q to T: Q = R > S ≤ T. Collision occurs (> and ≤ face off). So Q ≤ T is FALSE. \nOnly I is True."
              }
            ]
          }
        ]
      },
      {
        id: "input-output",
        title: "05. InputOutput",
        description: "Tracking automated machine sorting algorithms operating strictly via algorithmic phase transformation.",
        subTopics: [
          {
            id: "machine-logic",
            title: "Transformation Patterns",
            concepts: [
              { title: "Algorithmic Sorting", description: "Machine rearrangement pattern, Stepwise shifting logic (inside-out, outside-in), Alphabet sorting (vowels/consonants), Number sorting (high/low parity), Mixed alphanumeric." }
            ],
            formulas: [
              { title: "Step Tracking", formula: "Check if letters sort alphabetically while numbers sort descending recursively." }
            ],
            proTips: ["⚡ Write only the absolute first letter/digit of each tracked variable locally to save 90% writing time.", "⚡ Verify if elements 'shift' internally or 'fix' bounds on boundaries. Auto-filled elements don't consume steps."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "data-sufficiency",
        title: "06. Data Sufficiency",
        description: "Testing exclusively whether enough deterministic information exists to compute a truth value natively.",
        subTopics: [
          {
            id: "sufficiency-logic",
            title: "Sufficiency States",
            concepts: [
              { title: "Condition Testing", description: "Statement I alone sufficient, Statement II alone sufficient, Combined sufficiency, Redundant info, Insufficient case analysis." }
            ],
            formulas: [
              { title: "Boolean Termination", formula: "If question asks 'Is X even?', finding X=2 is Sufficient. Finding X=3 is ALSO Sufficient (answer is NO). Ambiguity (X=2 or 3) is Insufficient." }
            ],
            proTips: ["⚡ Never calculate the final absolute answer string. Merely confirm boolean 'can it be found' explicitly.", "⚡ Always test Statement II completely forgetting Statement I existed entirely first."],
            solvedExamples: [
              {
                question: "What is the two digit number? I) The sum of digits is 8. II) The tens digit is 3 times the units digit.",
                explanation: "",
                solution: "I: Sum is 8. Could be 17, 26, 35, 44, 53, 62, 71, 80. (Not sufficient). \nII: Tens=3*Units. Could be 31, 62, 93. (Not sufficient). \nCombine I and II: The only number from II that has sum 8 is 62. (Combine is Sufficient). \nAnswer: Both I and II are necessary."
              }
            ]
          }
        ]
      },
      {
        id: "syllogism",
        title: "07. Syllogism",
        description: "Deploying Venn diagrams to extract strict universal logical bounds filtering truth from assumptions.",
        subTopics: [
          {
            id: "syllogism-logic",
            title: "Venn Mapping Rules",
            concepts: [
              { title: "Classical Constraints", description: "All–Some–No statements. Positive statements cannot natively yield Negative definite conclusions." },
              { title: "Advanced Inference", description: "Only A is B (All B is A + B will never intersect with anything else). Only a few A are B (Some A are B AND Some A are NOT B)." }
            ],
            formulas: [
              { title: "Possibility Rule", formula: "If no cross/negative relation exists between two disconnected bubbles, ANY possibility between them is True." }
            ],
            proTips: ["⚡ In 'Only a few' completely map out 'Some are + Some are explicitly NOT' structurally. Diagram > Mind.", "⚡ Either/Or works if: 1. Elements match, 2. One is Positive another Negative, 3. Both are Individually False."],
            solvedExamples: [
              {
                question: "Statement: Some Dogs are Cats. No Cat is Rat. Conclusion: I. Some Dogs are not Rats. II. All Dogs being Rats is a possibility.",
                explanation: "",
                solution: "Draw Venn: D overlaps C. C has cross with R. \nI: Some Dogs (the ones inside Cats) can never be Rats. So I is TRUE. \nII: All Dogs cannot go into Rats because the Cat part of Dog cannot touch Rat. So II is FALSE. \nOnly I follows."
              }
            ]
          }
        ]
      },
      {
        id: "statement-conclusion",
        title: "08. Statement & Conclusion",
        description: "Decoupling unsupported assumption extrapolation strictly relying upon base premise logic explicitly.",
        subTopics: [
          {
            id: "unsupported-bounds",
            title: "Definitive Inference",
            concepts: [
              { title: "Conclusion Validity", description: "Strong conclusion, Weak conclusion, Logical implication, Overgeneralization trap, Extraneous bounds." }
            ],
            formulas: [
              { title: "Extraneous Elimination", formula: "If word/concept Z was not explicitly stated or defined in premise A->B, conclusion containing Z is False." }
            ],
            proTips: ["⚡ Never port external real-world knowledge. React entirely based purely upon the presented base text.", "⚡ Beware of extreme keywords in conclusions: 'Always, Never, All, Only, Must' -> these are usually False."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "statement-assumption",
        title: "09. Statement & Assumption",
        description: "Hunting explicitly for the mandatory invisible baseline prerequisites enabling the author's primary thought.",
        subTopics: [
          {
            id: "assumption-logic",
            title: "Premise Architecture",
            concepts: [
              { title: "Implicit Requirements", description: "Implicit assumption, Necessary assumption, Hidden premise detection. Assumptions are what the author presumed TRUE before speaking." }
            ],
            formulas: [
              { title: "Negation Test", formula: "Negate the Assumption. If Negated Assumption makes Statement absurd -> Assumption was Implicit." }
            ],
            proTips: ["⚡ Negate the option. If the author's statement fails mechanically immediately, the assumption is natively valid.", "⚡ An assumption must be a generalized premise supporting the statement, not a repetition of the statement."],
            solvedExamples: [
              {
                question: "Statement: 'Use our software to increase your company's productivity.' Assumption I: Productivity is desirable. Assumption II: Other softwares are bad.",
                explanation: "",
                solution: "I: If productivity is NOT desirable, the ad fails completely. So I is Implicit. \nII: The statement doesn't talk about others. So II is invalid. \nOnly I is implicit."
              }
            ]
          }
        ]
      },
      {
        id: "statement-argument",
        title: "10. Statement & Argument",
        description: "Filtering arguments solely based natively on foundational structural logic excluding all subjective sentimental factors.",
        subTopics: [
          {
            id: "argument-weight",
            title: "Logical Objective Filtering",
            concepts: [
              { title: "Argument Sorting", description: "Strong argument (Provides factual 'Why' and 'How'), Weak argument (Opinion, Example-only, Ambiguous)." }
            ],
            formulas: [],
            proTips: ["⚡ Weak arguments are generally emotionally charged, use generic hyperbole, or just state 'Yes otherwise it's bad' without linkage.", "⚡ An argument citing 'Like USA did it' is weak because mimicry without context logically fails."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "course-of-action",
        title: "11. Course of Action",
        description: "Assessing policy solutions filtering objectively for absolute viability minus extreme adverse overreactions.",
        subTopics: [
          {
            id: "policy-viability",
            title: "Feasibility Assessment",
            concepts: [
              { title: "Execution Logic", description: "Feasibility testing, Root problem resolution, Preventive action logic, Practical implementation analysis natively." }
            ],
            formulas: [],
            proTips: ["⚡ Any action that spawns a completely new separate equal-scale problem is structurally definitively an invalid action.", "⚡ Avoid extreme negative punishments unless the situation explicitly details a severe, illegal, or catastrophic failure natively."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "cause-effect",
        title: "12. Cause & Effect",
        description: "Validating timeline chronologies filtering actual cascading consequences vs mutually exclusive external factors.",
        subTopics: [
          {
            id: "causality-timeline",
            title: "Event Tracing",
            concepts: [
              { title: "Chronological Linkage", description: "Root cause identification, Reverse causality, Independent events, Correlation vs causation." }
            ],
            formulas: [
              { title: "Timeline Test", formula: "If Event B physically could not happen without Event A finishing first, A is definitively the Cause." }
            ],
            proTips: ["⚡ Cause universally strictly chronologically predates heavily the manifested effect.", "⚡ Use the 'Because A happened, B happened' spoken test. If it sounds completely disjointed, they are independent parallel causes."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "assertion-reason",
        title: "13. Assertion & Reason",
        description: "Testing distinct statements identically for literal universal factual logic, subsequently checking conditional linkages.",
        subTopics: [
          {
            id: "conditional-links",
            title: "Truth & Explanatory Bounds",
            concepts: [
              { title: "Validation Protocol", description: "Independent truth testing -> THEN Explanation validation. Is Reason truly the primary cause of Assertion natively?" }
            ],
            formulas: [],
            proTips: ["⚡ Verify each sentence completely autonomously first. Determine linking 'because' exclusively afterwards structurally."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "blood-relations",
        title: "14. Blood Relations",
        description: "Constructing complex generation trees parsing coded familial links explicitly and avoiding pronoun traps heavily.",
        subTopics: [
          {
            id: "family-grids",
            title: "Generational Mapping",
            concepts: [
              { title: "Pedigree Tracing", description: "Direct relation problems, Coded blood (A+B means A is Dad of B), Generation gap inference natively." }
            ],
            formulas: [
              { title: "Direction Syntax", formula: "A is father of B. Vector is drawn A -> B down. Focus on who is being asked. 'How is A related to B' means what does B call A." }
            ],
            proTips: ["⚡ Directly track explicitly Gender nodes: Male (+), Female (-), Same Generation (-), Hierarchy Shift (|). Do not assume gender via explicitly ambiguous English names natively.", "⚡ For coded equations, evaluate strictly from Right to Left to build the tree continuously."],
            solvedExamples: [
              {
                question: "Pointing to a man, a woman said, 'His mother's only daughter is my mother.' How is the woman related to the man?",
                explanation: "",
                solution: "Man's mother's only daughter = Man's sister. \nWoman says Man's sister is 'My mother'. \nSo, the woman is the daughter of the man's sister. \nHence, the woman is the Niece to the man."
              }
            ]
          }
        ]
      },
      {
        id: "direction-sense",
        title: "15. Direction Sense",
        description: "Geometric mapping extrapolating shortest Euclidean bounds following complex cascading degree turns.",
        subTopics: [
          {
            id: "spatial-vectors",
            title: "Geometric Logic",
            concepts: [
              { title: "Map Calculation", description: "Cardinal mapping (N,E,S,W), Relative direction shift, Distance calculation, Shadow tracking (morning shadow West, evening shadow East), Final displacement calculation natively." }
            ],
            formulas: [
              { title: "Pythagorean Displacement", formula: "Shortest point = \u221A[(Horizontal² + Vertical²)]." },
              { title: "Cumulative Angle", formula: "Net Angle = (Sum Clockwise) - (Sum Anti-Clockwise)." }
            ],
            proTips: ["⚡ Map lines immediately. Write L/R markers visually physically whenever orientation heavily rotates inherently natively.", "⚡ For shadow problems, Person facing North has morning shadow on Left. Person facing South has morning shadow on Right natively."],
            solvedExamples: [
              {
                question: "Ravi walks 5km North, turns Right and walks 12km, turns Left and walks 5km. How far is he from start?",
                explanation: "",
                solution: "Total North = 5 + 5 = 10km. \nTotal East = 12km. \nDistance = \u221A(10² + 12²) = \u221A(100+144) = \u221A244 = 2\u221A61 km."
              }
            ]
          }
        ]
      },
      {
        id: "coding-decoding",
        title: "16. CodingDecoding",
        description: "Isolating numeric bounds, sequential alphabetical shifts, or complex reversed structural array encodings natively.",
        subTopics: [
          {
            id: "shift-vectors",
            title: "Encryption Variables",
            concepts: [
              { title: "Positional Mathematics", description: "Letter shift coding (+2, -3 jumps), Reverse alphabet coding (A=Z, B=Y), Word substitution coding (Blue is Red, Red is Sky -> What color is Blood? Sky natively)." }
            ],
            formulas: [
              { title: "EJOTY / CFILORUX", formula: "Position anchors: E=5, J=10, O=15, T=20, Y=25." }
            ],
            proTips: ["⚡ Immediately pen heavily A-Z with precise paired 1-26 base numbers initially immediately on the rough testing sheet directly natively.", "⚡ Check for opposite pairs (Sum of positions = 27)."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "series",
        title: "17. Series",
        description: "Locating secondary progression rates, recognizing alternate index patterns matching complex AP/GP structural arrays.",
        subTopics: [
          {
            id: "progression-logic",
            title: "Pattern Embedding",
            concepts: [
              { title: "Sequential Growth Matrices", description: "Number series (AP), Number series (GP), Alternate series (combining 2 different series), Square/Cube +/- constant series natively." }
            ],
            formulas: [
              { title: "Difference Matrix", formula: "Always write out Difference 1. If no pattern, strictly execute Difference 2 immediately natively." }
            ],
            proTips: ["⚡ Check precisely the secondary difference specifically if initial raw difference seems structurally completely inherently asymmetrical natively.", "⚡ Look for Prime number jumps specifically (2, 3, 5, 7, 11)."],
            solvedExamples: [
              {
                question: "What is next? 2, 9, 28, 65, 126, ?",
                explanation: "",
                solution: "Analyze numbers: 2=(1³+1), 9=(2³+1), 28=(3³+1), 65=(4³+1), 126=(5³+1). \nNext = 6³+1 = 216+1 = 217."
              }
            ]
          }
        ]
      },
      {
        id: "analogy",
        title: "18. Analogy",
        description: "Identifying invisible abstract relationships strictly projecting them recursively upon heavily divergent paired elements.",
        subTopics: [
          {
            id: "relationship-vectors",
            title: "Similarity Constraints",
            concepts: [
              { title: "Paired Inference", description: "Word analogy (Synonyms, Worker/Tool, Part/Whole), Number analogy (Squares, Jumps), Alphabet analogy natively." }
            ],
            formulas: [],
            proTips: ["⚡ Frame a highly specific universal baseline sentence connecting exactly the initial primary block rigidly. 'A is the tool used primarily by B to cut' natively.", "⚡ Do not reverse the orientation. A:B :: C:D (A is to B as C is to D)."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "classification",
        title: "19. Classification (Odd One Out)",
        description: "Segmenting groups natively locating the specifically divergent geometric logic mismatch cleanly separating one entity structurally.",
        subTopics: [
          {
            id: "mismatch-tracing",
            title: "Logical Segregation Groups",
            concepts: [
              { title: "Group Alignment Attributes", description: "Alphabet cluster mismatch (Vowel count, Jump symmetry), Number pattern classification (Prime vs Divisible), Visual figure classification natively." }
            ],
            formulas: [],
            proTips: ["⚡ Determine heavily universally explicitly what binds strictly the 3 choices together. Do not just look exclusively for 'unique' isolated elements specifically without group constraint natively.", "⚡ Vowel/Consonant combinations or digit-sums are primary breakers in number/letter strings natively."],
            solvedExamples: []
          }
        ]
      },
      {
        id: "non-verbal-reasoning",
        title: "20. Non-Verbal Reasoning",
        description: "Processing 2D mirroring, continuous 3D rotational permutations matching asymmetric graphic artifacts under pressure natively.",
        subTopics: [
          {
            id: "geometric-shapes",
            title: "Visual Transformations Space",
            concepts: [
              { title: "Imaging Logic Triggers", description: "Mirror image (Left/Right reversal), Water image (Top/Bottom reversal), Embedded figures, Dice problems (Opposite faces cannot be adjacent), Figure matrices natively." }
            ],
            formulas: [
              { title: "Dice Reversal", formula: "If two dice share exactly one common face, strictly write adjacent faces going CLOCKWISE to find opposites natively." }
            ],
            proTips: ["⚡ Look absolutely explicitly initially entirely for visually asymmetric features. Follow identically one specific shape point exclusively structurally natively.", "⚡ Mirror Image -> Vertical split. Water Image -> Horizontal split natively."],
            solvedExamples: [
              {
                question: "A dice is rolled twice. Face '2' is common in both states. Roll A shows '2, 4, 3'. Roll B shows '2, 6, 1'. What is opposite 4?",
                explanation: "",
                solution: "Write clockwise from common element '2'. \nRoll A: 2 -> 4 -> 3. \nRoll B: 2 -> 6 -> 1. \nOpposites align vertically: 4 is opposite 6, 3 is opposite 1. \nRemaining 5 is opposite 2. \nAnswer: 6 is opposite 4."
              }
            ]
          }
        ]
      }
    ]
  },
  "verbal-ability": {
    id: "verbal-ability",
    title: "Verbal Ability & Syntax",
    description: "Evaluations testing your raw linguistic comprehension, grammatical precision, and rapid analytical reading speed.",
    icon: "BookOpen",
    phase: 3,
    phaseTitle: "Verbal Matrix (The Interface)",
    topics: [
          {
                id: "reading-comprehension",
                title: "01. Reading Comprehension",
                description: "Rapidly isolating main ideas, inferential logic, author intent, and factual boundaries from massive text blocks natively.",
                subTopics: [
                      {
                            id: "rc-core",
                            title: "Analytical Reading Strategies",
                            concepts: [
                                  {
                                        title: "Macro vs Micro Questions",
                                        description: "<strong>Macro:</strong> Main Idea, Primary Purpose, Author Tone. Require global understanding.<br/><strong>Micro:</strong> Factual detail, Vocab-in-context. Require localized scanning and sentence-level parsing natively."
                                  },
                                  {
                                        title: "Fact vs Opinion / Inference",
                                        description: "<strong>Facts</strong> are explicitly stated truths. <strong>Opinions</strong> are subjective perspectives. <strong>Inferences</strong> are unstated truths that logically MUST follow strictly from the given facts without external assumptions."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "The Structural Skim",
                                        formula: "Read: Paragraph 1 entirely -> First/Last sentences of middle paragraphs -> Final paragraph entirely."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Never bring outside knowledge to RC. If it is true in the real world but not in the passage, the answer is wrong natively.",
                                  "\u26a1 Beware of Extreme Words in options: 'Always, Never, Only, Everyone'. These are highly restrictive and usually incorrect.",
                                  "\u26a1 The Main Idea is typically definitively established in the First Paragraph explicitly or the Final concluding native sentence."
                            ],
                            solvedExamples: [
                                  {
                                        question: "If a passage primarily critiques a historical economic policy and highlights its long-term societal failures, what is the author's primary tone?",
                                        explanation: "",
                                        solution: "The tone heavily involves negative evaluation and fault-finding explicitly.\\nValid tones: Critical, Disapproving, Analytical.\\nInvalid tones: Laudatory (praising), Apathetic (uncaring), Objective (neutral)."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "para-jumbles",
                title: "02. Para Jumbles",
                description: "Reconstructing shattered paragraph logic mapping strictly using pronoun anchors, chronological transitions, and mandatory pairs.",
                subTopics: [
                      {
                            id: "pj-core",
                            title: "Sequential Alignment Protocol",
                            concepts: [
                                  {
                                        title: "Opening sentence detection",
                                        description: "The opening sentence is usually an independent statement declaring a noun, a universal fact, or introducing a concept natively. It rarely starts with pronouns (He, She, They) or contrast words (However, But)."
                                  },
                                  {
                                        title: "Mandatory pair identification",
                                        description: "Two sentences inherently permanently locked together structurally. Examples: Chronological (1990 -> 1995), Question -> Answer, Cause -> Effect, Full Name -> Surname."
                                  },
                                  {
                                        title: "Pronoun reference tracking",
                                        description: "Pronouns (He, She, It, This, Those) MUST explicitly follow the specific sentence introducing their native Noun."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "The Article Transition",
                                        formula: "'A / An' (General Introduction) almost always precedes 'The' (Specific previously mentioned reference) natively."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Do not try to read the sentences randomly. Find the opening sentence first, then hunt exclusively for grammatical links natively.",
                                  "\u26a1 Transition words heavily dictate sequence: 'However' explicitly contrasts the immediate predecessor.",
                                  "\u26a1 Acronym Rule: Full form (World Health Organization) always precedes the acronym (WHO)."
                            ],
                            solvedExamples: [
                                  {
                                        question: "Arrange: A) He then bought a ticket. B) John went to the station. C) The train arrived. D) Finally, he boarded.",
                                        explanation: "",
                                        solution: "Opening: B explicitly introduces the noun 'John' and the location 'station'.\\nPronoun 'He': A ('He then bought') follows B.\\nSequence so far: B -> A.\\nEvent: C ('The train arrived') must explicitly logically precede boarding a train.\\nConclusion: D ('Finally, he boarded') ends the sequence.\\nComplete structural sequence: B -> A -> C -> D."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "para-completion",
                title: "03. Para Completion",
                description: "Supplying the missing logical link natively to ensure paragraph cohesion, chronological flow, and tonal matching.",
                subTopics: [
                      {
                            id: "pc-core",
                            title: "Logical Continuation Detection",
                            concepts: [
                                  {
                                        title: "Missing Concluding Sentence",
                                        description: "Must logically wrap up the thought established in the previous line. It acts as a summary or a final consequence. It NEVER introduces completely new, unsupported ideas natively."
                                  },
                                  {
                                        title: "Tone Matching",
                                        description: "If the paragraph is optimistic, a pessimistic missing sentence fundamentally breaks the structural cohesion unless heralded by a contrast word (But, Yet)."
                                  }
                            ],
                            formulas: [],
                            proTips: [
                                  "\u26a1 Treat Para Completion like a localized Reading Comprehension question. Focus heavily on the exact sentence strictly preceding the blank.",
                                  "\u26a1 Eliminate options that are out of scope natively, reverse the tone improperly, or copy-paste ideas directly without structural transition."
                            ],
                            solvedExamples: [
                                  {
                                        question: "The launch of the new satellite was delayed multiple times due to severe weather. Engineers worked tirelessly to protect the delicate instruments. ___________________.",
                                        explanation: "",
                                        solution: "The preceding sentence highlights the intense effort of the engineers.\\nCorrect continuation focuses on the outcome of that effort natively: 'Fortunately, their efforts paid off and the equipment remained undamaged.'\\nIncorrect trap: 'Satellites are very expensive to build.' (Out of scope / disjointed)."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "cloze-test",
                title: "04. Cloze Test",
                description: "Executing continuous paragraph blank-filling evaluating comprehensive grammar, contextual vocabulary, and preposition logic natively.",
                subTopics: [
                      {
                            id: "cloze-core",
                            title: "Contextual Blank Strategy",
                            concepts: [
                                  {
                                        title: "Forward & Backward Reading",
                                        description: "The clue for a blank natively lies either in the immediate next word (like a fixed preposition) or in the preceding descriptive clause."
                                  },
                                  {
                                        title: "Grammar-based blanks",
                                        description: "Testing Tenses, Singular/Plural verbs, or Conjunctions. Example: If the passage says 'He was ___', it requires a past participle (V3) or continuous verb (-ing)."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Prepositional Phrasing",
                                        formula: "Many verbs strictly demand native prepositions. (e.g., Accused OF, Congratulate ON, Prevent FROM)."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Do not fill the blanks one by one blindly. Read the entire short passage first natively to grasp the overall tone and tense.",
                                  "\u26a1 Use elimination aggressively. If the blank requires an adjective, eliminate all noun/verb options physically immediately.",
                                  "\u26a1 If stuck between two similar words, check the structural tone natively (positive vs negative implication)."
                            ],
                            solvedExamples: [
                                  {
                                        question: "Despite the heavy rain, the players were _____ on continuing the match.",
                                        explanation: "",
                                        solution: "Look at the preposition strictly following the blank: 'on'.\\nCommon phrase: 'Insistent on', 'Bent on', 'Keen on'.\\nOptions: A) forced B) eager C) keen D) ordered.\\n'Keen' is structurally followed natively by 'on'. Answer is C."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "error-spotting",
                title: "05. Error Spotting",
                description: "Identifying foundational grammatical fractures involving tense structures, parallel syntax, modifiers, and subject-verb harmony.",
                subTopics: [
                      {
                            id: "es-core",
                            title: "Grammar Validation Protocol",
                            concepts: [
                                  {
                                        title: "Subject-Verb Agreement errors",
                                        description: "The verb must natively agree strictly with the REAL subject, ignoring all prepositional phrases (\"The box of chocolates IS\")."
                                  },
                                  {
                                        title: "Modifier errors",
                                        description: "Dangling Modifiers: Phrases at the start of a sentence must logically describe the native noun immediately following the comma. (e.g., 'Walking down the street, the tree was beautiful' -> Incorrect. The tree wasn't walking)."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "The Error Checking Hierarchy",
                                        formula: "1. S-V Agreement -> 2. Tense -> 3. Pronouns -> 4. Prepositions -> 5. Articles."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Words like 'Each', 'Every', 'Either', 'Neither', 'Everyone' take strictly singular verbs natively (\"Everyone is here\").",
                                  "\u26a1 Parallelism: Items in a list strictly require the exact same grammatical shape (\"I love swimming, running, and jumping\")."
                            ],
                            solvedExamples: [
                                  {
                                        question: "Find the error: 'Neither the manager nor the employees was aware of the new policy.'",
                                        explanation: "",
                                        solution: "Rule of Proximity: In native 'Neither / Nor' setups, the verb exclusively agrees strictly with the subject legally closest to it.\\n'Employees' is plural.\\nCorrection: 'were aware'."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "sentence-correction---improvement",
                title: "06. Sentence Correction / Improvement",
                description: "Replacing structurally flawed phrases natively with pristine grammatical equivalents resolving idioms and comparative degrees.",
                subTopics: [
                      {
                            id: "sc-core",
                            title: "Phrase Replacement & Syntax",
                            concepts: [
                                  {
                                        title: "Verb-Tense Harmony",
                                        description: "Ensure structural timeline consistency. If an action started in the past and continues to the present natively, use Present Perfect ('has been')."
                                  },
                                  {
                                        title: "Comparative & Superlative degree",
                                        description: "Never use double comparatives ('more better', 'most tallest'). Compare similar items strictly natively ('The climate of Delhi is hotter than THAT OF Mumbai', not 'than Mumbai')."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Conditional Tense Rules",
                                        formula: "Zero: If + Pr, Pr. First: If + Pr, Fut. Second: If + Past, Would+V1. Third: If + Past Perf, Would have+V3."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Redundancy trap: 'Return back', 'Revert back', 'Final conclusion', 'Free gift' are fundamentally wrong natively. Eliminate these immediately.",
                                  "\u26a1 The phrase 'It is high time / It is time' is structurally strictly followed by the Simple Past tense natively (\"It is high time he started studying\")."
                            ],
                            solvedExamples: [
                                  {
                                        question: "Improve: 'If I was the Prime Minister, I would eradicate poverty.'",
                                        explanation: "",
                                        solution: "Subjunctive Mood Rule: For hypothetical, impossible, or unreal native situations, 'were' is used for strictly all subjects.\\nCorrection: 'If I WERE the Prime Minister...'."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "fill-in-the-blanks",
                title: "07. Fill in the Blanks",
                description: "Evaluating precision vocabulary, native idiomatic mapping, and collocation grammar via single and double blank testing.",
                subTopics: [
                      {
                            id: "fitb-core",
                            title: "Collocation & Vocabulary Mapping",
                            concepts: [
                                  {
                                        title: "Collocation-based blank",
                                        description: "Words that naturally strictly go together in English natively. (e.g., 'Commit a crime', not 'Do a crime'; 'Heavy rain', not 'Strong rain')."
                                  },
                                  {
                                        title: "Double blank vocabulary",
                                        description: "Both blanks natively govern the structural tone. Always find the blank that is easier or has a clearer prepositional clue, and eliminate options aggressively based on it."
                                  }
                            ],
                            formulas: [],
                            proTips: [
                                  "\u26a1 Always strictly determine the native Tone (+ or -) and the Part of Speech (Noun, Verb, Adjective) immediately before looking at options.",
                                  "\u26a1 If the sentence uses 'Although' or 'Despite', the two clauses natively must have contrasting structural tones."
                            ],
                            solvedExamples: [
                                  {
                                        question: "The manager's _____ attitude towards the employees created a highly _____ work environment.",
                                        explanation: "",
                                        solution: "Double Blank. If manager's attitude is negative (e.g., hostile), the environment must natively also be negative (e.g., toxic).\\nOptions: A) friendly, peaceful B) apathetic, vibrant C) hostile, toxic.\\nAnswer is C. Structural linkage is parallel negative."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "vocabulary",
                title: "08. Vocabulary",
                description: "Mastering contextual synonyms, native root-based deduction, homophones, idioms, phrasal verbs, and one-word substitutions.",
                subTopics: [
                      {
                            id: "vocab-core",
                            title: "Root Etymology & Word Usage",
                            concepts: [
                                  {
                                        title: "Root-based vocabulary",
                                        description: "Deconstructing words. 'Bene' (Good) -> Benefactor, Benevolent. 'Mal' (Bad) -> Malicious, Malevolent. 'Chrono' (Time) -> Chronological, Synchronize."
                                  },
                                  {
                                        title: "Phrasal Verbs",
                                        description: "Verb + Preposition combinations natively changing meaning heavily. (e.g., 'Look up to' = respect; 'Look down on' = despise)."
                                  }
                            ],
                            formulas: [],
                            proTips: [
                                  "\u26a1 Homophones Trap: Adapt (adjust), Adept (skilled), Adopt (take up). Elicit (draw out/evoke), Illicit (illegal). Learn to rigidly distinguish natively.",
                                  "\u26a1 Do not aggressively simply memorize definitions strictly. Read words in structural sentences natively to understand contextual shading (e.g., 'Childish' is negative, 'Childlike' is positive)."
                            ],
                            solvedExamples: [
                                  {
                                        question: "What is the exact synonym of 'EPHEMERAL'? A) Eternal B) Transitory C) Pervasive D) Resilient",
                                        explanation: "",
                                        solution: "'Ephemeral' natively literally means lasting for a very short time.\\nEternal is an antonym.\\nTransitory strictly means not permanent.\\nAnswer: B."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "sentence-rearrangement",
                title: "09. Sentence Rearrangement",
                description: "Reordering shattered sentence fragments into a single strictly cohesive flowing grammatical native entity.",
                subTopics: [
                      {
                            id: "sr-core",
                            title: "Syntactical Sequencing",
                            concepts: [
                                  {
                                        title: "Standard Phrase Grammar",
                                        description: "The fundamental English native structure revolves heavily around Subject -> Verb -> Object -> Adverb/Time."
                                  },
                                  {
                                        title: "Cohesion detection",
                                        description: "Identifying structural pairs natively like 'Not only ... but also', 'Either ... or', 'Between ... and', 'From ... to'."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "The Relative Clause Hook",
                                        formula: "Who/Which/That strictly MUST follow immediately native to the exact noun they describe."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Look exclusively initially for the primary Subject. The sentence almost never heavily starts with conjunctions natively like 'and', 'but', or 'because'.",
                                  "\u26a1 Use options directly natively to test structural linkages rather than trying to completely solve the entire puzzle completely blind."
                            ],
                            solvedExamples: [
                                  {
                                        question: "P: of the global warming Q: melting of glaciers R: is a direct consequence S: in the polar regions",
                                        explanation: "",
                                        solution: "Find subject natively: 'Melting of glaciers' (Q).\\nLocation of melting: 'in the polar regions' (S).\\nVerb/Action: 'is a direct consequence' (R).\\nPrepositional link: 'of the global warming' (P).\\nResult natively: Q - S - R - P."
                                  }
                            ]
                      }
                ]
          },
          {
                id: "critical-reasoning",
                title: "10. Critical Reasoning",
                description: "Extracting assumptions, tracing inferential boundaries natively, and strengthening/weakening logical placement arguments.",
                subTopics: [
                      {
                            id: "cr-core",
                            title: "Argument Analysis & Flaw Detection",
                            concepts: [
                                  {
                                        title: "Assumption identification",
                                        description: "An unstated underlying native premise heavily fundamentally required for the author's argument strictly to survive."
                                  },
                                  {
                                        title: "Strengthen / Weaken",
                                        description: "To Strengthen: Introduce new structural evidence heavily confirming the premise or eliminating alternate causes natively. To Weaken: Introduce a fatal alternate cause or structural flaw natively."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "The Negation Test",
                                        formula: "To genuinely find an Assumption, NEGATE the option natively. If the negation totally destroys the author's argument, that option IS strictly the true Assumption."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Critical Reasoning is natively essentially math with words. Premise + Assumption = Conclusion.",
                                  "\u26a1 Never attack the 'Premise' (facts given) to strictly weaken an argument natively. Always attack the 'Assumption' (the bridge between premise and conclusion)."
                            ],
                            solvedExamples: [
                                  {
                                        question: "Conclusion: Eating apples prevents colds. Premise: People who eat apples rarely get colds. What weakens this heavily natively?",
                                        explanation: "",
                                        solution: "The argument assumes causation (Apples -> No Colds).\\nPossible weakness natively: Correlation is not causation (Alternate Cause).\\nWeaken: 'People who eat apples natively also happen to take heavy daily vitamin C supplements.'"
                                  }
                            ]
                      }
                ]
          }
    ,
  
          {
                id: "sentence-connectors",
                title: "11. Sentence Connectors",
                description: "Deploying transition words natively integrating multiple logical clauses including contrasts, causes, and additions.",
                subTopics: [
                      {
                            id: "sc-core",
                            title: "Logical Conjunction Placement",
                            concepts: [
                                  {
                                        title: "Contrast Connectors",
                                        description: "However, Although, Despite, Nevertheless, Yet. These natively introduce a sharp tonal pivot."
                                  },
                                  {
                                        title: "Cause and Effect",
                                        description: "Therefore, Hence, Because, Consequently, As a result. These imply strict mathematical flow natively."
                                  },
                                  {
                                        title: "Addition",
                                        description: "Furthermore, Moreover, In addition, Additionally. Used strictly to pile on supporting evidence."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "The Structural Pivot Test",
                                        formula: "Determine the polarity of Clause A (+) and Clause B (-). If opposite, use a Contrast connector. If same, use Addition/Cause."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 \"Despite\" and \"In spite of\" are prepositions. They natively take a Noun or Gerund, NEVER a full clause (e.g., \"Despite the rain\", not \"Despite it was raining\").",
                                  "\u26a1 \"Although\" is a conjunction it natively takes a full active clause (e.g., \"Although it was raining\")."
                            ],
                            solvedExamples: []
                      }
                ]
          },
          {
                id: "active-passive-voice",
                title: "12. Active & Passive Voice",
                description: "Inverting syntactic focus natively emphasizing the object by manipulating structural verb tenses strictly.",
                subTopics: [
                      {
                            id: "ap-core",
                            title: "Syntactic Inversion Protocols",
                            concepts: [
                                  {
                                        title: "Object Focus",
                                        description: "Active: Subject -> Verb -> Object (I ate the apple). Passive: Object -> Be Verb + V3 -> By Subject (The apple was eaten by me)."
                                  },
                                  {
                                        title: "Tense Continuity Rules",
                                        description: "The original tense natively MUST uniquely remain completely unchanged. Present -> Present, Past -> Past."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Continuous Tense Modifier",
                                        formula: "Active \"-ing\" natively strictly translates to \"being + V3\" in passive."
                                  },
                                  {
                                        title: "Perfect Tense Modifier",
                                        formula: "Active \"has/have/had V3\" strictly translates to \"has/have/had been + V3\"."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Intransitive verbs (verbs without a direct object, like \"sleep\", \"go\", \"die\") completely strictly natively cannot be made passive.",
                                  "\u26a1 \"Let\" structural questions: \"Open the door\" -> \"Let the door be opened\"."
                            ],
                            solvedExamples: []
                      }
                ]
          },
          {
                id: "direct-indirect-speech",
                title: "13. Direct & Indirect Speech",
                description: "Transforming raw dialogue into reported native statements through tense shifts and precise pronoun rotation.",
                subTopics: [
                      {
                            id: "di-core",
                            title: "Reported Speech Mechanics",
                            concepts: [
                                  {
                                        title: "Tense Degradation",
                                        description: "Present tense natively universally degrades entirely strictly into Past tense. Past tense rigidly degrades completely into Past Perfect (Had + V3)."
                                  },
                                  {
                                        title: "Pronoun Matrix",
                                        description: "First person (I, We) changes natively according strictly to the Speaker. Second person (You) changes according to the Listener."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Universal Fact Exclusion",
                                        formula: "If the reported speech is an absolute strict universal fact (e.g., \"The sun rises in the east\"), the tense natively NEVER changes."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Time markers shift: Today -> That day, Tomorrow -> The next day, Yesterday -> The previous day.",
                                  "\u26a1 Interrogative (Question) inversion: \"Where are you going?\" natively strictly becomes \"He asked where I was going.\" (Verb moves explicitly strictly AFTER the subject natively)."
                            ],
                            solvedExamples: []
                      }
                ]
          },
          {
                id: "parts-of-speech-mastery",
                title: "14. Parts of Speech Mastery",
                description: "Dissecting sentences definitively via the fundamental atomic eight parts of English structural grammar.",
                subTopics: [
                      {
                            id: "pos-core",
                            title: "Grammar Classifications",
                            concepts: [
                                  {
                                        title: "Noun Vs Pronoun Usage",
                                        description: "Nouns are foundational names. Pronouns act as variables exclusively strictly substituting them natively avoiding redundancy."
                                  },
                                  {
                                        title: "Adjective Vs Adverb",
                                        description: "Adjectives strictly rigidly describe Nouns (\"Fast car\"). Adverbs strictly describe Verbs, Adjectives, or completely other Adverbs natively (\"Ran fast\", \"Very fast car\")."
                                  }
                            ],
                            formulas: [],
                            proTips: [
                                  "\u26a1 Linking verbs (be, seem, look, smell, taste) are structurally strictly natively followed exclusively entirely by Adjectives, entirely completely not Adverbs. (\"He looks sad\", not \"He looks sadly\")."
                            ],
                            solvedExamples: []
                      }
                ]
          },
          {
                id: "tenses",
                title: "15. Tenses",
                description: "Mapping linguistic timeline boundaries correctly implementing Simple, Continuous, Perfect, and Perfect Continuous structural bounds.",
                subTopics: [
                      {
                            id: "tenses-core",
                            title: "Chronological Verbs",
                            concepts: [
                                  {
                                        title: "Present Perfect",
                                        description: "An action completed in the past structurally intrinsically natively completely but wielding present consequences specifically (\"I have lost my key\")."
                                  },
                                  {
                                        title: "Past Perfect",
                                        description: "When two distinct actions happen in the past natively, the older (first completed) action uniquely takes Past Perfect (Had + V3)."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Since vs For",
                                        formula: "Since indicates a Specific Point in time natively (Since 1990). For exclusively measures completely a Duration of time (For 10 years)."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Never heavily natively completely mix Past tense with Present tense in a single dependent clause sentence without a clear transitional time marker natively."
                            ],
                            solvedExamples: []
                      }
                ]
          }
    ,
  
          {
                id: "subject-verb-agreement",
                title: "16. Subject-Verb Agreement",
                description: "Ensuring grammatical harmony strictly equating the singular or plural shape of a subject directly to its verb.",
                subTopics: [
                      {
                            id: "sva-core",
                            title: "Subject-Verb Integrity Rules",
                            concepts: [
                                  {
                                        title: "Singular Subjects",
                                        description: "The news, physics, mathematics, measles natively strictly take Singular verbs (\"The news IS bad\")."
                                  },
                                  {
                                        title: "Plural Subjects",
                                        description: "Scissors, pants, police, cattle natively strictly take Plural verbs (\"The police ARE investigating\")."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Distance Principle",
                                        formula: "Ignore all phrases located strictly between Subject and Verb (\"The captain, along with his crew, IS ready\")."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 \"A number of\" uniquely takes a Plural Verb (\"A number of boys are playing\"). \"The number of\" uniquely takes a Singular Verb (\"The number of boys is 50\")."
                            ],
                            solvedExamples: []
                      }
                ]
          },
          {
                id: "articles",
                title: "17. Articles",
                description: "Defining specific contextual noun references uniquely using definite, indefinite, and zero grammatical determiners.",
                subTopics: [
                      {
                            id: "articles-core",
                            title: "Definite & Indefinite Rules",
                            concepts: [
                                  {
                                        title: "Definite Article (The)",
                                        description: "Used when the noun is uniquely precisely known to both speaker and listener. (\"The book on the table\")."
                                  },
                                  {
                                        title: "Indefinite Articles (A / An)",
                                        description: "Used for entirely non-specific members of a group natively. An is used before a Vowel SOUND (\"An hour, A university\")."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Zero Article Modifier",
                                        formula: "Never place Articles completely before Uncountable abstract Nouns natively (e.g., Love, Information, Gold)."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 \"The\" is completely strictly required natively before superlative degrees (\"The best boy\")."
                            ],
                            solvedExamples: []
                      }
                ]
          },
          {
                id: "prepositions",
                title: "18. Prepositions",
                description: "Bridging noun relationships defining structural location, vector direction, and duration natively.",
                subTopics: [
                      {
                            id: "prep-core",
                            title: "Time & Location Vectors",
                            concepts: [
                                  {
                                        title: "In, On, At",
                                        description: "At = specific point (At 5 PM). On = specific day/surface (On Monday, On table). In = specific enclosed volume/month/year (In January, In a box)."
                                  },
                                  {
                                        title: "Fixed Prepositions",
                                        description: "Verbs strictly married to prepositions natively: Accuse OF, Abide BY, Angry WITH (a person), Angry AT (a situation)."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Beside vs Besides",
                                        formula: "Beside = next to linearly. Besides = in structural addition to."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 \"Between\" explicitly structurally applies natively uniquely to exactly TWO entities. \"Among\" fundamentally structurally uniquely natively exclusively explicitly applies to THREE or more."
                            ],
                            solvedExamples: []
                      }
                ]
          },
          {
                id: "modifiers",
                title: "19. Modifiers",
                description: "Placing descriptive words strictly adjacently validating they legally grammatical describe the intended noun natively.",
                subTopics: [
                      {
                            id: "modifiers-core",
                            title: "Descriptive Placement Metrics",
                            concepts: [
                                  {
                                        title: "Misplaced Modifiers",
                                        description: "A modifier completely structurally located too far natively from its target noun (\"I bought a car from a man with a broken steering wheel\")."
                                  },
                                  {
                                        title: "Dangling Modifiers",
                                        description: "The target noun natively is entirely missing structurally (\"Looking out the window, the sky was blue\" -> Who was looking?)."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Adjacency Rule",
                                        formula: "The descriptive phrase natively strictly heavily completely MUST immediately structurally precede the specific noun it modifies."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 To completely flawlessly accurately solve a dangling modifier natively: make the subject of the main structural clause uniquely explicitly heavily perform the specific verbal \"-ing\" action natively."
                            ],
                            solvedExamples: []
                      }
                ]
          },
          {
                id: "parallelism",
                title: "20. Parallelism",
                description: "Constructing sentences uniformly ensuring completely strictly mirrored internal grammatical structural balances natively.",
                subTopics: [
                      {
                            id: "parallel-core",
                            title: "Structural Symmetry Mapping",
                            concepts: [
                                  {
                                        title: "List Integrity",
                                        description: "All items structurally uniquely in a list completely natively MUST structurally share identical grammatical forms (All Nouns, All Infinitives, All Gerunds)."
                                  }
                            ],
                            formulas: [
                                  {
                                        title: "Correlative Symmetry",
                                        formula: "Phrases natively following exclusively \"Either\", \"Neither\", \"Not only\" strictly MUST be structurally identical to heavily exactly the phrase explicitly following exclusively \"Or\", \"Nor\", \"But also\"."
                                  }
                            ],
                            proTips: [
                                  "\u26a1 Test Parallelism blindly strictly by completely heavily separating natively the items and physically testing strictly each completely uniquely specifically legally native against the structural foundation natively (\"She likes to run, swim, and biking\" -> \"She likes to biking\" = False)."
                            ],
                            solvedExamples: []
                      }
                ]
          }
    ]
  }
,
  "tcs-nqt-2026-elimination-cheat-sheet": {
    id: "tcs-nqt-2026-elimination-cheat-sheet",
    title: "TCS NQT 2026 Option Elimination Techniques",
    description: "Hyper-detailed guide on Option Elimination. Crucial for speed: attempt all questions, eliminate 2-3 options in 10-15 secs per Q.",
    icon: "Zap",
    phase: 4,
    phaseTitle: "Master Syllabus",
    topics: [
        {
            id: "nqt-elim-mindset",
            title: "01. Key Mindset & Framework",
            description: "Foundational principles before diving into specific section elimination.",
            subTopics: [
                {
                    id: "nqt-elim-framework",
                    title: "Core Elimination Strategy",
                    concepts: [
                        {
                            title: "POE (Process of Elimination)",
                            description: "Always scan options first \u2192 cross out obvious wrongs \u2192 compare remaining. If 2 left, guess (no penalty!)."
                        },
                        {
                            title: "Trap Spotting",
                            description: "TCS loves 'near-miss' options (e.g., forgot to subtract remainder in HCF, mismatched connector in Verbal)."
                        },
                        {
                            title: "Section Balance",
                            description: "Quant (calc traps), Reasoning (logic breaks), Verbal (context/grammar mismatches)."
                        }
                    ],
                    formulas: [],
                    proTips: [
                        "\u26a1 Practice Drill: In mocks, note exactly why you eliminated an option (e.g., 'extreme word in RC').",
                        "\u26a1 Time Hacks: If Q takes >1 min, quickly eliminate 2 + guess \u2192 move on."
                    ]
                }
            ]
        },
        {
            id: "nqt-elim-general",
            title: "02. General Elimination Techniques",
            description: "Foundational techniques applied across all sections.",
            subTopics: [
                {
                    id: "nqt-elim-gen-core",
                    title: "Rules & Lookouts",
                    concepts: [
                        {
                            title: "Extreme/Absolute Options",
                            description: "Eliminate 'always/all/never/only/none/every' unless explicitly supported."
                        },
                        {
                            title: "Mismatch with Data",
                            description: "If option contradicts given info or formula (e.g., non-multiples in AP/GP), eliminate immediately."
                        },
                        {
                            title: "Plug-In/Back-Solve",
                            description: "Substitute options into equation/pattern. Start with B or C (often correct)."
                        },
                        {
                            title: "Approximation/Rounding",
                            description: "Round numbers to eliminate far-off values quickly."
                        }
                    ],
                    formulas: [
                        {
                            title: "Advanced Trick: Scan Vertically",
                            formula: "Read options column-wise for patterns (e.g., all positive except one negative)."
                        },
                        {
                            title: "Advanced Trick: Batch Elimination",
                            formula: "In sets (e.g., Reasoning seating), eliminate across Qs if one invalidates."
                        }
                    ],
                    proTips: [
                        "\u26a1 Parity Check: If pattern is even, heavily eliminate odd options.",
                        "\u26a1 Reverse Engineering: Assume option is true \u2192 see if it uniquely fits the Q."
                    ]
                }
            ]
        },
        {
            id: "nqt-elim-quant",
            title: "03. Quantitative Aptitude Elimination",
            description: "Specific traps for numerical and calculation based problems.",
            subTopics: [
                {
                    id: "nqt-elim-quant-core",
                    title: "Numerical Triggers",
                    concepts: [
                        {
                            title: "Calculation Traps",
                            description: "Eliminate if it definitely doesn't match quick approx/mental math (e.g., divisor ending)."
                        },
                        {
                            title: "Formula Mismatch",
                            description: "Use HCF\u00d7LCM=Product; definitively eliminate if the option fails this check."
                        },
                        {
                            title: "Number System Lookouts",
                            description: "Check place value position; eliminate if the place value doesn't securely match."
                        }
                    ],
                    formulas: [
                        {
                            title: "Series Check",
                            formula: "In an AP, check the common difference `d`. Eliminate options not matching `+d`."
                        },
                        {
                            title: "Divisibility Rules",
                            formula: "Use divisibility to eliminate options that don't satisfy the demanded remainder strictly."
                        }
                    ],
                    proTips: [
                        "\u26a1 Types Check: In geometric progressions (GP), solidly eliminate non-multiples.",
                        "\u26a1 PYQ Trick: In Time Speed Distance, if the relative speed sign is physically impossible, firmly eliminate."
                    ]
                }
            ]
        },
        {
            id: "nqt-elim-logical",
            title: "04. Logical Reasoning Elimination",
            description: "Finding impossible logical statements, visual impossibilities, and boolean breaks.",
            subTopics: [
                {
                    id: "nqt-elim-log-core",
                    title: "Logic Breaking Techniques",
                    concepts: [
                        {
                            title: "Pattern Break",
                            description: "In series, eliminate if it purely does not fit the established AP/GP/Fib bounds."
                        },
                        {
                            title: "Diagram Inconsistency",
                            description: "In seating, unequivocally eliminate options that violently violate 'next to/opposite'."
                        },
                        {
                            title: "Visual/Cube Blocks",
                            description: "Eliminate if explicitly opposite faces are shown touching, or cuts are purely asymmetric."
                        }
                    ],
                    formulas: [
                        {
                            title: "Syllogism Venn Check",
                            formula: "Draw quick overlaps. Eliminate mathematically impossible conclusions (e.g., 'all A are B' heavily invalidates 'no A is B')."
                        },
                        {
                            title: "Data Sufficiency",
                            formula: "Eliminate if statement 1 alone solidly suffices but the heavily tricky option requires both."
                        }
                    ],
                    proTips: [
                        "\u26a1 Blood/Direction: Eliminate entirely if the gender or primary cardinal direction violently mismatches."
                    ]
                }
            ]
        },
        {
            id: "nqt-elim-verbal",
            title: "05. Verbal Ability Elimination",
            description: "Contextual mismatches, grammatical impossibilities, and sentence structure flaws.",
            subTopics: [
                {
                    id: "nqt-elim-verb-core",
                    title: "Grammar & Context Filters",
                    concepts: [
                        {
                            title: "Grammar/Error ID",
                            description: "Check Subject-Verb agreement natively first. Eliminate plural verbs for singular collective subjects."
                        },
                        {
                            title: "RC Inference Tricks",
                            description: "Eliminate extremes/non-implied choices. If it's a direct explicit quote for an 'inference' question, forcefully eliminate."
                        }
                    ],
                    formulas: [
                        {
                            title: "Completion: Comparison vs Contrast",
                            formula: "If the sentence uses 'but', eliminate agreeing options. If it uses 'likewise', rigidly eliminate purely opposite ones."
                        },
                        {
                            title: "Completion: Cause-Effect",
                            formula: "If jumping words like 'therefore' appear, absolutely eliminate any non-result options."
                        }
                    ],
                    proTips: [
                        "\u26a1 Para Jumbles: Solidly eliminate any completely broken links or wrong openers starting completely with a native hanging pronoun.",
                        "\u26a1 Formal Language: Definitively eliminate completely casual contractions (can't, won't) exclusively in formal contexts."
                    ]
                }
            ]
        }
    ]
},
  "tcs-nqt-2026-cheat-sheet": {
    id: "tcs-nqt-2026-cheat-sheet",
    title: "TCS NQT 2026 Quantitative Cheat Sheet",
    description: "Comprehensive, ultra-dense technical summary mapping the exact pattern of TCS NQT 2026 Foundation Numerical Ability.",
    icon: "Target",
    phase: 4,
    phaseTitle: "Master Syllabus",
    topics: [
        {
            id: "nqt-number-system",
            title: "01. Number System & Divisibility",
            description: "Fundamental numeric properties, cyclicity, remainders, and divisibility matrices.",
            subTopics: [
                {
                    id: "nqt-ns-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "Classification",
                            description: "Natural (1+), Whole (0+), Integers(...,-1,0,1,...), Prime (2,3,5...), Co-Prime (HCF=1)."
                        },
                        {
                            title: "Divisibility Rules",
                            description: "<b>3/9:</b> Sum of digits. <b>4:</b> Last 2 digits. <b>8:</b> Last 3. <b>11:</b> |Sum(Odd pos) - Sum(Even pos)| = 0 or 11. <b>7/13/17:</b> Osculator method."
                        }
                    ],
                    formulas: [
                        {
                            title: "Factorial (n!)",
                            formula: "n! = n * (n-1) * ... * 1. Note: 0! = 1. Trailing zeros in n! = [n/5] + [n/25] + [n/125] + ..."
                        },
                        {
                            title: "Remainder Theorem",
                            formula: "(A * B * C) % N = [(A%N) * (B%N) * (C%N)] % N"
                        },
                        {
                            title: "Fermat's Theorem",
                            formula: "a^(p-1) / p leaves remainder 1 (if p is prime and a is not divisible by p)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Unit Digit Cyclicity: 2,3,7,8 cycle every 4 powers. 4,9 cycle every 2. 0,1,5,6 always end in themselves.",
                        "\u26a1 Number of Factors of N = (p^a)(q^b) is (a+1)(b+1)."
                    ]
                }
            ]
        },
        {
            id: "nqt-hcf-lcm",
            title: "02. HCF & LCM Applications",
            description: "Greatest common divisors and recursive multi-fraction synchronizations.",
            subTopics: [
                {
                    id: "nqt-hcf-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "Definitions",
                            description: "HCF perfectly divides numbers. LCM is perfectly divisible by numbers."
                        }
                    ],
                    formulas: [
                        {
                            title: "Base Equation",
                            formula: "HCF(a,b) * LCM(a,b) = a * b"
                        },
                        {
                            title: "Fractions",
                            formula: "HCF = HCF(num)/LCM(den). LCM = LCM(num)/HCF(den)."
                        },
                        {
                            title: "Remainder Logic",
                            formula: "Greatest number dividing x,y,z leaving r1,r2,r3: HCF(x-r1, y-r2, z-r3)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Synchronous Events (traffic lights/bells): Always find the LCM of given intervals.",
                        "\u26a1 Difference Rule: The HCF of any two numbers NEVER exceeds their absolute difference."
                    ]
                }
            ]
        },
        {
            id: "nqt-percentages",
            title: "03. Percentages & Depreciation",
            description: "Scaling ratios, population decay, bounding limits and election algorithms.",
            subTopics: [
                {
                    id: "nqt-perc-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "Base Shift",
                            description: "If A is x% more than B, B is [(x)/(100+x)] * 100% less than A."
                        }
                    ],
                    formulas: [
                        {
                            title: "Successive % Change",
                            formula: "Net = X + Y + (XY/100). (Use negative for decrease)."
                        },
                        {
                            title: "Population Dynamics",
                            formula: "Final = Initial * (1 \u00b1 R/100)^N"
                        },
                        {
                            title: "Passing Marks",
                            formula: "Total Marks = (Difference in Marks) / (Difference in %)"
                        }
                    ],
                    proTips: [
                        "\u26a1 Memorize Fractional Equivalents natively: 1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.",
                        "\u26a1 Product Constancy: If Price +25% (1/4), Consumption must be -20% (1/5) to keep Expenditure constant."
                    ]
                }
            ]
        },
        {
            id: "nqt-profit-loss",
            title: "04. Profit, Loss & Discount",
            description: "Cost anchoring, marked price manipulation, and dishonest vendor equations.",
            subTopics: [
                {
                    id: "nqt-pl-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "Base Anchors",
                            description: "Profit/Loss is ALWAYS calculated on CP. Discount is ALWAYS calculated on MP."
                        }
                    ],
                    formulas: [
                        {
                            title: "Yield Equation",
                            formula: "SP = CP * (1 \u00b1 Profit/Loss%). Also SP = MP * (1 - Discount%)."
                        },
                        {
                            title: "Direct CP to MP",
                            formula: "MP/CP = (100 + Profit%) / (100 - Discount%)"
                        },
                        {
                            title: "Dishonest Dealer",
                            formula: "Profit% = (True Weight - False Weight) / False Weight * 100"
                        }
                    ],
                    proTips: [
                        "\u26a1 Buy X Get Y Free: Equivalent Discount% = [Y / (X+Y)] * 100.",
                        "\u26a1 Selling 2 items at same SP, one at x% profit, other at x% loss -> NET LOSS = (x/10)^2 %."
                    ]
                }
            ]
        },
        {
            id: "nqt-sici",
            title: "05. Simple & Compound Interest",
            description: "Linear and exponential asset compounding, discrepancy deltas, and split terms.",
            subTopics: [
                {
                    id: "nqt-sici-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "SI vs CI Properties",
                            description: "SI grows linearly. CI grows exponentially. 1st year SI = 1st year CI (if compounded annually)."
                        }
                    ],
                    formulas: [
                        {
                            title: "SI Formula",
                            formula: "SI = (P * R * T) / 100. Amount = P + SI."
                        },
                        {
                            title: "CI Formula",
                            formula: "Amount = P * (1 + R/100)^T. CI = Amount - P."
                        },
                        {
                            title: "2-Year CI-SI Difference",
                            formula: "Diff = P * (R/100)^2"
                        },
                        {
                            title: "3-Year CI-SI Difference",
                            formula: "Diff = P * (R/100)^2 * (3 + R/100)"
                        }
                    ],
                    proTips: [
                        "\u26a1 Half-Yearly: Rate becomes R/2, Time becomes 2T. Quarterly: R/4, 4T.",
                        "\u26a1 Effective 2-Yr CI Rate: It's exactly R + R + (R^2)/100."
                    ]
                }
            ]
        },
        {
            id: "nqt-ratio",
            title: "06. Ratio, Proportion & Ages",
            description: "Linear proportional division, mixtures balancing, and temporal boundary anchoring.",
            subTopics: [
                {
                    id: "nqt-ratio-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "Proportion Law",
                            description: "a:b :: c:d implies ad = bc (Product of extremes = Product of means)."
                        },
                        {
                            title: "Ages Rule",
                            description: "Age difference between two people is CONSTANT across all times (past, present, future)."
                        }
                    ],
                    formulas: [
                        {
                            title: "Third & Fourth Proportions",
                            formula: "Third prop to a,b = (b^2)/a. Fourth to a,b,c = (b*c)/a. Mean prop = sqrt(a*b)."
                        },
                        {
                            title: "Componendo & Dividendo",
                            formula: "If a/b = c/d, then (a+b)/(a-b) = (c+d)/(c-d)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Merging Ratios: To combine a:b and b:c, find LCM of 'b' or use N-method: a*b1 : b1*b2 : b2*c.",
                        "\u26a1 Coin Problems: Always multiply number of coins by their exact denomination value to map to Total Value."
                    ]
                }
            ]
        },
        {
            id: "nqt-tsd",
            title: "07. Time, Speed & Distance / Trains / Boats",
            description: "Harmonic averages, relative collision velocities, and fluid offset shifts.",
            subTopics: [
                {
                    id: "nqt-tsd-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "Relative Speed",
                            description: "Same direction: (S1 - S2). Opposite direction: (S1 + S2)."
                        },
                        {
                            title: "Boats & Streams",
                            description: "Downstream Ds = B + S. Upstream Us = B - S. Boat = (Ds+Us)/2, Stream = (Ds-Us)/2."
                        }
                    ],
                    formulas: [
                        {
                            title: "Average Speed (Equal Dist)",
                            formula: "Avg Speed = (2xy) / (x + y). Harmonic Mean."
                        },
                        {
                            title: "Unit Conversions",
                            formula: "km/h to m/s -> Multiply by 5/18. m/s to km/h -> Multiply by 18/5."
                        },
                        {
                            title: "Train Crossings",
                            formula: "Time = (L_train + L_object) / Relative Speed. (Object length = 0 for poles/men)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Early/Late Difference: Distance = (S1*S2)/(S1-S2) * Time Difference.",
                        "\u26a1 Bullet/Gunshot Trick: Distance = Speed of Sound * Difference in Time Intervals."
                    ]
                }
            ]
        },
        {
            id: "nqt-timework",
            title: "08. Time & Work / Pipes & Cisterns",
            description: "Concurrent completion rates, alternate day cycles, and positive/negative flows.",
            subTopics: [
                {
                    id: "nqt-tw-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "Efficiency & Time",
                            description: "Efficiency is strictly inversely proportional to Time. More efficiency = Less Time."
                        },
                        {
                            title: "Combined Work",
                            description: "If A = x days, B = y days. Together = (xy)/(x+y) days."
                        }
                    ],
                    formulas: [
                        {
                            title: "MDH Formula",
                            formula: "(M1 * D1 * H1) / W1 = (M2 * D2 * H2) / W2"
                        },
                        {
                            title: "Pipes Filling/Emptying",
                            formula: "Net 1hr work = 1/A + 1/B - 1/C (where C is the exit pipe)."
                        }
                    ],
                    proTips: [
                        "\u26a1 LCM Method: Always assume Total Work = LCM of given days to avoid fractions entirely.",
                        "\u26a1 Alternate Days: Find total efficiency for a full 2-day combined cycle first before dividing total work."
                    ]
                }
            ]
        },
        {
            id: "nqt-pnc",
            title: "09. Permutations, Combinations & Probability",
            description: "Combinatorial boundaries, factorial matrices, conditional intersections.",
            subTopics: [
                {
                    id: "nqt-pnc-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "AND vs OR",
                            description: "AND (both conditions must occur) = Multiply. OR (either condition) = Add."
                        },
                        {
                            title: "Basic Probability",
                            description: "P(E) = Desired Outcomes / Total Possible Outcomes. P(Not E) = 1 - P(E)."
                        }
                    ],
                    formulas: [
                        {
                            title: "Permutations (Arrangement)",
                            formula: "nPr = n! / (n-r)!. Words with repeating letters: n! / (p1! * p2! ...)."
                        },
                        {
                            title: "Combinations (Selection)",
                            formula: "nCr = n! / [r! * (n-r)!]. Note: nCr = nCn-r."
                        },
                        {
                            title: "Circular Permutations",
                            formula: "Objects in circle: (n-1)!. Pearls in necklace: (n-1)! / 2."
                        }
                    ],
                    proTips: [
                        "\u26a1 Vowels Together: Bind them as a single rigid super-block. Then multiply by their internal permutations.",
                        "\u26a1 Dice Outcomes: 2 Dice Total = 36. 3 Dice = 216. Highest probability sum for 2 dice is explicitly exactly 7 (6/36)."
                    ]
                }
            ]
        },
        {
            id: "nqt-geometry",
            title: "10. Geometry & Mensuration",
            description: "Rigid 2D boundaries, 3D fluid capacities, theorem validations natively.",
            subTopics: [
                {
                    id: "nqt-geom-core",
                    title: "Core Formulas & Tricks",
                    concepts: [
                        {
                            title: "Triangles",
                            description: "Sum of 2 sides > 3rd side. Pythagoras: H^2 = P^2 + B^2."
                        },
                        {
                            title: "Euler's Polyhedron",
                            description: "Faces + Vertices - Edges = 2."
                        }
                    ],
                    formulas: [
                        {
                            title: "2D Areas",
                            formula: "Equilateral Triangle: (sqrt(3)/4)*a^2. Circle: \u03c0r^2. Trapezium: 0.5 * (a+b) * h."
                        },
                        {
                            title: "3D Volumes & Surface",
                            formula: "Cone Vol: (1/3)\u03c0r^2h. Sphere Vol: (4/3)\u03c0r^3. Cylinder CSA: 2\u03c0rh. Hemisphere TSA: 3\u03c0r^2."
                        }
                    ],
                    proTips: [
                        "\u26a1 Internal Angle of Regular Polygon = [180 * (n-2)] / n. Exterior Angle = 360 / n.",
                        "\u26a1 Square Diagonal = a\u221a2. Cube Diagonal = a\u221a3."
                    ]
                }
            ]
        }
    ]
},
  "tcs-nqt-2026-reasoning-cheat-sheet": {
    id: "tcs-nqt-2026-reasoning-cheat-sheet",
    title: "TCS NQT 2026 Logical Reasoning Cheat Sheet",
    description: "Comprehensive, ultra-dense technical summary mapping the exact pattern of TCS NQT 2026 Foundation Reasoning Ability.",
    icon: "Brain",
    phase: 4,
    phaseTitle: "Master Syllabus",
    topics: [
        {
            id: "nqt-series-alpha",
            title: "01. Number & Alphabet Series",
            description: "Mathematical progressions, sequential shifts, twin primes, alternating logic.",
            subTopics: [
                {
                    id: "nqt-series-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Alphabet Mapping",
                            description: "A=1, B=2 ... Z=26. Reverse: Z=1 ... A=26 (Reverse = 27 - Forward position)."
                        },
                        {
                            title: "Number Patterns",
                            description: "Squares (1,4,9,16), Cubes (1,8,27,64), Primes (2,3,5,7,11,13), Fibonacci (1,1,2,3,5,8)."
                        }
                    ],
                    formulas: [
                        {
                            title: "Opposite Letter Pairs",
                            formula: "A-Z (AZad), B-Y (BoY), C-X (CruX), D-W (DoWn), E-V (EVen), F-U (FUll), G-T (GT road), H-S (HighSchool), I-R (Indian Rail), J-Q (Jungle Queen), K-P (KanPur), L-O (LOve), M-N (MaN)."
                        }
                    ],
                    proTips: [
                        "\u26a1 EJOTY Rule: Memorize 5,10,15,20,25. E=5, J=10, O=15, T=20, Y=25 for immediate index retrieval.",
                        "\u26a1 Double Difference: If series jumps erratically, test difference of the difference layer iteratively."
                    ]
                }
            ]
        },
        {
            id: "nqt-seating",
            title: "02. Seating Arrangements",
            description: "Geometric bindings, center-facing vectors vs outbound vectors, relative nodes.",
            subTopics: [
                {
                    id: "nqt-seat-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Linear Dynamics",
                            description: "Facing North: Right is East, Left is West. Facing South: Right is West, Left is East."
                        },
                        {
                            title: "Circular Dynamics",
                            description: "Center Facing: Left = Clockwise, Right = Anti-Clockwise. Outward Facing: Left = Anti, Right = Clockwise."
                        }
                    ],
                    formulas: [
                        {
                            title: "Rotational Mapping",
                            formula: "For N persons in a circle facing center, person directly opposite sits exactly N/2 positions away."
                        }
                    ],
                    proTips: [
                        "\u26a1 Absolute Anchor Rule: Start drawing exclusively with definitive 'Left/Right' statements. NEVER start with 'A is between B and C' (too many cases).",
                        "\u26a1 Edge Tracking: Keep track of absolute line limits if ends are defined."
                    ]
                }
            ]
        },
        {
            id: "nqt-blood",
            title: "03. Blood Relations",
            description: "Generational trees, coded boolean markers, pointing paradoxes natively.",
            subTopics: [
                {
                    id: "nqt-br-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Symbology",
                            description: "Male (+), Female (-), Sibling (- / horizontal line), Marriage (=), Generation drop (Vertical line down)."
                        },
                        {
                            title: "Core Relationships",
                            description: "Paternal = Father's side. Maternal = Mother's side. Nephew/Niece = Sibling's child."
                        }
                    ],
                    formulas: [
                        {
                            title: "Generational Levels",
                            formula: "Gen 0 (Self, Siblings, Cousins, Spouse). Gen +1 (Parents, Uncles/Aunts). Gen -1 (Children, Nephews/Nieces)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Backward Decoding: In 'A @ B $ C', start reading/drawing the tree backwards rigidly from C to exactly A.",
                        "\u26a1 The 'My/Only' Keyword: If facing a 'pointing to photograph' query, center exactly on the word 'my/mine' and replace it with speaker's definitive identity."
                    ]
                }
            ]
        },
        {
            id: "nqt-direction",
            title: "04. Direction Sense & Shadows",
            description: "Compass grids, Pythagorean shortest-distance algorithms, solar projections.",
            subTopics: [
                {
                    id: "nqt-dir-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Compass Standard",
                            description: "North (Top), South (Bottom), East (Right), West (Left). NE, NW, SE, SW."
                        },
                        {
                            title: "Turn Metrics",
                            description: "Right Turn = +90 Degrees Clockwise. Left Turn = -90 Degrees Anti-Clockwise."
                        }
                    ],
                    formulas: [
                        {
                            title: "Shortest Distance",
                            formula: "D = sqrt( (X2-X1)^2 + (Y2-Y1)^2 ). Standard Pythagorean Hypotenuse."
                        },
                        {
                            title: "Shadow Constraints",
                            formula: "Sunrise (Sun in East): Shadows fall strictly WEST. Sunset (Sun in West): Shadows fall strictly EAST. 12 Noon: NO shadow explicitly."
                        }
                    ],
                    proTips: [
                        "\u26a1 Morning Face Setup: If walking towards North in the morning, shadow falls tightly to your Left side.",
                        "\u26a1 U-Turn Equivalent: Two consecutive Right turns or Two consecutive Left turns = Facing opposite initial direction."
                    ]
                }
            ]
        },
        {
            id: "nqt-syllogism",
            title: "05. Syllogism (Logical Deductions)",
            description: "Venn intersections, definite false versus possible true boolean logic.",
            subTopics: [
                {
                    id: "nqt-syllo-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Absolute Propositions",
                            description: "Universal Positive: ALL A are B (A inside B). Universal Negative: NO A is B (A detached from B)."
                        },
                        {
                            title: "Partial Propositions",
                            description: "Particular Positive: SOME A are B (A and B overlap). Particular Negative: SOME A are NOT B."
                        }
                    ],
                    formulas: [
                        {
                            title: "Only a Few Logic",
                            formula: "'Only a few A are B' strictly implies: BOTH 'Some A are B' AND 'Some A are NOT B' are definitively true."
                        }
                    ],
                    proTips: [
                        "\u26a1 Definite Conclusion Rule: Must rigidly be entirely TRUE in every single completely possible geometrical Venn diagram natively drawn.",
                        "\u26a1 Possibility Rule: True if logically valid in even ONE extremely warped (but technically legal) Venn diagram representation."
                    ]
                }
            ]
        },
        {
            id: "nqt-coding",
            title: "06. Coding & Decoding",
            description: "Matrix transpositions, direct substitutions, word logic shifts.",
            subTopics: [
                {
                    id: "nqt-cd-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Shift Coding",
                            description: "BAT -> D CV (+2 to each letter explicitly)."
                        },
                        {
                            title: "Deciphering Sentences",
                            description: "'pit na mo' = 'come here', 'na sa' = 'go here' -> 'na' definitively means 'here'."
                        }
                    ],
                    formulas: [
                        {
                            title: "Vowel vs Consonant Separation",
                            formula: "Vowels (A, E, I, O, U) undergo completely separate operations (e.g., Vowels +1, Consonants -1)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Diagonal Shifts: In a 5-letter word, Letter 1 shifts and sits exactly at Position 5, L2 at P4, L3 at P3, etc.",
                        "\u26a1 Arithmetic Codes: CAT = 3+1+20 = 24. Always quickly check sum, product, or reversed alphabetical sum heavily natively."
                    ]
                }
            ]
        },
        {
            id: "nqt-data-suff",
            title: "07. Data Sufficiency",
            description: "Evaluating minimum necessary datasets for absolute definitive outputs.",
            subTopics: [
                {
                    id: "nqt-dsuff-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "The Golden Workflow",
                            description: "Test Stmt 1 alone severely. Then strictly test Stmt 2 alone exclusively. Only if BOTH fail individually, brutally combine them."
                        }
                    ],
                    formulas: [
                        {
                            title: "Uniqueness Requirement",
                            formula: "If the question asks 'What is X?', the data is only sufficient if X yields a single, definitive absolute value. Not a range (unless asked)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Trap Identification: Never computationally assume explicitly geometric figures are perfectly drawn precisely to absolute scale (unless entirely specified).",
                        "\u26a1 Do exactly NOT explicitly solve heavily. Just rigorously determine if it CAN strictly be legally solved."
                    ]
                }
            ]
        }
    ]
},
  "tcs-nqt-2026-verbal-cheat-sheet": {
    id: "tcs-nqt-2026-verbal-cheat-sheet",
    title: "TCS NQT 2026 Verbal Ability Cheat Sheet",
    description: "Comprehensive, highly accurate technical summary detailing grammar rules, vocabulary, tenses, and exact communication logic for TCS NQT 2026.",
    icon: "BookOpen",
    phase: 4,
    phaseTitle: "Master Syllabus",
    topics: [
        {
            id: "nqt-reading",
            title: "01. Reading Comprehension",
            description: "Macro-thematic extraction, eliminating extreme inferences, structural scanning.",
            subTopics: [
                {
                    id: "nqt-rc-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Thematic Scanning",
                            description: "Read Paragraph 1 (Main Idea), Paragraph Final (Conclusion), and the first/last lines of inner paragraphs."
                        },
                        {
                            title: "Question Categories",
                            description: "Global (Main Idea, Title), Local (Specific Fact, Line Ref), Inferential (Implied but unstated by the author)."
                        }
                    ],
                    formulas: [
                        {
                            title: "Tone Vocabulary Matrix",
                            formula: "Positive (Laudatory, Optimistic). Negative (Acerbic, Cynical). Neutral (Objective, Analytical)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Ban Extreme Exclusives: Options containing NEVER, ALWAYS, ONLY, ALL, MUST are statistically 95% false.",
                        "\u26a1 Out of Scope Elimination: If the topic wasn't mentioned anywhere in the passage, permanently discard it."
                    ]
                }
            ]
        },
        {
            id: "nqt-jumbles",
            title: "02. Paragraph Jumbles (Arrangement)",
            description: "Connecting explicit chronological strings, pronoun bindings, and causal loops.",
            subTopics: [
                {
                    id: "nqt-pj-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Opening Sentence (Anchor)",
                            description: "Standalone. Introduces a noun, theory, or timeframe. Must be devoid of hanging pronouns (He, This, Consequently)."
                        },
                        {
                            title: "Mandatory Pairs",
                            description: "A deep physical link between two highly specific sentences that absolutely MUST go together."
                        }
                    ],
                    formulas: [
                        {
                            title: "Transition Linkages",
                            formula: "However/But (Contradicts previous). Thus/Therefore (Concludes previous directly). Secondly/Also (Continues logic)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Acronym/Noun Rule: 'World Health Organization' uniquely comes before 'WHO' structurally.",
                        "\u26a1 Chronology Sweep: Past timelines proceed exactly forward linearly to Present and Future."
                    ]
                }
            ]
        },
        {
            id: "nqt-grammar",
            title: "03. Error Spotting & Grammar",
            description: "Subject-verb agreement conventions, prepositional rules, and conditional forms.",
            subTopics: [
                {
                    id: "nqt-gram-core",
                    title: "Formulas & Analytical Tricks",
                    concepts: [
                        {
                            title: "Subject-Verb Agreement",
                            description: "Neither/Nor and Either/Or: The verb agrees strictly with the closest adjacent noun. Example: Neither books nor PEN IS."
                        },
                        {
                            title: "Singular Collectives",
                            description: "Words like Furniture, Information, Scenery, Equipment, Luggage, Poetry, and Advice are always singular uncountable nouns."
                        }
                    ],
                    formulas: [
                        {
                            title: "Conditional Types",
                            formula: "Zero (If present, present). First (If present, will + V1). Second (If past, would + V1). Third (If had + V3, would have + V3)."
                        }
                    ],
                    proTips: [
                        "\u26a1 As well as / Along with Rule: The verb agrees exclusively with the FIRST subject, ignoring any following nouns.",
                        "\u26a1 Since vs For Distinction: 'Since' marks a specific starting point in time (Since 2010). 'For' tracks a total duration (For 3 years)."
                    ]
                }
            ]
        },
        {
            id: "nqt-tenses",
            title: "04. Tense Table Formulas",
            description: "Mathematical blueprints of verb tenses, time shifts, and chronological structural maps.",
            subTopics: [
                {
                    id: "nqt-tense-core",
                    title: "Tense Structures & Logic",
                    concepts: [
                        {
                            title: "Present Tense Logic",
                            description: "Simple (Universal truths/habits), Continuous (Happening now), Perfect (Just completed), Perfect Cont. (Started past, continuing now)."
                        },
                        {
                            title: "Past Tense Logic",
                            description: "Simple (Completed action), Continuous (Was happening), Perfect (Action BEFORE another past action)."
                        }
                    ],
                    formulas: [
                        {
                            title: "Present Tense Formulas",
                            formula: "Simple: S + V1/V5 + O. Cont: S + am/is/are + V(ing) + O. Perfect: S + has/have + V3 + O. Perfect Cont: S + has/have + been + V(ing) + Since/For."
                        },
                        {
                            title: "Past Tense Formulas",
                            formula: "Simple: S + V2 + O. Cont: S + was/were + V(ing) + O. Perfect: S + had + V3 + O. Perfect Cont: S + had + been + V(ing)."
                        },
                        {
                            title: "Future Tense Formulas",
                            formula: "Simple: S + will/shall + V1 + O. Cont: S + will be + V(ing). Perfect: S + will have + V3. Perfect Cont: S + will have been + V(ing)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Keyword Detection: 'Yesterday/Ago' strictly triggers Simple Past (V2). 'Recently/Lately' triggers Present Perfect (has/have + V3).",
                        "\u26a1 Before/After Rule for Past Perfect: 1st Action = Past Perfect (had V3). 2nd Action = Simple Past (V2)."
                    ]
                }
            ]
        },
        {
            id: "nqt-voice-speech",
            title: "05. Active/Passive Voice & Direct/Indirect Speech",
            description: "Syntactic transformations, subject-object inversions, and reporting verb state changes.",
            subTopics: [
                {
                    id: "nqt-voice-core",
                    title: "Voice Rules & Speech Formulas",
                    concepts: [
                        {
                            title: "Voice Principle",
                            description: "Active (Subject performs action). Passive (Subject receives action). The core tense NEVER changes in Voice transformation."
                        },
                        {
                            title: "Speech Principle",
                            description: "If Reporting Verb is in Past Tense (said), the reported speech's tense MUST shift backward in time."
                        }
                    ],
                    formulas: [
                        {
                            title: "Active to Passive Conversion",
                            formula: "Simple: Obj + is/are/was/were + V3 + by + Subj. Continuous: Add 'being + V3'. Perfect: Add 'been + V3'. Modals: Modal + be + V3."
                        },
                        {
                            title: "Direct to Indirect Speech (Tense Shift)",
                            formula: "Present Simple -> Past Simple. Present Cont -> Past Cont. Present Perf -> Past Perf. Past Simple -> Past Perfect. Past Perf -> No Change."
                        },
                        {
                            title: "Speech (Modal Shift)",
                            formula: "Will -> Would, Can -> Could, May -> Might, Shall -> Should."
                        }
                    ],
                    proTips: [
                        "\u26a1 Voice Tip: Perfect Continuous (Present/Past/Future) and Future Continuous CANNOT be converted into Passive Voice natively.",
                        "\u26a1 Speech Time Markers: 'Today' -> 'that day'. 'Tomorrow' -> 'the next day'. 'Yesterday' -> 'the previous day'. 'Here' -> 'there'."
                    ]
                }
            ]
        },
        {
            id: "nqt-vocab",
            title: "06. Vocab, Synonyms & Antonyms",
            description: "Latin-Greek root fractures, exact phrasal mapping, pure contextual deductions.",
            subTopics: [
                {
                    id: "nqt-voc-core",
                    title: "Word Formats & Analytical Tricks",
                    concepts: [
                        {
                            title: "Root Morphology",
                            description: "Mal (bad): Malice, Malign. Bene (good): Benevolent. Chron (time): Chronic. Loc/Loq (speak): Loquacious."
                        },
                        {
                            title: "Confusing Pairs",
                            description: "Affect (Verb: to influence) vs Effect (Noun: the result). Principal (Head master/money) vs Principle (Rule/Truth)."
                        }
                    ],
                    formulas: [
                        {
                            title: "Contextual Guessing",
                            formula: "Positive sentence context strictly necessitates a positive synonym. Negative context necessitates a negative one. Pay attention to transition words like 'Although' or 'But'."
                        },
                        {
                            title: "Top High-Frequency Synonyms",
                            formula: "Abundant (Copious, Ample), Mitigate (Alleviate, Assuage), Obscure (Ambiguous, Vague), Diligent (Assiduous, Industrious), Ephemeral (Transient, Fleeting)."
                        },
                        {
                            title: "Top High-Frequency Antonyms",
                            formula: "Benevolent (Malevolent), Ostracize (Embrace, Welcome), Frugal (Extravagant, Prodigal), Cacophony (Euphony, Harmony), Lethargic (Energetic, Vivacious)."
                        }
                    ],
                    proTips: [
                        "\u26a1 Elimination Strategy: If two identically synonymous options exist in a single-choice question, both are typically conceptually wrong.",
                        "\u26a1 Degree of Intensity: 'Angry' vs 'Furious'. Choose the synonym that matches the exact emotional intensity of the prompt word."
                    ]
                }
            ]
        }
    ]
}
};
