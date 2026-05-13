import { ResumeData } from "./types";

const genId = () => Math.random().toString(36).substr(2, 9);

export const SAMPLE_RESUMES: Record<string, ResumeData> = {
    "software-engineer": {
        personalInfo: {
            fullName: "Nikhil Jangid",
            title: "Software Engineer",
            email: "nikhiljangid343@gmail.com",
            phone: "+91 80588 03339",
            location: "Jaipur, Rajasthan",
            linkedin: "linkedin.com/in/nikhiljangid",
            website: "nikhil.dev",
            photo: ""
        },
        summary: "Final-year Computer Science Engineering student with hands-on experience in Frontend Development and full-stack web applications using React.js, Next.js, and MERN Stack. Experienced in AI API integration (OpenAI, Gemini) and building scalable, production-ready architectures. Strong problem-solving foundation with 500+ DSA problems solved across LeetCode, CodeChef, GeeksforGeeks, and Coding Ninjas.",
        experience: [
            {
                id: genId(),
                title: "Frontend Developer Intern",
                company: "Celebal Technologies",
                startDate: "May 2026",
                endDate: "Jul 2026",
                desc: "• Built a Shipment Delivery Application using React.js, Tailwind CSS, and REST APIs, improving delivery tracking accuracy by 30%.\n• Optimized frontend performance, reducing page load time by 20% and enhancing user experience on mobile and desktop.\n• Collaborated in an Agile team of 6 developers, integrating frontend with backend microservices and managing Git version control for streamlined deployment."
            }
        ],
        education: [
            {
                id: genId(),
                school: "Amity University, Rajasthan",
                degree: "B.Tech in Computer Science and Engineering",
                startDate: "2022",
                endDate: "2026",
                gpa: "CGPA: 8.39"
            },
            {
                id: genId(),
                school: "Class XII",
                degree: "CBSE Board",
                startDate: "",
                endDate: "",
                gpa: "95.87%"
            },
            {
                id: genId(),
                school: "Class X",
                degree: "CBSE Board",
                startDate: "",
                endDate: "",
                gpa: "83.67%"
            }
        ],
        skills: [
            // Languages
            { id: genId(), name: "C/C++ (Proficient)" }, { id: genId(), name: "JavaScript" }, { id: genId(), name: "Python (Basics)" }, { id: genId(), name: "Java (Basics)" },
            // Libs/Frameworks
            { id: genId(), name: "React.js" }, { id: genId(), name: "Next.js" }, { id: genId(), name: "Node.js" }, { id: genId(), name: "Express.js" },
            { id: genId(), name: "Tailwind CSS" }, { id: genId(), name: "GSAP" }, { id: genId(), name: "Redux" },
            // Databases/Tools
            { id: genId(), name: "MongoDB" }, { id: genId(), name: "Firebase" }, { id: genId(), name: "MySQL" }, { id: genId(), name: "Git/GitHub" }
        ],
        projects: [
            {
                id: genId(),
                name: "NJ Careers Roadmap",
                tech: "Next.js, OpenAI API, Gemini API",
                link: "June 2026 – Ongoing",
                desc: "Designed an all-in-one career platform featuring AI-driven roadmaps and interview simulators. Supported 500+ users in career planning by integrating skill assessments and industry trend analysis."
            },
            {
                id: genId(),
                name: "FlexForge - Fitness Website",
                tech: "Next.js, React, Tailwind",
                link: "May - July 2026",
                desc: "Personalized fitness tracking site. Offers customized workout plans, diet tracking, and motivational challenges. Boosted user engagement by 25% through motivational challenges and a responsive, elegant UI."
            },
            {
                id: genId(),
                name: "ResumeRocket - AI Builder",
                tech: "Next.js, Gemini API, ML Models",
                link: "Feb 2026 – Apr 2026",
                desc: "Developed an AI-powered resume platform. Increased resume parsing success by 30% with dynamic templates and professional optimization strategies. Improved ATS compatibility by 30%."
            },
            {
                id: genId(),
                name: "Smart Coding Assistant",
                tech: "Next.js, OpenAI API",
                link: "Jan 2026 – Mar 2026",
                desc: "Created a real-time code analysis tool offering suggestions and DSA visualizations. Reduced code complexity by 15% for users through actionable optimization tips and logic enhancements."
            }
        ],
        certifications: [
            { id: genId(), name: "Infosys Certification in Programming Using C++", issuer: "Infosys", date: "" },
            { id: genId(), name: "McKinsey Forward Program", issuer: "McKinsey", date: "" },
            { id: genId(), name: "Data Analytics Virtual Simulation", issuer: "Deloitte", date: "" },
            { id: genId(), name: "IBM SkillsBuild AI Certificate", issuer: "IBM", date: "" }
        ],
        achievements: [
            { id: genId(), title: "Competitive Programming", desc: "Solved 400+ DSA problems on LeetCode & GFG; Top 10% rank in GFG contests." },
            { id: genId(), title: "Consistency", desc: "Completed GFG 21-Week Challenge with 160+ days of consistent problem-solving." }
        ],
        volunteer: []
    },
    // Keep other resumes as they are, but since I'm overwriting the file, I need to include them or use replace.
    // I will Include a subset or just placeholders for the others to save space if I use write_to_file, 
    // BUT since I need to keep the others working, I should probably use replace_file_content 
    // OR just include the original content for others.
    // Given the previous step I have the content of sample-resumes.ts, I will re-emit the whole file to be safe and clean.
    "product-manager": {
        personalInfo: {
            fullName: "Govind Goyal",
            title: "Product Management Aspirant",
            email: "govind.pm@example.com",
            phone: "+91 78900 12345",
            location: "Shahpura, India",
            linkedin: "linkedin.com/in/govindgoyal",
            website: "govind-product.io",
            photo: ""
        },
        summary: "Business-savvy engineering student with a flair for product strategy and user experience. Proven ability to translate user needs into actionable product requirements. Experience leading cross-functional teams to launch student-led startups and winning national product case study competitions.",
        experience: [
            {
                id: genId(),
                title: "Associate Product Manager Intern",
                company: "Cred",
                startDate: "May 2026",
                endDate: "Jul 2026",
                desc: "• Conducted user research and A/B testing for the rewards redemption flow, identifying friction points that led to a 12% increase in redemption rates.\n• Collaborated with design and engineering teams to launch the 'Cred Cash' peer-to-peer payment feature.\n• Analyzed user behavior data using Mixpanel to drive feature prioritization for Q3."
            },
            {
                id: genId(),
                title: "Product Intern",
                company: "Unacademy",
                startDate: "May 2024",
                endDate: "Jul 2024",
                desc: "• Spearheaded the 'Daily Streaks' gamification feature, resulting in a 20% increase in daily active users (DAU).\n• Created detailed PRDs and wireframes for the doubt-solving module."
            }
        ],
        education: [
            {
                id: genId(),
                school: "BITS Pilani",
                degree: "B.E. Computer Science + M.Sc Economics",
                startDate: "2022",
                endDate: "2026",
                gpa: "8.8/10"
            }
        ],
        skills: [
            { id: genId(), name: "Product Strategy" }, { id: genId(), name: "SQL" }, { id: genId(), name: "Figma" },
            { id: genId(), name: "Data Analysis" }, { id: genId(), name: "Agile/Scrum" }, { id: genId(), name: "User Research" }
        ],
        projects: [
            {
                id: genId(),
                name: "CampusConnect",
                tech: "Startup",
                link: "",
                desc: "Founded a hyperlocal marketplace for university students, scaling to 2,000+ users in 3 months."
            }
        ],
        certifications: [
            { id: genId(), name: "Product Analytics Certification", issuer: "Mixpanel", date: "2024" }
        ],
        achievements: [
            { id: genId(), title: "National Winner", desc: "Flipkart WiRED 7.0 Case Study Competition." }
        ],
        volunteer: []
    },
    "data-scientist": {
        personalInfo: {
            fullName: "Soyal Islam",
            title: "Data Scientist",
            email: "soyal.data@example.com",
            phone: "+91 88000 99000",
            location: "West Bengal, India",
            linkedin: "linkedin.com/in/soyalislam",
            website: "soyal-ai.io",
            photo: ""
        },
        summary: "Data Science enthusiast with a deep understanding of statistical modeling and machine learning algorithms. Proficient in Python, PyTorch, and Big Data technologies. Experienced in building predictive models for real-world problems, with a research-oriented mindset demonstrated through publications.",
        experience: [
            {
                id: genId(),
                title: "Data Science Intern",
                company: "American Express",
                startDate: "May 2026",
                endDate: "Jul 2026",
                desc: "• Developed a fraud detection model using XGBoost and Autoencoders, achieving a 98% recall rate on skewed datasets.\n• Implemented a feature engineering pipeline using PySpark to process 2TB of transaction data.\n• Presented findings to senior leadership, influencing credit risk policy adjustments."
            },
            {
                id: genId(),
                title: "Research Intern",
                company: "Microsoft Research India",
                startDate: "May 2024",
                endDate: "Jul 2024",
                desc: "• Contributed to the 'CodeBERT' project, fine-tuning transformer models for code summarization tasks.\n• Published a paper on 'Efficient Attention Mechanisms' at EMNLP 2024 (Student Session)."
            }
        ],
        education: [
            {
                id: genId(),
                school: "Jadavpur University",
                degree: "B.E. Computer Science",
                startDate: "2022",
                endDate: "2026",
                gpa: "9.1/10"
            }
        ],
        skills: [
            { id: genId(), name: "Python" }, { id: genId(), name: "PyTorch" }, { id: genId(), name: "SQL" },
            { id: genId(), name: "Machine Learning" }, { id: genId(), name: "NLP" }, { id: genId(), name: "Tableau" }
        ],
        projects: [
            {
                id: genId(),
                name: "Stock Market Predictor",
                tech: "LSTM, Time-Series",
                link: "",
                desc: "Built a hybrid LSTM-GRU model for stock price prediction with 70% directional accuracy."
            }
        ],
        certifications: [
            { id: genId(), name: "Deep Learning Specialization", issuer: "Coursera (Andrew Ng)", date: "2023" }
        ],
        achievements: [
            { id: genId(), title: "Kaggle Expert", desc: "Ranked in top 5% of global participants in the 'House Prices' competition." }
        ],
        volunteer: []
    },
    "devops": {
        personalInfo: {
            fullName: "Vishal Jangid",
            title: "DevOps Engineer",
            email: "vishal.ops@example.com",
            phone: "+91 97766 55443",
            location: "Jaipur, India",
            linkedin: "linkedin.com/in/vishaljangid",
            website: "vishal-cloud.com",
            photo: ""
        },
        summary: "Cloud Infrastructure enthusiast with hands-on experience in AWS, Kubernetes, and Terraform. Passionate about automating deployment pipelines and ensuring 99.99% system availability. Certified Kubernetes Administrator (CKA).",
        experience: [
            {
                id: genId(),
                title: "Cloud Infrastructure Intern",
                company: "Salesforce",
                startDate: "May 2026",
                endDate: "Jul 2026",
                desc: "• Automated the provisioning of AWS EKS clusters using Terraform modules, reducing setup time by 80%.\n• Implemented Prometheus and Grafana monitoring for microservices, setting up critical alerts for latency and error rates.\n• Optimized Docker image sizes by 50% using multi-stage builds and distroless images."
            },
            {
                id: genId(),
                title: "DevOps Intern",
                company: "Zomato",
                startDate: "May 2024",
                endDate: "Jul 2024",
                desc: "• Built a GitOps based deployment pipeline using ArgoCD, enabling zero-downtime deployments.\n• Wrote Python scripts to automate database backups and disaster recovery drills."
            }
        ],
        education: [
            {
                id: genId(),
                school: "MNIT Jaipur",
                degree: "B.Tech in Computer Engineering",
                startDate: "2022",
                endDate: "2026",
                gpa: "8.5/10"
            }
        ],
        skills: [
            { id: genId(), name: "AWS" }, { id: genId(), name: "Kubernetes" }, { id: genId(), name: "Docker" },
            { id: genId(), name: "Terraform" }, { id: genId(), name: "Jenkins" }, { id: genId(), name: "Linux" }
        ],
        projects: [
            {
                id: genId(),
                name: "Serverless Video Transcoder",
                tech: "AWS Lambda, S3",
                link: "",
                desc: "Built a highly scalable video processing pipeline using event-driven serverless architecture."
            }
        ],
        certifications: [
            { id: genId(), name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", date: "2024" }
        ],
        achievements: [],
        volunteer: []
    },
    "java-developer": {
        personalInfo: {
            fullName: "Sachin Gurjar",
            title: "Java Developer",
            email: "sachin.java@example.com",
            phone: "+91 95000 11223",
            location: "Chandwaji, Jaipur",
            linkedin: "linkedin.com/in/sachingurjar",
            website: "sachin-code.com",
            photo: ""
        },
        summary: "Core Java and Spring Boot specialist with a focus on building high-performance, enterprise-grade backend systems. Proficient in microservices architecture, REST APIs, and database optimization. Passionate about writing clean, maintainable code and solving complex distributed system problems.",
        experience: [
            {
                id: genId(),
                title: "Backend Engineering Intern",
                company: "Oracle",
                startDate: "May 2026",
                endDate: "Jul 2026",
                desc: "• Developed high-throughput REST APIs using Spring Boot and Hibernate, handling 5000+ requests per second.\n• Optimized SQL queries for the core billing service, reducing processing time by 35%.\n• Implemented message processing pipelines using Apache Kafka for real-time data synchronization."
            },
            {
                id: genId(),
                title: "Java Developer Intern",
                company: "Infosys",
                startDate: "May 2024",
                endDate: "Jul 2024",
                desc: "• Migrated legacy JSP applications to a modern Spring Boot + React architecture.\n• Implemented JUnit test cases achieving 90% code coverage for critical modules."
            }
        ],
        education: [
            {
                id: genId(),
                school: "MNIT Jaipur",
                degree: "B.Tech in Computer Engineering",
                startDate: "2022",
                endDate: "2026",
                gpa: "8.7/10"
            }
        ],
        skills: [
            { id: genId(), name: "Java 17" }, { id: genId(), name: "Spring Boot" }, { id: genId(), name: "Microservices" },
            { id: genId(), name: "Hibernate" }, { id: genId(), name: "SQL" }, { id: genId(), name: "Kafka" }
        ],
        projects: [
            {
                id: genId(),
                name: "FinBanking API",
                tech: "Java, Spring Boot",
                link: "github.com/sachin/finbank",
                desc: "Secure banking API with JWT authentication, transaction management, and fraud checks."
            }
        ],
        certifications: [
            { id: genId(), name: "Oracle Certified Professional: Java SE 11", issuer: "Oracle", date: "2023" }
        ],
        achievements: [],
        volunteer: []
    },
    "full-stack": {
        personalInfo: {
            fullName: "Gulshan Jangid",
            title: "Full Stack Developer",
            email: "gulshan.dev@example.com",
            phone: "+91 91234 56789",
            location: "Alwar, Rajasthan",
            linkedin: "linkedin.com/in/gulshanjangid",
            website: "gulshan-web.com",
            photo: ""
        },
        summary: "Versatile Full Stack Developer with expertise in the MERN stack and cloud technologies. Proven ability to build end-to-end web applications with a focus on performance, scalability, and user experience. Finalist in multiple national hackathons.",
        experience: [
            {
                id: genId(),
                title: "Full Stack Intern",
                company: "Adobe",
                startDate: "May 2026",
                endDate: "Jul 2026",
                desc: "• Developed a creative asset management plugin for Adobe Express using React and Node.js.\n• Optimized frontend bundle size by 40% using code-splitting and lazy loading techniques.\n• Integrated Adobe Sensei AI APIs to provide smart tagging features for uploaded user content."
            },
            {
                id: genId(),
                title: "Web Developer Intern",
                company: "MakeMyTrip",
                startDate: "May 2024",
                endDate: "Jul 2024",
                desc: "• Revamped the flight booking checkout flow, improving conversion rates by 8%.\n• Implemented server-side rendering (SSR) using Next.js for better SEO performance."
            }
        ],
        education: [
            {
                id: genId(),
                school: "IIT Delhi",
                degree: "B.Tech in Computer Science",
                startDate: "2022",
                endDate: "2026",
                gpa: "9.0/10"
            }
        ],
        skills: [
            { id: genId(), name: "React.js" }, { id: genId(), name: "Node.js" }, { id: genId(), name: "Next.js" },
            { id: genId(), name: "MongoDB" }, { id: genId(), name: "Redis" }, { id: genId(), name: "AWS" }
        ],
        projects: [
            {
                id: genId(),
                name: "EventHub",
                tech: "MERN Stack",
                link: "",
                desc: "Scalable event management platform with real-time ticketing and analytics."
            }
        ],
        certifications: [],
        achievements: [],
        volunteer: []
    },
    "founder": {
        personalInfo: {
            fullName: "Yash Kumar Saini",
            title: "Founder, CEO & WordPress Developer",
            email: "yash@utilaiz.com",
            phone: "+91 70112 23344",
            location: "Narnaul, Haryana",
            linkedin: "linkedin.com/in/yashkumarsaini",
            website: "www.utilaiz.com",
            photo: ""
        },
        summary: "Entrepreneurial Founder & CEO of Utilaiz Solutions, providing comprehensive digital services including Website Development, Graphic Design, and Video Editing. Expert WordPress Developer with a track record of delivering high-performance websites for diverse clients. Passionate about empowering businesses through digital transformation.",
        experience: [
            {
                id: genId(),
                title: "Founder & CEO",
                company: "Utilaiz Solutions",
                startDate: "Jan 2024",
                endDate: "Present",
                desc: "• Founded Utilaiz Solutions, a premier digital agency providing Website Development, Graphic Design, and Video Editing services (www.utilaiz.com).\n• Delivered 50+ custom WordPress websites for international clients, ensuring 100% responsive design and SEO optimization.\n• Led a creative team to produce high-quality branding assets, logos, and promotional videos, driving client revenue growth by 40%."
            },
            {
                id: genId(),
                title: "Freelance WordPress Developer",
                company: "Upwork / Self-Employed",
                startDate: "Jan 2023",
                endDate: "Dec 2023",
                desc: "• Developed custom WordPress themes and plugins for e-commerce and portfolio sites.\n• Optimized site speed and performance, achieving 90+ scores on Google PageSpeed Insights."
            }
        ],
        education: [
            {
                id: genId(),
                school: "DTU (Delhi Technological University)",
                degree: "B.Tech in Software Engineering",
                startDate: "2022",
                endDate: "2026",
                gpa: "8.9/10"
            }
        ],
        skills: [
            { id: genId(), name: "WordPress" }, { id: genId(), name: "Graphic Design" }, { id: genId(), name: "Video Editing" },
            { id: genId(), name: "SEO" }, { id: genId(), name: "Digital Marketing" }, { id: genId(), name: "Next.js" }
        ],
        projects: [
            {
                id: genId(),
                name: "Utilaiz.com",
                tech: "WordPress, PHP",
                link: "www.utilaiz.com",
                desc: "Official agency portfolio website showcasing digital services and client case studies."
            }
        ],
        certifications: [],
        achievements: [
            { id: genId(), title: "Top Rated Freelancer", desc: "Maintained a 5-star rating across 20+ freelance projects." }
        ],
        volunteer: []
    },
    "data-analyst": {
        personalInfo: {
            fullName: "Priyanshu Bhardwaj",
            title: "Data Analyst",
            email: "priyanshu.da@example.com",
            phone: "+91 88997 76655",
            location: "Kota, Rajasthan",
            linkedin: "linkedin.com/in/priyanshubhardwaj",
            website: "priyanshu-data.com",
            photo: ""
        },
        summary: "Analytical thinker with a passion for turning raw data into strategic business insights. Proficient in SQL, Python, and advanced data visualization tools (PowerBI/Tableau). Experience working with large datasets to drive operational efficiency and revenue growth.",
        experience: [
            {
                id: genId(),
                title: "Business Analyst Intern",
                company: "McKinsey & Company",
                startDate: "May 2026",
                endDate: "Jul 2026",
                desc: "• Built interactive PowerBI dashboards to track supply chain KPIs, helping the client reduce inventory holding costs by 15%.\n• Performed cohort analysis on customer retention data using SQL, identifying key churn drivers.\n• Automated weekly reporting processes using Python, saving 15 analyst-hours per week."
            },
            {
                id: genId(),
                title: "Data Analytics Intern",
                company: "PhonePe",
                startDate: "May 2024",
                endDate: "Jul 2024",
                desc: "• Analyzed transaction failure rates across different payment gateways, recommending routing changes that improved success rates by 5%.\n• Cleaned and pre-processed a dataset of 10M+ rows for predictive modeling."
            }
        ],
        education: [
            {
                id: genId(),
                school: "NIT Jaipur (MNIT)",
                degree: "B.Tech in Chemical Engineering (Minor in Data Science)",
                startDate: "2022",
                endDate: "2026",
                gpa: "8.7/10"
            }
        ],
        skills: [
            { id: genId(), name: "SQL (Advanced)" }, { id: genId(), name: "PowerBI" }, { id: genId(), name: "Python (Pandas)" },
            { id: genId(), name: "Tableau" }, { id: genId(), name: "Excel" }, { id: genId(), name: "A/B Testing" }
        ],
        projects: [
            {
                id: genId(),
                name: "IPL Data Analysis",
                tech: "Python, Matplotlib",
                link: "",
                desc: "Exploratory data analysis of 15 years of IPL match data to determine win probability factors."
            }
        ],
        certifications: [
            { id: genId(), name: "Google Data Analytics Professional Certificate", issuer: "Google", date: "2023" }
        ],
        achievements: [],
        volunteer: []
    },
    "ai-ml": {
        personalInfo: {
            fullName: "Vinay Jangid",
            title: "AI/ML Engineer",
            email: "vinay.ml@example.com",
            phone: "+91 90011 22334",
            location: "Shahpura, India",
            linkedin: "linkedin.com/in/vinayjangid",
            website: "vinay-ai.com",
            photo: ""
        },
        summary: "Deep Learning researcher and engineer with a focus on Generative AI and Computer Vision. Experience building and deploying LLM applications and optimizing models for edge devices. Passionate about democratizing AI technology.",
        experience: [
            {
                id: genId(),
                title: "AI Engineering Intern",
                company: "Ola Electric",
                startDate: "May 2026",
                endDate: "Jul 2026",
                desc: "• Developed a computer vision model for autonomous battery swapping stations using YOLOv8, achieving 99% detection accuracy.\n• Optimizing inference latency on NVIDIA Jetson edge devices using TensorRT.\n• Integrated the model into the production pipeline using Docker and ROS."
            },
            {
                id: genId(),
                title: "Machine Learning Intern",
                company: "Wipro AI Labs",
                startDate: "May 2024",
                endDate: "Jul 2024",
                desc: "• Fine-tuned LLaMA-2 on proprietary enterprise documents to create a secure internal Q&A bot.\n• Implemented RAG (Retrieval Augmented Generation) architecture using LangChain and Pinecone."
            }
        ],
        education: [
            {
                id: genId(),
                school: "IIT Kharagpur",
                degree: "B.Tech in Computer Science",
                startDate: "2022",
                endDate: "2026",
                gpa: "9.3/10"
            }
        ],
        skills: [
            { id: genId(), name: "Deep Learning" }, { id: genId(), name: "PyTorch" }, { id: genId(), name: "Computer Vision" },
            { id: genId(), name: "Generative AI" }, { id: genId(), name: "LangChain" }, { id: genId(), name: "Docker" }
        ],
        projects: [
            {
                id: genId(),
                name: "Sign Language Translator",
                tech: "TensorFlow, OpenCV",
                link: "",
                desc: "Real-time sign language to text translation system using LSTM networks."
            }
        ],
        certifications: [],
        achievements: [
            { id: genId(), title: "Best Paper Award", desc: "Received best student paper award at CVPR Workshop 2024." }
        ],
        volunteer: []
    }
};