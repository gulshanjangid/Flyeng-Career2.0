import { CompanyData } from './types';

export const unicornCompanies: CompanyData[] = [
    {
        id: 'razorpay',
        name: 'Razorpay',
        type: 'Startup',
        status: 'Active',
        logo: 'RAZ',
        rating: 4.6,
        aiVerdict: 'Elite FinTech engineering. Strong emphasis on system design for handling extreme concurrency (flash sales) and zero-downtime deployments. Heavy use of Go.',
        overview: {
            about: 'Razorpay is an Indian payment gateway company that provides payment solutions to online merchants in India. Known as the "Stripe of India".',
            headquarters: 'Bangalore, India',
            size: '3,000+ Employees',
            founded: '2014',
            website: 'razorpay.com'
        },
        roles: [
            {
                title: 'Software Engineer (SDE 1)',
                ctc: '₹ 24L - 32L',
                base: '₹ 16,00L - 20,00L',
                variable: '10% target bonus',
                rsus: 'ESOPs (Varies widely)',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.1L - 1.3L'
            },
            {
                title: 'Software Development Engineer II (SDE 2)',
                ctc: '₹ 35L - 55L',
                base: '₹ 28,00L - 35,00L',
                variable: '15% target bonus',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['React', 'Redux', 'TypeScript', 'Tailwind CSS'],
            backend: ['Go (Primary)', 'PHP (Legacy)', 'Python', 'Node.js'],
            infra: ['AWS', 'Kubernetes', 'Istio', 'Docker'],
            data: ['MySQL', 'PostgreSQL', 'Redis', 'Kafka', 'ClickHouse']
        },
        process: [
            {
                step: 'Machine Coding (90-120 mins)',
                description: 'Build a fully functional backend system (e.g., split-wise, parking lot) or frontend app from scratch. Must have working tests.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Object Oriented Design', 'TDD', 'Clean Code']
            },
            {
                step: 'DSA & System Design (2-3 Rounds)',
                description: 'Focus heavily on problem-solving, concurrency, and HLD for transaction systems.',
                duration: '3 hours',
                difficulty: 'Expert',
                topics: ['Concurrency', 'Distributed Locks', 'Idempotency']
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
            cgpa: 'No strict cutoff but prefers Tier 1/2 colleges for campus drives.',
            backlogs: 'None allowed.',
            gap: 'Accepted if justified.',
            notes: 'The machine coding round is legendary for being strict. Code must compile and be extensible.'
        },
        culture: {
            wlb: 'Intense during flash sales (Diwali), but generally respectful and flexible. High autonomy.',
            remote: 'Hybrid. Usually 2-3 days in office.',
            vibe: 'Extremely engineering-focused. Culture of writing design docs (RFCs). High bar for technical excellence.'
        },
        reality: {
            good: ['Incredible learning curve for FinTech', 'Great compensation', 'Strong engineering blog and brand value'],
            bad: ['PHP monolith (API) still exists and needs maintenance', 'On-call can be brutal during peak transaction events', 'ESOP liquidity events are rare']
        }
    },
    {
        id: 'cred',
        name: 'CRED',
        type: 'Startup',
        status: 'Active',
        logo: 'CRE',
        rating: 4.4,
        aiVerdict: 'Design and performance obsessed. Frontend polish must be flawless; backend handles complex financial state machines. High trust environment.',
        overview: {
            about: 'CRED is an Indian fintech company, based in Bangalore, which operates a reward-based credit card payments app.',
            headquarters: 'Bangalore, India',
            size: '1,500+ Employees',
            founded: '2018',
            website: 'cred.club'
        },
        roles: [
            {
                title: 'Frontend Engineer / Backend Engineer',
                ctc: '₹ 30L - 50L (High Base)',
                base: '₹ 25,00L - 35,00L',
                variable: 'Performance driven',
                rsus: 'ESOPs (Generous grants)',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.2L'
            },
            {
                title: 'Senior Engineer / Staff',
                ctc: '₹ 60L - 1Cr+',
                base: '₹ 45,00L - 60,00L',
                variable: 'Performance driven',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.8L - 3.5L'
            }
        ],
        techStack: {
            frontend: ['React Native', 'React', 'Framer Motion', 'TypeScript'],
            backend: ['Java (Primary)', 'Go', 'Node.js'],
            infra: ['AWS', 'Kubernetes'],
            data: ['DynamoDB', 'PostgreSQL', 'Redis', 'Kafka']
        },
        process: [
            {
                step: 'Take-home Assignment / Machine Coding',
                description: 'Frontend: Recreate a complex, animated UI. Backend: Build a robust, concurrent API. Extremely high standards for quality.',
                duration: '48 hours (Take-home)',
                difficulty: 'Hard',
                topics: ['UI/UX Polish', 'Concurrency', 'API Design']
            },
            {
                step: 'Technical & Culture (3-4 Rounds)',
                description: 'Deep dive into your assignment, system design (for backend), and a heavy focus on high-trust culture fit.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Architecture', 'Product Sense', 'Culture Fit']
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
            cgpa: 'Does not screen by CGPA. Screens by project quality and GitHub.',
            backlogs: 'Not checked specifically, but prefer smooth academics.',
            gap: 'Accepted.',
            notes: 'If interviewing for Frontend, your animation and CSS skills must be top 1%.'
        },
        culture: {
            wlb: 'High output expected, but true "high trust" model. No tracking, take leave when needed.',
            remote: 'Hybrid/In-office preferred for collaboration, but flexible.',
            vibe: 'Design-first, elitist (in brand positioning). Best office in Bangalore (feels like a premium lounge). High expectation of ownership.'
        },
        reality: {
            good: ['Incredible office and perks', 'Compensation is almost entirely high-cash base', 'Work with elite designers and engineers'],
            bad: ['Business model profitability is often questioned externally', 'High pressure to deliver pixel-perfect products', 'Can be an echo chamber']
        }
    },
    {
        id: 'zepto',
        name: 'Zepto',
        type: 'Startup',
        status: 'Active',
        logo: 'ZEP',
        rating: 4.1,
        aiVerdict: 'Hyper-growth logistics. You must thrive in chaos. Systems engineering focuses heavily on routing, supply chain over-optimization, and ultra-low latency.',
        overview: {
            about: 'Zepto is a quick commerce startup in India delivering groceries in 10 minutes through a network of dark stores.',
            headquarters: 'Mumbai (HQ) / Bangalore (Tech Hub)',
            size: '2,000+ Employees',
            founded: '2021',
            website: 'zeptonow.com'
        },
        roles: [
            {
                title: 'SDE 1',
                ctc: '₹ 18L - 25L',
                base: '₹ 14,00L - 18,00L',
                variable: 'Sign-on/Performance',
                rsus: 'ESOPs',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 95k - 1.2L'
            },
            {
                title: 'SDE 2',
                ctc: '₹ 30L - 45L',
                base: '₹ 25,00L - 35,00L',
                variable: '10-15%',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.5L - 2.1L'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js', 'React Native'],
            backend: ['Python (Django/FastAPI)', 'Go', 'Node.js'],
            infra: ['AWS', 'Kubernetes'],
            data: ['PostgreSQL', 'Redis', 'Kafka', 'ElasticSearch']
        },
        process: [
            {
                step: 'DSA & Algo (1-2 Rounds)',
                description: 'Standard technical rounds focusing heavily on arrays, routing algorithms (graph theory), and caching strategy.',
                duration: '60 mins each',
                difficulty: 'Medium',
                topics: ['Graphs', 'Dynamic Programming', 'Caching']
            },
            {
                step: 'System Design & Hiring Manager',
                description: 'Focus on designing low-latency systems (e.g., "Design a 10-min delivery dispatch system").',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['HLD', 'Geospatial queries', 'Supply Chain']
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
            cgpa: 'Standard 7.0+ for campus.',
            backlogs: '0 active.',
            gap: 'Accepted.',
            notes: 'Fastest growing unicorn. They hire people who can ship quickly above all else.'
        },
        culture: {
            wlb: 'Notoriously challenging. It is a 10-minute delivery startup; the tech teams mirror that urgency.',
            remote: 'Mostly in-office (Bangalore/Mumbai).',
            vibe: 'Extremely fast-paced "hustle" culture. Young founders, massive ambition, hyper-growth chaos.'
        },
        reality: {
            good: ['Massive ESOP upside if the company scales profitably', 'Learn how to build for extreme real-world physical constraints', 'Fast promotions'],
            bad: ['Work-life balance is almost non-existent', 'High burnout rate', 'Things break often and you fix them fast']
        }
    },
    {
        id: 'zomato',
        name: 'Zomato',
        type: 'Product',
        status: 'Active',
        logo: 'ZOM',
        rating: 4.3,
        aiVerdict: 'Pragmatic engineering. The interview focuses on practical problem solving and product sensibility rather than purely theoretical DSA.',
        overview: {
            about: 'Zomato is an Indian multinational restaurant aggregator and food delivery company.',
            headquarters: 'Gurgaon, Haryana, India',
            size: '5,000+ Employees',
            founded: '2008',
            website: 'zomato.com'
        },
        roles: [
            {
                title: 'Software Development Engineer I',
                ctc: '₹ 20L - 30L',
                base: '₹ 15,00L - 22,00L',
                variable: 'Performance bonus',
                rsus: 'ESOPs',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.0L - 1.4L'
            },
            {
                title: 'Software Development Engineer II',
                ctc: '₹ 35L - 55L',
                base: '₹ 30,00L - 40,00L',
                variable: 'Performance bonus',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.4L'
            }
        ],
        techStack: {
            frontend: ['React', 'React Native', 'Webpack'],
            backend: ['Java', 'Go', 'PHP (Legacy APIs)', 'Python (AI/ML)'],
            infra: ['AWS', 'Kubernetes'],
            data: ['Redis', 'PostgreSQL', 'Kafka', 'Snowflake']
        },
        process: [
            {
                step: 'Machine Coding / Take-home',
                description: 'Build a functional application (like a movie booking system or food delivery cart logic) in 2 hours with running test cases.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Machine Coding', 'OOD', 'Clean Code']
            },
            {
                step: 'Design & Culture (2-3 Rounds)',
                description: 'System design for scale (Blinkit integration, surge pricing) and a founder/VP level culture fit round.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['HLD', 'Scalability', 'Product Mindset']
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
            cgpa: '7.0+ for campus drives.',
            backlogs: 'Zero active.',
            gap: 'Accepted.',
            notes: 'High emphasis on "Founder Mentality". Deeply values people who understand the product impact of their code.'
        },
        culture: {
            wlb: 'Intense during major events (NYE, IPL), but overall decent compared to early startup days.',
            remote: 'In-office presence required frequently.',
            vibe: 'Quirky, bold marketing, high transparency. CEO Deepinder Goyal sets a very direct, product-obsessed tone.'
        },
        reality: {
            good: ['Stock performance has been excellent recently', 'High engineering standards', 'Acquisition of Blinkit provides massive new scale challenges'],
            bad: ['Gurgaon HQ is a geographical limit for some', 'Legacy PHP codebase in core Zomato needs constant refactoring', 'Pace can be exhausting']
        }
    },
    {
        id: 'swiggy',
        name: 'Swiggy',
        type: 'Product',
        status: 'Active',
        logo: 'SWI',
        rating: 4.4,
        aiVerdict: 'Heavy Go/Java backend focus. Interviews prioritize algorithmic efficiency and managing race conditions in distributed systems (delivery assignment).',
        overview: {
            about: 'Swiggy is India\'s leading on-demand delivery platform with a vision to elevate the quality of life for the urban consumer by offering unparalleled convenience.',
            headquarters: 'Bangalore, India',
            size: '5,000+ Employees',
            founded: '2014',
            website: 'swiggy.com'
        },
        roles: [
            {
                title: 'SDE-1',
                ctc: '₹ 22L - 32L',
                base: '₹ 15,00L - 22,00L',
                variable: '10% target',
                rsus: 'ESOPs',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.0L - 1.4L'
            },
            {
                title: 'SDE-2',
                ctc: '₹ 35L - 60L',
                base: '₹ 28,00L - 45,00L',
                variable: '15% target',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.7L - 2.6L'
            }
        ],
        techStack: {
            frontend: ['React', 'React Native', 'TypeScript'],
            backend: ['Java', 'Go', 'Python'],
            infra: ['AWS', 'Kubernetes'],
            data: ['PostgreSQL', 'Redis', 'Cassandra', 'Spark']
        },
        process: [
            {
                step: 'Machine Coding (2 Hours)',
                description: 'Write extensible code for a given problem statement (e.g., parking lot, delivery assignment). Code MUST be modular and follow SOLID principles.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['LLD', 'Design Patterns', 'SOLID']
            },
            {
                step: 'Technical & HM (3 Rounds)',
                description: '1 pure DSA round, 1 System Design (HLD - Design Instamart/Swiggy), 1 Hiring Manager.',
                duration: '3-4 hours',
                difficulty: 'Expert',
                topics: ['DSA', 'Distributed Systems', 'Behavioral']
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
            backlogs: 'Zero active.',
            gap: 'Accepted if justified.',
            notes: 'Swiggy\'s machine coding round is a strong filter. Passing it usually guarantees a full onsite loop.'
        },
        culture: {
            wlb: 'Respectable, though team-dependent. Instamart teams work significantly harder due to rapid expansion.',
            remote: 'Flexible hybrid model (Swiggy "Anywhere" for some roles).',
            vibe: 'Highly technical. Strong internal tech talks and engineering blog. Very data-driven.'
        },
        reality: {
            good: ['Great technical brand name', 'Solve complex geospatial and logistical routing problems at massive scale', 'Strong alumni network'],
            bad: ['ESOPs have taken long to realize value (pre-IPO)', 'High attrition at mid-management levels', 'Fierce competition with Zomato keeps pressure high']
        }
    },
    {
        id: 'phonepe',
        name: 'PhonePe',
        type: 'Product',
        status: 'Active',
        logo: 'PHO',
        rating: 4.5,
        aiVerdict: 'Volume over everything. Interviews test your ability to design systems that handle massive concurrency without failing (UPI scale).',
        overview: {
            about: 'PhonePe is an Indian digital payments and financial services company headquartered in Bangalore, India.',
            headquarters: 'Bangalore, India',
            size: '5,000+ Employees',
            founded: '2015',
            website: 'phonepe.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 35L - 50L (High Base)',
                base: '₹ 25,00L - 32,00L',
                variable: 'Performance bonus',
                rsus: 'ESOPs',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.5L - 2.0L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 55L - 80L',
                base: '₹ 40,00L - 55,00L',
                variable: 'Performance bonus',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.4L - 3.2L'
            }
        ],
        techStack: {
            frontend: ['React Native', 'React', 'TypeScript'],
            backend: ['Java (Spring Boot)', 'Go', 'C++ (Core libs)'],
            infra: ['Own Datacenters (Moved off AWS)', 'Kubernetes'],
            data: ['HBase', 'Aerospike', 'MySQL', 'Kafka']
        },
        process: [
            {
                step: 'Machine Coding (2 Hours)',
                description: 'Build a concurrent application (like an in-memory queue or splitwise). Extremely high bar for concurrency and cleanliness.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Concurrency', 'Multithreading', 'OOD']
            },
            {
                step: 'System Design & DSA (3 Rounds)',
                description: 'Heavy focus on databases, scaling stateful systems, indexing, and how UPI works under the hood.',
                duration: '3 hours',
                difficulty: 'Expert',
                topics: ['Database Internals', 'HLD', 'DSA']
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
            cgpa: '8.0+ generally preferred for freshers.',
            backlogs: 'None.',
            gap: 'Reviewed strictly.',
            notes: 'PhonePe relies heavily on Java. Deep knowledge of JVM internals, GC tuning, and multithreading is mandatory for backend roles.'
        },
        culture: {
            wlb: 'Good to moderate. The engineering team is mature and focuses on doing things right rather than extremely fast hacks.',
            remote: 'Strict RTO policy (5 days in office mandated recently).',
            vibe: 'Extremely hardcore backend engineering. They successfully moved their entire infrastructure off AWS to their own data centers (massive feat).'
        },
        reality: {
            good: ['Top of the market cash compensation in India', 'Unmatched scale (processing billions of UPI transactions)', 'Elite engineering peers'],
            bad: ['Strict 5-day return to office mandate', 'Can be very process-heavy at times', 'Getting promoted to Staff+ is very difficult']
        }
    },
    {
        id: 'groww',
        name: 'Groww',
        type: 'Startup',
        status: 'Active',
        logo: 'GRO',
        rating: 4.4,
        aiVerdict: 'High-speed FinTech. Interviews focus on secure, transactional APIs. Spring Boot and React/Next.js heavy.',
        overview: {
            about: 'Groww is an Indian online investment platform headquartered in Bangalore. It allows investors to open an account and transact in mutual funds and stocks online.',
            headquarters: 'Bangalore, India',
            size: '1,500+ Employees',
            founded: '2016',
            website: 'groww.in'
        },
        roles: [
            {
                title: 'SDE 1',
                ctc: '₹ 20L - 25L',
                base: '₹ 15,00L - 18,00L',
                variable: 'Variable based on performance',
                rsus: 'ESOPs',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.0L - 1.2L'
            },
            {
                title: 'SDE 2',
                ctc: '₹ 35L - 50L',
                base: '₹ 25,00L - 35,00L',
                variable: 'Target bonus',
                rsus: 'ESOPs (Generous)',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.6L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js', 'React Native'],
            backend: ['Java (Spring Boot)', 'Go', 'Node.js'],
            infra: ['GCP', 'Kubernetes'],
            data: ['PostgreSQL', 'Redis', 'Kafka']
        },
        process: [
            {
                step: 'Online Assessment / Initial Screen',
                description: 'Standard DSA and Spring Boot basics (if backend). Medium difficulty.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['DSA', 'Java Internals', 'React Internals']
            },
            {
                step: 'Technical Deep Dive (3 Rounds)',
                description: '2 LLD/DSA rounds, 1 HLD/System Design focusing on trading apps (websocket streams, order matching).',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['System Design', 'WebSockets', 'Transactional DBs']
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
            backlogs: 'Zero active.',
            gap: 'Accepted.',
            notes: 'High preference for candidates with prior Fintech or high-scale consumer app experience.'
        },
        culture: {
            wlb: 'Great work-life balance compared to competitors. Very employee-friendly.',
            remote: 'Hybrid. 2-3 days in office.',
            vibe: 'Product-centric, highly focused on simplifying finance. Unpretentious leadership and strong execution.'
        },
        reality: {
            good: ['Great culture and WLB', 'Rapid growth trajectory (beat Zerodha in active users)', 'Strong compensation'],
            bad: ['Domain can be dry if you don\'t like finance', 'Tech stack is standard (Java/Spring) and less experimental', 'ESOPs are tied up until an IPO']
        }
    },
    {
        id: 'zerodha',
        name: 'Zerodha',
        type: 'Startup',
        status: 'Inactive',
        logo: 'ZER',
        rating: 4.8,
        aiVerdict: 'Extremely rare hiring. The "tech team is only 30 people" myth is mostly true. They hire strictly senior hackers with deep open-source or systems expertise.',
        overview: {
            about: 'Zerodha is an Indian financial services company that offers retail and institutional broking, currencies and commodities trading, mutual funds, and bonds.',
            headquarters: 'Bangalore, India',
            size: '1,000+ (Tech team is < 40)',
            founded: '2010',
            website: 'zerodha.com'
        },
        roles: [
            {
                title: 'Hacker (Core Tech Team)',
                ctc: '₹ 50L - 1Cr+',
                base: '₹ 50,00L+',
                variable: 'Irrelevant',
                rsus: 'Phantom Stock / Cash bonuses based on profit',
                deductions: 'Highest Tax Bracket',
                inHand: '₹ 3L+'
            }
        ],
        techStack: {
            frontend: ['Vue.js', 'React (Kite)'],
            backend: ['Go (Primary)', 'Python', 'Rust', 'C++'],
            infra: ['AWS', 'Bare Metal', 'PostgreSQL'],
            data: ['Redis', 'Kafka', 'ClickHouse', 'TimescaleDB']
        },
        process: [
            {
                step: 'The CTO/Hacker Screen',
                description: 'No formal process. You are usually hired through a referral, by contributing to their open-source projects (FOSS), or writing a brilliant blog post.',
                duration: 'Varies',
                difficulty: 'Nightmare',
                topics: ['Low level systems', 'Concurrency', 'FOSS']
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
            cgpa: 'Irrelevant.',
            backlogs: 'Irrelevant.',
            gap: 'Irrelevant.',
            notes: 'They do not hire absolute freshers for the core tech team (Kite). You need to be an exceptional open-source contributor.'
        },
        culture: {
            wlb: 'Excellent. No arbitrary deadlines. Market hours dictate the rush. Very chill outside market hours.',
            remote: 'Highly remote friendly for the tech team.',
            vibe: 'Extremely anti-corporate. FOSS obsessed. Bootstrapped, profitable, and zero external VC pressure.'
        },
        reality: {
            good: ['Probably the most elite, exclusive tech team in India', 'Incredible tech freedom and massive scale', 'No VC pressure ensures job safety and calm'],
            bad: ['Nearly impossible to get hired', 'No standard promo path or corporate ladder', 'If you break something during market hours, billions are at stake']
        }
    },
    {
        id: 'oyo',
        name: 'OYO',
        type: 'Startup',
        status: 'Active',
        logo: 'OYO',
        rating: 3.8,
        aiVerdict: 'Standard tech-startup interviews. Heavy Java/Spring focus for backend. Good stepping stone but high attrition.',
        overview: {
            about: 'OYO Rooms, also known as OYO Hotels & Homes, is an Indian multinational hospitality chain of leased and franchised hotels, homes, and living spaces.',
            headquarters: 'Gurgaon, Haryana, India',
            size: '5,000+ Employees',
            founded: '2012',
            website: 'oyorooms.com'
        },
        roles: [
            {
                title: 'SDE 1',
                ctc: '₹ 12L - 18L',
                base: '₹ 10,00L - 14,00L',
                variable: 'Performance',
                rsus: 'ESOPs (Low value currently)',
                deductions: 'Tax, PF',
                inHand: '₹ 75k - 95k'
            },
            {
                title: 'SDE 2',
                ctc: '₹ 22L - 32L',
                base: '₹ 18,00L - 25,00L',
                variable: 'Performance',
                rsus: 'ESOPs',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.2L - 1.5L'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js'],
            backend: ['Java', 'Spring Boot', 'Ruby on Rails (Legacy)'],
            infra: ['AWS', 'Kubernetes'],
            data: ['MySQL', 'MongoDB', 'Redis']
        },
        process: [
            {
                step: 'Online Assessment',
                description: '2 standard competitive programming questions. Medium difficulty.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Arrays', 'Strings']
            },
            {
                step: 'Technical (2-3 Rounds)',
                description: 'Standard DSA, basic LLD, and a Hiring Manager round.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['DSA', 'Java', 'CS Fundamentals']
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
            backlogs: 'None active.',
            gap: 'Accepted.',
            notes: 'Hiring bar is standard. Strong grasp of Java/Spring Boot internals usually clears backend rounds.'
        },
        culture: {
            wlb: 'Can be chaotic. Frequent restructuring and leadership changes create a turbulent environment.',
            remote: 'Hybrid/In-office.',
            vibe: 'High hustle. You learn a lot because you are thrown into the deep end, but it lacks the engineering maturity of a Swiggy or PhonePe.'
        },
        reality: {
            good: ['Great place to get early startup scale experience', 'Easy to get leadership roles early if you survive the churn', 'Brand name is recognized'],
            bad: ['Financially turbulent (multiple layoff rounds in the past)', 'Legacy tech debt', 'Average compensation compared to top unicorns']
        }
    },
    {
        id: 'meesho',
        name: 'Meesho',
        type: 'Startup',
        status: 'Active',
        logo: 'MEE',
        rating: 4.4,
        aiVerdict: 'High-scale e-commerce. Interviews heavily vet your ability to scale databases and handle highly distributed locking and caching for flash events.',
        overview: {
            about: 'Meesho is an Indian social e-commerce company, headquartered in Bangalore. It focuses on Tier 2/3 cities and 0-commission models for sellers.',
            headquarters: 'Bangalore, India',
            size: '2,500+ Employees',
            founded: '2015',
            website: 'meesho.io'
        },
        roles: [
            {
                title: 'SDE 1',
                ctc: '₹ 24L - 34L',
                base: '₹ 18,00L - 24,00L',
                variable: 'Bonus',
                rsus: 'ESOPs',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.2L - 1.5L'
            },
            {
                title: 'SDE 2',
                ctc: '₹ 40L - 60L',
                base: '₹ 30,00L - 45,00L',
                variable: 'Bonus',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.5L'
            }
        ],
        techStack: {
            frontend: ['React', 'React Native'],
            backend: ['Java (Primary)', 'Go', 'Python'],
            infra: ['AWS', 'Kubernetes'],
            data: ['MySQL', 'HBase', 'Kafka', 'Spark', 'Delta Lake']
        },
        process: [
            {
                step: 'Machine Coding (2 Hours)',
                description: 'Build a backend system with working APIs locally. High emphasis on readable code and concurrency.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Machine Coding', 'LLD', 'Clean Code']
            },
            {
                step: 'DSA & Design (2-3 Rounds)',
                description: 'Deep dive into DSA (Hard) and System Design (HLD) centered around high read/write throughput (e.g. "Design Meesho Feed").',
                duration: '3 hours',
                difficulty: 'Expert',
                topics: ['System Design', 'Caching', 'DSA']
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
            cgpa: 'No strict cutoff.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'A strong understanding of Kafka and Redis will carry you through their System Design rounds.'
        },
        culture: {
            wlb: 'Great. They have "Mee-time" policies and unlimited wellness leaves. High "remote-first" attitude historically.',
            remote: 'Highly flexible / Remote first (Boundary-less workplace policy).',
            vibe: 'Very data-driven and user-centric. They are competing with Amazon/Flipkart by targeting a completely different demographic, resulting in unique engineering challenges.'
        },
        reality: {
            good: ['One of the best remote work policies in India', 'High scale e-commerce challenges', 'Great compensation and frequent ESOP buybacks'],
            bad: ['Technical debt from hyper-growth phase', 'Intense competitive pressure in the e-commerce space']
        }
    }
];
