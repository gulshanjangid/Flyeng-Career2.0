import { CompanyData } from './types';

export const serviceCompanies: CompanyData[] = [
    {
        id: 'tcs',
        name: 'TCS',
        type: 'Service',
        status: 'Active',
        logo: 'TCS',
        rating: 3.8,
        aiVerdict: 'Focuses on mass hiring with high academic filters. Volume and process adherence over pure engineering optimization. Great job security.',
        overview: {
            about: 'Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 150 locations across 46 countries.',
            headquarters: 'Mumbai, Maharashtra',
            size: '600,000+ Employees',
            founded: '1968',
            website: 'tcs.com'
        },
        roles: [
            {
                title: 'Ninja (Assistant System Engineer)',
                ctc: '₹ 3.36L',
                base: '₹ 3,36,000',
                variable: 'Minimal',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 22k - 24k'
            },
            {
                title: 'Digital (System Engineer)',
                ctc: '₹ 7.0L',
                base: '₹ 7,00,000',
                variable: 'Performance Bonus',
                rsus: 'N/A',
                deductions: 'Tax (10%), PF',
                inHand: '₹ 45k - 50k'
            },
            {
                title: 'Prime / Innovator',
                ctc: '₹ 9.0L - 11.5L',
                base: '₹ 9,00,000+',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax (15%+), PF',
                inHand: '₹ 65k - 80k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'HTML/JS (Legacy Projects)'],
            backend: ['Java (Spring Boot)', '.NET', 'Node.js', 'Mainframe'],
            infra: ['AWS', 'Azure', 'On-Premise environments for banks'],
            data: ['OracleDB', 'SQL Server', 'Hadoop', 'Informatica']
        },
        process: [
            {
                step: 'TCS NQT (National Qualifier Test)',
                description: 'Massive online test covering Aptitude, Verbal, Logical, and basic coding (2 questions). Clearing this dictates your tier (Ninja vs Digital).',
                duration: '180 mins',
                difficulty: 'Moderate',
                topics: ['Aptitude', 'Basic C/Java/Python', 'Logic']
            },
            {
                step: 'Technical & HR Interview',
                description: 'A single combined round or split into two. Focuses heavily on your final year project, basic OOPS, SQL, and core CS (OS, DBMS).',
                duration: '45 mins',
                difficulty: 'Easy',
                topics: ['OOPS', 'SQL queries', 'Resume Projects']
            }
        ],
        syllabus: [
            {
                subject: 'Programmatic Logic',
                topics: ['Data Types', 'Input-Output (based on C)', 'Functions and Scope', 'Variables and Registers', 'Command Line Programming', 'Pointers', 'Inbuilt Libraries (based on C)', 'Call by value/ reference', 'Iteration', 'Recursion']
            },
            {
                subject: 'Reasoning Ability',
                topics: ['Meaningful Word Creation', 'Number Series (Missing Number Single, Missing Number Analogy)', 'Data Sufficiency (Rank Based Logic, Ages)', 'Blood Relations', 'Coding-Decoding', 'Ages', 'Odd Man Out', 'Distance and Directions', 'Statement and Conclusion', 'Seating Arrangement (Easy & Complex)', 'Analogy', 'Mathematical Operational Arrangement', 'Symbols and Notations']
            },
            {
                subject: 'Numerical Ability',
                topics: ['Arrangements and Series', 'P&C', 'Number System, LCM & HCF', 'Percentages', 'Allegations and Mixtures', 'Probability', 'Ratios, Proportion, and Averages', 'Reasoning', 'Work and Time', 'Speed Time and Distance', 'Geometry', 'Divisibility', 'Profit and Loss', 'Clocks & Calendar', 'Series and Progressions', 'Equations', 'Area, Shapes & Perimeter', 'Numbers & Decimal Fractions']
            },
            {
                subject: 'Verbal Ability',
                topics: ['Synonyms', 'Antonyms', 'Prepositions', 'Sentence Completion', 'Active and Passive Voice', 'Spelling Test', 'Spotting Errors', 'Passage Completion', 'Substitution', 'Sentence Arrangement', 'Transformation', 'Idioms and Phrases', 'Sentence Improvement', 'Para Completion', 'Joining Sentences', 'Error Correction', 'Fill in the blanks']
            },
            {
                subject: 'Coding',
                topics: ['C++', 'Java', 'C', 'Perl', 'Python']
            }
        ],
        eligibility: {
            cgpa: 'Strict 60% or 6.0 CGPA throughout 10th, 12th, and Degree.',
            backlogs: 'Maximum 1 active backlog allowed at the time of interview. Must be cleared before joining.',
            gap: 'Maximum 2 years gap in education (must be justified).',
            notes: 'TCS is highly strict on background verification and eligibility criteria.'
        },
        culture: {
            wlb: 'Excellent in most support/maintenance projects. Can be demanding in active development/banking clients.',
            remote: 'Mandatory 5-days RTO enforced across all hubs.',
            vibe: 'Highly corporate, bureaucratic, hierarchical. Massive focus on compliance and "timesheets". Security and stability are the primary draws.'
        },
        reality: {
            good: ['Incredible job security (almost impossible to be fired)', 'Global onsite opportunities (H1B/L1 visas)', 'Brand prestige in India'],
            bad: ['Abysmal entry-level compensation that hasn\'t changed in 15 years', 'Slow promotions', 'You might be stuck in legacy tech (Mainframes, Support) depending on project allocation']
        }
    },
    {
        id: 'infosys',
        name: 'Infosys',
        type: 'Service',
        status: 'Active',
        logo: 'INF',
        rating: 3.7,
        aiVerdict: 'Vast training infrastructure (Mysore campus). Entry path dictates the salary curve permanently unless you clear internal exams.',
        overview: {
            about: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.',
            headquarters: 'Bangalore, Karnataka',
            size: '300,000+ Employees',
            founded: '1981',
            website: 'infosys.com'
        },
        roles: [
            {
                title: 'System Engineer (SE)',
                ctc: '₹ 3.6L',
                base: '₹ 3,60,000',
                variable: 'Variable Pay (often reduced)',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 24k - 26k'
            },
            {
                title: 'Specialist Programmer (SP) / DSE',
                ctc: '₹ 8.0L / ₹ 6.25L',
                base: '₹ 8,00,000 / ₹ 6,25,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax (10-15%), PF',
                inHand: '₹ 45k - 58k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'Vue'],
            backend: ['Java', 'C#', 'Python', 'SAP ABAP'],
            infra: ['Azure', 'AWS', 'GCP'],
            data: ['Oracle', 'SQL Server', 'Snowflake']
        },
        process: [
            {
                step: 'HackWithInfy / InfyTQ / Campus OA',
                description: 'Aptitude + Coding round. Doing exceptionally well in coding bumps you to SP/DSE interviews.',
                duration: '100 mins',
                difficulty: 'Moderate',
                topics: ['Aptitude', 'DSA (Arrays/Strings)']
            },
            {
                step: 'Technical Interview',
                description: 'Standard questions on OOPS, DBMS, and the tech stack mentioned in your resume. Usually 1 round for SE, 2 for SP.',
                duration: '45 mins',
                difficulty: 'Moderate',
                topics: ['OOPS', 'DBMS', 'CS Fundamentals']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '60% throughout 10th, 12th, and UG.',
            backlogs: 'Zero active backlogs allowed.',
            gap: 'Up to 2 years allowed.',
            notes: 'Training at Mysore is rigorous and acts as a hidden filter; failing training leads to termination.'
        },
        culture: {
            wlb: 'Generally good, entirely project-dependent. "Bench" time can be stressful as you must hunt for projects.',
            remote: 'Hybrid/In-office enforced depending on client requirements.',
            vibe: 'Heavy emphasis on training and certifications. Very large campus culture. Process-heavy and bureaucratic.'
        },
        reality: {
            good: ['Mysore campus training is world-class for freshers', 'Good brand name on resume for future jumps', 'High job security'],
            bad: ['Starting salaries are very low', 'Micro-management can be severe in some accounts', 'Salary hikes are traditionally low (single digits)']
        }
    },
    {
        id: 'accenture',
        name: 'Accenture',
        type: 'Service',
        status: 'Active',
        logo: 'ACC',
        rating: 3.9,
        aiVerdict: 'Consulting-led IT. Better starting packages than Indian counterparts, heavily values communication skills and cloud certifications.',
        overview: {
            about: 'Accenture plc is an Irish-American professional services company based in Dublin, specializing in information technology services and consulting.',
            headquarters: 'Dublin, Ireland (Global HQ) / Multiple Hubs across India',
            size: '700,000+ Employees',
            founded: '1989',
            website: 'accenture.com'
        },
        roles: [
            {
                title: 'Associate Software Engineer (ASE)',
                ctc: '₹ 4.5L',
                base: '₹ 4,50,000',
                variable: 'Variable based on level',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 28k - 32k'
            },
            {
                title: 'Advanced ASE',
                ctc: '₹ 6.5L',
                base: '₹ 6,50,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax (10%), PF',
                inHand: '₹ 45k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'Salesforce UI'],
            backend: ['Java', '.NET', 'Node.js', 'Salesforce Apex'],
            infra: ['AWS', 'Azure (Massive Partner)'],
            data: ['Snowflake', 'Databricks', 'SAP HANA']
        },
        process: [
            {
                step: 'Cognitive & Technical Assessment',
                description: 'Sectional cutoffs. Covers English, Critical Reasoning, Abstract Reasoning, Pseudo code, Networking, and Cloud basics.',
                duration: '90 mins',
                difficulty: 'Moderate',
                topics: ['Cognitive', 'Pseudo code', 'Cloud']
            },
            {
                step: 'Communication Test & Interview',
                description: 'An AI-driven spoken English test followed by an HR/Tech interview evaluating project work and behavioral questions.',
                duration: '60 mins',
                difficulty: 'Easy',
                topics: ['Communication', 'Resume', 'Behavioral']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '65% or 6.5 CGPA out of 10 throughout.',
            backlogs: 'None allowed.',
            gap: 'Max 1 year.',
            notes: 'The AI spoken English test is a surprisingly strong filter. Speak clearly and confidently.'
        },
        culture: {
            wlb: 'Varies. Consulting roles require heavy travel and long hours. Delivery center roles are standard 9-to-6.',
            remote: 'Hybrid. Project dependent.',
            vibe: 'Highly polished corporate culture. Emphasizes "networking" and "visibility". Better diversity initiatives than many peers.'
        },
        reality: {
            good: ['Slightly better pay scale for freshers than typical WITCH', 'Massive cross-skilling opportunities', 'Global brand name'],
            bad: ['Hikes are often frozen or delayed during weak macro economies', 'Heavy tracking and timesheet culture', '"Up or Out" consulting culture affects promotion ease']
        }
    },
    {
        id: 'wipro',
        name: 'Wipro',
        type: 'Service',
        status: 'Active',
        logo: 'WIP',
        rating: 3.6,
        aiVerdict: 'Classic IT services. Interviews index entirely on standard OOPS and basic logic. Compensation growth is notoriously sluggish internally.',
        overview: {
            about: 'Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services.',
            headquarters: 'Bangalore, Karnataka',
            size: '240,000+ Employees',
            founded: '1945',
            website: 'wipro.com'
        },
        roles: [
            {
                title: 'Project Engineer',
                ctc: '₹ 3.5L',
                base: '₹ 3,50,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 23k - 25k'
            },
            {
                title: 'Turbo / Elite',
                ctc: '₹ 6.5L',
                base: '₹ 6,50,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax (10%), PF',
                inHand: '₹ 42k - 45k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'jQuery'],
            backend: ['Java', '.NET', 'Python (Data Roles)'],
            infra: ['AWS', 'Azure', 'On-Premise'],
            data: ['Oracle', 'SQL Server', 'Snowflake']
        },
        process: [
            {
                step: 'Online Assessment (WNS)',
                description: 'Aptitude, quantitative, logical reasoning, and an essay writing component. Elite roles have coding questions.',
                duration: '120 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'English Essay', 'Basic Coding']
            },
            {
                step: 'Technical & HR',
                description: 'Standard interview evaluating final year project, basic Java/CPP, and situational questions.',
                duration: '40 mins',
                difficulty: 'Easy',
                topics: ['OOPS', 'Projects', 'Behavioral']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '60% throughout academics.',
            backlogs: 'Maximum 1 allowed during process, zero at joining.',
            gap: 'Maximum 3 years gap allowed in education.',
            notes: 'The essay writing test uniquely filters out poor English skills.'
        },
        culture: {
            wlb: 'Decent work-life balance in most legacy projects.',
            remote: 'Hybrid. Mandating RTO.',
            vibe: 'Traditional Indian corporate. Highly structured, heavily reliant on middle-management allocation.'
        },
        reality: {
            good: ['Provides a stable entry point for mass engineering grads', 'Training program (PRP) is structured', 'Opportunity to work with legacy banking systems'],
            bad: ['Infamous for incredibly low single-digit percentage hikes', 'Onboarding freshers has frequently been delayed by months/years recently', '"Bench" periods can be excessively long']
        }
    },
    {
        id: 'hcl',
        name: 'HCLTech',
        type: 'Service',
        status: 'Active',
        logo: 'HCL',
        rating: 3.7,
        aiVerdict: 'Strong in Infrastructure services. Has a distinct internal product division (HCL Software). Standard service interviews.',
        overview: {
            about: 'HCLTech is an Indian multinational information technology services and consulting company, headquartered in Noida.',
            headquarters: 'Noida, Uttar Pradesh, India',
            size: '220,000+ Employees',
            founded: '1976',
            website: 'hcltech.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 4.25L',
                base: '₹ 4,25,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 28k - 30k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['Java', 'C++', 'Node.js', '.NET'],
            infra: ['Azure', 'GCP', 'Heavy On-Premise Networking IT'],
            data: ['Oracle', 'SQL Server']
        },
        process: [
            {
                step: 'Aptitude & Coding',
                description: 'Covers logical, verbal, quantitative, and 2 medium-to-easy coding questions.',
                duration: '90 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'Basic Arrays/Strings']
            },
            {
                step: 'Technical and HR Interview',
                description: 'Focuses on core CS subjects, DBMS queries, and willingness to relocate or work shifts.',
                duration: '45 mins',
                difficulty: 'Easy',
                topics: ['Core CS', 'SQL', 'Flexibility']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '65% or above throughout.',
            backlogs: 'Zero.',
            gap: '1 year.',
            notes: 'HCL frequently recruits for testing, infrastructure support, and networking roles alongside development.'
        },
        culture: {
            wlb: 'Can be erratic if placed in 24/7 support or infrastructure maintenance projects.',
            remote: 'Mostly working from office mandated.',
            vibe: 'Old-school IT culture. Heavily focused in North India (Noida/NCR) unlike other south-heavy firms.'
        },
        reality: {
            good: ['Good presence in North India for those unwilling to relocate south', 'Strong in cyber security and infrastructure tech', 'HCL Software division owns massive legacy IBM products'],
            bad: ['Appraisals are slow', 'High chance of landing in a non-coding BPO/Support role', 'Strict appraisal distribution curve (bell curve)']
        }
    },
    {
        id: 'cognizant',
        name: 'Cognizant',
        type: 'Service',
        status: 'Active',
        logo: 'COG',
        rating: 3.8,
        aiVerdict: 'Deep penetration in US Healthcare and Banking sectors. Evaluates automation testing and Java skills heavily. Solid "GenC" fresher program.',
        overview: {
            about: 'Cognizant is an American multinational information technology services and consulting company headquartered in Teaneck, New Jersey.',
            headquarters: 'Teaneck, New Jersey, US / Chennai (Major India Hub)',
            size: '340,000+ Employees',
            founded: '1994',
            website: 'cognizant.com'
        },
        roles: [
            {
                title: 'GenC',
                ctc: '₹ 4.0L',
                base: '₹ 4,00,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 26k - 28k'
            },
            {
                title: 'GenC Elevate / Pro',
                ctc: '₹ 5.4L - 6.75L',
                base: '₹ 5,40,000 - 6,75,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax (10%), PF',
                inHand: '₹ 38k - 45k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'Pega'],
            backend: ['Java', '.NET', 'Python', 'Mainframe'],
            infra: ['AWS', 'Azure', 'On-Premise'],
            data: ['Snowflake', 'Oracle', 'Teradata']
        },
        process: [
            {
                step: 'AMCAT / Online Assessment',
                description: 'Aptitude, Logical reasoning, Automata Fix (debugging logic), and basic SQL.',
                duration: '100 mins',
                difficulty: 'Moderate',
                topics: ['Debugging', 'SQL', 'Aptitude']
            },
            {
                step: 'Technical Interview',
                description: 'Tests problem-solving logic, understanding of databases, and project explanation. Higher tier roles require live coding.',
                duration: '45 mins',
                difficulty: 'Moderate',
                topics: ['SQL queries', 'OOPS', 'Live loop/array problems']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '60% throughout academics.',
            backlogs: 'Zero.',
            gap: 'Maximum 1 year.',
            notes: 'Cognizant focuses heavily on database and SQL knowledge during entry-level interviews compared to pure DSA.'
        },
        culture: {
            wlb: 'Variable. Very client-dependent since they operate extensively on US Eastern Time.',
            remote: 'Hybrid. Pushing heavily for RTO in 2024/2025.',
            vibe: 'Highly corporate, client-facing culture. Deeply entrenched in the medical and insurance sectors.'
        },
        reality: {
            good: ['Great domain knowledge in Healthcare (TriZetto) and Financial Services', 'Better initial pay bands (GenC Elevate) than pure WITCH companies', 'Huge presence in Chennai'],
            bad: ['High bench stress', 'Massive recent workforce restructuring and layoffs', 'Promotions usually require jumping companies']
        }
    },
    {
        id: 'ibm',
        name: 'IBM',
        type: 'Service',
        status: 'Active',
        logo: 'IBM',
        rating: 4.1,
        aiVerdict: 'Hybrid of Product and Services. Deeply theoretical interviews for research wing; standard consulting interviews for GBS. Values cloud knowledge.',
        overview: {
            about: 'International Business Machines Corporation is an American multinational technology corporation headquartered in Armonk, New York.',
            headquarters: 'Armonk, New York, US / Bangalore, Pune (India Hubs)',
            size: '280,000+ Employees',
            founded: '1911',
            website: 'ibm.com'
        },
        roles: [
            {
                title: 'Associate System Engineer',
                ctc: '₹ 4.5L',
                base: '₹ 4,50,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 28k - 30k'
            },
            {
                title: 'Software Developer (ISL / Product Wing)',
                ctc: '₹ 11.0L - 14L',
                base: '₹ 10,00,000+',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax (20%+), PF',
                inHand: '₹ 75k - 90k'
            }
        ],
        techStack: {
            frontend: ['Carbon Design System', 'React', 'Angular'],
            backend: ['Java', 'Python', 'Node.js', 'Go'],
            infra: ['Red Hat OpenShift', 'IBM Cloud', 'Kubernetes'],
            data: ['Db2', 'Watsonx (AI)', 'ElasticSearch']
        },
        process: [
            {
                step: 'Cognitive Assessment (Games)',
                description: 'Unique gamified assessment to test memory, problem solving, and numeric skills instead of standard MCQs.',
                duration: '45 mins',
                difficulty: 'Medium',
                topics: ['Cognitive Games', 'Logic']
            },
            {
                step: 'Coding & English Assessment',
                description: '1-2 Coding questions (Medium) and an English proficiency test.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Arrays', 'Strings', 'Grammar']
            },
            {
                step: 'Technical Interview',
                description: 'Focuses on Core CS, Cloud concepts, and RedHat containerization knowledge.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Core CS', 'Docker/K8s Basics', 'Java']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '65% or above throughout.',
            backlogs: 'Zero.',
            gap: 'Checked case-by-case.',
            notes: 'Entering the IBM Software Labs (ISL) wing offers a vastly superior tech product career compared to the Global Business Services (GBS) consulting wing.'
        },
        culture: {
            wlb: 'Very respectful and balanced. Known as one of the best legacy tech giants for work-life separation.',
            remote: 'Hybrid, but strongly enforcing 3-days RTO recently.',
            vibe: 'Stately, academic, and highly corporate. Deep respect for research and patents ("Big Blue"). Very bureaucratic.'
        },
        reality: {
            good: ['Incredible prestige for resume', 'Work-life balance is top-notch', 'World-class enterprise tech (RedHat, Mainframes, Watson)'],
            bad: ['Losing consumer mindshare to Microsoft/AWS', 'Can be extremely slow moving', 'Compensation trails modern FAANG significantly']
        }
    },
    {
        id: 'capgemini',
        name: 'Capgemini',
        type: 'Service',
        status: 'Active',
        logo: 'CAP',
        rating: 3.7,
        aiVerdict: 'European consulting culture. Heavy focus on domain knowledge (automotive, aerospace) in certain wings. Standard IT service processing.',
        overview: {
            about: 'Capgemini SE is a French multinational information technology services and consulting company.',
            headquarters: 'Paris, France / Multiple Hubs across India',
            size: '340,000+ Employees',
            founded: '1967',
            website: 'capgemini.com'
        },
        roles: [
            {
                title: 'Analyst',
                ctc: '₹ 4.0L - 4.25L',
                base: '₹ 4,00,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 26k - 28k'
            },
            {
                title: 'Senior Analyst / Specialized',
                ctc: '₹ 7.5L',
                base: '₹ 7,50,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax (10-15%), PF',
                inHand: '₹ 48k - 52k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'AEM'],
            backend: ['Java', 'C#', 'Spring Boot', 'Python'],
            infra: ['AWS', 'Azure', 'Salesforce'],
            data: ['Oracle', 'DataStage', 'Snowflake']
        },
        process: [
            {
                step: 'Online Assessment (CoCubes)',
                description: 'Pseudo code, English, Game-based aptitude, and Behavioral profiling. Sometimes includes Spoken English.',
                duration: '100 mins',
                difficulty: 'Moderate',
                topics: ['Pseudo Code', 'Games', 'English']
            },
            {
                step: 'Technical Interview',
                description: 'Evaluates basic programming concepts, DBMS, and the final year project heavily.',
                duration: '45 mins',
                difficulty: 'Easy',
                topics: ['SQL', 'OOPS', 'Project']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '60% throughout.',
            backlogs: 'Zero.',
            gap: 'Max 1 year.',
            notes: 'Capgemini places a massive priority on behavioral fit and communication over pure coding aptitude for entry-level.'
        },
        culture: {
            wlb: 'Usually great. European parentage brings stricter adherence to leave policies compared to Indian/US service firms.',
            remote: 'Hybrid. 3 Days office.',
            vibe: 'Polite, process-centric, and hierarchical. Strong focus on upskilling and European clients.'
        },
        reality: {
            good: ['Excellent training structure', 'Better work-life balance due to European labor culture influence', 'Good onsite opportunities to EU'],
            bad: ['Appraisals are notoriously poor', 'Massive bench volume means job roles can change randomly', 'High chance of support projects']
        }
    },
    {
        id: 'techm',
        name: 'Tech Mahindra',
        type: 'Service',
        status: 'Active',
        logo: 'TCM',
        rating: 3.4,
        aiVerdict: 'Telecom dominant. Standard entry with lower initial pay brackets. Interviews focus on basic networking or Java knowledge.',
        overview: {
            about: 'Tech Mahindra is an Indian multinational information technology services and consulting company. Part of the Mahindra Group, heavily focused on Telecom.',
            headquarters: 'Pune, Maharashtra',
            size: '145,000+ Employees',
            founded: '1986',
            website: 'techmahindra.com'
        },
        roles: [
            {
                title: 'Associate Software Engineer',
                ctc: '₹ 3.25L - 3.6L',
                base: '₹ 3,25,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 22k - 24k'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular', 'Legacy JSP'],
            backend: ['Java', '.NET', 'C++ (Telecom Base)'],
            infra: ['AWS', 'Azure', 'On-Premise Telecom Infra'],
            data: ['Oracle', 'MySQL']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Aptitude, logical reasoning, and an English essay. Sometimes includes 1 very basic coding query.',
                duration: '90 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'Essay writing']
            },
            {
                step: 'Technical & HR',
                description: 'Focuses on basic queries (SQL joins, Java OOPS concepts) and willingness to sign bonds or relocate.',
                duration: '30-40 mins',
                difficulty: 'Easy',
                topics: ['Core CS', 'Flexibility']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '60% throughout academics.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'Frequently enforces service agreements/bonds for freshers.'
        },
        culture: {
            wlb: 'Average to poor. Can be highly stressful depending on the telecom client billing cycles.',
            remote: 'Strict RTO recently mandated.',
            vibe: 'Extremely traditional, "babu" level corporate culture. High focus on billing hours.'
        },
        reality: {
            good: ['Good exposure if you want to specialize in the Telecom/5G domain', 'Brand name of Mahindra is strong locally'],
            bad: ['Extremely low entry level pay that has not kept up with inflation', 'Bonds and strict exit/notice periods (90 days)', 'Bureaucratic']
        }
    },
    {
        id: 'dxc',
        name: 'DXC',
        type: 'Service',
        status: 'Active',
        logo: 'DXC',
        rating: 3.5,
        aiVerdict: 'Merger of CSC and HPE Enterprise. Massive footprints in legacy enterprise tech. Easy interview entry barrier.',
        overview: {
            about: 'DXC Technology is an American multinational information technology services and consulting company. Formed in 2017 from the merger of HPE Enterprise Services and CSC.',
            headquarters: 'Ashburn, Virginia, US / Multiple hubs in India',
            size: '130,000+ Employees',
            founded: '2017',
            website: 'dxc.com'
        },
        roles: [
            {
                title: 'Associate Professional',
                ctc: '₹ 4.0L',
                base: '₹ 4,00,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 26k - 28k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['Java', '.NET', 'Mainframe (Massive presence)', 'Python'],
            infra: ['Azure', 'AWS', 'VMware'],
            data: ['SQL Server', 'Oracle']
        },
        process: [
            {
                step: 'Amcat / Online Exam',
                description: 'Standard Aptitude, Logical, Automata Fix, and English. Sectional cutoff applies.',
                duration: '100 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'Automata Fix']
            },
            {
                step: 'Technical Interview',
                description: 'Very straightforward. Ask about OOPS, basic Data structures, and SQL queries.',
                duration: '40 mins',
                difficulty: 'Easy',
                topics: ['SQL', 'OOPS Concept']
            }
        ],
        syllabus: [
            {
                subject: 'Cognitive & Aptitude',
                topics: ['Quantitative Ability (Numbers, Time & Work)', 'Logical Reasoning (Puzzles, Blood Relations)', 'Verbal Ability (Grammar, Reading Comprehension)']
            },
            {
                subject: 'Programming Fundamentals',
                topics: ['Basic Data Types & Operators', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Basic OOPS Concepts', 'Data Structures (Arrays/Linked Lists)']
            },
            {
                subject: 'Core CS Subjects',
                topics: ['RDBMS & SQL Queries', 'Software Engineering Lifecycle (SDLC)', 'Basic Computer Networks', 'Operating Systems Basics']
            }
        ],
        eligibility: {
            cgpa: '60% throughout academics.',
            backlogs: 'None allowed at joining.',
            gap: '1 year maximum.',
            notes: 'High demand for Mainframe and COBOL legacy skills internally; be careful if you want modern cloud dev roles.'
        },
        culture: {
            wlb: 'Generally easygoing. Good wlb on legacy maintenance projects.',
            remote: 'Hybrid.',
            vibe: 'Slow-paced. The company is actively restructuring constantly to adapt to the cloud era vs their legacy roots.'
        },
        reality: {
            good: ['Stable employment', 'Good entry point for tier-3 college grads into IT'],
            bad: ['Constant layoffs and restructuring news globally', 'Very high chance of being allocated to non-development legacy support roles', 'Infinitely slow promotions']
        }
    }
];
