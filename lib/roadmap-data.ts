export interface Resource {
    title: string;
    type: 'Video' | 'Article' | 'Course' | 'Book';
    url?: string;
}

export interface Milestone {
    title: string;
    description: string;
    whyMatters?: string; // New
    commonPitfalls?: string; // New
    realWorldApplication?: string; // New
    weeklyCommitment?: string; // New
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    skills: string[];
    resources: Resource[];
    projectIdea: string;
    checklist: string[]; // New: Granular actionable steps
}

export interface RoadmapData {
    role: string;
    summary: string;
    estimatedTotalDuration: string;
    dailyRoutine?: string;
    softSkills?: string[];
    interviewQuestions?: string[];
    salaryRange?: string; // New
    topCompanies?: string[]; // New
    tools?: string[]; // New
    certifications?: string[]; // New
    milestones: Milestone[];
}

export const PREDEFINED_ROADMAPS: Record<string, RoadmapData> = {
    "Software Developer": {
        role: "Software Developer",
        summary: "The universal problem solver. Master the fundamentals that apply across all domains.",
        estimatedTotalDuration: "12-18 Months",
        dailyRoutine: "Code review, system design, debugging legacy code, writing unit tests.",
        softSkills: ["Problem Solving", "Communication", "Adaptability", "Teamwork"],
        interviewQuestions: ["Explain SOLID principles.", "How does Garbage Collection work?", "Design a URL shortener."],
        salaryRange: "$90k - $160k",
        topCompanies: ["Google", "Microsoft", "Amazon", "Startups"],
        tools: ["Git", "Docker", "JIRA", "IDE (VS Code/IntelliJ)"],
        certifications: ["AWS Certified Developer", "Oracle Certified Professional"],
        milestones: [
            {
                title: "Computer Science Fundamentals",
                description: "The bedrock of all software engineering.",
                whyMatters: "Frameworks come and go; algorithms and data structures are forever.",
                commonPitfalls: "Skipping Big-O notation.",
                realWorldApplication: "Optimizing a slow database query.",
                weeklyCommitment: "10-15 hours/week",
                duration: "4 Months",
                difficulty: "Beginner",
                skills: ["Data Structures", "Algorithms", "Computer Architecture", "Operating Systems"],
                resources: [
                    { title: "CS50 (Harvard)", type: "Course" , url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science'},
                    { title: "Cracking the Coding Interview", type: "Book" , url: 'https://www.crackingthecodinginterview.com/'}
                ],
                projectIdea: "Build a custom memory allocator or a simple OS kernel.",
                checklist: [
                    "Implement a Hash Map from scratch",
                    "Write a multi-threaded program",
                    "Understand Process vs Thread",
                    "Master Bit Manipulation"
                ]
            },
            {
                title: "System Design & Architecture",
                description: "Designing scalable and maintainable systems.",
                whyMatters: "Writing code is easy; designing systems that survive for years is hard.",
                commonPitfalls: "Over-engineering simple problems.",
                realWorldApplication: "Designing a notification system for millions of users.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Design Patterns (GoF)", "Microservices", "REST/GraphQL", "Database Design"],
                resources: [
                    { title: "Designing Data-Intensive Applications", type: "Book" , url: 'https://dataintensive.net/'}
                ],
                projectIdea: "Design a clone of Instagram's backend.",
                checklist: [
                    "Implement Singleton and Factory patterns",
                    "Design a database schema (3NF)",
                    "Build a RESTful API",
                    "Load balance a web server"
                ]
            },
            {
                title: "Software Quality & Testing",
                description: "Ensuring your code actually works.",
                whyMatters: "Bugs cost money. Tests save money.",
                commonPitfalls: "Writing tests that only check happy paths.",
                realWorldApplication: "Setting up a CI/CD pipeline that blocks bad code.",
                weeklyCommitment: "8 hours/week",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["Unit Testing", "Integration Testing", "TDD", "CI/CD"],
                resources: [
                    { title: "The Art of Software Testing", type: "Book" , url: 'https://www.amazon.com/Art-Software-Testing-Glenford-Myers/dp/1118031962'}
                ],
                projectIdea: "Build a testing framework from scratch.",
                checklist: [
                    "Achieve 90% code coverage on a project",
                    "Set up GitHub Actions",
                    "Write end-to-end tests with Selenium/Playwright",
                    "Mock external dependencies"
                ]
            }
        ]
    },
    "Frontend Developer": {
        role: "Frontend Developer",
        summary: "Architect of the user experience. Master the browser, the DOM, and modern frameworks.",
        estimatedTotalDuration: "8-12 Months",
        dailyRoutine: "Building components, optimizing bundle size, fixing layout bugs, integrating APIs.",
        softSkills: ["Visual Eye", "Empathy", "Attention to Detail"],
        interviewQuestions: ["Explain the Event Loop.", "What is the Virtual DOM?", "CSS Grid vs Flexbox?"],
        salaryRange: "$80k - $150k",
        topCompanies: ["Vercel", "Airbnb", "Netflix", "Meta"],
        tools: ["VS Code", "Chrome DevTools", "Figma", "Webpack/Vite"],
        certifications: ["Meta Front-End Developer Professional Certificate"],
        milestones: [
            {
                title: "The Trinity: HTML, CSS, JS",
                description: "Deep dive into the core technologies of the web.",
                whyMatters: "Frameworks are just abstractions over these three.",
                commonPitfalls: "Jumping to React before understanding JavaScript closures.",
                realWorldApplication: "Building a responsive landing page.",
                weeklyCommitment: "15 hours/week",
                duration: "3 Months",
                difficulty: "Beginner",
                skills: ["Semantic HTML", "Modern CSS (Flex/Grid)", "ES6+ JavaScript", "DOM Manipulation"],
                resources: [
                    { title: "MDN Web Docs", type: "Article" , url: 'https://developer.mozilla.org/'},
                    { title: "JavaScript.info", type: "Article" , url: 'https://javascript.info/'}
                ],
                projectIdea: "Build a Trello clone using Vanilla JS.",
                checklist: [
                    "Master CSS Grid layouts",
                    "Understand Prototypal Inheritance",
                    "Implement Drag and Drop API",
                    "Make it mobile responsive"
                ]
            },
            {
                title: "Modern Frameworks (React ecosystem)",
                description: "Building complex UIs with component-based architecture.",
                whyMatters: "This is what the industry hires for.",
                commonPitfalls: "Prop drilling and excessive re-renders.",
                realWorldApplication: "Building a dashboard with dynamic data visualization.",
                weeklyCommitment: "15 hours/week",
                duration: "4 Months",
                difficulty: "Intermediate",
                skills: ["React", "Next.js", "State Management (Redux/Zustand)", "Tailwind CSS"],
                resources: [
                    { title: "React Documentation", type: "Article" , url: 'https://react.dev/'},
                    { title: "Epic React by Kent C. Dodds", type: "Course" , url: 'https://epicreact.dev/'}
                ],
                projectIdea: "Build an E-commerce site with cart functionality.",
                checklist: [
                    "Implement Server Side Rendering (SSR)",
                    "Manage global state",
                    "Create a custom hook",
                    "Optimize performance (useMemo/useCallback)"
                ]
            },
            {
                title: "Advanced Frontend Engineering",
                description: "Performance, Accessibility, and Architecture.",
                whyMatters: "Distinguishes a junior from a senior.",
                commonPitfalls: "Ignoring accessibility (a11y).",
                realWorldApplication: "Optimizing Core Web Vitals for a high-traffic site.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Web Performance", "Accessibility (WCAG)", "Testing (Jest/Cypress)", "Micro-frontends"],
                resources: [
                    { title: "Web.dev", type: "Article" , url: 'https://web.dev/'}
                ],
                projectIdea: "Build a component library with Storybook.",
                checklist: [
                    "Achieve 100 Lighthouse score",
                    "Implement full keyboard navigation",
                    "Write unit tests for components",
                    "Configure a Webpack build"
                ]
            }
        ]
    },
    "Backend Developer": {
        role: "Backend Developer",
        summary: "The engine room. Build robust APIs, manage databases, and ensure scalability.",
        estimatedTotalDuration: "10-14 Months",
        dailyRoutine: "Designing schemas, optimizing queries, securing endpoints, managing servers.",
        softSkills: ["Logic", "Security Awareness", "System Thinking"],
        interviewQuestions: ["Explain ACID properties.", "REST vs GraphQL?", "How to handle authentication?"],
        salaryRange: "$90k - $160k",
        topCompanies: ["Uber", "Stripe", "Twilio", "Backend-heavy Tech"],
        tools: ["Postman", "Docker", "Redis", "Linux"],
        certifications: ["AWS Certified Solutions Architect"],
        milestones: [
            {
                title: "Server Side Languages & Logic",
                description: "Pick your weapon: Node.js, Python, Java, or Go.",
                whyMatters: "You need a runtime to execute business logic.",
                commonPitfalls: "Not understanding the event loop (Node) or threading (Java).",
                realWorldApplication: "Building a REST API for a mobile app.",
                weeklyCommitment: "12 hours/week",
                duration: "3 Months",
                difficulty: "Beginner",
                skills: ["Node.js/Express", "Python/Django", "Java/Spring", "API Design"],
                resources: [
                    { title: "Roadmap.sh Backend", type: "Article" , url: 'https://roadmap.sh/backend'}
                ],
                projectIdea: "Build a REST API with CRUD operations and Auth.",
                checklist: [
                    "Implement JWT Authentication",
                    "Handle file uploads",
                    "Validate input data",
                    "Document API with Swagger"
                ]
            },
            {
                title: "Databases & Caching",
                description: "Where data lives and how to get it fast.",
                whyMatters: "Data is the most valuable asset.",
                commonPitfalls: "N+1 query problems.",
                realWorldApplication: "Scaling a database to handle millions of rows.",
                weeklyCommitment: "12 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["SQL (PostgreSQL)", "NoSQL (MongoDB)", "Redis (Caching)", "ORM (Prisma/TypeORM)"],
                resources: [
                    { title: "Use The Index, Luke", type: "Article" , url: 'https://use-the-index-luke.com/'}
                ],
                projectIdea: "Build a real-time chat app with message persistence.",
                checklist: [
                    "Write complex SQL joins",
                    "Implement Redis caching strategy",
                    "Design a normalized schema",
                    "Optimize database indexes"
                ]
            },
            {
                title: "Scalability & Distributed Systems",
                description: "Handling success (high traffic).",
                whyMatters: "Systems fail when they scale if not designed correctly.",
                commonPitfalls: "Single points of failure.",
                realWorldApplication: "Designing a system like Uber.",
                weeklyCommitment: "10 hours/week",
                duration: "4 Months",
                difficulty: "Advanced",
                skills: ["Microservices", "Message Queues (RabbitMQ/Kafka)", "Load Balancing", "Container Orchestration"],
                resources: [
                    { title: "System Design Primer", type: "Article" , url: 'https://github.com/donnemartin/system-design-primer'}
                ],
                projectIdea: "Build a distributed task scheduler.",
                checklist: [
                    "Implement a message queue consumer",
                    "Containerize app with Docker",
                    "Set up Nginx load balancer",
                    "Implement rate limiting"
                ]
            }
        ]
    },
    "C++ Mastery": {
        role: "C++ Mastery",
        summary: "Master the language of performance. From pointers to template metaprogramming.",
        estimatedTotalDuration: "6-9 Months",
        dailyRoutine: "Memory management, optimizing loops, debugging segfaults.",
        softSkills: ["Precision", "Patience", "Low-level thinking"],
        interviewQuestions: ["What is a vtable?", "Explain move semantics.", "Smart pointers vs raw pointers?"],
        salaryRange: "$100k - $180k",
        topCompanies: ["HFT Firms", "Game Studios", "Embedded Systems"],
        tools: ["CMake", "GDB", "Valgrind", "Clang"],
        certifications: ["C++ Institute Certified Professional"],
        milestones: [
            {
                title: "C++ Basics",
                description: "Syntax, control structures, and basic functions.",
                whyMatters: "Building blocks for everything else.",
                commonPitfalls: "Confusing syntax.",
                realWorldApplication: "Writing simple console applications.",
                weeklyCommitment: "8 hours/week",
                duration: "1 Month",
                difficulty: "Beginner",
                skills: ["Syntax", "Loops", "Functions", "Basic I/O"],
                resources: [{ title: "Learn C++", type: "Article" , url: 'https://www.learncpp.com/'}],
                projectIdea: "Build a calculator.",
                checklist: ["Write Hello World", "Use loops", "Create functions", "Handle user input"]
            },
            {
                title: "C++ Core & Memory",
                description: "Pointers, references, and manual memory management.",
                whyMatters: "Understanding memory is why you use C++.",
                commonPitfalls: "Memory leaks and dangling pointers.",
                realWorldApplication: "Writing a high-performance game engine subsystem.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Pointers", "RAII", "STL Containers", "Memory Management"],
                resources: [{ title: "Effective C++", type: "Book" , url: 'https://www.aristeia.com/books.html'}],
                projectIdea: "Implement your own `std::vector`.",
                checklist: ["Master pointer arithmetic", "Use Smart Pointers", "Debug with Valgrind", "Understand Stack vs Heap"]
            },
            {
                title: "Advanced C++",
                description: "Modern C++ (11/14/17/20) and Metaprogramming.",
                whyMatters: "Modern C++ is safer and more expressive.",
                commonPitfalls: "Overusing templates.",
                realWorldApplication: "Writing a generic library.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Templates", "Move Semantics", "Lambda Expressions", "Concurrency"],
                resources: [{ title: "Modern C++ Design", type: "Book" , url: 'https://en.wikipedia.org/wiki/Modern_C%2B%2B_Design'}],
                projectIdea: "Build a thread pool library.",
                checklist: ["Implement a template class", "Use std::thread and mutex", "Optimize with move semantics", "Write a constexpr function"]
            }
        ]
    },
    "Java Mastery": {
        role: "Java Mastery",
        summary: "The enterprise standard. Robust, scalable, and everywhere.",
        estimatedTotalDuration: "6-9 Months",
        dailyRoutine: "Architecture design, API development, JVM tuning.",
        softSkills: ["Structure", "Enterprise Thinking", "Reliability"],
        interviewQuestions: ["Explain JVM memory model.", "What is the Spring Bean lifecycle?", "Checked vs Unchecked exceptions?"],
        salaryRange: "$90k - $160k",
        topCompanies: ["Banks", "Large Enterprises", "Android Dev"],
        tools: ["IntelliJ IDEA", "Maven/Gradle", "Spring Boot", "JProfiler"],
        certifications: ["Oracle Certified Professional: Java SE Developer"],
        milestones: [
            {
                title: "Core Java & OOP",
                description: "Mastering the object-oriented paradigm.",
                whyMatters: "Java is pure OOP; you must think in objects.",
                commonPitfalls: "Misunderstanding polymorphism.",
                realWorldApplication: "Building a banking system core.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Beginner",
                skills: ["OOP Principles", "Collections Framework", "Streams API", "Exception Handling"],
                resources: [{ title: "Effective Java", type: "Book" , url: 'https://books.google.com/books/about/Effective_Java.html?id=ka2VUBqHiWkC'}],
                projectIdea: "Build a console-based ATM system.",
                checklist: ["Implement Interfaces vs Abstract Classes", "Use HashMap and ArrayList effectively", "Master Java Streams", "Handle multithreading"]
            },
            {
                title: "Enterprise Java (Spring)",
                description: "Building web applications with Spring Boot.",
                whyMatters: "Spring is the de-facto standard for Java web dev.",
                commonPitfalls: "Magic annotations without understanding.",
                realWorldApplication: "Creating a microservice for an e-commerce platform.",
                weeklyCommitment: "12 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Spring Boot", "Hibernate/JPA", "Dependency Injection", "Microservices"],
                resources: [{ title: "Spring in Action", type: "Book" , url: 'https://www.manning.com/books/spring-in-action-sixth-edition'}],
                projectIdea: "Build a full REST API with Spring Boot.",
                checklist: ["Create a REST Controller", "Connect to DB with JPA", "Secure API with Spring Security", "Unit test with JUnit"]
            }
        ]
    },
    "Python Mastery": {
        role: "Python Mastery",
        summary: "The language of data, AI, and scripting. Simple yet powerful.",
        estimatedTotalDuration: "4-6 Months",
        dailyRoutine: "Scripting automation, data analysis, API building.",
        softSkills: ["Versatility", "Efficiency", "Readability"],
        interviewQuestions: ["Explain GIL (Global Interpreter Lock).", "List vs Tuple?", "Decorators and Generators?"],
        salaryRange: "$90k - $170k",
        topCompanies: ["Google", "Data Science Firms", "Startups"],
        tools: ["PyCharm", "Jupyter", "Pip/Poetry", "FastAPI"],
        certifications: ["PCAP – Certified Associate in Python Programming"],
        milestones: [
            {
                title: "Pythonic Code",
                description: "Writing code the 'Python' way.",
                whyMatters: "Python relies on idioms for readability and performance.",
                commonPitfalls: "Writing C-style loops in Python.",
                realWorldApplication: "Automating a boring spreadsheet task.",
                weeklyCommitment: "8 hours/week",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["List Comprehensions", "Decorators", "Generators", "Context Managers"],
                resources: [{ title: "Fluent Python", type: "Book" , url: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/'}],
                projectIdea: "Build a web scraper.",
                checklist: ["Use list comprehensions", "Write a custom decorator", "Implement a generator", "Manage files with 'with'"]
            },
            {
                title: "Advanced Python",
                description: "Metaprogramming, AsyncIO, and Performance.",
                whyMatters: "Pushing Python beyond simple scripts.",
                commonPitfalls: "Blocking the event loop.",
                realWorldApplication: "Building a high-concurrency chat server.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["AsyncIO", "Multiprocessing", "Metaclasses", "Type Hinting"],
                resources: [{ title: "Python Cookbook", type: "Book" , url: 'https://www.oreilly.com/library/view/python-cookbook-3rd/9781449357337/'}],
                projectIdea: "Build an async web crawler.",
                checklist: ["Write async/await code", "Bypass GIL with multiprocessing", "Use type hints for safety", "Profile code performance"]
            }
        ]
    },
    "JavaScript Mastery": {
        role: "JavaScript Mastery",
        summary: "The language of the web. From browser to server.",
        estimatedTotalDuration: "5-8 Months",
        dailyRoutine: "Frontend logic, Node.js scripts, debugging async code.",
        softSkills: ["Asynchronous Thinking", "UI/UX Awareness", "Flexibility"],
        interviewQuestions: ["Explain 'this' keyword.", "Promises vs Async/Await?", "Prototypal Inheritance?"],
        salaryRange: "$80k - $150k",
        topCompanies: ["Every Web Company"],
        tools: ["VS Code", "Chrome DevTools", "Node.js", "npm/yarn"],
        certifications: ["OpenJS Node.js Services Developer"],
        milestones: [
            {
                title: "JavaScript Basics",
                description: "Variables, types, and basic DOM manipulation.",
                whyMatters: "Foundation for all web interactions.",
                commonPitfalls: "Type coercion surprises.",
                realWorldApplication: "Making a button do something.",
                weeklyCommitment: "8 hours/week",
                duration: "1 Month",
                difficulty: "Beginner",
                skills: ["Variables", "Functions", "DOM", "Events"],
                resources: [{ title: "MDN JS Guide", type: "Article" , url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'}],
                projectIdea: "Build a To-Do list.",
                checklist: ["Understand let/const", "Select DOM elements", "Add event listeners", "Manipulate strings"]
            },
            {
                title: "JS Under the Hood",
                description: "Closures, Event Loop, and Prototypes.",
                whyMatters: "Understanding how JS actually works prevents weird bugs.",
                commonPitfalls: "Confusing 'this' context.",
                realWorldApplication: "Writing a custom event emitter.",
                weeklyCommitment: "10 hours/week",
                duration: "2 Months",
                difficulty: "Intermediate",
                skills: ["Closures", "Event Loop", "Prototypes", "Hoisting"],
                resources: [{ title: "You Don't Know JS", type: "Book" }],
                projectIdea: "Implement a Promise polyfill.",
                checklist: ["Explain the Event Loop", "Master Closures", "Understand 'this' binding", "Use ES6+ features"]
            },
            {
                title: "Async & Patterns",
                description: "Mastering asynchronous programming and design patterns.",
                whyMatters: "JS is inherently async; you must master it.",
                commonPitfalls: "Callback hell.",
                realWorldApplication: "Handling complex API dependencies.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Promises", "Async/Await", "Module Pattern", "Functional Programming"],
                resources: [{ title: "JavaScript: The Good Parts", type: "Book" , url: 'https://www.oreilly.com/library/view/javascript-the-good/9780596517748/'}],
                projectIdea: "Build a reactive state management library.",
                checklist: ["Refactor callbacks to async/await", "Implement Observer pattern", "Write pure functions", "Debug memory leaks"]
            }
        ]
    },
    "DevOps": {
        role: "DevOps Engineer",
        summary: "Bridge the gap between development and operations to deliver software faster and more reliably.",
        estimatedTotalDuration: "8-12 Months",
        dailyRoutine: "Automate deployments, monitor system health, optimize pipelines.",
        softSkills: ["Crisis Management", "Automation Mindset", "Collaboration"],
        interviewQuestions: ["Explain the concept of CI/CD.", "What is the difference between Docker and a VM?", "How does Kubernetes handle scaling?"],
        salaryRange: "$90k - $160k",
        topCompanies: ["Amazon (AWS)", "Google (GCP)", "Netflix", "Spotify"],
        tools: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
        certifications: ["AWS Certified DevOps Engineer", "Certified Kubernetes Administrator (CKA)"],
        milestones: [
            {
                title: "Linux & Scripting",
                description: "Master the operating system of the cloud.",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["Bash Scripting", "File Permissions", "Process Management", "SSH & Networking"],
                resources: [
                    { title: "Linux Journey", type: "Article" , url: 'https://linuxjourney.com/'},
                    { title: "OverTheWire Bandit", type: "Course" , url: 'https://overthewire.org/wargames/bandit/'}
                ],
                projectIdea: "Automate a daily backup task using a Bash script and Cron.",
                checklist: [
                    "Install Ubuntu on a VM",
                    "Write a script to check disk usage",
                    "Set up SSH key authentication",
                    "Manage user permissions"
                ]
            },
            {
                title: "Containerization (Docker)",
                description: "Package applications for consistent deployment.",
                duration: "1 Month",
                difficulty: "Intermediate",
                skills: ["Dockerfiles", "Docker Compose", "Image Optimization", "Networking"],
                resources: [
                    { title: "Docker Deep Dive", type: "Book" , url: 'https://nigelpoulton.com/books/'}
                ],
                projectIdea: "Dockerize a MERN stack application.",
                checklist: [
                    "Write a Dockerfile for Python/Node",
                    "Run a multi-container app with Compose",
                    "Optimize image size (Alpine)",
                    "Push image to Docker Hub"
                ]
            },
            {
                title: "Orchestration (Kubernetes)",
                description: "Manage containerized applications at scale.",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Pods & Services", "Deployments", "Helm Charts", "Ingress Controllers"],
                resources: [
                    { title: "Kubernetes the Hard Way", type: "Article" , url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way'}
                ],
                projectIdea: "Deploy a microservices app to a local Minikube cluster.",
                checklist: [
                    "Set up Minikube",
                    "Deploy a Pod and expose it",
                    "Perform a rolling update",
                    "Write a Helm chart"
                ]
            },
            {
                title: "Infrastructure as Code (Terraform)",
                description: "Provision infrastructure using code.",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["HCL Syntax", "State Management", "Modules", "AWS/Azure Providers"],
                resources: [
                    { title: "Terraform Up & Running", type: "Book" , url: 'https://www.terraformupandrunning.com/'}
                ],
                projectIdea: "Provision a VPC and EC2 instance on AWS using Terraform.",
                checklist: [
                    "Install Terraform",
                    "Write a plan to create an S3 bucket",
                    "Apply the plan to AWS",
                    "Destroy the infrastructure"
                ]
            }
        ]
    },
    "AI Engineer": {
        role: "AI Engineer",
        summary: "Build and deploy intelligent systems using Machine Learning and Deep Learning.",
        estimatedTotalDuration: "12-18 Months",
        dailyRoutine: "Read research papers, experiment with models, clean data.",
        softSkills: ["Research Skills", "Critical Thinking", "Ethics in AI"],
        interviewQuestions: ["Explain the bias-variance tradeoff.", "How does backpropagation work?", "What is the attention mechanism?"],
        salaryRange: "$100k - $200k+",
        topCompanies: ["OpenAI", "DeepMind", "NVIDIA", "Tesla"],
        tools: ["PyTorch", "TensorFlow", "Jupyter Notebooks", "HuggingFace"],
        certifications: ["TensorFlow Developer Certificate", "AWS Certified Machine Learning"],
        milestones: [
            {
                title: "Math & Python Foundations",
                description: "Linear Algebra, Calculus, and Python programming.",
                duration: "3 Months",
                difficulty: "Beginner",
                skills: ["Linear Algebra", "Calculus (Derivatives)", "Python (NumPy, Pandas)", "Probability"],
                resources: [
                    { title: "Mathematics for ML (Coursera)", type: "Course" , url: 'https://www.coursera.org/specializations/mathematics-machine-learning'}
                ],
                projectIdea: "Implement Linear Regression from scratch in Python.",
                checklist: [
                    "Master Matrix Multiplication",
                    "Understand Derivatives & Gradients",
                    "Manipulate Dataframes with Pandas",
                    "Visualize data with Matplotlib"
                ]
            },
            {
                title: "Machine Learning Core",
                description: "Supervised and Unsupervised learning algorithms.",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Scikit-Learn", "Regression/Classification", "Decision Trees", "Model Evaluation"],
                resources: [
                    { title: "Hands-On ML with Scikit-Learn", type: "Book" , url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/'}
                ],
                projectIdea: "Predict housing prices using the Boston Housing dataset.",
                checklist: [
                    "Train a Linear Regression model",
                    "Train a Random Forest Classifier",
                    "Perform Cross-Validation",
                    "Calculate Precision/Recall"
                ]
            },
            {
                title: "Deep Learning & NLP",
                description: "Neural Networks, Transformers, and LLMs.",
                duration: "4 Months",
                difficulty: "Advanced",
                skills: ["PyTorch/TensorFlow", "Transformers (BERT/GPT)", "HuggingFace", "Fine-tuning"],
                resources: [
                    { title: "Fast.ai", type: "Course" , url: 'https://course.fast.ai/'},
                    { title: "HuggingFace Course", type: "Course" , url: 'https://huggingface.co/learn/nlp-course'}
                ],
                projectIdea: "Fine-tune a BERT model for sentiment analysis on tweets.",
                checklist: [
                    "Build a Neural Network in PyTorch",
                    "Train a CNN on MNIST",
                    "Load a pre-trained model from HuggingFace",
                    "Fine-tune a model on a custom dataset"
                ]
            },
            {
                title: "LLM Ops & Deployment",
                description: "Deploying Large Language Models in production.",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["RAG (Retrieval Augmented Generation)", "LangChain", "Vector Databases", "Model Optimization"],
                resources: [
                    { title: "LangChain Documentation", type: "Article" , url: 'https://python.langchain.com/docs/get_started/introduction'}
                ],
                projectIdea: "Build a RAG-based Chatbot for your personal documents.",
                checklist: [
                    "Set up a Vector Database (Pinecone)",
                    "Build a RAG pipeline with LangChain",
                    "Quantize a model for faster inference",
                    "Deploy the model as an API"
                ]
            }
        ]
    },
    "Data Scientist": {
        role: "Data Scientist",
        summary: "Extract insights from data using statistics, machine learning, and programming.",
        estimatedTotalDuration: "10-14 Months",
        dailyRoutine: "Data cleaning, exploratory data analysis, model tuning.",
        softSkills: ["Storytelling with Data", "Business Acumen", "Curiosity"],
        interviewQuestions: ["Explain p-value.", "How do you handle missing data?", "What is the difference between bagging and boosting?"],
        salaryRange: "$95k - $160k",
        topCompanies: ["Facebook", "LinkedIn", "Airbnb", "Spotify"],
        tools: ["Jupyter", "Pandas", "Tableau/PowerBI", "SQL"],
        certifications: ["IBM Data Science Professional Certificate", "Azure Data Scientist Associate"],
        milestones: [
            {
                title: "Python for Data Science",
                description: "Master Python and its core data libraries.",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["Python Syntax", "NumPy (Numerical Computing)", "Pandas (Data Manipulation)", "Matplotlib/Seaborn (Visualization)"],
                resources: [
                    { title: "Python for Data Analysis", type: "Book" , url: 'https://wesmckinney.com/book/'},
                    { title: "Kaggle Python Course", type: "Course" , url: 'https://www.kaggle.com/learn/python'}
                ],
                projectIdea: "Analyze a dataset (e.g., Titanic or Housing Prices) and visualize key trends.",
                checklist: [
                    "Clean a messy CSV file",
                    "Perform GroupBy operations",
                    "Create a Histogram and Scatter Plot",
                    "Handle missing values"
                ]
            },
            {
                title: "Statistics & Probability",
                description: "The mathematical foundation of data science.",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["Descriptive Statistics", "Hypothesis Testing", "Probability Distributions", "Bayesian Inference"],
                resources: [
                    { title: "Think Stats", type: "Book" , url: 'https://greenteapress.com/wp/think-stats-2e/'},
                    { title: "Khan Academy Statistics", type: "Course" , url: 'https://www.khanacademy.org/math/statistics-probability'}
                ],
                projectIdea: "Conduct A/B testing analysis on a sample dataset.",
                checklist: [
                    "Calculate Mean, Median, Mode",
                    "Perform a T-Test",
                    "Understand Normal Distribution",
                    "Calculate Correlation"
                ]
            },
            {
                title: "Machine Learning Algorithms",
                description: "Learn supervised and unsupervised learning techniques.",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Linear/Logistic Regression", "Decision Trees & Random Forests", "Clustering (K-Means)", "Scikit-learn"],
                resources: [
                    { title: "Hands-On Machine Learning with Scikit-Learn", type: "Book" , url: 'https://google.com/search?q=Hands-On+Machine+Learning+with+Scikit-Learn'},
                    { title: "Andrew Ng's Machine Learning Specialization", type: "Course" }
                ],
                projectIdea: "Build a model to predict customer churn or house prices.",
                checklist: [
                    "Train a classification model",
                    "Visualize Decision Tree boundaries",
                    "Perform K-Means clustering",
                    "Evaluate model with ROC/AUC"
                ]
            },
            {
                title: "Data Wrangling & SQL",
                description: "Learn to clean, transform, and query large datasets.",
                duration: "1.5 Months",
                difficulty: "Intermediate",
                skills: ["Advanced SQL (Joins, Window Functions)", "Data Cleaning", "Feature Engineering", "ETL Pipelines"],
                resources: [
                    { title: "SQL for Data Science", type: "Course" , url: 'https://www.coursera.org/learn/sql-for-data-science'},
                    { title: "Mode Analytics SQL Tutorial", type: "Article" , url: 'https://mode.com/sql-tutorial/'}
                ],
                projectIdea: "Clean a messy dataset and store it in a SQL database for analysis.",
                checklist: [
                    "Write complex SQL Joins",
                    "Use Window Functions (RANK, LEAD)",
                    "Create a stored procedure",
                    "Build a simple ETL script"
                ]
            },
            {
                title: "Deep Learning & Neural Networks",
                description: "Dive into advanced AI with neural networks.",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["TensorFlow/PyTorch", "CNNs (Computer Vision)", "RNNs/LSTMs (Sequence Data)", "Transfer Learning"],
                resources: [
                    { title: "Deep Learning Specialization", type: "Course" , url: 'https://www.coursera.org/specializations/deep-learning'},
                    { title: "Fast.ai", type: "Course" , url: 'https://course.fast.ai/'}
                ],
                projectIdea: "Build an image classifier to identify dog breeds.",
                checklist: [
                    "Build a simple Neural Network",
                    "Train a CNN on CIFAR-10",
                    "Use a pre-trained ResNet",
                    "Predict text sentiment with RNN"
                ]
            },
            {
                title: "MLOps & Deployment",
                description: "Deploy your models to production and monitor them.",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["Model Serving (Flask/FastAPI)", "Docker for ML", "Model Monitoring", "Cloud ML (AWS SageMaker/GCP Vertex)"],
                resources: [
                    { title: "Full Stack Deep Learning", type: "Course" , url: 'https://fullstackdeeplearning.com/'}
                ],
                projectIdea: "Deploy a sentiment analysis API using FastAPI and Docker.",
                checklist: [
                    "Wrap model in a Flask API",
                    "Dockerize the API",
                    "Deploy to a cloud provider",
                    "Set up basic monitoring"
                ]
            }
        ]
    },
    "Cyber Security": {
        role: "Cyber Security Analyst",
        summary: "Protect systems, networks, and data from digital attacks.",
        estimatedTotalDuration: "8-12 Months",
        dailyRoutine: "Monitor logs, run vulnerability scans, research new threats.",
        softSkills: ["Integrity", "Attention to Detail", "Persistence"],
        interviewQuestions: ["What is the CIA triad?", "How do you prevent SQL injection?", "Explain a DDoS attack."],
        salaryRange: "$85k - $140k",
        topCompanies: ["CrowdStrike", "Palo Alto Networks", "Government Agencies", "Banks"],
        tools: ["Wireshark", "Metasploit", "Nmap", "Burp Suite"],
        certifications: ["CompTIA Security+", "Certified Ethical Hacker (CEH)", "CISSP"],
        milestones: [
            {
                title: "Networking Fundamentals",
                description: "Understand how the internet and networks function.",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["OSI Model", "TCP/IP", "DNS, HTTP, HTTPS", "Subnetting"],
                resources: [
                    { title: "CompTIA Network+", type: "Course" , url: 'https://www.comptia.org/certifications/network'},
                    { title: "Professor Messer's Network+ Training", type: "Video" }
                ],
                projectIdea: "Set up a home lab network and analyze traffic with Wireshark.",
                checklist: [
                    "Memorize the OSI Layers",
                    "Capture packets with Wireshark",
                    "Configure a router/switch",
                    "Calculate IP subnets"
                ]
            },
            {
                title: "Linux & Scripting",
                description: "Master the OS of the web and automate security tasks.",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["Linux Command Line", "Bash Scripting", "Python for Security", "File Permissions"],
                resources: [
                    { title: "OverTheWire Bandit", type: "Article" , url: 'https://overthewire.org/wargames/bandit/'},
                    { title: "Violent Python", type: "Book" , url: 'https://www.amazon.com/Violent-Python-Cookbook-Penetration-Engineers/dp/1597499579'}
                ],
                projectIdea: "Write a Python script to scan open ports on a network.",
                checklist: [
                    "Complete Bandit Level 1-10",
                    "Write a port scanner in Python",
                    "Automate log analysis with Bash",
                    "Secure a Linux server (SSH hardening)"
                ]
            },
            {
                title: "Ethical Hacking & Penetration Testing",
                description: "Learn to find vulnerabilities by thinking like an attacker.",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Reconnaissance", "Scanning & Enumeration", "Exploitation (Metasploit)", "Web App Security (OWASP)"],
                resources: [
                    { title: "The Web Application Hacker's Handbook", type: "Book" },
                    { title: "TryHackMe", type: "Course" , url: 'https://google.com/search?q=TryHackMe'},
                    { title: "Hack The Box", type: "Course" , url: 'https://google.com/search?q=Hack+The+Box'}
                ],
                projectIdea: "Complete a CTF (Capture The Flag) challenge on TryHackMe.",
                checklist: [
                    "Perform a vulnerability scan with Nmap",
                    "Exploit a vulnerability with Metasploit",
                    "Understand SQL Injection",
                    "Complete the 'Pre-Security' path on TryHackMe"
                ]
            },
            {
                title: "Security Operations (SOC)",
                description: "Monitor and defend against attacks in real-time.",
                duration: "2 Months",
                difficulty: "Intermediate",
                skills: ["SIEM Tools (Splunk)", "Incident Response", "Log Analysis", "Threat Intelligence"],
                resources: [
                    { title: "Blue Team Level 1", type: "Course" , url: 'https://google.com/search?q=Blue+Team+Level+1'}
                ],
                projectIdea: "Set up a SIEM (like Wazuh) to monitor your home lab.",
                checklist: [
                    "Install and configure Splunk/Wazuh",
                    "Analyze a suspicious log entry",
                    "Write an incident response report",
                    "Create a dashboard for threats"
                ]
            },
            {
                title: "Cryptography & Network Security",
                description: "Secure communication and data at rest.",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["Encryption (AES, RSA)", "PKI & Certificates", "VPNs & Firewalls", "Hashing"],
                resources: [
                    { title: "Applied Cryptography", type: "Book" , url: 'https://google.com/search?q=Applied+Cryptography'}
                ],
                projectIdea: "Implement a secure chat application with end-to-end encryption.",
                checklist: [
                    "Generate SSL certificates",
                    "Configure a VPN server",
                    "Implement AES encryption in Python",
                    "Crack a weak password hash"
                ]
            },
            {
                title: "Cloud Security",
                description: "Secure cloud infrastructure (AWS/Azure).",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["IAM Policies", "CloudTrail/CloudWatch", "Container Security", "Compliance"],
                resources: [
                    { title: "AWS Certified Security - Specialty", type: "Course" , url: 'https://google.com/search?q=AWS+Certified+Security+-+Specialty'}
                ],
                projectIdea: "Audit an AWS environment for security misconfigurations.",
                checklist: [
                    "Write a secure IAM policy",
                    "Enable CloudTrail logging",
                    "Scan a Docker image for vulnerabilities",
                    "Perform a CIS benchmark audit"
                ]
            }
        ]
    },
    "Mobile Developer": {
        role: "Mobile App Developer",
        summary: "Build native and cross-platform mobile applications for iOS and Android.",
        estimatedTotalDuration: "6-9 Months",
        dailyRoutine: "Design UI, write logic, test on emulators and real devices.",
        softSkills: ["User Empathy", "Attention to Detail", "Patience"],
        interviewQuestions: ["Explain the difference between Native and Cross-Platform.", "What is the Activity Lifecycle in Android?", "How does memory management work in iOS?"],
        salaryRange: "$80k - $140k",
        topCompanies: ["Uber", "Snapchat", "Spotify", "Apple"],
        tools: ["Android Studio", "Xcode", "Flutter/React Native", "Firebase"],
        certifications: ["Google Associate Android Developer", "Meta React Native Specialist"],
        milestones: [
            {
                title: "Programming Fundamentals (Dart/JS/Swift)",
                description: "Choose your path: Flutter (Dart), React Native (JS), or iOS (Swift).",
                duration: "1.5 Months",
                difficulty: "Beginner",
                skills: ["Language Syntax", "OOP Concepts", "Asynchronous Programming", "IDE Setup (Android Studio/Xcode)"],
                resources: [
                    { title: "Dart Programming Guide", type: "Article" , url: 'https://google.com/search?q=Dart+Programming+Guide'},
                    { title: "Swift Documentation", type: "Article" , url: 'https://google.com/search?q=Swift+Documentation'}
                ],
                projectIdea: "Build a simple calculator or to-do list app.",
                checklist: [
                    "Install Android Studio/Xcode",
                    "Run 'Hello World' on an emulator",
                    "Learn variables and loops in Dart/Swift",
                    "Build a simple UI layout"
                ]
            },
            {
                title: "UI Development & State Management",
                description: "Create beautiful, responsive mobile interfaces.",
                duration: "2.5 Months",
                difficulty: "Intermediate",
                skills: ["Layouts (Flexbox/Constraints)", "Navigation", "State Management (Provider/Redux)", "Animations"],
                resources: [
                    { title: "Flutter Widget Catalog", type: "Article" , url: 'https://google.com/search?q=Flutter+Widget+Catalog'},
                    { title: "React Native Express", type: "Course" , url: 'https://google.com/search?q=React+Native+Express'}
                ],
                projectIdea: "Build a weather app that fetches data from an API.",
                checklist: [
                    "Build a scrollable list view",
                    "Implement navigation between screens",
                    "Manage app state (Provider/Redux)",
                    "Add simple animations"
                ]
            },
            {
                title: "Device Features & APIs",
                description: "Integrate with camera, GPS, and local storage.",
                duration: "2 Months",
                difficulty: "Intermediate",
                skills: ["Camera API", "Geolocation", "Local Database (SQLite/Realm)", "Push Notifications"],
                resources: [
                    { title: "Flutter Cookbook", type: "Article" , url: 'https://google.com/search?q=Flutter+Cookbook'}
                ],
                projectIdea: "Create a fitness tracker that uses GPS and stores workout history.",
                checklist: [
                    "Access the device camera",
                    "Get current GPS location",
                    "Save data to local storage",
                    "Send a local push notification"
                ]
            },
            {
                title: "Advanced Architecture & Testing",
                description: "Build scalable, maintainable, and bug-free apps.",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["Clean Architecture", "Dependency Injection", "Unit & Widget Testing", "CI/CD for Mobile"],
                resources: [
                    { title: "Reso Coder's Clean Architecture", type: "Video" }
                ],
                projectIdea: "Build a complex e-commerce app with cart, user auth, and payment gateway.",
                checklist: [
                    "Implement Clean Architecture layers",
                    "Write unit tests for business logic",
                    "Set up dependency injection",
                    "Configure a CI/CD pipeline"
                ]
            },
            {
                title: "App Store Deployment",
                description: "Prepare and publish your app to the world.",
                duration: "1 Month",
                difficulty: "Advanced",
                skills: ["App Signing", "Play Store/App Store Guidelines", "Analytics (Firebase)", "Crash Reporting"],
                resources: [
                    { title: "Publishing to App Stores", type: "Article" , url: 'https://google.com/search?q=Publishing+to+App+Stores'}
                ],
                projectIdea: "Publish your best project to the Google Play Store or Apple App Store.",
                checklist: [
                    "Generate a signed APK/IPA",
                    "Create app store screenshots",
                    "Set up Firebase Analytics",
                    "Submit for review"
                ]
            }
        ]
    },
    "UI/UX Designer": {
        role: "UI/UX Designer",
        summary: "Design intuitive, accessible, and beautiful digital experiences.",
        estimatedTotalDuration: "5-8 Months",
        dailyRoutine: "Sketching wireframes, creating high-fidelity prototypes, user testing.",
        softSkills: ["Empathy", "Communication", "Constructive Feedback"],
        interviewQuestions: ["Walk me through your design process.", "How do you handle disagreements with developers?", "What is the difference between UI and UX?"],
        salaryRange: "$75k - $130k",
        topCompanies: ["Airbnb", "Apple", "Google", "Design Agencies"],
        tools: ["Figma", "Adobe XD", "Sketch", "Notion"],
        certifications: ["Google UX Design Certificate", "Nielsen Norman Group UX Certification"],
        milestones: [
            {
                title: "Design Fundamentals",
                description: "Master the core principles of visual design.",
                duration: "1.5 Months",
                difficulty: "Beginner",
                skills: ["Typography", "Color Theory", "Layout & Grid Systems", "Visual Hierarchy"],
                resources: [
                    { title: "Refactoring UI", type: "Book" , url: 'https://www.refactoringui.com/'},
                    { title: "Google UX Design Certificate", type: "Course" , url: 'https://grow.google/certificates/ux-design/'}
                ],
                projectIdea: "Redesign a simple landing page (e.g., for a coffee shop).",
                checklist: [
                    "Create a mood board",
                    "Choose a font pairing",
                    "Create a color palette",
                    "Design a 12-column grid layout"
                ]
            },
            {
                title: "UX Research & Strategy",
                description: "Understand users and solve their problems.",
                duration: "1.5 Months",
                difficulty: "Beginner",
                skills: ["User Personas", "User Journey Maps", "Competitor Analysis", "Wireframing"],
                resources: [
                    { title: "The Design of Everyday Things", type: "Book" , url: 'https://google.com/search?q=The+Design+of+Everyday+Things'},
                    { title: "Nielsen Norman Group", type: "Article" , url: 'https://google.com/search?q=Nielsen+Norman+Group'}
                ],
                projectIdea: "Conduct user research for a travel app and create wireframes.",
                checklist: [
                    "Interview 3 potential users",
                    "Create a user persona",
                    "Map out a user journey",
                    "Sketch low-fidelity wireframes"
                ]
            },
            {
                title: "Prototyping Tools (Figma)",
                description: "Bring your designs to life with industry-standard tools.",
                duration: "2 Months",
                difficulty: "Intermediate",
                skills: ["Figma Mastery", "Auto Layout", "Components & Variants", "Interactive Prototyping"],
                resources: [
                    { title: "Figma 101", type: "Video" , url: 'https://google.com/search?q=Figma+101'},
                    { title: "Design Systems Handbook", type: "Book" , url: 'https://google.com/search?q=Design+Systems+Handbook'}
                ],
                projectIdea: "Create a high-fidelity prototype for a mobile food delivery app.",
                checklist: [
                    "Master Auto Layout in Figma",
                    "Create a reusable button component",
                    "Link screens for a prototype",
                    "Create a simple animation"
                ]
            },
            {
                title: "Advanced Interaction Design",
                description: "Create delightful micro-interactions and animations.",
                duration: "1.5 Months",
                difficulty: "Advanced",
                skills: ["Micro-interactions", "Motion Design", "Accessibility (WCAG)", "Design Handoff"],
                resources: [
                    { title: "Material Design Guidelines", type: "Article" , url: 'https://google.com/search?q=Material+Design+Guidelines'}
                ],
                projectIdea: "Design a complex dashboard with animated charts and transitions.",
                checklist: [
                    "Design a hover state animation",
                    "Check color contrast for accessibility",
                    "Create a loading animation",
                    "Prepare assets for developer handoff"
                ]
            },
            {
                title: "Portfolio & Case Studies",
                description: "Showcase your process and work to get hired.",
                duration: "1 Month",
                difficulty: "Advanced",
                skills: ["Case Study Writing", "Portfolio Website", "Presentation Skills", "Freelancing Basics"],
                resources: [
                    { title: "Bestfolios", type: "Article" , url: 'https://google.com/search?q=Bestfolios'}
                ],
                projectIdea: "Build your personal portfolio website showcasing 3 detailed case studies.",
                checklist: [
                    "Write a case study for your best project",
                    "Design your portfolio homepage",
                    "Publish your portfolio online",
                    "Update your resume"
                ]
            }
        ]
    },
    "Blockchain Developer": {
        role: "Blockchain Developer",
        summary: "Build decentralized applications (dApps) and smart contracts.",
        estimatedTotalDuration: "6-9 Months",
        dailyRoutine: "Write smart contracts, audit code, test on testnets.",
        softSkills: ["Security Mindset", "Attention to Detail", "Innovation"],
        interviewQuestions: ["What is the difference between Proof of Work and Proof of Stake?", "Explain a Reentrancy attack.", "How does the EVM work?"],
        salaryRange: "$100k - $180k",
        topCompanies: ["Coinbase", "ConsenSys", "OpenSea", "DeFi Protocols"],
        tools: ["Solidity", "Hardhat", "Metamask", "Ethers.js"],
        certifications: ["Certified Blockchain Developer", "ConsenSys Academy"],
        milestones: [
            {
                title: "Blockchain Fundamentals",
                description: "Understand how distributed ledgers work.",
                duration: "1 Month",
                difficulty: "Beginner",
                skills: ["Hash Functions", "Consensus Mechanisms (PoW/PoS)", "Wallets & Keys", "Bitcoin vs Ethereum"],
                resources: [
                    { title: "Bitcoin Whitepaper", type: "Article" , url: 'https://google.com/search?q=Bitcoin+Whitepaper'},
                    { title: "Mastering Bitcoin", type: "Book" , url: 'https://github.com/bitcoinbook/bitcoinbook'}
                ],
                projectIdea: "Write a simple blockchain simulation in Python or JS.",
                checklist: [
                    "Read the Bitcoin Whitepaper",
                    "Create a wallet (Metamask)",
                    "Get testnet ETH from a faucet",
                    "Understand Public/Private keys"
                ]
            },
            {
                title: "Smart Contracts (Solidity)",
                description: "Write code that runs on the Ethereum Virtual Machine (EVM).",
                duration: "2.5 Months",
                difficulty: "Intermediate",
                skills: ["Solidity Syntax", "ERC-20 & ERC-721 Standards", "Gas Optimization", "Security Best Practices"],
                resources: [
                    { title: "CryptoZombies", type: "Course" , url: 'https://cryptozombies.io/'},
                    { title: "Solidity by Example", type: "Article" , url: 'https://google.com/search?q=Solidity+by+Example'}
                ],
                projectIdea: "Create your own cryptocurrency token (ERC-20).",
                checklist: [
                    "Write a 'Hello World' contract",
                    "Deploy a contract to Remix",
                    "Create an ERC-20 token",
                    "Understand Gas costs"
                ]
            },
            {
                title: "dApp Development",
                description: "Connect your smart contracts to a frontend.",
                duration: "2 Months",
                difficulty: "Intermediate",
                skills: ["Web3.js / Ethers.js", "React/Next.js", "Metamask Integration", "IPFS"],
                resources: [
                    { title: "Buildspace", type: "Course" , url: 'https://google.com/search?q=Buildspace'}
                ],
                projectIdea: "Build a decentralized voting application or NFT marketplace.",
                checklist: [
                    "Connect React app to Metamask",
                    "Read contract data from frontend",
                    "Send a transaction from frontend",
                    "Upload file to IPFS"
                ]
            },
            {
                title: "Advanced Smart Contracts & Security",
                description: "Secure your contracts against hacks and optimize for scale.",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["Reentrancy Attacks", "Auditing Tools (Slither/MythX)", "Layer 2 Solutions", "DeFi Protocols"],
                resources: [
                    { title: "Ethernaut by OpenZeppelin", type: "Course" , url: 'https://google.com/search?q=Ethernaut+by+OpenZeppelin'}
                ],
                projectIdea: "Build a staking platform or a decentralized exchange (DEX).",
                checklist: [
                    "Solve Ethernaut levels",
                    "Audit a smart contract",
                    "Deploy to a Layer 2 (Polygon/Arbitrum)",
                    "Understand Flash Loans"
                ]
            }
        ]
    },
    "Game Developer": {
        role: "Game Developer",
        summary: "Create immersive interactive experiences and video games.",
        estimatedTotalDuration: "9-12 Months",
        dailyRoutine: "Coding game logic, tweaking physics, playtesting.",
        softSkills: ["Creativity", "Teamwork", "Problem Solving"],
        interviewQuestions: ["Explain the game loop.", "How do you handle collision detection?", "What is a quaternion?"],
        salaryRange: "$70k - $120k",
        topCompanies: ["Electronic Arts", "Ubisoft", "Blizzard", "Indie Studios"],
        tools: ["Unity", "Unreal Engine", "Blender", "Visual Studio"],
        certifications: ["Unity Certified Programmer", "Unreal Engine Certification"],
        milestones: [
            {
                title: "Programming Basics (C# or C++)",
                description: "Learn the language of game engines.",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["Variables & Loops", "OOP", "Memory Management", "Math for Games (Vectors)"],
                resources: [
                    { title: "C# for Unity", type: "Course" , url: 'https://google.com/search?q=C#+for+Unity'},
                    { title: "Learn C++", type: "Article" , url: 'https://www.learncpp.com/'}
                ],
                projectIdea: "Build a text-based adventure game.",
                checklist: [
                    "Install Visual Studio",
                    "Write a C# script",
                    "Understand Vectors and Dot Product",
                    "Create a simple console game"
                ]
            },
            {
                title: "Game Engine Fundamentals (Unity/Unreal)",
                description: "Master the tools to build games.",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Physics Engine", "Colliders & Triggers", "Prefabs/Blueprints", "UI Systems"],
                resources: [
                    { title: "Unity Learn", type: "Course" , url: 'https://learn.unity.com/'},
                    { title: "Unreal Engine Documentation", type: "Article" , url: 'https://google.com/search?q=Unreal+Engine+Documentation'}
                ],
                projectIdea: "Create a 2D Platformer (Mario clone) or an Endless Runner.",
                checklist: [
                    "Install Unity/Unreal",
                    "Create a player controller",
                    "Add physics and collisions",
                    "Build a UI menu"
                ]
            },
            {
                title: "Game Design & Polish",
                description: "Make your game fun and juicy.",
                duration: "2 Months",
                difficulty: "Intermediate",
                skills: ["Level Design", "Game Loop", "Particle Systems", "Audio Implementation"],
                resources: [
                    { title: "The Art of Game Design", type: "Book" , url: 'https://www.schellgames.com/art-of-game-design/'}
                ],
                projectIdea: "Polish your platformer with sound effects, screenshake, and particles.",
                checklist: [
                    "Design a level layout",
                    "Add background music and SFX",
                    "Create a particle effect (explosion)",
                    "Implement screen shake"
                ]
            },
            {
                title: "Advanced Graphics & Optimization",
                description: "Make it look good and run fast.",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Shaders (HLSL/GLSL)", "Lighting & Baking", "Profiling & Optimization", "Multiplayer Networking"],
                resources: [
                    { title: "Catlike Coding", type: "Article" , url: 'https://google.com/search?q=Catlike+Coding'}
                ],
                projectIdea: "Build a simple 3D multiplayer shooter.",
                checklist: [
                    "Write a custom shader",
                    "Bake lighting for a scene",
                    "Profile game performance",
                    "Implement basic networking"
                ]
            }
        ]
    },
    "Cloud Architect": {
        role: "Cloud Architect",
        summary: "Design and manage complex cloud computing strategies.",
        estimatedTotalDuration: "12-15 Months",
        dailyRoutine: "Designing architecture diagrams, reviewing costs, meeting with stakeholders.",
        softSkills: ["Strategic Thinking", "Communication", "Leadership"],
        interviewQuestions: ["Explain the difference between IaaS, PaaS, and SaaS.", "How do you design for high availability?", "What is a VPC?"],
        salaryRange: "$120k - $200k",
        topCompanies: ["Amazon (AWS)", "Microsoft (Azure)", "Google (GCP)", "Consulting Firms"],
        tools: ["AWS Console", "Terraform", "Lucidchart", "Kubernetes"],
        certifications: ["AWS Certified Solutions Architect Professional", "Azure Solutions Architect Expert"],
        milestones: [
            {
                title: "Cloud Fundamentals",
                description: "Understand the basics of cloud computing.",
                duration: "1.5 Months",
                difficulty: "Beginner",
                skills: ["IaaS vs PaaS vs SaaS", "Virtualization", "Networking Basics", "AWS/Azure/GCP Overview"],
                resources: [
                    { title: "AWS Cloud Practitioner Essentials", type: "Course" , url: 'https://google.com/search?q=AWS+Cloud+Practitioner+Essentials'}
                ],
                projectIdea: "Host a static website on AWS S3 or Azure Blob Storage.",
                checklist: [
                    "Create an AWS Free Tier account",
                    "Launch an EC2 instance",
                    "Create an S3 bucket",
                    "Configure a billing alarm"
                ]
            },
            {
                title: "Compute & Storage",
                description: "Master the core services.",
                duration: "2 Months",
                difficulty: "Intermediate",
                skills: ["EC2/VMs", "S3/Blob Storage", "Load Balancing", "Auto Scaling"],
                resources: [
                    { title: "AWS Solutions Architect Associate", type: "Course" , url: 'https://google.com/search?q=AWS+Solutions+Architect+Associate'}
                ],
                projectIdea: "Deploy a highly available web app with a load balancer.",
                checklist: [
                    "Configure an Auto Scaling Group",
                    "Set up an Application Load Balancer",
                    "Mount an EFS volume",
                    "Create an AMI"
                ]
            },
            {
                title: "Databases & Networking",
                description: "Connect and store data securely.",
                duration: "2.5 Months",
                difficulty: "Intermediate",
                skills: ["RDS/SQL Database", "DynamoDB/NoSQL", "VPC Design", "Route53/DNS"],
                resources: [
                    { title: "Cantrill's AWS Courses", type: "Course" }
                ],
                projectIdea: "Design a multi-tier network architecture for a corporate app.",
                checklist: [
                    "Create a custom VPC",
                    "Launch an RDS instance",
                    "Configure Security Groups",
                    "Set up Route53 DNS"
                ]
            },
            {
                title: "Serverless & Microservices",
                description: "Modern cloud-native architectures.",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Lambda/Functions", "API Gateway", "EventBridge", "Docker & Kubernetes (EKS/AKS)"],
                resources: [
                    { title: "Serverless Land", type: "Article" , url: 'https://google.com/search?q=Serverless+Land'}
                ],
                projectIdea: "Build a completely serverless image processing pipeline.",
                checklist: [
                    "Write a Lambda function",
                    "Create an API Gateway",
                    "Trigger Lambda from S3 event",
                    "Deploy a container to EKS"
                ]
            },
            {
                title: "Cost & Governance",
                description: "Manage costs and compliance.",
                duration: "1 Month",
                difficulty: "Advanced",
                skills: ["Cost Explorer", "Organizations", "Compliance Standards", "Disaster Recovery"],
                resources: [
                    { title: "Well-Architected Framework", type: "Article" , url: 'https://google.com/search?q=Well-Architected+Framework'}
                ],
                projectIdea: "Perform a Well-Architected Review of your previous projects.",
                checklist: [
                    "Analyze costs with Cost Explorer",
                    "Set up AWS Organizations",
                    "Create a Disaster Recovery plan",
                    "Review security compliance"
                ]
            }
        ]
    },
    "Generative AI Engineer": {
        role: "Generative AI Engineer",
        summary: "Design and build systems that create new content (text, images, code) using advanced AI models.",
        estimatedTotalDuration: "12-18 Months",
        dailyRoutine: "Fine-tune models, optimize inference pipelines, experiment with new architectures.",
        softSkills: ["Creativity", "Research Mindset", "Ethical Awareness"],
        interviewQuestions: ["How does Stable Diffusion work?", "Explain the difference between VAEs and GANs.", "What are the challenges of RLHF?"],
        salaryRange: "$120k - $220k",
        topCompanies: ["OpenAI", "Anthropic", "Midjourney", "Stability AI"],
        tools: ["PyTorch", "HuggingFace Diffusers", "LangChain", "Weights & Biases"],
        certifications: ["DeepLearning.AI Generative AI Specialization"],
        milestones: [
            {
                title: "Deep Learning Foundations",
                description: "Master the building blocks of modern AI: Neural Networks, Backpropagation, and Optimization.",
                whyMatters: "You cannot build advanced generative models without understanding the underlying math and architecture.",
                commonPitfalls: "Skipping the math (Linear Algebra/Calculus) and jumping straight to code.",
                realWorldApplication: "Debugging model convergence issues during training.",
                weeklyCommitment: "10-15 hours/week",
                duration: "3 Months",
                difficulty: "Beginner",
                skills: ["PyTorch/TensorFlow", "Calculus & Linear Algebra", "Neural Network Architectures", "Optimization Algorithms"],
                resources: [
                    { title: "Deep Learning Specialization (Coursera)", type: "Course" , url: 'https://www.coursera.org/specializations/deep-learning'},
                    { title: "Fast.ai", type: "Course" , url: 'https://course.fast.ai/'}
                ],
                projectIdea: "Build and train a simple MLP from scratch to classify MNIST digits.",
                checklist: [
                    "Implement Backpropagation manually",
                    "Train a model on a GPU",
                    "Visualize loss curves",
                    "Understand Activation Functions"
                ]
            },
            {
                title: "Transformers & LLMs",
                description: "Understand the architecture powering the current AI revolution.",
                whyMatters: "Transformers are the backbone of almost all modern SOTA models.",
                commonPitfalls: "Treating LLMs as black boxes without understanding Attention mechanisms.",
                realWorldApplication: "Fine-tuning a GPT model for a specific domain (e.g., legal or medical).",
                weeklyCommitment: "10-12 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Self-Attention", "BERT/GPT Architectures", "Tokenization", "Prompt Engineering"],
                resources: [
                    { title: "The Illustrated Transformer", type: "Article" , url: 'https://jalammar.github.io/illustrated-transformer/'},
                    { title: "HuggingFace NLP Course", type: "Course" , url: 'https://google.com/search?q=HuggingFace+NLP+Course'}
                ],
                projectIdea: "Fine-tune a small LLM (like Llama-2-7b) on a custom dataset.",
                checklist: [
                    "Implement Multi-Head Attention",
                    "Fine-tune a model with LoRA",
                    "Build a custom tokenizer",
                    "Evaluate model perplexity"
                ]
            },
            {
                title: "Diffusion Models & Image Gen",
                description: "Learn how to generate images from noise.",
                whyMatters: "Image generation is a massive field with applications in art, design, and media.",
                commonPitfalls: "Confusing Diffusion processes with GANs.",
                realWorldApplication: "Building a custom avatar generator for a game.",
                weeklyCommitment: "8-10 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Denoising Diffusion Probabilistic Models (DDPM)", "Stable Diffusion", "ControlNet", "Latent Space"],
                resources: [
                    { title: "HuggingFace Diffusers Course", type: "Course" , url: 'https://google.com/search?q=HuggingFace+Diffusers+Course'}
                ],
                projectIdea: "Train a ControlNet to generate images based on sketches.",
                checklist: [
                    "Train a small DDPM on CIFAR-10",
                    "Use ControlNet for guided generation",
                    "Implement Inpainting",
                    "Optimize inference speed"
                ]
            },
            {
                title: "GenAI Production Engineering",
                description: "Deploy and scale generative models in the real world.",
                whyMatters: "A model is useless if it can't serve users reliably and cheaply.",
                commonPitfalls: "Ignoring inference costs and latency.",
                realWorldApplication: "Serving a high-traffic chatbot with low latency.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["Model Quantization", "vLLM/TGI", "RAG Pipelines", "Eval Frameworks"],
                resources: [
                    { title: "Full Stack LLM Bootcamp", type: "Course" , url: 'https://google.com/search?q=Full+Stack+LLM+Bootcamp'}
                ],
                projectIdea: "Build an end-to-end RAG application with streaming responses.",
                checklist: [
                    "Quantize a model to 4-bit",
                    "Set up a vLLM server",
                    "Build a RAG evaluation pipeline",
                    "Implement semantic caching"
                ]
            }
        ]
    },
    "LLM Ops Specialist": {
        role: "LLM Ops Specialist",
        summary: "Manage the lifecycle of Large Language Models, from data preparation to deployment and monitoring.",
        estimatedTotalDuration: "8-12 Months",
        dailyRoutine: "Monitor model drift, optimize GPU usage, manage datasets.",
        softSkills: ["Operational Excellence", "System Thinking", "Risk Management"],
        interviewQuestions: ["How do you handle model hallucination?", "Explain P-tuning vs Fine-tuning.", "How do you optimize GPU memory?"],
        salaryRange: "$110k - $190k",
        topCompanies: ["Cohere", "Scale AI", "Databricks", "Microsoft"],
        tools: ["MLflow", "Kubeflow", "LangSmith", "Prometheus"],
        certifications: ["Databricks Certified Machine Learning Professional"],
        milestones: [
            {
                title: "MLOps Fundamentals",
                description: "Learn standard MLOps practices before diving into LLMs.",
                whyMatters: "LLMOps is MLOps at scale; the fundamentals are the same.",
                commonPitfalls: "Thinking manual deployment is enough.",
                realWorldApplication: "Automating model retraining pipelines.",
                weeklyCommitment: "8 hours/week",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["CI/CD for ML", "Model Registry", "Data Versioning (DVC)", "Docker"],
                resources: [
                    { title: "MLOps Zoomcamp", type: "Course" , url: 'https://google.com/search?q=MLOps+Zoomcamp'}
                ],
                projectIdea: "Build a CI/CD pipeline for a simple classifier.",
                checklist: [
                    "Version control a dataset",
                    "Automate testing for a model",
                    "Containerize training scripts",
                    "Set up a model registry"
                ]
            },
            {
                title: "LLM Deployment & Serving",
                description: "Serve massive models efficiently.",
                whyMatters: "LLMs are huge; serving them wrong costs a fortune.",
                commonPitfalls: "Using standard HTTP servers for streaming tokens.",
                realWorldApplication: "Deploying Llama-3 for a company chatbot.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Model Parallelism", "Ray Serve", "Triton Inference Server", "Streaming APIs"],
                resources: [
                    { title: "Ray Documentation", type: "Article" , url: 'https://google.com/search?q=Ray+Documentation'}
                ],
                projectIdea: "Deploy a multi-gpu model using Ray Serve.",
                checklist: [
                    "Implement continuous batching",
                    "Set up autoscaling based on GPU load",
                    "Serve a model with Triton",
                    "Optimize cold start times"
                ]
            },
            {
                title: "Monitoring & Evaluation",
                description: "Ensure models behave correctly in production.",
                whyMatters: "LLMs drift and hallucinate; you need to catch it.",
                commonPitfalls: "Relying only on user feedback.",
                realWorldApplication: "Detecting when a chatbot starts giving toxic answers.",
                weeklyCommitment: "8 hours/week",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["LLM Evals (Ragas)", "Drift Detection", "Cost Monitoring", "Feedback Loops"],
                resources: [
                    { title: "Arize AI Blog", type: "Article" , url: 'https://google.com/search?q=Arize+AI+Blog'}
                ],
                projectIdea: "Build a monitoring dashboard for an LLM app.",
                checklist: [
                    "Implement RAGAS metrics",
                    "Track token usage and cost",
                    "Set up alerts for toxicity",
                    "Capture user feedback"
                ]
            }
        ]
    },
    "Quantum Developer": {
        role: "Quantum Developer",
        summary: "Develop algorithms and software for quantum computers.",
        estimatedTotalDuration: "12-18 Months",
        dailyRoutine: "Design quantum circuits, simulate algorithms, optimize quantum gates.",
        softSkills: ["Abstract Thinking", "Mathematical Aptitude", "Patience"],
        interviewQuestions: ["Explain Superposition and Entanglement.", "What is Grover's Algorithm?", "Difference between Qubits and Bits."],
        salaryRange: "$130k - $250k",
        topCompanies: ["IBM Quantum", "Google Quantum AI", "Rigetti", "IonQ"],
        tools: ["Qiskit", "Cirq", "PennyLane", "Python"],
        certifications: ["IBM Certified Associate Developer - Quantum Computation"],
        milestones: [
            {
                title: "Quantum Physics Basics",
                description: "Understand the weird world of quantum mechanics.",
                whyMatters: "You can't code quantum without understanding the physics.",
                commonPitfalls: "Trying to apply classical logic to quantum states.",
                realWorldApplication: "Understanding why quantum computers are faster for specific tasks.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Beginner",
                skills: ["Linear Algebra (Complex Vectors)", "Superposition", "Entanglement", "Measurement"],
                resources: [
                    { title: "Quantum Computation and Quantum Information (Nielsen & Chuang)", type: "Book" , url: 'https://en.wikipedia.org/wiki/Quantum_Computation_and_Quantum_Information'}
                ],
                projectIdea: "Simulate a Bell State manually.",
                checklist: [
                    "Master Bra-ket notation",
                    "Calculate probabilities of states",
                    "Understand the Bloch Sphere",
                    "Simulate quantum interference"
                ]
            },
            {
                title: "Quantum Programming (Qiskit)",
                description: "Write your first quantum programs.",
                whyMatters: "Qiskit is the industry standard for IBM quantum computers.",
                commonPitfalls: "Confusing simulation with real hardware execution.",
                realWorldApplication: "Running a simple circuit on a real IBM quantum computer.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Qiskit SDK", "Quantum Gates (H, CNOT)", "Circuit Construction", "Noise Models"],
                resources: [
                    { title: "Qiskit Textbook", type: "Course" , url: 'https://qiskit.org/learn/'}
                ],
                projectIdea: "Implement a Quantum Random Number Generator.",
                checklist: [
                    "Install Qiskit",
                    "Build a teleportation circuit",
                    "Run a job on IBM Quantum Cloud",
                    "Visualize circuit results"
                ]
            },
            {
                title: "Quantum Algorithms",
                description: "Implement famous quantum algorithms.",
                whyMatters: "These are the proof of quantum advantage.",
                commonPitfalls: "Not understanding the complexity classes (BQP vs P).",
                realWorldApplication: "Using Grover's algorithm for search.",
                weeklyCommitment: "12 hours/week",
                duration: "4 Months",
                difficulty: "Advanced",
                skills: ["Shor's Algorithm", "Grover's Algorithm", "VQE (Variational Quantum Eigensolver)", "QOAO"],
                resources: [
                    { title: "Introduction to Classical and Quantum Computing", type: "Book" , url: 'https://google.com/search?q=Introduction+to+Classical+and+Quantum+Computing'}
                ],
                projectIdea: "Implement VQE to find the ground state of a molecule.",
                checklist: [
                    "Code Grover's Algorithm",
                    "Understand Phase Estimation",
                    "Implement VQE",
                    "Analyze algorithm complexity"
                ]
            }
        ]
    },
    "Robotics Software Engineer": {
        role: "Robotics Software Engineer",
        summary: "Design and program the brains of autonomous robots.",
        estimatedTotalDuration: "12-15 Months",
        dailyRoutine: "Test navigation algorithms, debug sensor data, simulate robot behavior.",
        softSkills: ["Spatial Reasoning", "Safety First Mindset", "Hardware Awareness"],
        interviewQuestions: ["Explain SLAM.", "How does a PID controller work?", "What is ROS?"],
        salaryRange: "$100k - $180k",
        topCompanies: ["Boston Dynamics", "Tesla Optimus", "iRobot", "Cruise"],
        tools: ["ROS/ROS2", "C++", "Python", "Gazebo"],
        certifications: ["Udacity Robotics Software Engineer Nanodegree"],
        milestones: [
            {
                title: "C++ & Embedded Basics",
                description: "The language of robotics and hardware interaction.",
                whyMatters: "Robots need real-time performance; C++ is king.",
                commonPitfalls: "Relying too much on Python for critical loops.",
                realWorldApplication: "Writing a driver for a motor controller.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Beginner",
                skills: ["Modern C++", "Memory Management", "Microcontrollers (Arduino/STM32)", "Serial Communication"],
                resources: [
                    { title: "A Tour of C++", type: "Book" , url: 'https://google.com/search?q=A+Tour+of+C++'}
                ],
                projectIdea: "Build a line-following robot with Arduino.",
                checklist: [
                    "Write a PID controller in C++",
                    "Interface with an IMU sensor",
                    "Control a servo motor",
                    "Debug with GDB"
                ]
            },
            {
                title: "Robotics Operating System (ROS2)",
                description: "The middleware standard for robotics.",
                whyMatters: "ROS provides the plumbing for all modern robots.",
                commonPitfalls: "Sticking to ROS1 (it's EOL).",
                realWorldApplication: "Building a navigation stack for a warehouse robot.",
                weeklyCommitment: "12 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Nodes & Topics", "Services & Actions", "URDF/Xacro", "Gazebo Simulation"],
                resources: [
                    { title: "ROS2 Documentation", type: "Article" , url: 'https://google.com/search?q=ROS2+Documentation'}
                ],
                projectIdea: "Simulate a mobile robot navigating a maze in Gazebo.",
                checklist: [
                    "Create a ROS2 workspace",
                    "Write a publisher/subscriber node",
                    "Build a robot model in URDF",
                    "Launch a simulation"
                ]
            },
            {
                title: "Perception & Navigation",
                description: "Help the robot see and move.",
                whyMatters: "A robot that can't see or move is just a statue.",
                commonPitfalls: "Underestimating sensor noise.",
                realWorldApplication: "Self-driving car lane detection.",
                weeklyCommitment: "12 hours/week",
                duration: "4 Months",
                difficulty: "Advanced",
                skills: ["Computer Vision (OpenCV)", "SLAM", "Path Planning (A*)", "Sensor Fusion (Kalman Filter)"],
                resources: [
                    { title: "Probabilistic Robotics", type: "Book" , url: 'https://google.com/search?q=Probabilistic+Robotics'}
                ],
                projectIdea: "Implement SLAM on a TurtleBot.",
                checklist: [
                    "Detect objects with OpenCV",
                    "Implement A* pathfinding",
                    "Fuse odometry and IMU data",
                    "Map a room with Lidar"
                ]
            }
        ]
    },
    "Blockchain Architect": {
        role: "Blockchain Architect",
        summary: "Design decentralized systems and smart contracts.",
        estimatedTotalDuration: "8-12 Months",
        dailyRoutine: "Audit smart contracts, design tokenomics, optimize gas costs.",
        softSkills: ["Security Mindset", "Economic Thinking", "Transparency"],
        interviewQuestions: ["What is a reentrancy attack?", "Explain Proof of Stake vs Proof of Work.", "How does an EVM work?"],
        salaryRange: "$120k - $200k",
        topCompanies: ["ConsenSys", "Coinbase", "Chainlink", "Uniswap"],
        tools: ["Solidity", "Hardhat", "Foundry", "Ethers.js"],
        certifications: ["Certified Blockchain Architect"],
        milestones: [
            {
                title: "Cryptography & Blockchain Basics",
                description: "The math behind the magic.",
                whyMatters: "You need to trust the math, not the central authority.",
                commonPitfalls: "Thinking blockchain is just a slow database.",
                realWorldApplication: "Signing a transaction with a private key.",
                weeklyCommitment: "8 hours/week",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["Hashing (SHA-256)", "Public/Private Keys", "Consensus Mechanisms", "P2P Networks"],
                resources: [
                    { title: "Mastering Bitcoin", type: "Book" , url: 'https://github.com/bitcoinbook/bitcoinbook'}
                ],
                projectIdea: "Build a simple blockchain in Python/JS.",
                checklist: [
                    "Hash a block manually",
                    "Generate a wallet address",
                    "Simulate Proof of Work",
                    "Understand Merkle Trees"
                ]
            },
            {
                title: "Smart Contracts (Solidity)",
                description: "Programmable money.",
                whyMatters: "Smart contracts are the backend of Web3.",
                commonPitfalls: "Ignoring security vulnerabilities.",
                realWorldApplication: "Writing a crowdfunding contract.",
                weeklyCommitment: "12 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Solidity Syntax", "EVM", "Gas Optimization", "Testing (Hardhat/Foundry)"],
                resources: [
                    { title: "CryptoZombies", type: "Course" , url: 'https://cryptozombies.io/'}
                ],
                projectIdea: "Create an ERC-20 Token.",
                checklist: [
                    "Write a Hello World contract",
                    "Deploy to a testnet (Sepolia)",
                    "Write unit tests for a contract",
                    "Optimize gas usage"
                ]
            },
            {
                title: "DeFi & Security",
                description: "Financial systems and keeping them safe.",
                whyMatters: "DeFi hacks cost billions; security is paramount.",
                commonPitfalls: "Not auditing external calls.",
                realWorldApplication: "Building a decentralized exchange (DEX).",
                weeklyCommitment: "12 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["DeFi Primitives (AMMs, Lending)", "Security Auditing", "Oracles (Chainlink)", "Layer 2s"],
                resources: [
                    { title: "Ethernaut", type: "Course" , url: 'https://google.com/search?q=Ethernaut'}
                ],
                projectIdea: "Build a simplified Uniswap clone.",
                checklist: [
                    "Implement a liquidity pool",
                    "Audit a contract for reentrancy",
                    "Integrate a price feed oracle",
                    "Bridge assets to an L2"
                ]
            }
        ]
    },
    "AR/VR Developer": {
        role: "AR/VR Developer",
        summary: "Create immersive extended reality experiences.",
        estimatedTotalDuration: "9-12 Months",
        dailyRoutine: "3D modeling, scripting interactions, optimizing for frame rate.",
        softSkills: ["Spatial Design", "User Empathy", "Creativity"],
        interviewQuestions: ["Difference between AR and VR?", "How do you optimize 3D assets?", "Explain the graphics pipeline."],
        salaryRange: "$90k - $160k",
        topCompanies: ["Meta (Reality Labs)", "Apple (Vision Pro)", "Unity", "Snap"],
        tools: ["Unity", "Unreal Engine", "C#", "Blender"],
        certifications: ["Unity Certified Programmer"],
        milestones: [
            {
                title: "3D Math & C#",
                description: "The physics and logic of 3D worlds.",
                whyMatters: "You need math to move things in 3D space.",
                commonPitfalls: "Ignoring vector math.",
                realWorldApplication: "Calculating the trajectory of a thrown object.",
                weeklyCommitment: "10 hours/week",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["Vectors & Matrices", "Quaternions", "C# Programming", "Physics Engines"],
                resources: [
                    { title: "3D Math Primer for Graphics", type: "Book" , url: 'https://google.com/search?q=3D+Math+Primer+for+Graphics'}
                ],
                projectIdea: "Build a simple 3D physics game in Unity.",
                checklist: [
                    "Move an object with code",
                    "Detect collisions",
                    "Rotate objects with Quaternions",
                    "Implement gravity"
                ]
            },
            {
                title: "Unity/Unreal Engine",
                description: "The engines that power the metaverse.",
                whyMatters: "These are the standard tools for XR development.",
                commonPitfalls: "Not optimizing assets for mobile VR.",
                realWorldApplication: "Building a VR training simulation.",
                weeklyCommitment: "15 hours/week",
                duration: "4 Months",
                difficulty: "Intermediate",
                skills: ["Scene Management", "Lighting & Shaders", "XR Interaction Toolkit", "Asset Optimization"],
                resources: [
                    { title: "Unity Learn", type: "Course" , url: 'https://learn.unity.com/'}
                ],
                projectIdea: "Create a VR Escape Room.",
                checklist: [
                    "Set up a VR player controller",
                    "Implement grab interactions",
                    "Bake lighting for performance",
                    "Build for Quest/Vision Pro"
                ]
            },
            {
                title: "AR & Spatial Computing",
                description: "Blending the digital and physical.",
                whyMatters: "AR is the future of mobile computing.",
                commonPitfalls: "Bad UI placement in the real world.",
                realWorldApplication: "Building an AR furniture placement app.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["ARFoundation / ARKit / ARCore", "Plane Detection", "Image Tracking", "Spatial Audio"],
                resources: [
                    { title: "Apple ARKit Documentation", type: "Article" , url: 'https://google.com/search?q=Apple+ARKit+Documentation'}
                ],
                projectIdea: "Build an AR app that identifies plants.",
                checklist: [
                    "Detect a horizontal plane",
                    "Place a 3D object in AR",
                    "Implement image tracking",
                    "Handle light estimation"
                ]
            }
        ]
    },
    "IoT Security Specialist": {
        role: "IoT Security Specialist",
        summary: "Secure the billions of connected devices in our world.",
        estimatedTotalDuration: "10-14 Months",
        dailyRoutine: "Reverse engineer firmware, test hardware interfaces, analyze protocols.",
        softSkills: ["Paranoia (Good kind)", "Curiosity", "Patience"],
        interviewQuestions: ["How do you dump firmware from a chip?", "Explain MQTT security.", "What is a side-channel attack?"],
        salaryRange: "$100k - $170k",
        topCompanies: ["Arm", "Intel", "Siemens", "Defense Contractors"],
        tools: ["Binwalk", "Ghidra", "JTAGulator", "Soldering Iron"],
        certifications: ["Certified IoT Security Practitioner"],
        milestones: [
            {
                title: "Electronics & Hardware Basics",
                description: "Understand the physical layer.",
                whyMatters: "You can't hack hardware if you don't know how it works.",
                commonPitfalls: "Frying a board by shorting pins.",
                realWorldApplication: "Identifying debug ports on a PCB.",
                weeklyCommitment: "8 hours/week",
                duration: "3 Months",
                difficulty: "Beginner",
                skills: ["PCB Analysis", "UART/SPI/I2C", "Soldering", "Multimeter Usage"],
                resources: [
                    { title: "The Hardware Hacker", type: "Book" , url: 'https://google.com/search?q=The+Hardware+Hacker'}
                ],
                projectIdea: "Hack a cheap router to get a root shell.",
                checklist: [
                    "Identify chips on a PCB",
                    "Connect to a UART console",
                    "Dump firmware via SPI",
                    "Solder a header pin"
                ]
            },
            {
                title: "Firmware Analysis",
                description: "Reverse engineering the code inside the chip.",
                whyMatters: "Most IoT vulnerabilities are in the firmware.",
                commonPitfalls: "Getting lost in assembly code.",
                realWorldApplication: "Finding hardcoded credentials in a camera firmware.",
                weeklyCommitment: "12 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["ARM/MIPS Assembly", "Ghidra/IDA Pro", "Binwalk", "Buffer Overflows"],
                resources: [
                    { title: "Practical IoT Hacking", type: "Book" , url: 'https://google.com/search?q=Practical+IoT+Hacking'}
                ],
                projectIdea: "Reverse engineer a smart bulb firmware.",
                checklist: [
                    "Extract filesystem with Binwalk",
                    "Decompile a binary in Ghidra",
                    "Find a buffer overflow",
                    "Patch a binary"
                ]
            },
            {
                title: "Radio & Protocol Security",
                description: "Hacking the airwaves.",
                whyMatters: "IoT devices talk over the air; anyone can listen.",
                commonPitfalls: "Ignoring encryption standards.",
                realWorldApplication: "Cloning a garage door opener.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Advanced",
                skills: ["SDR (Software Defined Radio)", "Bluetooth/BLE", "Zigbee", "MQTT"],
                resources: [
                    { title: "SDR for Hackers", type: "Course" , url: 'https://google.com/search?q=SDR+for+Hackers'}
                ],
                projectIdea: "Capture and replay a car key signal (legally!).",
                checklist: [
                    "Sniff BLE traffic",
                    "Analyze a radio signal with SDR",
                    "Hack a Zigbee network",
                    "Secure an MQTT broker"
                ]
            }
        ]
    },
    "AI Ethicist": {
        role: "AI Ethicist",
        summary: "Ensure AI systems are fair, transparent, and safe for society.",
        estimatedTotalDuration: "6-9 Months",
        dailyRoutine: "Audit models for bias, write policy guidelines, collaborate with engineering teams.",
        softSkills: ["Empathy", "Philosophical Reasoning", "Communication"],
        interviewQuestions: ["Define algorithmic bias.", "How do you measure fairness in a model?", "What are the risks of AGI?"],
        salaryRange: "$90k - $160k",
        topCompanies: ["Google Responsible AI", "Anthropic", "Non-profits", "Government"],
        tools: ["Fairlearn", "AIF360", "Python", "Policy Frameworks"],
        certifications: ["Certified AI Ethics Specialist"],
        milestones: [
            {
                title: "AI & Society Foundations",
                description: "Understand the impact of AI on humans.",
                whyMatters: "Tech doesn't exist in a vacuum.",
                commonPitfalls: "Thinking technology is neutral.",
                realWorldApplication: "Analyzing the impact of facial recognition on privacy.",
                weeklyCommitment: "8 hours/week",
                duration: "2 Months",
                difficulty: "Beginner",
                skills: ["Tech Policy", "Privacy Rights", "Sociotechnical Systems", "Case Studies"],
                resources: [
                    { title: "Weapons of Math Destruction", type: "Book" , url: 'https://google.com/search?q=Weapons+of+Math+Destruction'}
                ],
                projectIdea: "Write a case study on a failed AI deployment.",
                checklist: [
                    "Read the EU AI Act",
                    "Analyze a bias incident",
                    "Understand GDPR",
                    "Debate an ethical dilemma"
                ]
            },
            {
                title: "Technical Auditing (Fairness)",
                description: "Using code to find bias.",
                whyMatters: "You need to measure bias to fix it.",
                commonPitfalls: "Optimizing for accuracy at the cost of fairness.",
                realWorldApplication: "Auditing a hiring algorithm for gender bias.",
                weeklyCommitment: "10 hours/week",
                duration: "3 Months",
                difficulty: "Intermediate",
                skills: ["Fairlearn", "Bias Metrics", "Explainability (SHAP/LIME)", "Python"],
                resources: [
                    { title: "Fairness and Machine Learning", type: "Book" , url: 'https://google.com/search?q=Fairness+and+Machine+Learning'}
                ],
                projectIdea: "Audit a credit scoring model for demographic bias.",
                checklist: [
                    "Calculate Disparate Impact",
                    "Use SHAP to explain predictions",
                    "Mitigate bias in a dataset",
                    "Write an audit report"
                ]
            },
            {
                title: "Governance & Safety",
                description: "Creating rules for safe AI.",
                whyMatters: "Preventing catastrophic risks.",
                commonPitfalls: "Creating policies that engineers can't follow.",
                realWorldApplication: "Designing a 'Red Teaming' strategy for a new LLM.",
                weeklyCommitment: "10 hours/week",
                duration: "2 Months",
                difficulty: "Advanced",
                skills: ["AI Alignment", "Red Teaming", "Risk Assessment", "Corporate Governance"],
                resources: [
                    { title: "The Alignment Problem", type: "Book" , url: 'https://google.com/search?q=The+Alignment+Problem'}
                ],
                projectIdea: "Design a safety framework for an autonomous vehicle company.",
                checklist: [
                    "Conduct a risk assessment",
                    "Design a Red Team exercise",
                    "Draft an AI usage policy",
                    "Study alignment research"
                ]
            }
        ]
    }
};