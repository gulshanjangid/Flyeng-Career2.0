
def code_block(code, lang="python", filename="main.py"):
    return f"""
<div class="bg-[#0f1014] p-6 rounded-3xl border border-slate-800 relative overflow-hidden my-8">
    <div class="absolute top-0 right-0 p-2 bg-slate-800 rounded-bl-xl text-[10px] font-mono text-slate-400">{filename}</div>
    <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code class="language-{lang}">{code.strip()}</code></pre>
</div>
"""

module_13_lessons = [
    {
        "title": "13.1 Virtual Environments: venv vs poetry",
        "emoji": "📦",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Why "Global Pip Install" is a sin.</li>
                <li>Creating isolated environments with `venv`.</li>
                <li>Dependency Management with `Poetry` (Modern Standard).</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The "It works on my machine" Fix</h3>
            <p>Virtual environments ensure Project A uses Django 3 and Project B uses Django 5 on the same computer without conflict.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# 1. Standard library (venv)
# Create
python -m venv venv
# Activate (Windows)
venv\\Scripts\\activate
# Activate (Mac/Linux)
source venv/bin/activate

# 2. Modern Way (Poetry)
# Initialise
poetry init
# Add dependency
poetry add fastapi
# Run script
poetry run python main.py
""", filename="terminal_commands.sh", lang="bash")}
        </div>
        """
    },
    {
        "title": "13.2 Dockerizing Python Applications",
        "emoji": "🐳",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>What is a Container? (Lightweight VM).</li>
                <li>Writing a `Dockerfile`.</li>
                <li>Building and Running Images.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Syntax & Code Patterns</h3>
            {code_block("""
# Base Image (Slim is smaller)
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy requirements FIRST (Docker Cache optimization)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Run command
CMD ["python", "main.py"]
""", filename="Dockerfile", lang="dockerfile")}
        </div>
        """
    },
    {
        "title": "13.3 Docker Compose for Multi-Container Apps",
        "emoji": "🐙",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Orchestrating App + Database + Redis.</li>
                <li>Service networking (How Container A talks to Container B).</li>
                <li>Environment Variables in Docker.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: myapp
""", filename="docker-compose.yml", lang="yaml")}
        </div>
        """
    },
    {
        "title": "13.4 CI/CD Pipelines (GitHub Actions)",
        "emoji": "🚀",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Continuous Integration (CI): Run tests on every push.</li>
                <li>Continuous Deployment (CD): Auto-deploy if tests pass.</li>
                <li>Writing a YAML workflow.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
name: Python CI

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Install dependencies
        run: pip install pytest
      - name: Run Tests
        run: pytest
""", filename=".github/workflows/test.yml", lang="yaml")}
        </div>
        """
    },
    {
        "title": "13.5 Production Servers: Gunicorn & Uvicorn",
        "emoji": "🦄",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Why `python main.py` is bad for production.</li>
                <li>WSGI (Gunicorn) vs ASGI (Uvicorn).</li>
                <li>Running multiple workers to handle load.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. The Setup</h3>
            <p><strong>Uvicorn:</strong> fast, async, single process.<br><strong>Gunicorn:</strong> manages multiple Uvicorn workers.</p>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# Install
pip install gunicorn uvicorn

# Run FastAPI app with 4 workers
# "main:app" -> file:variable
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
""", filename="start_server.sh", lang="bash")}
        </div>
        """
    },
    {
        "title": "13.6 Environment Variables & Secrets",
        "emoji": "🔐",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. Learning Outcomes</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>Never hardcode API Keys/Passwords!</li>
                <li>Using `.env` files locally (`python-dotenv`).</li>
                <li>Injecting secrets in Cloud/Docker.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">3. Syntax & Code Patterns</h3>
            {code_block("""
# .env file (Add to .gitignore!)
DB_PASSWORD=secret123
API_KEY=abcdef

# Python Code
import os
from dotenv import load_dotenv

load_dotenv() # Loads .env into os.environ

db_pass = os.getenv("DB_PASSWORD")
if not db_pass:
    raise ValueError("DB_PASSWORD is not set!")
""", filename="config.py")}
        </div>
        """
    },
    {
        "title": "13.7 Cloud Deployment Options",
        "emoji": "☁️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">1. The Landscape</h3>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>PaaS (Heroku/Render/Railway):</strong> Easiest. Just connect GitHub. Best for beginners.</li>
                <li><strong>IaaS (AWS EC2/DigitalOcean):</strong> You get a Linux VM. You configure EVERYTHING. Best for control.</li>
                <li><strong>Serverless (AWS Lambda):</strong> Only pay when code runs. Best for intermittent tasks.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mb-4">2. Recommendation for 2026</h3>
            <p>Start with <strong>Render</strong> or <strong>Railway</strong>. They auto-detect your `requirements.txt` or `Dockerfile` and just work.</p>
        </div>
        """
    },
    {
        "title": "13.8 Mini Project: Deploying a Containerized App",
        "emoji": "🛳️",
        "content": f"""
        <div class="space-y-6 text-slate-300">
            <h3 class="text-2xl font-bold text-white mb-4">The Goal</h3>
            <p>Take our Todo API, wrap it in Docker, and provide the command to run it anywhere.</p>

            <h3 class="text-2xl font-bold text-white mb-4">Complete Solution</h3>
            {code_block("""
# 1. coding... (main.py is ready)

# 2. freeze reqs
# pip freeze > requirements.txt

# 3. Dockerfile
# (As seen in lesson 13.2)

# 4. Build
# docker build -t todo-app .

# 5. Run
# docker run -d -p 8000:8000 todo-app

# 6. Verify
# curl http://localhost:8000/
""", filename="deploy_steps.sh", lang="bash")}
        </div>
        """
    }
]
