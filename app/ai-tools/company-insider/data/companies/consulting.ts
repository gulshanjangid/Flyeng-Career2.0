import { CompanyData } from './types';

export const consultingCompanies: CompanyData[] = [
    {
        id: 'deloitte',
        name: 'Deloitte',
        type: 'Consulting',
        status: 'Active',
        logo: 'DEL',
        rating: 3.9,
        aiVerdict: 'The largest Big 4 tech wing (Deloitte USI). Massive focus on digital transformation, Salesforce, and Cloud migrations for Fortune 500 clients.',
        overview: {
            about: 'Deloitte Touche Tohmatsu Limited is a British multinational professional services network. It is the largest professional services network by revenue and number of professionals in the world.',
            headquarters: 'London, UK / Hyderabad, Bangalore (USI Hubs)',
            size: '450,000+ Employees',
            founded: '1845',
            website: 'deloitte.com/global/en/careers'
        },
        roles: [
            {
                title: 'Analyst / Consultant (USI)',
                ctc: '₹ 8.0L - 10L',
                base: '₹ 7,50,000 - 9,00,000',
                variable: '10-15%',
                rsus: 'N/A',
                deductions: 'Tax (10%), PF',
                inHand: '₹ 50k - 65k'
            },
            {
                title: 'Senior Consultant / Technical Lead',
                ctc: '₹ 18L - 28L',
                base: '₹ 15,00,000 - 24,00,000',
                variable: '15-20%',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.05L - 1.5L'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'Salesforce Lightning'],
            backend: ['Java', '.NET', 'Node.js', 'Python'],
            infra: ['AWS', 'Azure (Massive MSFT partnership)', 'GCP'],
            data: ['Snowflake', 'Databricks', 'SAP']
        },
        process: [
            {
                step: 'Online Assessment / Amcat',
                description: 'Aptitude, Logical reasoning, English, and occasionally a basic coding problem. Heavy focus on verbal/written communication.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Aptitude', 'English']
            },
            {
                step: 'Case Study & Tech Interview',
                description: 'Unlike pure tech firms, Deloitte often uses "Case Studies" (e.g., "How would you design a cloud migration for a hospital?") alongside basic OOPS/SQL checks.',
                duration: '2 hours',
                difficulty: 'Medium',
                topics: ['Case Study', 'Cloud Concepts', 'Behavioral']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '6.5+ generally expected from good tier colleges.',
            backlogs: 'Zero.',
            gap: 'Max 1 year.',
            notes: 'Deloitte USI (US India) pays significantly better and has better projects than Deloitte India (domestic practice).'
        },
        culture: {
            wlb: 'Notoriously volatile. "Busy season" means 60-80 hour weeks. Client dictates your life.',
            remote: 'Hybrid largely, but heavily pivoting to in-office depending on the partner/manager.',
            vibe: 'Hyper-corporate. Dress codes, extreme networking up the chain, "up or out" promotion structures. A very sharp business-first mentality.'
        },
        reality: {
            good: ['Incredible brand name ("Big 4" commands respect globally)', 'Unmatched networking opportunities', 'Variety of projects across every industry (Healthcare, Finance, Retail)'],
            bad: ['Work-life balance can be completely non-existent', 'You are a consultant first, engineer second (less deep technical mastery)', 'High stress']
        }
    },
    {
        id: 'pwc',
        name: 'PwC',
        type: 'Consulting',
        status: 'Active',
        logo: 'PWC',
        rating: 3.8,
        aiVerdict: 'Strong in cybersecurity and data risk consulting. Tech entry is heavily focused on data engineering, SAP, and general enterprise architecture.',
        overview: {
            about: 'PricewaterhouseCoopers is a British multinational professional services brand of firms, operating as partnerships under the PwC brand. It is the second-largest professional services network in the world.',
            headquarters: 'London, UK / Bangalore, Kolkata (AC Hubs)',
            size: '360,000+ Employees',
            founded: '1998 (Merger)',
            website: 'pwc.com/careers'
        },
        roles: [
            {
                title: 'Associate (Technology Consulting)',
                ctc: '₹ 7.0L - 9.0L',
                base: '₹ 6,50,000 - 8,50,000',
                variable: '10%',
                rsus: 'N/A',
                deductions: 'Tax, PF',
                inHand: '₹ 45k - 60k'
            },
            {
                title: 'Senior Associate / Manager',
                ctc: '₹ 15L - 25L',
                base: '₹ 13,00,000 - 20,00,000',
                variable: '15%',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 90k - 1.3L'
            }
        ],
        techStack: {
            frontend: ['Angular', 'React', 'PowerBI'],
            backend: ['Python', 'Java', 'R'],
            infra: ['Azure', 'AWS', 'Cybersecurity tools (Splunk, CrowdStrike)'],
            data: ['Alteryx', 'Tableau', 'Snowflake']
        },
        process: [
            {
                step: 'Aptitude & Psychometric',
                description: 'Standard Big-4 behavioral profiling and numerical reasoning tests. No hardcore coding usually.',
                duration: '60 mins',
                difficulty: 'Easy',
                topics: ['Numerical Reasoning', 'Behavioral Profiling']
            },
            {
                step: 'Technical & Case Interview',
                description: 'Focuses on your understanding of databases (SQL), data visualization (Tableau/PowerBI), or network security if in the cyber wing.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['SQL', 'Data Vis', 'Consulting Frameworks']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '60% throughout.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'PwC Acceleration Centers (AC) in India do the heavy lifting for global consulting teams.'
        },
        culture: {
            wlb: 'Hectic during audits or major go-lives, but generally slightly better than Deloitte\'s pure strategy wings.',
            remote: 'Hybrid.',
            vibe: 'Refined, professional, process-heavy. Lots of corporate jargon. Excellent training programs for freshers.'
        },
        reality: {
            good: ['Big 4 prestige', 'Great training and certification sponsorships', 'Very secure jobs, rarely do massive tech layoffs'],
            bad: ['Compensation ceilings hit quickly unless you pivot to management', 'Jack of all trades, master of none engineering', 'Heavy bureaucracy']
        }
    },
    {
        id: 'ey',
        name: 'EY',
        type: 'Consulting',
        status: 'Active',
        logo: 'EY',
        rating: 3.7,
        aiVerdict: 'Massive scale through EY GDS (Global Delivery Services). Huge emphasis on SAP, Oracle migrations, and enterprise data analytics.',
        overview: {
            about: 'Ernst & Young Global Limited, doing business as EY, is a British multinational professional services partnership.',
            headquarters: 'London, UK / Trivandrum, Bangalore (GDS Hubs)',
            size: '390,000+ Employees',
            founded: '1989',
            website: 'ey.com/careers'
        },
        roles: [
            {
                title: 'Staff / Associate',
                ctc: '₹ 6.5L - 8.5L',
                base: '₹ 6,00,000 - 8,00,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'Tax, PF',
                inHand: '₹ 42k - 58k'
            }
        ],
        techStack: {
            frontend: ['React', 'Angular', 'SAP UI5'],
            backend: ['Java', '.NET', 'Python'],
            infra: ['Azure (Heavy MSFT reliance)', 'AWS'],
            data: ['SQL Server', 'Oracle', 'SAP HANA']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Cognitive tests, logical reasoning, and a basic technical MCQ test.',
                duration: '90 mins',
                difficulty: 'Easy',
                topics: ['Cognitive', 'Logic']
            },
            {
                step: 'Technical Interview',
                description: 'Typically focuses on what you know. If you put Java, standard Java topics. Very focused on project experience and communication.',
                duration: '45 mins',
                difficulty: 'Medium',
                topics: ['Communication', 'Core CS', 'SQL']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '60% throughout academics.',
            backlogs: 'None.',
            gap: 'Reviewed contextually.',
            notes: 'EY GDS acts heavily as the IT service arm for EY global.'
        },
        culture: {
            wlb: 'Varies wildly. Can be very taxing during client deliveries. Trivandrum and Kochi centers are massive and somewhat more relaxed.',
            remote: 'Hybrid. Mandating RTO.',
            vibe: 'Very corporate, slightly older tech stack compared to young startups. Highly focused on compliance and reporting frameworks.'
        },
        reality: {
            good: ['Big 4 brand', 'Good onsite opportunities to EU/UK', 'Stability'],
            bad: ['Pay is generally the lowest among the Big 4 tech wings in India', 'Heavy bench/utilization pressure', 'Slow promotion cycles']
        }
    },
    {
        id: 'kpmg',
        name: 'KPMG',
        type: 'Consulting',
        status: 'Active',
        logo: 'KPM',
        rating: 3.6,
        aiVerdict: 'Smallest of the Big 4 by headcount, but strong in risk advisory and financial tech consulting. Heavy data focus.',
        overview: {
            about: 'KPMG International Limited is a multinational professional services network, and one of the Big Four accounting organizations.',
            headquarters: 'Amsterdam, Netherlands / Bangalore, Gurgaon (Hubs)',
            size: '270,000+ Employees',
            founded: '1987',
            website: 'kpmg.com/careers'
        },
        roles: [
            {
                title: 'Analyst',
                ctc: '₹ 6.0L - 8.0L',
                base: '₹ 5,50,000 - 7,50,000',
                variable: 'Variable',
                rsus: 'N/A',
                deductions: 'Tax, PF',
                inHand: '₹ 40k - 55k'
            }
        ],
        techStack: {
            frontend: ['PowerBI', 'Tableau', 'React'],
            backend: ['Python', '.NET', 'SQL'],
            infra: ['Azure', 'AWS'],
            data: ['Alteryx', 'Snowflake', 'Oracle']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'Standard Aptitude, Logical reasoning, Data Interpretation, and English.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Data Interpretation', 'Aptitude']
            },
            {
                step: 'Technical & Partner Round',
                description: 'SQL queries, data visualization understanding, and a final "Partner Round" which is a high-stress behavioral interview.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['SQL', 'Behavioral (Partner)']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '60% throughout academics.',
            backlogs: 'Zero.',
            gap: 'Case by Case.',
            notes: 'The Partner Round at KPMG is infamous; confidence and communication matter far more than technical depth here.'
        },
        culture: {
            wlb: 'Demanding. Audit and consulting seasons dictate standard 50-60 hour weeks.',
            remote: 'Hybrid.',
            vibe: 'Very traditional Big 4. High focus on prestige, dressing well, speaking eloquently, and networking.'
        },
        reality: {
            good: ['Big 4 resume stamp', 'Great exit opportunities into finance or pure management', 'Strong alumni network'],
            bad: ['Tech stack is often just writing advanced SQL reporting queries', 'Lower compensation relative to tech product companies', 'High pressure']
        }
    },
    {
        id: 'mckinsey',
        name: 'McKinsey & Co.',
        type: 'Consulting',
        status: 'Active',
        logo: 'MCK',
        rating: 4.4,
        aiVerdict: 'The absolute elite of strategy consulting. Their tech division (QuantumBlack/Digital) hires elite data scientists/engineers to build AI for massive corporations.',
        overview: {
            about: 'McKinsey & Company is an American multinational strategy and management consulting firm that offers professional services to corporations, governments, and other organizations.',
            headquarters: 'New York City, US / Gurgaon, Bangalore (Tech Hubs)',
            size: '45,000+ Employees',
            founded: '1926',
            website: 'mckinsey.com/careers'
        },
        roles: [
            {
                title: 'Data Engineer / Software Engineer',
                ctc: '₹ 20L - 35L',
                base: '₹ 15,00,000 - 25,00,000',
                variable: '20-30% (High performance bonus)',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.05L - 1.6L'
            }
        ],
        techStack: {
            frontend: ['React', 'D3.js', 'Streamlit'],
            backend: ['Python (Heavy)', 'Scala', 'Java'],
            infra: ['AWS', 'GCP', 'Databricks'],
            data: ['Spark', 'Hadoop', 'Snowflake', 'Advanced ML models']
        },
        process: [
            {
                step: 'Problem Solving Test (PST) / HackerRank',
                description: 'McKinsey\'s PST is legendary for its difficulty (Math, Logic, Business Sense). Engineers also take a hard coding OA.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Business Math', 'Algorithms']
            },
            {
                step: 'Case & Tech Loops (3-4 Rounds)',
                description: 'You must solve business cases (e.g., "Estimate the market size for EV batteries and design a data pipeline to track it"). Highly stressful, extremely rigorous.',
                duration: '4 hours',
                difficulty: 'Expert',
                topics: ['Case Studies', 'Data Pipelines', 'Algorithms']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: 'Extremely high. Target schools (IIT/IIM/Top NITs) heavily favored.',
            backlogs: 'Zero.',
            gap: 'Must be exceptionally justified.',
            notes: 'QuantumBlack (their AI division) is arguably one of the most prestigious data science jobs in the world.'
        },
        culture: {
            wlb: 'Brutal. McKinsey consultants are known for traveling 4 days a week and working 80+ hours. Tech teams are slightly better but still intense.',
            remote: 'Client-dependent, usually very low remote tolerance.',
            vibe: 'Elite, hyper-intelligent, and extremely formal. "The Firm" dictates everything. Unmatched prestige in the business world.'
        },
        reality: {
            good: ['Unrivaled prestige (the "Harvard" of consulting)', 'Work on CEO-level problems for the world\'s biggest companies', 'Incredible exit opportunities (C-suite)'],
            bad: ['WLB is historically terrible', 'Intense pressure to perform ("Up or out" system)', 'No tech equity (ESOPs)']
        }
    },
    {
        id: 'bcg',
        name: 'BCG',
        type: 'Consulting',
        status: 'Active',
        logo: 'BCG',
        rating: 4.5,
        aiVerdict: 'MBB Strategy elite. BCG X (tech build and design unit) focuses heavily on rapid prototyping, GenAI, and data platforms for legacy clients.',
        overview: {
            about: 'Boston Consulting Group is an American global management consulting firm founded in 1963, headquartered in Boston, Massachusetts. It is one of the Big Three (or MBB).',
            headquarters: 'Boston, US / Gurgaon, Bangalore, Mumbai',
            size: '30,000+ Employees',
            founded: '1963',
            website: 'bcg.com/careers'
        },
        roles: [
            {
                title: 'Data Scientist / IT Engineer (BCG X)',
                ctc: '₹ 20L - 35L',
                base: '₹ 15,00,000 - 25,00,000',
                variable: '25%+',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.05L - 1.6L'
            }
        ],
        techStack: {
            frontend: ['React', 'Vue', 'Figma (Heavy design focus in X)'],
            backend: ['Python', 'Node.js', 'Go'],
            infra: ['AWS', 'GCP', 'Docker'],
            data: ['Snowflake', 'BigQuery', 'LLM frameworks']
        },
        process: [
            {
                step: 'Online Assessment / Hackerrank',
                description: 'Requires a mix of algorithmic coding (Medium/Hard) and sometimes data science model building if applying for data roles.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['Machine Learning Basics', 'Algorithms']
            },
            {
                step: 'Case Study & Tech Architecture',
                description: 'Solve a strategic business problem using technical architecture. E.g., "Build an architecture for a massive retailer to track real-time inventory anomalies."',
                duration: '3 hours',
                difficulty: 'Expert',
                topics: ['Business Strategy', 'System Design']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: 'Top tier colleges strongly preferred.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'BCG X focuses heavily on building actual MVP tech products for clients rather than just giving them PowerPoint presentations.'
        },
        culture: {
            wlb: 'Intense. Like McKinsey, the hours are long and the expectations are sky-high. Travel is frequent.',
            remote: 'Hybrid/In-office. Client travel is normal.',
            vibe: 'Slightly more academic and "creative" feeling than McKinsey, but still cutthroat MBB strategy consulting. Very smart, type-A personalities.'
        },
        reality: {
            good: ['Incredible brand name', 'BCG X actually builds software, not just slide decks', 'Top of market cash compensation for non-tech firms'],
            bad: ['Brutal hours', 'Constant travel can burn people out', '"Up or out" culture is stressful']
        }
    },
    {
        id: 'bain',
        name: 'Bain & Company',
        type: 'Consulting',
        status: 'Active',
        logo: 'BAI',
        rating: 4.6,
        aiVerdict: 'Often rated the best culture among the MBB elite. Their Advanced Analytics Group (AAG) handles the heavy data/tech lifting.',
        overview: {
            about: 'Bain & Company is an American management consulting company headquartered in Boston, Massachusetts. It is one of the Big Three management consultancies (MBB).',
            headquarters: 'Boston, US / Gurgaon, Mumbai, Bangalore',
            size: '18,000+ Employees',
            founded: '1973',
            website: 'bain.com/careers'
        },
        roles: [
            {
                title: 'Data Engineer (AAG)',
                ctc: '₹ 18L - 30L',
                base: '₹ 14,00,000 - 22,00,000',
                variable: 'High Bonus',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 1.0L - 1.45L'
            }
        ],
        techStack: {
            frontend: ['PowerBI', 'Tableau', 'React'],
            backend: ['Python', 'SQL', 'Spark'],
            infra: ['AWS', 'Azure'],
            data: ['Databricks', 'Snowflake', 'Redshift']
        },
        process: [
            {
                step: 'Aptitude & Coding',
                description: 'Heavy focus on data manipulation and SQL queries over pure Leetcode DSA.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['SQL Advanced', 'Python Pandas']
            },
            {
                step: 'Case Interview Loops',
                description: 'Standard Bain case interviews. They want to see how you structure unstructured problems and apply data tools to solve them.',
                duration: '3 hours',
                difficulty: 'Hard',
                topics: ['Structured Thinking', 'Case Studies']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: 'High. Prefers IIT/NIT/IIMs.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'Bain focuses heavily on Private Equity (PE) due diligence, meaning fast, intense data analysis is the core technical job.'
        },
        culture: {
            wlb: 'Intense hours, but famously supportive "frat-like" culture. They heavily index on hiring people who are "fun to be around in an airport at 3 AM".',
            remote: 'Hybrid/In-office.',
            vibe: 'Work hard, play hard. Very social, highly polished, elite but slightly less rigid than McKinsey. Great office parties.'
        },
        reality: {
            good: ['Consistently ranked #1 on Glassdoor Best Places to Work', 'Elite prestige and compensation', 'Incredible collegiate culture'],
            bad: ['Long consulting hours', 'Travel heavy', 'Engineering is heavily skewed towards data/SQL rather than building web/app products']
        }
    },
    {
        id: 'zs',
        name: 'ZS Associates',
        type: 'Consulting',
        status: 'Active',
        logo: 'ZSA',
        rating: 4.0,
        aiVerdict: 'The absolute kings of Pharma and Healthcare consulting. Very mathematically rigorous, heavily data-driven tech roles.',
        overview: {
            about: 'ZS Associates is a management consulting and technology firm headquartered in Evanston, Illinois that provides services for clients in healthcare, private equity, and technology.',
            headquarters: 'Evanston, Illinois, US / Pune, Gurgaon, Bangalore',
            size: '12,000+ Employees',
            founded: '1983',
            website: 'zs.com/careers'
        },
        roles: [
            {
                title: 'Business Technology Analyst',
                ctc: '₹ 10L - 14L',
                base: '₹ 8,50,000 - 12,00,000',
                variable: 'Bonus & Relocation',
                rsus: 'N/A',
                deductions: 'Tax (15-20%), PF',
                inHand: '₹ 55k - 75k'
            },
            {
                title: 'Data Scientist / Software Engineer',
                ctc: '₹ 15L - 25L',
                base: '₹ 13,00,000 - 20,00,000',
                variable: '15%',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 90k - 1.3L'
            }
        ],
        techStack: {
            frontend: ['Angular', 'Tableau', 'MicroStrategy'],
            backend: ['Python', 'SQL', 'Java'],
            infra: ['AWS (Massive footprint)'],
            data: ['Spark', 'Hadoop', 'Redshift', 'SAS (Legacy)']
        },
        process: [
            {
                step: 'ZS Case Study / OA',
                description: 'Famous for complex guesstimate and probability case studies (e.g., probability of a drug failing phase 3 trials). Data interpretation heavy.',
                duration: '120 mins',
                difficulty: 'Hard',
                topics: ['Probability', 'Data Interpretation']
            },
            {
                step: 'Technical / Behavioral Interviews',
                description: 'Heavy grilling on SQL joins, Python data manipulation (Pandas), and your ability to explain complex math to non-technical people.',
                duration: '2 hours',
                difficulty: 'Medium',
                topics: ['SQL', 'Pandas', 'Presenting']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '7.0+ for campus drives.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Pune is a massive hub for them. If you love math, probability, and healthcare, this is the place.'
        },
        culture: {
            wlb: 'Intense during project deliveries. Famously analytical and rigorous culture. The founders were Northwestern professors, so the academic vibe remains.',
            remote: 'Hybrid. 3 days in office usually.',
            vibe: 'Nerdy, rigorous, and highly analytical. Less focused on "schmoozing" than Big 4, more focused on getting the math exactly right.'
        },
        reality: {
            good: ['Phenomenal training in data science and analytics', 'Very stable (Pharma rarely crashes in recessions)', 'Great exit opps to tech data roles'],
            bad: ['Can pigeonhole you into the healthcare/pharma domain', 'Very niche tech (often just advanced Excel/SQL/Tableau initially)', 'Long hours']
        }
    },
    {
        id: 'musigma',
        name: 'Mu Sigma',
        type: 'Consulting',
        status: 'Active',
        logo: 'MUS',
        rating: 3.1,
        aiVerdict: 'Pioneer of data analytics in India. Famous for mass hiring with notoriously strict bonds and grueling entry-level conditions.',
        overview: {
            about: 'Mu Sigma is an Indian management consulting firm that primarily offers data analytics services. It is one of the first data science unicorns from India.',
            headquarters: 'Chicago, US / Bangalore (Global Delivery Center)',
            size: '3,000+ Employees',
            founded: '2004',
            website: 'mu-sigma.com'
        },
        roles: [
            {
                title: 'Decision Scientist (Trainee)',
                ctc: '₹ 21L (Over 3 / 4 Years)',
                base: '₹ 5,00,000 (First Year)',
                variable: 'Backloaded significantly',
                rsus: 'N/A',
                deductions: 'Tax, PF',
                inHand: '₹ 35k (First Year)'
            }
        ],
        techStack: {
            frontend: ['Tableau', 'PowerBI'],
            backend: ['R', 'Python', 'SQL'],
            infra: ['Client dependent AWS/Azure'],
            data: ['Hadoop', 'Spark', 'Excel (Heavy)']
        },
        process: [
            {
                step: 'MuApt (Aptitude Test)',
                description: 'Heavy math, probability, puzzles, and data interpretation. Very rigorous screening test.',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['Puzzles', 'Probability', 'Math']
            },
            {
                step: 'Group Discussion & Interview',
                description: 'Tests communication, structured thinking, and basic statistical knowledge.',
                duration: 'Varies',
                difficulty: 'Medium',
                topics: ['Statistics', 'Communication']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '60% throughout.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'Infamous for its multi-year service agreement/bond. The "21L" CTC is usually spread over 3 or 4 years, starting very low.'
        },
        culture: {
            wlb: 'Notoriously poor. Extremely long continuous hours are the norm.',
            remote: 'Strict RTO. Bangalore office only.',
            vibe: 'High pressure, chaotic, "start-up" feel despite its age. High attrition rate after the bond period expires.'
        },
        reality: {
            good: ['Incredible learning curve ("Mu Sigma University" training is excellent)', 'Exposure to Fortune 500 client data points very early in career', 'Great exit opps if you survive the 3 years'],
            bad: ['The bond/penalty structure is widely criticized', 'Compensation is severely backloaded', 'Toxic WLB reports are overwhelmingly common']
        }
    },
    {
        id: 'fractal',
        name: 'Fractal Analytics',
        type: 'Consulting',
        status: 'Active',
        logo: 'FRA',
        rating: 4.1,
        aiVerdict: 'Top tier AI/Analytics consulting firm in India. Much better culture and pay structure than its rival Mu Sigma.',
        overview: {
            about: 'Fractal Analytics is a multinational artificial intelligence and advanced analytics company that provides services to consumer packaged goods, insurance, healthcare, life sciences, retail and technology companies.',
            headquarters: 'New York, US / Mumbai, Bangalore, Gurgaon',
            size: '4,000+ Employees',
            founded: '2000',
            website: 'fractal.ai'
        },
        roles: [
            {
                title: 'Imagineer / Analyst',
                ctc: '₹ 8L - 12L',
                base: '₹ 7,50,000 - 10,00,000',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Tax, PF',
                inHand: '₹ 55k - 70k'
            },
            {
                title: 'Data Scientist / AI Engineer',
                ctc: '₹ 15L - 25L',
                base: '₹ 13,00,000 - 20,00,000',
                variable: '15%',
                rsus: 'N/A',
                deductions: 'Tax (20-30%), PF',
                inHand: '₹ 90k - 1.3L'
            }
        ],
        techStack: {
            frontend: ['React', 'Dash', 'Streamlit'],
            backend: ['Python (Heavy)', 'Pyspark', 'SQL'],
            infra: ['AWS', 'GCP', 'Azure'],
            data: ['Snowflake', 'Hadoop', 'Databricks', 'Tensorflow']
        },
        process: [
            {
                step: 'Online Assessment',
                description: 'SQL queries, Python scripting, and standard Aptitude/Data interpretation.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['SQL', 'Python Pandas', 'Logic']
            },
            {
                step: 'Technical & Case Study',
                description: 'Often involves a take-home data set to clean, analyze, and present findings. Tests storytelling with data.',
                duration: '2-3 hours',
                difficulty: 'Medium',
                topics: ['Data Storytelling', 'Machine Learning Basics']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '7.0+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Fractal focuses heavily on finding people who not only know the math, but can explain it clearly to a non-technical CEO.'
        },
        culture: {
            wlb: 'Good to average. Better than pure Big 4 consulting, but still client-driven. High focus on employee wellness recently.',
            remote: 'Hybrid/Flex work.',
            vibe: 'Modern, academic, and highly professional. A very well-respected pure-play AI consulting firm.'
        },
        reality: {
            good: ['Excellent brand name in the AI/Analytics space', 'Great exposure to generative AI and massive LLM integrations for clients', 'Very good compensation without draconian bonds'],
            bad: ['Bench time can sometimes be anxiety-inducing', 'Consulting travel requirements vary heavily', 'Engineering is almost entirely data-focused, not software product focused']
        }
    },
    {
        id: 'bot-consulting',
        name: 'Bot Consulting',
        type: 'Consulting',
        status: 'Active',
        logo: 'BOT',
        rating: 4.4,
        aiVerdict: 'Emerging AI & Automation consulting firm. Extreme focus on LLM integrations, robotic process automation (RPA), and autonomous systems for enterprise clients.',
        overview: {
            about: 'Bot Consulting is a specialized advisory and implementation firm focusing exclusively on artificial intelligence, RPA, and cognitive automation strategies for global enterprises.',
            headquarters: 'San Francisco, US / Bangalore, India',
            size: '500+ Employees',
            founded: '2019',
            website: 'botconsulting.ai'
        },
        roles: [
            {
                title: 'AI Automation Engineer',
                ctc: '₹ 12L - 18L',
                base: '₹ 10,00,000 - 15,00,000',
                variable: 'Performance Bonus',
                rsus: 'N/A',
                deductions: 'Tax (20%), PF',
                inHand: '₹ 70k - 1.05L'
            },
            {
                title: 'AI Strategy Consultant',
                ctc: '₹ 20L - 30L',
                base: '₹ 16,00,000 - 24,00,000',
                variable: '20% Bonus',
                rsus: 'N/A',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.1L - 1.6L'
            }
        ],
        techStack: {
            frontend: ['React', 'Next.js'],
            backend: ['Python', 'Node.js', 'Go'],
            infra: ['AWS', 'Azure OpenAI', 'Kubernetes'],
            data: ['LangChain', 'Vector DBs (Pinecone, Weaviate)', 'UiPath']
        },
        process: [
            {
                step: 'AI Engineering Assessment',
                description: 'Focuses heavily on Python scripting, API integrations, and basic understanding of ML patterns (embeddings, chunking vs traditional data).',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['Python', 'API Design', 'AI Concepts']
            },
            {
                step: 'System Design & Strategy Pitch',
                description: 'Candidates must design an automation pipeline for a mocked client problem and explain the cost-benefit analysis of AI vs legacy software.',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['System Design', 'Consulting Frameworks', 'LLM Architecture']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: 'Flexible. Portfolio and actual AI projects matter more than grades.',
            backlogs: 'Zero.',
            gap: 'Accepted if justified with freelance/project work.',
            notes: 'They are looking for developers who understand business problems, not just raw coders.'
        },
        culture: {
            wlb: 'Startup hours combined with consulting client deadlines line. Can be very intense.',
            remote: 'Remote-first globally.',
            vibe: 'Hyper-focused on the bleeding edge of AI. Everyone is constantly updating their skills as the field moves.'
        },
        reality: {
            good: ['You get to play with the newest AI models days after release', 'Remote-first culture with high agency', 'Massive compensation upside as the firm scales'],
            bad: ['High stress "figure it out" culture', 'Lack of legacy structural support/HR', 'Intense context switching between clients']
        }
    }
];
