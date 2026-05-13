
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_15_lessons = [
    {
        "title": "15.1 Planning Your Capstone: The 'T-Shape' Rule",
        "emoji": "📐",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Stop building "To-Do Lists" and "Weather Apps".</li>
                <li>The **T-Shape**: Broad knowledge (Auth, DB, UI) + Deep knowledge (One complex feature like Real-time or AI).</li>
                <li>Writing a Product Requirement Doc (PRD) before coding.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "Resume Effect"</h3>
            <p>A recruiter spends 6 seconds. Your project must have ONE "Wow Factor" visible immediately (e.g., "Processes 10GB data" or "Uses GPT-4").</p>
        </div>
        """
    },
    {
        "title": "15.2 Project 1: E-Commerce API (Scalable Backend)",
        "emoji": "🛒",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Project Scope</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>**Core:** FastAPI, PostgreSQL (SQLAlchemy), Pydantic.</li>
                <li>**Advanced:** JWT Auth, Cart Logic, Order History.</li>
                <li>**Deployment:** Docker Compose.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Architecture</h3>
            <p>Client -> FastAPI -> Service Layer -> Repository Layer -> Database. (Separation of Concerns).</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Key Code Snippet (Service Layer)</h3>
            {code_block("""
class OrderService:
    def create_order(self, user_id, cart_items):
        # 1. Calculate Total
        total = sum(item.price for item in cart_items)
        
        # 2. Check Stock (Complex logic)
        for item in cart_items:
            if item.stock < 1: raise ValueError("Out of stock")
            
        # 3. Save to DB
        order = self.repo.save_order(user_id, total, cart_items)
        
        # 4. Trigger Email (Async)
        send_email_task.delay(user_id, "Order Confirmed")
        return order
""", filename="services/order.py")}
        </div>
        """
    },
    {
        "title": "15.3 Project 2: Real-Time Chat App (WebSockets)",
        "emoji": "💬",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Project Scope</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>**Core:** FastAPI WebSockets, Redis (Pub/Sub).</li>
                <li>**Advanced:** Online Status, Typing Indicators, Chat History.</li>
                <li>**Frontend:** Simple HTML/JS client.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "Real-Time" Challenge</h3>
            <p>HTTP/REST is "Ask -> Answer". WebSockets are "Always Connected". We use Redis to sync messages across multiple server workers.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Code Snippet (Socket Manager)</h3>
            {code_block("""
class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

manager = ConnectionManager()
""", filename="sockets.py")}
        </div>
        """
    },
    {
        "title": "15.4 Project 3: AI PDF Summarizer (SaaS Wrapper)",
        "emoji": "📄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Project Scope</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>**Core:** Upload PDF -> Extract Text -> Send to GPT-4 -> Return Summary.</li>
                <li>**Advanced:** Rate Limiting (Free vs Pro users), Stripe Integration (Mock).</li>
                <li>**Tech:** LangChain or OpenAI API directly.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Business Logic</h3>
            <p>This is a real-world SaaS pattern. Users pay for " Intelligence". You manage the API costs and credits.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Code Snippet (Logic)</h3>
            {code_block("""
async def summarize_pdf(file_path):
    # 1. Extract Text
    text = extract_text_from_pdf(file_path)
    
    # 2. Chunk if too long (Token limits)
    chunks = split_text(text, 2000)
    
    # 3. Summarize Map-Reduce
    summaries = []
    for chunk in chunks:
        res = await openai.ChatCompletion.create(..., content=f"Summarize: {chunk}")
        summaries.append(res)
        
    return " ".join(summaries)
""", filename="ai_worker.py")}
        </div>
        """
    },
    {
        "title": "15.5 Documentation: The README.md",
        "emoji": "📝",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Why code without docs is trash.</li>
                <li>Structure: Title, Demo GIF, Tech Stack, "How to Run".</li>
                <li>Adding Badges (CI Passing, License).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "30 Second Rule"</h3>
            <p>If I can't figure out how to run your app in 30 seconds reading your README, I'm closing the tab.</p>
        </div>
        """
    },
    {
        "title": "15.6 Hosting: Deploying Your Portfolio",
        "emoji": "🌍",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Buying a domain (optional but recommended).</li>
                <li>Using Vercel (Frontend) + Render/Railway (Backend).</li>
                <li>Setting up HTTPS (SSL) automatically.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Implementation</h3>
            <p>Connect your GitHub repo to Render. Set build command: `pip install -r requirements.txt`. Set Start command: `gunicorn main:app`. Done.</p>
        </div>
        """
    },
    {
        "title": "15.7 Creating Demo Videos (Loom/OBS)",
        "emoji": "🎥",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Why Video > Live Demo (Live demos break).</li>
                <li>Scripting a 60-second walkthrough.</li>
                <li>Embedding video in LinkedIn/Resume.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Script Template</h3>
            <p>"Hi, I'm [Name]. This is [App]. It solves [Problem]. Here is me logging in... here is the feature... and here is the result. Thanks."</p>
        </div>
        """
    },
    {
        "title": "15.8 Final Polish & Code Review",
        "emoji": "✨",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Checklist</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Remove `print()` statements and hardcoded secrets.</li>
                <li>Run `ruff` one last time.</li>
                <li>Ensure `.gitignore` excludes `__pycache__` and `.env`.</li>
                <li>Add license (MIT).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "Grand Release"</h3>
            <p>Push your final commits. Pin the repositories on your GitHub profile. You are now ready to apply.</p>
        </div>
        """
    }
]
