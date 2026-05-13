import { CompanyData } from './types';

export const startupCompanies: CompanyData[] = [
    {
        id: 'databricks',
        name: 'Databricks',
        type: 'Startup',
        status: 'Active',
        logo: 'DAT',
        rating: 4.8,
        aiVerdict: 'Elite data engineering. Founded by the creators of Apache Spark. Interviews focus heavily on distributed systems theory, JVM internals, and massive scale concurrency.',
        overview: {
            about: 'Databricks is an American enterprise software company founded by the creators of Apache Spark. It provides a unified data analytics platform.',
            headquarters: 'San Francisco, US / Bangalore (Major engineering hub)',
            size: '6,000+ Employees',
            founded: '2013',
            website: 'databricks.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 45L - 65L',
                base: '₹ 28,00,000 - 35,00,000',
                variable: '10%',
                rsus: 'Pre-IPO Equity (Massive upside potential)',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.8L - 2.2L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 80L - 1.5Cr+',
                base: '₹ 50,00,000 - 65,00,000',
                variable: '15%',
                rsus: 'Pre-IPO Equity ($150k+ over 4 years)',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 3.0L - 3.8L'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript', 'Redux'],
            backend: ['Scala', 'Java', 'Python', 'C++ (Photon engine)'],
            infra: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
            data: ['Apache Spark', 'Delta Lake', 'MLflow']
        },
        process: [
            {
                step: 'Technical Screen / Leetcode',
                description: 'Extremely tricky algorithms, often graph or hard DP questions. Pass rate is notably low.',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['Graphs', 'DP', 'Hard Arrays']
            },
            {
                step: 'Onsite Loops (4-5 Rounds)',
                description: '2 Coding (Hard), 1 System Design (Focusing on Big Data/Spark internals), 1 Concurrency/Multithreading, 1 HM.',
                duration: '5 hours',
                difficulty: 'Expert',
                topics: ['Distributed Systems', 'Scala/Java Concurrency', 'Algorithms']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: 'Highly selective. Top IIT/NIT tier is heavily favored for fresh hires.',
            backlogs: 'Zero.',
            gap: 'Needs extremely strong justification (e.g., failed startup).',
            notes: 'Familiarity with functional programming (Scala) and Apache Spark architecture is a massive plus.'
        },
        culture: {
            wlb: 'Intense. Hyper-growth startup pushing towards IPO. Expected to deliver quickly and at extreme scale.',
            remote: 'Hybrid. In-office 3 days usually mandated for engineering.',
            vibe: 'Highly academic and competitive. You are working with some of the smartest data infrastructure engineers on the planet.'
        },
        reality: {
            good: ['Highest pre-IPO compensation potential in the industry', 'Work with the creators of Spark', 'Incredible brand value on your resume'],
            bad: ['Intense pressure and long hours', 'Scala can be a polarizing backend language', 'ESOPs are illiquid until IPO']
        }
    },
    {
        id: 'snowflake',
        name: 'Snowflake',
        type: 'Startup',
        status: 'Active',
        logo: 'SNO',
        rating: 4.7,
        aiVerdict: 'The arch-rival to Databricks. Deep C++ data warehousing. Interviews emphasize C++ memory management, low-level OS, and high-performance SQL execution.',
        overview: {
            about: 'Snowflake Inc. is an American cloud computing-based data cloud company based in Bozeman, Montana. It offers a cloud-based data storage and analytics service.',
            headquarters: 'Bozeman, Montana, US / Pune, Bangalore (India Hubs)',
            size: '7,000+ Employees',
            founded: '2012',
            website: 'snowflake.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 40L - 60L',
                base: '₹ 25,00,000 - 32,00,000',
                variable: '10%',
                rsus: '$40k - $80k (Public Stock)',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.5L - 2.0L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 75L - 1Cr+',
                base: '₹ 45,00,000 - 55,00,000',
                variable: '15%',
                rsus: '$120k+ over 4 years',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.8L - 3.4L'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript'],
            backend: ['C++ (Core DB Engine)', 'Java (Metadata services)', 'Python'],
            infra: ['AWS', 'Azure', 'GCP', 'FoundationDB'],
            data: ['Snowflake DB (Proprietary Columnar DB)']
        },
        process: [
            {
                step: 'Online Assessment / Hackerrank',
                description: '2 Hard coding questions focusing on data structures and string parsing. Often extremely strict time limits.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['String Parsing', 'Hard Algorithms']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: '2 Coding Rounds (Whiteboard, usually C++/Java focused), 1 System Design (focus on DB internals), 1 Behavioral.',
                duration: '4-5 hours',
                difficulty: 'Hard',
                topics: ['DB Internals', 'Concurrency', 'Algorithms']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: '8.0+ generally expected.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'Understanding how column-oriented databases work under the hood is crucial for senior roles.'
        },
        culture: {
            wlb: 'More balanced than a pre-IPO startup since they are public, but still demands high technical rigor.',
            remote: 'Hybrid/In-office. Varies tightly by org.',
            vibe: 'Extremely focused. It is highly profitable software and the engineering standard reflects the cost of failure. Less "startup chaos", more "engineering rigor".'
        },
        reality: {
            good: ['Stock is publicly traded and historically strong', 'Incredible compensation packages comparable to FAANG', 'Tackling bleeding-edge data warehousing problems'],
            bad: ['Working deep in C++ can isolate you from web trends', 'High barrier to entry', 'Intense technical grilling internally for design docs']
        }
    },
    {
        id: 'notion',
        name: 'Notion',
        type: 'Startup',
        status: 'Active',
        logo: 'NOT',
        rating: 4.8,
        aiVerdict: 'Design engineering paradise. Interviews heavily bias towards practical frontend React/DOM mastery, local-first architectures, and extreme polish.',
        overview: {
            about: 'Notion Labs Inc is an American software startup based in San Francisco, California. It develops the Notion productivity application.',
            headquarters: 'San Francisco, US / Hyderabad (Growing Hub)',
            size: '1,500+ Employees',
            founded: '2016',
            website: 'notion.so/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 40L - 60L',
                base: '₹ 25,00,000 - 32,00,000',
                variable: 'None (Usually higher base instead)',
                rsus: 'Pre-IPO Equity',
                deductions: 'Tax (30%)',
                inHand: '₹ 1.6L - 2.0L'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript', 'ProseMirror (Text Editor)', 'MobX'],
            backend: ['Node.js', 'PostgreSQL', 'Redis'],
            infra: ['AWS', 'Datadog', 'Docker'],
            data: ['Postgres (Heavily sharded)']
        },
        process: [
            {
                step: 'Take Home Project / Practical Screen',
                description: 'You will likely build a mini-app (e.g. a collaborative text box or Kanban board) using React. Graded on pixel perfection and state management.',
                duration: 'Varies',
                difficulty: 'Medium',
                topics: ['React', 'State Mgmt', 'CSS']
            },
            {
                step: 'Onsite Loop (4 Rounds)',
                description: '1 Architecture round (Offline-first data sync), 2 Practical Coding (Integrating APIs / Bug Fix), 1 Values Fit.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Offline Sync', 'React Internals', 'Design']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: 'Not strict. Portfolio and open source work matter way more.',
            backlogs: 'N/A.',
            gap: 'Accepted.',
            notes: 'If interviewing for frontend, you MUST understand how contenteditable works and how to manage complex local state (CRDTs for multiplayer sync).'
        },
        culture: {
            wlb: 'Respectful, but very high bar for output quality.',
            remote: 'Hybrid. High emphasis on in-person collaboration for design/engineering iterations.',
            vibe: 'Arts-and-crafts meets hardcore engineering. Extreme focus on aesthetics, typography, and micro-interactions. Very low ego.'
        },
        reality: {
            good: ['Work on a product that is universally loved', 'Incredible design culture', 'Top tier base salaries with massive IPO potential'],
            bad: ['NodeJS backend can hit scaling complexites', 'Building a rich text editor is notoriously frustrating engineering', 'Illiquid options currently']
        }
    },
    {
        id: 'figma',
        name: 'Figma',
        type: 'Startup',
        status: 'Active',
        logo: 'FIG',
        rating: 4.9,
        aiVerdict: 'The holy grail of frontend/systems crossover. They built a C++ graphics engine running in WebAssembly. Requires insane browser mastery.',
        overview: {
            about: 'Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.',
            headquarters: 'San Francisco, US / Remote',
            size: '1,500+ Employees',
            founded: '2012',
            website: 'figma.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '$200k - $250k+ (Remote)',
                base: 'Very High',
                variable: 'Bonus',
                rsus: 'Pre-IPO Equity',
                deductions: 'Local tax',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['React', 'WebGL', 'WebAssembly (WASM)', 'TypeScript'],
            backend: ['C++ (Core rendering)', 'Rust', 'Ruby (Legacy)'],
            infra: ['AWS', 'Kubernetes'],
            data: ['PostgreSQL']
        },
        process: [
            {
                step: 'Technical Screen',
                description: 'Standard coding problem but explicitly looking for clean, modular, production-ready code rather than hacky competitive programming solutions.',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['Data Structures', 'Code Quality']
            },
            {
                step: 'Onsite (4 Rounds)',
                description: 'Deep dive into rendering pipelines, conflict resolution (multiplayer sync CRDTs), React internals, and a heavy behavioral round.',
                duration: '5 hours',
                difficulty: 'Expert',
                topics: ['CRDTs', 'WebGL/WASM', 'System Architecture']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: 'Irrelevant. They hunt for pure hackers and people deeply passionate about UI tech.',
            backlogs: 'N/A',
            gap: 'Accepted.',
            notes: 'Understanding how Figma uses Emscripten to compile C++ to WASM to bypass the DOM for rendering is highly recommended reading.'
        },
        culture: {
            wlb: 'Excellent. Highly praised for a kind, collaborative, and inclusive culture.',
            remote: 'Highly remote friendly. "Work from anywhere".',
            vibe: 'Hyper-creative. They are obsessed with making tools that remove friction for designers. Unbelievably high engineering talent density.'
        },
        reality: {
            good: ['Arguably the best engineering brand name right now (post Adobe-deal collapse)', 'Work on bleeding-edge web technology (WASM/WebGL)', 'Amazing culture'],
            bad: ['Extremely difficult to pass the interview', 'The codebase is incredibly complex (custom rendering engine)']
        }
    },
    {
        id: 'vercel',
        name: 'Vercel',
        type: 'Startup',
        status: 'Active',
        logo: 'VRC',
        rating: 4.6,
        aiVerdict: 'Next.js creators. Interviews are heavily biased towards Edge computing, React Server Components, and Next.js internals over standard Leetcode.',
        overview: {
            about: 'Vercel is an American cloud platform as a service company. The company maintains the Next.js web development framework.',
            headquarters: 'San Francisco, US / Remote',
            size: '800+ Employees',
            founded: '2015',
            website: 'vercel.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '$140k - $180k (Remote eq)',
                base: 'High Base',
                variable: 'N/A',
                rsus: 'ESOPs',
                deductions: 'Tax',
                inHand: 'Varies'
            }
        ],
        techStack: {
            frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
            backend: ['Node.js', 'Rust (Turbopack, core infra)', 'Go'],
            infra: ['AWS', 'Edge Networks (Cloudflare/Fastly underlying)'],
            data: ['PostgreSQL', 'Redis']
        },
        process: [
            {
                step: 'Take Home OR Practical Pair Programming',
                description: 'Build a small full-stack Next.js app focusing on caching strategies, edge functions, and clean UI.',
                duration: '120 mins',
                difficulty: 'Medium',
                topics: ['Next.js App Router', 'Caching', 'React']
            },
            {
                step: 'Onsite (3-4 Rounds)',
                description: 'Deep dive into frontend architecture, CI/CD pipeline building, Rust usage (for infra roles), and product sense.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Frontend Infra', 'Edge Computing', 'Product Sensibility']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: 'Irrelevant.',
            backlogs: 'N/A',
            gap: 'Accepted.',
            notes: 'A strong Github profile (specifically open source Next.js/React ecosystem contributions) will basically skip the initial screening phase.'
        },
        culture: {
            wlb: 'Startup hours. High volume of shipping. Expected to be chronically online to some degree.',
            remote: 'Remote-first globally.',
            vibe: 'Developer-hype central. High marketing, incredible focus on Developer Experience (DX). Very tight-knit, open-source heavy.'
        },
        reality: {
            good: ['You get to dictate the future of React and web development', 'Incredible remote culture', 'Work alongside the literal creators of the tools you use daily'],
            bad: ['Extremely hype-driven development cycles', 'Heavy pressure to constantly ship "magic" features', 'Can be slightly cliquish around Twitter/X dev influencers']
        }
    },
    {
        id: 'browserstack',
        name: 'BrowserStack',
        type: 'Startup',
        status: 'Active',
        logo: 'BRW',
        rating: 4.4,
        aiVerdict: 'Profitable bootstrapped-turned-unicorn. Heavy focus on distributed Android/iOS device labs, virtualization, and testing pipelines.',
        overview: {
            about: 'BrowserStack is an Indian cloud web and mobile testing platform that provides developers the ability to test their websites and mobile applications.',
            headquarters: 'Dublin, Ireland / Mumbai, Bangalore (Major Hubs)',
            size: '1,000+ Employees',
            founded: '2011',
            website: 'browserstack.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 20L - 30L',
                base: '₹ 16,00,000 - 22,00,000',
                variable: '10%',
                rsus: 'ESOPs',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.05L - 1.45L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 40L - 55L',
                base: '₹ 28,00,000 - 38,00,000',
                variable: '15%',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 1.8L - 2.4L'
            }
        ],
        techStack: {
            frontend: ['React', 'Ruby on Rails (Legacy)'],
            backend: ['Ruby', 'Java', 'Node.js', 'C++ (Device drivers)'],
            infra: ['Custom Data Centers (Massive racks of real phones)', 'AWS'],
            data: ['PostgreSQL', 'Redis', 'ElasticSearch']
        },
        process: [
            {
                step: 'Machine Coding Round',
                description: 'Build a fully functioning mini-app (e.g. log parser, mini testing framework) in 2 hours with running unit tests.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Machine Coding', 'OOD', 'TDD']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'System design around managing millions of concurrent low-latency video streams (from the phones to the browser).',
                duration: '3-4 hours',
                difficulty: 'Hard',
                topics: ['WebRTC', 'Concurrency', 'System Architecture']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'BrowserStack loves people who solve raw infrastructure problems. WebRTC and video streaming knowledge is a massive plus.'
        },
        culture: {
            wlb: 'Variable. Very high ownership. If physical devices go offline, it is an immediate Sev-1.',
            remote: 'Hybrid. Mostly in-office (Mumbai/BGLR).',
            vibe: 'Pragmatic and profitable. For a long time they were fully bootstrapped. Engineering decisions are highly rational and cost-aware.'
        },
        reality: {
            good: ['Incredible scale (managing physical device labs across the globe)', 'Highly profitable, meaning extreme job security', 'Great brand globally'],
            bad: ['Dealing with physical device failure (battery swallowing, iOS updates breaking) is notoriously painful', 'Ruby legacy codebase']
        }
    },
    {
        id: 'postman',
        name: 'Postman',
        type: 'Startup',
        status: 'Active',
        logo: 'POS',
        rating: 4.6,
        aiVerdict: 'API titan. Extremely high bar for frontend (Electron/React apps that process massive JSON) and backend state sync.',
        overview: {
            about: 'Postman is an API platform for building and using APIs. Founded in Bangalore, now a global SaaS giant.',
            headquarters: 'San Francisco, US / Bangalore (Major Hub)',
            size: '1,000+ Employees',
            founded: '2014',
            website: 'postman.com/company/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 25L - 35L',
                base: '₹ 18,00,000 - 24,00,000',
                variable: '10%',
                rsus: 'ESOPs',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.25L - 1.6L'
            },
            {
                title: 'Senior Software Engineer',
                ctc: '₹ 45L - 70L',
                base: '₹ 35,00,000 - 50,00,000',
                variable: '15%',
                rsus: 'ESOPs',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.2L - 3.0L'
            }
        ],
        techStack: {
            frontend: ['React', 'Electron (Desktop app)', 'TypeScript'],
            backend: ['Node.js (Sails.js legacy)', 'Go', 'Python'],
            infra: ['AWS', 'Kubernetes'],
            data: ['MySQL', 'Redis', 'ElasticSearch']
        },
        process: [
            {
                step: 'Take Home Assignment',
                description: 'Usually requires building an API service or a complex frontend widget. Graded strictly on code quality and edge cases.',
                duration: '48 hours',
                difficulty: 'Medium',
                topics: ['API Design', 'Edge Cases', 'Testing']
            },
            {
                step: 'Technical Loops (3-4 Rounds)',
                description: 'Deep dive into JavaScript internals (Event loop, GC) if frontend/Node. System design focuses on syncing massive JSON payloads across a team in real-time.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['JS Internals', 'WebSockets', 'System Design']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: 'No strict cutoff.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'If interviewing for Javascript roles, you must be a master of the V8 engine internals and asynchronous programming patterns.'
        },
        culture: {
            wlb: 'Good. Well-funded and mature startup environment. High focus on employee perks.',
            remote: 'Hybrid/Remote friendly.',
            vibe: 'Obsessed with developer experience. High autonomy. Engineering blog is frequently updated with complex challenges they solved.'
        },
        reality: {
            good: ['Work on a product used by nearly every developer globally', 'Great compensation and ESOP upside', 'Very strong frontend engineering culture'],
            bad: ['Electron app performance limits are constantly a struggle', 'Monolith to microservices transition pains', 'Feature bloat makes product direction sometimes unclear']
        }
    },
    {
        id: 'canva',
        name: 'Canva',
        type: 'Startup',
        status: 'Active',
        logo: 'CAN',
        rating: 4.6,
        aiVerdict: 'Heavy browser/DOM manipulation and Canvas API. Massive emphasis on collaborative (multiplayer) engineering. World-class React chops required.',
        overview: {
            about: 'Canva is an Australian global multi-national graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.',
            headquarters: 'Sydney, Australia',
            size: '4,000+ Employees',
            founded: '2013',
            website: 'canva.com/careers'
        },
        roles: [
            {
                title: 'Frontend Engineer',
                ctc: 'AU$130k - AU$180k+ (Relocation common)',
                base: 'High',
                variable: 'Bonus',
                rsus: 'Pre-IPO options',
                deductions: 'Aussie Taxes',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['React', 'TypeScript', 'MobX', 'WebCanvas', 'WebGL'],
            backend: ['Java', 'Node.js'],
            infra: ['AWS', 'Kubernetes'],
            data: ['DynamoDB', 'Redis']
        },
        process: [
            {
                step: 'Practical Project / OA',
                description: 'Build a graphical mini-app. E.g., a dragging interface, or a photo cropper that scales properly.',
                duration: 'Varies',
                difficulty: 'Hard',
                topics: ['React', 'DOM Math', 'CSS/Canvas']
            },
            {
                step: 'Onsite (4 Rounds)',
                description: 'Heavy focus on algorithms for 2D graphics (bounding boxes, collision, rotational matrices) and System Design for collaborative editing.',
                duration: '4-5 hours',
                difficulty: 'Expert',
                topics: ['2D Math', 'CRDTs', 'Frontend System Design']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: 'Irrelevant. Design and web platform mastery is all that matters.',
            backlogs: 'N/A',
            gap: 'Accepted.',
            notes: 'Canva frequently recruits elite frontend devs out of India with massive relocation packages to Sydney.'
        },
        culture: {
            wlb: 'Excellent. Sydney tech culture is typically very balanced, heavily emphasizing "going to the beach" after 5pm.',
            remote: 'Hybrid in Sydney usually, but global remote is an option for specific teams.',
            vibe: 'Quirky, design-centric, extremely collaborative. "Be a good human" is one of their core values and it shows in interviews.'
        },
        reality: {
            good: ['Incredible relocation opportunity to Sydney', 'Top tier pre-IPO valuation (Decacorn)', 'Unmatched frontend engineering complexity'],
            bad: ['Cost of living in Sydney is very high', 'Working with WebCanvas APIs can be notoriously difficult to debug', 'Java backend is somewhat generic compared to the frontend']
        }
    },
    {
        id: 'discord',
        name: 'Discord',
        type: 'Startup',
        status: 'Active',
        logo: 'DIS',
        rating: 4.8,
        aiVerdict: 'Elixir/Rust powerhouse. Massive websocket and real-time messaging scale. Focuses heavily on managing millions of concurrent TCP streams.',
        overview: {
            about: 'Discord is a voice, video, and text chat app that is used by tens of millions of people ages 13+ to talk and hang out with their communities and friends.',
            headquarters: 'San Francisco, US / Remote',
            size: '1,000+ Employees',
            founded: '2015',
            website: 'discord.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '$160k - $220k',
                base: 'Very High',
                variable: 'Bonus',
                rsus: 'ESOPs',
                deductions: 'Tax',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['React', 'React Native (Replacing with native in some areas)'],
            backend: ['Elixir', 'Rust', 'Python'],
            infra: ['GCP', 'Kubernetes', 'WebRTC'],
            data: ['Cassandra/ScyllaDB (Massive scale)']
        },
        process: [
            {
                step: 'Take Home / Initial Tech Screen',
                description: 'Often involves writing high-performance code to process large datasets or parse network packets.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Concurrency', 'Parsing', 'Algorithms']
            },
            {
                step: 'Onsite (4-5 Rounds)',
                description: 'Deep grilling on distributed systems, specifically focusing on pub/sub architectures, websocket fan-out, and memory safety (Rust/Elixir).',
                duration: '5 hours',
                difficulty: 'Expert',
                topics: ['System Design (Real-time)', 'Cassandra Internals', 'Erlang/OTP']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: 'Irrelevant.',
            backlogs: 'N/A',
            gap: 'Accepted.',
            notes: 'If applying for backend, you must understand the Erlang/Elixir OTP actor model or be highly proficient in Rust memory management.'
        },
        culture: {
            wlb: 'Intense but highly passionate. The engineering team is relatively small given the massive scale of the product.',
            remote: 'Highly remote friendly.',
            vibe: 'Gamer culture meets elite systems engineering. Their engineering blog is extremely famous (e.g., migrating from Cassandra to ScyllaDB).'
        },
        reality: {
            good: ['Work on one of the most technically impressive chat architectures in the world', 'Huge brand prestige', 'Amazing tech stack (Elixir/Rust)'],
            bad: ['Monetization strategy is often questioned', 'Dealing with trust/safety/abuse at Discord scale is a nightmare', 'Can be very difficult to get an interview without a referral']
        }
    },
    {
        id: 'anthropic',
        name: 'Anthropic',
        type: 'Startup',
        status: 'Active',
        logo: 'ANT',
        rating: 4.8,
        aiVerdict: 'Safety-first AI rival to OpenAI. Vets heavily for alignment, math, and high-performance Rust/Python systems.',
        overview: {
            about: 'Anthropic is an American artificial intelligence startup and public-benefit corporation, founded by former members of OpenAI.',
            headquarters: 'San Francisco, US',
            size: '500+ Employees',
            founded: '2021',
            website: 'anthropic.com'
        },
        roles: [
            {
                title: 'Member of Technical Staff',
                ctc: '$300k - $500k+',
                base: '$200k - $250k',
                variable: 'None',
                rsus: 'Equity (Massive Valuation)',
                deductions: 'US Tax',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js'],
            backend: ['Rust', 'Python', 'TypeScript'],
            infra: ['AWS (Heavy partnership)', 'Kubernetes'],
            data: ['PyTorch', 'Vector Databases', 'Custom Training Clusters']
        },
        process: [
            {
                step: 'Screen',
                description: 'Tough algorithmic screening or deep systems architecture discussion (e.g., distributed training checkpointing).',
                duration: '60 mins',
                difficulty: 'Expert',
                topics: ['Algorithms', 'Systems']
            },
            {
                step: 'Onsite (Research/Eng Loops)',
                description: 'Intense vetting of code quality, distributed computing knowledge, and profound alignment with AI safety principles (Constitutional AI).',
                duration: '5 hours',
                difficulty: 'Nightmare',
                topics: ['AI Safety', 'Distribution at Scale', 'System Design']
            }
        ],
        syllabus: [
            {
                subject: 'Practical Engineering & Build',
                topics: ['Take-home Assignments (Full Stack / API / UI)', 'API Design & Integration', 'Database Schema Design', 'State Management (React/Vue/etc)', 'Code Quality & Testing (Jest/Cypress)']
            },
            {
                subject: 'System Architecture',
                topics: ['Scalable Web Architecture', 'Cloud Deployment (AWS/Vercel/GCP)', 'Caching & Performance Optimization', 'Microservices vs Monoliths']
            },
            {
                subject: 'Problem Solving',
                topics: ['Applied Data Structures', 'Algorithmic Thinking', 'Debugging & Troubleshooting Scenarios']
            },
            {
                subject: 'Culture & Product Sense',
                topics: ['Product Roadmapping', 'User-Centric Design Thinking', 'Ownership & Autonomy', 'Agile / Iterative Development']
            }
        ],
        eligibility: {
            cgpa: 'Top-tier academic pedigree or massive open-source/industry impact required.',
            backlogs: 'None.',
            gap: 'Case by Case.',
            notes: 'Anthropic heavily filters out people looking to just "move fast and break things" in favor of rigorous, safety-oriented researchers and engineers.'
        },
        culture: {
            wlb: 'Challenging due to the AI arms race, but less chaotic than OpenAI. More academic and deliberate.',
            remote: 'Hybrid. In-office heavily encouraged for researchers.',
            vibe: 'Highly intellectual, rigorous, and cautious. "Constitutional AI" is the core tenet.'
        },
        reality: {
            good: ['Working at the absolute frontier of artificial intelligence', 'Incredible compensation', 'Less chaotic than its main rival, OpenAI'],
            bad: ['Extremely difficult to join', 'Intense geopolitical and regulatory pressure on the work you do', 'Tied heavily to the San Francisco hub']
        }
    }
];
