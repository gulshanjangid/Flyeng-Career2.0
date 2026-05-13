import { CompanyData } from './types';

export const faangCompanies: CompanyData[] = [
    {
        id: 'google',
        name: 'Google',
        type: 'Product',
        status: 'Active',
        logo: 'GOO',
        rating: 4.8,
        aiVerdict: 'The engineering benchmark. Expect rigorous algorithmic rounds and heavy emphasis on scalable system design. Domain knowledge takes a backseat to core computer science fundamentals.',
        overview: {
            about: 'Alphabet Inc. (Google) is a multinational technology conglomerate holding company. It focuses on artificial intelligence, search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.',
            headquarters: 'Mountain View, California (Global HQ) / Bangalore & Hyderabad (India Hubs)',
            size: '180,000+ Employees',
            founded: '1998',
            website: 'careers.google.com'
        },
        roles: [
            {
                title: 'Software Engineer (L3)',
                ctc: '₹ 32L - 45L',
                base: '₹ 18,00L - 22,00L',
                variable: '15% target bonus',
                rsus: '$40k - $60k over 4 years',
                deductions: 'Tax (30%), PF, Gratuity',
                inHand: '₹ 1.2L - 1.4L'
            },
            {
                title: 'Software Engineer (L4)',
                ctc: '₹ 55L - 75L',
                base: '₹ 30,00L - 38,00L',
                variable: '15% target bonus',
                rsus: '$80k - $120k over 4 years',
                deductions: 'Tax (30%+), PF, Gratuity',
                inHand: '₹ 1.8L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['Lit', 'Angular', 'TypeScript', 'Wiz'],
            backend: ['C++', 'Java', 'Go', 'Python'],
            infra: ['Borg', 'Kubernetes', 'GCP', 'Spanner', 'Bigtable'],
            data: ['Flume', 'MapReduce', 'TensorFlow', 'JAX']
        },
        process: [
            {
                step: 'Phone Screen (1 Round)',
                description: 'Initial technical screen focused on medium-level data structures and algorithms.',
                duration: '45 mins',
                difficulty: 'Hard',
                topics: ['Trees', 'Graphs', 'Dynamic Programming']
            },
            {
                step: 'Onsite Loop (4-5 Rounds)',
                description: 'Full day of deep technical rounds. 3-4 coding rounds, 1 system design (for L4+), and 1 Googliness & Leadership round.',
                duration: '5 hours',
                difficulty: 'Expert',
                topics: ['Advanced DSA', 'System Design (L4+)', 'Behavioral']
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
            cgpa: 'No strict cutoff, but 8.0+ preferred for campus hires.',
            backlogs: 'Clearing all backlogs prior to joining is strictly required.',
            gap: 'Education gaps are generally accepted if justified with valid reasons.',
            notes: 'Strong competitive programming profile (Codeforces Master, ICPC) highly increases interview chances.'
        },
        culture: {
            wlb: 'Generally excellent, but team-dependent (GCP teams often have worse WLB than Search).',
            remote: 'Hybrid model. Usually 3 days in office mandated by Return to Office (RTO) policies.',
            vibe: 'Highly academic and engineering-driven. "Googley" culture emphasizes consensus-building, which can sometimes slow down product launches. Incredible internal tooling.'
        },
        reality: {
            good: ['Incredible perks & food', 'Top-tier talent pool', 'Unhinge your resume value', 'Scale of problems you solve is unmatched'],
            bad: ['Slow promotion velocity', 'Impact can feel minute in massive orgs', 'Promo process is highly bureaucratic']
        }
    },
    {
        id: 'amazon',
        name: 'Amazon',
        type: 'Product',
        status: 'Active',
        logo: 'AMA',
        rating: 4.2,
        aiVerdict: 'Leadership Principles are non-negotiable. Expect the STAR method for behavioral questions embedded within every single technical round regardless of seniority.',
        overview: {
            about: 'Amazon.com, Inc. is an American multinational technology company covering e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
            headquarters: 'Seattle, Washington (Global HQ) / Bangalore, Hyderabad, Delhi NCR (India Hubs)',
            size: '1,500,000+ Employees',
            founded: '1994',
            website: 'amazon.jobs'
        },
        roles: [
            {
                title: 'SDE 1 (L4)',
                ctc: '₹ 28L - 40L',
                base: '₹ 15,00L - 18,00L',
                variable: 'Sign-on bonus Y1 & Y2',
                rsus: '5% / 15% / 40% / 40% vesting schedule',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.1L - 1.25L (Excl. Joining Bonus)'
            },
            {
                title: 'SDE 2 (L5)',
                ctc: '₹ 45L - 70L',
                base: '₹ 28,00L - 40,00L',
                variable: 'Sign-on bonus Y1 & Y2',
                rsus: 'Back-heavy vesting schedule',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.7L - 2.5L'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js', 'Internal AWS UI toolkits'],
            backend: ['Java', 'Ruby', 'Python', 'C++'],
            infra: ['AWS (Everything)', 'EC2', 'S3', 'DynamoDB', 'Lambda'],
            data: ['Redshift', 'EMR', 'Kinesis', 'Sagemaker']
        },
        process: [
            {
                step: 'Online Assessment (OA)',
                description: '2 Coding questions + Work Style (LP) Assessment. Extremely strict hidden test cases.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['Arrays', 'Strings', 'Graphs', 'Amazon LPs']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: '3 Technical rounds (DSA/Design) + 1 Bar Raiser round. ALL rounds include 20 mins of Leadership Principle behavioral questions.',
                duration: '4-5 hours',
                difficulty: 'Expert',
                topics: ['System Design (LLD/HLD)', 'STAR Method', 'DSA']
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
            cgpa: '7.5+ typically required for campus drives.',
            backlogs: 'No active backlogs allowed.',
            gap: 'Accepted, but must be clearly explained during the behavioral rounds.',
            notes: 'The OA is the biggest filter. Use C++ or Java for faster execution if possible.'
        },
        culture: {
            wlb: 'Notoriously tough. "Day 1" mentality means high operational load, frequent on-call rotations, and fast-paced delivery.',
            remote: 'Strict RTO policy in effect. Often 5 days a week depending on the org.',
            vibe: 'Frugal, document-driven (6-pagers instead of PowerPoints), and relentlessly customer-obsessed. High churn rate but incredible learning curve.'
        },
        reality: {
            good: ['You learn how to build for extreme scale', 'AWS knowledge becomes elite', 'Great stepping stone for career'],
            bad: ['PIP (Performance Improvement Plan) culture is real', 'On-call (sevs/tickets) can ruin weekends', 'Back-heavy RSUs mean you lose money if you quit early']
        }
    },
    {
        id: 'apple',
        name: 'Apple',
        type: 'Product',
        status: 'Inactive',
        logo: 'APP',
        rating: 4.6,
        aiVerdict: 'Highly secretive. Hardware/Software intersection requires deep domain expertise over generic leetcode-style problem solving in many orgs.',
        overview: {
            about: 'Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.',
            headquarters: 'Cupertino, California (Apple Park) / Bangalore & Hyderabad (India Hubs)',
            size: '160,000+ Employees',
            founded: '1976',
            website: 'jobs.apple.com'
        },
        roles: [
            {
                title: 'ICT3 (Software Engineer)',
                ctc: '₹ 30L - 45L',
                base: '₹ 18,00L - 25,00L',
                variable: '10% target bonus',
                rsus: '$40k - $80k over 4 years',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.2L - 1.5L'
            },
            {
                title: 'ICT4 (Senior Software Engineer)',
                ctc: '₹ 50L - 80L',
                base: '₹ 35,00L - 45,00L',
                variable: '15% target bonus',
                rsus: '$100k+ over 4 years',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.0L - 2.8L'
            }
        ],
        techStack: {
            frontend: ['SwiftUI', 'UIKit', 'React', 'Vue (Internal Tools)'],
            backend: ['Java', 'Python', 'Go', 'Scala'],
            infra: ['Kubernetes', 'AWS', 'Own Data Centers', 'Cassandra'],
            data: ['Hadoop', 'Spark', 'CoreML', 'Foundation Models']
        },
        process: [
            {
                step: 'Team Matching / Initial Screen',
                description: 'Apple hires per team, not generic. The hiring manager screens you first for exact domain fit.',
                duration: '45 mins',
                difficulty: 'Medium',
                topics: ['Resume Deep Dive', 'Domain Specifics (iOS/Backend/Embedded)']
            },
            {
                step: 'Onsite Loop (5-6 Rounds)',
                description: 'Heavy mix of domain architecture, coding, and behavioral. Very conversational but deep technical drilling.',
                duration: '6 hours',
                difficulty: 'Expert',
                topics: ['Concurrency', 'Memory Management', 'System Design', 'DSA']
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
            cgpa: '8.0+ preferred for campus.',
            backlogs: 'Zero active backlogs required.',
            gap: 'Reviewed on a case-by-case basis.',
            notes: 'Very low reliance on standard OA tests. It is heavily network and recruiter-driven.'
        },
        culture: {
            wlb: 'Good to great, highly dependent on the "secrecy" and launch cycle of your specific product (e.g., iPhone launch crunch).',
            remote: 'Strict RTO. 3 days a week minimum, often full 5 days in hardware orgs.',
            vibe: 'Siloed. You only know what you are working on. Extreme focus on user experience, design, and perfection over speed.'
        },
        reality: {
            good: ['Best-in-class hardware access', 'Brand prestige', 'Stock has a history of steady growth', 'Benefits are excellent (Apples discounts)'],
            bad: ['Internal tooling can be archaic', 'Extreme secrecy hinders cross-team collaboration', 'Promotions can be slow']
        }
    },
    {
        id: 'microsoft',
        name: 'Microsoft',
        type: 'Product',
        status: 'Active',
        logo: 'MIC',
        rating: 4.7,
        aiVerdict: 'Excellent work-life balance and a massive shift towards AI (OpenAI partnership). Interview process is standard DSA but highly values clean, maintainable code.',
        overview: {
            about: 'Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.',
            headquarters: 'Redmond, Washington (Global HQ) / Hyderabad, Bangalore, Noida (India Hubs)',
            size: '220,000+ Employees',
            founded: '1975',
            website: 'careers.microsoft.com'
        },
        roles: [
            {
                title: 'Software Engineer (L59/L60)',
                ctc: '₹ 20L - 30L',
                base: '₹ 13,00L - 16,00L',
                variable: '10-15% target bonus',
                rsus: '$15k - $30k over 4 years',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 85k - 1.1L'
            },
            {
                title: 'Software Engineer II (L61/L62)',
                ctc: '₹ 35L - 55L',
                base: '₹ 22,00L - 32,00L',
                variable: '15-20% target bonus',
                rsus: '$40k - $80k over 4 years',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.4L - 1.9L'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript', 'Angular', 'Fluent UI'],
            backend: ['C#', '.NET', 'C++', 'Java', 'Python'],
            infra: ['Azure', 'Service Fabric', 'Kubernetes', 'Cosmos DB'],
            data: ['Azure SQL', 'Synapse', 'Databricks', 'OpenAI APIs']
        },
        process: [
            {
                step: 'Online Assessment / Codility',
                description: '2-3 standard coding questions. Medium difficulty, usually focused on arrays, strings, and trees.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Arrays', 'Strings', 'Linked Lists']
            },
            {
                step: 'Onsite Loop (3-4 Rounds)',
                description: 'Mix of coding, LLD, and behavioral. ' + "AA (As Appropriate) round" + ' is the hiring manager final behavioral/technical combo.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Object Oriented Design', 'DSA', 'Core CS Fundamentals']
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
            cgpa: '7.5+ typically required for campus drives.',
            backlogs: 'None allowed at the time of joining.',
            gap: 'Generally accepted.',
            notes: 'Microsoft hires heavily from top NITs/IITs via campus, but laterally relies on standard leetcode-medium.'
        },
        culture: {
            wlb: 'Widely considered the best among big tech (often called a "Rest and Vest" paradise), though Azure and AI teams run much hotter.',
            remote: 'Highly flexible. Hybrid (2-3 days) is common, and fully remote is possible with manager approval.',
            vibe: 'Mature, collaborative, and benefits-heavy. The culture shift under Satya Nadella has made it highly empathetic and growth-oriented.'
        },
        reality: {
            good: ['Incredible work-life balance', 'Great benefits and health insurance', 'Stable employment and predictable RSU growth'],
            bad: ['Comp is lower than Google/Meta/Amazon at lower levels', 'Internal tech stack (.NET ecosystem) might not appeal to everyone', 'Can be bureaucratic']
        }
    },
    {
        id: 'meta',
        name: 'Meta',
        type: 'Product',
        status: 'Active',
        logo: 'MET',
        rating: 4.5,
        aiVerdict: 'Move Fast. The interview heavily indexes on raw Leetcode speed and bug-free execution. Very flat structure and impact-driven.',
        overview: {
            about: 'Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.',
            headquarters: 'Menlo Park, California (Global HQ) / Gurgaon, Hyderabad, Bangalore (India Hubs - mostly regional/partner eng)',
            size: '70,000+ Employees',
            founded: '2004',
            website: 'metacareers.com'
        },
        roles: [
            {
                title: 'E3 (Software Engineer)',
                ctc: '₹ 45L - 60L (London/US remote eq.)',
                base: '₹ 25,00L - 30,00L',
                variable: '10% target bonus',
                rsus: '$60k+ over 4 years',
                deductions: 'Tax (30%+)',
                inHand: '₹ 1.5L - 1.8L'
            },
            {
                title: 'E4 (Software Engineer)',
                ctc: '₹ 70L - 1Cr+',
                base: '₹ 40,00L - 50,00L',
                variable: '15% target bonus',
                rsus: '$150k+ over 4 years',
                deductions: 'Tax (30%+)',
                inHand: '₹ 2.5L+'
            }
        ],
        techStack: {
            frontend: ['React', 'Relay', 'GraphQL', 'Flow'],
            backend: ['Hack (PHP)', 'C++', 'Python', 'Rust'],
            infra: ['TAO', 'MySQL', 'Memcached', 'Custom Datacenters'],
            data: ['Presto', 'Spark', 'PyTorch', 'Llama']
        },
        process: [
            {
                step: 'Phone Screen (1 Round)',
                description: '2 Leetcode Mediums in 45 minutes. Extremely fast-paced. Must provide optimal solution quickly.',
                duration: '45 mins',
                difficulty: 'Expert',
                topics: ['Arrays', 'Trees', 'Graphs', 'Hash Maps']
            },
            {
                step: 'Onsite Loop (4-5 Rounds)',
                description: '2 Coding (Speed), 1 System Design (For E4+), 1 Behavioral (Jedi).',
                duration: '4-5 hours',
                difficulty: 'Expert',
                topics: ['Product Design/System Design', 'Behavioral', 'Advanced DSA']
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
            cgpa: 'Not strict, strictly elite problem-solving skills.',
            backlogs: 'Not specified internally, but typically 0.',
            gap: 'Accepted.',
            notes: 'Meta evaluates primarily out of London/US internally. Indian hires are often in specific Enterprise or Partner Engineering roles.'
        },
        culture: {
            wlb: 'Intense and impact-driven. PSC (Performance Summary Cycle) every 6 months puts pressure on continuous delivery.',
            remote: 'Strict RTO. 3 days a week mandated.',
            vibe: 'Hacker culture. Flat hierarchy where code wins arguments. Bootcamp process allows you to choose your own team after joining.'
        },
        reality: {
            good: ['Top tier compensation (often highest in FAANG)', 'Bootcamp onboarding is world-class', 'Incredible internal tools', 'Fast promotion track if you are good'],
            bad: ['Cutthroat performance review cycles', 'Constant shifting priorities', 'Codebase is massive and can be daunting']
        }
    },
    {
        id: 'netflix',
        name: 'Netflix',
        type: 'Product',
        status: 'Inactive',
        logo: 'NET',
        rating: 4.9,
        aiVerdict: 'Keeper test culture. Only top of market talent. Extreme emphasis on senior, independent contributors who thrive in high-context environments. No juniors.',
        overview: {
            about: 'Netflix, Inc. is an American media company and subscription video on-demand over-the-top streaming service.',
            headquarters: 'Los Gatos, California (Global HQ) / Mumbai (India Content/Partner Hub)',
            size: '13,000+ Employees',
            founded: '1997',
            website: 'jobs.netflix.com'
        },
        roles: [
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 1.5Cr - 3Cr+',
                base: '₹ 1.5Cr - 3Cr+ (All Cash Option)',
                variable: '0% (Self-allocated options)',
                rsus: 'Employee choice (Stock vs Cash)',
                deductions: 'Highest Tax Bracket',
                inHand: '₹ 8L - 15L+'
            }
        ],
        techStack: {
            frontend: ['React', 'Node.js', 'RxJS'],
            backend: ['Java', 'Spring Boot', 'Python', 'Node.js'],
            infra: ['AWS', 'Titus', 'Cassandra', 'EVCache'],
            data: ['Apache Flink', 'Spark', 'Kafka', 'Druid']
        },
        process: [
            {
                step: 'Recruiter Screen & Take-home or Phone Screen',
                description: 'Heavy focus on cultural alignment (Freedom & Responsibility) and senior technical depth.',
                duration: '1-6 hours depending on format',
                difficulty: 'Hard',
                topics: ['Domain deep dive', 'Culture']
            },
            {
                step: 'Onsite Loop (4-6 Rounds)',
                description: 'Intense rounds focusing on architecture, historical project deep-dives, failing scenarios, and extreme cultural fit screening.',
                duration: '6 hours',
                difficulty: 'Nightmare',
                topics: ['System Architecture', 'Microservices', 'Failure Resilience', 'Culture Fit']
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
            cgpa: 'Irrelevant. They do not hire freshers.',
            backlogs: 'N/A',
            gap: 'Irrelevant.',
            notes: 'Netflix historically only hires L5 (Senior) and above. You must have a proven track record of shipping massive systems.'
        },
        culture: {
            wlb: 'Completely unmonitored. You take as much vacation as you want, but you are expected to perform at an elite level continuously.',
            remote: 'Flexible, but increasingly encouraging in-office for collaboration.',
            vibe: 'Adults only. Freedom and Responsibility. The "Keeper Test" means if your manager wouldn\'t fight to keep you, you get generous severance and are let go.'
        },
        reality: {
            good: ['Highest liquid compensation in tech', 'Work with the absolute best engineers', 'No micromanagement, total freedom', 'No PIPs, just a clean break/severance if it doesn\'t work'],
            bad: ['Constant high pressure to perform', 'Job security is tied directly to daily output', 'Not a place to learn the ropes']
        }
    },
    {
        id: 'uber',
        name: 'Uber',
        type: 'Product',
        status: 'Active',
        logo: 'UBE',
        rating: 4.3,
        aiVerdict: 'Elite engineering. The system design round is notoriously difficult due to the geographical scaling required. High comp, hard work.',
        overview: {
            about: 'Uber Technologies, Inc., commonly referred to as Uber, is a transportation conglomerate. It offers ride-hailing, food delivery, and freight transport.',
            headquarters: 'San Francisco, California (Global HQ) / Bangalore, Hyderabad (India Hubs)',
            size: '30,000+ Employees',
            founded: '2009',
            website: 'uber.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer I',
                ctc: '₹ 35L - 50L',
                base: '₹ 20,00L - 25,00L',
                variable: '10-15% target bonus',
                rsus: '$30k - $50k over 4 years',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.3L - 1.6L'
            },
            {
                title: 'Software Engineer II',
                ctc: '₹ 60L - 85L',
                base: '₹ 35,00L - 45,00L',
                variable: '15% target bonus',
                rsus: '$80k - $140k over 4 years',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.0L - 2.6L'
            }
        ],
        techStack: {
            frontend: ['React', 'Base Web', 'Figma', 'TypeScript'],
            backend: ['Go', 'Java', 'Python', 'Node.js'],
            infra: ['Microservices', 'Kafka', 'Redis', 'Cassandra'],
            data: ['Hadoop', 'Spark', 'Presto', 'Pinot']
        },
        process: [
            {
                step: 'Online Assessment (CodeSignal)',
                description: 'Standard CodeSignal 4-question test. Usually requires a score of 800+ (or max tier) to proceed.',
                duration: '70 mins',
                difficulty: 'Hard',
                topics: ['Arrays', 'Math', 'Implementation']
            },
            {
                step: 'Onsite Loop (4-5 Rounds)',
                description: '2 Coding (Problem Solving), 1 Machine Coding/Architecture, 1 System Design (For L2+), and 1 Behavioral.',
                duration: '5 hours',
                difficulty: 'Expert',
                topics: ['Machine Coding', 'Geospatial Design', 'DSA']
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
            cgpa: '8.0+ generally preferred for campus.',
            backlogs: 'Zero active backlogs.',
            gap: 'Accepted if justified.',
            notes: 'Machine coding round expects you to build a working, object-oriented mini-app (like an in-memory cache or mini-Uber) in 90 mins.'
        },
        culture: {
            wlb: 'Hustle culture is still prevalent. Expect intense sprints and high ownership of your systems.',
            remote: 'RTO enforced. 50% of the time in the office (usually 2-3 days minimum).',
            vibe: 'Extremely strong engineering chops. They built much of their stack from scratch (like standardizing on Go early on). Fast-paced, iterative.'
        },
        reality: {
            good: ['Compensation is top-tier in India, rivaling Meta/Google', 'Resume prestige is immense', 'Technically challenging, solve interesting geospatial problems'],
            bad: ['Can be chaotic sometimes', 'WLB can suffer heavily on core teams (matching, dispatch)', 'Heavy on-call loads']
        }
    },
    {
        id: 'airbnb',
        name: 'Airbnb',
        type: 'Product',
        status: 'Inactive',
        logo: 'AIR',
        rating: 4.8,
        aiVerdict: 'Design-led company. Technical screens heavily favor domain expertise (e.g., proper React knowledge) over raw algorithmic puzzles.',
        overview: {
            about: 'Airbnb, Inc. is an American online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities.',
            headquarters: 'San Francisco, California (Global HQ) / Bangalore (India Hub - Growing)',
            size: '6,000+ Employees',
            founded: '2008',
            website: 'careers.airbnb.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 40L - 60L',
                base: '₹ 22,00L - 28,00L',
                variable: '15% target bonus',
                rsus: '$40k - $80k over 4 years',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.4L - 1.8L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 75L - 1.2Cr',
                base: '₹ 45,00L - 55,00L',
                variable: '15-20% target bonus',
                rsus: '$120k - $200k+ over 4 years',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.8L - 3.4L'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript', 'GraphQL', 'Next.js'],
            backend: ['Java', 'Ruby on Rails', 'Kotlin'],
            infra: ['AWS', 'Kubernetes', 'DynamoDB', 'Redis'],
            data: ['Airflow', 'Spark', 'Druid', 'Superset']
        },
        process: [
            {
                step: 'Take-home / Domain Screen',
                description: 'Often involves building a mini-app (for frontend) or a practical backend API service instead of pure leetcode.',
                duration: 'Varies',
                difficulty: 'Medium',
                topics: ['React', 'API Design', 'Testing']
            },
            {
                step: 'Onsite Loop (4-5 Rounds)',
                description: '2 Domain explicit coding rounds, 1 System Architecture, 2 Core Values (Behavioral) rounds.',
                duration: '5 hours',
                difficulty: 'Hard',
                topics: ['Practical Coding', 'System Design', 'Core Values']
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
            cgpa: '7.5+ preferred.',
            backlogs: 'Zero active.',
            gap: 'Accepted.',
            notes: '"Core Values" behavioral round is heavily weighted. They will reject technically brilliant candidates if they fail the culture fit.'
        },
        culture: {
            wlb: 'Excellent. Varies by team, but generally highly respectful of personal boundaries.',
            remote: '"Live and work from anywhere" policy. One of the best remote policies in Big Tech.',
            vibe: 'Design-centric, empathetic, and highly collaborative. Focus is on creating belonging and beautiful user experiences. Tech is top-notch (they created Airflow).'
        },
        reality: {
            good: ['Incredible remote work policy', 'High compensation and great RSU value', 'Beautiful offices (if you go)', 'Employees get travel credits'],
            bad: ['Slow hiring process', 'Tech debt in legacy Ruby components', 'Heavy emphasis on consensus can slow decisions']
        }
    },
    {
        id: 'stripe',
        name: 'Stripe',
        type: 'Startup',
        status: 'Active',
        logo: 'STR',
        rating: 4.8,
        aiVerdict: 'The pinnacle of developer experience. Interview is uniquely practical: bug squashing and integrating APIs instead of whiteboard algorithms.',
        overview: {
            about: 'Stripe is an Irish-American financial services and software as a service company dual-headquartered in South San Francisco, California and Dublin, Ireland.',
            headquarters: 'San Francisco & Dublin (Global HQ) / Bangalore (India Hub)',
            size: '7,000+ Employees',
            founded: '2010',
            website: 'stripe.com/jobs'
        },
        roles: [
            {
                title: 'L1 (Software Engineer)',
                ctc: '₹ 45L - 60L',
                base: '₹ 25,00L - 32,00L',
                variable: '10% bonus',
                rsus: '$40k - $70k over 4 years',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.5L - 2.0L'
            },
            {
                title: 'L2/L3 (Software Engineer)',
                ctc: '₹ 70L - 1Cr+',
                base: '₹ 40,00L - 55,00L',
                variable: '10-15% bonus',
                rsus: '$100k+ over 4 years',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.5L - 3.5L'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript', 'Sail'],
            backend: ['Ruby', 'Sorbet (Static typing for Ruby)', 'Java', 'Go'],
            infra: ['AWS', 'Kubernetes', 'MongoDB', 'PostgreSQL'],
            data: ['Presto', 'Spark', 'Redshift']
        },
        process: [
            {
                step: 'Phone Screen (Integration/Bug Fix)',
                description: 'You will clone a repo, read an API doc, and either fix a bug or integrate a feature in your IDE.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['API Integration', 'Debugging', 'Reading Docs']
            },
            {
                step: 'Onsite Loop (4-5 Rounds)',
                description: '1 Bug Squash round, 1 Integration round, 1 System Design, 1 Behavioral/Manager.',
                duration: '4-5 hours',
                difficulty: 'Hard',
                topics: ['Practical Coding', 'System Design', 'Communication']
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
            cgpa: 'No strict cutoff. High preference for open source contributions.',
            backlogs: 'None preferred.',
            gap: 'Accepted.',
            notes: 'Stripe\'s interview is the closest to actual day-to-day software engineering. Algorithms rarely appear.'
        },
        culture: {
            wlb: 'Intense but rewarding. Work is highly visible and impactful. Operational excellence is mandatory due to handling money.',
            remote: 'Very remote-friendly structure even before the pandemic.',
            vibe: 'Written communication is king. Clear design docs, high rigor, extreme attention to developer experience and API design (Stripe\'s APIs are legendary).'
        },
        reality: {
            good: ['Incredible, practical interview process', 'Massive compensation and prestige', 'You work with elite peers', 'Focus on quality over speed'],
            bad: ['Ruby codebase (even with Sorbet) can be polarizing', 'High operational stress (downtime means millions lost)', 'Private company (stock is illiquid until IPO/tender offers)']
        }
    },
    {
        id: 'openai',
        name: 'OpenAI',
        type: 'Startup',
        status: 'Active',
        logo: 'OAI',
        rating: 4.8,
        aiVerdict: 'The frontier of AI. Interviews heavily vet deep systems engineering (CUDA, PyTorch internals) or elite web platform skills. Bleeding edge tech.',
        overview: {
            about: 'OpenAI is an American artificial intelligence research organization consisting of the non-profit OpenAI, Inc. and its for-profit subsidiary OpenAI Global, LLC.',
            headquarters: 'San Francisco, California',
            size: '2,000+ Employees',
            founded: '2015',
            website: 'openai.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '$300k - $500k+',
                base: '$200k - $250k',
                variable: 'Varies',
                rsus: 'PPUs (Profit Participation Units)',
                deductions: 'US Tax Brackets',
                inHand: 'Varies based on location/tax'
            },
            {
                title: 'Research Engineer',
                ctc: '$400k - $800k+',
                base: '$250k - $300k',
                variable: 'Varies',
                rsus: 'PPUs (Profit Participation Units)',
                deductions: 'US Tax Brackets',
                inHand: 'Varies based on location/tax'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js', 'Typescript', 'Tailwind'],
            backend: ['Python', 'Rust', 'Go'],
            infra: ['Azure', 'Kubernetes', 'Triton', 'CUDA'],
            data: ['PyTorch', 'Massive GPU Clusters']
        },
        process: [
            {
                step: 'Technical Screen',
                description: 'Deep dive into either deep learning internals (backprop from scratch) or high-performance systems (concurrency/C++).',
                duration: '60 mins',
                difficulty: 'Expert',
                topics: ['Systems', 'Math', 'ML Internals']
            },
            {
                step: 'Onsite Loop (5-6 Rounds)',
                description: 'Mix of pair programming, architecture design (for scale), and deep alignment with AGI mission.',
                duration: '6+ hours',
                difficulty: 'Nightmare',
                topics: ['Distributed Training Design', 'Advanced Algorithms', 'Culture Alignment']
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
            cgpa: 'Top tier university pedigree heavily represented.',
            backlogs: 'N/A',
            gap: 'Case by Case.',
            notes: 'Hiring bar is currently arguably the highest in the world. They actively poach top performers from Google Brain/DeepMind/Meta FAIR.'
        },
        culture: {
            wlb: 'Tough. Startup environment moving at breakneck speed trying to stay ahead of Google and open source.',
            remote: 'In-office (SF) heavily preferred for researchers, though exceptions exist.',
            vibe: 'Mission-driven (AGI). Incredible talent density. Can be highly chaotic due to hyper-growth and leadership shifts.'
        },
        reality: {
            good: ['Working on literally the most impactful tech in human history', 'Insane compensation (PPUs)', 'Resume reaches absolute peak status'],
            bad: ['Extreme pressure and crazy hours', 'Constantly shifting org structures', 'You are heavily tied to the SF ecosystem']
        }
    }
];
