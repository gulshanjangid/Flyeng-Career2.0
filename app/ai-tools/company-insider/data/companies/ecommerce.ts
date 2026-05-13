import { CompanyData } from './types';

export const ecommerceCompanies: CompanyData[] = [
    {
        id: 'walmart',
        name: 'Walmart Global Tech',
        type: 'E-commerce',
        status: 'Active',
        logo: 'WAL',
        rating: 4.2,
        aiVerdict: 'Quietly one of the best engineering cultures in India. Massive scale (battling Amazon directly), excellent compensation, and heavy focus on Java/Spring Boot and big data.',
        overview: {
            about: 'Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores. Its technology wing operates at immense global scale.',
            headquarters: 'Bentonville, Arkansas, US / Bangalore, Chennai (Massive Hubs)',
            size: '10,000+ Engineers globally',
            founded: '1962',
            website: 'careers.walmart.com/technology/india'
        },
        roles: [
            {
                title: 'Software Engineer II',
                ctc: '₹ 18L - 25L',
                base: '₹ 14,00,000 - 18,00,000',
                variable: '20% (Annual Cash Bonus)',
                rsus: '$3k - $5k / Year',
                deductions: 'Tax, PF',
                inHand: '₹ 95k - 1.2L'
            },
            {
                title: 'Software Engineer III / Senior',
                ctc: '₹ 35L - 50L',
                base: '₹ 25,00,000 - 35,00,000',
                variable: '20-25%',
                rsus: '$10k - $20k / Year',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js', 'React Native (App)'],
            backend: ['Java (Spring Boot is king here)', 'Node.js', 'Python'],
            infra: ['Azure', 'GCP', 'Custom Hybrid Cloud'],
            data: ['Cassandra', 'Kafka (Trillions of daily events)', 'Hadoop']
        },
        process: [
            {
                step: 'HackerRank OA',
                description: '2-3 Medium/Hard algorithmic questions. Strict cutoffs. Often tests Trees, DP, and Graph basics.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['Algorithms']
            },
            {
                step: 'Technical Loops (3-4 Rounds)',
                description: 'Heavy focus on Java Spring Boot internals, concurrent programming, and System Design (e.g. Design a massive inventory sync system).',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Concurrency', 'High Volume System Design', 'Java Core']
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
            notes: 'Walmart pays incredibly well for its stability. You must know fundamental System Design (Load balancing, DB Sharding) even for junior level.'
        },
        culture: {
            wlb: 'Excellent. Most teams have very predictable hours, great benefits, and strong management support.',
            remote: 'Hybrid. Usually 2-3 days in office.',
            vibe: 'Mature, enterprise tech combined with Silicon Valley scaling. They are aggressively pushing digital innovation to counter Amazon.'
        },
        reality: {
            good: ['Incredible brand on resume', 'High base salaries combined with heavy cash bonuses', 'Solving actual physical-meets-digital scaling problems (supply chain)'],
            bad: ['Less brand "hype" among students than FAANG despite identical scale', 'Promotions can be competitive', 'Heavy legacy code in certain divisions']
        }
    },
    {
        id: 'flipkart',
        name: 'Flipkart',
        type: 'E-commerce',
        status: 'Active',
        logo: 'FLI',
        rating: 4.4,
        aiVerdict: 'The pioneer of Indian e-commerce tech. Interviews are famously brutal, indexing heavily on elite machine coding (working CLI app in 2 hours) and deep system design.',
        overview: {
            about: 'Flipkart Private Limited is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company. It is majority-owned by Walmart.',
            headquarters: 'Bangalore, Karnataka',
            size: '15,000+ Employees',
            founded: '2007',
            website: 'flipkartcareers.com'
        },
        roles: [
            {
                title: 'Software Development Engineer 1 (SDE 1)',
                ctc: '₹ 25L - 32L',
                base: '₹ 18,00,000 - 22,00,000',
                variable: '10%',
                rsus: 'ESOPs / Cash equivalents',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.25L - 1.45L'
            },
            {
                title: 'SDE 2 / Senior SDE',
                ctc: '₹ 45L - 70L',
                base: '₹ 32,00,000 - 45,00,000',
                variable: '15%',
                rsus: 'High ESOP component',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.0L - 2.8L'
            }
        ],
        techStack: {
            frontend: ['React', 'React Native (Heavy reliance)'],
            backend: ['Java', 'Golang', 'Node.js'],
            infra: ['Custom Datacenters', 'Azure/GCP (Migrating)'],
            data: ['Aerospike', 'MySQL', 'Kafka', 'Redis']
        },
        process: [
            {
                step: 'Machine Coding Round (Crucial)',
                description: 'The defining Flipkart round. Build a functional, object-oriented CLI app (e.g. "Design a Ride Sharing App" and implement assigning logic) in 2 hours. Must compile and run.',
                duration: '120 mins',
                difficulty: 'Expert',
                topics: ['Machine Coding', 'OOD', 'Clean Architecture']
            },
            {
                step: 'Problem Solving & System Design (3 Rounds)',
                description: '1 pure DSA (Hard), 1 High Level Design (HLD) for SDE2+, 1 HM round focusing heavily on Amazon Leadership-style behavioral questions.',
                duration: '3 hours',
                difficulty: 'Hard',
                topics: ['System Design', 'Algorithms', 'Behavioral']
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
            gap: 'Needs explanation.',
            notes: 'If you fail the Machine Coding round, the process stops. You must practice writing clean, modular Java/C++ extremely quickly under pressure.'
        },
        culture: {
            wlb: 'Intense, especially leading up to "Big Billion Days" (BBD) sales where code freezes and midnight war-rooms occur.',
            remote: 'Hybrid. Pushing heavily for RTO in Bangalore.',
            vibe: 'Cutthroat but rewarding. The engineering talent density is extremely high. Known as the training ground for hundreds of subsequent startup founders.'
        },
        reality: {
            good: ['One of the best engineering cultures in India', 'High compensation combining base and ESOPs', 'Incredible prestige locally'],
            bad: ['WLB during sale periods is non-existent', 'High attrition rate due to pressure', 'Walmart acquisition changed some of the early "startup" culture']
        }
    },
    {
        id: 'myntra',
        name: 'Myntra',
        type: 'E-commerce',
        status: 'Active',
        logo: 'MYN',
        rating: 4.3,
        aiVerdict: 'Fashion giant (Flipkart subsidiary). Slightly better WLB than the parent company but still incredibly demanding tech stacks and machine coding interviews.',
        overview: {
            about: 'Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India. The company was acquired by Flipkart in 2014.',
            headquarters: 'Bangalore, Karnataka',
            size: '5,000+ Employees',
            founded: '2007',
            website: 'careers.myntra.com'
        },
        roles: [
            {
                title: 'SDE 1',
                ctc: '₹ 22L - 28L',
                base: '₹ 16,00,000 - 20,00,000',
                variable: '10%',
                rsus: 'Flipkart ESOPs',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.1L - 1.3L'
            },
            {
                title: 'SDE 2 / Senior',
                ctc: '₹ 40L - 60L',
                base: '₹ 28,00,000 - 40,00,000',
                variable: '15%',
                rsus: 'ESOPs',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.8L - 2.5L'
            }
        ],
        techStack: {
            frontend: ['React', 'React Native'],
            backend: ['Java', 'Golang', 'Node.js'],
            infra: ['Azure', 'Internal Flipkart Infra'],
            data: ['Memcached', 'Redis', 'Kafka']
        },
        process: [
            {
                step: 'Machine Coding',
                description: 'Like Flipkart, requires building a clean, modular CLI application in 2 hours with functioning unit tests.',
                duration: '120 mins',
                difficulty: 'Expert',
                topics: ['Machine Coding', 'Design Patterns']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'DSA, System Design (HLD/LLD), and HM round. Focuses a lot on caching strategies for high-traffic sale events (EORS).',
                duration: '3-4 hours',
                difficulty: 'Hard',
                topics: ['Caching', 'Algorithms', 'LLD']
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
            gap: 'Reviewed contextually.',
            notes: 'Myntra engineering deeply values frontend performance and mobile-first architectures, given fashion relies heavily on high-res image loading and fluid scrolling.'
        },
        culture: {
            wlb: 'Similar to Flipkart; brutal during the "End of Reason Sale" (EORS) but generally a supportive engineering org.',
            remote: 'Hybrid.',
            vibe: 'Young, energetic, and highly focused on consumer experience. The office culture is very vibrant (fashion oriented).'
        },
        reality: {
            good: ['Great compensation and brand name', 'Strong engineering practices (TDD heavily encouraged)', 'Flipkart ESOP liquidity events are lucrative'],
            bad: ['High pressure during sale events', 'Sometimes acts as a testing ground before features roll to parent Flipkart', 'Bangalore traffic to their office is infamous']
        }
    },
    {
        id: 'target',
        name: 'Target',
        type: 'E-commerce',
        status: 'Active',
        logo: 'TGT',
        rating: 4.5,
        aiVerdict: 'Exceptional WLB and stability. Operates heavily in Java and Kotlin. A fantastic global retail tech option in Bangalore.',
        overview: {
            about: 'Target Corporation is an American retail corporation. It is the seventh-largest retailer in the United States, operating massive digital and physical supply chains.',
            headquarters: 'Minneapolis, Minnesota, US / Bangalore (TI Hub)',
            size: '400,000+ Employees (Global)',
            founded: '1902',
            website: 'corporate.target.com/careers/target-in-india'
        },
        roles: [
            {
                title: 'Engineer',
                ctc: '₹ 18L - 24L',
                base: '₹ 14,00,000 - 18,00,000',
                variable: '10-15%',
                rsus: 'N/A',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 95k - 1.25L'
            },
            {
                title: 'Senior Engineer',
                ctc: '₹ 35L - 45L',
                base: '₹ 25,00,000 - 32,00,000',
                variable: '15%',
                rsus: 'Variable',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.0L'
            }
        ],
        techStack: {
            frontend: ['React', 'Redux', 'Kotlin (Mobile)'],
            backend: ['Java', 'Kotlin (Backend)', 'Go'],
            infra: ['Google Cloud Platform (GCP)', 'Kubernetes'],
            data: ['PostgreSQL', 'Cassandra', 'Kafka']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Standard coding test. Usually focuses on Leetcode Medium (Arrays, HashMaps, Strings) rather than complex graphs.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Algorithms']
            },
            {
                step: 'Technical & HM (3 Rounds)',
                description: 'Focus is heavily on core CS fundamentals (OOP, DB indexing) and cultural fit. Less stressful than FAANG/Flipkart loops.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['Core CS', 'Behavioral']
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
            notes: 'Target India (TI) operates as a full extension of US teams, not just support. You will build core retail tech.'
        },
        culture: {
            wlb: 'Stellar. Consistently rated as having one of the best, most respectful work-life balances in Bangalore tech.',
            remote: 'Hybrid. Flex system.',
            vibe: 'Very stable, mature, and inclusive. They focus heavily on employee wellness and steady, test-driven engineering over "crunch" deadlines.'
        },
        reality: {
            good: ['Incredible WLB', 'Modern tech stack (heavy GCP and Kotlin adoption)', 'Excellent benefits and stability'],
            bad: ['Base pay ceiling is lower than Amazon/Walmart', 'Promotions can be somewhat slow', 'Less "startup-like" hyper-growth']
        }
    },
    {
        id: 'lenskart',
        name: 'Lenskart',
        type: 'E-commerce',
        status: 'Active',
        logo: 'LEN',
        rating: 3.8,
        aiVerdict: 'Rapidly growing omnichannel unicorn. Heavy Java/Spring Boot shop with aggressive sales targets resulting in a tough tech culture.',
        overview: {
            about: 'Lenskart is an Indian multinational optical prescription eyewear retail chain, operating both online and globally through physical stores.',
            headquarters: 'Gurgaon, Haryana (Global Hub)',
            size: '5,000+ Employees',
            founded: '2010',
            website: 'lenskart.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 15L - 22L',
                base: '₹ 13,00,000 - 18,00,000',
                variable: '10%',
                rsus: 'ESOPs (Select roles)',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 90k - 1.2L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 28L - 40L',
                base: '₹ 24,00,000 - 32,00,000',
                variable: '15%',
                rsus: 'ESOPs',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.5L - 2.0L'
            }
        ],
        techStack: {
            frontend: ['React', 'React Native', 'Swift'],
            backend: ['Java (Spring Boot)', 'Node.js'],
            infra: ['AWS', 'Docker'],
            data: ['MySQL', 'MongoDB', 'Redis']
        },
        process: [
            {
                step: 'Technical Screen / OA',
                description: 'Standard coding with a huge emphasis on core Java/Spring knowledge for backend roles.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Java Core', 'Algorithms']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'Heavy focus on writing actual raw SQL queries, explaining microservices architectures, and standard DSA.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['Microservices', 'SQL Joins', 'System Design']
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
            gap: 'Reviewed contextually.',
            notes: 'A great option for developers based in Delhi/NCR who want to work for a major consumer tech startup without moving to Bangalore.'
        },
        culture: {
            wlb: 'Notoriously harsh. High attrition rates due to aggressive delivery timelines and 6-day (or unstructured) work weeks during pushes.',
            remote: 'Strict RTO (Return to Office). Very little flexibility.',
            vibe: 'Highly aggressive sales and growth culture. They are expanding globally simultaneously (Dubai/Singapore) causing tech chaos.'
        },
        reality: {
            good: ['Great brand name in North India', 'Solving unique omnichannel (app + physical store) inventory problems', 'High growth trajectory'],
            bad: ['WLB is consistently rated poorly', 'Tech stack can be monolithic in older legacy systems', 'Leadership is incredibly top-down']
        }
    },
    {
        id: 'nykaa',
        name: 'Nykaa',
        type: 'E-commerce',
        status: 'Active',
        logo: 'NYK',
        rating: 3.7,
        aiVerdict: 'Profitable beauty e-commerce giant. Engineering is pragmatic but historically faced scaling issues during mega-sales. Heavy Python/Node focus.',
        overview: {
            about: 'Nykaa is an Indian e-commerce company, founded by Falguni Nayar in 2012 and headquartered in Mumbai. It sells beauty, wellness and fashion products.',
            headquarters: 'Mumbai, Maharashtra (Rare Mumbai tech major) / Gurgaon',
            size: '3,000+ Employees',
            founded: '2012',
            website: 'nykaa.com'
        },
        roles: [
            {
                title: 'SDE 1',
                ctc: '₹ 14L - 20L',
                base: '₹ 12,00,000 - 16,00,000',
                variable: '10%',
                rsus: 'N/A (Public stock rare for entry level)',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 80k - 1.1L'
            }
        ],
        techStack: {
            frontend: ['React', 'Vue', 'React Native'],
            backend: ['Python (Django/Flask)', 'Node.js', 'PHP (Legacy core)'],
            infra: ['AWS'],
            data: ['MySQL', 'ElasticSearch', 'Redis']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Coding focused on basic algorithms and sometimes a small debugging test.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Algorithms', 'Debugging']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'Focus on databases, caching (Memcached/Redis) to handle sale traffic spikes, and cultural fit.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['Caching', 'Databases', 'API Design']
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
            notes: 'A rare unicorn/public tech company headquartered in Mumbai, offering an alternative to the Bangalore tech scene.'
        },
        culture: {
            wlb: 'Intense during the "Pink Friday Sale" but somewhat standard otherwise. Heavy pressure from management.',
            remote: 'In-office mandated.',
            vibe: 'Very business-first. It operates incredibly profitably in a low-margin sector, meaning engineering budgets and timelines are strict.'
        },
        reality: {
            good: ['Profitable, public company offering great stability', 'Brand name is massive', 'Rare Mumbai tech hub'],
            bad: ['Legacy PHP/Magento codebase blocks still exist deep in the stack', 'Compensation trails Bangalore-based unicorns (Flipkart/Swiggy)', 'WLB can be poor']
        }
    },
    {
        id: 'makemytrip',
        name: 'MakeMyTrip',
        type: 'E-commerce',
        status: 'Active',
        logo: 'MMT',
        rating: 4.1,
        aiVerdict: 'The OTA (Online Travel Agency) king of India. Fantastic technical challenges regarding flight/hotel API aggregations and intense traffic scaling.',
        overview: {
            about: 'MakeMyTrip is an Indian online travel company founded in 2000. Headquartered in Gurugram, Haryana, the company provides online travel services including flight tickets, domestic and international holiday packages, hotel reservations, and rail/bus tickets.',
            headquarters: 'Gurgaon, Haryana (Major Hub) / Bangalore',
            size: '4,000+ Employees',
            founded: '2000',
            website: 'makemytrip.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 15L - 22L',
                base: '₹ 13,00,000 - 18,00,000',
                variable: '10-15%',
                rsus: 'N/A',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 90k - 1.2L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 28L - 45L',
                base: '₹ 24,00,000 - 35,00,000',
                variable: '15%',
                rsus: 'Varies',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.5L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['React', 'React Native'],
            backend: ['Java', 'Go', 'Node.js'],
            infra: ['AWS', 'Hybrid Datacenters (To handle massive search queries)'],
            data: ['Couchbase', 'Redis', 'Kafka', 'MySQL']
        },
        process: [
            {
                step: 'HackerRank OA',
                description: 'Standard coding with a heavy bias towards graph algorithms (pathfinding for flights, etc.).',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Graphs', 'Algorithms']
            },
            {
                step: 'System Design & Tech Loop',
                description: 'Expect heavy HLD questions. E.g. "Design a system that queries 50 different airline APIs concurrently and caches results perfectly for 5 minutes."',
                duration: '3 hours',
                difficulty: 'Hard',
                topics: ['System Design (Aggregators)', 'Concurrency', 'Caching']
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
            notes: 'A top destination for engineers in the Delhi/NCR region seeking to work on massive distributed systems.'
        },
        culture: {
            wlb: 'Good to average. Travel seasonality dictates the workload (Diwali/Summer holidays are brutal).',
            remote: 'Hybrid.',
            vibe: 'Mature tech startup vibe. They survived the dot-com bust, COVID-19, and emerged stronger. Highly pragmatic, slightly older technical leadership.'
        },
        reality: {
            good: ['Incredible scale and complex API aggregation challenges', 'Very stable company despite volatile travel industry', 'Great for NCR-based engineers'],
            bad: ['Tech debt from 20 years of operations exists', 'Compensation ceilings are slightly lower than newer unicorns', 'Heavy dependency on third-party APIs breaking']
        }
    },
    {
        id: 'bookmyshow',
        name: 'BookMyShow',
        type: 'E-commerce',
        status: 'Active',
        logo: 'BMS',
        rating: 3.9,
        aiVerdict: 'Entertainment ticketing monopoly in India. Solving extreme concurrency "flash sale" problems (e.g., Coldplay tickets) and seat-allocation algorithms.',
        overview: {
            about: 'Bigtree Entertainment Pvt Ltd, doing business as BookMyShow, is India\'s largest entertainment ticketing website.',
            headquarters: 'Mumbai, Maharashtra',
            size: '1,500+ Employees',
            founded: '1999',
            website: 'bookmyshow.com'
        },
        roles: [
            {
                title: 'Software Development Engineer',
                ctc: '₹ 15L - 22L',
                base: '₹ 13,00,000 - 18,00,000',
                variable: '10%',
                rsus: 'N/A',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 90k - 1.25L'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular', 'React Native'],
            backend: ['Node.js', 'Go', '.NET (Legacy)'],
            infra: ['AWS (Auto-scaling is critical)'],
            data: ['Redis', 'RabbitMQ', 'MongoDB']
        },
        process: [
            {
                step: 'Technical Screen',
                description: 'Coding fundamentals and heavy focus on object-oriented programming.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['OOP', 'Core Logic']
            },
            {
                step: 'System Design & Logic Loops',
                description: 'Focuses entirely on concurrency. "How do you ensure 100,000 people clicking on 50,000 seats at the exact same millisecond don\'t double-book?"',
                duration: '3 hours',
                difficulty: 'Hard',
                topics: ['Concurrency/Locks', 'Database Transactions', 'HLD']
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
            cgpa: '7.0+.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'If you want to clear their backend interview, you must have a flawless understanding of database locks (optimistic vs pessimistic) and distributed queues.'
        },
        culture: {
            wlb: 'Can be nightmare-tier during massive event launches. Very chill otherwise.',
            remote: 'Hybrid. Primarily Mumbai based.',
            vibe: 'Fun, entertainment-focused, but the tech teams carry massive pressure to ensure the website doesn\'t crash during blockbuster movie/concert sales.'
        },
        reality: {
            good: ['Incredible brand visibility (everyone uses it)', 'You tackle some of the hardest flash-scale concurrency problems in tech', 'Free tickets/movie premieres'],
            bad: ['The tech infrastructure is often pushed beyond breaking point', 'Mumbai tech salary bands are lower than BGLR given cost of living', 'Monopoly status can lead to slow internal innovation']
        }
    },
    {
        id: 'wayfair',
        name: 'Wayfair',
        type: 'E-commerce',
        status: 'Active',
        logo: 'WAY',
        rating: 4.1,
        aiVerdict: 'Global furniture dropshipping giant. Strong engineering culture currently building out its new Tech Hub in Bangalore.',
        overview: {
            about: 'Wayfair Inc. is an American e-commerce company that sells furniture and home-goods online. They operate massive global supply chain dropshipping algorithms.',
            headquarters: 'Boston, Mass, US / Bangalore (New Tech Hub)',
            size: '15,000+ Employees',
            founded: '2002',
            website: 'wayfair.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer (L2)',
                ctc: '₹ 25L - 35L',
                base: '₹ 18,00,000 - 25,00,000',
                variable: '10-15%',
                rsus: '$15k - $30k',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.25L - 1.6L'
            },
            {
                title: 'Senior Software Engineer (L3)',
                ctc: '₹ 45L - 60L',
                base: '₹ 32,00,000 - 45,00,000',
                variable: '15%',
                rsus: '$40k - $80k',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.0L - 2.8L'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js'],
            backend: ['Python', 'Java', 'PHP (Historically massive monolithic legacy)'],
            infra: ['GCP', 'Kubernetes'],
            data: ['ElasticSearch', 'Kafka', 'SQL Server']
        },
        process: [
            {
                step: 'Karat Interview / OA',
                description: 'Wayfair often uses "Karat" (a third-party interview service) for their first technical screen. Standard medium DSA.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Algorithms', 'Karat Platform']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: '1 Coding, 1 System Design (Focus on microservices extraction), 1 Database Architecture, 1 HM.',
                duration: '4 hours',
                difficulty: 'Medium',
                topics: ['System Design', 'Algorithms', 'Databases']
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
            cgpa: '7.5+.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Wayfair\'s Bangalore hub is relatively new and expanding rapidly, acting as a great entry point for high-tier compensation.'
        },
        culture: {
            wlb: 'Excellent. Boston corporate vibe ensures high respect for working hours and employee well-being.',
            remote: 'Hybrid. Usually 2-3 days office.',
            vibe: 'Pragmatic engineering. They are currently heavily focused on decoupling a massive monolithic PHP application into Python/Java microservices.'
        },
        reality: {
            good: ['Great compensation and RSUs', 'Strong expansion phase in India offers quick promotions', 'Very good work-life balance'],
            bad: ['Legacy PHP monolithic codebase is notoriously frustrating to work with', 'The global furniture market took a massive hit post-COVID, leading to recent high-level layoffs']
        }
    },
    {
        id: 'homedepot',
        name: 'The Home Depot',
        type: 'E-commerce',
        status: 'Active',
        logo: 'THD',
        rating: 4.3,
        aiVerdict: 'Top 5 US E-Commerce player quietly holding a massive footprint in India. Incredible WLB, heavy Java/Spring and GCP focus.',
        overview: {
            about: 'The Home Depot is the largest home improvement retailer in the United States. Its e-commerce and supply chain tech infrastructure is immense.',
            headquarters: 'Atlanta, Georgia, US / Bangalore',
            size: '400,000+ Employees (Global)',
            founded: '1978',
            website: 'careers.homedepot.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 16L - 22L',
                base: '₹ 14,00,000 - 18,00,000',
                variable: '10%',
                rsus: 'N/A',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 95k - 1.2L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 32L - 45L',
                base: '₹ 25,00,000 - 32,00,000',
                variable: '15%',
                rsus: 'N/A (Cash bonus heavy)',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.0L'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular'],
            backend: ['Java', 'Spring Boot', 'Go', 'Python'],
            infra: ['GCP (Major Partner)', 'Kubernetes'],
            data: ['Cassandra', 'BigQuery', 'Spanner']
        },
        process: [
            {
                step: 'Online Assessment / Hackerrank',
                description: 'Tests basic algorithms and frequently includes Java Spring Boot MCQs.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Java Core', 'Algorithms']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'Incredibly focused on system design (HLD for e-commerce, load balancers, caching) and core Java OOP principles. Not overly algorithmic.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['System Design', 'Core Java', 'Behavioral']
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
            notes: 'They value practical Software Engineering (CI/CD, testing, clean code) far more than solving Leetcode Hard DP/Graph problems.'
        },
        culture: {
            wlb: 'Spectacular. Highly praised for extreme stability and very balanced hours.',
            remote: 'Hybrid. Flex approach.',
            vibe: 'Mature, slightly traditional, but incredibly stable. It operates like a massive enterprise tech company rather than a chaotic startup. Highly supportive management.'
        },
        reality: {
            good: ['Incredible stability (does not fire easily)', 'Phenomenal WLB', 'Strong GCP/Cloud adoption'],
            bad: ['Pay ceiling is lower than pure tech FAANG companies', 'Can be bureaucratic', 'Not a "hyped" tech brand for younger engineers']
        }
    }
];
