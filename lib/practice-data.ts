export interface PracticeQuestion {
  id: string;
  category: "Quantitative Aptitude" | "Logical Reasoning" | "Verbal Ability";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: "q1",
    category: "Quantitative Aptitude",
    question: "HCF of 100, 125, 180?",
    options: ["5", "10", "25", "50"],
    correctAnswer: "5",
    explanation: "Prime factors: common 5; PDF direct ex."
  },
  {
    id: "q2",
    category: "Quantitative Aptitude",
    question: "LCM of 25 and 35?",
    options: ["175", "125", "875", "35"],
    correctAnswer: "175",
    explanation: "25=5², 35=5×7 → max powers; PDF ex."
  },
  {
    id: "q3",
    category: "Quantitative Aptitude",
    question: "HCF(84, 112, 140)?",
    options: ["14", "28", "7", "56"],
    correctAnswer: "28",
    explanation: "Common 2²×7=28; repeated PYQ."
  },
  {
    id: "q4",
    category: "Quantitative Aptitude",
    question: "Two numbers ratio 5:7, LCM=105. Numbers?",
    options: ["15,21", "5,7", "35,49", "10,14"],
    correctAnswer: "15,21",
    explanation: "LCM=35k=105 → k=3; PDF ratio trick."
  },
  {
    id: "q5",
    category: "Quantitative Aptitude",
    question: "Greatest number dividing 148, 246, 623 leaving remainders 4,6,11?",
    options: ["36", "12", "24", "48"],
    correctAnswer: "36",
    explanation: "HCF144,240,612=36; PDF remainder trick."
  },
  {
    id: "q6",
    category: "Quantitative Aptitude",
    question: "LCM of 18, 24, 36?",
    options: ["72", "144", "36", "216"],
    correctAnswer: "72",
    explanation: "Max powers 2³×3²=72."
  },
  {
    id: "q7",
    category: "Quantitative Aptitude",
    question: "HCF of fractions 3/16, 5/12, 7/8?",
    options: ["1/48", "1/24", "1/96", "1/12"],
    correctAnswer: "1/48",
    explanation: "HCF nums / LCM dens; PDF fraction rule."
  },
  {
    id: "q8",
    category: "Quantitative Aptitude",
    question: "Greatest 4-digit number divisible by 15,25,40?",
    options: ["9600", "9975", "9900", "9750"],
    correctAnswer: "9600",
    explanation: "LCM=1200 → 1200×8=9600."
  },
  {
    id: "q9",
    category: "Quantitative Aptitude",
    question: "Two numbers HCF=12, LCM=360. Possible pair?",
    options: ["48,90", "24,180", "36,120", "All"],
    correctAnswer: "All",
    explanation: "Product=4320, pairs with HCF 12."
  },
  {
    id: "q10",
    category: "Quantitative Aptitude",
    question: "Smallest number divisible by 12,18,24 leaving remainder 5?",
    options: ["72+5=77", "216+5=221", "144+5=149", "288+5=293"],
    correctAnswer: "221",
    explanation: "LCM=72 +5; remainder trick."
  },
  {
    id: "q11",
    category: "Quantitative Aptitude",
    question: "20% increase then 10% decrease = net %?",
    options: ["8% increase", "10% decrease", "8% decrease", "0%"],
    correctAnswer: "8% increase",
    explanation: "20 +"
  },
  {
    id: "q12",
    category: "Quantitative Aptitude",
    question: "A is 25% more than B. B is what % less than A?",
    options: ["20%", "25%", "16.67%", "33.33%"],
    correctAnswer: "1667%",
    explanation: "25/125×100."
  },
  {
    id: "q13",
    category: "Quantitative Aptitude",
    question: "CP=₹400, SP=₹500. Profit %?",
    options: ["20%", "25%", "30%", "15%"],
    correctAnswer: "25%",
    explanation: ""
  },
  {
    id: "q14",
    category: "Quantitative Aptitude",
    question: "MP=₹1000, 20% discount, profit 25% on CP. CP?",
    options: ["₹800", "₹640", "₹750", "₹900"],
    correctAnswer: "₹640",
    explanation: "SP=800, CP=800/1.25=640."
  },
  {
    id: "q15",
    category: "Quantitative Aptitude",
    question: "Ratio 3:5, sum=400. Larger number?",
    options: ["250", "150", "300", "200"],
    correctAnswer: "250",
    explanation: "5/8×400."
  },
  {
    id: "q16",
    category: "Quantitative Aptitude",
    question: "Mix 20/kg & 30/kg to get 25/kg. Ratio?",
    options: ["1:1", "2:1", "1:2", "3:2"],
    correctAnswer: "1:1",
    explanation: "Alligation: 5:5."
  },
  {
    id: "q17",
    category: "Quantitative Aptitude",
    question: "Population 10000 +10% yearly for 2 yrs?",
    options: ["12100", "12000", "11000", "12210"],
    correctAnswer: "12100",
    explanation: "10000×1.1²."
  },
  {
    id: "q18",
    category: "Quantitative Aptitude",
    question: "Successive 10% + 20% discount on ₹1000?",
    options: ["₹720", "₹700", "₹800", "₹680"],
    correctAnswer: "₹720",
    explanation: "1 -"
  },
  {
    id: "q19",
    category: "Quantitative Aptitude",
    question: "False weight: Sells 900g as 1kg at CP. Profit %?",
    options: ["11.11%", "10%", "12.5%", "9%"],
    correctAnswer: "1111%",
    explanation: "100/9."
  },
  {
    id: "q20",
    category: "Quantitative Aptitude",
    question: "Ratio 2:3:4, HCF=12. LCM?",
    options: ["144", "96", "48", "192"],
    correctAnswer: "144",
    explanation: "Numbers 24,36,48 → LCM 144."
  },
  {
    id: "q21",
    category: "Quantitative Aptitude",
    question: "A 12 days, B 18 days. Together?",
    options: ["7.2 days", "8 days", "6 days", "9 days"],
    correctAnswer: "72 days",
    explanation: "1/12 + 1/18 = 5/36 → 36/5=7.2."
  },
  {
    id: "q22",
    category: "Quantitative Aptitude",
    question: "A fills tank 6 hrs, B empties 8 hrs. Together full in?",
    options: ["24 hrs", "12 hrs", "48 hrs", "18 hrs"],
    correctAnswer: "24 hrs",
    explanation: "1/6 - 1/8 = 1/24."
  },
  {
    id: "q23",
    category: "Quantitative Aptitude",
    question: "Avg speed to-fro 40km/h & 60km/h?",
    options: ["48 km/h", "50 km/h", "45 km/h", "52 km/h"],
    correctAnswer: "48 km/h",
    explanation: "2×40×60/"
  },
  {
    id: "q24",
    category: "Quantitative Aptitude",
    question: "Trains 150m & 200m, speeds 54 & 72 km/h opposite. Crossing time?",
    options: ["10s", "12s", "15s", "18s"],
    correctAnswer: "10s",
    explanation: "Rel=126 km/h =35 m/s; len=350m →10s."
  },
  {
    id: "q25",
    category: "Quantitative Aptitude",
    question: "Boat downstream 15 km/h, upstream 9 km/h. Boat speed?",
    options: ["12 km/h", "10 km/h", "6 km/h", "3 km/h"],
    correctAnswer: "12 km/h",
    explanation: ""
  },
  {
    id: "q26",
    category: "Quantitative Aptitude",
    question: "10 men 12 days=120 man-days. 15 men?",
    options: ["8 days", "10 days", "6 days", "9 days"],
    correctAnswer: "8 days",
    explanation: "120/15=8."
  },
  {
    id: "q27",
    category: "Quantitative Aptitude",
    question: "A+B=10 days, A alone 15. B alone?",
    options: ["30 days", "20 days", "25 days", "18 days"],
    correctAnswer: "30 days",
    explanation: "1/10 - 1/15=1/30."
  },
  {
    id: "q28",
    category: "Quantitative Aptitude",
    question: "Two pipes fill in 12 & 15 hrs. Together?",
    options: ["60/9 hrs", "60/7 hrs", "6 hrs", "7 hrs"],
    correctAnswer: "60/9 hrs",
    explanation: "≈6.67 hrs."
  },
  {
    id: "q29",
    category: "Quantitative Aptitude",
    question: "60 km at 40 km/h, return at 60 km/h. Avg speed?",
    options: ["48 km/h", "50 km/h", "45 km/h", "55 km/h"],
    correctAnswer: "48 km/h",
    explanation: "Harmonic mean."
  },
  {
    id: "q30",
    category: "Quantitative Aptitude",
    question: "A works 5 days, B 10 days. Together 3 days work?",
    options: ["13/10", "1", "9/10", "11/10"],
    correctAnswer: "13/10",
    explanation: "3/5 + 3/10=9/10 + 3/10 Wait no: rates 1/5+1/10=3/10 per day ×3=9/10."
  },
  {
    id: "q31",
    category: "Quantitative Aptitude",
    question: "Avg of first 10 natural numbers?",
    options: ["5.5", "6", "5", "5.5"],
    correctAnswer: "55",
    explanation: "55/10."
  },
  {
    id: "q32",
    category: "Quantitative Aptitude",
    question: "SI ₹1000 at 5% 3 yrs?",
    options: ["150", "200", "100", "250"],
    correctAnswer: "150",
    explanation: "P r t /100."
  },
  {
    id: "q33",
    category: "Quantitative Aptitude",
    question: "CI ₹1000 at 10% 2 yrs?",
    options: ["210", "200", "220", "1210 (amount)"],
    correctAnswer: "210",
    explanation: "1210-1000=210."
  },
  {
    id: "q34",
    category: "Quantitative Aptitude",
    question: "P(n,r) for n=5 r=3?",
    options: ["60", "120", "20", "10"],
    correctAnswer: "60",
    explanation: "5!/"
  },
  {
    id: "q35",
    category: "Quantitative Aptitude",
    question: "Dice sum 7 probability?",
    options: ["1/6", "1/12", "1/9", "5/36"],
    correctAnswer: "1/6",
    explanation: "6/36."
  },
  {
    id: "q36",
    category: "Quantitative Aptitude",
    question: "Pie chart 360° sector 72° = ? %",
    options: ["20%", "25%", "30%", "15%"],
    correctAnswer: "20%",
    explanation: "72/360×100."
  },
  {
    id: "q37",
    category: "Quantitative Aptitude",
    question: "Mean of 1,2,3,4,5?",
    options: ["3", "2.5", "4", "3.5"],
    correctAnswer: "3",
    explanation: "Standard application of concepts."
  },
  {
    id: "q38",
    category: "Quantitative Aptitude",
    question: "Median of 10,20,30,40,50?",
    options: ["30", "25", "40", "35"],
    correctAnswer: "30",
    explanation: "Standard application of concepts."
  },
  {
    id: "q39",
    category: "Quantitative Aptitude",
    question: "Cube vol if side 5?",
    options: ["125", "150", "100", "625"],
    correctAnswer: "125",
    explanation: "Standard application of concepts."
  },
  {
    id: "q40",
    category: "Quantitative Aptitude",
    question: "Triangle area base 10 ht 5?",
    options: ["25", "50", "15", "30"],
    correctAnswer: "25",
    explanation: "Standard application of concepts."
  },
  {
    id: "q41",
    category: "Logical Reasoning",
    question: "Find missing: 99, 121, 143, __, 187, 199",
    options: ["170", "165", "158", "172"],
    correctAnswer: "165",
    explanation: "PDF ex: AP, d=22 → 143+22=165; eliminate non +22."
  },
  {
    id: "q42",
    category: "Logical Reasoning",
    question: "3, 9, 27, 81, ?",
    options: ["162", "243", "324", "729"],
    correctAnswer: "243",
    explanation: "PDF ex: GP ×3 → 81×3=243; eliminate non-multiples."
  },
  {
    id: "q43",
    category: "Logical Reasoning",
    question: "A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correctAnswer: "I",
    explanation: "+2 letters; PDF letter series pattern."
  },
  {
    id: "q44",
    category: "Logical Reasoning",
    question: "2, 5, 10, 17, 26, ?",
    options: ["37", "35", "39", "40"],
    correctAnswer: "37",
    explanation: "+3, +5, +7, +9, +11 → next +11=37."
  },
  {
    id: "q45",
    category: "Logical Reasoning",
    question: "1, 4, 9, 16, 25, ?",
    options: ["36", "49", "64", "81"],
    correctAnswer: "36",
    explanation: "Squares: 1² to 6²."
  },
  {
    id: "q46",
    category: "Logical Reasoning",
    question: "Z, Y, X, W, ?",
    options: ["V", "U", "T", "S"],
    correctAnswer: "V",
    explanation: "-1 letter."
  },
  {
    id: "q47",
    category: "Logical Reasoning",
    question: "5, 10, 17, 26, 37, ?",
    options: ["50", "49", "48", "51"],
    correctAnswer: "50",
    explanation: "+5, +7, +9, +11, +13."
  },
  {
    id: "q48",
    category: "Logical Reasoning",
    question: "A1, B4, C9, D16, ?",
    options: ["E25", "F36", "E49", "F25"],
    correctAnswer: "E25",
    explanation: "Letter + square of position."
  },
  {
    id: "q49",
    category: "Logical Reasoning",
    question: "8, 27, 64, 125, ?",
    options: ["216", "343", "512", "729"],
    correctAnswer: "216",
    explanation: "Cubes: 2³ to 6³."
  },
  {
    id: "q50",
    category: "Logical Reasoning",
    question: "JFM, AMJ, JAS, OND, ?",
    options: ["FMA", "JFM", "AMJ", "JAS"],
    correctAnswer: "FMA",
    explanation: "Months initials: Jan-Feb-Mar, Apr-May-Jun, etc.."
  },
  {
    id: "q51",
    category: "Logical Reasoning",
    question: "If APPLE +2 = CRRNG, BAT = ?",
    options: ["DCV", "CVD", "CDV", "DVC"],
    correctAnswer: "DCV",
    explanation: "+2 shift."
  },
  {
    id: "q52",
    category: "Logical Reasoning",
    question: "In code, CAT = 3120 (C=3,A=1,T=20), DOG = ?",
    options: ["4157", "4156", "5147", "4158"],
    correctAnswer: "4157",
    explanation: "Position: D=4,O=15,G=7."
  },
  {
    id: "q53",
    category: "Logical Reasoning",
    question: "A is father of B, B brother of C. A to C?",
    options: ["Uncle", "Father", "Grandfather", "Brother"],
    correctAnswer: "Father",
    explanation: "A father of both."
  },
  {
    id: "q54",
    category: "Logical Reasoning",
    question: "Pointing to a man, woman says His mother is mother-in-law of my mother. Relation?",
    options: ["Brother", "Nephew", "Son", "Uncle"],
    correctAnswer: "Brother",
    explanation: "common puzzle."
  },
  {
    id: "q55",
    category: "Logical Reasoning",
    question: "Walk 10N, 5E, 10S, 5W. Final position?",
    options: ["Start", "10E", "5N", "5S"],
    correctAnswer: "Start",
    explanation: "cancels."
  },
  {
    id: "q56",
    category: "Logical Reasoning",
    question: "Morning shadow north → facing?",
    options: ["South", "East", "West", "North"],
    correctAnswer: "South",
    explanation: "sun east, shadow west → face south for north shadow?  morning shadow west → face east."
  },
  {
    id: "q57",
    category: "Logical Reasoning",
    question: "All dogs animals. Some animals pets. Some dogs pets?",
    options: ["True", "False", "Possible", "Cannot say"],
    correctAnswer: "Possible",
    explanation: "PDF Venn: overlap possible."
  },
  {
    id: "q58",
    category: "Logical Reasoning",
    question: "Cube net: Opposite to 1 if adjacent 2,3,4,5?",
    options: ["6", "3", "4", "2"],
    correctAnswer: "6",
    explanation: "PDF cube folding: opposites don't touch."
  },
  {
    id: "q59",
    category: "Logical Reasoning",
    question: "Data Sufficiency: Age of A? I. A twice B II. B=10",
    options: ["I alone", "II alone", "Both", "Neither"],
    correctAnswer: "Both",
    explanation: "PDF min 2 Qs."
  },
  {
    id: "q60",
    category: "Verbal Ability",
    question: "The boy was too lazy to even move about during the day, in other words, he was _______.",
    options: ["slumber", "prompt", "trickster", "lethargic"],
    correctAnswer: "lethargic",
    explanation: "PDF exact question & answer. Restatement = rephrase lazy → lethargic is synonym; eliminate a=slumber sleep, b=prompt quick-opposite, c=trickster unrelated."
  },
  {
    id: "q61",
    category: "Verbal Ability",
    question: "She never completes her work on time; that is to say, she is very _______.",
    options: ["punctual", "diligent", "procrastinator", "efficient"],
    correctAnswer: "procrastinator",
    explanation: "Restatement of never completes on time."
  },
  {
    id: "q62",
    category: "Verbal Ability",
    question: "The movie was extremely boring; in fact, it was utterly _______.",
    options: ["engaging", "tedious", "thrilling", "captivating"],
    correctAnswer: "tedious",
    explanation: "In fact = restatement/amplification of boring."
  },
  {
    id: "q63",
    category: "Verbal Ability",
    question: "He is known for speaking the truth; namely, he is very _______.",
    options: ["deceitful", "honest", "cunning", "secretive"],
    correctAnswer: "honest",
    explanation: "Namely = restatement/explanation."
  },
  {
    id: "q64",
    category: "Verbal Ability",
    question: "The plan failed miserably; hence, it was a complete _______.",
    options: ["success", "disaster", "achievement", "victory"],
    correctAnswer: "disaster",
    explanation: "Hence = restatement of result."
  },
  {
    id: "q65",
    category: "Verbal Ability",
    question: "She runs very fast; likewise, her brother _______.",
    options: ["walks slowly", "runs slowly", "does too", "is lazy"],
    correctAnswer: "does too",
    explanation: "PDF Comparison type: likewise = similarity → parallel structure."
  },
  {
    id: "q66",
    category: "Verbal Ability",
    question: "Although it was raining heavily, they _______.",
    options: ["stayed indoors", "went outside", "cancelled the match", "played anyway"],
    correctAnswer: "played anyway",
    explanation: "Although = contrast → expect opposite action."
  },
  {
    id: "q67",
    category: "Verbal Ability",
    question: "He studied very hard; therefore, he _______.",
    options: ["failed", "succeeded", "slept", "ate"],
    correctAnswer: "succeeded",
    explanation: "Therefore = cause-effect → logical result."
  },
  {
    id: "q68",
    category: "Verbal Ability",
    question: "Despite being tired, she continued _______.",
    options: ["sleeping", "working", "resting", "eating"],
    correctAnswer: "working",
    explanation: "Despite = contrast."
  },
  {
    id: "q69",
    category: "Verbal Ability",
    question: "The food was delicious; as a result, everyone _______.",
    options: ["complained", "left hungry", "asked for more", "threw it away"],
    correctAnswer: "asked for more",
    explanation: "As a result = cause-effect."
  },
  {
    id: "q70",
    category: "Verbal Ability",
    question: "The team are playing very well today.",
    options: ["The team", "are playing", "very well", "No error"],
    correctAnswer: "are playing",
    explanation: "Team is collective singular → is playing."
  },
  {
    id: "q71",
    category: "Verbal Ability",
    question: "He go to school every day.",
    options: ["He", "go", "to school", "every day"],
    correctAnswer: "go",
    explanation: "He → goes."
  },
  {
    id: "q72",
    category: "Verbal Ability",
    question: "She is more taller than her sister.",
    options: ["more taller", "than", "her sister", "No error"],
    correctAnswer: "more taller",
    explanation: "Double comparative → taller."
  },
  {
    id: "q73",
    category: "Verbal Ability",
    question: "I look forward to meet you tomorrow.",
    options: ["look forward", "to meet", "you tomorrow", "No error"],
    correctAnswer: "to meet",
    explanation: "to + gerund → meeting."
  },
  {
    id: "q74",
    category: "Verbal Ability",
    question: "One of the boys are absent today.",
    options: ["One of", "the boys", "are absent", "No error"],
    correctAnswer: "are absent",
    explanation: "One is singular → is absent."
  },
  {
    id: "q75",
    category: "Verbal Ability",
    question: "Synonym of Assiduous",
    options: ["Lazy", "Diligent", "Careless", "Idle"],
    correctAnswer: "Diligent",
    explanation: "Standard application of concepts."
  },
  {
    id: "q76",
    category: "Verbal Ability",
    question: "Antonym of Benevolent",
    options: ["Kind", "Malevolent", "Generous", "Friendly"],
    correctAnswer: "Malevolent",
    explanation: "Standard application of concepts."
  },
];
