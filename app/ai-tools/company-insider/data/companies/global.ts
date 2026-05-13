import { CompanyData } from './types';

export const globalCompanies: CompanyData[] = [
    {
        id: 'adobe',
        name: 'Adobe',
        type: 'Product',
        status: 'Active',
        logo: 'ADO',
        rating: 4.6,
        aiVerdict: 'Excellent WLB and deep focus on C++/Computer Graphics for core products, while newer acquisitions focus heavily on React and Node. Very stable.',
        overview: {
            about: 'Adobe Inc. is an American multinational computer software company. Incorporated in Delaware and headquartered in San Jose, California, it has historically focused upon the creation of multimedia and creativity software.',
            headquarters: 'San Jose, California, US / Noida, Bangalore (India Hubs)',
            size: '28,000+ Employees',
            founded: '1982',
            website: 'adobe.com/careers'
        },
        roles: [
            {
                title: 'MTS 1 (Member of Technical Staff)',
                ctc: '₹ 25L - 32L (Excl. Joining Bonus)',
                base: '₹ 15,00,000 - 18,00,000',
                variable: '10%',
                rsus: '$30k - $50k',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.05L - 1.25L'
            },
            {
                title: 'Computer Scientist',
                ctc: '₹ 45L - 60L',
                base: '₹ 30,00,000 - 40,00,000',
                variable: '15%',
                rsus: '$60k - $100k',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.4L'
            }
        ],
        techStack: {
            frontend: ['C++ (Core engines)', 'React', 'Spectrum UI'],
            backend: ['Java', 'Node.js', 'Python'],
            infra: ['AWS', 'Azure (Adobe Experience Cloud)'],
            data: ['Hadoop', 'Spark', 'Sensei (ML Framework)']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Aptitude, standard algorithms (Medium), and sometimes basic OS/System questions.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Arrays', 'Strings', 'Aptitude']
            },
            {
                step: 'Technical Loops (3-4 Rounds)',
                description: 'DSA, problem solving, and core subjects (OS, DBMS). The final Director round assesses long-term stability and culture fit.',
                duration: '4 hours',
                difficulty: 'Medium',
                topics: ['Algorithms', 'Core CS', 'Behavioral']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: '8.0+ for campus drives usually.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Adobe Noida is massive and houses core development for flagship products like Acrobat and Photoshop.'
        },
        culture: {
            wlb: 'Consistently rated as one of the best in the industry. Very employee-friendly policies (global days off).',
            remote: 'Hybrid. Flex system.',
            vibe: 'Mature, respectful, and highly intellectual. Not as frantically fast-paced as hyper-growth startups, but ships highly robust, complex software.'
        },
        reality: {
            good: ['Incredible work-life balance and benefits', 'Job security is top tier', 'Work on products literally used by the entire creative world'],
            bad: ['Not the highest payer in the market', 'Core products (C++) have massive ancient codebases', 'Promotions can be slow']
        }
    },
    {
        id: 'oracle',
        name: 'Oracle',
        type: 'Product',
        status: 'Active',
        logo: 'ORA',
        rating: 3.8,
        aiVerdict: 'A massive corporate machine. OCI (Oracle Cloud) teams operate like a high-tier product startup, while older lines of business can feel sluggish.',
        overview: {
            about: 'Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas. It sells database software, cloud systems, and enterprise software.',
            headquarters: 'Austin, Texas, US / Bangalore, Hyderabad, Pune (Hubs)',
            size: '160,000+ Employees',
            founded: '1977',
            website: 'oracle.com'
        },
        roles: [
            {
                title: 'MTS / Server Technology',
                ctc: '₹ 18L - 25L',
                base: '₹ 14,00,000 - 18,00,000',
                variable: 'Performance',
                rsus: '$10k - $20k',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 95k - 1.25L'
            },
            {
                title: 'Senior MTS (OCI)',
                ctc: '₹ 40L - 65L (OCI pays significantly more)',
                base: '₹ 30,00,000 - 45,00,000',
                variable: '15%',
                rsus: '$50k - $100k+',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.8L'
            }
        ],
        techStack: {
            frontend: ['Oracle JET', 'React', 'Angular'],
            backend: ['Java (Massive footprint)', 'C', 'C++ (Database core)'],
            infra: ['Oracle Cloud Infrastructure (OCI Kubernetes)'],
            data: ['Oracle DB', 'MySQL']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Algorithms, Data Structures, Math, and heavy Java/DBMS MCQ sections.',
                duration: '100 mins',
                difficulty: 'Medium',
                topics: ['SQL', 'Java Theory', 'DSA']
            },
            {
                step: 'OCI Loops (4-5 Rounds)',
                description: 'OCI interviews rival FAANG in difficulty. Standard Oracle lines of business ask basic Java/DB questions.',
                duration: '4-5 hours',
                difficulty: 'Hard (OCI)',
                topics: ['System Design', 'OS Internals', 'Algorithms']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Try to explicitly target OCI (Oracle Cloud Infrastructure) roles. The pay, tech, and culture are vastly superior.'
        },
        culture: {
            wlb: 'Highly dependent on the org. OCI can be grueling due to AWS competition. Server Tech is usually very moderate.',
            remote: 'Hybrid. Heavy push for RTO.',
            vibe: 'Sales-driven corporate culture. Heavy internal bureaucracy and distinct silos between different product suites.'
        },
        reality: {
            good: ['Great name value', 'OCI is building massive scale distributed systems from the ground up', 'Solid pay in OCI wing'],
            bad: ['Legacy divisions use outdated internal tooling', 'Massive layoffs occur periodically to trim fat', 'Extremely hierarchical']
        }
    },
    {
        id: 'cisco',
        name: 'Cisco',
        type: 'Product',
        status: 'Active',
        logo: 'CIS',
        rating: 4.2,
        aiVerdict: 'King of networking. Deep expertise in C/C++ embedded systems, Python automation, and newer cloud-native security products.',
        overview: {
            about: 'Cisco Systems, Inc. is an American multinational digital communications technology conglomerate corporation headquartered in San Jose, California.',
            headquarters: 'San Jose, California, US / Bangalore (Massive R&D Hub)',
            size: '80,000+ Employees',
            founded: '1984',
            website: 'cisco.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer Grade 4',
                ctc: '₹ 20L - 25L',
                base: '₹ 14,00,000 - 17,00,000',
                variable: '10% target base',
                rsus: '$15k - $20k',
                deductions: 'Tax, PF',
                inHand: '₹ 95k - 1.15L'
            },
            {
                title: 'Software Engineer Grade 8 (Senior)',
                ctc: '₹ 35L - 50L',
                base: '₹ 25,00,000 - 35,00,000',
                variable: '15%',
                rsus: '$40k - $60k',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['C', 'C++', 'Python', 'Go'],
            infra: ['Bare Metal Routers', 'AWS', 'Kubernetes'],
            data: ['MongoDB', 'ElasticSearch']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Coding questions focusing on strings, bit manipulation, and heavily on core CS (Networking/OS).',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Bit Manipulation', 'Networking Concepts']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'Deep dive into computer networking (TCP/IP, OSI model), OS internals, and standard DSA. System design for senior roles.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['OSI Model', 'Sockets', 'DSA']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: '8.0+ strongly preferred for campus.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'You absolutely must know core networking concepts. Brushing up on your OS and Networks textbooks is necessary.'
        },
        culture: {
            wlb: 'Excellent. Highly praised for extreme stability and respectful hours.',
            remote: 'Hybrid. Usually very flexible.',
            vibe: 'Mature, slightly slow-moving due to hardware release cycles, but deep foundational engineering. Highly inclusive culture.'
        },
        reality: {
            good: ['Great work-life balance and benefits', 'Job security is top-notch', 'World-class networking and embedded systems expertise'],
            bad: ['Can be slow-paced for web developers', 'Hardware-centric timelines', 'Base pay lags behind top software-only FAANG equivalents']
        }
    },
    {
        id: 'salesforce',
        name: 'Salesforce',
        type: 'Product',
        status: 'Active',
        logo: 'SAL',
        rating: 4.4,
        aiVerdict: 'Enterprise SaaS giant. "Ohana" culture drives excellent WLB. Heavy Java/Apex backend with Lightning frontend.',
        overview: {
            about: 'Salesforce, Inc. is an American cloud-based software company headquartered in San Francisco, California. It provides customer relationship management (CRM) software and applications.',
            headquarters: 'San Francisco, California, US / Hyderabad, Bangalore (India Hubs)',
            size: '70,000+ Employees',
            founded: '1999',
            website: 'salesforce.com/company/careers/'
        },
        roles: [
            {
                title: 'AMTS / Software Engineer',
                ctc: '₹ 22L - 30L',
                base: '₹ 15,00,000 - 19,00,000',
                variable: '10%',
                rsus: '$20k - $40k',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.05L - 1.3L'
            },
            {
                title: 'MTS / Senior Software Engineer',
                ctc: '₹ 45L - 65L',
                base: '₹ 30,00,000 - 45,00,000',
                variable: '15%',
                rsus: '$60k - $100k+',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.8L'
            }
        ],
        techStack: {
            frontend: ['Lightning Web Components (LWC)', 'React'],
            backend: ['Java', 'Apex (Proprietary Java-like language)', 'Node.js'],
            infra: ['First-Party Data Centers', 'AWS', 'Heroku'],
            data: ['Oracle (Massive scale legacy)', 'PostgreSQL']
        },
        process: [
            {
                step: 'HackerRank OA',
                description: '2-3 Medium coding algorithms. Standard array/string/graph problems.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Algorithms']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: '2 Coding Rounds (Whiteboarding), 1 System Design (Focus on multi-tenant architecture), 1 Hiring Manager ("Ohana" cultural fit).',
                duration: '4 hours',
                difficulty: 'Medium',
                topics: ['Multi-tenancy', 'Java', 'DSA']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Salesforce interviews heavily prioritize behavioral alignment. Being a "culture fit" is almost as important as technical skills here.'
        },
        culture: {
            wlb: 'Stellar. The "Ohana" (family) culture is famous for creating a very sustainable work environment. Mandatory volunteer time off (VTO).',
            remote: 'Highly flexible/Hybrid.',
            vibe: 'Extremely philanthropic, employee-friendly, and progressive. Less technically intense than Meta/Google, but builds massive B2B software.'
        },
        reality: {
            good: ['Incredible WLB and benefits', 'Very good compensation packages equivalent to top-tier companies', 'High stability'],
            bad: ['Working with proprietary Apex/Visualforce can alienate you from open-source web tech', 'Massive monoliths', 'Can be bureaucratic']
        }
    },
    {
        id: 'sap',
        name: 'SAP',
        type: 'Product',
        status: 'Active',
        logo: 'SAP',
        rating: 4.1,
        aiVerdict: 'European Enterprise juggernaut. Excellent stability. Tech revolves heavily around Java, ABAP, and their proprietary HANA database.',
        overview: {
            about: 'SAP SE is a German multinational software company that develops enterprise software to manage business operations and customer relations.',
            headquarters: 'Walldorf, Germany / Bangalore (SAP Labs India)',
            size: '105,000+ Employees',
            founded: '1972',
            website: 'sap.com'
        },
        roles: [
            {
                title: 'Developer (T1)',
                ctc: '₹ 14L - 18L',
                base: '₹ 10,00,000 - 13,00,000',
                variable: '10%',
                rsus: 'N/A',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 75k - 90k'
            },
            {
                title: 'Senior Developer (T2/T3)',
                ctc: '₹ 25L - 40L',
                base: '₹ 20,00,000 - 30,00,000',
                variable: '15%',
                rsus: 'Occasional RSUs at T3',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.3L - 1.9L'
            }
        ],
        techStack: {
            frontend: ['SAP UI5', 'React', 'Angular'],
            backend: ['Java', 'ABAP', 'Node.js', 'Go'],
            infra: ['SAP Business Technology Platform', 'Azure'],
            data: ['SAP HANA (In-memory DB)']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Coding questions, Aptitude, and usually questions regarding Core Java or basic DBMS concepts.',
                duration: '90 mins',
                difficulty: 'Easy',
                topics: ['Java', 'SQL', 'Algorithms']
            },
            {
                step: 'Technical & HR (3 Rounds)',
                description: 'Focus is on problem-solving, understanding of enterprise applications, OS, and DBMS. Not heavily leetcode dependent.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['DBMS', 'OOD', 'Behavioral']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: '7.0+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'SAP Labs India (Bangalore) is their largest R&D hub outside Germany.'
        },
        culture: {
            wlb: 'Outstanding. Known as one of the most relaxed enterprise companies to work for in India.',
            remote: 'Hybrid. Flex work is highly encouraged.',
            vibe: 'Very European. 30 days of standard paid leave, immense focus on employee well-being, very stable.'
        },
        reality: {
            good: ['Incredible holiday/leave policies', 'Zero "hustle culture" pressure', 'Extremely stable job security for decades'],
            bad: ['You might get boxed into ABAP/SAP proprietary tech', 'Compensation is lower than US-based tech equivalents', 'Promotions take 3-5 years per level']
        }
    },
    {
        id: 'atlassian',
        name: 'Atlassian',
        type: 'Product',
        status: 'Active',
        logo: 'ATL',
        rating: 4.8,
        aiVerdict: 'Top tier engineering. Massive cash and RSU compensation. Interviews focus on deep system design and very pragmatic problem solving over abstract puzzles.',
        overview: {
            about: 'Atlassian Corporation is an Australian software company that develops products for software developers, project managers and other software development teams (Jira, Confluence, Trello).',
            headquarters: 'Sydney, Australia / Bangalore (Major Hub)',
            size: '10,000+ Employees',
            founded: '2002',
            website: 'atlassian.com/company/careers'
        },
        roles: [
            {
                title: 'P3 / Software Engineer',
                ctc: '₹ 60L - 80L',
                base: '₹ 35,00,000 - 45,00,000',
                variable: '10%',
                rsus: '$80k - $120k over 4 years',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.2L - 2.8L'
            },
            {
                title: 'P4 / Senior Software Engineer',
                ctc: '₹ 90L - 1.5Cr+',
                base: '₹ 55,00,000 - 75,00,000',
                variable: '15%',
                rsus: '$150k - $250k+ over 4 years',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 3.5L - 4.5L'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript', 'Atlaskit (Internal Design System)'],
            backend: ['Java', 'Kotlin', 'Node.js', 'Go'],
            infra: ['AWS (Massive scale tenant)', 'Kubernetes'],
            data: ['PostgreSQL', 'DynamoDB', 'Redis']
        },
        process: [
            {
                step: 'Technical Screen / HackerRank',
                description: 'Usually very practical problems (like parsing a log file or implementing a rate limiter logic) rather than DP/Trees.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['Data Parsing', 'State Machines']
            },
            {
                step: 'Onsite Loop (4-5 Rounds)',
                description: 'Data Structures (Practical), System Design (Massive B2B scale), Code Review/System Analysis round, and Values fit.',
                duration: '5 hours',
                difficulty: 'Expert',
                topics: ['System Design', 'Code Review', 'Values']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: 'Highly selective. Usually targets tier-1/2 institutes.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'The "Code Review" round is unique: they give you a bad piece of code and you must critique its design, security, and performance.'
        },
        culture: {
            wlb: 'Superb. "Team Anywhere" policy allows you to work from literally anywhere in India without office mandates.',
            remote: '100% Remote / Hybrid (Employee\'s choice). One of the best remote policies globally.',
            vibe: 'Open company, no bullshit. Emphasizes autonomy, high trust, and building products that teams actually love using.'
        },
        reality: {
            good: ['Team Anywhere remote policy is legendary', 'Top of market compensation in India', 'Very strong engineering brand'],
            bad: ['Legacy Jira codebase (monolith to microservices migration is ongoing and painful)', 'Hiring bar is extremely high', 'RSU value is subject to tech stock volatility']
        }
    },
    {
        id: 'servicenow',
        name: 'ServiceNow',
        type: 'Product',
        status: 'Active',
        logo: 'SER',
        rating: 4.3,
        aiVerdict: 'B2B Workflow giant. Tech stack is predominantly Java/Rhino. Interviews are standard DSA + System design focusing on multi-tenancy.',
        overview: {
            about: 'ServiceNow is an American software company based in Santa Clara, California that develops a cloud computing platform to help companies manage digital workflows for enterprise operations.',
            headquarters: 'Santa Clara, California, US / Hyderabad (Massive India Hub)',
            size: '22,000+ Employees',
            founded: '2004',
            website: 'servicenow.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 25L - 35L',
                base: '₹ 16,00,000 - 22,00,000',
                variable: '10%',
                rsus: '$20k - $40k',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.1L - 1.45L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 45L - 65L',
                base: '₹ 30,00,000 - 40,00,000',
                variable: '10-15%',
                rsus: '$60k - $100k',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.5L'
            }
        ],
        techStack: {
            frontend: ['Next Experience Framework (Internal web component UI)', 'React'],
            backend: ['Java', 'JavaScript (Rhino engine inside Java)'],
            infra: ['Custom Dual-Pair Datacenters', 'MariaDB'],
            data: ['MariaDB (Massive monolithic scaling)', 'Redis']
        },
        process: [
            {
                step: 'Online Assessment',
                description: '2-3 coding questions. Usually Leetcode Medium (Trees, Arrays, HashMap).',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Algorithms']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: '1-2 DSA rounds, 1 Object-Oriented/System Design round, 1 Hiring Manager. High focus on Java basics (Threading, Collections).',
                duration: '4 hours',
                difficulty: 'Medium',
                topics: ['Java Core', 'OOD', 'DSA']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'ServiceNow pays very well but relies heavily on its own internal scripting (GlideScript/Rhino).'
        },
        culture: {
            wlb: 'Excellent. Varies slightly by team but generally much lower stress than consumer-tech companies.',
            remote: 'Hybrid. Flex work.',
            vibe: 'Enterprise-focused. They are rapidly eating into the IT Service Desk market (beating BMC/Jira Service Desk). Fast growth but mature engineering ops.'
        },
        reality: {
            good: ['Great compensation and immense job security', 'Strong stock performance over the last decade', 'Work life balance is consistently praised'],
            bad: ['Proprietary tech stack (Glide) doesn\'t transfer well to other companies', 'Product can feel "dry" as it is B2B IT workflows', 'Design cycles are long']
        }
    },
    {
        id: 'vmware',
        name: 'VMware (Broadcom)',
        type: 'Product',
        status: 'Active',
        logo: 'VMW',
        rating: 3.9,
        aiVerdict: 'Deep systems engineering (Hypervisors, Core OS). However, the recent Broadcom acquisition has drastically changed the culture and WLB.',
        overview: {
            about: 'VMware is an American cloud computing and virtualization technology company. It was acquired by Broadcom in 2023.',
            headquarters: 'Palo Alto, California, US / Bangalore, Pune (Hubs)',
            size: '30,000+ Employees (Pre-Broadcom)',
            founded: '1998',
            website: 'vmware.com'
        },
        roles: [
            {
                title: 'MTS 1',
                ctc: '₹ 22L - 28L',
                base: '₹ 15,00,000 - 18,00,000',
                variable: '10%',
                rsus: 'Varies post-acquisition',
                deductions: 'Tax, PF',
                inHand: '₹ 1.0L - 1.25L'
            },
            {
                title: 'MTS 3 / Senior',
                ctc: '₹ 45L - 60L',
                base: '₹ 30,00,000 - 45,00,000',
                variable: '15%',
                rsus: 'Broadcom RSUs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.6L'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['C++', 'C', 'Go', 'Java', 'Python'],
            infra: ['ESXi (Core Virtualization)', 'vSphere', 'Kubernetes'],
            data: ['PostgreSQL', 'Redis']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Focuses on Core CS (OS, Networking MCQ) and standard coding problems.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['OS Theory', 'Algorithms']
            },
            {
                step: 'Technical Loops (3-4 Rounds)',
                description: 'Deep grilling on Operating Systems concepts (paging, deadlocks, hypervisors) if applying for core teams, or generic Java/Go if applying for management plane APIs.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['OS/Virtualization', 'DSA', 'Go/C++']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: '8.0+ generally preferred.',
            backlogs: 'Zero.',
            gap: 'Case by Case.',
            notes: 'Broadcom is heavily restructuring the company. Hiring has slowed significantly.'
        },
        culture: {
            wlb: 'Pre-acquisition: Amazing. Post-acquisition (Broadcom rule): Intense, heavy RTO mandates, and strict performance metrics.',
            remote: 'Broadcom heavily strictly enforces return to office (5 days for many).',
            vibe: 'Transitioning from a relaxed, academic systems-engineering hub to a hardcore, hyper-profitable corporate division under Hock Tan (Broadcom).'
        },
        reality: {
            good: ['Core engineering (ESXi) is world-class systems tech', 'Brand name is legendary in computing history', 'Broadcom stock has performed exceptionally well'],
            bad: ['Broadcom drastically cut employee benefits and remote work', 'High attrition post-acquisition', 'Morale is currently volatile']
        }
    },
    {
        id: 'intuit',
        name: 'Intuit',
        type: 'Product',
        status: 'Active',
        logo: 'INT',
        rating: 4.7,
        aiVerdict: 'Top tier engineering combined with amazing WLB. Fintech giant (TurboTax/QuickBooks). Heavy focus on Java/Spring and modern React.',
        overview: {
            about: 'Intuit Inc. is an American business software company that specializes in financial software (TurboTax, QuickBooks, Mailchimp).',
            headquarters: 'Mountain View, California, US / Bangalore (Major Hub)',
            size: '17,000+ Employees',
            founded: '1983',
            website: 'intuit.com'
        },
        roles: [
            {
                title: 'Software Engineer 1',
                ctc: '₹ 28L - 35L',
                base: '₹ 18,00,000 - 22,00,000',
                variable: '10%',
                rsus: '$20k - $40k',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.25L - 1.45L'
            },
            {
                title: 'Software Engineer 2 (Senior)',
                ctc: '₹ 45L - 65L',
                base: '₹ 28,00,000 - 40,00,000',
                variable: '15%',
                rsus: '$60k - $90k',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.5L'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript', 'GraphQL'],
            backend: ['Java', 'Spring Boot', 'Node.js', 'Go'],
            infra: ['AWS (Huge AWS customer)', 'Kubernetes', 'ArgoCD'],
            data: ['Cassandra', 'DynamoDB', 'Kafka', 'Apache Spark']
        },
        process: [
            {
                step: 'Craft Demonstration / OA',
                description: 'Instead of purely abstract LC, Intuit often uses a "Craft Demo" where you present a project or build a mini-app, followed by standard coding.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Craftsmanship', 'Algorithms']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: 'Assessments based on Intuit\'s 4 pillars. Includes technical deep dives, system design, and strict behavioral ("Customer Obsession").',
                duration: '4 hours',
                difficulty: 'Medium',
                topics: ['OOD', 'System Design', 'Behavioral']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Intuit is heavily open-source friendly. They created Argo (Kubernetes tool) and open-sourced it. They value best practices heavily.'
        },
        culture: {
            wlb: 'Spectacular. Intuit is perpetually ranked on "Best Places to Work" lists for its supportive management and balanced hours.',
            remote: 'Hybrid. Generally flexible.',
            vibe: 'Highly mature, design-thinking oriented (customer-in). Slow and steady wins the race. Extremely diverse and inclusive workplace.'
        },
        reality: {
            good: ['Incredible WLB', 'Top-notch compensation (rivals FAANG base pay)', 'Modern tech stack (aggressive cloud adopters)'],
            bad: ['Tech can be a bit dry (accounting/tax software)', 'Process-heavy product development (Design for Delight framework can slow things down)', 'Relatively low brand recognition among non-tech folks in India']
        }
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        type: 'Product',
        status: 'Active',
        logo: 'LKD',
        rating: 4.8,
        aiVerdict: 'Elite backend engineering at massive scale. Highest paying Microsoft subsidiary. Deep focus on distributed systems (They created Kafka).',
        overview: {
            about: 'LinkedIn is an American business and employment-focused social media platform that works through websites and mobile apps. It is a wholly owned subsidiary of Microsoft.',
            headquarters: 'Sunnyvale, California, US / Bangalore (Major Hub)',
            size: '20,000+ Employees',
            founded: '2002',
            website: 'linkedin.com/jobs'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 45L - 60L',
                base: '₹ 25,00,000 - 32,00,000',
                variable: '10%',
                rsus: '$40k - $80k (Paid in MSFT stock)',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.5L - 2.0L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 75L - 1.2Cr+',
                base: '₹ 45,00,000 - 60,00,000',
                variable: '15%',
                rsus: '$120k - $250k+ (MSFT stock)',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.8L - 3.8L'
            }
        ],
        techStack: {
            frontend: ['Ember.js', 'React'],
            backend: ['Java', 'Python', 'Go'],
            infra: ['Azure (Migrating)', 'Internal Datacenters'],
            data: ['Kafka', 'Pinot', 'Venice', 'Hadoop', 'Spark']
        },
        process: [
            {
                step: 'Phone Screen',
                description: 'Leetcode Medium/Hard problem. Standard 45-minute whiteboarding.',
                duration: '45 mins',
                difficulty: 'Hard',
                topics: ['Data Structures', 'Algorithms']
            },
            {
                step: 'Onsite Loop (4-5 Rounds)',
                description: '2 Coding (Problem Solving - Hard), 1 System Design (Focus on scale, caching, throughput), 1 Craftsmanship (Code review/Architecture), 1 Host Manager.',
                duration: '5 hours',
                difficulty: 'Expert',
                topics: ['System Design', 'Concurrency', 'Java Internals']
            }
        ],
        syllabus: [
            {
                subject: 'Data Structures & Algorithms',
                topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching', 'Greedy Algorithms', 'Two Pointers / Sliding Window']
            },
            {
                subject: 'System Design (High & Low Level)',
                topics: ['Microservices Architecture', 'Database Sharding & Replication', 'Caching Strategies (Redis/Memcached)', 'Load Balancing', 'API Design', 'Design Patterns', 'Concurrency']
            },
            {
                subject: 'Core Computer Science',
                topics: ['Operating Systems (Threads, Memory)', 'Database Management (ACID, Indexing)', 'Computer Networks (TCP/IP, HTTP/S)']
            },
            {
                subject: 'Behavioral & Leadership',
                topics: ['STAR Method Responses', 'Past Project Deep-dive', 'Conflict Resolution', 'Ownership and Initiative', 'Culture Fit']
            }
        ],
        eligibility: {
            cgpa: 'Not strict, but screens heavily for top-tier companies/pedigree.',
            backlogs: 'N/A',
            gap: 'Accepted.',
            notes: 'LinkedIn is arguably harder to crack than Microsoft itself. The system design round is notoriously strict on scalability.'
        },
        culture: {
            wlb: 'Fantastic. "InDays" once a month where you do no work and just learn/hack. High emphasis on employee happiness.',
            remote: 'Highly flexible/Hybrid.',
            vibe: 'Top-tier engineering culture. They open-source a lot of their deep data tools (Kafka, Pinot). Flat hierarchy, data-obsessed.'
        },
        reality: {
            good: ['Massive compensation (higher than standard Microsoft base)', 'You get Microsoft stock (MSFT has been rock solid)', 'Free food (very famous cafeteria in BGLR) and top WLB'],
            bad: ['Ember.js on frontend can be frustrating for React devs', 'Slow migration to Azure from on-prem is causing infrastructure friction', 'Teams can get very siloed']
        }
    }
];
