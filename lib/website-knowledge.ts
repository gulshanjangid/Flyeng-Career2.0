// ========================================================
// FLYENG CAREER - WEBSITE KNOWLEDGE BASE
// Comprehensive context for AI Assistant
// ========================================================

export interface QuickAction {
    label: string;
    action: string; // 'navigate:path' | 'scroll:section' | 'trigger:action'
    icon?: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface TourStep {
    target: string; // CSS selector or description
    title: string;
    content: string;
}

export interface PageContext {
    path: string;
    pathPattern?: RegExp;
    name: string;
    emoji: string;
    tagline: string;
    description: string;
    welcomeMessage: string;
    tips: string[];
    quickActions: QuickAction[];
    faqs: FAQ[];
    proactiveSuggestions: string[];
    tourSteps?: TourStep[];
    features?: string[];
    keywords?: string[];
}

// ========================================================
// WEBSITE OVERVIEW - For general context
// ========================================================
export const websiteOverview = {
    name: "Flyeng Career",
    tagline: "Your AI Career Co-Pilot",
    description: "India's leading AI-powered career platform designed specifically for students. We provide 12+ AI tools to help you land your dream job - from resume building to mock interviews, career roadmaps, and more.",
    mission: "To democratize career guidance and make placement success accessible to every Indian student, regardless of their background.",
    founded: "2022 - Born from a dorm room idea to help students succeed",

    keyFeatures: [
        "AI Resume Builder with 10+ ATS-optimized templates",
        "AI Mock Interview with real-time audio scoring",
        "Personalized Career Roadmaps",
        "Cover Letter Generator",
        "DSA Visualizer for algorithm learning",
        "Code Compiler & Explainer",
        "Project Ideas Generator",
        "Notes Summarizer",
        "Quiz Generator for self-assessment",
        "Job Market Insights"
    ],

    pricingPlans: [
        { name: "Free", price: "₹0", features: ["Basic AI tools", "Community access", "Limited usage"] },
        { name: "Pro", price: "₹99/month", features: ["Unlimited AI tools", "Priority matching", "Advanced features"] },
        { name: "Premium", price: "₹299/month", features: ["Everything in Pro", "1-on-1 Mentor calls", "Guaranteed shortlists"] }
    ],

    socialLinks: {
        twitter: "https://twitter.com/flyengcareer",
        youtube: "https://youtube.com/@flyengcareer",
        instagram: "https://instagram.com/flyengcareer"
    }
};

// ========================================================
// AI TOOLS DETAILED INFORMATION
// ========================================================
export const aiToolsDetails = {
    resumeBuilder: {
        name: "Resume Architect",
        emoji: "📄",
        description: "AI-powered resume builder that creates ATS-optimized resumes",
        features: [
            "10+ professional templates (Modern, Classic, Tech, Creative, etc.)",
            "ATS score checker with real-time feedback",
            "AI content suggestions and improvements",
            "Import existing resume (PDF/DOCX)",
            "Export to PDF with perfect formatting",
            "Live preview with instant updates",
            "Section-by-section guidance"
        ],
        tips: [
            "Use action verbs like 'Developed', 'Led', 'Implemented' to start bullet points",
            "Include quantifiable achievements (e.g., 'Increased sales by 25%')",
            "Keep your resume to 1-2 pages max for freshers",
            "Tailor your resume for each job application",
            "Use the ATS analyzer to check your score before applying"
        ],
        commonMistakes: [
            "Including a photo (not recommended for most tech jobs)",
            "Using fancy fonts that ATS can't read",
            "Adding irrelevant hobbies",
            "Having spelling/grammar errors",
            "Making it too long or too short"
        ]
    },

    mockInterview: {
        name: "Neural Voice AI Mock Interview",
        emoji: "🎤",
        description: "Practice interviews with AI-powered real-time audio scoring",
        features: [
            "Real-time speech-to-text transcription",
            "AI-powered answer evaluation",
            "Body language tips",
            "Technical and HR interview modes",
            "Industry-specific question banks",
            "Detailed performance reports",
            "Voice modulation feedback"
        ],
        tips: [
            "Practice in a quiet environment with good lighting",
            "Speak clearly and at a moderate pace",
            "Use the STAR method for behavioral questions",
            "Dress professionally even for practice",
            "Review your recordings to identify improvement areas"
        ],
        interviewTypes: ["Technical", "HR", "Behavioral", "Case Study", "Group Discussion"]
    },

    careerRoadmap: {
        name: "Career Roadmap Generator",
        emoji: "🗺️",
        description: "Personalized step-by-step career guidance",
        features: [
            "Custom learning paths based on goals",
            "Skill gap analysis",
            "Resource recommendations",
            "Timeline with milestones",
            "Progress tracking"
        ],
        availableRoadmaps: [
            "Frontend Developer", "Backend Developer", "Full Stack Developer",
            "Data Scientist", "ML Engineer", "DevOps Engineer",
            "Mobile Developer", "Cloud Architect", "Cybersecurity"
        ]
    },

    coverLetter: {
        name: "Cover Letter AI",
        emoji: "✉️",
        description: "Generate persuasive cover letters tailored to job descriptions",
        features: [
            "Job description analysis",
            "Personalized content generation",
            "Multiple tone options (Professional, Enthusiastic, Formal)",
            "ATS optimization",
            "One-click customization"
        ],
        tips: [
            "Always customize for each application",
            "Address the hiring manager by name if possible",
            "Highlight 2-3 key achievements relevant to the role",
            "Keep it to 3-4 paragraphs max",
            "End with a clear call-to-action"
        ]
    },

    dsaVisualizer: {
        name: "DSA Visualizer",
        emoji: "📊",
        description: "Visualize data structures and algorithms step-by-step",
        features: [
            "Interactive visualizations",
            "Step-by-step execution",
            "Time & space complexity display",
            "Multiple algorithm categories",
            "Custom input support"
        ],
        categories: ["Sorting", "Searching", "Trees", "Graphs", "Dynamic Programming", "Linked Lists"]
    },

    codeExplainer: {
        name: "Code Explainer",
        emoji: "💡",
        description: "Get detailed explanations of any code snippet",
        features: [
            "Line-by-line explanation",
            "Multiple programming languages",
            "Best practices suggestions",
            "Complexity analysis",
            "Alternative approaches"
        ],
        supportedLanguages: ["JavaScript", "Python", "Java", "C++", "TypeScript", "Go", "Rust"]
    },

    compiler: {
        name: "Online Code Compiler",
        emoji: "⚡",
        description: "Write, compile, and run code in your browser",
        features: [
            "Multiple language support",
            "Real-time output",
            "Error highlighting",
            "Code sharing",
            "Input support"
        ],
        supportedLanguages: ["JavaScript", "Python", "Java", "C++", "C", "Go"]
    },

    projectIdeas: {
        name: "Project Ideas Generator",
        emoji: "💡",
        description: "Get unique project ideas tailored to your tech stack",
        features: [
            "Stack-specific ideas",
            "Difficulty levels",
            "Implementation guides",
            "GitHub template links",
            "Skill mapping"
        ],
        categories: ["Web Development", "Mobile Apps", "AI/ML", "IoT", "Blockchain", "Games"]
    },

    notesSummarizer: {
        name: "Notes Summarizer",
        emoji: "📝",
        description: "Convert lengthy notes into concise summaries",
        features: [
            "AI-powered summarization",
            "Key points extraction",
            "Multiple summary lengths",
            "Bullet point format",
            "Export options"
        ]
    },

    quizGenerator: {
        name: "Quiz Generator",
        emoji: "❓",
        description: "Create quizzes from any topic or text",
        features: [
            "Auto-generate questions",
            "Multiple question types (MCQ, True/False, Short Answer)",
            "Difficulty settings",
            "Instant scoring",
            "Detailed explanations"
        ]
    },

    jobMatcher: {
        name: "Job Matcher",
        emoji: "🎯",
        description: "Match your profile with relevant job opportunities",
        features: [
            "Profile analysis",
            "Job recommendations",
            "Skill matching scores",
            "Application tracking",
            "Market insights"
        ]
    }
};

// ========================================================
// PAGE CONTEXTS - Detailed context for each page
// ========================================================
export const pageContexts: PageContext[] = [
    // ---------------------- HOME PAGE ----------------------
    {
        path: "/",
        name: "Homepage",
        emoji: "🏠",
        tagline: "Your AI Career Co-Pilot",
        description: "The main landing page of Flyeng Career showcasing all features, pricing, testimonials, and key information about our AI-powered career platform.",
        welcomeMessage: "Welcome to Flyeng Career! 🚀 I'm your AI assistant, here to help you navigate our platform and supercharge your career journey. What would you like to explore?",
        tips: [
            "Explore our 12+ AI tools designed specifically for students",
            "Check out the pricing section for Pro and Premium benefits",
            "Read success stories from students who landed their dream jobs",
            "Try the Resume Builder - it's our most popular tool!"
        ],
        quickActions: [
            { label: "Explore AI Tools", action: "navigate:/ai-tools", icon: "🛠️" },
            { label: "Build Resume", action: "navigate:/ai-tools/resume-builder", icon: "📄" },
            { label: "View Pricing", action: "scroll:#pricing", icon: "💰" },
            { label: "Start Free Trial", action: "navigate:/signup", icon: "🎉" }
        ],
        faqs: [
            { question: "What is Flyeng Career?", answer: "Flyeng Career is India's leading AI-powered career platform designed to help students land their dream jobs. We offer 12+ AI tools including resume builder, mock interviews, career roadmaps, and more." },
            { question: "Is it free to use?", answer: "Yes! We offer a free tier with access to basic AI tools. Pro (₹99/month) and Premium (₹299/month) plans unlock unlimited access and exclusive features." },
            { question: "Who is this for?", answer: "Flyeng Career is designed for students and fresh graduates looking to kickstart their careers. Our tools are optimized for placement preparation and job applications." }
        ],
        proactiveSuggestions: [
            "💡 Did you know? Our Resume Builder has helped 50,000+ students create ATS-optimized resumes!",
            "🎯 Looking for placement prep? Try our Mock Interview tool with real-time AI feedback!",
            "📚 Check out our free courses to build in-demand skills!"
        ],
        features: ["Hero Section", "Features Bento Grid", "AI Companion", "Testimonials", "Pricing", "FAQ"]
    },

    // ---------------------- AI TOOLS HUB ----------------------
    {
        path: "/ai-tools",
        name: "AI Tools Hub",
        emoji: "🛠️",
        tagline: "12+ AI-Powered Career Tools",
        description: "The central hub for all AI-powered career tools including Resume Builder, Mock Interview, Career Roadmap, Cover Letter Generator, DSA Visualizer, Code Compiler, and more.",
        welcomeMessage: "Welcome to the AI Tools Hub! 🛠️ Here you'll find 12+ powerful AI tools to accelerate your career journey. From resume building to interview prep, we've got you covered. What would you like to explore?",
        tips: [
            "Start with the Resume Architect - it's our most popular tool",
            "Use the Career Roadmap to get a personalized learning path",
            "Practice with Mock Interviews before your real ones",
            "Tools marked 'Free' are available without any subscription"
        ],
        quickActions: [
            { label: "Resume Builder", action: "navigate:/ai-tools/resume-builder", icon: "📄" },
            { label: "Mock Interview", action: "navigate:/ai-tools/mock-interview", icon: "🎤" },
            { label: "Career Roadmap", action: "navigate:/ai-tools/roadmap", icon: "🗺️" },
            { label: "DSA Visualizer", action: "navigate:/ai-tools/dsa-visualizer", icon: "📊" }
        ],
        faqs: [
            { question: "Which tools are free?", answer: "Resume Builder, Mock Interview, Cover Letter AI, and Code Explainer are available in the free tier. Pro and Premium unlock additional tools and unlimited usage." },
            { question: "How do I switch between tools?", answer: "Simply click on any tool card to open it. You can always come back to this hub using the navigation menu." },
            { question: "Can I use multiple tools together?", answer: "Absolutely! Many students use Resume Builder + Mock Interview + Cover Letter together for complete placement prep." }
        ],
        proactiveSuggestions: [
            "📄 Build your resume first, then practice interviews - that's the winning combo!",
            "💡 Tip: Use the DSA Visualizer while preparing for technical interviews",
            "🎯 Pro users get unlimited access to ALL tools without any restrictions!"
        ],
        features: ["Resume Architect", "Mock Interview", "Career Roadmap", "Cover Letter", "DSA Visualizer", "Code Compiler", "Project Ideas", "Summarizer", "Quiz Generator"],
        keywords: ["resume", "interview", "roadmap", "career", "ai tools", "placement"]
    },

    // ---------------------- RESUME BUILDER ----------------------
    {
        path: "/ai-tools/resume-builder",
        name: "Resume Architect",
        emoji: "📄",
        tagline: "Beat the ATS with AI",
        description: "AI-powered resume builder with 10+ professional templates, ATS optimization, real-time scoring, and AI content suggestions. Create a job-winning resume in minutes.",
        welcomeMessage: "Welcome to Resume Architect! 📄 I'm here to help you create an ATS-beating resume that gets you shortlisted. Ready to build your dream resume?",
        tips: [
            "Choose a template that matches your industry (Tech, Creative, Corporate)",
            "Use the AI suggestions to improve your bullet points",
            "Keep your resume to 1 page if you have less than 5 years of experience",
            "Include quantifiable achievements with numbers and percentages",
            "Run the ATS analyzer before downloading to check your score",
            "Import your existing resume to save time"
        ],
        quickActions: [
            { label: "Choose Template", action: "trigger:open-templates", icon: "🎨" },
            { label: "Import Resume", action: "trigger:import-resume", icon: "📤" },
            { label: "Check ATS Score", action: "trigger:analyze", icon: "📈" },
            { label: "Download PDF", action: "trigger:download", icon: "⬇️" }
        ],
        faqs: [
            { question: "What is ATS?", answer: "ATS (Applicant Tracking System) is software used by companies to filter resumes. Our builder ensures your resume passes these systems." },
            { question: "Which template should I choose?", answer: "For tech roles, use Modern or Tech templates. For corporate roles, use Classic or Professional. Creative roles can use Designer or artistic templates." },
            { question: "Can I import my existing resume?", answer: "Yes! Click the Import button to upload your PDF or DOCX resume. Our AI will parse and populate all fields automatically." },
            { question: "How do I improve my ATS score?", answer: "Use relevant keywords from the job description, avoid graphics/tables, use standard section headings, and keep formatting simple." }
        ],
        proactiveSuggestions: [
            "💡 Pro tip: Use action verbs like 'Developed', 'Led', 'Increased' to start bullet points",
            "📊 Check your ATS score before applying - aim for 80% or higher!",
            "🎯 Tailor your resume for each job by matching keywords from the job description"
        ],
        tourSteps: [
            { target: "template-selector", title: "Choose Template", content: "Start by selecting a template that fits your target role and industry" },
            { target: "personal-info", title: "Personal Info", content: "Fill in your contact details. Make sure your email and phone are correct!" },
            { target: "experience-section", title: "Experience", content: "Add your work experience with quantifiable achievements" },
            { target: "skills-section", title: "Skills", content: "List relevant technical and soft skills" },
            { target: "ats-analyzer", title: "ATS Score", content: "Check your ATS score and get improvement suggestions" }
        ],
        features: ["Template Selection", "AI Content Suggestions", "ATS Analyzer", "PDF Export", "Import Resume", "Live Preview"],
        keywords: ["resume", "cv", "ats", "template", "job application", "pdf"]
    },

    // ---------------------- MOCK INTERVIEW ----------------------
    {
        path: "/ai-tools/mock-interview",
        pathPattern: /^\/ai-tools\/mock-interview/,
        name: "Mock Interview",
        emoji: "🎤",
        tagline: "Practice Makes Perfect",
        description: "AI-powered mock interview tool with real-time audio scoring, transcription, and detailed feedback. Practice technical and HR interviews with personalized question banks.",
        welcomeMessage: "Welcome to Neural Voice AI Mock Interview! 🎤 I'm here to help you ace your interviews. Let's practice until you're confident and ready!",
        tips: [
            "Find a quiet room with good lighting before starting",
            "Use a headset for better audio quality",
            "Speak clearly and maintain eye contact with the camera",
            "Use the STAR method (Situation, Task, Action, Result) for behavioral questions",
            "Practice at least 5-10 sessions before your real interview",
            "Review your recordings to identify areas for improvement"
        ],
        quickActions: [
            { label: "Start Technical Interview", action: "trigger:start-technical", icon: "💻" },
            { label: "Start HR Interview", action: "trigger:start-hr", icon: "👔" },
            { label: "View Practice History", action: "trigger:history", icon: "📜" },
            { label: "Interview Tips", action: "trigger:tips", icon: "💡" }
        ],
        faqs: [
            { question: "What interview types are available?", answer: "We offer Technical (coding, DSA), HR/Behavioral, and case study interviews. Choose based on your upcoming interview." },
            { question: "Do I need a webcam?", answer: "A webcam is optional but recommended. Video helps practice body language and eye contact." },
            { question: "How is my answer scored?", answer: "Our AI evaluates content relevance, communication clarity, technical accuracy, and response structure." },
            { question: "Can I practice specific topics?", answer: "Yes! You can select topics like DSA, System Design, React, Node.js, etc. for targeted practice." }
        ],
        proactiveSuggestions: [
            "🎯 Practice the STAR method: Situation, Task, Action, Result - it works for most behavioral questions!",
            "💡 Tip: Record yourself and watch the playback to spot improvement areas",
            "📝 Prepare 3-5 stories from your experience that showcase different skills"
        ],
        features: ["Real-time Transcription", "AI Scoring", "Question Bank", "Performance Analytics", "Video Recording"],
        keywords: ["interview", "practice", "mock", "technical", "hr", "behavioral"]
    },

    // ---------------------- CAREER ROADMAP ----------------------
    {
        path: "/ai-tools/roadmap",
        name: "Career Roadmap",
        emoji: "🗺️",
        tagline: "Your Personalized Path to Success",
        description: "Get a personalized step-by-step career roadmap based on your goals. Learn what skills to acquire, projects to build, and milestones to achieve.",
        welcomeMessage: "Welcome to Career Roadmap! 🗺️ Let me create a personalized path to your dream career. What role are you aiming for?",
        tips: [
            "Be specific about your target role for better recommendations",
            "Follow the roadmap in order - each step builds on the previous",
            "Track your progress by marking completed items",
            "Revisit the roadmap monthly to adjust based on your progress"
        ],
        quickActions: [
            { label: "Frontend Roadmap", action: "trigger:roadmap-frontend", icon: "🌐" },
            { label: "Backend Roadmap", action: "trigger:roadmap-backend", icon: "⚙️" },
            { label: "Data Science", action: "trigger:roadmap-ds", icon: "📊" },
            { label: "Full Stack", action: "trigger:roadmap-fullstack", icon: "🔥" }
        ],
        faqs: [
            { question: "How long does a roadmap take?", answer: "Typically 6-12 months depending on your dedication and prior knowledge. Intense practice can speed this up." },
            { question: "Can I customize the roadmap?", answer: "Yes! You can skip sections you already know and prioritize based on your target job description." },
            { question: "What if I change my career goal?", answer: "Simply generate a new roadmap. Many skills overlap, so you won't lose your progress." }
        ],
        proactiveSuggestions: [
            "💡 Focus on one technology at a time - depth over breadth!",
            "📚 Each roadmap includes free resource links to get started",
            "🎯 Companies value projects over certifications - focus on building!"
        ],
        features: ["Interactive Roadmaps", "Progress Tracking", "Resource Links", "Skill Gap Analysis"],
        keywords: ["roadmap", "career", "learning", "skills", "path"]
    },

    // ---------------------- COVER LETTER ----------------------
    {
        path: "/ai-tools/cover-letter",
        name: "Cover Letter AI",
        emoji: "✉️",
        tagline: "Persuade with Perfect Words",
        description: "Generate compelling cover letters tailored to specific job descriptions. AI analyzes the job requirements and crafts personalized content.",
        welcomeMessage: "Welcome to Cover Letter AI! ✉️ Let me help you write a cover letter that gets noticed. Paste a job description to get started!",
        tips: [
            "Always paste the full job description for best results",
            "Customize the generated letter with personal stories",
            "Address the hiring manager by name when possible",
            "Keep it to 3-4 paragraphs maximum",
            "Highlight 2-3 achievements most relevant to the role"
        ],
        quickActions: [
            { label: "Generate Letter", action: "trigger:generate", icon: "✨" },
            { label: "View Examples", action: "trigger:examples", icon: "📝" },
            { label: "Edit Tone", action: "trigger:tone", icon: "🎭" }
        ],
        faqs: [
            { question: "Do I really need a cover letter?", answer: "While not always required, a good cover letter can significantly boost your chances, especially for competitive roles." },
            { question: "How long should it be?", answer: "Keep it to one page, ideally 3-4 paragraphs with 250-400 words." },
            { question: "Can I use the same letter for multiple jobs?", answer: "We recommend customizing for each application. Job-specific letters perform much better." }
        ],
        proactiveSuggestions: [
            "💡 The opening line is crucial - make it memorable!",
            "🎯 Mention the company name and role to show personalization",
            "📊 Include specific achievements with numbers when possible"
        ],
        keywords: ["cover letter", "application", "job", "writing"]
    },

    // ---------------------- DSA VISUALIZER ----------------------
    {
        path: "/ai-tools/dsa-visualizer",
        name: "DSA Visualizer",
        emoji: "📊",
        tagline: "See Algorithms Come to Life",
        description: "Interactive visualizations of data structures and algorithms. Watch sorting, searching, tree traversals, graph algorithms, and more execute step-by-step.",
        welcomeMessage: "Welcome to DSA Visualizer! 📊 Ready to see algorithms in action? Choose a topic and watch the magic happen!",
        tips: [
            "Start with basic sorting algorithms before moving to advanced topics",
            "Use the speed control to understand each step",
            "Try different inputs to see how algorithms behave",
            "Compare time complexities between different algorithms"
        ],
        quickActions: [
            { label: "Sorting Algorithms", action: "trigger:sorting", icon: "📶" },
            { label: "Tree Traversals", action: "trigger:trees", icon: "🌲" },
            { label: "Graph Algorithms", action: "trigger:graphs", icon: "🕸️" },
            { label: "Dynamic Programming", action: "trigger:dp", icon: "🧩" }
        ],
        faqs: [
            { question: "Which algorithms should I learn first?", answer: "Start with sorting (Bubble, Selection, Merge, Quick), then searching (Binary Search), then Trees and Graphs." },
            { question: "How do I use this for interviews?", answer: "Visualize algorithms you struggle with, understand time complexities, and practice implementing them manually." },
            { question: "Can I customize the input?", answer: "Yes! You can input custom arrays, trees, or graphs to see how algorithms handle different cases." }
        ],
        proactiveSuggestions: [
            "💡 Understanding time complexity visually helps remember it better!",
            "🎯 Focus on BFS and DFS - they're used in 50% of graph problems",
            "📝 After visualizing, try implementing the algorithm from memory"
        ],
        keywords: ["dsa", "algorithms", "data structures", "sorting", "graphs", "trees"]
    },

    // ---------------------- CODE COMPILER ----------------------
    {
        path: "/ai-tools/compiler",
        name: "Code Compiler",
        emoji: "⚡",
        tagline: "Write. Run. Debug.",
        description: "Online code compiler supporting multiple programming languages. Write, compile, and run code directly in your browser.",
        welcomeMessage: "Welcome to the Online Compiler! ⚡ Write code in JavaScript, Python, Java, C++, and more. What would you like to build today?",
        tips: [
            "Use Ctrl+Enter to quickly run your code",
            "Check the console for error messages",
            "Use the input section for programs that need user input",
            "Share your code using the share button"
        ],
        quickActions: [
            { label: "Python", action: "trigger:python", icon: "🐍" },
            { label: "JavaScript", action: "trigger:javascript", icon: "🟨" },
            { label: "Java", action: "trigger:java", icon: "☕" },
            { label: "C++", action: "trigger:cpp", icon: "🔷" }
        ],
        faqs: [
            { question: "Which languages are supported?", answer: "We support JavaScript, Python, Java, C++, C, Go, and TypeScript." },
            { question: "Is there a code limit?", answer: "Free users have a 5000 character limit. Pro users get unlimited." },
            { question: "Can I save my code?", answer: "Yes! Login to save your code snippets and access them later." }
        ],
        proactiveSuggestions: [
            "💡 Use the Code Explainer tool after running to understand complex code",
            "🎯 Practice DSA problems here and visualize them in the DSA Visualizer",
            "📝 Bookmark your commonly used code snippets for quick access"
        ],
        keywords: ["code", "compiler", "python", "javascript", "java", "c++"]
    },

    // ---------------------- CODE EXPLAINER ----------------------
    {
        path: "/ai-tools/code-explainer",
        name: "Code Explainer",
        emoji: "💡",
        tagline: "Understand Any Code Instantly",
        description: "Paste any code snippet and get a detailed line-by-line explanation. Perfect for learning new code or understanding complex algorithms.",
        welcomeMessage: "Welcome to Code Explainer! 💡 Paste any code and I'll explain it in simple terms. Learning has never been easier!",
        tips: [
            "Paste complete functions for better context",
            "Use it to understand open-source code",
            "Ask follow-up questions about specific parts",
            "Request optimization suggestions"
        ],
        quickActions: [
            { label: "Explain Code", action: "trigger:explain", icon: "💡" },
            { label: "Get Optimizations", action: "trigger:optimize", icon: "🚀" },
            { label: "Find Bugs", action: "trigger:debug", icon: "🐛" }
        ],
        faqs: [
            { question: "What languages can be explained?", answer: "All major languages including JavaScript, Python, Java, C++, Go, Rust, and more." },
            { question: "Can it explain algorithms?", answer: "Yes! It excels at explaining algorithm logic, time complexity, and step-by-step execution." },
            { question: "How detailed are the explanations?", answer: "You can choose between brief overview, line-by-line, or in-depth with examples." }
        ],
        proactiveSuggestions: [
            "💡 Use this tool while learning from tutorials to deeply understand code",
            "🎯 Ask for 'time and space complexity' to prepare for interviews",
            "📝 Request alternative approaches to learn multiple solutions"
        ],
        keywords: ["code", "explain", "learn", "understand", "algorithm"]
    },

    // ---------------------- PROJECT IDEAS ----------------------
    {
        path: "/ai-tools/project-ideas",
        name: "Project Ideas Generator",
        emoji: "💡",
        tagline: "Build Something Amazing",
        description: "Get unique project ideas tailored to your tech stack and skill level. Perfect for portfolio building and learning new technologies.",
        welcomeMessage: "Welcome to Project Ideas! 💡 Let's find the perfect project to boost your portfolio. What technologies are you working with?",
        tips: [
            "Choose projects that solve real problems",
            "Start with smaller projects and scale up",
            "Document your projects well on GitHub",
            "Add live demos whenever possible"
        ],
        quickActions: [
            { label: "Web Projects", action: "trigger:web", icon: "🌐" },
            { label: "Mobile Apps", action: "trigger:mobile", icon: "📱" },
            { label: "AI/ML Projects", action: "trigger:ml", icon: "🤖" },
            { label: "Full Stack", action: "trigger:fullstack", icon: "🔥" }
        ],
        faqs: [
            { question: "How many projects should I have?", answer: "Quality over quantity. 3-5 well-documented projects are better than 10 incomplete ones." },
            { question: "Should I clone existing apps?", answer: "Cloning is good for learning, but add unique features to stand out. Original projects score higher." },
            { question: "How do I make my project stand out?", answer: "Add features that solve real problems, write great documentation, include tests, and deploy with live demos." }
        ],
        proactiveSuggestions: [
            "💡 Tip: Projects that solve your own problems are easier to explain in interviews",
            "🎯 Include at least one full-stack project in your portfolio",
            "📝 Each project should have a detailed README with screenshots"
        ],
        keywords: ["project", "ideas", "portfolio", "build", "github"]
    },

    // ---------------------- NOTES SUMMARIZER ----------------------
    {
        path: "/ai-tools/summarizer",
        name: "Notes Summarizer",
        emoji: "📝",
        tagline: "Learn Faster with AI Summaries",
        description: "Convert lengthy lecture notes, articles, or documents into concise summaries. Save hours of reading time.",
        welcomeMessage: "Welcome to Notes Summarizer! 📝 Paste your notes and let AI extract the key points. Study smarter, not harder!",
        tips: [
            "Paste clean text without formatting issues",
            "Use for lecture notes, research papers, or long articles",
            "Request bullet points for quick revision",
            "Ask for key takeaways and concepts"
        ],
        quickActions: [
            { label: "Quick Summary", action: "trigger:quick", icon: "⚡" },
            { label: "Bullet Points", action: "trigger:bullets", icon: "📌" },
            { label: "Key Concepts", action: "trigger:concepts", icon: "🎯" }
        ],
        faqs: [
            { question: "What's the maximum text length?", answer: "Free users can summarize up to 5000 words. Pro users get unlimited." },
            { question: "Can I summarize PDFs?", answer: "Copy and paste the text from your PDF. Direct PDF upload is coming soon." },
            { question: "How accurate are the summaries?", answer: "Our AI maintains 95%+ accuracy. Always review for critical content." }
        ],
        proactiveSuggestions: [
            "💡 Use bullet point summaries for last-minute revision",
            "🎯 Request key concepts and definitions for exam prep",
            "📚 Summarize each chapter and compile for a complete study guide"
        ],
        keywords: ["summarize", "notes", "study", "pdf", "lecture"]
    },

    // ---------------------- QUIZ GENERATOR ----------------------
    {
        path: "/ai-tools/quiz",
        pathPattern: /^\/ai-tools\/quiz/,
        name: "Quiz Generator",
        emoji: "❓",
        tagline: "Test Your Knowledge",
        description: "Generate quizzes from any topic or text. Perfect for self-assessment and exam preparation.",
        welcomeMessage: "Welcome to Quiz Generator! ❓ Test your knowledge on any topic. Enter a subject or paste text to create a quiz!",
        tips: [
            "Be specific about topics for better questions",
            "Mix difficulty levels for comprehensive practice",
            "Review explanations for wrong answers",
            "Retake quizzes until you score 100%"
        ],
        quickActions: [
            { label: "Quick Quiz", action: "trigger:quick-quiz", icon: "⚡" },
            { label: "From Notes", action: "trigger:from-notes", icon: "📝" },
            { label: "By Topic", action: "trigger:by-topic", icon: "📚" }
        ],
        faqs: [
            { question: "What question types are available?", answer: "MCQs, True/False, Fill-in-the-blanks, and Short Answer questions." },
            { question: "Can I create quizzes from my notes?", answer: "Yes! Paste your notes and AI will generate relevant questions." },
            { question: "How many questions can I generate?", answer: "Free: 10 questions per quiz. Pro: Unlimited questions." }
        ],
        proactiveSuggestions: [
            "💡 Create quizzes from your summarized notes for effective revision",
            "🎯 Use 'Hard' difficulty before exams to challenge yourself",
            "📊 Track your scores to see improvement over time"
        ],
        keywords: ["quiz", "test", "questions", "exam", "practice"]
    },

    // ---------------------- COURSES ----------------------
    {
        path: "/courses",
        pathPattern: /^\/courses/,
        name: "Courses",
        emoji: "📚",
        tagline: "Learn In-Demand Skills",
        description: "Free comprehensive courses on programming, data structures, web development, and more. Learn at your own pace with structured curriculum.",
        welcomeMessage: "Welcome to Flyeng Courses! 📚 Explore our free courses on Python, JavaScript, Java, DSA, and more. Where would you like to start?",
        tips: [
            "Complete courses in order for the best learning experience",
            "Practice coding along with each lesson",
            "Use the quiz feature to test your understanding",
            "Earn certificates upon course completion"
        ],
        quickActions: [
            { label: "Python Course", action: "navigate:/courses/python", icon: "🐍" },
            { label: "JavaScript", action: "navigate:/courses/javascript", icon: "🟨" },
            { label: "DSA Basics", action: "navigate:/courses/dsa", icon: "📊" },
            { label: "Web Development", action: "navigate:/courses/webdev", icon: "🌐" }
        ],
        faqs: [
            { question: "Are courses really free?", answer: "Yes! All our courses are completely free. We believe quality education should be accessible to everyone." },
            { question: "Do I get certificates?", answer: "Yes, complete a course and pass the final quiz to earn a shareable certificate." },
            { question: "How long are the courses?", answer: "Courses range from 4-20 hours depending on the topic. Learn at your own pace." }
        ],
        proactiveSuggestions: [
            "💡 Start with Python or JavaScript if you're new to programming",
            "🎯 Complete DSA course to ace technical interviews",
            "📚 Consistency is key - even 30 minutes daily makes a difference"
        ],
        keywords: ["courses", "learn", "python", "javascript", "dsa", "free"]
    },

    // ---------------------- INTERVIEW PREP ----------------------
    {
        path: "/interview",
        pathPattern: /^\/interview/,
        name: "Interview Prep",
        emoji: "🎯",
        tagline: "Ace Your Interviews",
        description: "Comprehensive interview preparation hub with mock interviews, question banks, and expert tips for technical and HR rounds.",
        welcomeMessage: "Welcome to Interview Prep! 🎯 I'm here to help you prepare for placements and interviews. From technical rounds to HR, we've got you covered!",
        tips: [
            "Practice 2-3 mock interviews weekly before placements",
            "Prepare STAR stories for behavioral questions",
            "Review common DSA patterns for technical rounds",
            "Research the company before every interview"
        ],
        quickActions: [
            { label: "Mock Interview", action: "navigate:/ai-tools/mock-interview", icon: "🎤" },
            { label: "DSA Practice", action: "navigate:/ai-tools/dsa-visualizer", icon: "📊" },
            { label: "Resume Check", action: "navigate:/ai-tools/resume-builder", icon: "📄" }
        ],
        faqs: [
            { question: "How should I prepare for technical interviews?", answer: "Focus on DSA (arrays, trees, graphs), system design basics, and your resume projects. Practice 2-3 problems daily." },
            { question: "What do HR rounds ask?", answer: "Common questions include: Tell me about yourself, Why this company, Strengths/Weaknesses, Conflict resolution, Future goals." },
            { question: "How many rounds are typically there?", answer: "Usually 3-4: Online test, Technical interview(s), HR round. Some companies add System Design or Manager rounds." }
        ],
        proactiveSuggestions: [
            "💡 The 'Tell me about yourself' answer should be 2 minutes max",
            "🎯 Prepare 5 STAR stories that cover different skills",
            "📝 Always have 2-3 questions ready to ask the interviewer"
        ],
        keywords: ["interview", "placement", "technical", "hr", "prepare"]
    },

    // ---------------------- DASHBOARD ----------------------
    {
        path: "/dashboard",
        pathPattern: /^\/dashboard/,
        name: "Dashboard",
        emoji: "📊",
        tagline: "Your Progress Hub",
        description: "Personal dashboard showing your activity, progress, saved items, and recommendations based on your learning journey.",
        welcomeMessage: "Welcome to your Dashboard! 📊 Here you can track your progress, view saved items, and see personalized recommendations. What would you like to check?",
        tips: [
            "Check daily for new recommendations",
            "Review your progress across different tools",
            "Set weekly goals and track completion",
            "Access your saved resumes and projects"
        ],
        quickActions: [
            { label: "My Resumes", action: "navigate:/dashboard/resumes", icon: "📄" },
            { label: "Interview History", action: "navigate:/dashboard/interviews", icon: "🎤" },
            { label: "Saved Items", action: "navigate:/dashboard/saved", icon: "💾" }
        ],
        faqs: [
            { question: "Where are my saved resumes?", answer: "All your resumes are saved under 'My Resumes' section. You can edit, download, or delete them anytime." },
            { question: "How is my progress calculated?", answer: "We track completed courses, practice sessions, quiz scores, and tool usage to show your overall progress." },
            { question: "Can I export my data?", answer: "Yes! Go to Settings > Export Data to download all your content." }
        ],
        proactiveSuggestions: [
            "💡 Set weekly goals to stay on track",
            "📊 Review your interview feedback to improve",
            "🎯 Check recommendations - they're personalized for you!"
        ],
        keywords: ["dashboard", "progress", "saved", "profile"]
    },

    // ---------------------- ABOUT PAGE ----------------------
    {
        path: "/about",
        name: "About Us",
        emoji: "ℹ️",
        tagline: "Our Story & Mission",
        description: "Learn about Flyeng Career's journey, mission, team, and vision to democratize career guidance for every Indian student.",
        welcomeMessage: "Welcome to About Us! ℹ️ Learn about our journey, mission, and the team behind Flyeng Career. We started in a dorm room with a dream!",
        tips: [
            "We're student-founded and student-focused",
            "Our mission is to make career guidance accessible to all",
            "Join our community of 100,000+ students"
        ],
        quickActions: [
            { label: "Our Story", action: "scroll:#story", icon: "📖" },
            { label: "Meet Team", action: "scroll:#team", icon: "👥" },
            { label: "Contact Us", action: "navigate:/contact", icon: "📧" }
        ],
        faqs: [
            { question: "Who founded Flyeng Career?", answer: "Flyeng Career was founded in 2022 by students who faced the same placement challenges and wanted to help fellow students." },
            { question: "Is this a startup?", answer: "Yes! We're a student-led EdTech startup focused on career guidance and placement preparation." },
            { question: "How can I join the team?", answer: "We're always looking for passionate people! Check our careers page or reach out via contact form." }
        ],
        proactiveSuggestions: [
            "💡 We love feedback - let us know how we can improve!",
            "🚀 Started in a dorm room, now helping 100,000+ students",
            "📧 Have suggestions? We'd love to hear from you!"
        ],
        keywords: ["about", "team", "mission", "story", "founding"]
    },

    // ---------------------- CONTACT PAGE ----------------------
    {
        path: "/contact",
        name: "Contact Us",
        emoji: "📧",
        tagline: "We'd Love to Hear From You",
        description: "Get in touch with the Flyeng Career team for support, feedback, partnerships, or any inquiries.",
        welcomeMessage: "Welcome to Contact! 📧 Have questions, feedback, or just want to say hi? We'd love to hear from you!",
        tips: [
            "Check FAQ before reaching out - your answer might be there",
            "Include relevant details in your message for faster response",
            "For urgent issues, mention 'Urgent' in the subject"
        ],
        quickActions: [
            { label: "Send Message", action: "scroll:#contact-form", icon: "📝" },
            { label: "Check FAQ", action: "navigate:/faq", icon: "❓" },
            { label: "Email Support", action: "trigger:email", icon: "📧" }
        ],
        faqs: [
            { question: "What's the response time?", answer: "We typically respond within 24-48 hours on business days." },
            { question: "Can I report bugs here?", answer: "Yes! Bug reports are highly welcome. Include screenshots and steps to reproduce." },
            { question: "Do you offer partnerships?", answer: "Yes! We partner with colleges and companies. Mention 'Partnership' in your inquiry." }
        ],
        proactiveSuggestions: [
            "💡 Got feature ideas? We implement popular suggestions!",
            "📧 For quick help, try our FAQ section first",
            "🤝 Interested in partnerships? We'd love to connect!"
        ],
        keywords: ["contact", "support", "help", "feedback", "email"]
    },

    // ---------------------- FAQ PAGE ----------------------
    {
        path: "/faq",
        name: "FAQ",
        emoji: "❓",
        tagline: "Frequently Asked Questions",
        description: "Find answers to commonly asked questions about Flyeng Career, pricing, features, and more.",
        welcomeMessage: "Welcome to FAQ! ❓ Find answers to common questions here. Can't find what you're looking for? Just ask me!",
        tips: [
            "Use the search to find specific topics",
            "Common questions are organized by category",
            "Still confused? Use the chatbot (that's me!) for help"
        ],
        quickActions: [
            { label: "Pricing FAQ", action: "scroll:#pricing-faq", icon: "💰" },
            { label: "Features FAQ", action: "scroll:#features-faq", icon: "✨" },
            { label: "Ask Question", action: "trigger:ask", icon: "🙋" }
        ],
        faqs: [
            { question: "Is Flyeng Career free?", answer: "Yes! We have a free tier with access to basic tools. Pro and Premium unlock additional features." },
            { question: "Can I cancel my subscription?", answer: "Absolutely! Cancel anytime - no questions asked. You'll retain access until the billing period ends." },
            { question: "Is my data secure?", answer: "100%. We use industry-standard encryption and never share your data with third parties." }
        ],
        proactiveSuggestions: [
            "💡 Most questions are answered in the FAQ - try searching!",
            "❓ Can't find your answer? I'm here to help!",
            "📧 For complex issues, reach out via Contact page"
        ],
        keywords: ["faq", "questions", "help", "answers"]
    }
];

// ========================================================
// UTILITY FUNCTIONS
// ========================================================

/**
 * Get page context based on current pathname
 */
export function getPageContext(pathname: string): PageContext | null {
    // Try exact match first
    const exactMatch = pageContexts.find(ctx => ctx.path === pathname);
    if (exactMatch) return exactMatch;

    // Try pattern match
    const patternMatch = pageContexts.find(ctx =>
        ctx.pathPattern && ctx.pathPattern.test(pathname)
    );
    if (patternMatch) return patternMatch;

    // Try prefix match (for nested routes)
    const prefixMatch = pageContexts.find(ctx =>
        pathname.startsWith(ctx.path) && ctx.path !== "/"
    );
    if (prefixMatch) return prefixMatch;

    // Default to homepage context
    return pageContexts.find(ctx => ctx.path === "/") || null;
}

/**
 * Get relevant tool details
 */
export function getToolDetails(toolName: string) {
    const toolMap: Record<string, keyof typeof aiToolsDetails> = {
        "resume": "resumeBuilder",
        "resume-builder": "resumeBuilder",
        "resume architect": "resumeBuilder",
        "mock-interview": "mockInterview",
        "interview": "mockInterview",
        "roadmap": "careerRoadmap",
        "cover-letter": "coverLetter",
        "dsa": "dsaVisualizer",
        "dsa-visualizer": "dsaVisualizer",
        "compiler": "compiler",
        "code-explainer": "codeExplainer",
        "project-ideas": "projectIdeas",
        "summarizer": "notesSummarizer",
        "quiz": "quizGenerator",
        "job-matcher": "jobMatcher"
    };

    const key = toolMap[toolName.toLowerCase()];
    return key ? aiToolsDetails[key] : null;
}

/**
 * Generate system prompt for AI with context
 */
export function generateSystemPrompt(pathname: string): string {
    const context = getPageContext(pathname);

    return `You are Flyeng AI 🚀, the intelligent assistant for Flyeng Career - India's leading AI-powered career platform for students.

=== ABOUT FLYENG CAREER ===
${websiteOverview.description}

Mission: ${websiteOverview.mission}

Key Features:
${websiteOverview.keyFeatures.map(f => `• ${f}`).join('\n')}

Pricing:
${websiteOverview.pricingPlans.map(p => `• ${p.name}: ${p.price} - ${p.features.join(', ')}`).join('\n')}

=== CURRENT CONTEXT ===
User is currently on: ${context?.name || 'Unknown Page'} (${pathname})
Page Description: ${context?.description || 'N/A'}
${context?.features ? `Available Features: ${context.features.join(', ')}` : ''}

=== YOUR ROLE ===
1. Be a knowledgeable, friendly guide for this specific page and the entire platform
2. Provide specific, actionable tips relevant to what the user is doing
3. Answer questions about Flyeng Career tools, features, and pricing
4. Help users navigate and use features effectively
5. For general career, placement, coding, or tech questions, use your AI knowledge
6. Suggest relevant tools and features proactively
7. Act as a supportive career mentor and friend

=== PERSONALITY ===
• Friendly, encouraging, and professional
• Use emojis strategically to be engaging (but not excessive)
• Keep responses concise but helpful (2-4 sentences for simple questions)
• Be proactive in suggesting relevant features
• Show genuine enthusiasm for helping students succeed
• Use Indian context when relevant (placements, CGPA, etc.)

=== RESPONSE GUIDELINES ===
• For page-specific questions: Use the context provided
• For general questions: Use your knowledge + relate to Flyeng tools when relevant
• For navigation requests: Provide clear paths/links
• For troubleshooting: Be helpful and suggest alternatives
• Always end complex responses with a follow-up question or suggestion

=== CURRENT PAGE TIPS (if relevant) ===
${context?.tips?.slice(0, 3).map(t => `• ${t}`).join('\n') || 'No specific tips'}

Remember: You're not just an assistant - you're a career co-pilot helping students achieve their dreams! 🎯`;
}

/**
 * Get proactive message based on page
 */
export function getProactiveMessage(pathname: string): string | null {
    const context = getPageContext(pathname);
    if (!context?.proactiveSuggestions?.length) return null;

    const randomIndex = Math.floor(Math.random() * context.proactiveSuggestions.length);
    return context.proactiveSuggestions[randomIndex];
}

/**
 * Get quick actions for current page
 */
export function getQuickActions(pathname: string): QuickAction[] {
    const context = getPageContext(pathname);
    return context?.quickActions || [];
}

/**
 * Search knowledge base for relevant info
 */
export function searchKnowledge(query: string): string[] {
    const results: string[] = [];
    const queryLower = query.toLowerCase();

    // Search tool details
    Object.values(aiToolsDetails).forEach(tool => {
        if (tool.name.toLowerCase().includes(queryLower) ||
            tool.description.toLowerCase().includes(queryLower)) {
            results.push(`${tool.emoji} ${tool.name}: ${tool.description}`);
        }
    });

    // Search page contexts
    pageContexts.forEach(ctx => {
        if (ctx.name.toLowerCase().includes(queryLower) ||
            ctx.description.toLowerCase().includes(queryLower)) {
            results.push(`${ctx.emoji} ${ctx.name}: ${ctx.tagline}`);
        }
    });

    return results.slice(0, 5);
}