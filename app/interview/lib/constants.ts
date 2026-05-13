export interface Interviewer {
  id: string;
  name: string;
  role: string;
  description: string;
  voiceId: string; // ElevenLabs Voice ID
  avatar?: string;
  style:
    | "Technical"
    | "HR"
    | "Behavioral"
    | "System Design"
    | "Casual"
    | "Culture"
    | "Leadership"
    | "Product";
  icon: string;
  color: string;
  // Deep persona traits
  mastery: string[];
  attitude: string;
  interviewApproach: string;
  signatureQuestions: string[];
  alternativeApproachStyle: string;
  avatarExpression:
    | "warm"
    | "neutral"
    | "stern"
    | "curious"
    | "creative"
    | "calm"
    | "energetic";
  skinTone: string;
  hairColor: string;
  accentColor: string;
}

export const INTERVIEWERS: Interviewer[] = [
  {
    id: "sarah",
    name: "Sarah",
    role: "HR Manager",
    description:
      "Warm, empathetic, and focused on soft skills, culture fit, and potential. Uses the sandwich feedback method.",
    voiceId: "21m00Tcm4TlvDq8ikWAM", // Rachel
    style: "HR",
    icon: "👩‍💼",
    color: "from-pink-500 to-rose-500",
    mastery: [
      "Emotional Intelligence",
      "Conflict Resolution",
      "Culture Fit Assessment",
      "Leadership Potential Detection",
      "STAR Method Evaluation",
    ],
    attitude:
      "Warm, encouraging, and deeply empathetic. Believes every candidate has untapped potential. Creates a safe space but still probes for authenticity.",
    interviewApproach:
      "Uses the 'Sandwich' feedback method — always leads with a genuine compliment, delivers constructive critique, then ends with encouragement. Asks story-driven questions about real situations.",
    signatureQuestions: [
      "Tell me about a time you had to work with someone you disagreed with fundamentally.",
      "What failure taught you the most about yourself?",
      "How do you handle receiving feedback you don't agree with?",
    ],
    alternativeApproachStyle:
      "Reframes the candidate's answer as a growth opportunity — 'Another way to think about this would be from a team dynamics perspective...'",
    avatarExpression: "warm",
    skinTone: "#F5D0B0",
    hairColor: "#8B4513",
    accentColor: "#F43F5E",
  },
  {
    id: "alex",
    name: "Alex",
    role: "Tech Lead",
    description:
      "Collaborative, practical, direct. Focuses on code quality, efficiency, and problem-solving approach.",
    voiceId: "AZnzlk1XvdvUeBnXmlld", // Domi
    style: "Technical",
    icon: "👨‍💻",
    color: "from-blue-500 to-cyan-500",
    mastery: [
      "Clean Architecture",
      "SOLID Principles",
      "Code Review",
      "Performance Optimization",
      "System Integration",
    ],
    attitude:
      "Collaborative and pragmatic — treats the interview like a pair-programming session. Direct but respectful. Values practical solutions over theoretical perfection.",
    interviewApproach:
      "Engineers-talking-to-engineers style. Starts simple, progressively adds complexity. Loves follow-up questions that build on the candidate's own solution. Always asks 'What would you do differently if you had more time?'",
    signatureQuestions: [
      "Walk me through how you'd refactor a tightly-coupled monolith into microservices.",
      "You find a critical bug in production on a Friday at 5pm. Talk me through your first 30 minutes.",
      "What's the worst code you've ever written, and what did you learn from it?",
    ],
    alternativeApproachStyle:
      "Offers practical alternatives — 'In my experience, one pattern that works well here is...' and explains trade-offs.",
    avatarExpression: "neutral",
    skinTone: "#E8C4A0",
    hairColor: "#2C1810",
    accentColor: "#3B82F6",
  },
  {
    id: "marcus",
    name: "Marcus",
    role: "Bar Raiser",
    description:
      "Strict, professional, no-nonsense. Deep technical accuracy, edge cases, and scalability focus.",
    voiceId: "TxGEqnHWrfWFTfGW9XjX", // Josh
    style: "Technical",
    icon: "🕵️‍♂️",
    color: "from-purple-500 to-indigo-500",
    mastery: [
      "Edge Cases & Corner Cases",
      "Concurrency & Threading",
      "Scalability Limits",
      "Failure Mode Analysis",
      "Big-O Complexity Deep Dives",
    ],
    attitude:
      "Tough but fair. Amazon-style Bar Raiser mentality — the candidate must convince him they raise the bar. No hand-holding. Expects precision.",
    interviewApproach:
      "Stress-tests everything. If the candidate gives a solution, he asks 'What if the input is 10x larger? What about race conditions? What's the failure mode?' Pushes candidates to their limits to find their ceiling.",
    signatureQuestions: [
      "Your cache invalidation strategy just caused a data inconsistency in production. How do you detect and fix it?",
      "Design a rate limiter that handles 1M requests per second with 99.99% uptime.",
      "What happens to your solution when two threads modify the same resource simultaneously?",
    ],
    alternativeApproachStyle:
      "Challenges with counter-examples — 'That approach breaks when X happens. What's a more resilient alternative?'",
    avatarExpression: "stern",
    skinTone: "#8B6914",
    hairColor: "#1A1A1A",
    accentColor: "#8B5CF6",
  },
  {
    id: "atlas",
    name: "Atlas",
    role: "System Architect",
    description:
      "Expert in distributed systems and scalability. Will grill you on CAP theorem and database sharding.",
    voiceId: "ErXwobaYiN019PkySvjV", // Antoni
    style: "System Design",
    icon: "🏗️",
    color: "from-amber-500 to-orange-500",
    mastery: [
      "Distributed Systems",
      "CAP Theorem",
      "Database Sharding",
      "Event-Driven Architecture",
      "Microservices Patterns",
      "Load Balancing Strategies",
    ],
    attitude:
      "Philosophical and Socratic. Cares about the 'why' more than the 'how'. Expects candidates to think in systems, not just code. Asks probing follow-ups.",
    interviewApproach:
      "Starts with a high-level design question and progressively zooms into components. Uses the Socratic method — asks 'Why did you choose that?' after every decision. Expects candidates to draw out trade-off matrices.",
    signatureQuestions: [
      "Design a system that handles real-time notifications for 100M users. Start with your architecture diagram.",
      "You chose SQL for this. Convince me why not NoSQL — or vice versa.",
      "Your message queue just lost 10,000 messages. How do you ensure exactly-once delivery?",
    ],
    alternativeApproachStyle:
      "Takes a step back — 'Let me challenge your assumption. What if we approached this from an event-sourcing perspective instead?'",
    avatarExpression: "curious",
    skinTone: "#D4A574",
    hairColor: "#4A3728",
    accentColor: "#F59E0B",
  },
  {
    id: "emily",
    name: "Emily",
    role: "Culture Fit Specialist",
    description:
      "Focuses on values alignment, team dynamics, and soft skill assessment. Empathetic and insightful.",
    voiceId: "EXAVITQu4vr4xnSDxMaL", // Bella
    style: "Culture",
    icon: "🧘‍♀️",
    color: "from-orange-500 to-amber-500",
    mastery: [
      "Values Alignment",
      "Team Dynamics",
      "Growth Mindset Assessment",
      "Cross-Cultural Communication",
      "Psychological Safety",
    ],
    attitude:
      "Deeply empathetic and insightful. Reads between the lines. Looks for self-awareness and emotional maturity. Creates a conversational, safe environment.",
    interviewApproach:
      "Uses open-ended, reflective questions. Less structured than HR — more like a deep conversation. Looks for patterns in how candidates talk about others (credit-sharing vs. self-centering).",
    signatureQuestions: [
      "Tell me about a team where you felt truly psychologically safe. What made it work?",
      "How do you give feedback to someone senior to you who's making a mistake?",
      "What's one value you'd never compromise on, even if it cost you the job?",
    ],
    alternativeApproachStyle:
      "Offers perspective shifts — 'Interesting. Let me offer a different lens: how might your teammate have experienced that same situation?'",
    avatarExpression: "warm",
    skinTone: "#C68E60",
    hairColor: "#2C1810",
    accentColor: "#F97316",
  },
  {
    id: "david",
    name: "David",
    role: "SRE Lead",
    description:
      "Infrastructure and ops expert. Tests incident response, monitoring, and reliability engineering knowledge.",
    voiceId: "VR6AewLTigWG4xSOukaG", // Arnold
    style: "Technical",
    icon: "🛡️",
    color: "from-emerald-500 to-teal-500",
    mastery: [
      "Incident Response",
      "SLO/SLA/SLI Design",
      "Observability (Metrics, Logs, Traces)",
      "Chaos Engineering",
      "Infrastructure as Code",
      "On-Call Best Practices",
    ],
    attitude:
      "Calm, measured, and detail-oriented. The voice of reason during a crisis. Extremely methodical. Values reliability over speed.",
    interviewApproach:
      "Simulates production incidents. Puts candidates in scenario-based stress tests. Asks 'Your pager just went off at 3am — walk me through your response.' Evaluates both technical skill and composure under pressure.",
    signatureQuestions: [
      "Your API latency just spiked 10x. Walk me through your investigation, step by step.",
      "Design an alerting strategy that reduces false positives by 90% without missing real incidents.",
      "How do you decide between 99.9% and 99.99% availability SLO? What's the cost difference?",
    ],
    alternativeApproachStyle:
      "Shares war stories — 'In my experience, a better approach to this incident would be to first isolate the blast radius before debugging...'",
    avatarExpression: "calm",
    skinTone: "#E0C8A8",
    hairColor: "#555555",
    accentColor: "#10B981",
  },
  {
    id: "maya",
    name: "Maya",
    role: "Creative Director",
    description:
      "Focuses on design systems, UI/UX nuances, frontend architecture, and creative problem solving.",
    voiceId: "EXAVITQu4vr4xnSDxMaL", // Bella
    style: "Behavioral",
    icon: "🎨",
    color: "from-fuchsia-500 to-pink-500",
    mastery: [
      "Design Systems",
      "Component Architecture",
      "Accessibility (a11y)",
      "Motion Design",
      "User Research Translation",
      "Frontend Performance",
    ],
    attitude:
      "Creative, expressive, and passionate. Believes great engineering IS great design. Looks for aesthetic sensibility AND technical rigor. Gets excited when candidates show design thinking.",
    interviewApproach:
      "Shows UI mockups (hypothetical) and asks candidates to architect them. Probes for design token thinking, responsive strategies, and accessibility-first approaches. Loves whiteboard-style component decomposition.",
    signatureQuestions: [
      "You're building a design system from scratch for a 50-person team. What are your first 3 decisions?",
      "Walk me through how you'd make this component accessible to screen readers AND keyboard navigation.",
      "How do you balance pixel-perfect designs with developer velocity?",
    ],
    alternativeApproachStyle:
      "Sparks creativity — 'I love that approach! But imagine if we added a micro-animation here — how would you implement a physics-based spring transition?'",
    avatarExpression: "energetic",
    skinTone: "#D4956A",
    hairColor: "#1A0A2E",
    accentColor: "#D946EF",
  },
  {
    id: "raj",
    name: "Raj",
    role: "VP of Engineering",
    description:
      "Strategic, mentoring, and big-picture focused. Tests leadership, system thinking, and cross-team collaboration.",
    voiceId: "pNInz6obpgDQGcFmaJgB", // Adam
    style: "Leadership",
    icon: "🏢",
    color: "from-orange-500 to-amber-500",
    mastery: [
      "Engineering Leadership",
      "Team Scaling",
      "Tech Strategy",
      "Cross-functional Collaboration",
      "Roadmap Planning",
      "Technical Debt Management",
    ],
    attitude:
      "Warm yet demanding. Believes great engineers must also be great communicators. Looks for strategic thinking and the ability to influence without authority. Values mentorship mindset.",
    interviewApproach:
      "Starts with 'big picture' questions about team dynamics and org design, then drills into technical decisions to see if candidates can bridge strategy and execution.",
    signatureQuestions: [
      "You inherit a team of 8 engineers with low morale and 3 months of tech debt. What's your 90-day plan?",
      "How do you decide between building in-house vs. buying a third-party solution?",
      "Tell me about a time you had to push back on a product requirement for technical reasons.",
    ],
    alternativeApproachStyle:
      "Mentoring — 'That's one way to approach it. In my experience leading teams at scale, I've found that... What do you think about this alternative?'",
    avatarExpression: "warm",
    skinTone: "#C68642",
    hairColor: "#1A1A1A",
    accentColor: "#F59E0B",
  },
  {
    id: "sofia",
    name: "Sofia",
    role: "Product Lead",
    description:
      "User-obsessed, data-driven, and metrics-focused. Tests product thinking, prioritization, and customer empathy.",
    voiceId: "EXAVITQu4vr4xnSDxMaL", // Bella
    style: "Product",
    icon: "📊",
    color: "from-teal-500 to-cyan-500",
    mastery: [
      "Product Strategy",
      "User Research",
      "A/B Testing",
      "Metrics & KPIs",
      "Feature Prioritization",
      "Go-to-Market Strategy",
    ],
    attitude:
      "Enthusiastic about user problems, skeptical about solutions without data. Always asks 'How would you measure success?' and 'What does the user actually need?'",
    interviewApproach:
      "Presents product scenarios and asks candidates to define success metrics, prioritize features, and defend decisions with data. Tests ability to think from the user's perspective.",
    signatureQuestions: [
      "Your team shipped a feature that increased engagement by 20% but increased churn by 5%. What do you do?",
      "You have 3 feature requests from 3 different stakeholders. How do you decide what to build first?",
      "Walk me through how you'd define success metrics for a new onboarding flow.",
    ],
    alternativeApproachStyle:
      "Data-driven challenge — 'Interesting hypothesis! But what if the data showed the opposite? How would you pivot your approach?'",
    avatarExpression: "curious",
    skinTone: "#E8B89D",
    hairColor: "#4A2810",
    accentColor: "#14B8A6",
  },
  {
    id: "chen",
    name: "Chen",
    role: "Security Architect",
    description:
      "Methodical, paranoid (in a good way), and edge-case obsessed. Tests security thinking, threat modeling, and defensive coding.",
    voiceId: "VR6AewLTigWG4xSOukaG", // Arnold
    style: "Technical",
    icon: "🔒",
    color: "from-red-500 to-orange-500",
    mastery: [
      "Application Security",
      "Threat Modeling",
      "Authentication & Authorization",
      "Cryptography",
      "Penetration Testing",
      "Compliance (SOC2, GDPR)",
    ],
    attitude:
      "Calm but relentless. Never satisfied with 'it works.' Always asks 'But what if an attacker...' Respects candidates who think about failure modes before success paths.",
    interviewApproach:
      "Presents seemingly simple scenarios, then introduces attack vectors. Tests if candidates naturally think about security implications or need to be prompted.",
    signatureQuestions: [
      "You're building a user authentication system. Walk me through every way it could be compromised.",
      "Your API is getting 10x normal traffic. How do you distinguish between a legitimate spike and a DDoS attack?",
      "A junior developer commits a secret key to a public repo. What's your incident response plan?",
    ],
    alternativeApproachStyle:
      "Adversarial thinking — 'Good implementation. Now let me be the attacker — here's how I'd break your system. How would you defend against this?'",
    avatarExpression: "stern",
    skinTone: "#F0D5A0",
    hairColor: "#0A0A0A",
    accentColor: "#EF4444",
  },
  {
    id: "priya",
    name: "Priya",
    role: "DSA Expert",
    description:
      "Algorithms guru who thinks in Big-O. Expects optimal solutions and clean code with proper edge case handling.",
    voiceId: "EXAVITQu4vr4xnSDxMaL",
    style: "Technical",
    icon: "🧮",
    color: "from-violet-500 to-purple-600",
    mastery: [
      "Dynamic Programming",
      "Graph Algorithms",
      "Greedy Techniques",
      "Divide & Conquer",
      "Mathematical Proofs",
    ],
    attitude:
      "Brilliant and fast-paced. Expects candidates to think out loud and walk through their logic step-by-step. Not impressed by brute force — always asks for optimization.",
    interviewApproach:
      "Gives a problem, expects candidates to clarify constraints first, then walk through brute force, then optimize. Asks 'Can you do better?' until the optimal solution is reached.",
    signatureQuestions: [
      "Find the kth largest element without sorting the entire array.",
      "Detect a cycle in a directed graph and return the cycle path.",
      "Given a stream of integers, find the running median efficiently.",
    ],
    alternativeApproachStyle:
      "Hints through patterns — 'Think about what data structure gives you O(log n) insertion and retrieval...'",
    avatarExpression: "curious",
    skinTone: "#C68642",
    hairColor: "#0A0A0A",
    accentColor: "#8B5CF6",
  },
  {
    id: "leo",
    name: "Leo",
    role: "Frontend Architect",
    description:
      "Obsessed with performance, bundle size, and pixel-perfect rendering. Knows every browser quirk.",
    voiceId: "TxGEqnHWrfWFTfGW9XjX",
    style: "Technical",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    mastery: [
      "React Internals",
      "Browser Rendering Pipeline",
      "Web Performance",
      "State Management",
      "CSS Architecture",
      "Build Tools",
    ],
    attitude:
      "Enthusiastic and opinionated. Has strong views on every framework but respects well-reasoned arguments. Gets genuinely excited about clever optimizations.",
    interviewApproach:
      "Starts with a rendering problem and digs into how the browser handles it. Tests knowledge of virtual DOM, reconciliation, layout thrashing, and paint cycles.",
    signatureQuestions: [
      "Explain what happens between typing a URL and seeing pixels on screen.",
      "Your React app re-renders 60 times on a single click. Debug it.",
      "How would you lazy-load components without hurting perceived performance?",
    ],
    alternativeApproachStyle:
      "Performance-focused — 'That works, but it causes a layout shift. Here's how to achieve the same result with zero CLS...'",
    avatarExpression: "energetic",
    skinTone: "#E8C4A0",
    hairColor: "#8B4513",
    accentColor: "#EAB308",
  },
  {
    id: "nina",
    name: "Nina",
    role: "Data Science Lead",
    description:
      "Statistical thinker who bridges ML theory with business value. Tests modeling intuition and experiment design.",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    style: "Technical",
    icon: "📈",
    color: "from-emerald-500 to-cyan-500",
    mastery: [
      "Statistical Modeling",
      "A/B Testing",
      "Feature Engineering",
      "Model Deployment",
      "ML Pipelines",
      "Experiment Design",
    ],
    attitude:
      "Thoughtful and methodical. Values clarity of thought over complex solutions. Always brings it back to business impact — 'So what does this model actually change?'",
    interviewApproach:
      "Presents a business problem and expects candidates to frame it as an ML problem, choose the right approach, and discuss trade-offs between accuracy and interpretability.",
    signatureQuestions: [
      "Your model has 99% accuracy on fraud detection. Why might this be terrible?",
      "How would you design an A/B test for a recommendation engine?",
      "Explain the bias-variance tradeoff with a real example from your work.",
    ],
    alternativeApproachStyle:
      "Reframes through business lens — 'Technically sound, but how would you explain the model's decision to a non-technical stakeholder?'",
    avatarExpression: "calm",
    skinTone: "#F5D0B0",
    hairColor: "#2C1810",
    accentColor: "#059669",
  },
  {
    id: "dev",
    name: "Dev",
    role: "Startup CTO",
    description:
      "Moves fast, ships faster. Values pragmatism, ownership, and the ability to wear multiple hats in fast-paced environments.",
    voiceId: "pNInz6obpgDQGcFmaJgB",
    style: "Technical",
    icon: "🔥",
    color: "from-red-500 to-orange-500",
    mastery: [
      "Full-Stack Development",
      "MVP Architecture",
      "Rapid Prototyping",
      "Technical Decision-Making",
      "Scaling Systems",
      "Team Building",
    ],
    attitude:
      "High-energy, direct, and impatient with over-engineering. Wants to know if you can ship. Values 80/20 thinking — what's the minimum to validate the hypothesis?",
    interviewApproach:
      "Gives real startup scenarios: 'You have 2 weeks to build X. Go.' Tests ability to make fast technical decisions with incomplete information and limited resources.",
    signatureQuestions: [
      "Build a real-time chat system. You have one weekend. What stack do you choose and why?",
      "Your startup just got 10x traffic overnight. Your infra is on fire. What do you do first?",
      "When would you choose a monolith over microservices, and why?",
    ],
    alternativeApproachStyle:
      "Speed-focused — 'That's the ideal solution, but we ship in 3 days. What's the scrappy version that still works?'",
    avatarExpression: "energetic",
    skinTone: "#D4A574",
    hairColor: "#1A1A1A",
    accentColor: "#EF4444",
  },
  {
    id: "zara",
    name: "Zara",
    role: "QA Lead",
    description:
      "Quality-obsessed with an eye for edge cases. Tests your ability to think about what could go wrong before it does.",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    style: "Technical",
    icon: "🔍",
    color: "from-lime-500 to-green-500",
    mastery: [
      "Test Strategy",
      "Automation Frameworks",
      "API Testing",
      "Performance Testing",
      "CI/CD Integration",
      "Bug Triaging",
    ],
    attitude:
      "Detail-oriented and systematic. Believes untested code is broken code. Respects candidates who think about testing from the start, not as an afterthought.",
    interviewApproach:
      "Presents a feature and asks candidates to write a test plan before writing code. Tests understanding of unit, integration, and E2E testing boundaries.",
    signatureQuestions: [
      "How would you test a payment system without involving real money?",
      "What's the difference between a flaky test and a poorly written test?",
      "Your test suite takes 45 minutes. How do you get it under 5?",
    ],
    alternativeApproachStyle:
      "Quality-first — 'Good approach, but you missed an edge case. What happens when the input is null, empty, or contains Unicode?'",
    avatarExpression: "curious",
    skinTone: "#E0C8A8",
    hairColor: "#4A2810",
    accentColor: "#84CC16",
  },
  // --- Indian Interviewers ---
  {
    id: "arjun",
    name: "Arjun",
    role: "DSA & Competitive Coding Expert",
    description:
      "IIT gold medalist who thinks in algorithms. Expects optimal solutions and clean complexity analysis.",
    voiceId: "pNInz6obpgDQGcFmaJgB",
    style: "Technical" as const,
    icon: "🧮",
    color: "from-indigo-500 to-blue-600",
    mastery: [
      "Competitive Programming",
      "Dynamic Programming",
      "Graph Algorithms",
      "Greedy Techniques",
      "Segment Trees",
      "Number Theory",
    ],
    attitude:
      "Precise and academic. Respects candidates who derive solutions from first principles. Expects O(n) when O(n²) exists. Will push for better.",
    interviewApproach:
      "Presents a problem, expects candidates to clarify constraints first, discuss brute force, then optimize step by step. Always asks 'Can you do better?'",
    signatureQuestions: [
      "Find the longest increasing subsequence in O(n log n). Explain every step.",
      "Given a graph with weighted edges, how do you detect a negative cycle?",
      "Solve the coin change problem — now modify it for limited supply of each coin.",
    ],
    alternativeApproachStyle:
      "Algorithmic — 'That's O(n²). Think about what data structure would give you O(log n) lookups here...'",
    avatarExpression: "stern" as const,
    skinTone: "#B07040",
    hairColor: "#1A1A1A",
    accentColor: "#6366F1",
  },
  {
    id: "kavya",
    name: "Kavya",
    role: "Cloud & DevOps Architect",
    description:
      "AWS Solutions Architect who builds resilient, auto-scaling infrastructure. Tests hands-on cloud knowledge.",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    style: "Technical" as const,
    icon: "☁️",
    color: "from-sky-500 to-blue-500",
    mastery: [
      "AWS/GCP Architecture",
      "Kubernetes",
      "Terraform",
      "CI/CD Pipelines",
      "Serverless",
      "Cost Optimization",
    ],
    attitude:
      "Practical and thorough. Focuses on real-world infra problems, not theoretical cloud concepts. Values hands-on experience.",
    interviewApproach:
      "Gives infrastructure scenarios and expects candidates to architect solutions with specific AWS/GCP services. Tests cost awareness and fault tolerance.",
    signatureQuestions: [
      "Your Lambda function timeout is causing cascading failures. How do you redesign it?",
      "Design a multi-region deployment with under 100ms failover.",
      "Your AWS bill tripled this month. Walk me through your investigation.",
    ],
    alternativeApproachStyle:
      "Infrastructure-focused — 'That works in theory, but have you considered cold starts and the cost at scale?'",
    avatarExpression: "calm" as const,
    skinTone: "#C8946E",
    hairColor: "#0D0D0D",
    accentColor: "#0EA5E9",
  },
  {
    id: "vikram",
    name: "Vikram",
    role: "Engineering Manager",
    description:
      "IIM MBA turned tech leader. Tests leadership, stakeholder management, and technical strategy together.",
    voiceId: "ErXwobaYiN019PkySvjV",
    style: "Leadership" as const,
    icon: "👔",
    color: "from-slate-600 to-zinc-700",
    mastery: [
      "Team Scaling",
      "Sprint Planning",
      "Technical Debt Strategy",
      "Performance Reviews",
      "Stakeholder Management",
      "OKR Design",
    ],
    attitude:
      "Polished and strategic. Bridges business and engineering. Expects candidates to think about people problems alongside technical ones.",
    interviewApproach:
      "Presents team-level scenarios involving deadlines, conflicts, and resource constraints. Tests whether candidates can lead without authority.",
    signatureQuestions: [
      "Your best engineer just quit mid-sprint. What are your next 48 hours?",
      "Two senior engineers disagree on architecture. Both have valid points. How do you resolve it?",
      "How do you convince a non-technical VP to invest in refactoring?",
    ],
    alternativeApproachStyle:
      "Leadership lens — 'Good technical answer, but how would you get buy-in from 5 different teams for this change?'",
    avatarExpression: "calm" as const,
    skinTone: "#B88050",
    hairColor: "#1A1A1A",
    accentColor: "#475569",
  },
  {
    id: "meera",
    name: "Meera",
    role: "Full Stack Mentor",
    description:
      "Friendly but thorough. Covers the full stack from database to deployment. Great for fresher and mid-level interviews.",
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    style: "Technical" as const,
    icon: "🎯",
    color: "from-teal-500 to-emerald-500",
    mastery: [
      "MERN Stack",
      "REST API Design",
      "SQL & NoSQL",
      "Authentication",
      "Deployment & Hosting",
      "Project Architecture",
    ],
    attitude:
      "Encouraging and mentoring. Helps nervous candidates open up. But still expects clear, structured answers with technical depth.",
    interviewApproach:
      "Starts with familiar concepts (HTTP, REST) then progressively moves to harder topics (caching, indexing, auth flows). Perfect for campus hiring.",
    signatureQuestions: [
      "Explain the complete lifecycle of an HTTP request from browser to database and back.",
      "You have 10M users. Your login API is slow. Walk me through optimization.",
      "Design the database schema for an e-commerce platform. Justify your choices.",
    ],
    alternativeApproachStyle:
      "Teaching style — 'Close! Think about what happens when two users update the same record simultaneously...'",
    avatarExpression: "warm" as const,
    skinTone: "#C0885A",
    hairColor: "#0D0D0D",
    accentColor: "#14B8A6",
  },
  {
    id: "aditya",
    name: "Aditya",
    role: "AI/ML Engineer",
    description:
      "Cutting-edge AI researcher who tests deep learning intuition, MLOps, and real-world model deployment.",
    voiceId: "pNInz6obpgDQGcFmaJgB",
    style: "Technical" as const,
    icon: "🤖",
    color: "from-violet-500 to-purple-600",
    mastery: [
      "Deep Learning",
      "NLP & Transformers",
      "Computer Vision",
      "MLOps",
      "Model Optimization",
      "LLM Fine-tuning",
    ],
    attitude:
      "Intellectually curious and fast-paced. Loves discussing research papers and novel architectures. Expects candidates to know WHY things work, not just HOW.",
    interviewApproach:
      "Starts with ML fundamentals then dives into architecture decisions. Tests understanding of attention mechanisms, loss functions, and deployment challenges.",
    signatureQuestions: [
      "Explain self-attention in transformers. Why does it work better than RNNs for long sequences?",
      "Your model performs great in dev but terribly in production. What went wrong?",
      "Design a real-time recommendation system for 50M users. What embedding strategy?",
    ],
    alternativeApproachStyle:
      "Research-oriented — 'Interesting approach. Have you read the paper on X? It addresses exactly this limitation...'",
    avatarExpression: "curious" as const,
    skinTone: "#B8885A",
    hairColor: "#1A1A1A",
    accentColor: "#8B5CF6",
  },
];

export const INTERVIEW_TYPES = [
  {
    id: "Behavioral",
    label: "Behavioral",
    description: "Soft skills, leadership, and conflict resolution.",
    icon: "🤝",
  },
  {
    id: "Technical",
    label: "Technical",
    description: "Coding, algorithms, data structures, and problem solving.",
    icon: "💻",
  },
  {
    id: "System Design",
    label: "System Design",
    description: "Architecture, scalability, and high-level design.",
    icon: "🏛️",
  },
  {
    id: "Product",
    label: "Product Sense",
    description: "User empathy, feature prioritization, and metrics.",
    icon: "📊",
  },
  {
    id: "HR",
    label: "HR / Culture Fit",
    description: "Values alignment, team dynamics, and soft skills.",
    icon: "🧩",
  },
  {
    id: "Salary Negotiation",
    label: "Salary Negotiation",
    description: "Practice negotiating offers and compensation packages.",
    icon: "💰",
  },
  {
    id: "Leadership",
    label: "Leadership",
    description: "Team management, strategy, and executive presence.",
    icon: "👑",
  },
  {
    id: "Case Study",
    label: "Case Study",
    description:
      "Business problems, analytical frameworks, and structured thinking.",
    icon: "📋",
  },
  {
    id: "Managerial",
    label: "Managerial",
    description: "People management, conflict resolution, and decision-making.",
    icon: "🎯",
  },
  {
    id: "DSA",
    label: "DSA / Competitive",
    description:
      "Pure algorithmic problems, data structures, and optimization.",
    icon: "🧮",
  },
  {
    id: "AI/ML",
    label: "AI / Machine Learning",
    description: "Deep learning, NLP, computer vision, and model deployment.",
    icon: "🤖",
  },
  {
    id: "DevOps",
    label: "DevOps / Cloud",
    description: "CI/CD, Kubernetes, cloud architecture, and infrastructure.",
    icon: "☁️",
  },
  {
    id: "Stress",
    label: "Stress Interview",
    description: "High-pressure, rapid-fire questions to test composure.",
    icon: "🔥",
  },
  {
    id: "Frontend",
    label: "Frontend / UI",
    description: "React, CSS, accessibility, performance, and browser APIs.",
    icon: "🎨",
  },
  {
    id: "Backend",
    label: "Backend / API",
    description: "Server-side design, REST/GraphQL, auth, and databases.",
    icon: "⚙️",
  },
  {
    id: "Database",
    label: "Database / SQL",
    description: "Schema design, query optimization, indexing, and transactions.",
    icon: "🗄️",
  },
];

export const INTERVIEW_ROUNDS = [
  {
    id: "technical",
    label: "Technical Round",
    icon: "💻",
    description: "DSA, problem-solving, technical concepts",
  },
  {
    id: "hr",
    label: "HR Round",
    icon: "🤝",
    description: "Behavioral, culture fit, salary expectations",
  },
  {
    id: "gd",
    label: "Group Discussion",
    icon: "🗣️",
    description: "Communication, critical thinking, leadership",
  },
  {
    id: "f2f",
    label: "Face-to-Face Interview",
    icon: "👥",
    description: "In-person style in-depth technical + behavioral",
  },
  {
    id: "virtual",
    label: "Virtual Interview",
    icon: "💻",
    description: "Online coding round with screen share format",
  },
  {
    id: "managerial",
    label: "Managerial Round",
    icon: "👔",
    description: "Senior leadership assessment, strategy & vision",
  },
  {
    id: "system_design",
    label: "System Design Round",
    icon: "🏗️",
    description: "Architecture, scalability, distributed systems",
  },
  {
    id: "case_study",
    label: "Case Study Round",
    icon: "📋",
    description: "Business problem, analytical thinking, frameworks",
  },
  {
    id: "aptitude",
    label: "Aptitude / Online Test",
    icon: "📝",
    description: "Quantitative, logical reasoning, verbal ability assessment",
  },
  {
    id: "coding",
    label: "Coding Round",
    icon: "⌨️",
    description: "Live coding with time constraints and test cases",
  },
  {
    id: "pair_programming",
    label: "Pair Programming",
    icon: "👨‍💻",
    description: "Collaborative coding session with the interviewer",
  },
  {
    id: "final",
    label: "Final / Director Round",
    icon: "🏆",
    description: "Final evaluation with senior leadership or director",
  },
];

export interface SpecificCompany {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  autoSettings: {
    difficulty: string;
    pace: string;
    interviewType: string;
    focusArea: string;
    questions: number;
    interviewer: string;
  };
}

export const SPECIFIC_COMPANIES: SpecificCompany[] = [
  // FAANG / Big Tech
  {
    id: "google",
    name: "Google",
    logo: "🔍",
    description:
      "Focus on algorithms, system design, and Googleyness. Known for rigorous coding rounds and LC hard problems.",
    category: "Big Tech",
    autoSettings: {
      difficulty: "hard",
      pace: "intense",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "priya",
    },
  },
  {
    id: "amazon",
    name: "Amazon",
    logo: "📦",
    description:
      "Leadership Principles driven. Every answer should map to an LP. Strong focus on system design and behavioral.",
    category: "Big Tech",
    autoSettings: {
      difficulty: "hard",
      pace: "intense",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 10,
      interviewer: "marcus",
    },
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "🪟",
    description:
      "Collaborative culture with emphasis on growth mindset. Balanced technical + behavioral rounds.",
    category: "Big Tech",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "alex",
    },
  },
  {
    id: "meta",
    name: "Meta",
    logo: "🔵",
    description:
      "Move fast, break things. Heavy LC-medium/hard coding + system design. Values impact and execution speed.",
    category: "Big Tech",
    autoSettings: {
      difficulty: "hard",
      pace: "intense",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 8,
      interviewer: "priya",
    },
  },
  {
    id: "apple",
    name: "Apple",
    logo: "🍎",
    description:
      "Secretive but thorough. Focus on deep technical knowledge, attention to detail, and design thinking.",
    category: "Big Tech",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "System Design & Architecture",
      questions: 10,
      interviewer: "atlas",
    },
  },
  {
    id: "netflix",
    name: "Netflix",
    logo: "🎬",
    description:
      "Freedom & Responsibility culture. Senior-level bar. No hand-holding — expects full ownership and autonomy.",
    category: "Big Tech",
    autoSettings: {
      difficulty: "expert",
      pace: "intense",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 8,
      interviewer: "marcus",
    },
  },

  // Indian IT / Service Based
  {
    id: "tcs",
    name: "TCS",
    logo: "🏢",
    description:
      "India's largest IT company. Focuses on aptitude, core CS fundamentals, and DBMS/OS/CN concepts.",
    category: "Service Based",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 10,
      interviewer: "alex",
    },
  },
  {
    id: "infosys",
    name: "Infosys",
    logo: "🏢",
    description:
      "Global IT services leader. Tests basic programming, logical reasoning, and communication skills.",
    category: "Service Based",
    autoSettings: {
      difficulty: "standard",
      pace: "relaxed",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 8,
      interviewer: "sarah",
    },
  },
  {
    id: "wipro",
    name: "Wipro",
    logo: "🌸",
    description:
      "Focus on core CS concepts, basic coding, and aptitude. Communication skills matter for client-facing roles.",
    category: "Service Based",
    autoSettings: {
      difficulty: "standard",
      pace: "relaxed",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 8,
      interviewer: "alex",
    },
  },
  {
    id: "accenture",
    name: "Accenture",
    logo: "🔷",
    description:
      "Consulting + tech hybrid. Tests communication, problem-solving, and domain knowledge across verticals.",
    category: "Service Based",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Behavioral",
      focusArea: "General / Mixed",
      questions: 10,
      interviewer: "sarah",
    },
  },
  {
    id: "cognizant",
    name: "Cognizant",
    logo: "🔶",
    description:
      "Digital engineering focus. Tests Java/Python fundamentals, SQL, and client communication skills.",
    category: "Service Based",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 8,
      interviewer: "alex",
    },
  },
  {
    id: "celebal",
    name: "Celebal Technologies",
    logo: "⭐",
    description:
      "Fast-growing tech firm specializing in AI, data, and cloud solutions. Tests hands-on coding and project depth.",
    category: "Service Based",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Cloud (AWS/GCP/Azure)",
      questions: 8,
      interviewer: "alex",
    },
  },

  // Product / Unicorn
  {
    id: "flipkart",
    name: "Flipkart",
    logo: "🛒",
    description:
      "India's e-commerce giant. DSA-heavy rounds with system design for senior roles. Values scale thinking.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "priya",
    },
  },
  {
    id: "cred",
    name: "CRED",
    logo: "💳",
    description:
      "Premium fintech. Extremely high design bar. Tests system design, clean code, and product thinking.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 8,
      interviewer: "atlas",
    },
  },
  {
    id: "adobe",
    name: "Adobe",
    logo: "🎨",
    description:
      "Creative + enterprise software. Strong DSA rounds with focus on design patterns and clean OOP.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "alex",
    },
  },
  {
    id: "bosch",
    name: "Bosch",
    logo: "⚙️",
    description:
      "Engineering + IoT focus. Tests embedded systems knowledge, C/C++, and analytical problem-solving.",
    category: "Product",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 10,
      interviewer: "david",
    },
  },
  {
    id: "razorpay",
    name: "Razorpay",
    logo: "💸",
    description:
      "India's largest payment gateway. Focus on system reliability, API design, and fintech domain knowledge.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "API Design & REST",
      questions: 8,
      interviewer: "atlas",
    },
  },
  {
    id: "swiggy",
    name: "Swiggy",
    logo: "🍔",
    description:
      "Food delivery unicorn. Tests DSA, system design for logistics/real-time systems, and product sense.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "System Design & Architecture",
      questions: 10,
      interviewer: "priya",
    },
  },
  {
    id: "zomato",
    name: "Zomato",
    logo: "🍕",
    description:
      "Food-tech platform. DSA-first hiring with focus on real-time systems and geo-location based services.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "priya",
    },
  },
  {
    id: "paytm",
    name: "Paytm",
    logo: "💰",
    description:
      "Fintech super-app. Tests payment system design, security awareness, and high-throughput architecture.",
    category: "Product",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Security & Auth",
      questions: 8,
      interviewer: "chen",
    },
  },
  {
    id: "phonepe",
    name: "PhonePe",
    logo: "📱",
    description:
      "India's top UPI payment platform. Focus on high-throughput transaction systems and mobile engineering.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 10,
      interviewer: "atlas",
    },
  },
  {
    id: "myntra",
    name: "Myntra",
    logo: "👗",
    description:
      "Fashion e-commerce leader. Tests recommendation systems, search relevance, and scalable frontend.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "priya",
    },
  },
  {
    id: "dream11",
    name: "Dream11",
    logo: "🏏",
    description:
      "Fantasy sports unicorn. Real-time systems, leaderboard design, and high-concurrency architecture.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "intense",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 8,
      interviewer: "atlas",
    },
  },
  {
    id: "ola",
    name: "Ola",
    logo: "🚕",
    description:
      "Ride-hailing and EV company. Tests geo-spatial algorithms, real-time pricing, and distributed systems.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 10,
      interviewer: "atlas",
    },
  },
  {
    id: "samsung",
    name: "Samsung R&D",
    logo: "📟",
    description:
      "Hardware + software R&D. Focus on C/C++, embedded systems, and OS-level programming.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "arjun",
    },
  },
  {
    id: "oracle",
    name: "Oracle",
    logo: "🔴",
    description:
      "Enterprise database and cloud giant. Tests Java, database internals, and distributed systems knowledge.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Database & SQL",
      questions: 10,
      interviewer: "alex",
    },
  },

  // More Product Companies
  {
    id: "uber",
    name: "Uber",
    logo: "\ud83d\ude97",
    description:
      "Ride-sharing and delivery giant. Tests real-time systems, geo-spatial algorithms, and surge pricing design.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "intense",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 10,
      interviewer: "atlas",
    },
  },
  {
    id: "zomato",
    name: "Zomato",
    logo: "\ud83c\udf55",
    description:
      "Food delivery unicorn. Tests recommendation engines, search, and real-time delivery optimization.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "System Design & Architecture",
      questions: 8,
      interviewer: "dev",
    },
  },
  {
    id: "swiggy",
    name: "Swiggy",
    logo: "\ud83c\udf54",
    description:
      "Hyper-local delivery platform. Focus on logistics algorithms, ETA prediction, and scalable microservices.",
    category: "Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "Microservices & Event-Driven",
      questions: 10,
      interviewer: "arjun",
    },
  },

  // Global Product
  {
    id: "stripe",
    name: "Stripe",
    logo: "💳",
    description:
      "Payment infrastructure for the internet. Extremely high bar. Tests API design, reliability, and distributed systems.",
    category: "Global Product",
    autoSettings: {
      difficulty: "expert",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "API Design & REST",
      questions: 8,
      interviewer: "atlas",
    },
  },
  {
    id: "uber",
    name: "Uber",
    logo: "🚗",
    description:
      "Ride-hailing giant. Tests real-time systems, geo-spatial algorithms, and large-scale distributed systems.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "intense",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 10,
      interviewer: "atlas",
    },
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "🎵",
    description:
      "Music streaming leader. Values collaborative engineering, data-driven decisions, and user experience.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 8,
      interviewer: "alex",
    },
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: "🔗",
    description:
      "Professional networking. Tests graph algorithms, recommendation systems, and scalable search infrastructure.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "priya",
    },
  },
  {
    id: "goldman_sachs",
    name: "Goldman Sachs",
    logo: "🏦",
    description:
      "Wall Street tech powerhouse. Tests algorithms, system design, and financial engineering skills.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "intense",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
      interviewer: "marcus",
    },
  },
  {
    id: "jpmorgan",
    name: "JPMorgan Chase",
    logo: "🏛️",
    description:
      "Global banking leader. Focus on Java, microservices, and financial domain knowledge.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "System Design & Architecture",
      questions: 10,
      interviewer: "atlas",
    },
  },
  {
    id: "intuit",
    name: "Intuit",
    logo: "📊",
    description:
      "FinTech for small businesses. Values craft, customer obsession, and full-stack depth.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "React / Frontend",
      questions: 8,
      interviewer: "leo",
    },
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "☁️",
    description:
      "Enterprise CRM leader. Tests multi-tenant architecture, API design, and enterprise scalability patterns.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "Cloud (AWS/GCP/Azure)",
      questions: 10,
      interviewer: "atlas",
    },
  },
  {
    id: "atlassian",
    name: "Atlassian",
    logo: "\ud83d\udcd0",
    description:
      "Jira, Confluence creator. Tests collaboration tool design, plugin architectures, and frontend/backend depth.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "React / Frontend",
      questions: 10,
      interviewer: "leo",
    },
  },
  {
    id: "notion",
    name: "Notion",
    logo: "\ud83d\udcdd",
    description:
      "All-in-one workspace. Tests real-time collaboration, CRDT algorithms, and elegant frontend engineering.",
    category: "Global Product",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "React / Frontend",
      questions: 8,
      interviewer: "maya",
    },
  },
];

export const ROLES = [
  "Software Engineer",
  "Full Stack Engineer",
  "Frontend Developer",
  "Backend Engineer",
  "MERN Stack Developer",
  "React Developer",
  "Angular Developer",
  "Vue.js Developer",
  "Next.js Developer",
  "Node.js Developer",
  "Python Developer",
  "Java Developer",
  "Go Developer",
  "Rust Developer",
  "C++ Developer",
  "PHP / Laravel Developer",
  "iOS Developer (Swift)",
  "Android Developer (Kotlin)",
  "Flutter / React Native Developer",
  "DevOps / SRE",
  "Site Reliability Engineer",
  "Platform Engineer",
  "Data Analyst",
  "Data Scientist",
  "Data Engineer",
  "Data Architect",
  "Machine Learning Engineer",
  "MLOps Engineer",
  "AI / ML Researcher",
  "NLP Engineer",
  "Computer Vision Engineer",
  "Prompt Engineer",
  "Research Scientist",
  "Product Manager",
  "Product Designer",
  "UI/UX Designer",
  "Technical Program Manager",
  "Scrum Master",
  "Security Engineer",
  "Cybersecurity Analyst",
  "Ethical Hacker / Pentester",
  "Cloud Architect",
  "Solutions Architect",
  "Database Administrator",
  "Network Engineer",
  "QA / Test Engineer",
  "Automation Engineer",
  "Embedded Systems Engineer",
  "Firmware Engineer",
  "IoT Developer",
  "Robotics Engineer",
  "AR / VR Developer",
  "Game Developer",
  "Blockchain Developer",
  "Web3 Developer",
  "Salesforce Developer",
  "SAP Consultant",
  "ERP Consultant",
  "IT Support Engineer",
  "Business Analyst",
  "Project Manager",
  "Engineering Manager",
  "Technical Lead",
  "CTO / VP Engineering",
  "Technical Writer",
];

export interface CompanyTarget {
  id: string;
  label: string;
  icon: string;
  description: string;
  gradient: string;
  autoSettings: {
    difficulty: string;
    pace: string;
    interviewType: string;
    focusArea: string;
    questions: number;
  };
}

export const COMPANY_TARGETS: CompanyTarget[] = [
  {
    id: "faang",
    label: "FAANG / Big Tech",
    icon: "🏢",
    description: "Google, Meta, Amazon, Apple, Netflix, Microsoft",
    gradient: "from-blue-600 to-violet-600",
    autoSettings: {
      difficulty: "hard",
      pace: "intense",
      interviewType: "Technical",
      focusArea: "Data Structures & Algorithms",
      questions: 10,
    },
  },
  {
    id: "internship",
    label: "Internship",
    icon: "🎓",
    description: "College placements & entry-level internships",
    gradient: "from-green-500 to-emerald-600",
    autoSettings: {
      difficulty: "standard",
      pace: "relaxed",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 8,
    },
  },
  {
    id: "service",
    label: "Service Based",
    icon: "🏭",
    description: "TCS, Infosys, Wipro, Cognizant, Accenture",
    gradient: "from-cyan-500 to-blue-600",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 10,
    },
  },
  {
    id: "startup",
    label: "Startup",
    icon: "🚀",
    description: "Early-stage & growth-phase startups",
    gradient: "from-orange-500 to-red-600",
    autoSettings: {
      difficulty: "standard",
      pace: "intense",
      interviewType: "Technical",
      focusArea: "System Design & Architecture",
      questions: 8,
    },
  },
  {
    id: "unicorn",
    label: "Unicorn / Series B+",
    icon: "🦄",
    description: "Stripe, Notion, Figma, Razorpay, CRED",
    gradient: "from-purple-500 to-pink-600",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "System Design & Architecture",
      questions: 10,
    },
  },
  {
    id: "mnc",
    label: "MNC / Fortune 500",
    icon: "🌐",
    description: "IBM, Oracle, SAP, Cisco, Intel, Samsung",
    gradient: "from-sky-500 to-blue-700",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "System Design & Architecture",
      questions: 10,
    },
  },
  {
    id: "fintech",
    label: "FinTech",
    icon: "💳",
    description: "PhonePe, PayU, Razorpay, CRED, Groww",
    gradient: "from-emerald-500 to-teal-600",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "System Design",
      focusArea: "Security & Auth",
      questions: 10,
    },
  },
  {
    id: "edtech",
    label: "Ed-Tech",
    icon: "📚",
    description: "Byju's, Unacademy, upGrad, Scaler",
    gradient: "from-violet-500 to-indigo-600",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "React / Frontend",
      questions: 8,
    },
  },
  {
    id: "consulting",
    label: "Consulting / Big 4",
    icon: "📊",
    description: "Deloitte, McKinsey, PwC, KPMG digital",
    gradient: "from-slate-500 to-zinc-600",
    autoSettings: {
      difficulty: "hard",
      pace: "normal",
      interviewType: "Case Study",
      focusArea: "General / Mixed",
      questions: 10,
    },
  },
  {
    id: "remote",
    label: "Remote First",
    icon: "🌍",
    description: "GitLab, Automattic, Toptal, remote teams",
    gradient: "from-teal-500 to-cyan-600",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Behavioral",
      focusArea: "General / Mixed",
      questions: 8,
    },
  },
  {
    id: "government",
    label: "Government / PSU",
    icon: "🏛️",
    description: "ISRO, DRDO, Banking IT, Railway",
    gradient: "from-amber-500 to-orange-600",
    autoSettings: {
      difficulty: "standard",
      pace: "relaxed",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 10,
    },
  },
  {
    id: "freelance",
    label: "Freelance / Contract",
    icon: "💼",
    description: "Independent consulting & contract roles",
    gradient: "from-rose-500 to-pink-600",
    autoSettings: {
      difficulty: "standard",
      pace: "normal",
      interviewType: "Technical",
      focusArea: "General / Mixed",
      questions: 5,
    },
  },
];

export const LEVELS = [
  "Intern",
  "Junior",
  "Mid-Level",
  "Senior",
  "Staff",
  "Principal",
  "Director",
];

export const DURATIONS = [
  { label: "Quick (5 questions)", questions: 5 },
  { label: "Short (8 questions)", questions: 8 },
  { label: "Standard (10 questions)", questions: 10 },
  { label: "Deep Dive (15 questions)", questions: 15 },
];

export const FOCUS_AREAS = [
  "General / Mixed",
  "Data Structures & Algorithms",
  "System Design & Architecture",
  "API Design & REST",
  "Database & SQL",
  "React / Frontend",
  "Node.js / Backend",
  "DevOps & CI/CD",
  "Cloud (AWS/GCP/Azure)",
  "Security & Auth",
  "Performance & Optimization",
  "Leadership & Management",
  "Machine Learning & AI",
  "Mobile Development",
  "Microservices & Event-Driven",
  "Testing & QA",
  "GraphQL & APIs",
  "Blockchain & Web3",
  "Object-Oriented Design",
  "Operating Systems & Networking",
  "Compiler Design & Theory",
  "Natural Language Processing",
  "Computer Vision",
  "Data Engineering & Pipelines",
  "Product Management",
];

export const INTERVIEW_PACES = [
  {
    id: "relaxed",
    label: "Relaxed",
    description: "More time to think, gentler follow-ups",
  },
  { id: "normal", label: "Normal", description: "Standard interview pace" },
  {
    id: "intense",
    label: "Intense",
    description: "Rapid-fire, strict time pressure",
  },
];

export const DIFFICULTY_MODES = [
  {
    id: "standard",
    label: "Standard",
    description: "Balanced difficulty progression",
  },
  {
    id: "hard",
    label: "Hard",
    description: "Challenging questions from the start",
  },
  {
    id: "expert",
    label: "Expert",
    description: "Senior/Staff-level depth throughout",
  },
];
