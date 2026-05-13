
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_16_lessons = [
    {
        "title": "16.1 The 3 Paths: Backend vs Data vs DevOps",
        "emoji": "🛤️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>**Backend:** Building APIs, Architectures. (Django, FastAPI).</li>
                <li>**Data/AI:** Analyzing numbers, training models. (Pandas, PyTorch).</li>
                <li>**DevOps:** Automating infrastructure. (Docker, Terraform, Ansible).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "Day in Life" Comparison</h3>
            <p>
                <strong>Backend:</strong> "Why is this API slow?"<br>
                <strong>Data:</strong> "Why is this chart weird?"<br>
                <strong>DevOps:</strong> "Why is the server down?"
            </p>
        </div>
        """
    },
    {
        "title": "16.2 Contributing to Open Source (Your First PR)",
        "emoji": "🐙",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Finding "Good First Issues".</li>
                <li>Forking, Cloning, Branching, Pushing.</li>
                <li>Writing a good Pull Request description.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Imposter Syndrome</h3>
            <p>You don't need to rewrite the Linux Kernel. Fixing a typo in documentation IS a valid contribution.</p>
        </div>
        """
    },
    {
        "title": "16.3 Freelancing & Indie Hacking with Python",
        "emoji": "💸",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Platforms: Upwork vs Fiverr vs Toptal.</li>
                <li>Niches: "Web Scraping Automation" is HUGE for Python freelancers.</li>
                <li>Pricing: Fixed Price vs Hourly (Start Fixed to build rep).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Automation Niche</h3>
            <p>Clients pay good money for: "Take this Excel sheet, scrape these sites, and email me the result daily." Python is the KING of this.</p>
        </div>
        """
    },
    {
        "title": "16.4 Corporate Survival Guide: The First 90 Days",
        "emoji": "🏢",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Setup Phase: Get access to Jira, Git, AWS ASAP.</li>
                <li>The "Bus Factor": Document everything you learn.</li>
                <li>Asking Questions: "5 minutes of research saves 5 minutes of shame".</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Golden Rule</h3>
            <p>Don't be the person who breaks Production on Friday at 5 PM. If you do, own it immediately.</p>
        </div>
        """
    },
    {
        "title": "16.5 Python in 2030: Mojo, Rust Integration, and AI",
        "emoji": "🔮",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>**Mojo:** A new language that looks like Python but runs as fast as C.</li>
                <li>**Rust + Python:** Using `PyO3` to write high-performance extensions.</li>
                <li>**AI Coding:** Why you will be an "AI Orchestrator", not just a "Coder".</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Don't Panic</h3>
            <p>Python is not dying. It is becoming the "Interface Layer" for high-performance engines written in Rust/C/Mojo.</p>
        </div>
        """
    },
    {
        "title": "16.6 Certifications: Worth it or Scam?",
        "emoji": "📜",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>**Cloud Certs (AWS/Azure):** Highly Valuable.</li>
                <li>**Language Certs (PCEP/PCAP):** Mostly ignore. Projects > standard Python certs.</li>
                <li>**Specialized (TensorFlow/CKAD):** Good for mid-level niches.</li>
            </ul>
        </div>
        """
    },
    {
        "title": "16.7 Networking for Introverts",
        "emoji": "🤝",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Twitter/X Tech Twitter: Actually useful for finding jobs.</li>
                <li>Meetups: Go to listen, not to talk (initially).</li>
                <li>The "Build in Public" movement.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Action Item</h3>
            <p>Post your Capstone Project on LinkedIn/Twitter with a video demo. Tag the libraries you used (e.g., @FastAPI).</p>
        </div>
        """
    },
    {
        "title": "16.8 Final Assessment & Next Steps",
        "emoji": "🎓",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The End? No, The Beginning.</h3>
            <p>You have completed the entire Python Engineering Path. You know more than 90% of applicants.</p>

            <h3 class="text-2xl font-bold text-white mb-4">One Last Task</h3>
            <p>Create a **"Career Notion Page"** tracking:</p>
            <ul class="list-disc list-inside space-y-2">
                <li>Jobs Applied (Company, Status, Notes).</li>
                <li>Skills to Learn (Next).</li>
                <li>Network Contacts.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">Certificate of Completion</h3>
            <p class="text-center text-green-400 font-bold text-xl">🎉 You are a Python Engineer. Go build the future. 🎉</p>
        </div>
        """
    }
]
