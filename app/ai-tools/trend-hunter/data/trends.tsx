import React from "react"
import { Sparkles, Cpu, Globe, Database, Smartphone, Shield, Cloud, Bot, Code2, Zap, Layers, Server, Activity, MonitorSmartphone, Code, Fingerprint, Headset, Blocks, Gamepad2, PenTool, Link, Atom, TerminalSquare, BrainCircuit, Wand2 } from "lucide-react"

export type Trend = {
    id: string;
    name: string;
    category: "AI/ML" | "Agentic Tech" | "Frontend" | "Backend" | "Fullstack" | "Data" | "Infra/DevOps" | "Mobile" | "Security" | "Emerging" | "Game Dev" | "Low/No Code" | "Web3/Crypto";
    growthRate: string; // Changed from velocity
    status: "Hyper" | "Explosive" | "Growing" | "Stable" | "Declining";
    description: string;
    icon: React.ReactNode;
    salaryImpact: string;
    adoptionRate: number; // percentage
    keyTech: string[];
    marketDemand: {
        roles: string; 
        growth: string;
    };
    insights: {
        good: string[];
        bad: string[];
    };
    timeline: {
        year: string;
        event: string;
    }[];
}

export const trends: Trend[] = [
    // === BLEEDING EDGE AI & AGENTIC STUFF ===
    {
        id: "mcp-protocol",
        name: "Model Context Protocol (MCP)",
        category: "Agentic Tech",
        growthRate: "+900%",
        status: "Hyper",
        description: "The universal USB-C standard for AI agents. MCP allows AI models to connect natively to local file systems, databases, and APIs without custom integrations.",
        icon: <TerminalSquare />,
        salaryImpact: "+75% Premium (Foundational AI)",
        adoptionRate: 15,
        keyTech: ["MCP Servers", "Claude Desktop", "TypeScript", "Python", "Local Tool Calling"],
        marketDemand: {
            roles: "3k+",
            growth: "+800% YoY",
        },
        insights: {
            good: ["Standardizes how AI interacts with human tools", "Massive open-source community building MCP servers right now", "Eliminates the need for writing custom wrappers for every API"],
            bad: ["Literally weeks/months old; highly unstable", "Security risks in giving AI deep system access", "Documentation is still being written"]
        },
        timeline: [
            { year: "2024", event: "Anthropic open-sources MCP" },
            { year: "2025", event: "Major IDEs and AI Assistants adopt MCP natively" },
            { year: "2026", event: "Expected to become the default standard for all Agent-Tool communication" }
        ]
    },
    {
        id: "vibe-coding",
        name: "Vibe Coding (AI-Assisted Dev)",
        category: "Emerging",
        growthRate: "+500%",
        status: "Hyper",
        description: "The paradigm shift from writing every line of code to 'vibing' with AI assistants (Cursor, Windsurf, Copilot Workspace) through natural language to orchestrate complete applications.",
        icon: <Wand2 />,
        salaryImpact: "Evolution of All Roles",
        adoptionRate: 55,
        keyTech: ["Cursor IDE", "Claude 3.5 Sonnet", "GitHub Copilot", "Devin/Devika", "Prompt Engineering"],
        marketDemand: {
            roles: "Required Everywhere",
            growth: "Infinite (Paradigm Shift)",
        },
        insights: {
            good: ["10x to 100x multiplier on developer output", "Allows developers to focus on architecture and product over syntax", "Democratizes app creation"],
            bad: ["Can trap juniors in 'AI generated slop' without understanding fundamentals", "Codebases can become bloated and unmaintainable quickly", "Requires constant context-window management"]
        },
        timeline: [
            { year: "2021", event: "GitHub Copilot launched" },
            { year: "2024", event: "Claude 3.5 Sonnet + Cursor makes 'Vibe Coding' a reality" },
            { year: "Now", event: "From autocompletion to multi-file autonomous editing" }
        ]
    },
    {
        id: "agentic-orchestration",
        name: "Agentic Swarms & Orchestration",
        category: "Agentic Tech",
        growthRate: "+450%",
        status: "Explosive",
        description: "Moving past single chatbots to multi-agent 'swarms' that debate, plan, execute, code, and self-correct to solve complex human goals.",
        icon: <BrainCircuit />,
        salaryImpact: "+60% Premium",
        adoptionRate: 25,
        keyTech: ["LangGraph", "CrewAI", "AutoGen", "Python", "MemGPT", "Vector DBs"],
        marketDemand: {
            roles: "15k+",
            growth: "+350% YoY",
        },
        insights: {
            good: ["Unprecedented salary premiums for agent developers", "Solves the 'brittleness' of standard RAG pipelines", "High visibility to strategic executive leadership"],
            bad: ["Agents frequently get stuck in infinite reasoning loops", "Incredibly expensive API costs during testing", "Hard to guarantee deterministic outputs"]
        },
        timeline: [
            { year: "2023", event: "AutoGPT goes viral, proves concept (but fails in practice)" },
            { year: "2024", event: "Rise of structured agent frameworks (LangGraph/CrewAI)" },
            { year: "Now", event: "Multi-agent orchestration begins hitting enterprise production" }
        ]
    },
     {
        id: "local-llms",
        name: "Local Edge AI & Small Models",
        category: "AI/ML",
        growthRate: "+200%",
        status: "Explosive",
        description: "Moving away from expensive API calls to running compressed, highly specialized smaller Language Models (SLMs) privately on edge devices or laptops.",
        icon: <Zap />,
        salaryImpact: "+40% Premium",
        adoptionRate: 20,
        keyTech: ["Llama.cpp", "Ollama", "HuggingFace", "PyTorch", "GGUF/Quantization"],
        marketDemand: {
            roles: "8k+",
            growth: "+250% YoY",
        },
        insights: {
            good: ["Zero API costs in production", "Absolute data privacy for enterprise and healthcare", "Operates offline without latency"],
            bad: ["Hardware requirements (GPUs/VRAM) are a physical bottleneck", "Smaller models lack generalized reasoning of GPT-4", "Requires deep knowledge of model weights optimization"]
        },
        timeline: [
            { year: "2023", event: "Llama is leaked, sparking open-source AI revolution" },
            { year: "2024", event: "Ollama makes running local models as easy as Docker" },
            { year: "2025", event: "WebGPU enables powerful LLMs running directly in the browser" }
        ]
    },

    // === FOUNDATIONAL & CORE STACKS ===
    {
        id: "mern-stack",
        name: "MERN / Mainstream Fullstack",
        category: "Fullstack",
        growthRate: "+10%",
        status: "Stable",
        description: "The absolute backbone of Indian service-based companies and early-stage startups. React on the frontend, Node/Express on the backend.",
        icon: <Layers />,
        salaryImpact: "Baseline Standard",
        adoptionRate: 92,
        keyTech: ["React", "Node.js", "Express", "MongoDB", "Redux", "TailwindCSS"],
        marketDemand: {
            roles: "250k+",
            growth: "+8% YoY",
        },
        insights: {
            good: ["Massive volume of entry-level and mid-level roles", "Huge community support and tutorials", "Easiest stack to start freelancing"],
            bad: ["Hyper-competitive entry market suppresses fresher salaries", "Salaries plateau quickly without system design skills", "Often involves maintaining messy legacy codebases"]
        },
        timeline: [
            { year: "2015", event: "MERN becomes the startup standard" },
            { year: "2020", event: "Peak boot-camp supply hits the market" },
            { year: "2025", event: "Transitioning towards Next.js / Meta-frameworks" }
        ]
    },
    {
        id: "java-spring",
        name: "Java & Spring Ecosystem",
        category: "Backend",
        growthRate: "+6%",
        status: "Stable",
        description: "The undisputed king of enterprise software, banking, and established product companies (MNCs) in India.",
        icon: <Server />,
        salaryImpact: "+15% Premium (Mid-Senior)",
        adoptionRate: 95,
        keyTech: ["Java", "Spring Boot", "Microservices", "Kafka", "Hibernate", "SQL/Oracle"],
        marketDemand: {
            roles: "180k+",
            growth: "+5% YoY",
        },
        insights: {
            good: ["Unmatched job security and stability", "Standard tech stack for high-paying MNCs (JPMC, Goldman Sachs, Amazon)", "Clear path to enterprise architect roles"],
            bad: ["Steep learning curve for freshers compared to JS/Python", "Heavy boilerplate", "Slower iteration cycles"]
        },
        timeline: [
            { year: "2014", event: "Spring Boot 1.0 released, simplifying Java dev" },
            { year: "2021", event: "Spring Native pushes towards faster startup times" },
            { year: "2025", event: "Dominating massive, mission-critical microservice architectures" }
        ]
    },
    {
        id: "python-django",
        name: "Python (FastAPI/Django)",
        category: "Backend",
        growthRate: "+18%",
        status: "Growing",
        description: "Historically used for scripting, Python has become strictly required for AI integration. FastAPI is rapidly replacing Flask/Django for high-performance APIs.",
        icon: <Code />,
        salaryImpact: "+10% Premium",
        adoptionRate: 85,
        keyTech: ["Python", "FastAPI", "Django", "PostgreSQL", "Celery", "Redis"],
        marketDemand: {
            roles: "120k+",
            growth: "+20% YoY",
        },
        insights: {
            good: ["Natural bridge into AI/ML and Data Science", "FastAPI offers excellent developer experience and speed", "Very readable syntax"],
            bad: ["Global Interpreter Lock (GIL) still limits true multithreading", "Django can feel bloated for modern microservices", "Dependency management (pip/poetry) can be chaotic"]
        },
        timeline: [
            { year: "2018", event: "FastAPI released, changing Python web dev" },
            { year: "2022", event: "Python overtakes alternatives due to AI boom" },
            { year: "2025", event: "Seamless integration with LLM frameworks becomes mandatory" }
        ]
    },
    {
        id: "csharp-dotnet",
        name: "C# & .NET Core",
        category: "Backend",
        growthRate: "+8%",
        status: "Stable",
        description: "The primary choice for enterprise IT, healthcare, and legacy migrations. Microsoft's heavy investment has made .NET Core incredibly fast and modern.",
        icon: <MonitorSmartphone />,
        salaryImpact: "Baseline Standard",
        adoptionRate: 80,
        keyTech: ["C#", ".NET 8", "Entity Framework", "Azure Cloud", "SQL Server", "Blazor"],
        marketDemand: {
            roles: "140k+",
            growth: "+6% YoY",
        },
        insights: {
            good: ["Fantastic enterprise backing and documentation", ".NET 8 is extremely performant", "Tight integration with Azure ecosystem"],
            bad: ["Perceived as 'boring' corporate tech", "Heavy reliance on Visual Studio/Windows historically", "Smaller startup presence"]
        },
        timeline: [
            { year: "2016", event: ".NET Core 1.0 brings cross-platform capability" },
            { year: "2020", event: ".NET 5 unifies the ecosystem" },
            { year: "2025", event: ".NET 8 solidifies high performance in cloud and edge" }
        ]
    },
    {
        id: "php-laravel",
        name: "PHP & Laravel",
        category: "Backend",
        growthRate: "+2%",
        status: "Stable",
        description: "Often mocked, but powers nearly 70% of the web. Laravel is a highly mature framework offering unmatched developer speed for traditional fullstack apps.",
        icon: <Code2 />,
        salaryImpact: "-10% Below Average",
        adoptionRate: 75,
        keyTech: ["PHP 8+", "Laravel", "Livewire", "Vue.js", "MySQL", "Inertia.js"],
        marketDemand: {
            roles: "100k+",
            growth: "+2% YoY",
        },
        insights: {
            good: ["Fastest time-to-market for standard web apps", "Massive gig/freelance economy (WordPress/Custom apps)", "Laravel's ecosystem (Forge, Vapor) is world-class"],
            bad: ["Historically lower salaries than Node/Java/Go", "Stigma against PHP persists in tech hubs", "Not suited for real-time scaling or high-concurrency apps"]
        },
        timeline: [
            { year: "2011", event: "Laravel 1.0 released" },
            { year: "2020", event: "PHP 8 brings JIT compiler and typed madness" },
            { year: "2025", event: "Maintains absolute dominance in solopreneur/agency space" }
        ]
    },

    // === DATA & INFRA ===
    {
        id: "sql-data",
        name: "Advanced SQL & Tuning",
        category: "Data",
        growthRate: "+12%",
        status: "Stable",
        description: "Despite NoSQL trends, deep SQL optimization remains the most highly sought-after foundational skill for mid-to-senior backend and data roles.",
        icon: <Database />,
        salaryImpact: "+25% Premium (For DBAs/Architects)",
        adoptionRate: 98,
        keyTech: ["PostgreSQL", "MySQL", "Oracle", "Index Tuning", "Query Optimization", "pgvector"],
        marketDemand: {
            roles: "300k+",
            growth: "+10% YoY",
        },
        insights: {
            good: ["The most transferable skill in software engineering", "PostgreSQL is dominating as the universal default DB", "Crucial for system design interviews"],
            bad: ["Writing complex queries can be difficult to maintain", "ORMs often hide terrible SQL performance until scale hits", "Migration pains are real"]
        },
        timeline: [
            { year: "1970s", event: "SQL introduced" },
            { year: "2010s", event: "NoSQL challenges SQL (but fails to replace it)" },
            { year: "2025", event: "PostgreSQL extensions (pgvector) make it an AI powerhouse" }
        ]
    },
     {
        id: "data-engineering",
        name: "Modern Data Stack (DE)",
        category: "Data",
        growthRate: "+90%",
        status: "Explosive",
        description: "Building the pipelines that feed AI and analytics. Shift from traditional ETL to ELT using cloud-native modern data warehouse tools.",
        icon: <Cloud />,
        salaryImpact: "+35% Premium",
        adoptionRate: 75,
        keyTech: ["Python", "SQL", "Snowflake", "dbt", "Apache Airflow", "Databricks/Spark"],
        marketDemand: {
            roles: "75k+",
            growth: "+60% YoY",
        },
        insights: {
            good: ["Crucial prerequisite for any company doing AI strategies", "High barrier to entry keeps salaries continuously high", "Less framework fatigue than frontend dev"],
            bad: ["On-call rotations can be stressful if critical pipelines break", "High responsibility for data correctness and compliance", "Tools are extremely expensive to run"]
        },
        timeline: [
            { year: "2019", event: "Snowflake/BigQuery become mainstream" },
            { year: "2021", event: "dbt revolutionizes modern data transformation" },
            { year: "2025", event: "Real-time streaming and unified Data Lakehouses dominate" }
        ]
    },
    {
        id: "platform-eng",
        name: "Platform Engineering / IDPs",
        category: "Infra/DevOps",
        growthRate: "+110%",
        status: "Explosive",
        description: "Evolution of DevOps into building Internal Developer Platforms (IDPs). Treating internal developers as customers to reduce their cognitive load.",
        icon: <Cpu />,
        salaryImpact: "+35% Premium",
        adoptionRate: 60,
        keyTech: ["Kubernetes", "AWS/GCP/Azure", "Terraform", "GitHub Actions", "ArgoCD", "Backstage"],
        marketDemand: {
            roles: "45k+",
            growth: "+100% YoY",
        },
        insights: {
            good: ["High strategic value to CTOs", "Reduces dev burnout across large organizations", "Commands very high senior salaries"],
            bad: ["Requires immense domain knowledge (OS, Networking, Cloud, Security)", "Can become a bottleneck if IDP is designed poorly", "Heavy corporate politics involved"]
        },
        timeline: [
            { year: "2022", event: "DevOps fatigue and complexity peaks" },
            { year: "2023", event: "Platform Engineering becomes a distinct recognized discipline" },
            { year: "2025", event: "IDPs are standard tooling in mid-to-large enterprises" }
        ]
    },

    // === MODERN STANDARD ===
    {
        id: "nextjs-react",
        name: "Next.js Ecosystem",
        category: "Frontend",
        growthRate: "+85%",
        status: "Growing",
        description: "The evolution of the React ecosystem. Moving from client-side SPAs to server-side rendering, RSCs, and specialized edge computing.",
        icon: <Globe />,
        salaryImpact: "+20% over standard React",
        adoptionRate: 70,
        keyTech: ["Next.js", "React Server Components", "Tailwind CSS", "TypeScript", "Vercel/AWS"],
        marketDemand: {
            roles: "85k+",
            growth: "+40% YoY",
        },
        insights: {
            good: ["Preferred stack for new modern startups and agencies", "Excellent SEO and LCP out-of-the-box", "High developer experience (DX)"],
            bad: ["Rapidly changing paradigms (Pages to App Router fatigue) frustrate developers", "Complexity in hydration and state management across server boundaries", "Caching logic can be deeply confusing"]
        },
        timeline: [
            { year: "2020", event: "Next.js 10 introduces Image optimization" },
            { year: "2023", event: "App Router completely changes the paradigm" },
            { year: "2025", event: "React Server Components become the absolute default" }
        ]
    },
    {
        id: "tailwind-shadcn",
        name: "Tailwind & Headless UI",
        category: "Frontend",
        growthRate: "+120%",
        status: "Hyper",
        description: "Moving away from heavy pre-styled component libraries (Bootstrap) to utility-first CSS and copy-paste unstyled components like shadcn/ui.",
        icon: <PenTool />,
        salaryImpact: "Standard Requirement",
        adoptionRate: 88,
        keyTech: ["TailwindCSS", "shadcn/ui", "Radix UI", "Framer Motion", "Headless UI"],
        marketDemand: {
            roles: "120k+",
            growth: "+150% YoY",
        },
        insights: {
            good: ["Complete design freedom without fighting CSS overrides", "Extremely fast prototyping for beautiful interfaces", "shadcn/ui pattern gives full ownership of code"],
            bad: ["HTML files get incredibly noisy with long class strings", "Steep learning curve to memorize exact utility names", "Extracting reusable components cleanly takes discipline"]
        },
        timeline: [
            { year: "2019", event: "Tailwind starts gaining massive traction" },
            { year: "2023", event: "shadcn/ui revolutionizes component libraries" },
            { year: "2025", event: "Utility-first becomes the standard for greenfield React apps" }
        ]
    },
     {
        id: "go-microservices",
        name: "Golang Distributed Systems",
        category: "Backend",
        growthRate: "+130%",
        status: "Explosive",
        description: "The language of the cloud. Replacing Node.js and Java in high-performance, highly concurrent microservices and infrastructure tooling.",
        icon: <Zap />,
        salaryImpact: "+40% Premium",
        adoptionRate: 45,
        keyTech: ["Go (Golang)", "gRPC", "Kubernetes", "Docker", "PostgreSQL", "Redis"],
        marketDemand: {
            roles: "35k+",
            growth: "+95% YoY",
        },
        insights: {
            good: ["Incredible performance and low memory footprint compared to JVM apps", "Simple, opinionated syntax that is easy to read across teams", "Huge demand in Fintech and high-scale consumer tech (Swiggy, Zerodha)"],
            bad: ["Verbose error handling (if err != nil)", "Smaller ecosystem for standard web dev compared to Node/NPM", "Strict compiler can frustrate beginners"]
        },
        timeline: [
            { year: "2018", event: "Kubernetes dominance cements Go's reputation" },
            { year: "2022", event: "Go Generics introduced" },
            { year: "2025", event: "Default choice for rewriting slow Node/Python bottlenecks" }
        ]
    },

    // === NICHE & DEEP TECH ===
    {
        id: "rust-wasm",
        name: "Rust & Systems Programming",
        category: "Backend",
        growthRate: "+160%",
        status: "Explosive",
        description: "Bringing safety to low-level systems and native-level performance to the browser (WASM). Rewriting critical infra for speed and absolute security.",
        icon: <Shield />,
        salaryImpact: "+50% Premium",
        adoptionRate: 25,
        keyTech: ["Rust", "WASM", "Cargo", "Tokio", "Actix Web"],
        marketDemand: {
            roles: "12k+",
            growth: "+150% YoY",
        },
        insights: {
            good: ["Most loved language on StackOverflow 9 years running", "Memory safety guarantees without garbage collection", "Extremely performant (C/C++ level)"],
            bad: ["Notoriously steep learning curve (Borrow Checker)", "Long compile times on large projects", "Fewer entry-level roles available"]
        },
        timeline: [
            { year: "2020", event: "WASM becomes a W3C standard" },
            { year: "2023", event: "Rust adoption by major tech (Microsoft, Meta, Linux Kernel)" },
            { year: "2025", event: "Crypto, CLI tools, and high-freq trading adoption skyrockets" }
        ]
    },
    {
        id: "cybersecurity-zero-trust",
        name: "Cybersecurity & Zero Trust",
        category: "Security",
        growthRate: "+95%",
        status: "Explosive",
        description: "Moving from perimeter-based security to 'never trust, always verify'. Securing cloud infrastructure, APIs, and AI models against novel attacks.",
        icon: <Fingerprint />,
        salaryImpact: "+45% Premium",
        adoptionRate: 65,
        keyTech: ["Zero Trust Architecture", "IAM (Okta, Auth0)", "SIEM", "Penetration Testing", "Cloudflare/WAF"],
        marketDemand: {
            roles: "60k+",
            growth: "+85% YoY",
        },
        insights: {
            good: ["Recession-proof job market", "Ransomware and AI-generated attacks guarantee high demand", "Extremely lucrative enterprise consulting opportunities"],
            bad: ["High stress environment (always on call for breaches)", "Requires constant learning to stay ahead of black-hats", "Compliance paperwork is heavy"]
        },
        timeline: [
            { year: "2021", event: "Ransomware spikes drive Zero Trust adoption" },
            { year: "2023", event: "Government mandates for secure software supply chains" },
            { year: "2025", event: "AI-driven threat detection becomes mandatory" }
        ]
    },
    {
        id: "react-native-expo",
        name: "React Native & Expo",
        category: "Mobile",
        growthRate: "+50%",
        status: "Growing",
        description: "Cross-platform mobile development. Expo has drastically improved the developer experience, making RN the default for many startups over Flutter.",
        icon: <Smartphone />,
        salaryImpact: "+15% over standard Web",
        adoptionRate: 80,
        keyTech: ["React Native", "Expo Router", "TypeScript", "Zustand", "Reanimated"],
        marketDemand: {
            roles: "55k+",
            growth: "+40% YoY",
        },
        insights: {
            good: ["Write once, deploy natively to iOS/Android", "Leverages massive existing React talent pool", "Expo handles the native module compiling headaches flawlessly"],
            bad: ["Performance still lags slightly behind pure native (Swift/Kotlin)", "Upgrading RN versions can historically be painful", "Heavy reliance on third-party community libraries"]
        },
        timeline: [
            { year: "2019", event: "React Native Hooks introduced" },
            { year: "2023", event: "Expo Router brings file-based routing to mobile apps" },
            { year: "2025", event: "First choice for MVP and scale-up consumer mobile apps" }
        ]
    },
    {
        id: "swift-kotlin",
        name: "Native Mobile (Swift/Kotlin)",
        category: "Mobile",
        growthRate: "+5%",
        status: "Stable",
        description: "When performance, hardware access, and absolute polish are non-negotiable, companies hire Native developers to build pure iOS/Android applications.",
        icon: <Smartphone />,
        salaryImpact: "+20% Premium (Senior)",
        adoptionRate: 85,
        keyTech: ["SwiftUI", "Kotlin", "Jetpack Compose", "CoreData", "XCode/Android Studio"],
        marketDemand: {
            roles: "60k+",
            growth: "+10% YoY",
        },
        insights: {
            good: ["Highest performance ceiling possible for complex UI/UX", "Day-1 access to new OS features (Dynamic Island, Camera APIs)", "Niche roles with low competition compared to web dev"],
            bad: ["Requires learning and maintaining two completely separate codebases", "Slower iteration speed than React Native OTA updates", "Restricted heavily by rigid App Store review ecosystems"]
        },
        timeline: [
            { year: "2014", event: "Apple introduces Swift" },
            { year: "2019", event: "SwiftUI and Jetpack Compose revolutionize native UI dev" },
            { year: "2025", event: "Native remains strictly for enterprise or heavy-tech apps" }
        ]
    },

    // === VERY NEW & EXPERIMENTAL ===
    {
        id: "ar-vr-spatial",
        name: "Spatial Computing (AR/VR)",
        category: "Emerging",
        growthRate: "+40%",
        status: "Growing",
        description: "Building immersive mixed-reality experiences for Apple Vision Pro, Meta Quest, and enterprise training applications across the globe.",
        icon: <Headset />,
        salaryImpact: "+25% Premium (Niche)",
        adoptionRate: 15,
        keyTech: ["Unity 3D", "Unreal Engine", "C#", "C++", "WebXR", "visionOS"],
        marketDemand: {
            roles: "10k+",
            growth: "+60% YoY",
        },
        insights: {
            good: ["Cutting-edge work that feels like you're building the future", "High demand in defense, healthcare, and high-end retail", "Little competition from traditional web devs"],
            bad: ["Consumer adoption of headsets is still relatively slow and niche", "Hardware constraints (battery/weight) are difficult to work with", "Motion sickness issues must be solved in UX design"]
        },
        timeline: [
            { year: "2020", event: "Quest 2 brings standalone VR to the masses" },
            { year: "2024", event: "Apple Vision Pro launches, defining 'Spatial Computing'" },
            { year: "2025", event: "Enterprise training and 3D web adoption accelerates" }
        ]
    },
    {
        id: "web3-blockchain",
        name: "Web3 & Smart Contracts",
        category: "Web3/Crypto",
        growthRate: "+15%",
        status: "Stable",
        description: "Building decentralized applications, DeFi protocols, and tokenized assets. The hype has cooled, focusing now on sustainable infra.",
        icon: <Link />,
        salaryImpact: "+60% Premium (Extremely High)",
        adoptionRate: 12,
        keyTech: ["Solidity", "Rust", "Hardhat/Foundry", "Ethers.js", "ZK-Rollups"],
        marketDemand: {
            roles: "8k+",
            growth: "+20% YoY",
        },
        insights: {
            good: ["Highest salaries in the tech industry", "Remote-first, highly globalized workforce by default", "Fascinating technical challenges in cryptography and game theory"],
            bad: ["Extreme market volatility impacts job security constantly", "One small bug can drain millions of dollars (Insane stress)", "Prevalent scams damage the industry's mainstream reputation"]
        },
        timeline: [
            { year: "2021", event: "NFT and DeFi peak hype" },
            { year: "2023", event: "Bear market purges weak projects" },
            { year: "2025", event: "Focus shifts to Zero-Knowledge proofs and scalable L2 infrastructure" }
        ]
    },
    {
        id: "low-code-nocode",
        name: "Low-Code/No-Code Dev",
        category: "Low/No Code",
        growthRate: "+70%",
        status: "Growing",
        description: "Building production-grade applications rapidly using visual builders. Fast replacing traditional development for internal tools and simple SaaS.",
        icon: <Blocks />,
        salaryImpact: "Baseline",
        adoptionRate: 50,
        keyTech: ["Webflow", "Bubble", "Framer", "Retool", "Make/Zapier"],
        marketDemand: {
            roles: "40k+",
            growth: "+90% YoY",
        },
        insights: {
            good: ["Unbelievably fast delivery times (10x traditional dev)", "Massive freelance and agency demand for immediate results", "Highly accessible to designers and product managers"],
            bad: ["Severe vendor lock-in", "Hitting platform limitations requires bizarre, unstable workarounds", "Hard to version control or test properly like real code"]
        },
        timeline: [
            { year: "2020", event: "Webflow and Bubble cross massive adoption milestones" },
            { year: "2023", event: "Retool becomes the standard for internal dashboards" },
            { year: "2025", event: "AI generation combined with No-Code disrupts agency pricing globally" }
        ]
    },
    {
        id: "game-dev",
        name: "Game Development (Tech)",
        category: "Game Dev",
        growthRate: "+25%",
        status: "Stable",
        description: "The technical backbone of gaming, heavily reliant on incredibly complex mathematics, real-time physics engines, and hyper-optimized C++.",
        icon: <Gamepad2 />,
        salaryImpact: "-15% Below Market",
        adoptionRate: 20,
        keyTech: ["C++", "C#", "Unreal Engine 5", "Unity", "OpenGL/Vulkan"],
        marketDemand: {
            roles: "25k+",
            growth: "+15% YoY",
        },
        insights: {
            good: ["Extremely passionate industry with massive cultural impact", "Solving wildly complex computational and graphical problems", "Constantly pushes the absolute boundaries of edge hardware"],
            bad: ["Notorious 'crunch' culture leading to severe burnout", "Historically lower pay than equivalent SaaS engineering roles", "Highly volatile job security (frequent, sudden studio closures)"]
        },
        timeline: [
            { year: "2022", event: "Unreal Engine 5 releases, changing photorealistic graphics forever" },
            { year: "2024", event: "Major industry layoffs hit multiple massive studios" },
            { year: "2025", event: "Deep AI integration into NPC dialogue and procedural generation begins" }
        ]
    },
    {
        id: "quantum-computing",
        name: "Quantum Algorithms",
        category: "Emerging",
        growthRate: "+15%",
        status: "Growing",
        description: "Research and development into quantum algorithms capable of solving computational problems traditional binary supercomputers simply cannot.",
        icon: <Atom />,
        salaryImpact: "+80% Premium (PhD Level)",
        adoptionRate: 2,
        keyTech: ["Qiskit", "Python", "C++", "Linear Algebra", "Q#"],
        marketDemand: {
            roles: "1k+",
            growth: "+40% YoY",
        },
        insights: {
            good: ["The absolute cutting edge of human technology and science", "Potential to revolutionize material science and personalized medicine", "Heavy government and enterprise (IBM, Google) funding"],
            bad: ["Most roles strictly require a PhD in Physics, Math, or deeply related fields", "Practical, fault-tolerant commercial applications are still years/decades away", "Highly academic work environment"]
        },
        timeline: [
            { year: "2019", event: "Google claims Quantum Supremacy" },
            { year: "2023", event: "IBM releases 1,121-qubit processor" },
            { year: "2030+", event: "Estimated timeline for breaking RSA encryption globally (Q-Day)" }
        ]
    }
];
