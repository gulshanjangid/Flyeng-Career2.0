
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_14_lessons = [
    {
        "title": "14.1 The Perfect Python Resume (ATS Friendly)",
        "emoji": "📄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Beat the Application Tracking System (ATS).</li>
                <li>Keywords to include: FastAPI, Docker, AsyncIO, PyTest.</li>
                <li>Structuring projects: "Problem -> Action -> Result".</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Parsing Test</h3>
            <p>Save your resume as text. If you can't read it, the robot can't either. Avoid multi-column layouts if they break parsing.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Resume Snippet Example</h3>
            {code_block("""
**Project: Async E-commerce Backend**
- Designed a High-Performance API using **FastAPI** and **PostgreSQL**.
- Reduced query latency by 40% using **Redis Caching**.
- Deployed via **Docker** and **GitHub Actions** on AWS.
""", filename="resume_bullets.txt", lang="text")}
        </div>
        """
    },
    {
        "title": "14.2 LinkedIn Optimization for Python Roles",
        "emoji": "🔗",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Headline Formula: Role | Main Tech | Value Prop.</li>
                <li>Featured Section: Pin your GitHub and Portfolio.</li>
                <li>Networking: How to DM recruiters without being annoying.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Headline Magic</h3>
            <p><strong>Bad:</strong> "Student at XYZ University"<br><strong>Good:</strong> "Python Developer | FastAPI, Django, React | Building Scalable Backends"</p>
        </div>
        """
    },
    {
        "title": "14.3 Technical Interview: Python Trivia",
        "emoji": "❓",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Explain `GIL` (Global Interpreter Lock).</li>
                <li>Mutable vs Immutable types (List vs Tuple).</li>
                <li>How specific dictionaries work (Hash Maps).</li>
                <li>Decorators and Generators deep dive.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "GIL" Answer Template</h3>
            <p>"The GIL is a mutex that prevents multiple native threads from executing Python bytecodes at once. It makes single-threaded code fast but hinders CPU-bound parallelism. We solve this using Multiprocessing."</p>
        </div>
        """
    },
    {
        "title": "14.4 Technical Interview: Live Coding Strategy",
        "emoji": "💻",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>The REACT Method: Repeat, Examples, Approach, Code, Test.</li>
                <li>Thinking out loud (Crucial!).</li>
                <li>Handling "I don't know".</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Example Interaction</h3>
            <p><strong>Interviewer:</strong> Reverse a string.<br><strong>You:</strong> "Okay, I can use slicing `[::-1]`, or a loop if you want to see logic. Which do you prefer?"</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
def reverse_string(s):
    # Explain: Slicing is O(n) space and time, Pythonic.
    return s[::-1]

def reverse_string_manual(s):
    # Explain: Building a new string manually
    res = []
    for i in range(len(s)-1, -1, -1):
        res.append(s[i])
    return "".join(res)
""", filename="interview_q1.py")}
        </div>
        """
    },
    {
        "title": "14.5 System Design for Freshers",
        "emoji": "🏗️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Load Balancers (Nginx).</li>
                <li>Database Scaling (Sharding/Replication).</li>
                <li>Caching Strategies (Redis).</li>
                <li>Designing "TinyURL" or "Chat App" at high level.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Pattern</h3>
            <p><strong>Client</strong> -> <strong>Load Balancer</strong> -> <strong>API Servers</strong> -> <strong>Cache</strong> -> <strong>DB</strong>.</p>
        </div>
        """
    },
    {
        "title": "14.6 Behavioral Interview: STAR Method",
        "emoji": "🗣️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Situation, Task, Action, Result.</li>
                <li>Answering "Tell me about a time you failed".</li>
                <li>Answering "Why should we hire you?".</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Example STAR</h3>
            <p>
                <strong>S:</strong> Database was crashing.<br>
                <strong>T:</strong> Need to stabilize it.<br>
                <strong>A:</strong> Implemented connection pooling and indexing.<br>
                <strong>R:</strong> Latency dropped 50% and crashes stopped.
            </p>
        </div>
        """
    },
    {
        "title": "14.7 Salary Negotiation & Offer Analysis",
        "emoji": "💰",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>CTC vs In-Hand (The Trap).</li>
                <li>ESOPs (Stock Options) explained.</li>
                <li>How to ask for more without being rude.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Script</h3>
            <p>"I'm really excited about the role. Based on current market rates and my specific skills in X and Y, I was expecting a range closer to Z. Can we bridge that gap?"</p>
        </div>
        """
    },
    {
        "title": "14.8 Mini Project: Mock Interview Simulator",
        "emoji": "🤖",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>A simple script that picks a random question (Tech/HR), asks you, and waits for your answer (simulated 'Enter').</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
import random
import time

tech_questions = [
    "What is the GIL?",
    "Explain decorators.",
    "List vs Tuple?"
]

hr_questions = [
    "Tell me about yourself.",
    "Why this company?",
    "Weaknesses?"
]

def conduct_interview():
    print("--- Starting Mock Interview ---")
    
    q_tech = random.choice(tech_questions)
    print(f"TECH: {q_tech}")
    input("Press Enter after answering...")
    
    q_hr = random.choice(hr_questions)
    print(f"HR: {q_hr}")
    input("Press Enter after answering...")
    
    print("Interview Done. Rate yourself 1-10.")

if __name__ == "__main__":
    conduct_interview()
""", filename="mock_interviewer.py")}
        </div>
        """
    }
]
