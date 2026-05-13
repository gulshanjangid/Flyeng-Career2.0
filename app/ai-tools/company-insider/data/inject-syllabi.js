const fs = require('fs');
const path = require('path');

const companiesDir = path.join(__dirname, 'companies');

const templates = {
    product: `        syllabus: [
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
`,
    service: `        syllabus: [
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
`,
    consulting: `        syllabus: [
            {
                subject: 'Case Study & Business Acumen',
                topics: ['Guesstimates & Market Sizing', 'Root Cause Analysis', 'Profitability Frameworks', 'Market Entry Strategy', 'Technology Transformation Strategy']
            },
            {
                subject: 'Data & Analytics',
                topics: ['SQL (Joins, Window Functions, Grouping)', 'Data Visualization Concepts (Tableau/PowerBI)', 'Python/R for Data Manipulation (Pandas)', 'Basic Statistics & Probability']
            },
            {
                subject: 'Technical Fundamentals',
                topics: ['Cloud Computing Basics (AWS/Azure)', 'Enterprise Architecture', 'Systems Integration', 'Agile Methodologies']
            }
        ],
`,
    finance: `        syllabus: [
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
`,
    semiconductor: `        syllabus: [
            {
                subject: 'Digital Logic & Electronics',
                topics: ['Combinational & Sequential Circuits', 'Logic Gates & Boolean Algebra', 'Flip Flops & Latches', 'State Machines (FSM)', 'Timing Analysis']
            },
            {
                subject: 'Computer Architecture',
                topics: ['Instruction Set Architecture (ISA)', 'Pipelining', 'Cache Memory Subsystems', 'Memory Hierarchy', 'Microprocessors & Microcontrollers']
            },
            {
                subject: 'Hardware Description Languages',
                topics: ['Verilog / SystemVerilog Basics', 'VHDL', 'Testbenches & Verification']
            },
            {
                subject: 'Low-Level Programming',
                topics: ['C/C++ for Embedded Systems', 'Pointers & Memory Allocation', 'Bitwise Operations', 'RTOS Concepts']
            }
        ],
`,
    startup: `        syllabus: [
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
`
};

const fileMapping = {
    'faang.ts': 'product',
    'unicorns.ts': 'product',
    'ecommerce.ts': 'product',
    'gaming.ts': 'product',
    'global.ts': 'product',
    'service.ts': 'service',
    'midtier.ts': 'service',
    'consulting.ts': 'consulting',
    'finance.ts': 'finance',
    'semiconductors.ts': 'semiconductor',
    'startups.ts': 'startup'
};

const files = fs.readdirSync(companiesDir);

files.forEach(file => {
    if (fileMapping[file]) {
        const filePath = path.join(companiesDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        
        const type = fileMapping[file];
        const syllabusTemplate = templates[type];

        const parts = content.split('        eligibility: {');
        let newContent = parts[0];
        
        for (let i = 1; i < parts.length; i++) {
            const lastProcessIndex = newContent.lastIndexOf('process: [');
            const portionSinceProcess = lastProcessIndex !== -1 ? newContent.slice(lastProcessIndex) : newContent;
            
            if (portionSinceProcess.includes('syllabus: [')) {
                console.log(`Skipping injection for a company in ${file} as it already has a syllabus.`);
                newContent += '        eligibility: {' + parts[i];
            } else {
                newContent += syllabusTemplate + '        eligibility: {' + parts[i];
            }
        }
        
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf-8');
            console.log(`Updated ${file}`);
        }
    }
});
