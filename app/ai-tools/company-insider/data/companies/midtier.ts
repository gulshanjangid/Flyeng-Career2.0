import { CompanyData } from './types';

export const midtierCompanies: CompanyData[] = [
    {
        id: 'celebal',
        name: 'Celebal Technologies',
        type: 'Service',
        status: 'Active',
        logo: 'CEL',
        rating: 4.2,
        aiVerdict: 'Massive growth in Data & AI. Premier Microsoft and Databricks partner. Excellent learning curve for freshers in data engineering.',
        overview: {
            about: 'Celebal Technologies is a premier software services company in the field of Data Science, Big Data, and Enterprise Cloud.',
            headquarters: 'Jaipur, Rajasthan',
            size: '2,000+ Employees',
            founded: '2015',
            website: 'celebaltech.com'
        },
        roles: [
            {
                title: 'Data Engineer / Cloud Associate',
                ctc: '₹ 5.0L - 8.0L',
                base: '₹ 4,50,000 - 7,00,000',
                variable: 'Performance Bonus',
                rsus: 'N/A',
                deductions: 'PF, Tax',
                inHand: '₹ 35k - 55k'
            }
        ],
        techStack: {
            frontend: ['PowerBI', 'React'],
            backend: ['Python', 'SQL', 'PySpark'],
            infra: ['Azure (Heavy MSFT Partner)'],
            data: ['Databricks', 'Snowflake', 'Synapse']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Focuses on SQL queries, logical aptitude, and Python basics.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['SQL', 'Aptitude']
            },
            {
                step: 'Technical Interview',
                description: 'Deep dive into databases, cloud concepts, and willingness to learn Azure/Databricks.',
                duration: '45 mins',
                difficulty: 'Medium',
                topics: ['DBMS', 'Python', 'Cloud Basics']
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
            cgpa: '65% / 6.5 CGPA.',
            backlogs: 'Zero.',
            gap: '1 year accepted.',
            notes: 'Jaipur HQ makes it highly attractive for North Indian candidates wanting to avoid Bangalore traffic.'
        },
        culture: {
            wlb: 'Startup-like grind with heavy service delivery timelines.',
            remote: 'Office / Hybrid.',
            vibe: 'Young, energetic, heavily focused on rapid upskilling and certification.'
        },
        reality: {
            good: ['Incredible exposure to modern data stacks (Databricks, Snowflake)', 'Fast promotions for top performers', 'A blessing for Jaipur/Rajasthan locals'],
            bad: ['Growing pains of a rapidly scaling startup', 'Can be chaotic', 'Heavy dependency on MSFT ecosystem']
        }
    },
    {
        id: 'ltimindtree',
        name: 'LTIMindtree',
        type: 'Service',
        status: 'Active',
        logo: 'LTI',
        rating: 3.8,
        aiVerdict: 'A newly formed IT juggernaut (L&T Infotech + Mindtree). Tier-1 service scale but retains slightly better engineering pockets than WITCH.',
        overview: {
            about: 'LTIMindtree is a global technology consulting and digital solutions company formed by the merger of L&T Infotech and Mindtree.',
            headquarters: 'Mumbai, Maharashtra',
            size: '80,000+ Employees',
            founded: '1996 (Merged 2022)',
            website: 'ltimindtree.com'
        },
        roles: [
            {
                title: 'Graduate Engineer Trainee',
                ctc: '₹ 4.0L - 5.0L',
                base: '₹ 4,00,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 28k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['Java', '.NET', 'Node.js'],
            infra: ['AWS', 'Azure'],
            data: ['Oracle', 'Snowflake']
        },
        process: [
            {
                step: 'Amcat / Coding',
                description: 'Aptitude, logical, English, and 2 coding questions (Strings/Arrays).',
                duration: '100 mins',
                difficulty: 'Medium',
                topics: ['Coding', 'Aptitude']
            },
            {
                step: 'Tech + HR',
                description: 'Standard evaluating OOPS, final year project, and basic SQL.',
                duration: '45 mins',
                difficulty: 'Easy',
                topics: ['OOPS', 'SQL']
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
            backlogs: 'None.',
            gap: 'Max 1 year.',
            notes: 'Post-merger integration is still settling; project allocation can take time.'
        },
        culture: {
            wlb: 'Standard IT service. Relaxed on bench, hectic on delivery.',
            remote: 'Hybrid.',
            vibe: 'L&T group\'s heavy traditional corporate culture mixed with Mindtree\'s slightly more agile tech focus.'
        },
        reality: {
            good: ['Massive brand stability backed by L&T', 'Great training campuses', 'Good onsite pipeline'],
            bad: ['Post-merger cultural clashes', 'Slow salary hikes', 'Volume hiring means bench time is common']
        }
    },
    {
        id: 'persistent',
        name: 'Persistent Systems',
        type: 'Service',
        status: 'Active',
        logo: 'PER',
        rating: 4.1,
        aiVerdict: 'Outsourced Product Engineering specialists. You actually work on the core tech of other software companies rather than just maintaining IT apps.',
        overview: {
            about: 'Persistent Systems is an Indian multinational technology services company which provides software engineering and strategy services.',
            headquarters: 'Pune, Maharashtra',
            size: '23,000+ Employees',
            founded: '1990',
            website: 'persistent.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 5.0L - 7.5L',
                base: '₹ 4,50,000 - 6,50,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'PF, Tax',
                inHand: '₹ 32k - 48k'
            }
        ],
        techStack: {
            frontend: ['React', 'Vue', 'Angular'],
            backend: ['Java', 'Golang', 'Node.js', 'Salesforce'],
            infra: ['AWS', 'GCP', 'Kubernetes'],
            data: ['PostgreSQL', 'Snowflake']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'CS fundamentals, advanced programming logic, and strictly timed coding questions.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['DSA', 'CS Core']
            },
            {
                step: 'Technical Rounds (2x)',
                description: 'Much deeper than WITCH interviews. Live coding on screen, deep dive into OS, DBMS, and Networking.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['Live Coding', 'System Design Basics']
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
            cgpa: '65% / 6.5 consistently.',
            backlogs: 'Zero.',
            gap: '1 year.',
            notes: 'Very strict on coding fundamentals compared to standard mass recruiters.'
        },
        culture: {
            wlb: 'Decent, though client pressure (usually US tech firms) can dictate late hours.',
            remote: 'Hybrid.',
            vibe: 'Engineering-heavy. Highly respected in Pune. Less about "billing" and more about "building".'
        },
        reality: {
            good: ['Actually doing product engineering instead of IT support', 'Excellent brand for future jumps to product MNCS', 'Great tech stack exposure'],
            bad: ['Pay is still bound by service/consulting limits', 'Promotions can be slow', 'Pune centric (less presence in South India)']
        }
    },
    {
        id: 'hexaware',
        name: 'Hexaware',
        type: 'Service',
        status: 'Active',
        logo: 'HEX',
        rating: 3.7,
        aiVerdict: 'Mid-sized IT services. Big focus on cloud migrations, automation, and testing. Decent starting point but high attrition.',
        overview: {
            about: 'Hexaware Technologies is an information technology and business process outsourcing service provider company based in Navi Mumbai, India.',
            headquarters: 'Navi Mumbai, Maharashtra',
            size: '28,000+ Employees',
            founded: '1990',
            website: 'hexaware.com'
        },
        roles: [
            {
                title: 'Graduate Engineer Trainee',
                ctc: '₹ 4.0L - 6.0L',
                base: '₹ 4,00,000 - 5,50,000',
                variable: 'Retention Bonus',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 28k - 40k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['Java', '.NET', 'Python'],
            infra: ['Azure (Heavy)', 'AWS'],
            data: ['SQL Server', 'Oracle']
        },
        process: [
            {
                step: 'Aptitude & English',
                description: 'Standard assessment on cognitive abilities and basic programming logic.',
                duration: '60 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'Logic']
            },
            {
                step: 'Tech & HR',
                description: 'Basic CS concepts, OOPS, and SQL. Focus on willingness to learn and adapt.',
                duration: '45 mins',
                difficulty: 'Easy',
                topics: ['SQL', 'OOPS']
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
            gap: 'Up to 1 year.',
            notes: 'Often enforces service bonds for freshers.'
        },
        culture: {
            wlb: 'Standard IT consulting balance. Project-dependent.',
            remote: 'Hybrid.',
            vibe: 'Mid-tier corporate. Less bureaucratic than TCS but also fewer resources/facilities.'
        },
        reality: {
            good: ['Better visibility to upper management due to smaller size compared to WITCH', 'Good cloud migration projects', 'Navi Mumbai/Chennai hubs are strong'],
            bad: ['Strict service agreement bonds for freshers', 'Bench periods often mean mandatory upskilling or risk of termination', 'Brand value is weaker globally']
        }
    },
    {
        id: 'coforge',
        name: 'Coforge',
        type: 'Service',
        status: 'Active',
        logo: 'COF',
        rating: 3.9,
        aiVerdict: 'Formerly NIIT Technologies. Highly specialized in Travel, Transportation, and Insurance. Very stable and profitable mid-tier firm.',
        overview: {
            about: 'Coforge is an Indian multinational IT company based in Noida, India. It provides IT services and solutions with a specific focus on Travel, Insurance, and Banking.',
            headquarters: 'Noida, Uttar Pradesh',
            size: '25,000+ Employees',
            founded: '2004 (as NIIT Tech)',
            website: 'coforge.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 4.25L - 6.0L',
                base: '₹ 4,00,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 28k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'PEGA UI'],
            backend: ['Java', '.NET', 'MuleSoft'],
            infra: ['AWS', 'Azure'],
            data: ['Oracle', 'Duck Creek (Insurance Software)']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Cognitive test + 2 coding questions. Very standard format.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Coding', 'Aptitude']
            },
            {
                step: 'Technical Interview',
                description: 'Tests Java/.NET strictly. They prefer candidates who already know a backend framework.',
                duration: '45 mins',
                difficulty: 'Medium',
                topics: ['Java', '.NET', 'SQL']
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
            backlogs: 'None.',
            gap: '1 year maximum.',
            notes: 'High demand for PEGA and Salesforce developers internally.'
        },
        culture: {
            wlb: 'Very good. They pride themselves on a lower attrition rate and better employee care than peers.',
            remote: 'Hybrid.',
            vibe: 'Friendly, slightly traditional but with a strong focus on employee retention and training.'
        },
        reality: {
            good: ['Excellent domain specialization (Insurance/Travel) makes you highly valuable later', 'Stable, growing stock and company', 'Noida base is great for North Indians'],
            bad: ['Not a "cool" tech stack (lots of legacy enterprise software)', 'Slower promotion tracks', 'Strict background checks']
        }
    },
    {
        id: 'mphasis',
        name: 'Mphasis',
        type: 'Service',
        status: 'Active',
        logo: 'MPH',
        rating: 3.6,
        aiVerdict: 'Heavily reliant on Banking & Capital Markets. Was formerly an HP subsidiary. Very standard entry-level service firm.',
        overview: {
            about: 'Mphasis is an Indian multinational information technology services and consulting company, headquartered in Bangalore. It focuses heavily on financial services.',
            headquarters: 'Bangalore, Karnataka',
            size: '35,000+ Employees',
            founded: '1998',
            website: 'mphasis.com'
        },
        roles: [
            {
                title: 'Trainee Software Engineer',
                ctc: '₹ 3.5L - 4.0L',
                base: '₹ 3,50,000',
                variable: 'Minimal',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 24k'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular'],
            backend: ['Java', '.NET', 'C++ (Legacy Banking)'],
            infra: ['AWS', 'On-Premise Banking Infra'],
            data: ['Oracle', 'Sybase']
        },
        process: [
            {
                step: 'AMCAT',
                description: 'Standard logical, verbal, quantitative, and computer programming logic test.',
                duration: '90 mins',
                difficulty: 'Easy',
                topics: ['AMCAT Standard']
            },
            {
                step: 'Technical / SVAR',
                description: 'Spoken English test (SVAR) followed by a basic technical interview evaluating OOPS and SQL.',
                duration: '60 mins',
                difficulty: 'Easy',
                topics: ['Speech', 'Basic CS']
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
            cgpa: '60% / 6.0 CGPA throughout.',
            backlogs: 'None.',
            gap: 'Max 1 year.',
            notes: 'Often uses a 2-year service agreement for freshers.'
        },
        culture: {
            wlb: 'Standard 9-6, but banking clients often require strict security compliances (no phones on floor, etc.).',
            remote: 'Hybrid/In-office.',
            vibe: 'Strictly corporate, heavy compliance focus due to financial clients. Very safe, but slow.'
        },
        reality: {
            good: ['Deep banking domain expertise', 'Good stability', 'Decent onsite opportunities for legacy systems'],
            bad: ['Very low entry pay', 'Strict compliance environment (often no internet on work systems)', 'Slow tech modernization']
        }
    },
    {
        id: 'zensar',
        name: 'Zensar',
        type: 'Service',
        status: 'Active',
        logo: 'ZEN',
        rating: 3.7,
        aiVerdict: 'Part of the RPG Group. Strong in retail and manufacturing digital transformation.',
        overview: {
            about: 'Zensar Technologies is an Indian technology consulting and IT services company headquartered in Pune, India. It is a subsidiary of RPG Group.',
            headquarters: 'Pune, Maharashtra',
            size: '10,000+ Employees',
            founded: '1991',
            website: 'zensar.com'
        },
        roles: [
            {
                title: 'Junior Software Engineer',
                ctc: '₹ 3.5L - 4.5L',
                base: '₹ 3,50,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 24k - 28k'
            }
        ],
        techStack: {
            frontend: ['React', 'Magento'],
            backend: ['Java', 'PHP', 'Node.js'],
            infra: ['AWS', 'Azure'],
            data: ['MySQL', 'Oracle']
        },
        process: [
            {
                step: 'Aptitude & Coding',
                description: 'Sectional timed tests. 2 coding questions of easy difficulty.',
                duration: '90 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'Basic Coding']
            },
            {
                step: 'Technical Interview',
                description: 'Questions on final year project, basic Java/CPP, and situational behavior.',
                duration: '45 mins',
                difficulty: 'Easy',
                topics: ['OOPS', 'Projects']
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
            gap: '1 year.',
            notes: 'Zensar regularly visits Pune/Maharashtra colleges.'
        },
        culture: {
            wlb: 'Good. RPG group has a reputation for being employee-friendly.',
            remote: 'Hybrid.',
            vibe: 'Warm, mid-sized company feel. Not a massive faceless campus, but still traditional.'
        },
        reality: {
            good: ['Great work culture and employee support', 'Strong retail sector expertise', 'Pune base is great'],
            bad: ['Low compensation', 'Legacy projects are common', 'Less global recognition compared to WITCH']
        }
    },
    {
        id: 'birlasoft',
        name: 'Birlasoft',
        type: 'Service',
        status: 'Active',
        logo: 'BIR',
        rating: 3.7,
        aiVerdict: 'CK Birla Group. Heavy ERP and enterprise solutions (SAP, Oracle) focus. Good for starting an ERP career.',
        overview: {
            about: 'Birlasoft combines the power of domain, enterprise and digital technologies to reimagine business processes for customers. Part of the CK Birla Group.',
            headquarters: 'Pune, Maharashtra',
            size: '12,000+ Employees',
            founded: '1995',
            website: 'birlasoft.com'
        },
        roles: [
            {
                title: 'Trainee Engineer',
                ctc: '₹ 3.5L - 4.5L',
                base: '₹ 3,50,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 24k - 28k'
            }
        ],
        techStack: {
            frontend: ['SAP UI5', 'Angular'],
            backend: ['SAP ABAP', 'Java', '.NET'],
            infra: ['Azure', 'AWS'],
            data: ['SAP HANA', 'Oracle']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Aptitude, logical, English, and technical MCQs. Rare coding questions.',
                duration: '60 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'Tech MCQ']
            },
            {
                step: 'Technical / HR',
                description: 'Standard evaluation of communication and basic OOPS/DBMS.',
                duration: '30 mins',
                difficulty: 'Easy',
                topics: ['DBMS', 'OOPS']
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
            gap: '1 year.',
            notes: 'Will often bond you for 2 years. Very SAP focused; if you train in SAP here, exit opps are lucrative.'
        },
        culture: {
            wlb: 'Good wlb, generally very stable environments.',
            remote: 'Hybrid/In-office.',
            vibe: 'Traditional Indian conglomerate culture. Very respectful and process-oriented.'
        },
        reality: {
            good: ['Excellent training ground for SAP and ERP ecosystems', 'High job security', 'Good brand name locally'],
            bad: ['Bonds are strictly enforced', 'Starting salary is quite low', 'You might not get to code in modern languages (JS/Python)']
        }
    },
    {
        id: 'kpit',
        name: 'KPIT Technologies',
        type: 'Service',
        status: 'Active',
        logo: 'KPT',
        rating: 4.2,
        aiVerdict: 'Niche ER&D player. Absolute powerhouse if you want to work in embedded C, autonomous driving, and automotive tech.',
        overview: {
            about: 'KPIT Technologies is an Indian multinational corporation providing engineering research and development (ER&D) services to automotive companies.',
            headquarters: 'Pune, Maharashtra',
            size: '10,000+ Employees',
            founded: '1990',
            website: 'kpit.com'
        },
        roles: [
            {
                title: 'Embedded Software Engineer',
                ctc: '₹ 5.0L - 7.5L',
                base: '₹ 4,50,000 - 6,50,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 35k - 45k'
            }
        ],
        techStack: {
            frontend: ['C++ (Qt/QML for Automotive Displays)'],
            backend: ['Embedded C', 'C++', 'Python (Testing)'],
            infra: ['AUTOSAR', 'Linux/RTOS'],
            data: ['CAN Protocols', 'Vector Tools']
        },
        process: [
            {
                step: 'Core Engineering Assessment',
                description: 'Heavily focuses on C/C++ pointers, memory management, microcontrollers, and logic. Very different from standard IT web dev tests.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['C/C++', 'Microcontrollers', 'Memory']
            },
            {
                step: 'Technical Interview',
                description: 'Deep dive into C concepts, embedded systems, OS (threading/mutexes), and real-time processing.',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['OS Theory', 'Embedded C', 'Hardware']
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
            cgpa: '65%+ or 6.5 consistently. Prefers ECE/EEE students heavily.',
            backlogs: 'Zero.',
            gap: 'Max 1 year.',
            notes: 'They are looking for core engineers, not web developers. If you only know React, do not apply.'
        },
        culture: {
            wlb: 'Good, but automotive deadlines (tape-outs) can be strict.',
            remote: 'In-office mostly due to hardware dependencies.',
            vibe: 'Pure engineering culture. Labs filled with car dashboard prototypes and testing rigs. Very nerdy and proud of it.'
        },
        reality: {
            good: ['Work on genuine bleeding-edge tech (self-driving, EVs)', 'Massive barriers to entry means your skills are highly valued', 'Partner to BMW, Honda, etc.'],
            bad: ['Extremely niche; pivoting to web dev later is almost impossible', 'Pune specific largely', 'Not the FAANG cash salary bands']
        }
    },
    {
        id: 'virtusa',
        name: 'Virtusa',
        type: 'Service',
        status: 'Active',
        logo: 'VIR',
        rating: 3.8,
        aiVerdict: 'Strong in Digital Engineering and Banking. Uses a unique "NeuralHack" heavily for hiring. Higher pay for "specialist" roles.',
        overview: {
            about: 'Virtusa Corporation is an American global information technology services company. It provides digital engineering and tech consulting.',
            headquarters: 'Southborough, Massachusetts, US / Chennai, Hyderabad',
            size: '30,000+ Employees',
            founded: '1996',
            website: 'virtusa.com'
        },
        roles: [
            {
                title: 'Associate Engineer',
                ctc: '₹ 4.0L',
                base: '₹ 4,00,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 28k'
            },
            {
                title: 'Engineer - Advanced/Specialist (Via NeuralHack)',
                ctc: '₹ 6.5L - 8.0L',
                base: '₹ 6,00,000 - 7,50,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'PF, Tax',
                inHand: '₹ 45k - 55k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'AEM'],
            backend: ['Java', 'Node.js', 'Python'],
            infra: ['AWS', 'Azure'],
            data: ['Oracle', 'MongoDB']
        },
        process: [
            {
                step: 'NeuralHack / Coding Test',
                description: 'Virtusa\'s specialized hiring hackathon/test. High performers get directly interviewed for the 6.5L+ packages.',
                duration: '120 mins',
                difficulty: 'Medium',
                topics: ['DSA', 'Web Basic']
            },
            {
                step: 'Technical Interview',
                description: 'Standard Java/Web technologies check. Quite comprehensive for the specialist roles.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Java Core', 'System Design Basics']
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
            gap: '1 year maximum.',
            notes: 'If you clear NeuralHack, Virtusa is actually a very good paying starting point with good tech.'
        },
        culture: {
            wlb: 'Hectic. Known for pushing delivery timelines hard.',
            remote: 'Hybrid.',
            vibe: 'Sri Lankan/Indian founders, very aggressive growth mentality. "Digital" first approach vs legacy IT.'
        },
        reality: {
            good: ['NeuralHack path offers good pay and good projects', 'Strong PE backing (Baring) means aggressive growth', 'Modern tech stacks in most projects'],
            bad: ['"Associate" baseline tier pay is low', 'Work-life balance is frequently complained about', 'Client interviews can be grueling']
        }
    },
    {
        id: 'quest',
        name: 'Quest Global',
        type: 'Service',
        status: 'Active',
        logo: 'QGL',
        rating: 3.9,
        aiVerdict: 'Mechanical/Aero ER&D giants. Very different from IT firms. You work on jet engines, medical devices, and auto CAD.',
        overview: {
            about: 'QuEST Global Services is a product engineering company in the Aero Engines, Aerospace & Defense, High-Tech & Industrial, Medical Devices, Oil & Gas, Power, and Transportation verticals.',
            headquarters: 'Singapore / Bangalore, Trivandrum',
            size: '17,000+ Employees',
            founded: '1997',
            website: 'quest-global.com'
        },
        roles: [
            {
                title: 'Trainee Engineer',
                ctc: '₹ 3.5L - 4.5L',
                base: '₹ 3,50,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 24k - 28k'
            }
        ],
        techStack: {
            frontend: ['N/A (Usually CAD/CAM/CAE UI)'],
            backend: ['Embedded C', 'C++', 'Python'],
            infra: ['Hardware testing rigs'],
            data: ['MATLAB', 'Simulink', 'Ansys']
        },
        process: [
            {
                step: 'Core Domain Test',
                description: 'Mechanical/Aero/ECE students take a test based on their core engineering subjects (Thermodynamics, SOM, Microcontrollers).',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['Core Engineering Subjects']
            },
            {
                step: 'Technical Interview',
                description: 'Deep conceptual questioning on physics, engineering design, and CATIA/Embedded C depending on profile.',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['Core Concepts', 'CAD/Coding']
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
            cgpa: '65% consistently. Core branches favored over CS/IT.',
            backlogs: 'Zero.',
            gap: '1 year.',
            notes: 'One of the few volume recruiters that specifically wants Mechanical and Aero engineers.'
        },
        culture: {
            wlb: 'Good. Engineering deliverables are often long-term (years) unlike agile IT sprints.',
            remote: 'Strictly In-office (Hardware/Security dependencies).',
            vibe: 'True engineering labs. People wearing safety glasses, testing rigs, CAD drawings everywhere.'
        },
        reality: {
            good: ['Core engineering job in India (rare)', 'Work with GE, Rolls Royce, Airbus', 'Deep technical specialization'],
            bad: ['Pay scales are much lower than software IT', 'Extremely limited remote work', 'Growth is tied to mechanical industries, not software booms']
        }
    },
    {
        id: 'ust',
        name: 'UST',
        type: 'Service',
        status: 'Active',
        logo: 'UST',
        rating: 4.1,
        aiVerdict: 'Trivandrum\'s pride. Very strong in semiconductor IT (partnering deeply with Intel) and retail. Great work culture.',
        overview: {
            about: 'UST (formerly UST Global) is a provider of digital technology and transformation, information technology and services, headquartered in Aliso Viejo, California.',
            headquarters: 'Aliso Viejo, US / Trivandrum, Kerala (Massive hub)',
            size: '30,000+ Employees',
            founded: '1999',
            website: 'ust.com'
        },
        roles: [
            {
                title: 'Software Developer',
                ctc: '₹ 4.5L - 6.0L',
                base: '₹ 4,50,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'PF, PT',
                inHand: '₹ 30k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['Java', 'C++', 'Python'],
            infra: ['AWS', 'Azure'],
            data: ['Oracle', 'Snowflake']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Standard aptitude, logical reasoning, and 1-2 coding questions.',
                duration: '90 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'Basic Coding']
            },
            {
                step: 'Technical Interview',
                description: 'Questions on final year project, core CS fundamentals, and situational responses.',
                duration: '45 mins',
                difficulty: 'Easy',
                topics: ['CS Core', 'Project']
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
            gap: '1 year.',
            notes: 'If you want to work in Kerala, UST at Technopark is the crown jewel.'
        },
        culture: {
            wlb: 'Very employee friendly. Outstanding work-life balance typically.',
            remote: 'Hybrid. Flexi-work policies are supportive.',
            vibe: 'Warm, highly supportive. The Trivandrum campus is famously beautiful and feels like a tech-park resort.'
        },
        reality: {
            good: ['Top tier culture and employee retention', 'Great Intel/Semiconductor projects', 'Best employer in Kerala'],
            bad: ['Not as dominant outside South India', 'Starting pay is average', 'Bench policy can be strict during downturns']
        }
    },
    {
        id: 'globallogic',
        name: 'GlobalLogic',
        type: 'Service',
        status: 'Active',
        logo: 'GLO',
        rating: 4.0,
        aiVerdict: 'Hitachi subsidiary. Premium outsourcing. Great tech stacks, much more "product" focused than traditional WITCH.',
        overview: {
            about: 'GlobalLogic is a digital product engineering services company. It integrates experience design and complex engineering to help clients. It is a Hitachi Group Company.',
            headquarters: 'San Jose, California, US / Noida, India',
            size: '30,000+ Employees',
            founded: '2000',
            website: 'globallogic.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 5.5L - 8.0L',
                base: '₹ 5,00,000 - 7,00,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'PF, Tax',
                inHand: '₹ 38k - 50k'
            }
        ],
        techStack: {
            frontend: ['React', 'Vue', 'Next.js'],
            backend: ['Node.js', 'Java', 'Go', 'Python'],
            infra: ['AWS', 'Kubernetes'],
            data: ['MongoDB', 'PostgreSQL']
        },
        process: [
            {
                step: 'Coding Test (HackerEarth)',
                description: 'Heavy focus on Data Structures and Algorithms. Usually 3 questions, Medium to Hard difficulty.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['DSA', 'String Manipulation']
            },
            {
                step: 'Technical In-depth',
                description: 'Screen-sharing, live coding, architecture discussions depending on experience level.',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['Live Coding', 'System Design']
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
            cgpa: '65% / 6.5 CGPA.',
            backlogs: 'Zero.',
            gap: '1 year.',
            notes: 'If you pass the GL coding round, you are generally a very capable developer.'
        },
        culture: {
            wlb: 'Very good. Follows Silicon Valley styled sprints rather than traditional IT waterfall models.',
            remote: 'Hybrid.',
            vibe: 'Product-company feel within a service-company shell. High engineering standards.'
        },
        reality: {
            good: ['Excellent modern tech stack exposure', 'Great stepping stone to FAANG', 'Hitachi acquisition provides massive stability'],
            bad: ['High client expectations/pressure', 'Noida-heavy (though expanding)', 'Interviews are genuinely difficult']
        }
    },
    {
        id: 'synechron',
        name: 'Synechron',
        type: 'Service',
        status: 'Active',
        logo: 'SYN',
        rating: 3.8,
        aiVerdict: 'Pure-play financial services consulting. If you want to work on Wall Street tech but live in Pune, this is it.',
        overview: {
            about: 'Synechron is a global consulting and technology organization providing innovative solutions to the financial services industry.',
            headquarters: 'New York, US / Pune, India',
            size: '14,000+ Employees',
            founded: '2001',
            website: 'synechron.com'
        },
        roles: [
            {
                title: 'Associate (Java/UI)',
                ctc: '₹ 5.0L - 7.0L',
                base: '₹ 4,50,000 - 6,50,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF, Tax',
                inHand: '₹ 32k - 45k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['Java (Spring Boot heavily)', 'C#'],
            infra: ['AWS', 'Docker'],
            data: ['KDB+', 'Oracle', 'Kafka']
        },
        process: [
            {
                step: 'Coding & SQL',
                description: 'Expect questions on Java Collections, concurrency, and complex SQL joins (Finance requires heavy data manipulation).',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Java Core', 'SQL Advanced']
            },
            {
                step: 'Tech & Domain Interview',
                description: 'Evaluates your technical depth. Bonus points if you know basic finance terms (Equities, Derivatives).',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Java Concurrency', 'Finance Basics']
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
            notes: 'Exceptional demand for Java developers who understand multithreading.'
        },
        culture: {
            wlb: 'Intense. Financial markets are unforgiving and deployments often happen on weekends.',
            remote: 'Hybrid.',
            vibe: 'Wall-street backend. Fast-paced, professional, very focused on security and low-latency.'
        },
        reality: {
            good: ['Financial domain expertise pays massively later in your career', 'Great onsite opportunities to NY/London', 'Good bonus structures'],
            bad: ['High stress', 'Strict security compliance', 'Legacy tech debt exists in banking clients']
        }
    },
    {
        id: 'itcinfotech',
        name: 'ITC Infotech',
        type: 'Service',
        status: 'Active',
        logo: 'ITC',
        rating: 3.7,
        aiVerdict: 'Part of the ITC conglomerate. Deep roots in manufacturing, CPG, and hospitality tech.',
        overview: {
            about: 'ITC Infotech is a specialized global technology services provider, led by Business and Technology Consulting. It is a fully owned subsidiary of ITC Limited.',
            headquarters: 'Bangalore, Karnataka',
            size: '11,000+ Employees',
            founded: '2000',
            website: 'itcinfotech.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 4.0L - 5.5L',
                base: '₹ 4,00,000 - 5,00,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 28k - 35k'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['Java', '.NET', 'PTC ThingWorx (IoT)'],
            infra: ['Azure', 'AWS'],
            data: ['SQL Server', 'Oracle']
        },
        process: [
            {
                step: 'Aptitude Test',
                description: 'Standard cognitive abilities test.',
                duration: '60 mins',
                difficulty: 'Easy',
                topics: ['Aptitude', 'Reasoning']
            },
            {
                step: 'Tech & HR',
                description: 'Basic CS concepts. They look for stability and long-term commitment.',
                duration: '45 mins',
                difficulty: 'Easy',
                topics: ['Core CS', 'Behavioral']
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
            gap: '1 year.',
            notes: 'Huge focus on PLM (Product Lifecycle Management) and IoT software.'
        },
        culture: {
            wlb: 'Excellent. Carries the traditional ITC group philosophy of employee care.',
            remote: 'Hybrid.',
            vibe: 'Old-school, stable, incredibly secure. Not a fast-paced startup, but a place you can retire from.'
        },
        reality: {
            good: ['Incredible stability', 'ITC group perks', 'Great domain knowledge in FMCG/Manufacturing'],
            bad: ['Slow career graph', 'Pay is lower than product tech', 'Bureaucracy']
        }
    },
    {
        id: 'xplor',
        name: 'Xplor Technologies',
        type: 'Product',
        status: 'Active',
        logo: 'XPL',
        rating: 3.9,
        aiVerdict: 'Actually a global SaaS platform company for fitness/childcare, but operates a massive development hub in Pune.',
        overview: {
            about: 'Xplor Technologies is a global SaaS platform offering software, payments, and embedded commerce solutions for businesses in everyday life verticals.',
            headquarters: 'Atlanta, US / Pune, India',
            size: '3,000+ Employees',
            founded: '2021 (from mergers)',
            website: 'xplortechnologies.com'
        },
        roles: [
            {
                title: 'Software Engineer (SaaS)',
                ctc: '₹ 7.0L - 12.0L',
                base: '₹ 6,50,000 - 11,00,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'PF, Tax',
                inHand: '₹ 48k - 80k'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript'],
            backend: ['Node.js', '.NET Core', 'Go'],
            infra: ['AWS (Heavy)', 'Docker'],
            data: ['PostgreSQL', 'Redis']
        },
        process: [
            {
                step: 'Take-home Assignment / OA',
                description: 'Expect a modern take-home task (e.g., build a small API or React component) or a Hackerrank test.',
                duration: 'Varies',
                difficulty: 'Medium',
                topics: ['Modern Web Dev', 'API Design']
            },
            {
                step: 'Systems & Culture Fit',
                description: 'Evaluating how you write clean code (SOLID principles) and if you fit their agile culture.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Clean Code', 'Culture']
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
            cgpa: 'Flexible. Skills matter more.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Product company interview style. Know your frameworks well.'
        },
        culture: {
            wlb: 'Very good. Modern tech culture with unlimited PTO policies in some regions.',
            remote: 'Remote/Hybrid flex.',
            vibe: 'Modern SaaS company. Flat hierarchy, slack-heavy, agile methodology.'
        },
        reality: {
            good: ['Actual product development (SaaS)', 'Modern tech stack', 'Good culture and pay vs pure services'],
            bad: ['Integration pains from multiple company mergers', 'Pune office dependency', 'Less known brand name in India']
        }
    },
    {
        id: 'cyntexa',
        name: 'Cyntexa',
        type: 'Service',
        status: 'Active',
        logo: 'CYN',
        rating: 4.3,
        aiVerdict: 'The absolute kings of Salesforce consulting in India. Incredible growth rate. Highly specialized.',
        overview: {
            about: 'Cyntexa is a leading Salesforce Crest (Gold) Consulting Partner in the USA, UK, UAE, Australia, Singapore & India.',
            headquarters: 'Jaipur, Rajasthan',
            size: '1,000+ Employees',
            founded: '2018',
            website: 'cyntexa.com'
        },
        roles: [
            {
                title: 'Salesforce Developer',
                ctc: '₹ 4.0L - 8.0L',
                base: '₹ 3,50,000 - 7,00,000',
                variable: 'Certification Bonuses',
                rsus: 'N/A',
                deductions: 'PF',
                inHand: '₹ 25k - 50k'
            }
        ],
        techStack: {
            frontend: ['Salesforce LWC', 'Aura'],
            backend: ['Salesforce Apex'],
            infra: ['Salesforce Ecosystem'],
            data: ['SOQL', 'Salesforce Data Cloud']
        },
        process: [
            {
                step: 'Aptitude & Basic CS',
                description: 'Standard screening, looking for raw logic potential over specific languages.',
                duration: '60 mins',
                difficulty: 'Easy',
                topics: ['Logic', 'Aptitude']
            },
            {
                step: 'Technical / Core Java',
                description: 'They test heavily on OOPS or Java (since Apex is very similar to Java).',
                duration: '45 mins',
                difficulty: 'Medium',
                topics: ['Java', 'OOPS']
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
            gap: 'Accepted.',
            notes: 'If you want a career strictly in Salesforce, this is one of the fastest growing partners globally to join.'
        },
        culture: {
            wlb: 'Like Celebal, it’s a fast-growing Jaipur-based firm. High energy, long hours at times.',
            remote: 'Office.',
            vibe: 'Young, party-heavy, highly energetic startup vibe. Extremely focused on getting Salesforce certifications.'
        },
        reality: {
            good: ['Salesforce is a highly lucrative niche', 'Massive growth opportunities internally', 'Company sponsors all certifications'],
            bad: ['Locks you into the Salesforce ecosystem permanently', 'Can be very chaotic', 'Base pay starts low but scales fast']
        }
    }
];

// Sort alphabetically
export const midtier = midtierCompanies.sort((a, b) => a.name.localeCompare(b.name));
