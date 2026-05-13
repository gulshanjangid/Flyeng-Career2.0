export type RoleBreakdown = { base: string; variable: string; deductions: string; };
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

export const companies: CompanyData[] = [
    {
        "id": "google",
        "name": "Google",
        "type": "Product",
        "status": "Active",
        "logo": "GOO",
        "rating": 4.8,
        "aiVerdict": "Prioritizes DSA depth and system design mastery over pure academic history. Heavy focus on Googliness.",
        "overview": {
            "about": "Google is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.google.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Phone Screen",
                "duration": "45 Mins",
                "difficulty": "Hard",
                "desc": "Initial technical screen focusing on medium/hard Leetcode.",
                "topics": [
                    "Arrays",
                    "Strings",
                    "Graphs"
                ]
            },
            {
                "name": "Onsite Coding Loop",
                "duration": "4 Hours",
                "difficulty": "Expert",
                "desc": "Exhaustive 4-round loop covering advanced DSA and Behavioral.",
                "topics": [
                    "DP",
                    "Trees",
                    "Leadership Principles"
                ]
            },
            {
                "name": "System Design",
                "duration": "1 Hour",
                "difficulty": "Expert",
                "desc": "High-level architecture design for scalable systems.",
                "topics": [
                    "Microservices",
                    "Sharding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Good to Moderate",
            "remote": "Strict Hybrid (3-4 Days)",
            "vibe": "Process-driven, intense peer pressure but great perks."
        },
        "reality": {
            "pros": [
                "Top 1% compensation and RSUs that actually appreciate.",
                "Work with world-class engineers.",
                "Ultimate resume brand value.",
                "Free food and premium health benefits."
            ],
            "cons": [
                "Intense interview preparation required (months of Leetcode).",
                "Can be highly bureaucratic in legacy orgs.",
                "High expectations resulting in PIP (Performance Improvement Plan) anxiety."
            ]
        }
    },
    {
        "id": "microsoft",
        "name": "Microsoft",
        "type": "Product",
        "status": "Active",
        "logo": "MIC",
        "rating": 4.7,
        "aiVerdict": "Balanced interview process. High emphasis on C#/C++ for legacy teams, but cloud-native skills dominate Azure org.",
        "overview": {
            "about": "Microsoft is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.microsoft.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Phone Screen",
                "duration": "45 Mins",
                "difficulty": "Hard",
                "desc": "Initial technical screen focusing on medium/hard Leetcode.",
                "topics": [
                    "Arrays",
                    "Strings",
                    "Graphs"
                ]
            },
            {
                "name": "Onsite Coding Loop",
                "duration": "4 Hours",
                "difficulty": "Expert",
                "desc": "Exhaustive 4-round loop covering advanced DSA and Behavioral.",
                "topics": [
                    "DP",
                    "Trees",
                    "Leadership Principles"
                ]
            },
            {
                "name": "System Design",
                "duration": "1 Hour",
                "difficulty": "Expert",
                "desc": "High-level architecture design for scalable systems.",
                "topics": [
                    "Microservices",
                    "Sharding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Good to Moderate",
            "remote": "Strict Hybrid (3-4 Days)",
            "vibe": "Process-driven, intense peer pressure but great perks."
        },
        "reality": {
            "pros": [
                "Top 1% compensation and RSUs that actually appreciate.",
                "Work with world-class engineers.",
                "Ultimate resume brand value.",
                "Free food and premium health benefits."
            ],
            "cons": [
                "Intense interview preparation required (months of Leetcode).",
                "Can be highly bureaucratic in legacy orgs.",
                "High expectations resulting in PIP (Performance Improvement Plan) anxiety."
            ]
        }
    },
    {
        "id": "amazon",
        "name": "Amazon",
        "type": "Product",
        "status": "Active",
        "logo": "AMA",
        "rating": 4.2,
        "aiVerdict": "Leadership Principles are non-negotiable. Expect STAR method behavioral questions embedded in every single technical round.",
        "overview": {
            "about": "Amazon is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.amazon.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Phone Screen",
                "duration": "45 Mins",
                "difficulty": "Hard",
                "desc": "Initial technical screen focusing on medium/hard Leetcode.",
                "topics": [
                    "Arrays",
                    "Strings",
                    "Graphs"
                ]
            },
            {
                "name": "Onsite Coding Loop",
                "duration": "4 Hours",
                "difficulty": "Expert",
                "desc": "Exhaustive 4-round loop covering advanced DSA and Behavioral.",
                "topics": [
                    "DP",
                    "Trees",
                    "Leadership Principles"
                ]
            },
            {
                "name": "System Design",
                "duration": "1 Hour",
                "difficulty": "Expert",
                "desc": "High-level architecture design for scalable systems.",
                "topics": [
                    "Microservices",
                    "Sharding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Good to Moderate",
            "remote": "Strict Hybrid (3-4 Days)",
            "vibe": "Process-driven, intense peer pressure but great perks."
        },
        "reality": {
            "pros": [
                "Top 1% compensation and RSUs that actually appreciate.",
                "Work with world-class engineers.",
                "Ultimate resume brand value.",
                "Free food and premium health benefits."
            ],
            "cons": [
                "Intense interview preparation required (months of Leetcode).",
                "Can be highly bureaucratic in legacy orgs.",
                "High expectations resulting in PIP (Performance Improvement Plan) anxiety."
            ]
        }
    },
    {
        "id": "apple",
        "name": "Apple",
        "type": "Product",
        "status": "Inactive",
        "logo": "APP",
        "rating": 4.6,
        "aiVerdict": "Highly secretive. Hardware/Software intersection. Deep domain expertise valued over generic problem solving in many orgs.",
        "overview": {
            "about": "Apple is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.apple.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Phone Screen",
                "duration": "45 Mins",
                "difficulty": "Hard",
                "desc": "Initial technical screen focusing on medium/hard Leetcode.",
                "topics": [
                    "Arrays",
                    "Strings",
                    "Graphs"
                ]
            },
            {
                "name": "Onsite Coding Loop",
                "duration": "4 Hours",
                "difficulty": "Expert",
                "desc": "Exhaustive 4-round loop covering advanced DSA and Behavioral.",
                "topics": [
                    "DP",
                    "Trees",
                    "Leadership Principles"
                ]
            },
            {
                "name": "System Design",
                "duration": "1 Hour",
                "difficulty": "Expert",
                "desc": "High-level architecture design for scalable systems.",
                "topics": [
                    "Microservices",
                    "Sharding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Good to Moderate",
            "remote": "Strict Hybrid (3-4 Days)",
            "vibe": "Process-driven, intense peer pressure but great perks."
        },
        "reality": {
            "pros": [
                "Top 1% compensation and RSUs that actually appreciate.",
                "Work with world-class engineers.",
                "Ultimate resume brand value.",
                "Free food and premium health benefits."
            ],
            "cons": [
                "Intense interview preparation required (months of Leetcode).",
                "Can be highly bureaucratic in legacy orgs.",
                "High expectations resulting in PIP (Performance Improvement Plan) anxiety."
            ]
        }
    },
    {
        "id": "meta",
        "name": "Meta",
        "type": "Product",
        "status": "Active",
        "logo": "MET",
        "rating": 4.5,
        "aiVerdict": "Move fast and break things is dead. It is move fast with stable infrastructure. Leetcode speed and optimality are critical.",
        "overview": {
            "about": "Meta is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.meta.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Phone Screen",
                "duration": "45 Mins",
                "difficulty": "Hard",
                "desc": "Initial technical screen focusing on medium/hard Leetcode.",
                "topics": [
                    "Arrays",
                    "Strings",
                    "Graphs"
                ]
            },
            {
                "name": "Onsite Coding Loop",
                "duration": "4 Hours",
                "difficulty": "Expert",
                "desc": "Exhaustive 4-round loop covering advanced DSA and Behavioral.",
                "topics": [
                    "DP",
                    "Trees",
                    "Leadership Principles"
                ]
            },
            {
                "name": "System Design",
                "duration": "1 Hour",
                "difficulty": "Expert",
                "desc": "High-level architecture design for scalable systems.",
                "topics": [
                    "Microservices",
                    "Sharding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Good to Moderate",
            "remote": "Strict Hybrid (3-4 Days)",
            "vibe": "Process-driven, intense peer pressure but great perks."
        },
        "reality": {
            "pros": [
                "Top 1% compensation and RSUs that actually appreciate.",
                "Work with world-class engineers.",
                "Ultimate resume brand value.",
                "Free food and premium health benefits."
            ],
            "cons": [
                "Intense interview preparation required (months of Leetcode).",
                "Can be highly bureaucratic in legacy orgs.",
                "High expectations resulting in PIP (Performance Improvement Plan) anxiety."
            ]
        }
    },
    {
        "id": "netflix",
        "name": "Netflix",
        "type": "Product",
        "status": "Inactive",
        "logo": "NET",
        "rating": 4.9,
        "aiVerdict": "Keeper test culture. Only top of market talent. Extreme emphasis on senior, independent contributors who thrive in high-context environments.",
        "overview": {
            "about": "Netflix is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.netflix.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Phone Screen",
                "duration": "45 Mins",
                "difficulty": "Hard",
                "desc": "Initial technical screen focusing on medium/hard Leetcode.",
                "topics": [
                    "Arrays",
                    "Strings",
                    "Graphs"
                ]
            },
            {
                "name": "Onsite Coding Loop",
                "duration": "4 Hours",
                "difficulty": "Expert",
                "desc": "Exhaustive 4-round loop covering advanced DSA and Behavioral.",
                "topics": [
                    "DP",
                    "Trees",
                    "Leadership Principles"
                ]
            },
            {
                "name": "System Design",
                "duration": "1 Hour",
                "difficulty": "Expert",
                "desc": "High-level architecture design for scalable systems.",
                "topics": [
                    "Microservices",
                    "Sharding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Good to Moderate",
            "remote": "Strict Hybrid (3-4 Days)",
            "vibe": "Process-driven, intense peer pressure but great perks."
        },
        "reality": {
            "pros": [
                "Top 1% compensation and RSUs that actually appreciate.",
                "Work with world-class engineers.",
                "Ultimate resume brand value.",
                "Free food and premium health benefits."
            ],
            "cons": [
                "Intense interview preparation required (months of Leetcode).",
                "Can be highly bureaucratic in legacy orgs.",
                "High expectations resulting in PIP (Performance Improvement Plan) anxiety."
            ]
        }
    },
    {
        "id": "openai",
        "name": "OpenAI",
        "type": "Product/AI",
        "status": "Active",
        "logo": "OPE",
        "rating": 5,
        "aiVerdict": "Ground zero for AI. Requires elite mathematical foundation or world-class systems engineering for scaling infrastructure.",
        "overview": {
            "about": "OpenAI is a leading player in the Product/AI sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.openai.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Phone Screen",
                "duration": "45 Mins",
                "difficulty": "Hard",
                "desc": "Initial technical screen focusing on medium/hard Leetcode.",
                "topics": [
                    "Arrays",
                    "Strings",
                    "Graphs"
                ]
            },
            {
                "name": "Onsite Coding Loop",
                "duration": "4 Hours",
                "difficulty": "Expert",
                "desc": "Exhaustive 4-round loop covering advanced DSA and Behavioral.",
                "topics": [
                    "DP",
                    "Trees",
                    "Leadership Principles"
                ]
            },
            {
                "name": "System Design",
                "duration": "1 Hour",
                "difficulty": "Expert",
                "desc": "High-level architecture design for scalable systems.",
                "topics": [
                    "Microservices",
                    "Sharding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Good to Moderate",
            "remote": "Strict Hybrid (3-4 Days)",
            "vibe": "Process-driven, intense peer pressure but great perks."
        },
        "reality": {
            "pros": [
                "Top 1% compensation and RSUs that actually appreciate.",
                "Work with world-class engineers.",
                "Ultimate resume brand value.",
                "Free food and premium health benefits."
            ],
            "cons": [
                "Intense interview preparation required (months of Leetcode).",
                "Can be highly bureaucratic in legacy orgs.",
                "High expectations resulting in PIP (Performance Improvement Plan) anxiety."
            ]
        }
    },
    {
        "id": "nvidia",
        "name": "Nvidia",
        "type": "Hardware/AI",
        "status": "Active",
        "logo": "NVI",
        "rating": 4.9,
        "aiVerdict": "The undisputed king of the AI boom. Deep focus on CUDA, low-level optimization, and silicon architectures.",
        "overview": {
            "about": "Nvidia is a leading player in the Hardware/AI sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.nvidia.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Phone Screen",
                "duration": "45 Mins",
                "difficulty": "Hard",
                "desc": "Initial technical screen focusing on medium/hard Leetcode.",
                "topics": [
                    "Arrays",
                    "Strings",
                    "Graphs"
                ]
            },
            {
                "name": "Onsite Coding Loop",
                "duration": "4 Hours",
                "difficulty": "Expert",
                "desc": "Exhaustive 4-round loop covering advanced DSA and Behavioral.",
                "topics": [
                    "DP",
                    "Trees",
                    "Leadership Principles"
                ]
            },
            {
                "name": "System Design",
                "duration": "1 Hour",
                "difficulty": "Expert",
                "desc": "High-level architecture design for scalable systems.",
                "topics": [
                    "Microservices",
                    "Sharding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Good to Moderate",
            "remote": "Strict Hybrid (3-4 Days)",
            "vibe": "Process-driven, intense peer pressure but great perks."
        },
        "reality": {
            "pros": [
                "Top 1% compensation and RSUs that actually appreciate.",
                "Work with world-class engineers.",
                "Ultimate resume brand value.",
                "Free food and premium health benefits."
            ],
            "cons": [
                "Intense interview preparation required (months of Leetcode).",
                "Can be highly bureaucratic in legacy orgs.",
                "High expectations resulting in PIP (Performance Improvement Plan) anxiety."
            ]
        }
    },
    {
        "id": "amd",
        "name": "AMD",
        "type": "Hardware",
        "status": "Active",
        "logo": "AMD",
        "rating": 4.3,
        "aiVerdict": "Rising silicon challenger. Strong focus on hardware acceleration, kernel hacking, and semiconductor physics.",
        "overview": {
            "about": "AMD is a leading player in the Hardware sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.amd.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.3,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "intel",
        "name": "Intel",
        "type": "Hardware",
        "status": "Active",
        "logo": "INT",
        "rating": 3.8,
        "aiVerdict": "Legacy titan attempting a foundry pivot. Fabrication engineering and systems-level programming are core.",
        "overview": {
            "about": "Intel is a leading player in the Hardware sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.intel.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "stripe",
        "name": "Stripe",
        "type": "Fintech",
        "status": "Active",
        "logo": "STR",
        "rating": 4.8,
        "aiVerdict": "Developer experience is paramount. Interviews often involve real-world integration sessions rather than purely abstract Leetcode.",
        "overview": {
            "about": "Stripe is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.stripe.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "databricks",
        "name": "Databricks",
        "type": "Product",
        "status": "Active",
        "logo": "DAT",
        "rating": 4.7,
        "aiVerdict": "Big Data royalty. Deep integration of Spark and AI. Spark internals and distributed systems knowledge is heavily tested.",
        "overview": {
            "about": "Databricks is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.databricks.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "airbnb",
        "name": "Airbnb",
        "type": "Product",
        "status": "Inactive",
        "logo": "AIR",
        "rating": 4.6,
        "aiVerdict": "Design and engineering must coexist flawlessly. High bar for frontend architecture and product sense.",
        "overview": {
            "about": "Airbnb is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.airbnb.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "uber",
        "name": "Uber",
        "type": "Product",
        "status": "Active",
        "logo": "UBE",
        "rating": 4.3,
        "aiVerdict": "Logistics at planetary scale. System design rounds focus heavily on geospatial routing, real-time events, and massive concurrency.",
        "overview": {
            "about": "Uber is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.uber.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.3,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "atlassian",
        "name": "Atlassian",
        "type": "Product",
        "status": "Active",
        "logo": "ATL",
        "rating": 4.6,
        "aiVerdict": "B2B SaaS kings. Values practical engineering and long-term maintainability over hyper-optimization.",
        "overview": {
            "about": "Atlassian is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.atlassian.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "snowflake",
        "name": "Snowflake",
        "type": "Product",
        "status": "Active",
        "logo": "SNO",
        "rating": 4.5,
        "aiVerdict": "Data warehouse pioneers. SQL engine optimization and high-performance C++ systems are the core focus.",
        "overview": {
            "about": "Snowflake is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.snowflake.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "palantir",
        "name": "Palantir",
        "type": "Product",
        "status": "Active",
        "logo": "PAL",
        "rating": 4.4,
        "aiVerdict": "Government and enterprise data integration. Forward deployed engineers need strong client skills alongside technical depth.",
        "overview": {
            "about": "Palantir is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.palantir.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "spotify",
        "name": "Spotify",
        "type": "Product",
        "status": "Active",
        "logo": "SPO",
        "rating": 4.5,
        "aiVerdict": "Squad culture. Strong emphasis on agile methodologies, streaming architecture, and audio engineering.",
        "overview": {
            "about": "Spotify is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.spotify.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "pinterest",
        "name": "Pinterest",
        "type": "Product",
        "status": "Active",
        "logo": "PIN",
        "rating": 4.2,
        "aiVerdict": "Visual discovery engine. Expertise in image processing, recommendation systems, and large-scale Graph ML.",
        "overview": {
            "about": "Pinterest is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.pinterest.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "twitter",
        "name": "X (Twitter)",
        "type": "Product",
        "status": "Active",
        "logo": "TWI",
        "rating": 3.5,
        "aiVerdict": "Hardcore engineering culture post-acquisition. Expect extreme ownership, rapid shipping, and deep systems knowledge.",
        "overview": {
            "about": "X (Twitter) is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.twitter.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "optiver",
        "name": "Optiver",
        "type": "HFT",
        "status": "Active",
        "logo": "OPT",
        "rating": 4.5,
        "aiVerdict": "Nanosecond latency matters. Extreme C++ testing, hardware-software co-design, and mental math rigor.",
        "overview": {
            "about": "Optiver is a leading player in the HFT sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.optiver.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Quant Developer",
                "description": "C++ core focus. Low latency systems.",
                "ctc": "₹65.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹20.00 LPA Bonus",
                    "deductions": "₹95,000/mo"
                }
            },
            {
                "name": "Senior Quant",
                "description": "Algorithm design and advanced mathematics.",
                "ctc": "₹1.50 CR",
                "inHand": "₹7,50,000/mo",
                "breakdown": {
                    "base": "₹70.00 LPA",
                    "variable": "₹80.00 LPA Bonus",
                    "deductions": "₹2,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "WPF (Legacy)"
            ],
            "backend": [
                "C++17/20",
                "Rust",
                "Python"
            ],
            "infra": [
                "Bare Metal Linux",
                "FPGA",
                "Custom Kernel"
            ],
            "data": [
                "KDB+",
                "TimescaleDB",
                "Custom In-Memory Arrays"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "2 Hours",
                "difficulty": "Nightmare",
                "desc": "Advanced mathematics, probability algorithms, and C++ memory constraints.",
                "topics": [
                    "Math",
                    "C++ Internals"
                ]
            },
            {
                "name": "Superday",
                "duration": "5 Hours",
                "difficulty": "Nightmare",
                "desc": "Grueling back-to-back rounds with Quants and Devs testing speed.",
                "topics": [
                    "Algorithmic Trading",
                    "Concurrency"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Intense",
            "remote": "Strictly Office (Trading floor)",
            "vibe": "Utilitarian, ultra-competitive, intellectually humbling."
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "tower",
        "name": "Tower Research",
        "type": "HFT",
        "status": "Active",
        "logo": "TOW",
        "rating": 4.6,
        "aiVerdict": "Quantitative engineering focus. Algorithms must be computationally cheap and mathematically sound.",
        "overview": {
            "about": "Tower Research is a leading player in the HFT sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.tower.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Quant Developer",
                "description": "C++ core focus. Low latency systems.",
                "ctc": "₹65.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹20.00 LPA Bonus",
                    "deductions": "₹95,000/mo"
                }
            },
            {
                "name": "Senior Quant",
                "description": "Algorithm design and advanced mathematics.",
                "ctc": "₹1.50 CR",
                "inHand": "₹7,50,000/mo",
                "breakdown": {
                    "base": "₹70.00 LPA",
                    "variable": "₹80.00 LPA Bonus",
                    "deductions": "₹2,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "WPF (Legacy)"
            ],
            "backend": [
                "C++17/20",
                "Rust",
                "Python"
            ],
            "infra": [
                "Bare Metal Linux",
                "FPGA",
                "Custom Kernel"
            ],
            "data": [
                "KDB+",
                "TimescaleDB",
                "Custom In-Memory Arrays"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "2 Hours",
                "difficulty": "Nightmare",
                "desc": "Advanced mathematics, probability algorithms, and C++ memory constraints.",
                "topics": [
                    "Math",
                    "C++ Internals"
                ]
            },
            {
                "name": "Superday",
                "duration": "5 Hours",
                "difficulty": "Nightmare",
                "desc": "Grueling back-to-back rounds with Quants and Devs testing speed.",
                "topics": [
                    "Algorithmic Trading",
                    "Concurrency"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Intense",
            "remote": "Strictly Office (Trading floor)",
            "vibe": "Utilitarian, ultra-competitive, intellectually humbling."
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "jane-street",
        "name": "Jane Street",
        "type": "HFT",
        "status": "Active",
        "logo": "JAN",
        "rating": 4.8,
        "aiVerdict": "OCaml wizards. Highly academic culture blending functional programming with financial modeling.",
        "overview": {
            "about": "Jane Street is a leading player in the HFT sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.jane-street.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Quant Developer",
                "description": "C++ core focus. Low latency systems.",
                "ctc": "₹65.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹20.00 LPA Bonus",
                    "deductions": "₹95,000/mo"
                }
            },
            {
                "name": "Senior Quant",
                "description": "Algorithm design and advanced mathematics.",
                "ctc": "₹1.50 CR",
                "inHand": "₹7,50,000/mo",
                "breakdown": {
                    "base": "₹70.00 LPA",
                    "variable": "₹80.00 LPA Bonus",
                    "deductions": "₹2,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "WPF (Legacy)"
            ],
            "backend": [
                "C++17/20",
                "Rust",
                "Python"
            ],
            "infra": [
                "Bare Metal Linux",
                "FPGA",
                "Custom Kernel"
            ],
            "data": [
                "KDB+",
                "TimescaleDB",
                "Custom In-Memory Arrays"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "2 Hours",
                "difficulty": "Nightmare",
                "desc": "Advanced mathematics, probability algorithms, and C++ memory constraints.",
                "topics": [
                    "Math",
                    "C++ Internals"
                ]
            },
            {
                "name": "Superday",
                "duration": "5 Hours",
                "difficulty": "Nightmare",
                "desc": "Grueling back-to-back rounds with Quants and Devs testing speed.",
                "topics": [
                    "Algorithmic Trading",
                    "Concurrency"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Intense",
            "remote": "Strictly Office (Trading floor)",
            "vibe": "Utilitarian, ultra-competitive, intellectually humbling."
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "deshaw",
        "name": "D.E. Shaw",
        "type": "HFT",
        "status": "Active",
        "logo": "DES",
        "rating": 4.7,
        "aiVerdict": "Pioneers of computational finance. Looks for exceptional polymaths; technical brilliance is a baseline.",
        "overview": {
            "about": "D.E. Shaw is a leading player in the HFT sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.deshaw.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Quant Developer",
                "description": "C++ core focus. Low latency systems.",
                "ctc": "₹65.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹20.00 LPA Bonus",
                    "deductions": "₹95,000/mo"
                }
            },
            {
                "name": "Senior Quant",
                "description": "Algorithm design and advanced mathematics.",
                "ctc": "₹1.50 CR",
                "inHand": "₹7,50,000/mo",
                "breakdown": {
                    "base": "₹70.00 LPA",
                    "variable": "₹80.00 LPA Bonus",
                    "deductions": "₹2,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "WPF (Legacy)"
            ],
            "backend": [
                "C++17/20",
                "Rust",
                "Python"
            ],
            "infra": [
                "Bare Metal Linux",
                "FPGA",
                "Custom Kernel"
            ],
            "data": [
                "KDB+",
                "TimescaleDB",
                "Custom In-Memory Arrays"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "2 Hours",
                "difficulty": "Nightmare",
                "desc": "Advanced mathematics, probability algorithms, and C++ memory constraints.",
                "topics": [
                    "Math",
                    "C++ Internals"
                ]
            },
            {
                "name": "Superday",
                "duration": "5 Hours",
                "difficulty": "Nightmare",
                "desc": "Grueling back-to-back rounds with Quants and Devs testing speed.",
                "topics": [
                    "Algorithmic Trading",
                    "Concurrency"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Intense",
            "remote": "Strictly Office (Trading floor)",
            "vibe": "Utilitarian, ultra-competitive, intellectually humbling."
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "graviton",
        "name": "Graviton Research",
        "type": "HFT",
        "status": "Active",
        "logo": "GRA",
        "rating": 4.6,
        "aiVerdict": "Aggressive Indian HFT. Top IIT/NIT tier heavily preferred. Algorithmic puzzle-solving is a major filter.",
        "overview": {
            "about": "Graviton Research is a leading player in the HFT sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.graviton.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Quant Developer",
                "description": "C++ core focus. Low latency systems.",
                "ctc": "₹65.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹20.00 LPA Bonus",
                    "deductions": "₹95,000/mo"
                }
            },
            {
                "name": "Senior Quant",
                "description": "Algorithm design and advanced mathematics.",
                "ctc": "₹1.50 CR",
                "inHand": "₹7,50,000/mo",
                "breakdown": {
                    "base": "₹70.00 LPA",
                    "variable": "₹80.00 LPA Bonus",
                    "deductions": "₹2,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "WPF (Legacy)"
            ],
            "backend": [
                "C++17/20",
                "Rust",
                "Python"
            ],
            "infra": [
                "Bare Metal Linux",
                "FPGA",
                "Custom Kernel"
            ],
            "data": [
                "KDB+",
                "TimescaleDB",
                "Custom In-Memory Arrays"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "2 Hours",
                "difficulty": "Nightmare",
                "desc": "Advanced mathematics, probability algorithms, and C++ memory constraints.",
                "topics": [
                    "Math",
                    "C++ Internals"
                ]
            },
            {
                "name": "Superday",
                "duration": "5 Hours",
                "difficulty": "Nightmare",
                "desc": "Grueling back-to-back rounds with Quants and Devs testing speed.",
                "topics": [
                    "Algorithmic Trading",
                    "Concurrency"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Intense",
            "remote": "Strictly Office (Trading floor)",
            "vibe": "Utilitarian, ultra-competitive, intellectually humbling."
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "plaid",
        "name": "Plaid",
        "type": "Fintech",
        "status": "Active",
        "logo": "PLA",
        "rating": 4.4,
        "aiVerdict": "The API for finance. Security, reliable parsing of legacy bank data, and fault tolerance are key themes.",
        "overview": {
            "about": "Plaid is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.plaid.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "robinhood",
        "name": "Robinhood",
        "type": "Fintech",
        "status": "Active",
        "logo": "ROB",
        "rating": 4,
        "aiVerdict": "Democratizing finance. Focus on scalable backend order routing and butter-smooth mobile execution.",
        "overview": {
            "about": "Robinhood is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.robinhood.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "coinbase",
        "name": "Coinbase",
        "type": "Crypto",
        "status": "Active",
        "logo": "COI",
        "rating": 4.1,
        "aiVerdict": "Regulated crypto exchange. Security engineering and reliable distributed state management are critical.",
        "overview": {
            "about": "Coinbase is a leading player in the Crypto sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.coinbase.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "binance",
        "name": "Binance",
        "type": "Crypto",
        "status": "Active",
        "logo": "BIN",
        "rating": 3.9,
        "aiVerdict": "Global crypto giant. Remote-first, high-velocity shipping. Comfort with high-risk, high-reward engineering.",
        "overview": {
            "about": "Binance is a leading player in the Crypto sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.binance.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "kraken",
        "name": "Kraken",
        "type": "Crypto",
        "status": "Active",
        "logo": "KRA",
        "rating": 4,
        "aiVerdict": "Security-first crypto exchange. Deep expertise in cryptography and Rust/Go backends.",
        "overview": {
            "about": "Kraken is a leading player in the Crypto sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.kraken.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1 (L3)",
                "description": "Entry-level SWE. Focus on execution.",
                "ctc": "₹30.00 LPA",
                "inHand": "₹1,50,000/mo",
                "breakdown": {
                    "base": "₹18.00 LPA",
                    "variable": "₹3L (+ ₹9L RSUs)",
                    "deductions": "₹40,000/mo"
                }
            },
            {
                "name": "SDE 2 (L4)",
                "description": "Independent execution. System design knowledge required.",
                "ctc": "₹45.00 LPA",
                "inHand": "₹2,20,000/mo",
                "breakdown": {
                    "base": "₹25.00 LPA",
                    "variable": "₹5L (+ ₹15L RSUs)",
                    "deductions": "₹65,000/mo"
                }
            },
            {
                "name": "Senior SDE (L5)",
                "description": "Tech lead for projects. Architecture and mentoring.",
                "ctc": "₹75.00 LPA",
                "inHand": "₹3,50,000/mo",
                "breakdown": {
                    "base": "₹40.00 LPA",
                    "variable": "₹10L (+ ₹25L RSUs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "cred",
        "name": "CRED",
        "type": "Startup",
        "status": "Active",
        "logo": "CRE",
        "rating": 4.4,
        "aiVerdict": "Design and performance obsessed. Frontend polish must be flawless; backend handles complex financial state machines.",
        "overview": {
            "about": "CRED is a leading player in the Startup sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.cred.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "razorpay",
        "name": "Razorpay",
        "type": "Fintech",
        "status": "Active",
        "logo": "RAZ",
        "rating": 4.5,
        "aiVerdict": "Payment gateway leader. Requires deep understanding of API idempotency, ACID compliance, and zero-downtime deployments.",
        "overview": {
            "about": "Razorpay is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.razorpay.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "zepto",
        "name": "Zepto",
        "type": "Startup",
        "status": "Active",
        "logo": "ZEP",
        "rating": 4.2,
        "aiVerdict": "10-minute delivery execution. Hyper-local routing algorithms and extremely fast caching layers are paramount.",
        "overview": {
            "about": "Zepto is a leading player in the Startup sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.zepto.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "zomato",
        "name": "Zomato",
        "type": "Product",
        "status": "Active",
        "logo": "ZOM",
        "rating": 4.3,
        "aiVerdict": "Food-tech pioneer. Scale is massive. Expect intense system design rounds focused on sudden traffic spikes.",
        "overview": {
            "about": "Zomato is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.zomato.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.3,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "swiggy",
        "name": "Swiggy",
        "type": "Product",
        "status": "Active",
        "logo": "SWI",
        "rating": 4.1,
        "aiVerdict": "Logistics and food delivery. High focus on matching algorithms, driver routing, and real-time state tracking.",
        "overview": {
            "about": "Swiggy is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.swiggy.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "flipkart",
        "name": "Flipkart",
        "type": "Product",
        "status": "Active",
        "logo": "FLI",
        "rating": 4,
        "aiVerdict": "Indian e-commerce giant. Supply chain management and high-throughput transaction systems are the core tech challenges.",
        "overview": {
            "about": "Flipkart is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.flipkart.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "phonepe",
        "name": "PhonePe",
        "type": "Fintech",
        "status": "Active",
        "logo": "PHO",
        "rating": 4.3,
        "aiVerdict": "UPI dominance. Handling billions of micro-transactions. Java/Go concurrency and database sharding are essential.",
        "overview": {
            "about": "PhonePe is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.phonepe.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.3,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "groww",
        "name": "Groww",
        "type": "Fintech",
        "status": "Active",
        "logo": "GRO",
        "rating": 4.4,
        "aiVerdict": "Investment tech. Security, real-time market data ingestion, and scalable user onboarding.",
        "overview": {
            "about": "Groww is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.groww.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "zerodha",
        "name": "Zerodha",
        "type": "Fintech",
        "status": "Inactive",
        "logo": "ZER",
        "rating": 4.8,
        "aiVerdict": "Bootstrapped titan. Lean engineering team. Deep expertise in Go and writing incredibly efficient, simple software.",
        "overview": {
            "about": "Zerodha is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.zerodha.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "ola",
        "name": "Ola",
        "type": "Product",
        "status": "Active",
        "logo": "OLA",
        "rating": 3.5,
        "aiVerdict": "Mobility and EV focus. High attrition but intense learning. Software/Hardware integration is becoming central.",
        "overview": {
            "about": "Ola is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.ola.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "oyo",
        "name": "OYO",
        "type": "Product",
        "status": "Active",
        "logo": "OYO",
        "rating": 3.2,
        "aiVerdict": "Hospitality tech. Fast-paced, aggressive growth focus. Legacy codebase modernization is an ongoing challenge.",
        "overview": {
            "about": "OYO is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.oyo.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "meesho",
        "name": "Meesho",
        "type": "Product",
        "status": "Active",
        "logo": "MEE",
        "rating": 4.1,
        "aiVerdict": "Social commerce. Scaling to Tier 2/3 cities. Focus on low-bandwidth optimization and scalable discovery algorithms.",
        "overview": {
            "about": "Meesho is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.meesho.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "postman",
        "name": "Postman",
        "type": "Product",
        "status": "Active",
        "logo": "POS",
        "rating": 4.6,
        "aiVerdict": "API platform leader. Core product is developer tooling. Deep understanding of network protocols and ASTs.",
        "overview": {
            "about": "Postman is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.postman.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "browserstack",
        "name": "BrowserStack",
        "type": "Product",
        "status": "Active",
        "logo": "BRO",
        "rating": 4.5,
        "aiVerdict": "Testing infrastructure. Managing massive device farms requires incredibly robust virtualization and CI/CD integration.",
        "overview": {
            "about": "BrowserStack is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.browserstack.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "myntra",
        "name": "Myntra",
        "type": "Product",
        "status": "Active",
        "logo": "MYN",
        "rating": 4.1,
        "aiVerdict": "Fashion e-commerce. High focus on personalized recommendation engines and visual search AI.",
        "overview": {
            "about": "Myntra is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.myntra.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "paytm",
        "name": "Paytm",
        "type": "Fintech",
        "status": "Active",
        "logo": "PAY",
        "rating": 3.6,
        "aiVerdict": "Digital payments pioneer. Complex regulatory environment requires robust auditing and legacy system integration.",
        "overview": {
            "about": "Paytm is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.paytm.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "makemytrip",
        "name": "MakeMyTrip",
        "type": "Product",
        "status": "Active",
        "logo": "MAK",
        "rating": 3.9,
        "aiVerdict": "Travel tech. Complex inventory management, dynamic pricing engines, and GDS (Global Distribution System) integrations.",
        "overview": {
            "about": "MakeMyTrip is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.makemytrip.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "policybazaar",
        "name": "PolicyBazaar",
        "type": "Fintech",
        "status": "Active",
        "logo": "POL",
        "rating": 3.7,
        "aiVerdict": "Insurtech leader. High volume data processing and complex rules engines for policy quotation.",
        "overview": {
            "about": "PolicyBazaar is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.policybazaar.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "nykaa",
        "name": "Nykaa",
        "type": "Product",
        "status": "Active",
        "logo": "NYK",
        "rating": 4,
        "aiVerdict": "Beauty e-commerce. Focus on omnichannel retail tech, inventory synchronization, and user experience.",
        "overview": {
            "about": "Nykaa is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.nykaa.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "byjus",
        "name": "Byju's",
        "type": "EdTech",
        "status": "Inactive",
        "logo": "BYJ",
        "rating": 2.5,
        "aiVerdict": "Edtech giant currently restructuring. Focus was on content delivery scaling and aggressive acquisition integration.",
        "overview": {
            "about": "Byju's is a leading player in the EdTech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.byjus.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 2.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "unacademy",
        "name": "Unacademy",
        "type": "EdTech",
        "status": "Active",
        "logo": "UNA",
        "rating": 3.8,
        "aiVerdict": "Live learning platform. Real-time video infrastructure, WebRTC, and low-latency interactive tools are core.",
        "overview": {
            "about": "Unacademy is a leading player in the EdTech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.unacademy.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "SDE 1",
                "description": "React/Node/Go execution at speed.",
                "ctc": "₹22.00 LPA",
                "inHand": "₹1,35,000/mo",
                "breakdown": {
                    "base": "₹16.00 LPA",
                    "variable": "₹6.00 LPA (ESOPs/Bonus)",
                    "deductions": "₹35,000/mo"
                }
            },
            {
                "name": "SDE 2",
                "description": "API and DB optimization scaling.",
                "ctc": "₹35.00 LPA",
                "inHand": "₹2,00,000/mo",
                "breakdown": {
                    "base": "₹26.00 LPA",
                    "variable": "₹9.00 LPA (ESOPs)",
                    "deductions": "₹60,000/mo"
                }
            },
            {
                "name": "Staff Engineer",
                "description": "End-to-end ownership. Architecture.",
                "ctc": "₹60.00 LPA",
                "inHand": "₹3,20,000/mo",
                "breakdown": {
                    "base": "₹45.00 LPA",
                    "variable": "₹15.00 LPA (ESOPs)",
                    "deductions": "₹1,10,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Machine Coding Round",
                "duration": "2 Hours",
                "difficulty": "Hard",
                "desc": "Live pairing to build a feature from scratch (e.g., a Parking Lot or Trello clone).",
                "topics": [
                    "LLD",
                    "State Management"
                ]
            },
            {
                "name": "DSA / Problem Solving",
                "duration": "1 Hour",
                "difficulty": "Moderate",
                "desc": "Standard Leetcode Mediums focusing on optimization.",
                "topics": [
                    "Hash Maps",
                    "Sliding Window"
                ]
            },
            {
                "name": "Hiring Manager",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Past projects, architecture discussion, culture fit.",
                "topics": [
                    "Impact",
                    "Scale"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "deloitte",
        "name": "Deloitte",
        "type": "Consulting",
        "status": "Active",
        "logo": "DEL",
        "rating": 3.9,
        "aiVerdict": "Client-facing tech delivery. Less about deep systems programming, more about enterprise architecture and integration.",
        "overview": {
            "about": "Deloitte is a leading player in the Consulting sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.deloitte.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "pwc",
        "name": "PwC",
        "type": "Consulting",
        "status": "Active",
        "logo": "PWC",
        "rating": 3.8,
        "aiVerdict": "Digital transformation focus. Strong emphasis on cloud migrations (AWS/Azure) and data warehousing.",
        "overview": {
            "about": "PwC is a leading player in the Consulting sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.pwc.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "ey",
        "name": "EY",
        "type": "Consulting",
        "status": "Active",
        "logo": "EY",
        "rating": 3.7,
        "aiVerdict": "Focus on risk and financial tech consulting. Experience with ERPs (SAP/Oracle) and data governance is valued.",
        "overview": {
            "about": "EY is a leading player in the Consulting sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.ey.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "kpmg",
        "name": "KPMG",
        "type": "Consulting",
        "status": "Inactive",
        "logo": "KPM",
        "rating": 3.8,
        "aiVerdict": "Advisory services. Implementation of third-party solutions rather than building from scratch. Certification-heavy.",
        "overview": {
            "about": "KPMG is a leading player in the Consulting sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.kpmg.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "mckinsey",
        "name": "McKinsey & Co",
        "type": "Consulting",
        "status": "Active",
        "logo": "MCK",
        "rating": 4.4,
        "aiVerdict": "Elite strategy. Engineering teams build rapid prototypes for CxO demos. Generalist problem-solving > specialists.",
        "overview": {
            "about": "McKinsey & Co is a leading player in the Consulting sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.mckinsey.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "bcg",
        "name": "BCG X",
        "type": "Consulting",
        "status": "Active",
        "logo": "BCG",
        "rating": 4.3,
        "aiVerdict": "Tech build arm of BCG. Operates like a startup within a consultancy. Focus on AI and data-driven product builds.",
        "overview": {
            "about": "BCG X is a leading player in the Consulting sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.bcg.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.3,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "bain",
        "name": "Bain & Company",
        "type": "Consulting",
        "status": "Active",
        "logo": "BAI",
        "rating": 4.5,
        "aiVerdict": "High-level strategic implementation. Values strong communicators who can translate code into business ROI.",
        "overview": {
            "about": "Bain & Company is a leading player in the Consulting sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.bain.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "cisco",
        "name": "Cisco",
        "type": "Product",
        "status": "Active",
        "logo": "CIS",
        "rating": 4.2,
        "aiVerdict": "Networking giants. Deep C/C++, embedded systems, and network protocol expertise is highly sought after.",
        "overview": {
            "about": "Cisco is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.cisco.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "adobe",
        "name": "Adobe",
        "type": "Product",
        "status": "Active",
        "logo": "ADO",
        "rating": 4.4,
        "aiVerdict": "Creative tool monopolies. Focus on computer graphics, C++, and migrating heavy desktop apps to the browser/cloud.",
        "overview": {
            "about": "Adobe is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.adobe.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "oracle",
        "name": "Oracle",
        "type": "Product",
        "status": "Active",
        "logo": "ORA",
        "rating": 3.9,
        "aiVerdict": "Database and Cloud infra. Massive legacy Java codebases. Highly structured, process-heavy engineering.",
        "overview": {
            "about": "Oracle is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.oracle.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "ibm",
        "name": "IBM",
        "type": "Service/Product",
        "status": "Active",
        "logo": "IBM",
        "rating": 3.8,
        "aiVerdict": "Hybrid cloud and AI (Watson). Enterprise-grade software engineering, but heavily siloed by business units.",
        "overview": {
            "about": "IBM is a leading player in the Service/Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.ibm.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "salesforce",
        "name": "Salesforce",
        "type": "Product",
        "status": "Inactive",
        "logo": "SAL",
        "rating": 4.3,
        "aiVerdict": "CRM kings. Apex and Lightning components. Very specific ecosystem; deep platform knowledge pays well.",
        "overview": {
            "about": "Salesforce is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.salesforce.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.3,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "sap",
        "name": "SAP",
        "type": "Product",
        "status": "Active",
        "logo": "SAP",
        "rating": 4.1,
        "aiVerdict": "German enterprise software. ABAP and Java. Stable, slow-moving, heavily entrenched in global supply chains.",
        "overview": {
            "about": "SAP is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.sap.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "vmware",
        "name": "VMware",
        "type": "Product",
        "status": "Active",
        "logo": "VMW",
        "rating": 3.7,
        "aiVerdict": "Virtualization core. Systems-level programming (C/C++/Go). Currently navigating Broadcom acquisition changes.",
        "overview": {
            "about": "VMware is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.vmware.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "intuit",
        "name": "Intuit",
        "type": "Product",
        "status": "Active",
        "logo": "INT",
        "rating": 4.5,
        "aiVerdict": "Fintech for the masses (TurboTax). Strong focus on frontend craftsmanship, open-source contribution, and React expertise.",
        "overview": {
            "about": "Intuit is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.intuit.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "gs",
        "name": "Goldman Sachs",
        "type": "Fintech",
        "status": "Active",
        "logo": "GS",
        "rating": 4,
        "aiVerdict": "Proprietary tech stack (Slang). Focus on data modeling, risk engines, and strict compliance architectures.",
        "overview": {
            "about": "Goldman Sachs is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.gs.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "jpmc",
        "name": "JPMorgan Chase",
        "type": "Fintech",
        "status": "Active",
        "logo": "JPM",
        "rating": 4.1,
        "aiVerdict": "Massive tech budget. Moving heavily to public cloud (AWS). Java/Spring Boot dominates the backend.",
        "overview": {
            "about": "JPMorgan Chase is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.jpmc.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "morgan-stanley",
        "name": "Morgan Stanley",
        "type": "Fintech",
        "status": "Active",
        "logo": "MOR",
        "rating": 4,
        "aiVerdict": "Similar to JPMC. Enterprise Java, C++ for trading desks, and a strong push towards modernizing legacy mainframes.",
        "overview": {
            "about": "Morgan Stanley is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.morgan-stanley.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "wells-fargo",
        "name": "Wells Fargo",
        "type": "Fintech",
        "status": "Active",
        "logo": "WEL",
        "rating": 3.8,
        "aiVerdict": "Heavy regulatory environment. Focus on stability, security, and gradual modernization of massive retail banking systems.",
        "overview": {
            "about": "Wells Fargo is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.wells-fargo.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "amex",
        "name": "American Express",
        "type": "Fintech",
        "status": "Active",
        "logo": "AME",
        "rating": 4.2,
        "aiVerdict": "Payment network processing. High reliance on Go and Java for highly concurrent, available processing systems.",
        "overview": {
            "about": "American Express is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.amex.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "barclays",
        "name": "Barclays",
        "type": "Fintech",
        "status": "Active",
        "logo": "BAR",
        "rating": 3.9,
        "aiVerdict": "Traditional UK banking. Mix of legacy infrastructure and modern digital banking initiatives (mainly Java/React).",
        "overview": {
            "about": "Barclays is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.barclays.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "citi",
        "name": "Citi",
        "type": "Fintech",
        "status": "Active",
        "logo": "CIT",
        "rating": 3.8,
        "aiVerdict": "Global consumer banking. Complex architectural landscape. Values experience navigating big-bank bureaucracy.",
        "overview": {
            "about": "Citi is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.citi.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "bofa",
        "name": "Bank of America",
        "type": "Fintech",
        "status": "Active",
        "logo": "BOF",
        "rating": 3.9,
        "aiVerdict": "Massive scale consumer retail banking. High focus on security, Quartz platform knowledge, and Java.",
        "overview": {
            "about": "Bank of America is a leading player in the Fintech sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.bofa.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "tcs",
        "name": "TCS",
        "type": "Service",
        "status": "Active",
        "logo": "TCS",
        "rating": 3.8,
        "aiVerdict": "Focuses on mass hiring with high academic filters. Volume and process adherence over pure engineering optimization.",
        "overview": {
            "about": "TCS is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.tcs.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "infosys",
        "name": "Infosys",
        "type": "Service",
        "status": "Active",
        "logo": "INF",
        "rating": 3.7,
        "aiVerdict": "Large-scale training infrastructure (Mysore campus). Project allocation determines tech stack; heavily client-dependent.",
        "overview": {
            "about": "Infosys is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.infosys.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "wipro",
        "name": "Wipro",
        "type": "Service",
        "status": "Active",
        "logo": "WIP",
        "rating": 3.5,
        "aiVerdict": "Traditional IT outsourcing. Focus on support, maintenance, and enterprise legacy migrations.",
        "overview": {
            "about": "Wipro is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.wipro.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "hcl",
        "name": "HCLTech",
        "type": "Service",
        "status": "Active",
        "logo": "HCL",
        "rating": 3.6,
        "aiVerdict": "Stronger hardware/embedded footprint than other WITCH companies, alongside standard IT services.",
        "overview": {
            "about": "HCLTech is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.hcl.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "techm",
        "name": "Tech Mahindra",
        "type": "Service",
        "status": "Inactive",
        "logo": "TEC",
        "rating": 3.4,
        "aiVerdict": "Telecom domain heavy. Standard IT service model with a focus on networking and communications clients.",
        "overview": {
            "about": "Tech Mahindra is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.techm.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "cognizant",
        "name": "Cognizant",
        "type": "Service",
        "status": "Active",
        "logo": "COG",
        "rating": 3.6,
        "aiVerdict": "Aggressive growth, heavily reliant on US healthcare and financial sector clients. MERN/Java Fullstack is in demand.",
        "overview": {
            "about": "Cognizant is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.cognizant.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "capgemini",
        "name": "Capgemini",
        "type": "Service",
        "status": "Active",
        "logo": "CAP",
        "rating": 3.7,
        "aiVerdict": "French multinational. Slightly better work culture than native Indian WITCH, but similar business model.",
        "overview": {
            "about": "Capgemini is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.capgemini.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "accenture",
        "name": "Accenture",
        "type": "Service",
        "status": "Active",
        "logo": "ACC",
        "rating": 4,
        "aiVerdict": "A step above standard WITCH. Stronger consulting arm. Focus on premium digital transformations (Cloud/AI).",
        "overview": {
            "about": "Accenture is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.accenture.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "lnt",
        "name": "LTIMindtree",
        "type": "Service",
        "status": "Active",
        "logo": "LNT",
        "rating": 3.8,
        "aiVerdict": "Merged entity aiming for Tier-1 service status. Strong execution focus across various domains.",
        "overview": {
            "about": "LTIMindtree is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.lnt.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "mphasis",
        "name": "Mphasis",
        "type": "Service",
        "status": "Active",
        "logo": "MPH",
        "rating": 3.5,
        "aiVerdict": "Heavy focus on BFSI (Banking, Financial Services, Insurance) clients. Legacy system modernization.",
        "overview": {
            "about": "Mphasis is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.mphasis.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "100,000+ Employees",
            "rating": 3.5,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Strictly 60% or 6.0+ CGPA throughout (10th, 12th, UG).",
            "backlogs": "Zero active backlogs allowed at the time of joining/interview.",
            "gaps": "Maximum 1 year allowed (requires valid sworn affidavit).",
            "notes": "Heavy automated ATS filtering. Minor degree mismatches or fractional CGPA drops result in automatic 6-month blacklisting."
        },
        "culture": {
            "wlb": "Good (Bench) / Poor (Project)",
            "remote": "Mandatory Office (5 Days)",
            "vibe": "Hierarchical, slow moving, bureaucratic."
        },
        "reality": {
            "pros": [
                "High job security (long bench periods without firing).",
                "Good starting point for freshers to get paid training.",
                "Onsite opportunities (H1B/L1) after 3-4 years in specific verticals."
            ],
            "cons": [
                "Very low starting salary that rarely compounds quickly.",
                "Random project and tech stack allocation (you might be mapped to testing).",
                "Strict hierarchy, timesheets, and rigid HR rules."
            ]
        }
    },
    {
        "id": "celebal",
        "name": "Celebal Technologies",
        "type": "Data/AI Service",
        "status": "Active",
        "logo": "CEL",
        "rating": 4.1,
        "aiVerdict": "Niche expertise in DataBricks, Snowflake, and Azure AI. High demand for data engineers over SWEs.",
        "overview": {
            "about": "Celebal Technologies is a leading player in the Data/AI Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.celebal.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Vue.js",
                "Salesforce LWC"
            ],
            "backend": [
                "Node.js",
                "Apex",
                "Python"
            ],
            "infra": [
                "Salesforce Clouds",
                "AWS",
                "Vercel"
            ],
            "data": [
                "MongoDB",
                "PostgreSQL",
                "SOQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "cyntexa",
        "name": "Cyntexa",
        "type": "Cloud/Salesforce",
        "status": "Active",
        "logo": "CYN",
        "rating": 4,
        "aiVerdict": "Salesforce consulting powerhouse. Niche focus; requires specialized Apex/LWC knowledge rather than general DSA.",
        "overview": {
            "about": "Cyntexa is a leading player in the Cloud/Salesforce sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.cyntexa.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Vue.js",
                "Salesforce LWC"
            ],
            "backend": [
                "Node.js",
                "Apex",
                "Python"
            ],
            "infra": [
                "Salesforce Clouds",
                "AWS",
                "Vercel"
            ],
            "data": [
                "MongoDB",
                "PostgreSQL",
                "SOQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "xplore",
        "name": "Xplore Technologies",
        "type": "Service",
        "status": "Active",
        "logo": "XPL",
        "rating": 3.9,
        "aiVerdict": "Boutique service firm. Projects can be more modern (React/Go) compared to massive WITCH legacy accounts.",
        "overview": {
            "about": "Xplore Technologies is a leading player in the Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.xplore.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Vue.js",
                "Salesforce LWC"
            ],
            "backend": [
                "Node.js",
                "Apex",
                "Python"
            ],
            "infra": [
                "Salesforce Clouds",
                "AWS",
                "Vercel"
            ],
            "data": [
                "MongoDB",
                "PostgreSQL",
                "SOQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "persistent",
        "name": "Persistent Systems",
        "type": "Product/Service",
        "status": "Active",
        "logo": "PER",
        "rating": 4,
        "aiVerdict": "Strong product engineering pedigree (OPD). Operates more like a product company than a pure service firm.",
        "overview": {
            "about": "Persistent Systems is a leading player in the Product/Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.persistent.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Vue.js",
                "Salesforce LWC"
            ],
            "backend": [
                "Node.js",
                "Apex",
                "Python"
            ],
            "infra": [
                "Salesforce Clouds",
                "AWS",
                "Vercel"
            ],
            "data": [
                "MongoDB",
                "PostgreSQL",
                "SOQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "thoughtworks",
        "name": "ThoughtWorks",
        "type": "Consulting",
        "status": "Active",
        "logo": "THO",
        "rating": 4.3,
        "aiVerdict": "Engineering purists. TDD, Pair Programming, and Martin Fowler principles are treated as gospel.",
        "overview": {
            "about": "ThoughtWorks is a leading player in the Consulting sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.thoughtworks.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.3,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React.js",
                "JSP"
            ],
            "backend": [
                "Java Spring Boot",
                "C# .NET",
                "Node.js"
            ],
            "infra": [
                "Azure",
                "AWS",
                "On-Premises Servers"
            ],
            "data": [
                "Oracle DB",
                "MS SQL Server",
                "MySQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "zoho",
        "name": "Zoho",
        "type": "Product",
        "status": "Inactive",
        "logo": "ZOH",
        "rating": 4.6,
        "aiVerdict": "Bootstrapped Indian SaaS giant. Values long-term loyalty and deep technical fundamentals over fancy degrees.",
        "overview": {
            "about": "Zoho is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.zoho.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Vue.js",
                "Salesforce LWC"
            ],
            "backend": [
                "Node.js",
                "Apex",
                "Python"
            ],
            "infra": [
                "Salesforce Clouds",
                "AWS",
                "Vercel"
            ],
            "data": [
                "MongoDB",
                "PostgreSQL",
                "SOQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "toptal",
        "name": "Toptal",
        "type": "Remote Network",
        "status": "Active",
        "logo": "TOP",
        "rating": 4.4,
        "aiVerdict": "Gig economy for the elite. Grueling multi-stage technical screening focusing on independent, senior-level capability.",
        "overview": {
            "about": "Toptal is a leading player in the Remote Network sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.toptal.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Excellent",
            "remote": "100% Remote Forever",
            "vibe": "Asynchronous, output-driven, lonely for some."
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "turing",
        "name": "Turing",
        "type": "Remote Network",
        "status": "Active",
        "logo": "TUR",
        "rating": 4,
        "aiVerdict": "AI-vetted remote talent matching. Automated Leetcode-style screening followed by specific stack assessments.",
        "overview": {
            "about": "Turing is a leading player in the Remote Network sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.turing.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Excellent",
            "remote": "100% Remote Forever",
            "vibe": "Asynchronous, output-driven, lonely for some."
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "andela",
        "name": "Andela",
        "type": "Remote Network",
        "status": "Active",
        "logo": "AND",
        "rating": 4.2,
        "aiVerdict": "Global talent network. Focus on embedded team augmentation; requires stellar communication and remote collaboration skills.",
        "overview": {
            "about": "Andela is a leading player in the Remote Network sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.andela.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Excellent",
            "remote": "100% Remote Forever",
            "vibe": "Asynchronous, output-driven, lonely for some."
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "fractal",
        "name": "Fractal Analytics",
        "type": "Data/AI Service",
        "status": "Active",
        "logo": "FRA",
        "rating": 4.1,
        "aiVerdict": "Pure-play analytics firm. High emphasis on Python, Pandas, statistical modeling, and ML deployment.",
        "overview": {
            "about": "Fractal Analytics is a leading player in the Data/AI Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.fractal.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Vue.js",
                "Salesforce LWC"
            ],
            "backend": [
                "Node.js",
                "Apex",
                "Python"
            ],
            "infra": [
                "Salesforce Clouds",
                "AWS",
                "Vercel"
            ],
            "data": [
                "MongoDB",
                "PostgreSQL",
                "SOQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "mu-sigma",
        "name": "Mu Sigma",
        "type": "Data/AI Service",
        "status": "Active",
        "logo": "MU-",
        "rating": 3.4,
        "aiVerdict": "Decision sciences. Grueling work culture, but a proven training ground for raw data engineering talent.",
        "overview": {
            "about": "Mu Sigma is a leading player in the Data/AI Service sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Bengaluru / Pune / Delhi NCR, India",
            "website": "https://www.mu-sigma.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 3.4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "System Engineer",
                "description": "Entry-level IT support, maintenance, dev.",
                "ctc": "₹3.60 LPA",
                "inHand": "₹25,000/mo",
                "breakdown": {
                    "base": "₹3.00 LPA",
                    "variable": "₹0.60 LPA",
                    "deductions": "₹2,500/mo (PF)"
                }
            },
            {
                "name": "Digital/Advanced",
                "description": "IoT, Big Data, Full Stack dev. Requires MERN/Java.",
                "ctc": "₹7.50 LPA",
                "inHand": "₹52,000/mo",
                "breakdown": {
                    "base": "₹6.50 LPA",
                    "variable": "₹1.00 LPA",
                    "deductions": "₹5,000/mo"
                }
            },
            {
                "name": "Specialist/Lead",
                "description": "System design, team lead, client handling.",
                "ctc": "₹12.00 LPA",
                "inHand": "₹85,000/mo",
                "breakdown": {
                    "base": "₹10.50 LPA",
                    "variable": "₹1.50 LPA",
                    "deductions": "₹8,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Vue.js",
                "Salesforce LWC"
            ],
            "backend": [
                "Node.js",
                "Apex",
                "Python"
            ],
            "infra": [
                "Salesforce Clouds",
                "AWS",
                "Vercel"
            ],
            "data": [
                "MongoDB",
                "PostgreSQL",
                "SOQL"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Moderate",
            "remote": "Hybrid (3 Days Office)",
            "vibe": "Corporate"
        },
        "reality": {
            "pros": [
                "Stable income and predictable promotion cycles.",
                "Structured corporate training programs.",
                "Global exposure."
            ],
            "cons": [
                "Timesheet culture.",
                "Slow moving legacy tech stacks.",
                "Averaged-out compensation bands."
            ]
        }
    },
    {
        "id": "posthog",
        "name": "PostHog",
        "type": "Product",
        "status": "Active",
        "logo": "POS",
        "rating": 4.8,
        "aiVerdict": "Open-source product analytics. Incredibly transparent culture. Deep TypeScript/Python and ClickHouse expertise.",
        "overview": {
            "about": "PostHog is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.posthog.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "vercel",
        "name": "Vercel",
        "type": "Product",
        "status": "Active",
        "logo": "VER",
        "rating": 4.7,
        "aiVerdict": "The company behind Next.js. Obsessed with Developer Experience (DX), Rust-based tooling (Turbopack), and edge computing.",
        "overview": {
            "about": "Vercel is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.vercel.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "supabase",
        "name": "Supabase",
        "type": "Product",
        "status": "Active",
        "logo": "SUP",
        "rating": 4.6,
        "aiVerdict": "Open-source Firebase alternative. Deep PostgreSQL expertise, Elixir, and highly distributed real-time systems.",
        "overview": {
            "about": "Supabase is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.supabase.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "linear",
        "name": "Linear",
        "type": "Product",
        "status": "Active",
        "logo": "LIN",
        "rating": 4.9,
        "aiVerdict": "Craftsmanship and extreme frontend performance. Built intensely on React, GraphQL, and local-first syncing engines.",
        "overview": {
            "about": "Linear is a leading player in the Product sector, globally recognized for its impact and scale. As of March 2026, the company continues to aggressively expand its engineering footprint, particularly focusing on AI integration and scalable cloud infrastructure.",
            "headquarters": "Silicon Valley / Seattle / New York, USA",
            "website": "https://www.linear.com",
            "founded": "Var. (Est. Pre-2015)",
            "size": "1,000 - 10,000 Employees",
            "rating": 4.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Standard SWE role.",
                "ctc": "₹15.00 LPA",
                "inHand": "₹95,000/mo",
                "breakdown": {
                    "base": "₹12.00 LPA",
                    "variable": "₹3.00 LPA",
                    "deductions": "₹18,000/mo"
                }
            },
            {
                "name": "Senior Engineer",
                "description": "Core product contributor.",
                "ctc": "₹28.00 LPA",
                "inHand": "₹1,60,000/mo",
                "breakdown": {
                    "base": "₹22.00 LPA",
                    "variable": "₹6.00 LPA",
                    "deductions": "₹45,000/mo"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ],
            "backend": [
                "Node.js",
                "Go",
                "Python / Django"
            ],
            "infra": [
                "AWS",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            "data": [
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding (Online)",
                "duration": "120 Mins",
                "difficulty": "Moderate",
                "desc": "Mass testing platform assessing Quants, Verbal, and basic array manipulation.",
                "topics": [
                    "Quants",
                    "Basic Arrays"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 Mins",
                "difficulty": "Moderate",
                "desc": "Resume grilling, final year project defense, and theoretical OOPs/DBMS concepts.",
                "topics": [
                    "Java/Python basics",
                    "SQL Queries"
                ]
            },
            {
                "name": "HR Round",
                "duration": "15 Mins",
                "difficulty": "Easy",
                "desc": "Relocation flexibility checks, bond signing willingness, background verification.",
                "topics": [
                    "Flexibility",
                    "Company Trivia"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "No strict academic cut-off for experienced lateral hires (Tier 1 colleges preferred for freshers).",
            "backlogs": "Allowed if cleared before joining.",
            "gaps": "Overlooked if justified by exceptional open-source contributions or startup experience.",
            "notes": "Resume parsing focuses entirely on technical keywords, system design scale metrics, and GitHub/Leetcode profiles."
        },
        "culture": {
            "wlb": "Poor",
            "remote": "Mostly Office (6 Days common in some)",
            "vibe": "Chaotic, high-ownership, extreme hustle culture."
        },
        "reality": {
            "pros": [
                "Massive learning curve and steep career growth.",
                "High ownership - your code ships to millions instantly.",
                "ESOPs can be highly lucrative if an IPO hits."
            ],
            "cons": [
                "Work-life balance is often completely non-existent.",
                "Job security depends entirely on funding runways.",
                "Chaotic engineering processes and constant pivot fatigue."
            ]
        }
    },
    {
        "id": "celebal",
        "name": "Celebal Technologies",
        "type": "Service",
        "status": "Active",
        "logo": "CEL",
        "rating": 4.2,
        "aiVerdict": "Massive growth in Data & AI. Premier Microsoft and Databricks partner. Excellent learning curve for freshers in data engineering.",
        "overview": {
            "about": "Celebal Technologies is a premier software services company in the field of Data Science, Big Data, and Enterprise Cloud.",
            "headquarters": "Jaipur, Rajasthan",
            "website": "celebaltech.com",
            "founded": "2015",
            "size": "2,000+ Employees",
            "rating": 4.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Data Engineer / Cloud Associate",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 5.0L - 8.0L",
                "inHand": "₹ 35k - 55k",
                "breakdown": {
                    "base": "₹ 4,50,000 - 7,00,000",
                    "variable": "Performance Bonus",
                    "deductions": "PF, Tax"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "PowerBI",
                "React"
            ],
            "backend": [
                "Python",
                "SQL",
                "PySpark"
            ],
            "infra": [
                "Azure (Heavy MSFT Partner)"
            ],
            "data": [
                "Databricks",
                "Snowflake",
                "Synapse"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "60 mins",
                "difficulty": "Moderate",
                "desc": "Focuses on SQL queries, logical aptitude, and Python basics.",
                "topics": [
                    "SQL",
                    "Aptitude"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 mins",
                "difficulty": "Moderate",
                "desc": "Deep dive into databases, cloud concepts, and willingness to learn Azure/Databricks.",
                "topics": [
                    "DBMS",
                    "Python",
                    "Cloud Basics"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "65% / 6.5 CGPA.",
            "backlogs": "Zero.",
            "gaps": "1 year accepted.",
            "notes": "Jaipur HQ makes it highly attractive for North Indian candidates wanting to avoid Bangalore traffic."
        },
        "culture": {
            "wlb": "Startup-like grind with heavy service delivery timelines.",
            "remote": "Office / Hybrid.",
            "vibe": "Young, energetic, heavily focused on rapid upskilling and certification."
        },
        "reality": {
            "pros": [
                "Incredible exposure to modern data stacks (Databricks, Snowflake)",
                "Fast promotions for top performers",
                "A blessing for Jaipur/Rajasthan locals"
            ],
            "cons": [
                "Growing pains of a rapidly scaling startup",
                "Can be chaotic",
                "Heavy dependency on MSFT ecosystem"
            ]
        }
    },
    {
        "id": "ltimindtree",
        "name": "LTIMindtree",
        "type": "Service",
        "status": "Active",
        "logo": "LTI",
        "rating": 3.8,
        "aiVerdict": "A newly formed IT juggernaut (L&T Infotech + Mindtree). Tier-1 service scale but retains slightly better engineering pockets than WITCH.",
        "overview": {
            "about": "LTIMindtree is a global technology consulting and digital solutions company formed by the merger of L&T Infotech and Mindtree.",
            "headquarters": "Mumbai, Maharashtra",
            "website": "ltimindtree.com",
            "founded": "1996 (Merged 2022)",
            "size": "80,000+ Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Graduate Engineer Trainee",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 4.0L - 5.0L",
                "inHand": "₹ 28k",
                "breakdown": {
                    "base": "₹ 4,00,000",
                    "variable": "Variable",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React"
            ],
            "backend": [
                "Java",
                ".NET",
                "Node.js"
            ],
            "infra": [
                "AWS",
                "Azure"
            ],
            "data": [
                "Oracle",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Amcat / Coding",
                "duration": "100 mins",
                "difficulty": "Moderate",
                "desc": "Aptitude, logical, English, and 2 coding questions (Strings/Arrays).",
                "topics": [
                    "Coding",
                    "Aptitude"
                ]
            },
            {
                "name": "Tech + HR",
                "duration": "45 mins",
                "difficulty": "Easy",
                "desc": "Standard evaluating OOPS, final year project, and basic SQL.",
                "topics": [
                    "OOPS",
                    "SQL"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "None.",
            "gaps": "Max 1 year.",
            "notes": "Post-merger integration is still settling; project allocation can take time."
        },
        "culture": {
            "wlb": "Standard IT service. Relaxed on bench, hectic on delivery.",
            "remote": "Hybrid.",
            "vibe": "L&T group's heavy traditional corporate culture mixed with Mindtree's slightly more agile tech focus."
        },
        "reality": {
            "pros": [
                "Massive brand stability backed by L&T",
                "Great training campuses",
                "Good onsite pipeline"
            ],
            "cons": [
                "Post-merger cultural clashes",
                "Slow salary hikes",
                "Volume hiring means bench time is common"
            ]
        }
    },
    {
        "id": "persistent",
        "name": "Persistent Systems",
        "type": "Service",
        "status": "Active",
        "logo": "PER",
        "rating": 4.1,
        "aiVerdict": "Outsourced Product Engineering specialists. You actually work on the core tech of other software companies rather than just maintaining IT apps.",
        "overview": {
            "about": "Persistent Systems is an Indian multinational technology services company which provides software engineering and strategy services.",
            "headquarters": "Pune, Maharashtra",
            "website": "persistent.com",
            "founded": "1990",
            "size": "23,000+ Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 5.0L - 7.5L",
                "inHand": "₹ 32k - 48k",
                "breakdown": {
                    "base": "₹ 4,50,000 - 6,50,000",
                    "variable": "Bonus",
                    "deductions": "PF, Tax"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React",
                "Vue",
                "Angular"
            ],
            "backend": [
                "Java",
                "Golang",
                "Node.js",
                "Salesforce"
            ],
            "infra": [
                "AWS",
                "GCP",
                "Kubernetes"
            ],
            "data": [
                "PostgreSQL",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "90 mins",
                "difficulty": "Moderate",
                "desc": "CS fundamentals, advanced programming logic, and strictly timed coding questions.",
                "topics": [
                    "DSA",
                    "CS Core"
                ]
            },
            {
                "name": "Technical Rounds (2x)",
                "duration": "90 mins",
                "difficulty": "Hard",
                "desc": "Much deeper than WITCH interviews. Live coding on screen, deep dive into OS, DBMS, and Networking.",
                "topics": [
                    "Live Coding",
                    "System Design Basics"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "65% / 6.5 consistently.",
            "backlogs": "Zero.",
            "gaps": "1 year.",
            "notes": "Very strict on coding fundamentals compared to standard mass recruiters."
        },
        "culture": {
            "wlb": "Decent, though client pressure (usually US tech firms) can dictate late hours.",
            "remote": "Hybrid.",
            "vibe": "Engineering-heavy. Highly respected in Pune. Less about \"billing\" and more about \"building\"."
        },
        "reality": {
            "pros": [
                "Actually doing product engineering instead of IT support",
                "Excellent brand for future jumps to product MNCS",
                "Great tech stack exposure"
            ],
            "cons": [
                "Pay is still bound by service/consulting limits",
                "Promotions can be slow",
                "Pune centric (less presence in South India)"
            ]
        }
    },
    {
        "id": "hexaware",
        "name": "Hexaware",
        "type": "Service",
        "status": "Active",
        "logo": "HEX",
        "rating": 3.7,
        "aiVerdict": "Mid-sized IT services. Big focus on cloud migrations, automation, and testing. Decent starting point but high attrition.",
        "overview": {
            "about": "Hexaware Technologies is an information technology and business process outsourcing service provider company based in Navi Mumbai, India.",
            "headquarters": "Navi Mumbai, Maharashtra",
            "website": "hexaware.com",
            "founded": "1990",
            "size": "28,000+ Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Graduate Engineer Trainee",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 4.0L - 6.0L",
                "inHand": "₹ 28k - 40k",
                "breakdown": {
                    "base": "₹ 4,00,000 - 5,50,000",
                    "variable": "Retention Bonus",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React"
            ],
            "backend": [
                "Java",
                ".NET",
                "Python"
            ],
            "infra": [
                "Azure (Heavy)",
                "AWS"
            ],
            "data": [
                "SQL Server",
                "Oracle"
            ]
        },
        "process": [
            {
                "name": "Aptitude & English",
                "duration": "60 mins",
                "difficulty": "Easy",
                "desc": "Standard assessment on cognitive abilities and basic programming logic.",
                "topics": [
                    "Aptitude",
                    "Logic"
                ]
            },
            {
                "name": "Tech & HR",
                "duration": "45 mins",
                "difficulty": "Easy",
                "desc": "Basic CS concepts, OOPS, and SQL. Focus on willingness to learn and adapt.",
                "topics": [
                    "SQL",
                    "OOPS"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "Zero.",
            "gaps": "Up to 1 year.",
            "notes": "Often enforces service bonds for freshers."
        },
        "culture": {
            "wlb": "Standard IT consulting balance. Project-dependent.",
            "remote": "Hybrid.",
            "vibe": "Mid-tier corporate. Less bureaucratic than TCS but also fewer resources/facilities."
        },
        "reality": {
            "pros": [
                "Better visibility to upper management due to smaller size compared to WITCH",
                "Good cloud migration projects",
                "Navi Mumbai/Chennai hubs are strong"
            ],
            "cons": [
                "Strict service agreement bonds for freshers",
                "Bench periods often mean mandatory upskilling or risk of termination",
                "Brand value is weaker globally"
            ]
        }
    },
    {
        "id": "coforge",
        "name": "Coforge",
        "type": "Service",
        "status": "Active",
        "logo": "COF",
        "rating": 3.9,
        "aiVerdict": "Formerly NIIT Technologies. Highly specialized in Travel, Transportation, and Insurance. Very stable and profitable mid-tier firm.",
        "overview": {
            "about": "Coforge is an Indian multinational IT company based in Noida, India. It provides IT services and solutions with a specific focus on Travel, Insurance, and Banking.",
            "headquarters": "Noida, Uttar Pradesh",
            "website": "coforge.com",
            "founded": "2004 (as NIIT Tech)",
            "size": "25,000+ Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 4.25L - 6.0L",
                "inHand": "₹ 28k",
                "breakdown": {
                    "base": "₹ 4,00,000",
                    "variable": "Variable",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "PEGA UI"
            ],
            "backend": [
                "Java",
                ".NET",
                "MuleSoft"
            ],
            "infra": [
                "AWS",
                "Azure"
            ],
            "data": [
                "Oracle",
                "Duck Creek (Insurance Software)"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "90 mins",
                "difficulty": "Moderate",
                "desc": "Cognitive test + 2 coding questions. Very standard format.",
                "topics": [
                    "Coding",
                    "Aptitude"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 mins",
                "difficulty": "Moderate",
                "desc": "Tests Java/.NET strictly. They prefer candidates who already know a backend framework.",
                "topics": [
                    "Java",
                    ".NET",
                    "SQL"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "None.",
            "gaps": "1 year maximum.",
            "notes": "High demand for PEGA and Salesforce developers internally."
        },
        "culture": {
            "wlb": "Very good. They pride themselves on a lower attrition rate and better employee care than peers.",
            "remote": "Hybrid.",
            "vibe": "Friendly, slightly traditional but with a strong focus on employee retention and training."
        },
        "reality": {
            "pros": [
                "Excellent domain specialization (Insurance/Travel) makes you highly valuable later",
                "Stable, growing stock and company",
                "Noida base is great for North Indians"
            ],
            "cons": [
                "Not a \"cool\" tech stack (lots of legacy enterprise software)",
                "Slower promotion tracks",
                "Strict background checks"
            ]
        }
    },
    {
        "id": "mphasis",
        "name": "Mphasis",
        "type": "Service",
        "status": "Active",
        "logo": "MPH",
        "rating": 3.6,
        "aiVerdict": "Heavily reliant on Banking & Capital Markets. Was formerly an HP subsidiary. Very standard entry-level service firm.",
        "overview": {
            "about": "Mphasis is an Indian multinational information technology services and consulting company, headquartered in Bangalore. It focuses heavily on financial services.",
            "headquarters": "Bangalore, Karnataka",
            "website": "mphasis.com",
            "founded": "1998",
            "size": "35,000+ Employees",
            "rating": 3.6,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Trainee Software Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 3.5L - 4.0L",
                "inHand": "₹ 24k",
                "breakdown": {
                    "base": "₹ 3,50,000",
                    "variable": "Minimal",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React",
                "Angular"
            ],
            "backend": [
                "Java",
                ".NET",
                "C++ (Legacy Banking)"
            ],
            "infra": [
                "AWS",
                "On-Premise Banking Infra"
            ],
            "data": [
                "Oracle",
                "Sybase"
            ]
        },
        "process": [
            {
                "name": "AMCAT",
                "duration": "90 mins",
                "difficulty": "Easy",
                "desc": "Standard logical, verbal, quantitative, and computer programming logic test.",
                "topics": [
                    "AMCAT Standard"
                ]
            },
            {
                "name": "Technical / SVAR",
                "duration": "60 mins",
                "difficulty": "Easy",
                "desc": "Spoken English test (SVAR) followed by a basic technical interview evaluating OOPS and SQL.",
                "topics": [
                    "Speech",
                    "Basic CS"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% / 6.0 CGPA throughout.",
            "backlogs": "None.",
            "gaps": "Max 1 year.",
            "notes": "Often uses a 2-year service agreement for freshers."
        },
        "culture": {
            "wlb": "Standard 9-6, but banking clients often require strict security compliances (no phones on floor, etc.).",
            "remote": "Hybrid/In-office.",
            "vibe": "Strictly corporate, heavy compliance focus due to financial clients. Very safe, but slow."
        },
        "reality": {
            "pros": [
                "Deep banking domain expertise",
                "Good stability",
                "Decent onsite opportunities for legacy systems"
            ],
            "cons": [
                "Very low entry pay",
                "Strict compliance environment (often no internet on work systems)",
                "Slow tech modernization"
            ]
        }
    },
    {
        "id": "zensar",
        "name": "Zensar",
        "type": "Service",
        "status": "Active",
        "logo": "ZEN",
        "rating": 3.7,
        "aiVerdict": "Part of the RPG Group. Strong in retail and manufacturing digital transformation.",
        "overview": {
            "about": "Zensar Technologies is an Indian technology consulting and IT services company headquartered in Pune, India. It is a subsidiary of RPG Group.",
            "headquarters": "Pune, Maharashtra",
            "website": "zensar.com",
            "founded": "1991",
            "size": "10,000+ Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Junior Software Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 3.5L - 4.5L",
                "inHand": "₹ 24k - 28k",
                "breakdown": {
                    "base": "₹ 3,50,000",
                    "variable": "Variable",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React",
                "Magento"
            ],
            "backend": [
                "Java",
                "PHP",
                "Node.js"
            ],
            "infra": [
                "AWS",
                "Azure"
            ],
            "data": [
                "MySQL",
                "Oracle"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Coding",
                "duration": "90 mins",
                "difficulty": "Easy",
                "desc": "Sectional timed tests. 2 coding questions of easy difficulty.",
                "topics": [
                    "Aptitude",
                    "Basic Coding"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 mins",
                "difficulty": "Easy",
                "desc": "Questions on final year project, basic Java/CPP, and situational behavior.",
                "topics": [
                    "OOPS",
                    "Projects"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "Zero.",
            "gaps": "1 year.",
            "notes": "Zensar regularly visits Pune/Maharashtra colleges."
        },
        "culture": {
            "wlb": "Good. RPG group has a reputation for being employee-friendly.",
            "remote": "Hybrid.",
            "vibe": "Warm, mid-sized company feel. Not a massive faceless campus, but still traditional."
        },
        "reality": {
            "pros": [
                "Great work culture and employee support",
                "Strong retail sector expertise",
                "Pune base is great"
            ],
            "cons": [
                "Low compensation",
                "Legacy projects are common",
                "Less global recognition compared to WITCH"
            ]
        }
    },
    {
        "id": "birlasoft",
        "name": "Birlasoft",
        "type": "Service",
        "status": "Active",
        "logo": "BIR",
        "rating": 3.7,
        "aiVerdict": "CK Birla Group. Heavy ERP and enterprise solutions (SAP, Oracle) focus. Good for starting an ERP career.",
        "overview": {
            "about": "Birlasoft combines the power of domain, enterprise and digital technologies to reimagine business processes for customers. Part of the CK Birla Group.",
            "headquarters": "Pune, Maharashtra",
            "website": "birlasoft.com",
            "founded": "1995",
            "size": "12,000+ Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Trainee Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 3.5L - 4.5L",
                "inHand": "₹ 24k - 28k",
                "breakdown": {
                    "base": "₹ 3,50,000",
                    "variable": "Variable",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "SAP UI5",
                "Angular"
            ],
            "backend": [
                "SAP ABAP",
                "Java",
                ".NET"
            ],
            "infra": [
                "Azure",
                "AWS"
            ],
            "data": [
                "SAP HANA",
                "Oracle"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "60 mins",
                "difficulty": "Easy",
                "desc": "Aptitude, logical, English, and technical MCQs. Rare coding questions.",
                "topics": [
                    "Aptitude",
                    "Tech MCQ"
                ]
            },
            {
                "name": "Technical / HR",
                "duration": "30 mins",
                "difficulty": "Easy",
                "desc": "Standard evaluation of communication and basic OOPS/DBMS.",
                "topics": [
                    "DBMS",
                    "OOPS"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "Zero.",
            "gaps": "1 year.",
            "notes": "Will often bond you for 2 years. Very SAP focused; if you train in SAP here, exit opps are lucrative."
        },
        "culture": {
            "wlb": "Good wlb, generally very stable environments.",
            "remote": "Hybrid/In-office.",
            "vibe": "Traditional Indian conglomerate culture. Very respectful and process-oriented."
        },
        "reality": {
            "pros": [
                "Excellent training ground for SAP and ERP ecosystems",
                "High job security",
                "Good brand name locally"
            ],
            "cons": [
                "Bonds are strictly enforced",
                "Starting salary is quite low",
                "You might not get to code in modern languages (JS/Python)"
            ]
        }
    },
    {
        "id": "kpit",
        "name": "KPIT Technologies",
        "type": "Service",
        "status": "Active",
        "logo": "KPT",
        "rating": 4.2,
        "aiVerdict": "Niche ER&D player. Absolute powerhouse if you want to work in embedded C, autonomous driving, and automotive tech.",
        "overview": {
            "about": "KPIT Technologies is an Indian multinational corporation providing engineering research and development (ER&D) services to automotive companies.",
            "headquarters": "Pune, Maharashtra",
            "website": "kpit.com",
            "founded": "1990",
            "size": "10,000+ Employees",
            "rating": 4.2,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Embedded Software Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 5.0L - 7.5L",
                "inHand": "₹ 35k - 45k",
                "breakdown": {
                    "base": "₹ 4,50,000 - 6,50,000",
                    "variable": "Bonus",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "C++ (Qt/QML for Automotive Displays)"
            ],
            "backend": [
                "Embedded C",
                "C++",
                "Python (Testing)"
            ],
            "infra": [
                "AUTOSAR",
                "Linux/RTOS"
            ],
            "data": [
                "CAN Protocols",
                "Vector Tools"
            ]
        },
        "process": [
            {
                "name": "Core Engineering Assessment",
                "duration": "90 mins",
                "difficulty": "Hard",
                "desc": "Heavily focuses on C/C++ pointers, memory management, microcontrollers, and logic. Very different from standard IT web dev tests.",
                "topics": [
                    "C/C++",
                    "Microcontrollers",
                    "Memory"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "60 mins",
                "difficulty": "Hard",
                "desc": "Deep dive into C concepts, embedded systems, OS (threading/mutexes), and real-time processing.",
                "topics": [
                    "OS Theory",
                    "Embedded C",
                    "Hardware"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "65%+ or 6.5 consistently. Prefers ECE/EEE students heavily.",
            "backlogs": "Zero.",
            "gaps": "Max 1 year.",
            "notes": "They are looking for core engineers, not web developers. If you only know React, do not apply."
        },
        "culture": {
            "wlb": "Good, but automotive deadlines (tape-outs) can be strict.",
            "remote": "In-office mostly due to hardware dependencies.",
            "vibe": "Pure engineering culture. Labs filled with car dashboard prototypes and testing rigs. Very nerdy and proud of it."
        },
        "reality": {
            "pros": [
                "Work on genuine bleeding-edge tech (self-driving, EVs)",
                "Massive barriers to entry means your skills are highly valued",
                "Partner to BMW, Honda, etc."
            ],
            "cons": [
                "Extremely niche; pivoting to web dev later is almost impossible",
                "Pune specific largely",
                "Not the FAANG cash salary bands"
            ]
        }
    },
    {
        "id": "virtusa",
        "name": "Virtusa",
        "type": "Service",
        "status": "Active",
        "logo": "VIR",
        "rating": 3.8,
        "aiVerdict": "Strong in Digital Engineering and Banking. Uses a unique \"NeuralHack\" heavily for hiring. Higher pay for \"specialist\" roles.",
        "overview": {
            "about": "Virtusa Corporation is an American global information technology services company. It provides digital engineering and tech consulting.",
            "headquarters": "Southborough, Massachusetts, US / Chennai, Hyderabad",
            "website": "virtusa.com",
            "founded": "1996",
            "size": "30,000+ Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Associate Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 4.0L",
                "inHand": "₹ 28k",
                "breakdown": {
                    "base": "₹ 4,00,000",
                    "variable": "Variable",
                    "deductions": "PF"
                }
            },
            {
                "name": "Engineer - Advanced/Specialist (Via NeuralHack)",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 6.5L - 8.0L",
                "inHand": "₹ 45k - 55k",
                "breakdown": {
                    "base": "₹ 6,00,000 - 7,50,000",
                    "variable": "Bonus",
                    "deductions": "PF, Tax"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React",
                "AEM"
            ],
            "backend": [
                "Java",
                "Node.js",
                "Python"
            ],
            "infra": [
                "AWS",
                "Azure"
            ],
            "data": [
                "Oracle",
                "MongoDB"
            ]
        },
        "process": [
            {
                "name": "NeuralHack / Coding Test",
                "duration": "120 mins",
                "difficulty": "Moderate",
                "desc": "Virtusa's specialized hiring hackathon/test. High performers get directly interviewed for the 6.5L+ packages.",
                "topics": [
                    "DSA",
                    "Web Basic"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "60 mins",
                "difficulty": "Moderate",
                "desc": "Standard Java/Web technologies check. Quite comprehensive for the specialist roles.",
                "topics": [
                    "Java Core",
                    "System Design Basics"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "Zero.",
            "gaps": "1 year maximum.",
            "notes": "If you clear NeuralHack, Virtusa is actually a very good paying starting point with good tech."
        },
        "culture": {
            "wlb": "Hectic. Known for pushing delivery timelines hard.",
            "remote": "Hybrid.",
            "vibe": "Sri Lankan/Indian founders, very aggressive growth mentality. \"Digital\" first approach vs legacy IT."
        },
        "reality": {
            "pros": [
                "NeuralHack path offers good pay and good projects",
                "Strong PE backing (Baring) means aggressive growth",
                "Modern tech stacks in most projects"
            ],
            "cons": [
                "\"Associate\" baseline tier pay is low",
                "Work-life balance is frequently complained about",
                "Client interviews can be grueling"
            ]
        }
    },
    {
        "id": "quest",
        "name": "Quest Global",
        "type": "Service",
        "status": "Active",
        "logo": "QGL",
        "rating": 3.9,
        "aiVerdict": "Mechanical/Aero ER&D giants. Very different from IT firms. You work on jet engines, medical devices, and auto CAD.",
        "overview": {
            "about": "QuEST Global Services is a product engineering company in the Aero Engines, Aerospace & Defense, High-Tech & Industrial, Medical Devices, Oil & Gas, Power, and Transportation verticals.",
            "headquarters": "Singapore / Bangalore, Trivandrum",
            "website": "quest-global.com",
            "founded": "1997",
            "size": "17,000+ Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Trainee Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 3.5L - 4.5L",
                "inHand": "₹ 24k - 28k",
                "breakdown": {
                    "base": "₹ 3,50,000",
                    "variable": "Variable",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "N/A (Usually CAD/CAM/CAE UI)"
            ],
            "backend": [
                "Embedded C",
                "C++",
                "Python"
            ],
            "infra": [
                "Hardware testing rigs"
            ],
            "data": [
                "MATLAB",
                "Simulink",
                "Ansys"
            ]
        },
        "process": [
            {
                "name": "Core Domain Test",
                "duration": "60 mins",
                "difficulty": "Hard",
                "desc": "Mechanical/Aero/ECE students take a test based on their core engineering subjects (Thermodynamics, SOM, Microcontrollers).",
                "topics": [
                    "Core Engineering Subjects"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "60 mins",
                "difficulty": "Hard",
                "desc": "Deep conceptual questioning on physics, engineering design, and CATIA/Embedded C depending on profile.",
                "topics": [
                    "Core Concepts",
                    "CAD/Coding"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "65% consistently. Core branches favored over CS/IT.",
            "backlogs": "Zero.",
            "gaps": "1 year.",
            "notes": "One of the few volume recruiters that specifically wants Mechanical and Aero engineers."
        },
        "culture": {
            "wlb": "Good. Engineering deliverables are often long-term (years) unlike agile IT sprints.",
            "remote": "Strictly In-office (Hardware/Security dependencies).",
            "vibe": "True engineering labs. People wearing safety glasses, testing rigs, CAD drawings everywhere."
        },
        "reality": {
            "pros": [
                "Core engineering job in India (rare)",
                "Work with GE, Rolls Royce, Airbus",
                "Deep technical specialization"
            ],
            "cons": [
                "Pay scales are much lower than software IT",
                "Extremely limited remote work",
                "Growth is tied to mechanical industries, not software booms"
            ]
        }
    },
    {
        "id": "ust",
        "name": "UST",
        "type": "Service",
        "status": "Active",
        "logo": "UST",
        "rating": 4.1,
        "aiVerdict": "Trivandrum's pride. Very strong in semiconductor IT (partnering deeply with Intel) and retail. Great work culture.",
        "overview": {
            "about": "UST (formerly UST Global) is a provider of digital technology and transformation, information technology and services, headquartered in Aliso Viejo, California.",
            "headquarters": "Aliso Viejo, US / Trivandrum, Kerala (Massive hub)",
            "website": "ust.com",
            "founded": "1999",
            "size": "30,000+ Employees",
            "rating": 4.1,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Developer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 4.5L - 6.0L",
                "inHand": "₹ 30k",
                "breakdown": {
                    "base": "₹ 4,50,000",
                    "variable": "Bonus",
                    "deductions": "PF, PT"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React"
            ],
            "backend": [
                "Java",
                "C++",
                "Python"
            ],
            "infra": [
                "AWS",
                "Azure"
            ],
            "data": [
                "Oracle",
                "Snowflake"
            ]
        },
        "process": [
            {
                "name": "Online Assessment",
                "duration": "90 mins",
                "difficulty": "Easy",
                "desc": "Standard aptitude, logical reasoning, and 1-2 coding questions.",
                "topics": [
                    "Aptitude",
                    "Basic Coding"
                ]
            },
            {
                "name": "Technical Interview",
                "duration": "45 mins",
                "difficulty": "Easy",
                "desc": "Questions on final year project, core CS fundamentals, and situational responses.",
                "topics": [
                    "CS Core",
                    "Project"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "Zero.",
            "gaps": "1 year.",
            "notes": "If you want to work in Kerala, UST at Technopark is the crown jewel."
        },
        "culture": {
            "wlb": "Very employee friendly. Outstanding work-life balance typically.",
            "remote": "Hybrid. Flexi-work policies are supportive.",
            "vibe": "Warm, highly supportive. The Trivandrum campus is famously beautiful and feels like a tech-park resort."
        },
        "reality": {
            "pros": [
                "Top tier culture and employee retention",
                "Great Intel/Semiconductor projects",
                "Best employer in Kerala"
            ],
            "cons": [
                "Not as dominant outside South India",
                "Starting pay is average",
                "Bench policy can be strict during downturns"
            ]
        }
    },
    {
        "id": "globallogic",
        "name": "GlobalLogic",
        "type": "Service",
        "status": "Active",
        "logo": "GLO",
        "rating": 4,
        "aiVerdict": "Hitachi subsidiary. Premium outsourcing. Great tech stacks, much more \"product\" focused than traditional WITCH.",
        "overview": {
            "about": "GlobalLogic is a digital product engineering services company. It integrates experience design and complex engineering to help clients. It is a Hitachi Group Company.",
            "headquarters": "San Jose, California, US / Noida, India",
            "website": "globallogic.com",
            "founded": "2000",
            "size": "30,000+ Employees",
            "rating": 4,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 5.5L - 8.0L",
                "inHand": "₹ 38k - 50k",
                "breakdown": {
                    "base": "₹ 5,00,000 - 7,00,000",
                    "variable": "Bonus",
                    "deductions": "PF, Tax"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React",
                "Vue",
                "Next.js"
            ],
            "backend": [
                "Node.js",
                "Java",
                "Go",
                "Python"
            ],
            "infra": [
                "AWS",
                "Kubernetes"
            ],
            "data": [
                "MongoDB",
                "PostgreSQL"
            ]
        },
        "process": [
            {
                "name": "Coding Test (HackerEarth)",
                "duration": "90 mins",
                "difficulty": "Hard",
                "desc": "Heavy focus on Data Structures and Algorithms. Usually 3 questions, Medium to Hard difficulty.",
                "topics": [
                    "DSA",
                    "String Manipulation"
                ]
            },
            {
                "name": "Technical In-depth",
                "duration": "60 mins",
                "difficulty": "Hard",
                "desc": "Screen-sharing, live coding, architecture discussions depending on experience level.",
                "topics": [
                    "Live Coding",
                    "System Design"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "65% / 6.5 CGPA.",
            "backlogs": "Zero.",
            "gaps": "1 year.",
            "notes": "If you pass the GL coding round, you are generally a very capable developer."
        },
        "culture": {
            "wlb": "Very good. Follows Silicon Valley styled sprints rather than traditional IT waterfall models.",
            "remote": "Hybrid.",
            "vibe": "Product-company feel within a service-company shell. High engineering standards."
        },
        "reality": {
            "pros": [
                "Excellent modern tech stack exposure",
                "Great stepping stone to FAANG",
                "Hitachi acquisition provides massive stability"
            ],
            "cons": [
                "High client expectations/pressure",
                "Noida-heavy (though expanding)",
                "Interviews are genuinely difficult"
            ]
        }
    },
    {
        "id": "synechron",
        "name": "Synechron",
        "type": "Service",
        "status": "Active",
        "logo": "SYN",
        "rating": 3.8,
        "aiVerdict": "Pure-play financial services consulting. If you want to work on Wall Street tech but live in Pune, this is it.",
        "overview": {
            "about": "Synechron is a global consulting and technology organization providing innovative solutions to the financial services industry.",
            "headquarters": "New York, US / Pune, India",
            "website": "synechron.com",
            "founded": "2001",
            "size": "14,000+ Employees",
            "rating": 3.8,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Associate (Java/UI)",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 5.0L - 7.0L",
                "inHand": "₹ 32k - 45k",
                "breakdown": {
                    "base": "₹ 4,50,000 - 6,50,000",
                    "variable": "Variable",
                    "deductions": "PF, Tax"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React"
            ],
            "backend": [
                "Java (Spring Boot heavily)",
                "C#"
            ],
            "infra": [
                "AWS",
                "Docker"
            ],
            "data": [
                "KDB+",
                "Oracle",
                "Kafka"
            ]
        },
        "process": [
            {
                "name": "Coding & SQL",
                "duration": "90 mins",
                "difficulty": "Moderate",
                "desc": "Expect questions on Java Collections, concurrency, and complex SQL joins (Finance requires heavy data manipulation).",
                "topics": [
                    "Java Core",
                    "SQL Advanced"
                ]
            },
            {
                "name": "Tech & Domain Interview",
                "duration": "60 mins",
                "difficulty": "Moderate",
                "desc": "Evaluates your technical depth. Bonus points if you know basic finance terms (Equities, Derivatives).",
                "topics": [
                    "Java Concurrency",
                    "Finance Basics"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "Zero.",
            "gaps": "Max 1 year.",
            "notes": "Exceptional demand for Java developers who understand multithreading."
        },
        "culture": {
            "wlb": "Intense. Financial markets are unforgiving and deployments often happen on weekends.",
            "remote": "Hybrid.",
            "vibe": "Wall-street backend. Fast-paced, professional, very focused on security and low-latency."
        },
        "reality": {
            "pros": [
                "Financial domain expertise pays massively later in your career",
                "Great onsite opportunities to NY/London",
                "Good bonus structures"
            ],
            "cons": [
                "High stress",
                "Strict security compliance",
                "Legacy tech debt exists in banking clients"
            ]
        }
    },
    {
        "id": "itcinfotech",
        "name": "ITC Infotech",
        "type": "Service",
        "status": "Active",
        "logo": "ITC",
        "rating": 3.7,
        "aiVerdict": "Part of the ITC conglomerate. Deep roots in manufacturing, CPG, and hospitality tech.",
        "overview": {
            "about": "ITC Infotech is a specialized global technology services provider, led by Business and Technology Consulting. It is a fully owned subsidiary of ITC Limited.",
            "headquarters": "Bangalore, Karnataka",
            "website": "itcinfotech.com",
            "founded": "2000",
            "size": "11,000+ Employees",
            "rating": 3.7,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 4.0L - 5.5L",
                "inHand": "₹ 28k - 35k",
                "breakdown": {
                    "base": "₹ 4,00,000 - 5,00,000",
                    "variable": "Variable",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Angular",
                "React"
            ],
            "backend": [
                "Java",
                ".NET",
                "PTC ThingWorx (IoT)"
            ],
            "infra": [
                "Azure",
                "AWS"
            ],
            "data": [
                "SQL Server",
                "Oracle"
            ]
        },
        "process": [
            {
                "name": "Aptitude Test",
                "duration": "60 mins",
                "difficulty": "Easy",
                "desc": "Standard cognitive abilities test.",
                "topics": [
                    "Aptitude",
                    "Reasoning"
                ]
            },
            {
                "name": "Tech & HR",
                "duration": "45 mins",
                "difficulty": "Easy",
                "desc": "Basic CS concepts. They look for stability and long-term commitment.",
                "topics": [
                    "Core CS",
                    "Behavioral"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "Zero.",
            "gaps": "1 year.",
            "notes": "Huge focus on PLM (Product Lifecycle Management) and IoT software."
        },
        "culture": {
            "wlb": "Excellent. Carries the traditional ITC group philosophy of employee care.",
            "remote": "Hybrid.",
            "vibe": "Old-school, stable, incredibly secure. Not a fast-paced startup, but a place you can retire from."
        },
        "reality": {
            "pros": [
                "Incredible stability",
                "ITC group perks",
                "Great domain knowledge in FMCG/Manufacturing"
            ],
            "cons": [
                "Slow career graph",
                "Pay is lower than product tech",
                "Bureaucracy"
            ]
        }
    },
    {
        "id": "xplor",
        "name": "Xplor Technologies",
        "type": "Product",
        "status": "Active",
        "logo": "XPL",
        "rating": 3.9,
        "aiVerdict": "Actually a global SaaS platform company for fitness/childcare, but operates a massive development hub in Pune.",
        "overview": {
            "about": "Xplor Technologies is a global SaaS platform offering software, payments, and embedded commerce solutions for businesses in everyday life verticals.",
            "headquarters": "Atlanta, US / Pune, India",
            "website": "xplortechnologies.com",
            "founded": "2021 (from mergers)",
            "size": "3,000+ Employees",
            "rating": 3.9,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Software Engineer (SaaS)",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 7.0L - 12.0L",
                "inHand": "₹ 48k - 80k",
                "breakdown": {
                    "base": "₹ 6,50,000 - 11,00,000",
                    "variable": "Bonus",
                    "deductions": "PF, Tax"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "React",
                "TypeScript"
            ],
            "backend": [
                "Node.js",
                ".NET Core",
                "Go"
            ],
            "infra": [
                "AWS (Heavy)",
                "Docker"
            ],
            "data": [
                "PostgreSQL",
                "Redis"
            ]
        },
        "process": [
            {
                "name": "Take-home Assignment / OA",
                "duration": "Varies",
                "difficulty": "Moderate",
                "desc": "Expect a modern take-home task (e.g., build a small API or React component) or a Hackerrank test.",
                "topics": [
                    "Modern Web Dev",
                    "API Design"
                ]
            },
            {
                "name": "Systems & Culture Fit",
                "duration": "60 mins",
                "difficulty": "Moderate",
                "desc": "Evaluating how you write clean code (SOLID principles) and if you fit their agile culture.",
                "topics": [
                    "Clean Code",
                    "Culture"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "Flexible. Skills matter more.",
            "backlogs": "Zero.",
            "gaps": "Accepted.",
            "notes": "Product company interview style. Know your frameworks well."
        },
        "culture": {
            "wlb": "Very good. Modern tech culture with unlimited PTO policies in some regions.",
            "remote": "Remote/Hybrid flex.",
            "vibe": "Modern SaaS company. Flat hierarchy, slack-heavy, agile methodology."
        },
        "reality": {
            "pros": [
                "Actual product development (SaaS)",
                "Modern tech stack",
                "Good culture and pay vs pure services"
            ],
            "cons": [
                "Integration pains from multiple company mergers",
                "Pune office dependency",
                "Less known brand name in India"
            ]
        }
    },
    {
        "id": "cyntexa",
        "name": "Cyntexa",
        "type": "Service",
        "status": "Active",
        "logo": "CYN",
        "rating": 4.3,
        "aiVerdict": "The absolute kings of Salesforce consulting in India. Incredible growth rate. Highly specialized.",
        "overview": {
            "about": "Cyntexa is a leading Salesforce Crest (Gold) Consulting Partner in the USA, UK, UAE, Australia, Singapore & India.",
            "headquarters": "Jaipur, Rajasthan",
            "website": "cyntexa.com",
            "founded": "2018",
            "size": "1,000+ Employees",
            "rating": 4.3,
            "updateTag": "MARCH 2026 VERIFIED"
        },
        "roles": [
            {
                "name": "Salesforce Developer",
                "description": "Entry/Mid level associate",
                "ctc": "₹ 4.0L - 8.0L",
                "inHand": "₹ 25k - 50k",
                "breakdown": {
                    "base": "₹ 3,50,000 - 7,00,000",
                    "variable": "Certification Bonuses",
                    "deductions": "PF"
                }
            }
        ],
        "techStack": {
            "frontend": [
                "Salesforce LWC",
                "Aura"
            ],
            "backend": [
                "Salesforce Apex"
            ],
            "infra": [
                "Salesforce Ecosystem"
            ],
            "data": [
                "SOQL",
                "Salesforce Data Cloud"
            ]
        },
        "process": [
            {
                "name": "Aptitude & Basic CS",
                "duration": "60 mins",
                "difficulty": "Easy",
                "desc": "Standard screening, looking for raw logic potential over specific languages.",
                "topics": [
                    "Logic",
                    "Aptitude"
                ]
            },
            {
                "name": "Technical / Core Java",
                "duration": "45 mins",
                "difficulty": "Moderate",
                "desc": "They test heavily on OOPS or Java (since Apex is very similar to Java).",
                "topics": [
                    "Java",
                    "OOPS"
                ]
            }
        ],
        "eligibility": {
            "cgpa": "60% throughout.",
            "backlogs": "Zero.",
            "gaps": "Accepted.",
            "notes": "If you want a career strictly in Salesforce, this is one of the fastest growing partners globally to join."
        },
        "culture": {
            "wlb": "Like Celebal, it’s a fast-growing Jaipur-based firm. High energy, long hours at times.",
            "remote": "Office.",
            "vibe": "Young, party-heavy, highly energetic startup vibe. Extremely focused on getting Salesforce certifications."
        },
        "reality": {
            "pros": [
                "Salesforce is a highly lucrative niche",
                "Massive growth opportunities internally",
                "Company sponsors all certifications"
            ],
            "cons": [
                "Locks you into the Salesforce ecosystem permanently",
                "Can be very chaotic",
                "Base pay starts low but scales fast"
            ]
        }
    }
];
