import { NextResponse } from "next/server";

// Deterministic Pseudo-Random Number Generator
function seededRandom(seed: number) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function generateHash(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

export async function POST(req: Request) {
    try {
        const { role, location } = await req.json();

        const seedBase = (role || "General") + (location || "India");
        let seed = generateHash(seedBase);

        const getRand = (min: number, max: number) => {
            const r = seededRandom(seed++);
            return Math.floor(r * (max - min + 1)) + min;
        };

        const getRandItem = (arr: any[]) => arr[getRand(0, arr.length - 1)];

        // --- GENERATE HYPER-DETAILED DATA (INDIA CENTRIC) ---

        // 1. Salary Trend (12 months) - In LPA
        const baseSalary = getRand(8, 35);
        const salaryTrend = Array.from({ length: 12 }, (_, i) => {
            const noise = getRand(-2, 4);
            return Number((baseSalary + (i * 0.5) + noise).toFixed(1));
        });

        // 2. Demand Score & Signal
        const demandScore = getRand(70, 99);
        const marketSignal = demandScore > 88 ? "Strong Buy" : demandScore > 78 ? "Buy" : "Hold";

        // 3. Top Skills
        const techSkills = ["React.js", "Node.js", "AWS", "Python", "Java Spring Boot", "Kubernetes", "Docker", "System Design", "SQL", "Next.js", "Flutter", "Data Structures", "Microservices", "GraphQL", "Terraform"];
        const topSkills = Array.from({ length: 8 }, () => getRandItem(techSkills)); // Increased to 8

        // 4. Heatmap (Indian Tech Hubs)
        const indianCities = ["Bangalore", "Hyderabad", "Gurgaon", "Pune", "Noida", "Chennai", "Mumbai", "Delhi NCR"];
        const heatmap = indianCities.map(region => {
            const intensity = getRand(45, 98);
            let color = "bg-indigo-500"; // Changed to Indigo base
            if (intensity > 85) color = "bg-cyan-500";
            else if (intensity > 65) color = "bg-blue-500";
            else if (intensity > 45) color = "bg-slate-500";

            return { region, intensity, color };
        });

        // 5. Insights
        const avgSalaryLPA = (salaryTrend.reduce((a, b) => a + b, 0) / 12).toFixed(1);
        const insights = {
            avgSalary: `₹${avgSalaryLPA} LPA`,
            yoyGrowth: `+${getRand(8, 35)}%`,
            openRoles: `${getRand(2, 25)}k+`
        };

        // 6. Skill Match (Radar)
        const skillMatch = [
            { subject: "DSA", A: getRand(60, 95), fullMark: 100 },
            { subject: "System Design", A: getRand(50, 90), fullMark: 100 },
            { subject: "Frameworks", A: getRand(70, 98), fullMark: 100 },
            { subject: "Cloud/DevOps", A: getRand(55, 92), fullMark: 100 },
            { subject: "Soft Skills", A: getRand(65, 85), fullMark: 100 },
            { subject: "Architecture", A: getRand(40, 80), fullMark: 100 } // Added Architecture
        ];

        // 7. Role Distribution
        const sde1 = getRand(25, 45);
        const sde2 = getRand(25, 40);
        const sde3 = 100 - sde1 - sde2;
        const roleDistribution = [
            { name: "SDE-1 / Junior", value: sde1 },
            { name: "SDE-2 / Mid", value: sde2 },
            { name: "SDE-3 / Lead", value: Math.max(0, sde3) }
        ];

        // --- NEW HYPER-DETAILED METRICS ---

        // 8. Company Tier Analysis (Salary Disparity)
        const tierData = [
            { name: "Product MNC", salary: Number((baseSalary * 1.5).toFixed(1)), demand: getRand(60, 90) },
            { name: "Startups (Series B+)", salary: Number((baseSalary * 1.3).toFixed(1)), demand: getRand(70, 95) },
            { name: "Service Based", salary: Number((baseSalary * 0.8).toFixed(1)), demand: getRand(80, 100) },
            { name: "GCCs", salary: Number((baseSalary * 1.4).toFixed(1)), demand: getRand(65, 85) }
        ];

        // 9. Work Mode Breakdown
        const remote = getRand(10, 30);
        const hybrid = getRand(40, 60);
        const onsite = 100 - remote - hybrid;
        const workMode = [
            { name: "Remote", value: remote },
            { name: "Hybrid", value: hybrid },
            { name: "On-site", value: Math.max(0, onsite) }
        ];

        // 10. Education Profile
        const btech = getRand(60, 80);
        const mtech = getRand(15, 30);
        const other = 100 - btech - mtech;
        const educationProfile = [
            { name: "B.Tech/B.E", value: btech },
            { name: "M.Tech/MS", value: mtech },
            { name: "Other/Non-Eng", value: Math.max(0, other) }
        ];

        // 11. Interview Intelligence
        const interviewInsights = {
            difficulty: getRand(6, 9) + "/10",
            avgRounds: getRand(3, 6),
            commonTopics: ["Graph DP", "LLD (Parking Lot)", "HLD (TinyURL)", "Behavioral (STAR)"],
            timeToOffer: getRand(14, 45) + " Days"
        };

        // 12. Talent DNA
        const talentDNA = {
            avgTenure: (getRand(12, 36) / 12).toFixed(1) + " Years",
            genderRatio: `${getRand(15, 35)}% Female`, // Realistic tech industry stat
            topColleges: ["IITs/NITs", "BITS", "Tier-1 Pvt"]
        };

        // 13. Market Narrative (Context-Rich)
        const targetRole = role || "Tech Professional";
        const narratives = [
            `INTELLIGENCE REPORT: ${targetRole} roles are currently seeing a ${insights.yoyGrowth} surge in demand, specifically within the GCC ecosystem in Bangalore and Hyderabad. While Service-based firms are hiring in volume, Product MNCs are offering a ${((tierData[0].salary / tierData[2].salary - 1) * 100).toFixed(0)}% premium for specialized skills in ${topSkills[0]} and ${topSkills[1]}.`,
            `MARKET SCAN: The shift towards Hybrid work models is evident, with ${hybrid}% of roles requiring 2-3 days in office. Startups are aggressively poaching talent from established MNCs, offering competitive ESOPs and faster career progression. Key hiring hubs remain Bangalore and Pune.`,
            `STRATEGIC ALERT: A significant talent gap exists in ${topSkills[0]} and ${topSkills[2]}. Candidates with these skills are clearing interviews ${getRand(20, 40)}% faster. Expect rigorous ${interviewInsights.difficulty} difficulty interviews focusing heavily on ${interviewInsights.commonTopics[1]}.`
        ];
        const marketNarrative = getRandItem(narratives);

        const data = {
            salaryTrend,
            demandScore,
            marketSignal,
            topSkills: [...new Set(topSkills)],
            heatmap: heatmap.sort((a, b) => b.intensity - a.intensity).slice(0, 6),
            insights,
            skillMatch,
            roleDistribution,
            marketNarrative,
            // New Fields
            tierData,
            workMode,
            educationProfile,
            interviewInsights,
            talentDNA,
            isSimulated: true
        };

        await new Promise(resolve => setTimeout(resolve, 1500)); // Slightly longer for "Deep Analysis" feel

        return NextResponse.json(data);

    } catch (error) {
        console.error("Simulation Engine Error:", error);
        return NextResponse.json({ error: "Simulation Failed" }, { status: 500 });
    }
}
