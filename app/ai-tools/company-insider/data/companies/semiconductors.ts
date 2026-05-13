import { CompanyData } from './types';

export const semiconductorCompanies: CompanyData[] = [
    {
        id: 'nvidia',
        name: 'Nvidia',
        type: 'Hardware/AI',
        status: 'Active',
        logo: 'NVI',
        rating: 4.8,
        aiVerdict: 'The king of the AI boom. Tech revolves around CUDA, C++, and hardware acceleration. Interviews are brutally technical focusing on computer architecture and parallel processing.',
        overview: {
            about: 'Nvidia Corporation is an American multinational technology company. It designs graphics processing units (GPUs) for the gaming and professional markets, as well as system on a chip units (SoCs) for the mobile computing and automotive market.',
            headquarters: 'Santa Clara, California, US / Bangalore, Pune (Hubs)',
            size: '26,000+ Employees',
            founded: '1993',
            website: 'nvidia.com/en-us/about/careers/'
        },
        roles: [
            {
                title: 'Software Engineer (System/C++)',
                ctc: '₹ 25L - 35L',
                base: '₹ 18,00,000 - 24,00,000',
                variable: '10%',
                rsus: 'Stock grants have exploded in value recently',
                deductions: 'Tax, PF',
                inHand: '₹ 1.25L - 1.6L'
            },
            {
                title: 'Senior Software/Hardware Engineer',
                ctc: '₹ 50L - 80L+',
                base: '₹ 35,00,000 - 45,00,000',
                variable: '15%',
                rsus: '$80k - $200k+ (Variable due to stock split/growth)',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.2L - 2.8L'
            }
        ],
        techStack: {
            frontend: ['C++ (Core Drivers / GameWorks)', 'CUDA (Parallel Computing)'],
            backend: ['Python (AI/ML workflows)', 'C'],
            infra: ['DGX SuperPODs', 'Massive internal GPU clusters'],
            data: ['TensorRT', 'cuDNN']
        },
        process: [
            {
                step: 'Technical Screen / Hardware OA',
                description: 'Instead of just Leetcode, often features deep C++ knowledge (pointers, memory leaks), bitwise manipulation, or digital logic design for hardware roles.',
                duration: '60-90 mins',
                difficulty: 'Hard',
                topics: ['Bit Manipulation', 'C++ Internals', 'Digital Logic']
            },
            {
                step: 'Onsite (4-5 Rounds)',
                description: 'Deep grilling on OS concepts, GPU architecture, parallel programming (CUDA principles), and low-level system design.',
                duration: '5 hours',
                difficulty: 'Expert',
                topics: ['Parallelism', 'OS Architecture', 'C++ Mastery']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: 'Highly competitive. Target schools preferred for campus.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'If interviewing for software roles, you must know C++. If hardware, Verilog/VHDL and computer architecture are non-negotiable.'
        },
        culture: {
            wlb: 'Intense. The stock boom has created incredible wealth internally, but the pressure to maintain market dominance against AMD/Intel is immense.',
            remote: 'Hybrid. Jensen Huang prefers in-office collaboration but flexibility exists.',
            vibe: 'Hyper-focused, flat structure compared to its size. "Speed of light" execution is heavily encouraged. Very low tolerance for politics.'
        },
        reality: {
            good: ['Incredible wealth generation for employees over the last 5 years', 'You are building the literal engines powering the AI revolution', 'Unmatched prestige in hardware'],
            bad: ['Extremely hard to enter', 'Pressure can be very high during hardware tape-outs', 'WLB varies drastically depending on the product cycle']
        }
    },
    {
        id: 'amd',
        name: 'AMD',
        type: 'Hardware',
        status: 'Active',
        logo: 'AMD',
        rating: 4.4,
        aiVerdict: 'The eternal underdog that overtook Intel. Deep focus on Ryzen/Epyc architecture and ROCm software stack to battle Nvidia.',
        overview: {
            about: 'Advanced Micro Devices, Inc. (AMD) is an American multinational semiconductor company based in Santa Clara, California, that develops computer processors and related technologies.',
            headquarters: 'Santa Clara, California, US / Hyderabad, Bangalore (Major Hubs)',
            size: '25,000+ Employees',
            founded: '1969',
            website: 'amd.com/en/corporate/careers'
        },
        roles: [
            {
                title: 'Software Development Engineer',
                ctc: '₹ 20L - 28L',
                base: '₹ 15,00,000 - 18,00,000',
                variable: '10%',
                rsus: '$10k - $20k',
                deductions: 'Tax, PF',
                inHand: '₹ 1.0L - 1.2L'
            },
            {
                title: 'Senior MTS / System Architect',
                ctc: '₹ 35L - 55L',
                base: '₹ 25,00,000 - 35,00,000',
                variable: '15%',
                rsus: '$40k - $80k',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['C/C++ (Driver Development)'],
            backend: ['HIP/ROCm (AMD\'s CUDA alternative)', 'Python'],
            infra: ['Massive hardware testing labs', 'Verilog/SystemVerilog'],
            data: ['Internal VLSI flows']
        },
        process: [
            {
                step: 'Technical Assessment',
                description: 'C/C++ concepts, pointers, data structures, and computer architecture MCQ.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['C++ Pointers', 'Computer Architecture']
            },
            {
                step: 'Technical Loops (3-4 Rounds)',
                description: 'Focus heavily on operating systems, memory hierarchies (L1/L2/L3 cache architectures), and debugging driver-level code.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['Cache Memory', 'OS Concepts', 'C++ Debugging']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Questions about cache coherence, pipelining, and virtual memory are extremely common here.'
        },
        culture: {
            wlb: 'Generally better than average tech companies, though crunch time happens right before new processor (Zen) launches.',
            remote: 'Hybrid.',
            vibe: 'Very engineering-centric. Leaner and scrappier than Intel. High morale over the last decade due to massive Ryzen success.'
        },
        reality: {
            good: ['Great stock performance compared to historical lows', 'Incredible hardware engineering culture', 'Strong presence in Hyderabad'],
            bad: ['Software tech stack (ROCm) still heavily trails Nvidia (CUDA)', 'Base pay is slightly lower than pure software FAANG', 'Hardware development cycles are long (3-5 years) भी']
        }
    },
    {
        id: 'intel',
        name: 'Intel',
        type: 'Hardware',
        status: 'Active',
        logo: 'INTL',
        rating: 3.9,
        aiVerdict: 'The struggling giant. Still a phenomenal place for unparalleled exposure to x86 architecture and massive silicon fabrication logic.',
        overview: {
            about: 'Intel Corporation is an American multinational corporation and technology company. It is one of the world\'s largest semiconductor chip manufacturers by revenue.',
            headquarters: 'Santa Clara, California, US / Bangalore (Massive Hub)',
            size: '120,000+ Employees',
            founded: '1968',
            website: 'jobs.intel.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 18L - 25L',
                base: '₹ 14,00,000 - 18,00,000',
                variable: '10%',
                rsus: 'N/A or Low',
                deductions: 'Tax, PF',
                inHand: '₹ 95k - 1.25L'
            },
            {
                title: 'Senior CPU Architect / Engineer',
                ctc: '₹ 35L - 55L',
                base: '₹ 25,00,000 - 35,00,000',
                variable: '15%',
                rsus: 'Variable',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.6L - 2.2L'
            }
        ],
        techStack: {
            frontend: ['C/C++', 'Assembly (x86)'],
            backend: ['Python (Testing/Validation)', 'SystemVerilog'],
            infra: ['Massive Fab simulation software'],
            data: ['OneAPI compiler layers']
        },
        process: [
            {
                step: 'Technical Screen',
                description: 'Mix of basic programming, digital logic, and OS fundamentals.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['Digital Logic', 'C/C++']
            },
            {
                step: 'Onsite (3-4 Rounds)',
                description: 'Deep dive into computer architecture, memory layouts, multiprocessing, and compiler optimizations depending on the team.',
                duration: '4 hours',
                difficulty: 'Medium',
                topics: ['Architecture', 'C Compilers', 'Algorithm Logic']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Intel is currently undergoing massive restructuring. Hiring has slowed down, but they still hire heavily for validation and testing.'
        },
        culture: {
            wlb: 'Historically excellent, though current restructuring has increased stress. Highly academic.',
            remote: 'Hybrid. Heavy RTO for hardware teams.',
            vibe: 'Like a massive university. Bureaucratic, incredibly methodical. "Tick-Tock" development cycles define the company rhythm.'
        },
        reality: {
            good: ['Incredible training ground for low-level architecture', 'Intel campus in Bangalore is excellent', 'Massive scale'],
            bad: ['Company is currently facing severe stock and market share declines', 'Promotions can be very slow due to hierarchy', 'Massive layoffs and restructuring ongoing']
        }
    },
    {
        id: 'qualcomm',
        name: 'Qualcomm',
        type: 'Hardware',
        status: 'Active',
        logo: 'QLC',
        rating: 4.1,
        aiVerdict: 'King of mobile processors (Snapdragon). Interviews index incredibly high on C programming, memory leaks, linked lists, and OS concepts.',
        overview: {
            about: 'Qualcomm is an American multinational corporation headquartered in San Diego, California, and incorporated in Delaware. It creates semiconductors, software, and services related to wireless technology.',
            headquarters: 'San Diego, California, US / Hyderabad, Bangalore (Hubs)',
            size: '50,000+ Employees',
            founded: '1985',
            website: 'qualcomm.com/careers'
        },
        roles: [
            {
                title: 'Engineer, Software',
                ctc: '₹ 18L - 24L',
                base: '₹ 15,00,000 - 18,00,000',
                variable: '10%',
                rsus: '$8k - $12k',
                deductions: 'Tax, PF',
                inHand: '₹ 1.0L - 1.2L'
            },
            {
                title: 'Senior Engineer',
                ctc: '₹ 30L - 45L',
                base: '₹ 22,00,000 - 32,00,000',
                variable: '15%',
                rsus: '$20k - $40k',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.4L - 2.0L'
            }
        ],
        techStack: {
            frontend: ['C (Embedded/Linux Kernel)'],
            backend: ['C++', 'Python (Automation)'],
            infra: ['Hardware testing rigs, Android Open Source Project (AOSP)'],
            data: ['DSP algorithms (Digital Signal Processing)']
        },
        process: [
            {
                step: 'Written/Online Test',
                description: 'Famous for its hardcore C programming section. Pointers, Macros, Bitwise operators, and basic Aptitude.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['C Pointers', 'Macros', 'Operating Systems']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'You will write C code on a whiteboard. Linked lists, string manipulations without standard libraries, and RTOS concepts.',
                duration: '3 hours',
                difficulty: 'Hard',
                topics: ['Embedded C', 'LinkedLists', 'RTOS']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'If you do not know the difference between a mutex and a semaphore, or how `volatile` works in C, you will fail.'
        },
        culture: {
            wlb: 'Good. Predictable release cycles tied to smartphone launches. Hyderabad campus is massive.',
            remote: 'Hybrid. In-office 3 days.',
            vibe: 'Intensely technical, specifically in wireless communications (5G/Modem) and embedded software. Less software-glamour, more hardcore engineering.'
        },
        reality: {
            good: ['Phenomenal place to learn Android internals and Linux Kernel development', 'Stable growth and market dominance in mobile', 'Great campus facilities'],
            bad: ['Not the place for web/cloud developers', 'Compensation lags slightly behind pure software product companies', 'Promotions can be slow']
        }
    },
    {
        id: 'ti',
        name: 'Texas Instruments',
        type: 'Hardware',
        status: 'Active',
        logo: 'TXN',
        rating: 4.2,
        aiVerdict: 'Analog semiconductor god. Heavily focuses on electrical engineering concepts, embedded C, and microcontrollers. Niche but pristine reputation.',
        overview: {
            about: 'Texas Instruments Incorporated (TI) is an American technology company headquartered in Dallas, Texas, that designs and manufactures semiconductors and various integrated circuits.',
            headquarters: 'Dallas, Texas, US / Bangalore',
            size: '30,000+ Employees',
            founded: '1930',
            website: 'careers.ti.com'
        },
        roles: [
            {
                title: 'Embedded Software Engineer',
                ctc: '₹ 15L - 20L',
                base: '₹ 13,00,000 - 16,00,000',
                variable: 'Bonus',
                rsus: 'Profit Sharing heavily emphasized',
                deductions: 'Tax, PF',
                inHand: '₹ 90k - 1.1L'
            }
        ],
        techStack: {
            frontend: ['C (Bare-metal microcontroller programming)'],
            backend: ['Assembly', 'C++'],
            infra: ['Code Composer Studio (CCS)', 'RTOS'],
            data: ['Analog sensors, signal converters']
        },
        process: [
            {
                step: 'Technical Screen',
                description: 'Extremely specialized. Basic circuits, digital electronics, embedded C concepts, and microprocessors (8051/ARM).',
                duration: '90 mins',
                difficulty: 'Hard (Niche)',
                topics: ['Digital/Analog Electronics', 'Embedded C']
            },
            {
                step: 'Onsite (3 Rounds)',
                description: 'Deep dive into reading datasheets, writing driver code for I2C/SPI protocols, and handling hardware interrupts.',
                duration: '3-4 hours',
                difficulty: 'Expert',
                topics: ['I2C/SPI Protocols', 'Interrupt Service Routines']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '8.0+ targeting premier Core engineering colleges.',
            backlogs: 'Zero.',
            gap: 'Case by Case.',
            notes: 'They primarily hire Electronics & Communication (ECE) or Electrical (EE) graduates over pure Computer Science.'
        },
        culture: {
            wlb: 'Excellent. Highly praised for stability and long-term career growth. Very low attrition.',
            remote: 'Hybrid / In-office (Hardware dependent).',
            vibe: 'A 90-year-old engineering firm. Mature, highly profitable, and unconcerned with Silicon Valley hype. They literally invented the integrated circuit.'
        },
        reality: {
            good: ['Extremely stable job security', 'Industry-leading profit sharing program', 'Work on hardware that goes into everything from cars to space probes'],
            bad: ['Not for web developers', 'Slower pace of modern software adoption', 'Compensation is lower than FAANG']
        }
    },
    {
        id: 'asml',
        name: 'ASML',
        type: 'Hardware',
        status: 'Active',
        logo: 'ASM',
        rating: 4.5,
        aiVerdict: 'The most important tech company nobody knows. They build the machines that build the chips. Hyper-specialized software combining physics, optics, and extreme precision control.',
        overview: {
            about: 'ASML is a Dutch multinational company. It is the only supplier in the world of extreme ultraviolet lithography (EUV) photolithography machines that are required to manufacture the most advanced semiconductor chips.',
            headquarters: 'Veldhoven, Netherlands',
            size: '40,000+ Employees',
            founded: '1984',
            website: 'asml.com/en/careers'
        },
        roles: [
            {
                title: 'Software Design Engineer',
                ctc: '€70k - €100k+ (Netherlands Relocation)',
                base: 'High',
                variable: 'Bonus',
                rsus: 'N/A',
                deductions: 'Dutch Tax (30% ruling often applies)',
                inHand: 'High'
            }
        ],
        techStack: {
            frontend: ['C/C++ (Millions of lines of control code)'],
            backend: ['Python', 'MATLAB (Physics models)'],
            infra: ['Custom Real-Time OS (WindRiver VxWorks)', 'Unix'],
            data: ['Massive diagnostic log pipelines']
        },
        process: [
            {
                step: 'Screen',
                description: 'Object-oriented programming in C++, multithreading, and algorithmic efficiency. Usually a HackerRank.',
                duration: '60 mins',
                difficulty: 'Medium',
                topics: ['C++', 'OOD']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'Focuses heavily on architectural design, state machines, real-time constraints, and incredibly clean C++ code.',
                duration: '4 hours',
                difficulty: 'Hard',
                topics: ['State Machines', 'C++ Mastery', 'System Architecture']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: 'Strong academic background preferred. Niche engineering.',
            backlogs: 'Zero.',
            gap: 'Case by Case.',
            notes: 'ASML frequently relocates top Indian C++ talent to the Netherlands.'
        },
        culture: {
            wlb: 'Dutch culture ensures excellent WLB (usually 40 hours maximum). High focus on vacation and family.',
            remote: 'Hybrid, but highly restricted by hardware access.',
            vibe: 'Academic, deliberate, and incredibly complex. You are dealing with physics at the atomic level. "Measure twice, cut once" to the extreme.'
        },
        reality: {
            good: ['Incredible relocation package/quality of life in NL', 'Working on the literal pinnacle of human engineering (EUV machines)', 'Monopoly in the market ensures zero job threat'],
            bad: ['Codebase is massive and ancient in parts', 'You are writing control software for physical machines, not web apps', 'Cold weather in Netherlands']
        }
    },
    {
        id: 'tsmc',
        name: 'TSMC',
        type: 'Hardware',
        status: 'Active',
        logo: 'TSM',
        rating: 3.5,
        aiVerdict: 'The world\'s foundry. The definition of a hardcore, grueling manufacturing engineering culture. Primarily hires in Taiwan and new US fabs.',
        overview: {
            about: 'Taiwan Semiconductor Manufacturing Company, Limited (TSMC) is a Taiwanese multinational semiconductor contract manufacturing and design company. It is the world\'s most valuable semiconductor company.',
            headquarters: 'Hsinchu, Taiwan / Arizona, US',
            size: '70,000+ Employees',
            founded: '1987',
            website: 'tsmc.com'
        },
        roles: [
            {
                title: 'Equipment / Process / IT Engineer',
                ctc: 'NT$1.5M - NT$2.5M+ (Taiwan)',
                base: 'Variable',
                variable: 'Massive bonuses (Often >50% of annual pay depending on fab yield)',
                rsus: 'N/A',
                deductions: 'Taiwan Taxes',
                inHand: 'Variable'
            }
        ],
        techStack: {
            frontend: ['C++', 'Python', 'C# (Internal IT)'],
            backend: ['Java', 'Proprietary Fab control software'],
            infra: ['Highly secure closed-loop networks', 'Robotics'],
            data: ['Yield analysis big data']
        },
        process: [
            {
                step: 'Aptitude / English / Personality Test',
                description: 'Standard screening.',
                duration: '90 mins',
                difficulty: 'Easy',
                topics: ['Logic', 'Personality']
            },
            {
                step: 'Technical Interviews',
                description: 'Varies wildly. Usually focuses on semiconductor physics, materials science, or basic IT/software for internal systems.',
                duration: '2 hours',
                difficulty: 'Medium',
                topics: ['Semiconductor Basics', 'Engineering Discipline']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: 'High. Prefers leading Taiwanese universities or top global engineering programs.',
            backlogs: 'Zero.',
            gap: 'Needs explanation.',
            notes: 'TSMC is a manufacturing company first and foremost. Software engineers build internal tooling.'
        },
        culture: {
            wlb: 'Notoriously grueling. "Fab culture" means working night shifts, being on-call constantly, and extreme discipline.',
            remote: 'Zero. Strict in-fab presence required. High security (no smartphones/cameras inside).',
            vibe: 'Military-level precision and discipline. The entire culture is built around maintaining 99.99% yield on silicon wafers.'
        },
        reality: {
            good: ['Unmatched job security (the world economy literally depends on them)', 'High monetary bonuses for successful yields'],
            bad: ['Brutal work-life balance', 'Strict, hierarchical, and militaristic culture', 'Difficult environment for creative software engineering']
        }
    },
    {
        id: 'broadcom',
        name: 'Broadcom',
        type: 'Hardware',
        status: 'Active',
        logo: 'BRC',
        rating: 3.8,
        aiVerdict: 'The ultimate corporate acquirer. Lean, high-margin execution. Great compensation but famously ruthless culture.',
        overview: {
            about: 'Broadcom Inc. is an American multinational designer, developer, manufacturer and global supplier of a wide range of semiconductor and infrastructure software products.',
            headquarters: 'San Jose, California, US / Bangalore',
            size: '20,000+ Employees',
            founded: '1991',
            website: 'broadcom.com'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 25L - 35L',
                base: '₹ 18,00,000 - 25,00,000',
                variable: 'Bonus',
                rsus: '$20k - $40k',
                deductions: 'Tax (30%), PF',
                inHand: '₹ 1.25L - 1.6L'
            },
            {
                title: 'Staff / Principal Engineer',
                ctc: '₹ 60L - 1Cr+',
                base: '₹ 40,00,000 - 55,00,000',
                variable: 'Bonus',
                rsus: '$100k+ (Very strong stock performance)',
                deductions: 'Tax (30%+), PF',
                inHand: '₹ 2.5L - 3.4L'
            }
        ],
        techStack: {
            frontend: ['C/C++ (Firmware/Networking)'],
            backend: ['Python', 'SystemVerilog (ASIC design)'],
            infra: ['Massive hardware testbeds'],
            data: ['Network switch data planes']
        },
        process: [
            {
                step: 'Technical Screen',
                description: 'Hardcore C and Data Structures.',
                duration: '60 mins',
                difficulty: 'Hard',
                topics: ['C', 'DSA']
            },
            {
                step: 'Onsite (4 Rounds)',
                description: 'Intense focus on networking protocols, ASIC/FPGA architecture, RTOS, and writing highly optimized C algorithms.',
                duration: '4 hours',
                difficulty: 'Expert',
                topics: ['Networking', 'Architecture', 'Algorithms']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '7.5+.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'Broadcom values incredibly specialized engineers who can sit in a specific unit (like WiFi chips) and optimize it endlessly.'
        },
        culture: {
            wlb: 'Varies. The company operates as a collection of mini-franchises. Extremely profit/margin focused under CEO Hock Tan.',
            remote: 'Heavily strict Return To Office (RTO) policies.',
            vibe: 'Ruthless efficiency. They acquire companies (like VMware), slash non-essential R&D/perks, and maximize profit. If you survive, you get paid very well.'
        },
        reality: {
            good: ['Stock performance has been astronomical over the last decade', 'Top tier base pay', 'Work on chips that power Apple/Google devices'],
            bad: ['Culture is often described as cutthroat or overly corporate', 'Zero tolerance for "pet projects" that don\'t generate revenue immediately', 'Benefits are often stripped away']
        }
    },
    {
        id: 'micron',
        name: 'Micron Technology',
        type: 'Hardware',
        status: 'Active',
        logo: 'MIC',
        rating: 4.1,
        aiVerdict: 'Memory giant. Crucial for understanding storage and DRAM. Excellent gateway into hardware operations.',
        overview: {
            about: 'Micron Technology is an American producer of computer memory and computer data storage including dynamic random-access memory, flash memory, and USB flash drives.',
            headquarters: 'Boise, Idaho, US / Hyderabad (Massive hub)',
            size: '43,000+ Employees',
            founded: '1978',
            website: 'micron.com/careers'
        },
        roles: [
            {
                title: 'Data/Software Engineer',
                ctc: '₹ 16L - 22L',
                base: '₹ 14,00,000 - 18,00,000',
                variable: 'Bonus',
                rsus: '$5k - $10k',
                deductions: 'Tax, PF',
                inHand: '₹ 95k - 1.2L'
            }
        ],
        techStack: {
            frontend: ['Angular/React (Internal tools)'],
            backend: ['Python (Heavily used for data/testing)', 'C++ (Firmware)', 'Java'],
            infra: ['Hadoop', 'Azure'],
            data: ['Massive data engineering pipelines for yield analysis']
        },
        process: [
            {
                step: 'Screen / OA',
                description: 'Aptitude, basic C++ or Python, and sometimes semiconductor physics questions.',
                duration: '90 mins',
                difficulty: 'Medium',
                topics: ['Python', 'Aptitude', 'Basic Physics']
            },
            {
                step: 'Technical Loops (3 Rounds)',
                description: 'For software roles: standard DSA, DBMS, and Python testing frameworks. For hardware roles: deep dive into NAND/DRAM physics and testing.',
                duration: '3 hours',
                difficulty: 'Medium',
                topics: ['Data Structures', 'Python automation', 'DRAM architecture']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: '7.5+ for campus.',
            backlogs: 'Zero.',
            gap: 'Accepted.',
            notes: 'Micron India (Hyderabad) does a massive amount of data engineering to analyze chip yields.'
        },
        culture: {
            wlb: 'Good. Generally considered stable with very standard corporate hours unless in manufacturing fab roles.',
            remote: 'Hybrid.',
            vibe: 'Friendly, slightly traditional IT/Engineering vibe. Massive investments recently in India make it a growth hub.'
        },
        reality: {
            good: ['Great brand name in the memory space', 'Strong expansion in India (Hyderabad/Gujarat) means massive job creation', 'Good training'],
            bad: ['Memory market is extremely cyclical (boom/bust), leading to periodic hiring freezes', 'Heavy focus on data pipelines rather than core product software']
        }
    },
    {
        id: 'arm',
        name: 'ARM',
        type: 'Hardware',
        status: 'Active',
        logo: 'ARM',
        rating: 4.4,
        aiVerdict: 'The architect of the mobile world. You don\'t write web apps here; you write instruction sets and compiler optimizations.',
        overview: {
            about: 'Arm is a British semiconductor and software design company. Its primary business is the design of ARM processors, an architecture which is used in 99% of all smartphones globally.',
            headquarters: 'Cambridge, UK / Bangalore, Noida',
            size: '7,000+ Employees',
            founded: '1990',
            website: 'arm.com/careers'
        },
        roles: [
            {
                title: 'Software Engineer',
                ctc: '₹ 22L - 30L',
                base: '₹ 16,00,000 - 22,00,000',
                variable: 'Bonus',
                rsus: 'Company recently IPO\'d',
                deductions: 'Tax, PF',
                inHand: '₹ 1.05L - 1.4L'
            }
        ],
        techStack: {
            frontend: ['C (Linux Kernel / Bootloaders)'],
            backend: ['Assembly (ARM64)', 'C++', 'Python (Validation)'],
            infra: ['AWS (Graviton scaling)', 'Simulation tools'],
            data: ['Performance profiling tools']
        },
        process: [
            {
                step: 'Assessments',
                description: 'Extremely deep dive into C programming. Bitwise operators, memory alignment, padding, and compiler behavior.',
                duration: '90 mins',
                difficulty: 'Hard',
                topics: ['Embedded C', 'Bit Manipulation']
            },
            {
                step: 'Onsite (4 Rounds)',
                description: 'Focus on OS internals, writing Assembly code, compiler toolchains (LLVM/GCC), and computer architecture (Pipelining, caches).',
                duration: '4 hours',
                difficulty: 'Expert',
                topics: ['Compilers', 'OS Architecture', 'RISC design']
            }
        ],
        syllabus: [
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
        eligibility: {
            cgpa: 'High. Prefers candidates who have written operating systems or compilers in college.',
            backlogs: 'Zero.',
            gap: 'Reviewed contextually.',
            notes: 'If you don\'t enjoy writing bitmask macros or understanding how a CPU parses an instruction, do not apply here.'
        },
        culture: {
            wlb: 'Excellent. British corporate culture ensures extreme respect for personal time. Very academic research vibe.',
            remote: 'Hybrid.',
            vibe: 'Intellectual powerhouse. They don\'t manufacture chips; they just license the genius designs to Apple/Qualcomm/Nvidia. Very smart, quiet company.'
        },
        reality: {
            good: ['You dictate the architecture that powers the entire globe', 'Incredible work-life balance', 'Brilliant engineering colleagues'],
            bad: ['Can be too low-level/abstract for many engineers', 'Compensation, while good, often trails the companies that actually manufacture their designs (like Apple)']
        }
    }
];
