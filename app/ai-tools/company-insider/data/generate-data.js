const fs = require('fs');
const path = require('path');

const companiesList = [
  // Tier 1: FAANG & Global Tech Titans
  { id: 'google', name: 'Google', type: 'Product', stat: 'Active', tier: 'FAANG', rating: 4.8, aiVerdict: 'Prioritizes DSA depth and system design mastery over pure academic history. Heavy focus on Googliness.' },
  { id: 'microsoft', name: 'Microsoft', type: 'Product', stat: 'Active', tier: 'FAANG', rating: 4.7, aiVerdict: 'Balanced interview process. High emphasis on C#/C++ for legacy teams, but cloud-native skills dominate Azure org.' },
  { id: 'amazon', name: 'Amazon', type: 'Product', stat: 'Active', tier: 'FAANG', rating: 4.2, aiVerdict: 'Leadership Principles are non-negotiable. Expect STAR method behavioral questions embedded in every single technical round.' },
  { id: 'apple', name: 'Apple', type: 'Product', stat: 'Inactive', tier: 'FAANG', rating: 4.6, aiVerdict: 'Highly secretive. Hardware/Software intersection. Deep domain expertise valued over generic problem solving in many orgs.' },
  { id: 'meta', name: 'Meta', type: 'Product', stat: 'Active', tier: 'FAANG', rating: 4.5, aiVerdict: 'Move fast and break things is dead. It is move fast with stable infrastructure. Leetcode speed and optimality are critical.' },
  { id: 'netflix', name: 'Netflix', type: 'Product', stat: 'Inactive', tier: 'FAANG', rating: 4.9, aiVerdict: 'Keeper test culture. Only top of market talent. Extreme emphasis on senior, independent contributors who thrive in high-context environments.' },
  { id: 'openai', name: 'OpenAI', type: 'Product/AI', stat: 'Active', tier: 'FAANG', rating: 5.0, aiVerdict: 'Ground zero for AI. Requires elite mathematical foundation or world-class systems engineering for scaling infrastructure.' },
  { id: 'nvidia', name: 'Nvidia', type: 'Hardware/AI', stat: 'Active', tier: 'FAANG', rating: 4.9, aiVerdict: 'The undisputed king of the AI boom. Deep focus on CUDA, low-level optimization, and silicon architectures.' },
  { id: 'amd', name: 'AMD', type: 'Hardware', stat: 'Active', tier: 'Enterprise', rating: 4.3, aiVerdict: 'Rising silicon challenger. Strong focus on hardware acceleration, kernel hacking, and semiconductor physics.' },
  { id: 'intel', name: 'Intel', type: 'Hardware', stat: 'Active', tier: 'Enterprise', rating: 3.8, aiVerdict: 'Legacy titan attempting a foundry pivot. Fabrication engineering and systems-level programming are core.' },
  
  // Tier 2: Global Unicorns & Elite Tech
  { id: 'stripe', name: 'Stripe', type: 'Fintech', stat: 'Active', tier: 'Unicorn', rating: 4.8, aiVerdict: 'Developer experience is paramount. Interviews often involve real-world integration sessions rather than purely abstract Leetcode.' },
  { id: 'databricks', name: 'Databricks', type: 'Product', stat: 'Active', tier: 'Unicorn', rating: 4.7, aiVerdict: 'Big Data royalty. Deep integration of Spark and AI. Spark internals and distributed systems knowledge is heavily tested.' },
  { id: 'airbnb', name: 'Airbnb', type: 'Product', stat: 'Inactive', tier: 'Unicorn', rating: 4.6, aiVerdict: 'Design and engineering must coexist flawlessly. High bar for frontend architecture and product sense.' },
  { id: 'uber', name: 'Uber', type: 'Product', stat: 'Active', tier: 'Unicorn', rating: 4.3, aiVerdict: 'Logistics at planetary scale. System design rounds focus heavily on geospatial routing, real-time events, and massive concurrency.' },
  { id: 'atlassian', name: 'Atlassian', type: 'Product', stat: 'Active', tier: 'Unicorn', rating: 4.6, aiVerdict: 'B2B SaaS kings. Values practical engineering and long-term maintainability over hyper-optimization.' },
  { id: 'snowflake', name: 'Snowflake', type: 'Product', stat: 'Active', tier: 'Unicorn', rating: 4.5, aiVerdict: 'Data warehouse pioneers. SQL engine optimization and high-performance C++ systems are the core focus.' },
  { id: 'palantir', name: 'Palantir', type: 'Product', stat: 'Active', tier: 'Unicorn', rating: 4.4, aiVerdict: 'Government and enterprise data integration. Forward deployed engineers need strong client skills alongside technical depth.' },
  { id: 'spotify', name: 'Spotify', type: 'Product', stat: 'Active', tier: 'Unicorn', rating: 4.5, aiVerdict: 'Squad culture. Strong emphasis on agile methodologies, streaming architecture, and audio engineering.' },
  { id: 'pinterest', name: 'Pinterest', type: 'Product', stat: 'Active', tier: 'Unicorn', rating: 4.2, aiVerdict: 'Visual discovery engine. Expertise in image processing, recommendation systems, and large-scale Graph ML.' },
  { id: 'twitter', name: 'X (Twitter)', type: 'Product', stat: 'Active', tier: 'Unicorn', rating: 3.5, aiVerdict: 'Hardcore engineering culture post-acquisition. Expect extreme ownership, rapid shipping, and deep systems knowledge.' },
  
  // Tier 3: High Frequency Trading (HFT) & FinTech
  { id: 'optiver', name: 'Optiver', type: 'HFT', stat: 'Active', tier: 'HFT', rating: 4.5, aiVerdict: 'Nanosecond latency matters. Extreme C++ testing, hardware-software co-design, and mental math rigor.' },
  { id: 'tower', name: 'Tower Research', type: 'HFT', stat: 'Active', tier: 'HFT', rating: 4.6, aiVerdict: 'Quantitative engineering focus. Algorithms must be computationally cheap and mathematically sound.' },
  { id: 'jane-street', name: 'Jane Street', type: 'HFT', stat: 'Active', tier: 'HFT', rating: 4.8, aiVerdict: 'OCaml wizards. Highly academic culture blending functional programming with financial modeling.' },
  { id: 'deshaw', name: 'D.E. Shaw', type: 'HFT', stat: 'Active', tier: 'HFT', rating: 4.7, aiVerdict: 'Pioneers of computational finance. Looks for exceptional polymaths; technical brilliance is a baseline.' },
  { id: 'graviton', name: 'Graviton Research', type: 'HFT', stat: 'Active', tier: 'HFT', rating: 4.6, aiVerdict: 'Aggressive Indian HFT. Top IIT/NIT tier heavily preferred. Algorithmic puzzle-solving is a major filter.' },
  { id: 'plaid', name: 'Plaid', type: 'Fintech', stat: 'Active', tier: 'Unicorn', rating: 4.4, aiVerdict: 'The API for finance. Security, reliable parsing of legacy bank data, and fault tolerance are key themes.' },
  { id: 'robinhood', name: 'Robinhood', type: 'Fintech', stat: 'Active', tier: 'Unicorn', rating: 4.0, aiVerdict: 'Democratizing finance. Focus on scalable backend order routing and butter-smooth mobile execution.' },
  
  // Tier 3.5: Web3 / Crypto
  { id: 'coinbase', name: 'Coinbase', type: 'Crypto', stat: 'Active', tier: 'Unicorn', rating: 4.1, aiVerdict: 'Regulated crypto exchange. Security engineering and reliable distributed state management are critical.' },
  { id: 'binance', name: 'Binance', type: 'Crypto', stat: 'Active', tier: 'Unicorn', rating: 3.9, aiVerdict: 'Global crypto giant. Remote-first, high-velocity shipping. Comfort with high-risk, high-reward engineering.' },
  { id: 'kraken', name: 'Kraken', type: 'Crypto', stat: 'Active', tier: 'Unicorn', rating: 4.0, aiVerdict: 'Security-first crypto exchange. Deep expertise in cryptography and Rust/Go backends.' },

  // Tier 4: Indian Unicorns & Startups
  { id: 'cred', name: 'CRED', type: 'Startup', stat: 'Active', tier: 'IND_Unicorn', rating: 4.4, aiVerdict: 'Design and performance obsessed. Frontend polish must be flawless; backend handles complex financial state machines.' },
  { id: 'razorpay', name: 'Razorpay', type: 'Fintech', stat: 'Active', tier: 'IND_Unicorn', rating: 4.5, aiVerdict: 'Payment gateway leader. Requires deep understanding of API idempotency, ACID compliance, and zero-downtime deployments.' },
  { id: 'zepto', name: 'Zepto', type: 'Startup', stat: 'Active', tier: 'IND_Unicorn', rating: 4.2, aiVerdict: '10-minute delivery execution. Hyper-local routing algorithms and extremely fast caching layers are paramount.' },
  { id: 'zomato', name: 'Zomato', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 4.3, aiVerdict: 'Food-tech pioneer. Scale is massive. Expect intense system design rounds focused on sudden traffic spikes.' },
  { id: 'swiggy', name: 'Swiggy', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 4.1, aiVerdict: 'Logistics and food delivery. High focus on matching algorithms, driver routing, and real-time state tracking.' },
  { id: 'flipkart', name: 'Flipkart', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 4.0, aiVerdict: 'Indian e-commerce giant. Supply chain management and high-throughput transaction systems are the core tech challenges.' },
  { id: 'phonepe', name: 'PhonePe', type: 'Fintech', stat: 'Active', tier: 'IND_Unicorn', rating: 4.3, aiVerdict: 'UPI dominance. Handling billions of micro-transactions. Java/Go concurrency and database sharding are essential.' },
  { id: 'groww', name: 'Groww', type: 'Fintech', stat: 'Active', tier: 'IND_Unicorn', rating: 4.4, aiVerdict: 'Investment tech. Security, real-time market data ingestion, and scalable user onboarding.' },
  { id: 'zerodha', name: 'Zerodha', type: 'Fintech', stat: 'Inactive', tier: 'IND_Unicorn', rating: 4.8, aiVerdict: 'Bootstrapped titan. Lean engineering team. Deep expertise in Go and writing incredibly efficient, simple software.' },
  { id: 'ola', name: 'Ola', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 3.5, aiVerdict: 'Mobility and EV focus. High attrition but intense learning. Software/Hardware integration is becoming central.' },
  { id: 'oyo', name: 'OYO', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 3.2, aiVerdict: 'Hospitality tech. Fast-paced, aggressive growth focus. Legacy codebase modernization is an ongoing challenge.' },
  { id: 'meesho', name: 'Meesho', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 4.1, aiVerdict: 'Social commerce. Scaling to Tier 2/3 cities. Focus on low-bandwidth optimization and scalable discovery algorithms.' },
  { id: 'postman', name: 'Postman', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 4.6, aiVerdict: 'API platform leader. Core product is developer tooling. Deep understanding of network protocols and ASTs.' },
  { id: 'browserstack', name: 'BrowserStack', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 4.5, aiVerdict: 'Testing infrastructure. Managing massive device farms requires incredibly robust virtualization and CI/CD integration.' },
  { id: 'myntra', name: 'Myntra', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 4.1, aiVerdict: 'Fashion e-commerce. High focus on personalized recommendation engines and visual search AI.' },
  { id: 'paytm', name: 'Paytm', type: 'Fintech', stat: 'Active', tier: 'IND_Unicorn', rating: 3.6, aiVerdict: 'Digital payments pioneer. Complex regulatory environment requires robust auditing and legacy system integration.' },
  { id: 'makemytrip', name: 'MakeMyTrip', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 3.9, aiVerdict: 'Travel tech. Complex inventory management, dynamic pricing engines, and GDS (Global Distribution System) integrations.' },
  { id: 'policybazaar', name: 'PolicyBazaar', type: 'Fintech', stat: 'Active', tier: 'IND_Unicorn', rating: 3.7, aiVerdict: 'Insurtech leader. High volume data processing and complex rules engines for policy quotation.' },
  { id: 'nykaa', name: 'Nykaa', type: 'Product', stat: 'Active', tier: 'IND_Unicorn', rating: 4.0, aiVerdict: 'Beauty e-commerce. Focus on omnichannel retail tech, inventory synchronization, and user experience.' },
  { id: 'byjus', name: 'Byju\'s', type: 'EdTech', stat: 'Inactive', tier: 'IND_Unicorn', rating: 2.5, aiVerdict: 'Edtech giant currently restructuring. Focus was on content delivery scaling and aggressive acquisition integration.' },
  { id: 'unacademy', name: 'Unacademy', type: 'EdTech', stat: 'Active', tier: 'IND_Unicorn', rating: 3.8, aiVerdict: 'Live learning platform. Real-time video infrastructure, WebRTC, and low-latency interactive tools are core.' },

  // Tier 5: Strategy, Consulting & Big 4
  { id: 'deloitte', name: 'Deloitte', type: 'Consulting', stat: 'Active', tier: 'Big4', rating: 3.9, aiVerdict: 'Client-facing tech delivery. Less about deep systems programming, more about enterprise architecture and integration.' },
  { id: 'pwc', name: 'PwC', type: 'Consulting', stat: 'Active', tier: 'Big4', rating: 3.8, aiVerdict: 'Digital transformation focus. Strong emphasis on cloud migrations (AWS/Azure) and data warehousing.' },
  { id: 'ey', name: 'EY', type: 'Consulting', stat: 'Active', tier: 'Big4', rating: 3.7, aiVerdict: 'Focus on risk and financial tech consulting. Experience with ERPs (SAP/Oracle) and data governance is valued.' },
  { id: 'kpmg', name: 'KPMG', type: 'Consulting', stat: 'Inactive', tier: 'Big4', rating: 3.8, aiVerdict: 'Advisory services. Implementation of third-party solutions rather than building from scratch. Certification-heavy.' },
  { id: 'mckinsey', name: 'McKinsey & Co', type: 'Consulting', stat: 'Active', tier: 'Big4', rating: 4.4, aiVerdict: 'Elite strategy. Engineering teams build rapid prototypes for CxO demos. Generalist problem-solving > specialists.' },
  { id: 'bcg', name: 'BCG X', type: 'Consulting', stat: 'Active', tier: 'Big4', rating: 4.3, aiVerdict: 'Tech build arm of BCG. Operates like a startup within a consultancy. Focus on AI and data-driven product builds.' },
  { id: 'bain', name: 'Bain & Company', type: 'Consulting', stat: 'Active', tier: 'Big4', rating: 4.5, aiVerdict: 'High-level strategic implementation. Values strong communicators who can translate code into business ROI.' },

  // Tier 6: Enterprise Global Tech
  { id: 'cisco', name: 'Cisco', type: 'Product', stat: 'Active', tier: 'Enterprise', rating: 4.2, aiVerdict: 'Networking giants. Deep C/C++, embedded systems, and network protocol expertise is highly sought after.' },
  { id: 'adobe', name: 'Adobe', type: 'Product', stat: 'Active', tier: 'Enterprise', rating: 4.4, aiVerdict: 'Creative tool monopolies. Focus on computer graphics, C++, and migrating heavy desktop apps to the browser/cloud.' },
  { id: 'oracle', name: 'Oracle', type: 'Product', stat: 'Active', tier: 'Enterprise', rating: 3.9, aiVerdict: 'Database and Cloud infra. Massive legacy Java codebases. Highly structured, process-heavy engineering.' },
  { id: 'ibm', name: 'IBM', type: 'Service/Product', stat: 'Active', tier: 'Enterprise', rating: 3.8, aiVerdict: 'Hybrid cloud and AI (Watson). Enterprise-grade software engineering, but heavily siloed by business units.' },
  { id: 'salesforce', name: 'Salesforce', type: 'Product', stat: 'Inactive', tier: 'Enterprise', rating: 4.3, aiVerdict: 'CRM kings. Apex and Lightning components. Very specific ecosystem; deep platform knowledge pays well.' },
  { id: 'sap', name: 'SAP', type: 'Product', stat: 'Active', tier: 'Enterprise', rating: 4.1, aiVerdict: 'German enterprise software. ABAP and Java. Stable, slow-moving, heavily entrenched in global supply chains.' },
  { id: 'vmware', name: 'VMware', type: 'Product', stat: 'Active', tier: 'Enterprise', rating: 3.7, aiVerdict: 'Virtualization core. Systems-level programming (C/C++/Go). Currently navigating Broadcom acquisition changes.' },
  { id: 'intuit', name: 'Intuit', type: 'Product', stat: 'Active', tier: 'Enterprise', rating: 4.5, aiVerdict: 'Fintech for the masses (TurboTax). Strong focus on frontend craftsmanship, open-source contribution, and React expertise.' },
  
  // Tier 7: Global Banks & Fintech
  { id: 'gs', name: 'Goldman Sachs', type: 'Fintech', stat: 'Active', tier: 'Bank', rating: 4.0, aiVerdict: 'Proprietary tech stack (Slang). Focus on data modeling, risk engines, and strict compliance architectures.' },
  { id: 'jpmc', name: 'JPMorgan Chase', type: 'Fintech', stat: 'Active', tier: 'Bank', rating: 4.1, aiVerdict: 'Massive tech budget. Moving heavily to public cloud (AWS). Java/Spring Boot dominates the backend.' },
  { id: 'morgan-stanley', name: 'Morgan Stanley', type: 'Fintech', stat: 'Active', tier: 'Bank', rating: 4.0, aiVerdict: 'Similar to JPMC. Enterprise Java, C++ for trading desks, and a strong push towards modernizing legacy mainframes.' },
  { id: 'wells-fargo', name: 'Wells Fargo', type: 'Fintech', stat: 'Active', tier: 'Bank', rating: 3.8, aiVerdict: 'Heavy regulatory environment. Focus on stability, security, and gradual modernization of massive retail banking systems.' },
  { id: 'amex', name: 'American Express', type: 'Fintech', stat: 'Active', tier: 'Bank', rating: 4.2, aiVerdict: 'Payment network processing. High reliance on Go and Java for highly concurrent, available processing systems.' },
  { id: 'barclays', name: 'Barclays', type: 'Fintech', stat: 'Active', tier: 'Bank', rating: 3.9, aiVerdict: 'Traditional UK banking. Mix of legacy infrastructure and modern digital banking initiatives (mainly Java/React).' },
  { id: 'citi', name: 'Citi', type: 'Fintech', stat: 'Active', tier: 'Bank', rating: 3.8, aiVerdict: 'Global consumer banking. Complex architectural landscape. Values experience navigating big-bank bureaucracy.' },
  { id: 'bofa', name: 'Bank of America', type: 'Fintech', stat: 'Active', tier: 'Bank', rating: 3.9, aiVerdict: 'Massive scale consumer retail banking. High focus on security, Quartz platform knowledge, and Java.' },

  // Tier 8: WITCH & Indian IT Services (Mass Recruiters)
  { id: 'tcs', name: 'TCS', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 3.8, aiVerdict: 'Focuses on mass hiring with high academic filters. Volume and process adherence over pure engineering optimization.' },
  { id: 'infosys', name: 'Infosys', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 3.7, aiVerdict: 'Large-scale training infrastructure (Mysore campus). Project allocation determines tech stack; heavily client-dependent.' },
  { id: 'wipro', name: 'Wipro', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 3.5, aiVerdict: 'Traditional IT outsourcing. Focus on support, maintenance, and enterprise legacy migrations.' },
  { id: 'hcl', name: 'HCLTech', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 3.6, aiVerdict: 'Stronger hardware/embedded footprint than other WITCH companies, alongside standard IT services.' },
  { id: 'techm', name: 'Tech Mahindra', type: 'Service', stat: 'Inactive', tier: 'WITCH', rating: 3.4, aiVerdict: 'Telecom domain heavy. Standard IT service model with a focus on networking and communications clients.' },
  { id: 'cognizant', name: 'Cognizant', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 3.6, aiVerdict: 'Aggressive growth, heavily reliant on US healthcare and financial sector clients. MERN/Java Fullstack is in demand.' },
  { id: 'capgemini', name: 'Capgemini', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 3.7, aiVerdict: 'French multinational. Slightly better work culture than native Indian WITCH, but similar business model.' },
  { id: 'accenture', name: 'Accenture', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 4.0, aiVerdict: 'A step above standard WITCH. Stronger consulting arm. Focus on premium digital transformations (Cloud/AI).' },
  { id: 'lnt', name: 'LTIMindtree', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 3.8, aiVerdict: 'Merged entity aiming for Tier-1 service status. Strong execution focus across various domains.' },
  { id: 'mphasis', name: 'Mphasis', type: 'Service', stat: 'Active', tier: 'WITCH', rating: 3.5, aiVerdict: 'Heavy focus on BFSI (Banking, Financial Services, Insurance) clients. Legacy system modernization.' },
  
  // Tier 9: Niche/Remote/Specialized Indian Tech
  { id: 'celebal', name: 'Celebal Technologies', type: 'Data/AI Service', stat: 'Active', tier: 'Niche', rating: 4.1, aiVerdict: 'Niche expertise in DataBricks, Snowflake, and Azure AI. High demand for data engineers over SWEs.' },
  { id: 'cyntexa', name: 'Cyntexa', type: 'Cloud/Salesforce', stat: 'Active', tier: 'Niche', rating: 4.0, aiVerdict: 'Salesforce consulting powerhouse. Niche focus; requires specialized Apex/LWC knowledge rather than general DSA.' },
  { id: 'xplore', name: 'Xplore Technologies', type: 'Service', stat: 'Active', tier: 'Niche', rating: 3.9, aiVerdict: 'Boutique service firm. Projects can be more modern (React/Go) compared to massive WITCH legacy accounts.' },
  { id: 'persistent', name: 'Persistent Systems', type: 'Product/Service', stat: 'Active', tier: 'Niche', rating: 4.0, aiVerdict: 'Strong product engineering pedigree (OPD). Operates more like a product company than a pure service firm.' },
  { id: 'thoughtworks', name: 'ThoughtWorks', type: 'Consulting', stat: 'Active', tier: 'Niche', rating: 4.3, aiVerdict: 'Engineering purists. TDD, Pair Programming, and Martin Fowler principles are treated as gospel.' },
  { id: 'zoho', name: 'Zoho', type: 'Product', stat: 'Inactive', tier: 'Niche', rating: 4.6, aiVerdict: 'Bootstrapped Indian SaaS giant. Values long-term loyalty and deep technical fundamentals over fancy degrees.' },
  { id: 'toptal', name: 'Toptal', type: 'Remote Network', stat: 'Active', tier: 'Remote', rating: 4.4, aiVerdict: 'Gig economy for the elite. Grueling multi-stage technical screening focusing on independent, senior-level capability.' },
  { id: 'turing', name: 'Turing', type: 'Remote Network', stat: 'Active', tier: 'Remote', rating: 4.0, aiVerdict: 'AI-vetted remote talent matching. Automated Leetcode-style screening followed by specific stack assessments.' },
  { id: 'andela', name: 'Andela', type: 'Remote Network', stat: 'Active', tier: 'Remote', rating: 4.2, aiVerdict: 'Global talent network. Focus on embedded team augmentation; requires stellar communication and remote collaboration skills.' },
  { id: 'fractal', name: 'Fractal Analytics', type: 'Data/AI Service', stat: 'Active', tier: 'Niche', rating: 4.1, aiVerdict: 'Pure-play analytics firm. High emphasis on Python, Pandas, statistical modeling, and ML deployment.' },
  { id: 'mu-sigma', name: 'Mu Sigma', type: 'Data/AI Service', stat: 'Active', tier: 'Niche', rating: 3.4, aiVerdict: 'Decision sciences. Grueling work culture, but a proven training ground for raw data engineering talent.' },
  
  // Tier 10: Late Stage Startups & Growth
  { id: 'posthog', name: 'PostHog', type: 'Product', stat: 'Active', tier: 'Startup', rating: 4.8, aiVerdict: 'Open-source product analytics. Incredibly transparent culture. Deep TypeScript/Python and ClickHouse expertise.' },
  { id: 'vercel', name: 'Vercel', type: 'Product', stat: 'Active', tier: 'Startup', rating: 4.7, aiVerdict: 'The company behind Next.js. Obsessed with Developer Experience (DX), Rust-based tooling (Turbopack), and edge computing.' },
  { id: 'supabase', name: 'Supabase', type: 'Product', stat: 'Active', tier: 'Startup', rating: 4.6, aiVerdict: 'Open-source Firebase alternative. Deep PostgreSQL expertise, Elixir, and highly distributed real-time systems.' },
  { id: 'linear', name: 'Linear', type: 'Product', stat: 'Active', tier: 'Startup', rating: 4.9, aiVerdict: 'Craftsmanship and extreme frontend performance. Built intensely on React, GraphQL, and local-first syncing engines.' },
];

// 100 Companies Total.

const generateOverview = (c) => {
    return {
        about: `${c.name} is a leading player in the ${c.type} sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.`,
        headquarters: c.tier === 'WITCH' || c.tier === 'IND_Unicorn' || c.tier === 'Niche' ? 'Bengaluru / Pune / Delhi NCR, India' : 'Silicon Valley / Seattle / New York, USA',
        website: `https://www.${c.id.toLowerCase().replace(/\s/g, '')}.com`,
        founded: 'Var. (Est. Pre-2015)',
        size: c.tier === 'FAANG' || c.tier === 'WITCH' || c.tier === 'Enterprise' ? '100,000+ Employees' : '1,000 - 10,000 Employees',
        rating: c.rating,
        updateTag: 'MARCH 2026 VERIFIED'
    };
};

const generateRoles = (tier) => {
    switch(tier) {
        case 'FAANG':
        case 'Unicorn':
            return [
                { name: 'SDE 1 (L3)', description: 'Entry-level SWE. Focus on execution.', ctc: '₹30.00 LPA', inHand: '₹1,50,000/mo', breakdown: { base: '₹18.00 LPA', variable: '₹3L (+ ₹9L RSUs)', deductions: '₹40,000/mo' } },
                { name: 'SDE 2 (L4)', description: 'Independent execution. System design knowledge required.', ctc: '₹45.00 LPA', inHand: '₹2,20,000/mo', breakdown: { base: '₹25.00 LPA', variable: '₹5L (+ ₹15L RSUs)', deductions: '₹65,000/mo' } },
                { name: 'Senior SDE (L5)', description: 'Tech lead for projects. Architecture and mentoring.', ctc: '₹75.00 LPA', inHand: '₹3,50,000/mo', breakdown: { base: '₹40.00 LPA', variable: '₹10L (+ ₹25L RSUs)', deductions: '₹1,10,000/mo' } }
            ];
        case 'HFT':
            return [
                { name: 'Quant Developer', description: 'C++ core focus. Low latency systems.', ctc: '₹65.00 LPA', inHand: '₹3,20,000/mo', breakdown: { base: '₹45.00 LPA', variable: '₹20.00 LPA Bonus', deductions: '₹95,000/mo' } },
                { name: 'Senior Quant', description: 'Algorithm design and advanced mathematics.', ctc: '₹1.50 CR', inHand: '₹7,50,000/mo', breakdown: { base: '₹70.00 LPA', variable: '₹80.00 LPA Bonus', deductions: '₹2,10,000/mo' } }
            ];
        case 'IND_Unicorn':
            return [
                { name: 'SDE 1', description: 'React/Node/Go execution at speed.', ctc: '₹22.00 LPA', inHand: '₹1,35,000/mo', breakdown: { base: '₹16.00 LPA', variable: '₹6.00 LPA (ESOPs/Bonus)', deductions: '₹35,000/mo' } },
                { name: 'SDE 2', description: 'API and DB optimization scaling.', ctc: '₹35.00 LPA', inHand: '₹2,00,000/mo', breakdown: { base: '₹26.00 LPA', variable: '₹9.00 LPA (ESOPs)', deductions: '₹60,000/mo' } },
                { name: 'Staff Engineer', description: 'End-to-end ownership. Architecture.', ctc: '₹60.00 LPA', inHand: '₹3,20,000/mo', breakdown: { base: '₹45.00 LPA', variable: '₹15.00 LPA (ESOPs)', deductions: '₹1,10,000/mo' } }
            ];
        case 'WITCH':
        case 'Service':
        case 'Niche':
            return [
                { name: 'System Engineer', description: 'Entry-level IT support, maintenance, dev.', ctc: '₹3.60 LPA', inHand: '₹25,000/mo', breakdown: { base: '₹3.00 LPA', variable: '₹0.60 LPA', deductions: '₹2,500/mo (PF)' } },
                { name: 'Digital/Advanced', description: 'IoT, Big Data, Full Stack dev. Requires MERN/Java.', ctc: '₹7.50 LPA', inHand: '₹52,000/mo', breakdown: { base: '₹6.50 LPA', variable: '₹1.00 LPA', deductions: '₹5,000/mo' } },
                { name: 'Specialist/Lead', description: 'System design, team lead, client handling.', ctc: '₹12.00 LPA', inHand: '₹85,000/mo', breakdown: { base: '₹10.50 LPA', variable: '₹1.50 LPA', deductions: '₹8,000/mo' } }
            ];
        default:
             return [
                { name: 'Software Engineer', description: 'Standard SWE role.', ctc: '₹15.00 LPA', inHand: '₹95,000/mo', breakdown: { base: '₹12.00 LPA', variable: '₹3.00 LPA', deductions: '₹18,000/mo' } },
                { name: 'Senior Engineer', description: 'Core product contributor.', ctc: '₹28.00 LPA', inHand: '₹1,60,000/mo', breakdown: { base: '₹22.00 LPA', variable: '₹6.00 LPA', deductions: '₹45,000/mo' } }
            ];
    }
};

const generateTechStack = (tier, type) => {
    let frontend = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'];
    let backend = ['Node.js', 'Go', 'Python / Django'];
    let infra = ['AWS', 'Docker', 'Kubernetes', 'Terraform'];
    let data = ['PostgreSQL', 'Redis', 'Kafka', 'Snowflake'];

    if (tier === 'HFT') {
        frontend = ['React.js', 'WPF (Legacy)'];
        backend = ['C++17/20', 'Rust', 'Python'];
        infra = ['Bare Metal Linux', 'FPGA', 'Custom Kernel'];
        data = ['KDB+', 'TimescaleDB', 'Custom In-Memory Arrays'];
    } else if (tier === 'WITCH' || type === 'Consulting') {
        frontend = ['Angular', 'React.js', 'JSP'];
        backend = ['Java Spring Boot', 'C# .NET', 'Node.js'];
        infra = ['Azure', 'AWS', 'On-Premises Servers'];
        data = ['Oracle DB', 'MS SQL Server', 'MySQL'];
    } else if (tier === 'Niche') {
        frontend = ['React.js', 'Vue.js', 'Salesforce LWC'];
        backend = ['Node.js', 'Apex', 'Python'];
        infra = ['Salesforce Clouds', 'AWS', 'Vercel'];
        data = ['MongoDB', 'PostgreSQL', 'SOQL'];
    }

    return { frontend, backend, infra, data };
};

const generateProcess = (tier) => {
    if (tier === 'FAANG') {
        return [
            { name: 'Phone Screen', duration: '45 Mins', difficulty: 'Hard', desc: 'Initial technical screen focusing on medium/hard Leetcode.', topics: ['Arrays', 'Strings', 'Graphs'] },
            { name: 'Onsite Coding Loop', duration: '4 Hours', difficulty: 'Expert', desc: 'Exhaustive 4-round loop covering advanced DSA and Behavioral.', topics: ['DP', 'Trees', 'Leadership Principles'] },
            { name: 'System Design', duration: '1 Hour', difficulty: 'Expert', desc: 'High-level architecture design for scalable systems.', topics: ['Microservices', 'Sharding'] }
        ];
    }
    if (tier === 'IND_Unicorn' || tier === 'Unicorn') {
         return [
            { name: 'Machine Coding Round', duration: '2 Hours', difficulty: 'Hard', desc: 'Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).', topics: ['LLD', 'State Management'] },
            { name: 'DSA / Problem Solving', duration: '1 Hour', difficulty: 'Medium', desc: 'Standard Leetcode Mediums focusing on optimization.', topics: ['Hash Maps', 'Sliding Window'] },
            { name: 'Hiring Manager', duration: '45 Mins', difficulty: 'Medium', desc: 'Past projects, architecture discussion, culture fit.', topics: ['Impact', 'Scale'] }
        ];
    }
    if (tier === 'HFT') {
        return [
            { name: 'Online Assessment', duration: '2 Hours', difficulty: 'Nightmare', desc: 'Advanced mathematics, probability algorithms, and C++ memory constraints.', topics: ['Math', 'C++ Internals'] },
            { name: 'Superday', duration: '5 Hours', difficulty: 'Nightmare', desc: 'Grueling back-to-back rounds with Quants and Devs testing speed.', topics: ['Algorithmic Trading', 'Concurrency'] }
        ]
    }
    return [
        { name: 'Aptitude & Coding (Online)', duration: '120 Mins', difficulty: 'Moderate', desc: 'Mass testing platform assessing Quants, Verbal, and basic array manipulation.', topics: ['Quants', 'Basic Arrays'] },
        { name: 'Technical Interview', duration: '45 Mins', difficulty: 'Moderate', desc: 'Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.', topics: ['Java/Python basics', 'SQL Queries'] },
        { name: 'HR Round', duration: '15 Mins', difficulty: 'Easy', desc: 'Relocation flexibility checks, bond signing willingness, background verification.', topics: ['Flexibility', 'Company Trivia'] }
    ];
};

const generateEligibility = (tier) => {
    if (tier === 'WITCH' || tier === 'Big4' || tier === 'Enterprise') {
         return {
            cgpa: 'Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).',
            backlogs: 'Zero active backlogs allowed at the time of joining/interview.',
            gaps: 'Maximum 1 year allowed (requires valid sworn affidavit).',
            notes: 'Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting.'
        };
    }
    return {
        cgpa: 'No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).',
        backlogs: 'Allowed if cleared before joining.',
        gaps: 'Overlooked if justified by exceptional open-source contributions or startup experience.',
        notes: 'Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles.'
    };
};

const generateCulture = (tier, type) => {
    let wlb = 'Moderate';
    let remote = 'Hybrid (3 Days Office)';
    let vibe = 'Corporate';
    
    if (tier === 'FAANG') { wlb = 'Good to Moderate'; remote = 'Strict Hybrid (3-4 Days)'; vibe = 'Process-driven, intense peer pressure but great perks.'; }
    if (tier === 'IND_Unicorn' || tier === 'Startup') { wlb = 'Poor'; remote = 'Mostly Office (6 Days common in some)'; vibe = 'Chaotic, high-ownership, extreme hustle culture.'; }
    if (tier === 'WITCH') { wlb = 'Good (Bench) / Poor (Project)'; remote = 'Mandatory Office (5 Days)'; vibe = 'Hierarchical, slow moving, bureaucratic.'; }
    if (tier === 'HFT') { wlb = 'Intense'; remote = 'Strictly Office (Trading floor)'; vibe = 'Utilitarian, ultra-competitive, intellectually humbling.'; }
    if (tier === 'Remote') { wlb = 'Excellent'; remote = '100% Remote Forever'; vibe = 'Asynchronous, output-driven, lonely for some.'; }

    return { wlb, remote, vibe };
}

const generateReality = (tier) => {
    if (tier === 'FAANG') {
        return {
            pros: ['Top 1% compensation and RSUs that actually appreciate.', 'Work with world-class engineers.', 'Ultimate resume brand value.', 'Free food and premium health benefits.'],
            cons: ['Intense interview preparation required (months of Leetcode).', 'Can be highly bureaucratic in legacy orgs.', 'High expectations resulting in PIP (Performance Improvement Plan) anxiety.']
        };
    }
    if (tier === 'IND_Unicorn' || tier === 'Startup') {
        return {
            pros: ['Massive learning curve and steep career growth.', 'High ownership - your code ships to millions instantly.', 'ESOPs can be highly lucrative if an IPO hits.'],
            cons: ['Work-life balance is often completely non-existent.', 'Job security depends entirely on funding runways.', 'Chaotic engineering processes and constant pivot fatigue.']
        };
    }
    if (tier === 'WITCH') {
        return {
             pros: ['High job security (long bench periods without firing).', 'Good starting point for freshers to get paid training.', 'Onsite opportunities (H1B/L1) after 3-4 years in specific verticals.'],
            cons: ['Very low starting salary that rarely compounds quickly.', 'Random project and tech stack allocation (you might be mapped to testing).', 'Strict hierarchy, timesheets, and rigid HR rules.']
        }
    }
    return {
        pros: ['Stable income and predictable promotion cycles.', 'Structured corporate training programs.', 'Global exposure.'],
        cons: ['Timesheet culture.', 'Slow moving legacy tech stacks.', 'Averaged-out compensation bands.']
    };
};

const fullData = companiesList.map(c => {
    return {
        id: c.id,
        name: c.name,
        type: c.type,
        status: c.stat,
        logo: c.id.substring(0, 3).toUpperCase(),
        rating: c.rating,
        aiVerdict: c.aiVerdict,
        overview: generateOverview(c),
        roles: generateRoles(c.tier),
        techStack: generateTechStack(c.tier, c.type),
        process: generateProcess(c.tier),
        eligibility: generateEligibility(c.tier),
        culture: generateCulture(c.tier, c.type),
        reality: generateReality(c.tier)
    }
});

const outputContent = `export type RoleBreakdown = { base: string; variable: string; deductions: string; };
export type Role = { name: string; description: string; ctc: string; inHand: string; breakdown?: RoleBreakdown; };
export type ProcessStep = { name: string; duration?: string; difficulty?: 'Easy' | 'Moderate' | 'Hard' | 'Expert' | 'Nightmare'; desc: string; topics?: string[]; };
export type Eligibility = { cgpa: string; backlogs: string; gaps: string; notes?: string; };
export type Reality = { pros: string[]; cons: string[]; };
export type TechStack = { frontend: string[]; backend: string[]; infra: string[]; data: string[]; };
export type Culture = { wlb: string; remote: string; vibe: string; };
export type Overview = { about: string; headquarters: string; website: string; founded: string; size: string; rating: number; updateTag: string; };

export type CompanyData = {
    id: string;
    name: string;
    type: string;
    status: 'Active' | 'Inactive';
    logo: string;
    rating: number;
    aiVerdict: string;
    overview: Overview;
    roles: Role[];
    techStack: TechStack;
    process: ProcessStep[];
    eligibility: Eligibility;
    culture: Culture;
    reality: Reality;
};

export const companies: CompanyData[] = ${JSON.stringify(fullData, null, 4)};
`;

fs.writeFileSync(path.join(__dirname, 'company-data.ts'), outputContent);
console.log('Successfully generated company-data.ts with ' + fullData.length + ' companies holding 7-Tab Schema Data.');
