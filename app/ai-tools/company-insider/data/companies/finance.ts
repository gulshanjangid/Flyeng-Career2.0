import { CompanyData } from './types';

export const financeCompanies: CompanyData[] = [
    {
        id: 'goldman',
        name: 'Goldman Sachs',
        type: 'Finance',
        status: 'Active',
        logo: 'GOL',
        rating: 4.1,
        aiVerdict: 'Core engineering in finance. Heavy focus on Java/Slang and complex algorithmic problem solving. Notoriously long interview loops with numerous behavioral rounds.',
        overview: {
            about: 'The Goldman Sachs Group, Inc. is a leading global investment banking, securities and investment management firm that provides a wide range of financial services.',
            headquarters: 'New York City, US / Bangalore (Major Tech Hub)',
            size: '45,000+ Employees',
            founded: '1869',
            website: 'goldmansachs.com/careers'
        },
        roles: [
            {
                title: 'Analyst (Software Engineer)',
                ctc: '₹ 22L - 30L',
                base: '₹ 17,50,000 - 22,00,000',
                variable: '20-30% discretionary bonus (Year-end)',
                rsus: 'N/A (Cash heavy)',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.2L - 1.4L'
            },
            {
                title: 'Associate (Senior SWE)',
                ctc: '₹ 38L - 55L',
                base: '₹ 30,00,000 - 45,00,000',
                variable: '30%+ discretionary bonus',
                rsus: 'N/A (Cash/Stock hybrid at higher levels)',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.0L - 2.8L'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular', 'Legacy internal UIs'],
            backend: ['Java', 'Slang (Proprietary language)', 'C++', 'Python'],
            infra: ['SecuraDB', 'Internal Cloud', 'AWS (Migrating)'],
            data: ['Sybase', 'MongoDB', 'Kafka']
        },
        process: [
            {
                step: 'HackerRank (Aptitude + Coding)',
                description: 'Math, Probability, CP (Medium/Hard) and sometimes CS fundamentals. Extremely high cutoff.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Probability', 'Arrays', 'Math']
            },
            {
                step: 'CoderPad / Onsite Loops (4-6 Rounds)',
                description: 'Math-heavy coding (like fraction additions, advanced DSA) + deep Java internals + multiple VP-led behavioral rounds.',
                duration: '6 hours',
                difficulty: 'Expert',
                topics: ['Math/Logic Algorithms', 'Java Core', 'System Design']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: '8.0+ generally preferred for campus. Target schools bias is heavy.',
            backlogs: 'Zero.',
            gap: 'Reviewed stringently.',
            notes: 'Goldman Sachs values raw mathematical intelligence and probability problem-solving often over framework knowledge.'
        },
        culture: {
            wlb: 'Intense. "IB hours" can bleed into engineering. It is common to work 10-12 hour days consistently.',
            remote: 'Strict 5-day RTO. Face time is an unwritten rule of the culture.',
            vibe: 'Extremely competitive and flat. You are surrounded by very smart people, but the pressure to deliver is immense. Year-end bonus heavily dictates total compensation.'
        },
        reality: {
            good: ['Brand name is platinum-tier on a resume', 'Top-tier base pay and massive cash bonuses if you perform well', 'Surrounded by elite talent'],
            bad: ['Legacy proprietary tech (Slang) can pigeonhole you', 'WLB is consistently poor across most teams', 'Strict dress codes and corporate bureaucracy']
        }
    },
    {
        id: 'jpmc',
        name: 'JPMorgan Chase',
        type: 'Finance',
        status: 'Active',
        logo: 'JPM',
        rating: 4.0,
        aiVerdict: 'Massive technology operation disguised as a bank. Heavy Java shop with strong emphasis on security, clean code, and standard DSA.',
        overview: {
            about: 'JPMorgan Chase & Co. is an American multinational finance institution and the largest bank in the United States, operating globally.',
            headquarters: 'New York City, US / Bangalore, Mumbai, Hyderabad (India Hubs)',
            size: '290,000+ Employees (Global)',
            founded: '2000 (Current form)',
            website: 'jpmorganchase.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer (SEP)',
                ctc: '₹ 15L - 20L',
                base: '₹ 13,00,000 - 17,00,000',
                variable: '10-15%',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 95k - 1.1L'
            },
            {
                title: 'Associate / VP (Tech)',
                ctc: '₹ 30L - 60L',
                base: '₹ 25,00,000 - 45,00,000',
                variable: '15-25%',
                rsus: 'N/A',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.8L'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular'],
            backend: ['Java (Spring Boot)', 'Python', 'C++ (Trading)'],
            infra: ['AWS', 'Internal Private Cloud (Gaia)', 'Kubernetes'],
            data: ['Oracle', 'Cassandra', 'Kafka']
        },
        process: [
            {
                step: 'Code for Good (Hackathon) / OA',
                description: 'Campus hires often go through a 24-hour hackathon (CFG). Lateral hires do standard HackerRank tests.',
                duration: '24 hours / 90 mins',
                difficulty: 'Medium',
                topics: ['Hackathon dev', 'DSA', 'Spring Boot']
            },
            {
                step: 'Super Day (3-4 Rounds)',
                description: 'Back-to-back interviews covering DSA, System Design, and behavioral fit. Not as grueling as tech-first FAANG loops.',
                duration: '4 hours',
                difficulty: 'Medium',
                topics: ['OOD', 'Java', 'Data Structures']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: '7.0+ for campus drives.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'The "Code for Good" hackathon is the primary massive entry funnel for freshers in India.'
        },
        culture: {
            wlb: 'Much better than Goldman Sachs in general, though trading desk roles can be intense. Very predictable schedule usually.',
            remote: 'Hybrid/In-office enforced depending on location. 3 days is standard.',
            vibe: 'Massive, structured, and risk-averse. Tech exists to serve the business, so you must understand financial products to advance to VP levels.'
        },
        reality: {
            good: ['Excellent training programs (SEP)', 'Very stable employment with good brand value', 'Better WLB than pure investment banks'],
            bad: ['Tech stack can feel ancient in certain legacy divisions', 'Promotion from Associate to VP takes years of internal networking', 'Strict compliance and firewall rules']
        }
    },
    {
        id: 'tower',
        name: 'Tower Research',
        type: 'Finance',
        status: 'Active',
        logo: 'TOW',
        rating: 4.8,
        aiVerdict: 'High-Frequency Trading (HFT) elite. Demands extreme mastery of C++ internals, OS optimization, and ultra-low latency microsecond-level engineering.',
        overview: {
            about: 'Tower Research Capital is a leading quantitative trading and technology firm that has built some of the fastest automated trading platforms.',
            headquarters: 'New York City, US / Gurgaon (Major India Hub)',
            size: '1,000+ Employees',
            founded: '1998',
            website: 'tower-research.com'
        },
        roles: [
            {
                title: 'Core Engineer (C++)',
                ctc: '₹ 60L - 1Cr+',
                base: '₹ 45,00,000 - 65,00,000',
                variable: 'Massive discretionary bonus (50-100% of base)',
                rsus: 'N/A',
                deductions: 'Highest Bracket',
                inHand: '₹ 3L - 4.5L (Base only)'
            }
        ],
        techStack: {
            frontend: ['React (Internal Dashboards)'],
            backend: ['C++ 17/20 (Core Engine)', 'Python (Data Pipelines)'],
            infra: ['Bare Metal / Custom Hardware', 'FPGA'],
            data: ['KDB+', 'Massive In-Memory Custom Datastores']
        },
        process: [
            {
                step: 'Technical OA',
                description: 'Advanced C++ nuances (templates, memory management), deep OS questions, and complex CP level logic problems.',
                duration: '120 mins',
                difficulty: 'Nightmare',
                topics: ['C++', 'OS', 'Bit Manipulation']
            },
            {
                step: 'Technical Loops (5-6 Rounds)',
                description: 'Extreme grilling on cache coherency, branch prediction, compiler optimizations, kernel bypass, and probability.',
                duration: '5+ hours',
                difficulty: 'Nightmare',
                topics: ['Low Level System Design', 'Network Stack', 'Advanced Math']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: 'Highly skewed towards 9.0+ from IIT/NIT/BITs top branches (CS/Elec).',
            backlogs: 'Zero.',
            gap: 'Needs strong explanation.',
            notes: 'They are looking for the top 0.1% of engineers who understand how a computer executes code at the nanosecond level.'
        },
        culture: {
            wlb: 'Intense but highly rewarding. Performance is strictly measured in milliseconds of optimization and P&L (Profit/Loss).',
            remote: 'In-office strictly.',
            vibe: 'Academic, cutthroat, and elite. You work alongside math olympians and top competitive programmers. No fluff, pure math and speed.'
        },
        reality: {
            good: ['Astronomical compensation (highest liquid cash in India alongside top FAANG)', 'Tackling the hardest engineering problems regarding speed', 'Small, insanely smart teams'],
            bad: ['One bad line of code can lose millions of dollars instantly', 'Intense pressure', 'Very niche industry; hard to pivot to generic web/app dev later']
        }
    },
    {
        id: 'optiver',
        name: 'Optiver',
        type: 'Finance',
        status: 'Active',
        logo: 'OPT',
        rating: 4.8,
        aiVerdict: 'Market making giant. Similar to Tower, focuses heavily on C++ latency, but has a unique mental math and pattern recognition screening process.',
        overview: {
            about: 'Optiver is a proprietary trading firm and market maker for various exchange-listed financial instruments. We provide liquidity to financial markets globally.',
            headquarters: 'Amsterdam, Netherlands / Sydney / Chicago (Global Tech Centers)',
            size: '1,500+ Employees',
            founded: '1986',
            website: 'optiver.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '€120k - €180k+ / AU$200k+ (Relocation standard)',
                base: 'Very High',
                variable: 'Bonus often exceeds base',
                rsus: 'Profit Sharing',
                deductions: 'Local Tax Laws',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['C# / WPF (Legacy Traders)', 'React'],
            backend: ['C++ 20 (Execution)', 'Python (Research)', 'C#'],
            infra: ['Bare Metal Servers exactly next to Exchanges (Colocation)'],
            data: ['Custom Time-Series DBs']
        },
        process: [
            {
                step: 'Cognitive Test (Zap-N) / OA',
                description: '80 mental math questions in 8 minutes. No calculators. It is brutal. Followed by a HackerRank test for C++/Algorithms.',
                duration: '90 mins',
                difficulty: 'Nightmare',
                topics: ['Mental Arithmetic', 'Sequences', 'C++']
            },
            {
                step: 'Technical Loops (4 Rounds)',
                description: 'Deep dive into object-oriented design for trading systems, low-level OS details, and network protocols (TCP/UDP internals).',
                duration: '4 hours',
                difficulty: 'Expert',
                topics: ['Networking', 'OS', 'System Design']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: 'Top decile of top universities heavily preferred.',
            backlogs: 'Zero.',
            gap: 'Case by Case.',
            notes: 'Optiver frequently recruits out of India for their Sydney or Amsterdam offices.'
        },
        culture: {
            wlb: 'Trading hours dictate your schedule. If the market is open, you are on. When it closes, you go home. Very predictable intensity.',
            remote: 'Strictly in-office.',
            vibe: 'Direct, Dutch/Aussie pragmatism. High risk, high reward. Feedback is brutal but transparent.'
        },
        reality: {
            good: ['Massive relocation packages and compensation', 'You actually see the financial impact of your code instantly', 'Free breakfast/lunch and high-end perks'],
            bad: ['Mental math test knocks out 90% of candidates immediately', 'Extremely difficult barrier to entry', 'Stressful during high market volatility']
        }
    },
    {
        id: 'deshaw',
        name: 'D. E. Shaw',
        type: 'Finance',
        status: 'Active',
        logo: 'DES',
        rating: 4.7,
        aiVerdict: 'Quantitative tech pioneer. Interviews feel like an oral exam in a PhD program. They value elite abstract thinking over framework knowledge.',
        overview: {
            about: 'The D. E. Shaw group is a global investment and technology development firm. A pioneer in quantitative investing.',
            headquarters: 'New York City, US / Hyderabad (Major Hub)',
            size: '2,000+ Employees',
            founded: '1988',
            website: 'deshaw.com'
        },
        roles: [
            {
                title: 'Member of Technical Staff (MTS)',
                ctc: '₹ 45L - 65L',
                base: '₹ 25,00,000 - 32,00,000',
                variable: '₹ 15L - 25L (Bonus)',
                rsus: 'N/A',
                deductions: 'Tax, PF',
                inHand: '₹ 1.5L - 2.0L'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular'],
            backend: ['Python', 'Java', 'C++', 'Go'],
            infra: ['Proprietary Cloud', 'AWS'],
            data: ['KDB+', 'Spark', 'Hadoop']
        },
        process: [
            {
                step: 'Technical Screen / Subjective Test',
                description: 'Mix of tough algorithm programming, OS concepts, and very subjective architecture design written answers.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Algorithms', 'OS', 'Architecture']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: 'Deep grilling on your resume, foundational CS (compilers, threading, memory), and complex puzzle-like DSA.',
                duration: '4-5 hours',
                difficulty: 'Expert',
                topics: ['CS Theory', 'Puzzles', 'DSA']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: '8.5+ generally expected from top-tier colleges.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'They are famous for asking Fermi estimation questions (e.g., "How many piano tuners are in Chicago?") to test analytical thinking.'
        },
        culture: {
            wlb: 'Intense but highly intellectual. It feels more like a research lab than a frantic software factory.',
            remote: 'In-office primarily.',
            vibe: 'Academic, quiet, and hyper-intelligent. They read papers and experiment heavily before committing to code.'
        },
        reality: {
            good: ['One of the best paying tech companies in Hyderabad', 'Work with brilliant ex-academics', 'The brand carries immense weight in FinTech'],
            bad: ['Elitist culture (very hard to get in without a top pedigree)', 'Tech stack can rely heavily on internal proprietary tools', 'Bonus heavy compensation structure']
        }
    },
    {
        id: 'morgan',
        name: 'Morgan Stanley',
        type: 'Finance',
        status: 'Active',
        logo: 'MOR',
        rating: 4.0,
        aiVerdict: 'Classic investment bank IT. Heavy reliance on Java and C#. Interviews are standard, though slightly more academic than average product firms.',
        overview: {
            about: 'Morgan Stanley is an American multinational investment bank and financial services company headquartered at 1585 Broadway in Midtown Manhattan, New York City.',
            headquarters: 'New York City, US / Mumbai, Bangalore (India Hubs)',
            size: '80,000+ Employees',
            founded: '1935',
            website: 'morganstanley.com'
        },
        roles: [
            {
                title: 'Technology Analyst',
                ctc: '₹ 16L - 22L',
                base: '₹ 14,00,000 - 18,00,000',
                variable: '10-20%',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.0L - 1.25L'
            },
            {
                title: 'Associate / Manager',
                ctc: '₹ 35L - 50L',
                base: '₹ 28,00,000 - 40,00,000',
                variable: '15-25%',
                rsus: 'N/A',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.5L'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React'],
            backend: ['Java', 'C#', 'C++', 'Python'],
            infra: ['Treadmill (Internal Cloud)', 'Azure', 'Linux grids'],
            data: ['Db2', 'Sybase', 'KDB+']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Standard DSA problems + deep MCQ section on Core CS (Java internals, OS, DB theory).',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['DSA', 'Java Core', 'OS']
            },
            {
                step: 'Technical Loops (3-4 Rounds)',
                description: 'Focus heavily on Object-Oriented Design, Java/Spring internals, Multithreading, and system scalability.',
                duration: '4 hours',
                difficulty: 'Medium',
                topics: ['OOD', 'Concurrency', 'Java Runtime']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'If you list Java on your resume, expect deep questions about the JVM, Garbage Collection, and concurrent collections.'
        },
        culture: {
            wlb: 'Reasonable for most enterprise application teams. Front-office trading tech teams work longer hours.',
            remote: 'Hybrid. Mandated 3 days in office.',
            vibe: 'Corporate, structured, and formal. Less "bro-culture" than some other IBs, more focus on steady long-term engineering.'
        },
        reality: {
            good: ['Great name value', 'Solid training programs for freshers', 'Relatively stable even in downturns compared to tech startups'],
            bad: ['Heavy use of proprietary legacy tech (e.g., A+ language)', 'Promotions are heavily tied to tenure rather than pure impact', 'Bureaucracy']
        }
    },
    {
        id: 'bloomberg',
        name: 'Bloomberg',
        type: 'Finance',
        status: 'Active',
        logo: 'BLO',
        rating: 4.2,
        aiVerdict: 'The terminal rules all. Massive C++ codebase processing insane amounts of real-time data. Interviews focus heavily on data structures and system architecture.',
        overview: {
            about: 'Bloomberg L.P. is a privately held financial, software, data, and media company headquartered in Midtown Manhattan, New York City.',
            headquarters: 'New York City, US / London',
            size: '20,000+ Employees',
            founded: '1981',
            website: 'bloomberg.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '£80k - £120k+ / $160k+ (Relocation/Global standard)',
                base: 'Very High',
                variable: 'Bonus',
                rsus: 'N/A (Private company)',
                deductions: 'Local Tax',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['JavaScript', 'TypeScript', 'Custom UI Frameworks'],
            backend: ['C++', 'Python', 'Java'],
            infra: ['Custom Bare Metal', 'OpenStack'],
            data: ['Comdb2 (Custom)', 'Redis', 'Kafka', 'Hadoop']
        },
        process: [
            {
                step: 'Phone Screen',
                description: 'Standard DSA (usually trees or graphs) using a collaborative editor.',
                duration: '45 mins',
                difficulty: 'Medium',
                topics: ['Trees', 'Graphs', 'HashMaps']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: '2 Coding Rounds (Hard), 1 System Design (focus on low-latency data streaming), 1 HR/Behavioral.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Data Streaming Tech', 'Concurrency', 'DSA']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: 'No strict cutoff. High emphasis on C++/Systems knowledge.',
            backlogs: 'Zero.',
            gap: 'Case by Case.',
            notes: 'Bloomberg frequently recruits out of top Indian colleges for its London and NY offices.'
        },
        culture: {
            wlb: 'Good to great. Predictable hours. Extremely strong engineering culture.',
            remote: 'Strict RTO. Face time in their iconic offices is required.',
            vibe: 'Tech-centric. It is an engineering company that sells data to finance people, not a finance company that hires engineers. Open floor plans, intense focus.'
        },
        reality: {
            good: ['Top tier compensation (cash heavy since there is no stock)', 'Unmatched engineering scale in real-time data', 'London/NY relocation opportunities'],
            bad: ['You will work on proprietary tech (Comdb2, BDE)', 'The Terminal UI is ancient and you must build for it', 'Lack of public stock/options limits explosive wealth generation']
        }
    },
    {
        id: 'visa',
        name: 'Visa',
        type: 'Product',
        status: 'Active',
        logo: 'VIS',
        rating: 4.1,
        aiVerdict: 'Payments infrastructure. Stability and 99.999% uptime are paramount. Process values system design around high-availability over tricky algorithms.',
        overview: {
            about: 'Visa Inc. is an American multinational financial services corporation headquartered in San Francisco, California. It facilitates electronic funds transfers throughout the world.',
            headquarters: 'Foster City, California, US / Bangalore (Major Hub)',
            size: '26,000+ Employees',
            founded: '1958',
            website: 'visa.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 20L - 25L',
                base: '₹ 16,000 - 18,00,000',
                variable: '10-15%',
                rsus: 'Sign-on usually',
                deductions: 'Tax, PF',
                inHand: '₹ 1.1L - 1.25L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 35L - 50L',
                base: '₹ 28,00,000 - 38,00,000',
                variable: '15%',
                rsus: '$20k - $40k over 4 years',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.8L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'Java JSP (Legacy)'],
            backend: ['Java', 'Golang', 'C++'],
            infra: ['VisaNet (Proprietary highly secure networks)', 'Kafka', 'Docker'],
            data: ['Hadoop', 'Db2', 'Cassandra']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Mix of basic aptitude, CS fundamentals (MCQs), and 2 Medium coding questions.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Strings', 'Arrays', 'MCQs']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'Standard DSA, deep dive into Object-Oriented Design, and questions specifically around building fault-tolerant systems.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['OOD', 'Fault Tolerance', 'Java']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Visa is highly favored for candidates looking for FAANG-like prestige but with much better job security and lower baseline stress.'
        },
        culture: {
            wlb: 'Excellent. Extremely stable and predictable unless you are on the core VisaNet incident response teams.',
            remote: 'Hybrid. Usually 2-3 days office.',
            vibe: 'Mature, slightly bureaucratic. The mantra is "It must not fail," so deployments move slowly through rigorous testing and compliance.'
        },
        reality: {
            good: ['Incredible work-life balance', 'Job security is top tier', 'Technically challenging problems surrounding global transaction scale'],
            bad: ['Tech stack evolves very slowly due to risk aversion', 'Compensation is lower than modern Fintechs (Stripe, Razorpay)', 'Process heavy']
        }
    },
    {
        id: 'mastercard',
        name: 'Mastercard',
        type: 'Product',
        status: 'Active',
        logo: 'MAS',
        rating: 4.1,
        aiVerdict: 'Very similar to Visa. Strong emphasis on secure Java applications and managing legacy to cloud transformations.',
        overview: {
            about: 'Mastercard Inc. is an American multinational financial services corporation headquartered in Purchase, New York.',
            headquarters: 'Purchase, New York, US / Pune, Gurgaon (India Hubs)',
            size: '29,000+ Employees',
            founded: '1966',
            website: 'mastercard.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer I',
                ctc: '₹ 15L - 22L',
                base: '₹ 13,00,000 - 18,00,000',
                variable: '10%',
                rsus: 'Occasional',
                deductions: 'Tax, PF',
                inHand: '₹ 90k - 1.15L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 30L - 45L',
                base: '₹ 25,00,000 - 35,00,000',
                variable: '15%',
                rsus: 'Varies',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.1L'
            }
        ],
        techStack: {
            frontend: ['Angular', 'Web Components'],
            backend: ['Java (Spring)', 'C++ (Core Networks)'],
            infra: ['Cloud Foundry', 'Azure', 'On-Premise'],
            data: ['Oracle', 'PostgreSQL', 'Redis']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Coding test focused on algorithms. Easy to medium difficulty.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Basic DSA']
            },
            {
                step: 'Onsite Loop (2-3 Rounds)',
                description: 'A mix of core Java concepts, system design basics, and behavioral questions focusing on collaborative problem solving.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['Java Core', 'System Design', 'Behavioral']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Questions heavily revolve around secure coding practices, given the domain.'
        },
        culture: {
            wlb: 'Very respectful and balanced. Often viewed as a great long-term career company.',
            remote: 'Hybrid model.',
            vibe: 'Progressive corporate culture but slow engineering speed due to strict regulations.'
        },
        reality: {
            good: ['Great culture and benefits', 'Job stability is phenomenal', 'Puts a lot of emphasis on employee well-being'],
            bad: ['Comp growth can stall at middle management', 'You will likely work on maintaining or migrating older, massive monoliths', 'Slower tech adoption']
        }
    },
    {
        id: 'paypal',
        name: 'PayPal',
        type: 'Product',
        status: 'Active',
        logo: 'PAY',
        rating: 4.2,
        aiVerdict: 'Pioneer of FinTech. Interviews are standard DSA and System Design. Heavy emphasis on Java and NodeJS at scale.',
        overview: {
            about: 'PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system.',
            headquarters: 'San Jose, California, US / Chennai, Bangalore (India Hubs)',
            size: '27,000+ Employees',
            founded: '1998',
            website: 'paypal.com'
        },
        roles: [
            {
                title: 'Software Engineer (SE 1)',
                ctc: '₹ 24L - 32L',
                base: '₹ 15,00,000 - 20,00,000',
                variable: '10%',
                rsus: '$15k - $25k',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.05L - 1.3L'
            },
            {
                title: 'Software Engineer (SE 2)',
                ctc: '₹ 40L - 55L',
                base: '₹ 25,00,000 - 35,00,000',
                variable: '15%',
                rsus: '$40k - $60k',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['React', 'Kraken JS', 'Node.js'],
            backend: ['Java', 'C++', 'Python'],
            infra: ['GCP', 'AWS', 'Docker'],
            data: ['Oracle', 'Couchbase', 'ElasticSearch']
        },
        process: [
            {
                step: 'HackerRank OA',
                description: '2-3 Medium/Hard coding questions. Standard algorithms.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Arrays', 'Graphs', 'DP']
            },
            {
                step: 'Technical Loops (4 Rounds)',
                description: '2 Coding Rounds (Leetcode Medium/Hard), 1 System Design (Focus on transaction consistency), 1 Hiring Manager.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Algorithms', 'HLD', 'Transaction Locks']
            }
        ],
        syllabus: [
            {
                subject: 'Advanced Algorithms & Data Structures',
                topics: ['Advanced Graph Algorithms', 'Dynamic Programming', 'Trie & Segment Trees', 'Time & Space Complexity Optimization', 'Bit Manipulation']
            },
            {
                subject: 'Low-Level Systems & Performance',
                topics: ['C++ Advanced Concepts (Templates, Smart Pointers)', 'Memory Management & Garbage Collection', 'Multithreading & Concurrency', 'Network Programming (Sockets, TCP/UDP)', 'Operating Systems Internals']
            },
            {
                subject: 'Mathematics & Quantitative Analysis',
                topics: ['Probability & Statistics', 'Linear Algebra', 'Calculus', 'Brainteasers & Logic Puzzles']
            },
            {
                subject: 'System Design',
                topics: ['Low Latency Architecture', 'High Throughput Systems', 'Order Book Design', 'Distributed Systems Configuration']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'PayPal India handles massive core engineering operations, not just support.'
        },
        culture: {
            wlb: 'Generally excellent. Chennai office is known for great amenities and balanced working hours.',
            remote: 'Hybrid. Flex system.',
            vibe: 'A mature tech company. They pioneered a lot of open source NodeJS architectures. Very inclusive and stable.'
        },
        reality: {
            good: ['Great ESOP plans and stock purchase programs', 'Work life balance is consistently praised', 'Strong footprint in Chennai if looking outside Bangalore'],
            bad: ['Losing market grip to newer agile competitors (Stripe, Apple Pay)', 'Internal tooling can be archaic inside older Java monoliths', 'Layoffs have impacted them periodically recently']
        }
    }
];
