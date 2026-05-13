import { CompanyData } from './types';

export const gamingCompanies: CompanyData[] = [
    {
        id: 'epic',
        name: 'Epic Games',
        type: 'Gaming/Product',
        status: 'Active',
        logo: 'EPI',
        rating: 4.5,
        aiVerdict: 'Creators of Unreal Engine and Fortnite. Tech interviews are deeply rooted in C++ mastery, memory management, and 3D math (linear algebra/matrices).',
        overview: {
            about: 'Epic Games, Inc. is an American video game and software developer and publisher based in Cary, North Carolina. They developed the Unreal Engine, the most successful game engine globally.',
            headquarters: 'Cary, North Carolina, US / Remote',
            size: '4,000+ Employees',
            founded: '1991',
            website: 'epicgames.com/site/en-US/careers'
        },
        roles: [
            {
                title: 'Engine Programmer',
                ctc: '$140k - $200k+ (US Base)',
                base: 'Very High',
                variable: 'Bonus',
                rsus: 'Pre-IPO Equity / Profit Sharing',
                deductions: 'Local taxes',
                inHand: 'High'
            },
            {
                title: 'Backend Engineer (Services)',
                ctc: '$130k - $180k',
                base: 'High',
                variable: 'Bonus',
                rsus: 'Equity',
                deductions: 'Taxes',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['C++ (Unreal Editor UI)', 'React (Web services)'],
            backend: ['C++', 'Java', 'Scala', 'Go'],
            infra: ['AWS (Massive auto-scaling for Fortnite)'],
            data: ['DynamoDB', 'Redis (Extreme caching requirements)']
        },
        process: [
            {
                step: 'Take Home Test (C++)',
                description: 'Famous for dropping a massive, complex C++ project file and asking you to optimize a specific rendering or physics bottleneck.',
                duration: '48 hours',
                difficulty: 'Hard',
                topics: ['C++ Memory Profiling', 'Optimization']
            },
            {
                step: 'Technical Loops (3-4 Rounds)',
                description: 'Deep grilling on 3D math, concurrent programming without standard libraries, and system design for syncing massive 100-player lobbies in real-time.',
                duration: '4 hours',
                difficulty: 'Expert',
                topics: ['3D Math', 'UDP Networking', 'Concurrency']
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
            cgpa: 'Irrelevant. Deep low-level programming knowledge is everything.',
            backlogs: 'N/A.',
            gap: 'Accepted.',
            notes: 'If you do not know how manual memory management works or how to profile a CPU cache miss, you will struggle.'
        },
        culture: {
            wlb: 'Intense during major patches (crunch culture is real in gaming), but Epic offers 2 full weeks off globally in summer and winter to compensate.',
            remote: 'Highly remote friendly.',
            vibe: 'Extremely elite C++ engineering mixed with wild creative energy. Unapologetic about pushing graphical fidelity boundaries.'
        },
        reality: {
            good: ['Work on the engine that powers modern media (Games/Movies)', 'Top tier compensation', 'Global time-off policies are amazing'],
            bad: ['Crunch can be brutal during live-events in Fortnite', 'Very difficult tech stack to learn', 'Massive codebase (Unreal Engine takes hours to compile locally)']
        }
    },
    {
        id: 'riot',
        name: 'Riot Games',
        type: 'Gaming',
        status: 'Active',
        logo: 'RIO',
        rating: 4.6,
        aiVerdict: 'League of Legends creator. Heavy tech focus on absolutely zero-latency routing, anti-cheat kernel systems, and massive microservices.',
        overview: {
            about: 'Riot Games, Inc. is an American video game developer, publisher, and esports tournament organizer. Creators of League of Legends and Valorant.',
            headquarters: 'Los Angeles, California, US',
            size: '4,500+ Employees',
            founded: '2006',
            website: 'riotgames.com/en/work-with-us'
        },
        roles: [
            {
                title: 'Software Engineer (Data/Services)',
                ctc: '$150k - $190k',
                base: 'High',
                variable: 'Yearly Bonus',
                rsus: 'N/A (Tencent owned)',
                deductions: 'Local tax',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['C++ (Game Client)', 'Chromium Embedded (Client UI)'],
            backend: ['Go', 'Java', 'C++', 'Python'],
            infra: ['Riot Direct (Custom global ISP routing)', 'AWS'],
            data: ['MySQL', 'Riak', 'Redis']
        },
        process: [
            {
                step: 'HackerRank OA',
                description: 'Algorithm intensive. Tests standard DSA with some constraints regarding memory efficiency.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Algorithms']
            },
            {
                step: 'Onsite (4 Rounds)',
                description: 'System design (focusing heavily on player matchmaking and regional latency), Deep C++/Go coding, and "Riot Fit" behavioral.',
                duration: '4-5 hours',
                difficulty: 'Hard',
                topics: ['Matchmaking Systems', 'UDP/TCP', 'Values']
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
            cgpa: 'Not strict.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'You must play their games or have a deep, genuine passion for gaming. "Player Focus" is their absolute core tenet.'
        },
        culture: {
            wlb: 'Good. Far better than standard "crunch" studios because they run Games-as-a-Service (GaaS) rather than boxed single-player releases.',
            remote: 'Hybrid/In-office. LA heavy.',
            vibe: 'Gamer paradise. Everyone plays games. High budget, high polish, intense fan culture.'
        },
        reality: {
            good: ['One of the best tech blogs on the internet (Riot Tech Blog)', 'They literally built their own ISP backbone to lower ping (Riot Direct)', 'Incredible office perks (PC bangs onsite)'],
            bad: ['Tencent ownership restricts typical Silicon Valley stock payouts', 'Legacy League of Legends codebase (tech debt)', 'Hard to pivot out of gaming sometimes']
        }
    },
    {
        id: 'unity',
        name: 'Unity',
        type: 'Product',
        status: 'Active',
        logo: 'UNI',
        rating: 3.5,
        aiVerdict: 'The most popular engine for mobile/indie devs. Tech stack is a massive mix of C# and C++. Recently underwent massive structural turbulence.',
        overview: {
            about: 'Unity Software Inc. is an American video game software development company based in San Francisco. It is best known for the development of Unity, a cross-platform game engine.',
            headquarters: 'San Francisco, US / Remote',
            size: '5,000+ Employees',
            founded: '2004',
            website: 'careers.unity.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '$130k - $170k',
                base: 'High Base',
                variable: 'Bonus',
                rsus: 'Public Stock',
                deductions: 'Tax',
                inHand: 'Varies'
            }
        ],
        techStack: {
            frontend: ['C# (Unity UI)', 'React (Web Dashboards)'],
            backend: ['C#', 'C++', 'Go (For Multiplayer services)'],
            infra: ['GCP', 'AWS'],
            data: ['PostgreSQL', 'Redis']
        },
        process: [
            {
                step: 'Technical Screen',
                description: 'Coding focuses heavily on C# internals, Garbage Collection nuances, and standard object-oriented design.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['C# / C++', 'OOD']
            },
            {
                step: 'Loops (3 Rounds)',
                description: 'System design for ad-tech (Unity Ads is massive) or rendering pipelines depending on the team.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['AdTech Design', 'Rendering Math', 'GC Optimization']
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
            notes: 'Unity is basically two companies: an AdTech network and a Game Engine. AdTech pays the bills.'
        },
        culture: {
            wlb: 'Historically great, but recently very stressful due to massive layoffs, management changes, and the pricing controversy of 2023.',
            remote: 'Hybrid / Remote.',
            vibe: 'Undergoing a painful transition from "developer darling" to aggressive profitability. Morale is currently repairing.'
        },
        reality: {
            good: ['C# ecosystem mastery', 'Working on tools that millions of indie developers use to realize their dreams', 'Great remote culture historically'],
            bad: ['Massive PR controversies recently regarding pricing', 'Huge layoffs', 'Stock price plummeted compared to COVID peaks']
        }
    },
    {
        id: 'roblox',
        name: 'Roblox',
        type: 'Gaming/Product',
        status: 'Active',
        logo: 'ROB',
        rating: 4.4,
        aiVerdict: 'Metaverse titan. Pays basically the highest liquid cash/RSU packages in the industry, rivaling top HFTs and Netflix. Tech focuses heavily on Luau (custom Lua) and C++ engine core.',
        overview: {
            about: 'Roblox Corporation is an American video game developer based in San Mateo, California. They operate Roblox, a massive online game platform and game creation system.',
            headquarters: 'San Mateo, California, US / Remote',
            size: '2,500+ Employees',
            founded: '2004',
            website: 'careers.roblox.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '$200k - $300k+ (Includes massive RSUs)',
                base: '$160k - $200k',
                variable: 'Bonus',
                rsus: 'Very High Grants',
                deductions: 'Tax',
                inHand: 'Extreme'
            }
        ],
        techStack: {
            frontend: ['Luau (Proprietary fast Lua)', 'React (Web)'],
            backend: ['C++', 'Go', 'C#'],
            infra: ['Custom massive global datacenters (moved away from AWS heavily)'],
            data: ['CockroachDB', 'Redis']
        },
        process: [
            {
                step: 'Roblox Cognitive / Coding / System',
                description: 'Very intense OA covering algorithms, systems architecture MCQs, and sometimes cognitive games.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Algorithms', 'Systems']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: 'Deep grilling on distributed systems. "How do you sync state for 10 million concurrent users across user-generated servers?" Very difficult algorithms.',
                duration: '4 hours',
                difficulty: 'Expert',
                topics: ['Distributed State', 'Concurrency', 'Algorithms']
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
            cgpa: 'Highly selective.',
            backlogs: 'Zero.',
            gap: 'Case by Case.',
            notes: 'They do not use standard off-the-shelf infra. They build custom databases and custom programming languages (Luau). You must be an extreme systems thinker.'
        },
        culture: {
            wlb: 'Good. They hire extremely senior/expensive talent and treat them well, asking for high output but not 80-hour weeks.',
            remote: 'Strict RTO recently mandated (3 days). Caused some internal friction.',
            vibe: 'Extremely elite engineering. Very high bar for entry. They view themselves not as a game, but as a utility engine.'
        },
        reality: {
            good: ['Astronomical compensation packages', 'Tackling literally the hardest concurrency/scaling problems in the tech world', 'Building custom programming languages'],
            bad: ['RTO mandate pushed a lot of talent out', 'Platform has trust/safety issues given the primary audience is young children', 'Not an "adult" game aesthetic']
        }
    },
    {
        id: 'valve',
        name: 'Valve',
        type: 'Gaming/Product',
        status: 'Active',
        logo: 'VAL',
        rating: 4.8,
        aiVerdict: 'The holy grail of private tech companies. Zero managers. "Boss-free" flat structure. Incredible hardware (Steam Deck) and software (Steam) monopoly.',
        overview: {
            about: 'Valve Corporation is an American video game developer, publisher, and digital distribution company headquartered in Bellevue, Washington. Creator of Steam, Half-Life, and Portal.',
            headquarters: 'Bellevue, Washington, US',
            size: '~400 Employees (Insanely low headcount for their revenue)',
            founded: '1996',
            website: 'valvesoftware.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: 'Undisclosed (Estimated $250k - $500k+ based on profit sharing)',
                base: 'High Base',
                variable: 'Profit Sharing is legendary',
                rsus: 'N/A (Private company)',
                deductions: 'Tax',
                inHand: 'Massive'
            }
        ],
        techStack: {
            frontend: ['C++ (Source Engine/Steam Client)', 'React (New UI features)'],
            backend: ['C++', 'Python'],
            infra: ['Custom global datacenters for Steam distribution'],
            data: ['PostgreSQL', 'Custom distributed systems']
        },
        process: [
            {
                step: 'The Multi-Day Interview',
                description: 'Valve\'s hiring is notoriously bizarre and rigorous. You interview with peers across multiple days. Absolute mastery of C++ and system architecture is required.',
                duration: 'Days',
                difficulty: 'Expert',
                topics: ['C++', 'Architecture', 'Culture']
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
            cgpa: 'Irrelevant. They usually only hire senior industry veterans with 10+ years of proven impact.',
            backlogs: 'N/A',
            gap: 'Accepted.',
            notes: 'Valve has no managers. You pick your own projects. You must be heavily self-directed.'
        },
        culture: {
            wlb: 'Excellent, but peer pressure dictates success. You must prove your worth to your peers, as they determine your bonus.',
            remote: 'In-office primarily.',
            vibe: 'Like a secretive, elite wizard cabal. They famously released a "New Employee Handbook" outlining their flat, bossless structure. Revenue per employee is arguably the highest in the world.'
        },
        reality: {
            good: ['Incredible prestige', 'Massive profit sharing bonuses', 'Work on Steam (monopoly) or hardware (Steam Deck)'],
            bad: ['Nearly impossible to get hired (they hardly recruit)', '"Cabals" (cliques) can form due to the lack of formal management', 'If your peers don\'t like your project, you get no bonus']
        }
    },
    {
        id: 'ea',
        name: 'Electronic Arts (EA)',
        type: 'Gaming',
        status: 'Active',
        logo: 'EA',
        rating: 3.8,
        aiVerdict: 'Corporate gaming giant. EA India handles a massive amount of backend services, tools, and testing for global titles like FIFA (FC) and Apex Legends.',
        overview: {
            about: 'Electronic Arts Inc. is an American video game company headquartered in Redwood City, California. It is the second-largest gaming company in the Americas and Europe.',
            headquarters: 'Redwood City, California, US / Hyderabad (Massive Hub)',
            size: '13,000+ Employees',
            founded: '1982',
            website: 'ea.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 15L - 24L',
                base: '₹ 13,00,000 - 18,00,000',
                variable: '10%',
                rsus: '$5k - $10k',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 90k - 1.25L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 30L - 45L',
                base: '₹ 25,00,000 - 35,00,000',
                variable: '15%',
                rsus: '$15k - $30k',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular (Internal Tools)', 'C++ (Game Clients)'],
            backend: ['Java', 'C++', 'Python'],
            infra: ['AWS (Heavy)', 'Frostbite Engine infrastructure'],
            data: ['MySQL', 'Redis', 'Cassandra']
        },
        process: [
            {
                step: 'Technical Screen / HackerRank',
                description: 'C++ or Java focused. Strong emphasis on object-oriented programming, inheritance, and standard array/string problems.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['OOP', 'Algorithms']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'Data structures, database design (for backend services), and understanding of high-throughput game server architecture.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['DSA', 'DB Schema', 'Throughput']
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
            notes: 'EA Hyderabad is a massive engineering center handling global player accounts, matchmaking services, and microtransactions infra.'
        },
        culture: {
            wlb: 'Usually strictly 9-to-6 for backend/services teams. Game development teams face crunch, but services teams are protected.',
            remote: 'Hybrid.',
            vibe: 'Corporate, structured. Very different from an indie studio. Excellent office facilities with gaming zones.'
        },
        reality: {
            good: ['Great brand name', 'Stable, predictable WLB for backend engineers', 'Solving high-throughput systems (millions of concurrent FIFA players)'],
            bad: ['EA operates more like a traditional enterprise IT company in its backend wings rather than a creative studio', 'Compensation is lower than FAANG/Unicorns']
        }
    },
    {
        id: 'playstation',
        name: 'PlayStation (Sony)',
        type: 'Hardware/Gaming',
        status: 'Active',
        logo: 'SONY',
        rating: 4.1,
        aiVerdict: 'Consistently pushing hardware limits. Tech encompasses OS dev (FreeBSD based), global cloud networks (PSN), and deep C++ systems engineering.',
        overview: {
            about: 'Sony Interactive Entertainment is a multinational video game and digital entertainment company. They engineer the PlayStation console hardware and the PlayStation Network (PSN).',
            headquarters: 'San Mateo, California, US / Tokyo / Global',
            size: '10,000+ Employees',
            founded: '1993',
            website: 'playstation.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer (PSN / Network)',
                ctc: '$140k - $180k',
                base: 'High',
                variable: 'Bonus',
                rsus: 'Sony Stock',
                deductions: 'Tax',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['React (Web Store)', 'C++ (Console UI)'],
            backend: ['C++', 'Java', 'Go', 'Python'],
            infra: ['AWS', 'Akamai (CDN for massive game downloads)'],
            data: ['Cassandra', 'Oracle', 'Memcached']
        },
        process: [
            {
                step: 'Technical Screen',
                description: 'Focuses heavily on networking (TCP/UDP, CDNs) and C++ or Java internals depending on the team.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Networking', 'C++/Java']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: 'System design (designing a download system for a 100GB game for 10 million users simultaneously), DSA, and behavioral.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['CDN Architecture', 'Concurrency', 'Algorithms']
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
            cgpa: 'Not strictly checked for laterals.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Heavy emphasis on understanding Content Delivery Networks (CDNs) and high-availability systems.'
        },
        culture: {
            wlb: 'Good. Generally very stable, Japanese-influenced corporate culture mixed with Californian tech vibes.',
            remote: 'Hybrid.',
            vibe: 'Extremely proud of their hardware dominance. Engineering is highly methodical. Security is paramount (due to historical PSN hacks).'
        },
        reality: {
            good: ['Work on a platform loved by hundreds of millions', 'Incredible brand prestige', 'Solving unique challenges (shipping massive binary files globally via CDN)'],
            bad: ['Japanese corporate structure sometimes slows global decision making', 'Tech stack can be slow to adopt the absolute bleeding edge cloud paradigms']
        }
    },
    {
        id: 'xbox',
        name: 'Xbox (Microsoft)',
        type: 'Product/Gaming',
        status: 'Active',
        logo: 'MSFT',
        rating: 4.4,
        aiVerdict: 'Deeply integrated with Azure and Windows. Best of both worlds: massive gaming prestige with Microsoft-level compensation and WLB.',
        overview: {
            about: 'Xbox is a video gaming brand created and owned by Microsoft. It encompasses consoles, games, streaming services, and online networks (Xbox Live).',
            headquarters: 'Redmond, Washington, US',
            size: 'Part of Microsoft',
            founded: '2001',
            website: 'careers.microsoft.com'
        },
        roles: [
            {
                title: 'Software Engineer (L59/L60)',
                ctc: '₹ 25L - 35L (India eq)',
                base: '₹ 16,00,000 - 22,00,000',
                variable: '10%',
                rsus: '$20k - $40k',
                deductions: 'Tax, PF',
                inHand: '₹ 1.1L - 1.4L'
            }
        ],
        techStack: {
            frontend: ['React', 'C# / XAML (Console OS)'],
            backend: ['C# (.NET Core is king)', 'C++'],
            infra: ['Azure (Obviously)', 'Azure PlayFab'],
            data: ['Azure SQL', 'CosmosDB']
        },
        process: [
            {
                step: 'Codility / OA',
                description: 'Standard Microsoft OA. 2-3 algorithmic problems (Arrays, Strings, Trees).',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Algorithms']
            },
            {
                step: 'Technical Loops (4 Rounds)',
                description: 'Standard DSA, deep C# knowledge, system design (cloud gaming/streaming latency), and "As Appropriate" (AA) managerial round.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['System Design', 'C# Internals', 'Algorithms']
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
            notes: 'You are basically interviewing for Microsoft. The bar and process are identical, just team-matched to Xbox/PlayFab.'
        },
        culture: {
            wlb: 'Excellent. Microsoft is famous for its "rest and vest" culture in certain orgs, though cloud gaming is highly competitive currently.',
            remote: 'Hybrid / Remote friendly.',
            vibe: 'Corporate but cool. You get the stability, stock, and benefits of Microsoft, but you work on gaming products. Massive investments in Game Pass infra.'
        },
        reality: {
            good: ['Incredible WLB', 'Microsoft Stock (MSFT) is a tank that constantly grows', 'Amazing tech stack integration (Azure/C#)'],
            bad: ['Bureaucracy of a trillion-dollar company', 'Xbox hardware sales currently lag PlayStation significantly', 'Promotions can be slow past Senior (L63)']
        }
    },
    {
        id: 'ubisoft',
        name: 'Ubisoft',
        type: 'Gaming',
        status: 'Active',
        logo: 'UBI',
        rating: 3.6,
        aiVerdict: 'Massive global studio network. Ubisoft Pune/Mumbai are massive hubs for QA, porting, and mobile dev. Tech focuses heavily on C++ and game engine mechanics.',
        overview: {
            about: 'Ubisoft Entertainment is a French video game publisher headquartered in Montreuil. It creates franchises like Assassin\'s Creed, Far Cry, and Rainbow Six.',
            headquarters: 'Paris, France / Pune, Mumbai (India Tech Hubs)',
            size: '20,000+ Employees',
            founded: '1986',
            website: 'ubisoft.com/en-us/company/careers'
        },
        roles: [
            {
                title: 'Gameplay / C++ Programmer',
                ctc: '₹ 12L - 18L',
                base: '₹ 10,00,000 - 15,00,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 75k - 95k'
            }
        ],
        techStack: {
            frontend: ['C++ (Snowdrop / Anvil Engines)'],
            backend: ['Python (Tooling)', 'C++'],
            infra: ['Internal Datacenters'],
            data: ['Proprietary Engine Data structures']
        },
        process: [
            {
                step: 'Technical OA (C++)',
                description: 'Deep C++ questions focusing on pointers, memory allocation, vectors, and object-oriented architecture for games.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['C++ Memory', 'Vectors', 'OOP']
            },
            {
                step: 'Technical Interview',
                description: 'Focuses on 3D math (vectors, dot/cross products, matrices), rendering pipelines, and optimizing C++ code.',
                duration: '2 hours',
                difficulty: 'Hard',
                topics: ['3D Math', 'C++ Optimization']
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
            notes: 'If you want to be a core gameplay programmer, you must know 3D Mathematics (Linear Algebra) flawlessly.'
        },
        culture: {
            wlb: 'Famous for severe crunch culture historically, though heavily reforming. The French HQ pushes for better global labor practices recently.',
            remote: 'In-office/Hybrid.',
            vibe: 'Highly creative but turbulent. The company has faced major internal restructuring and cancelled projects recently. Lots of passionate gamers.'
        },
        reality: {
            good: ['Work on legendary AAA franchises', 'Great entry point into the global gaming industry from India (Pune)', 'Creative environment'],
            bad: ['Compensation is notoriously lower than standard software tech', 'Job security in AAA gaming is notoriously volatile', 'Pune/Mumbai hubs do a lot of QA/Mobile ports compared to core AAA engine tracking']
        }
    },
    {
        id: 'nintendo',
        name: 'Nintendo',
        type: 'Hardware/Gaming',
        status: 'Active',
        logo: 'NIN',
        rating: 4.2,
        aiVerdict: 'The most secretive of the gaming giants. Incredibly slow tech adoption but flawless execution. Legendary job security if you make it in.',
        overview: {
            about: 'Nintendo Co., Ltd. is a Japanese multinational video game company headquartered in Kyoto. It develops video games and video game consoles.',
            headquarters: 'Kyoto, Japan / Redmond, Washington (Nintendo of America)',
            size: '7,000+ Employees',
            founded: '1889',
            website: 'careers.nintendo.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '¥8M - ¥12M (Japan) / $120k+ (US)',
                base: 'Standard',
                variable: 'High Bonus',
                rsus: 'N/A',
                deductions: 'Local tax',
                inHand: 'Variable'
            }
        ],
        techStack: {
            frontend: ['C/C++ (Hardware SDKs, Games)'],
            backend: ['C++', 'Custom legacy internal frameworks', 'AWS (Recently adopting for online services)'],
            infra: ['Proprietary'],
            data: ['Custom formats']
        },
        process: [
            {
                step: 'Screening',
                description: 'Standard C++ testing, but heavily weighted on resume and portfolio/experience. They prefer specialists.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['C++ Basics']
            },
            {
                step: 'Technical Loops',
                description: 'Deep dive into hardware constraints (memory limits, battery optimization on handhelds), secure coding (anti-piracy), and behavioral.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Hardware Constraints', 'C++ Mastery', 'Behavioral']
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
            cgpa: 'High.',
            backlogs: 'Zero.',
            gap: 'Needs explanation.',
            notes: 'Nintendo of America (Redmond) handles a lot of web/storefront infra, while Kyoto handles the actual hardware/core games. Japanese fluency is a massive plus for global integration.'
        },
        culture: {
            wlb: 'Excellent. Japanese corporate structure but they famously delayed major games (Zelda) to avoid brutal crunch. "A delayed game is eventually good..."',
            remote: 'Strictly In-office.',
            vibe: 'Secretive, traditional, highly perfectionist. Working there is like working at a highly secure toy factory. Very little "Silicon Valley tech-bro" culture.'
        },
        reality: {
            good: ['Incredible prestige globally', 'Once you are in, job security is practically infinite (Japanese employment culture)', 'Very respectful WLB'],
            bad: ['Tech stack is extremely unique and often outdated compared to modern cloud companies', 'Difficult for non-Japanese speakers to reach top executive ranks globally', 'Extremely secretive']
        }
    }
];
