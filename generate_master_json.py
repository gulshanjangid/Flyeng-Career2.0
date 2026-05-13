import json
import re
import os
# -------------------------------------------------------------------------
# CONFIGURATION: THE USER'S DEFINITIVE SYLLABUS
# -------------------------------------------------------------------------
CURRICULUM = {
    "1": {
        "title": "1. Introduction to Generative AI & The New Computing Era",
        "lessons": [
            "1.1 What is Generative AI?",
            "1.2 The Shift: From Information to Intelligence",
            "1.3 Why GenAI Matters (The Four Forces)",
            "1.4 Industry Applications (2026 Deep Dive)",
            "1.5 AI vs ML vs DL vs GenAI",
            "1.6 Large Language Models (LLMs) in 2026",
            "1.7 Skills Required for a GenAI Engineer (Post‑2026)",
            "1.8 The 2026 GenAI Tech Stack",
            "1.9 Career Paths in the GenAI Era",
            "1.10 Why Coding Still Matters in 2026+",
            "1.11 The Journey Ahead in This Course"
        ]
    },
    "2": {
        "title": "2. Thinking Like an AI Engineer & VIBE Coding",
        "lessons": [
            "2.1 The VIBE Coding Philosophy",
            "2.2 What is VIBE Coding?",
            "2.3 The AI Engineer Mindset",
            "2.4 Mastering Prompt Engineering (2026 Standards)",
            "2.5 Advanced Prompting Techniques",
            "2.6 Handling Hallucinations",
            "2.7 Chain of Thought & Reasoning Patterns",
            "2.8 Tools & Frameworks Overview (VIBE Toolbelt)",
            "2.9 Building Your First AI App (VIBE‑First)",
            "2.10 Testing & Evaluation for Prompts and Flows",
            "2.11 Module 2 Wrap‑up: From Prompts to Systems"
        ]
    },
    "3": {
        "title": "3. Core Python for AI Engineers (Hybrid Track)",
        "lessons": [
            "3.1 Why Python Still Dominates AI (2026)",
            "3.2 Modern Python Setup for AI Work",
            "3.3 Python 3.11+ Features That Matter for AI",
            "3.4 Data Structures, Types & Dataclasses for LLM Workflows",
            "3.5 Async IO Basics for AI Engineers",
            "3.6 Essential Async Patterns for LLM & RAG Pipelines",
            "3.7 Working with HTTP, JSON & APIs (LLM‑Ready)",
            "3.8 Intro to FastAPI: The AI Backend Standard",
            "3.9 Structuring an AI‑Focused Python Project",
            "3.10 Configuration, Secrets & Environments",
            "3.11 Mini Project: Your First AI‑Ready Python Service",
            "3.12 Module 3 Wrap‑up: From Python Scripts to AI Services"
        ]
    },
    "4": {
        "title": "4. Data Foundations for LLMs",
        "lessons": [
            "4.1 Why Data Design Matters for LLMs",
            "4.2 Tokens, Context Windows & Costs (2026)",
            "4.3 What Are Embeddings? Intuition & Use",
            "4.4 NumPy for Vector Thinking",
            "4.5 Pandas for Text & Metadata Pipelines",
            "4.6 Data Cleaning for RAG & Agents",
            "4.7 Chunking: From Simple to Agentic",
            "4.8 Chunking for Cost, Latency & Quality",
            "4.9 Metadata & Schemas for LLM Workflows",
            "4.10 Preparing a Knowledge Base for RAG",
            "4.11 Mini Project: Data Pipeline for a Small RAG System",
            "4.12 Module 4 Wrap‑up: From Raw Text to LLM‑Ready Data"
        ]
    },
    "5": {
        "title": "5. ML Foundations for LLM Understanding (Only Essentials)",
        "lessons": [
            "5.1 Why You Need “Just Enough ML” for LLMs",
            "5.2 The Minimal Math: Vectors, Similarity & Probabilities",
            "5.3 From “Classic ML” to Foundation Models",
            "5.4 How Language Models Learn (Conceptual)",
            "5.5 Transformers: The Engine Behind LLMs",
            "5.6 Modern LLM Variants: MoE, Long‑Context & SLMs",
            "5.7 Embeddings, RAG, and Fine‑Tuning: When to Use What",
            "5.8 Core Evaluation Ideas for LLM Behavior",
            "5.9 Mini Project: Reasoning About Models Without Training Them",
            "5.10 Module 5 Wrap‑up: ML Intuition for GenAI Engineers"
        ]
    },
    "6": {
        "title": "6. Transformers & Modern LLM Architecture",
        "lessons": [
            "6.1 Why Architecture Matters for Engineers",
            "6.2 From Tokens to Vectors to Layers",
            "6.3 The Transformer Block: Attention & Feed‑Forward",
            "6.4 KV Cache & Long‑Context Efficiency",
            "6.5 Mixture‑of‑Experts (MoE) LLMs",
            "6.6 Hybrid Mamba‑Transformer & State‑Space Models",
            "6.7 Open‑Weight vs Proprietary: Architecture Implications",
            "6.8 Training Foundation Models (Conceptual Overview)",
            "6.9 Architecture and Inference Trade‑offs for Engineers",
            "6.10 Mini Project: Architecture‑Aware Model Selection",
            "6.11 Module 6 Wrap‑up: Architecture as a Design Tool"
        ]
    },
    "7": {
        "title": "7. Working with LLMs in Python",
        "lessons": [
            "7.1 Why Python is the LLM Control Plane",
            "7.2 LLM Provider Landscape (Cloud & Local, Dec 2026)",
            "7.3 Unified Python Client Patterns (Not One SDK Per Model)",
            "7.4 Making Your First Cloud LLM Call from Python",
            "7.5 Async LLM Calls: Scaling Beyond One Request at a Time",
            "7.6 Streaming Responses: ChatGPT‑Style UX from Python",
            "7.7 Local Inference with Ollama, vLLM & Friends",
            "7.8 Designing an LLM Service Layer in Python",
            "7.9 Cost, Latency & Reliability Considerations in Code",
            "7.10 Integrating LLMs into FastAPI Backends",
            "7.11 Mini Project: Multi‑Model Python Chat Backend",
            "7.12 Module 7 Wrap‑up: Python as Your AI Remote Control"
        ]
    },
    "8": {
        "title": "8. Advanced Prompt Engineering & Reasoning Patterns",
        "lessons": [
            "8.1 From “Nice Prompts” to Reasoning Systems",
            "8.2 Modern Prompt Design Blueprint (2026)",
            "8.3 Role, Persona & System‑Level Prompting",
            "8.4 Chain‑of‑Thought & Deliberate Reasoning",
            "8.5 Tree‑of‑Thought & Structured Search over Ideas",
            "8.6 ReAct, Reflexion & Self‑Critique Patterns",
            "8.7 Handling Hallucinations with Prompt Patterns",
            "8.8 Automated Prompt Optimization with DSPy",
            "8.9 Choosing the Right Reasoning Strategy (CoT, ToT, ReAct, DSPy)",
            "8.10 Hands‑on Concept: Designing a Robust Prompt Contract",
            "8.11 Mini Project: Reasoning Upgrade for a Simple App",
            "8.12 Module 8 Wrap‑up: From Prompting to Programmatic Reasoning"
        ]
    },
    "9": {
        "title": "9. AI Agents & Automation",
        "lessons": [
            "9.1 What Are AI Agents (2026 Reality)?",
            "9.2 Agent Architecture: Brains, Tools, Memory, Environment",
            "9.3 Function / Tool Calling: The Hands of the Agent",
            "9.4 Tooling Best Practices & Safety",
            "9.5 Agent Frameworks Landscape (2026)",
            "9.6 LangChain & LangGraph: Graph‑Based Agent Workflows",
            "9.7 Multi‑Agent Systems: Roles, Collaboration & Handoffs",
            "9.8 Memory for Agents: Short‑Term, Long‑Term & RAG",
            "9.9 Observability & Evaluation for Agents",
            "9.10 Practical Use Cases: Agents in Real Workflows",
            "9.11 Mini Project: Your First Tool‑Using Python Agent",
            "9.12 Module 9 Wrap‑up: Agents as the Execution Layer"
        ]
    },
    "10": {
        "title": "10. RAG Systems & Enterprise Knowledge Engines",
        "lessons": [
            "10.1 Why RAG Is the Default for Enterprise AI (2026)",
            "10.2 RAG Basics: The Retrieve–Then–Generate Loop",
            "10.3 Advanced RAG Types: Hybrid, Long, Agentic & GraphRAG",
            "10.4 Designing Retrieval Pipelines: From Query to Context",
            "10.5 Vector Databases for RAG (Pinecone, Weaviate, Qdrant & More)",
            "10.6 Data Preparation & Chunking Strategies for RAG",
            "10.7 Prompting Patterns for Grounded RAG Answers",
            "10.8 GraphRAG & Hybrid Graph‑Based Retrieval",
            "10.9 RAG for Compliance, Governance & Explainability",
            "10.10 RAG + Agents: Knowledge‑Driven Automation",
            "10.11 Mini Project: Build a Production‑Style RAG Knowledge Engine",
            "10.12 Module 10 Wrap‑up: From Search to Enterprise Knowledge Engines"
        ]
    },
    "11": {
        "title": "11. Multimodal AI Systems",
        "lessons": [
            "11.1 Why Multimodal AI Is the 2026 Default",
            "11.2 Multimodal LLMs & Vision–Language Models (VLMs)",
            "11.3 Core Multimodal Tasks & Use Cases",
            "11.4 Multimodal RAG Fundamentals",
            "11.5 Designing Pipelines for Documents with Images, Tables & Diagrams",
            "11.6 Audio & Video Understanding for Knowledge Work",
            "11.7 Building Multimodal RAG Architectures",
            "11.8 Multimodal Agents & Workflows",
            "11.9 Evaluation & UX for Multimodal Systems",
            "11.10 Practical Use Cases by Industry",
            "11.11 Mini Project: Multimodal Document or Media Copilot",
            "11.12 Module 11 Wrap‑up: Beyond Text‑Only AI"
        ]
    },
    "12": {
        "title": "12. Vector Databases & Memory Architectures",
        "lessons": [
            "12.1 Why Memory Is the Real Moat (Not Just Models)",
            "12.2 Vector Databases 101 (Concepts & Roles)",
            "12.3 The 2026 Vector DB Landscape",
            "12.4 Pinecone vs Weaviate vs Qdrant (RAG Focus)",
            "12.5 Index Structures, Quantization & Performance Basics",
            "12.6 Context Engineering & Memory Architectures",
            "12.7 Designing Schemas, Collections & Tenants",
            "12.8 Hybrid, Multi‑Vector & Sparse Retrieval in Vector DBs",
            "12.9 Long‑Context & “Infinite Memory” Tricks",
            "12.10 Choosing and Operating a Vector DB in Production",
            "12.11 Mini Project: Design a Memory & Vector Layer for an AI App",
            "12.12 Module 12 Wrap‑up: Context Engines as the New Database Layer"
        ]
    },
    "13": {
        "title": "13. Full‑Stack AI with JavaScript/TypeScript (Next.js & Vercel AI)",
        "lessons": [
            "13.1 Why TypeScript & Next.js Are the AI Frontend Standard",
            "13.2 The 2026 Frontend AI Stack Overview",
            "13.3 Getting Started: Project Setup & Architecture",
            "13.4 Vercel AI SDK: Model‑Agnostic Frontend Toolkit",
            "13.5 Building a Streaming Chat UI in Next.js",
            "13.6 API Routes & Server Actions for AI Endpoints",
            "13.7 End‑to‑End Type Safety with tRPC (Optional But Powerful)",
            "13.8 Connecting to RAG & Memory Backends",
            "13.9 Integrating Agents & Tools into the UI",
            "13.10 Deployment on Vercel & Edge Considerations",
            "13.11 Mini Project: Full‑Stack AI App (Chat + RAG)",
            "13.12 Module 13 Wrap‑up: Shipping Real AI Products"
        ]
    },
    "14": {
        "title": "14. Deployment, Evaluation & Monitoring of AI Systems",
        "lessons": [
            "14.1 From Prototype to Production Mindset",
            "14.2 Deployment Patterns for LLM Backends",
            "14.3 Security, Privacy & AI Impact Assessments",
            "14.4 LLM Evaluation Fundamentals (Beyond Accuracy)",
            "14.5 Modern LLMOps & Observability Stack (2026)",
            "14.6 Tracing & Logging for RAG and Agents",
            "14.7 Automated & Human‑in‑the‑Loop Evaluation",
            "14.8 Cost & Performance Monitoring in Production",
            "14.9 Guardrails, Policies & Fallbacks",
            "14.10 Release Management: Versions, A/B Tests & Canary Deploys",
            "14.11 Mini Project: Hardening an AI Feature for Production",
            "14.12 Module 14 Wrap‑up: Production‑Ready AI Engineering"
        ]
    },
    "15": {
        "title": "15. Capstone Projects & Real‑World AI Products",
        "lessons": [
            "15.1 Designing a Serious GenAI Capstone (Not a Toy App)",
            "15.2 Capstone Blueprint: From Idea to Architecture",
            "15.3 Capstone Track A: Enterprise Knowledge Copilot",
            "15.4 Capstone Track B: Developer Productivity & DevOps Copilot",
            "15.5 Capstone Track C: Multimodal Tutor or Research Assistant",
            "15.6 Capstone Track D: Vertical AI Product (Domain‑Specific)",
            "15.7 Implementation Checklist: From Repo to Live App",
            "15.8 Storytelling & Documentation for Hiring Managers",
            "15.9 Portfolio & Next Steps: Turning Capstones into Careers",
            "15.10 Module 15 Wrap‑up: From Student to GenAI Engineer"
        ]
    },
    "16": {
        "title": "16. AI Ecosystem, Careers & Product Thinking (2026–2027)",
        "lessons": [
            "16.1 2026 AI Wars, “Code Red” & Model Ecosystem",
            "16.2 AI Dev Environments: IDEs, Agentic Terminals & DevTools",
            "16.3 AI Automations, n8n & No‑Code/Low‑Code Agents",
            "16.4 RAG & Agents in the Real World",
            "16.5 Multimodal, Edge & On‑Device AI",
            "16.6 Vector Databases, Memory & Context Engineering",
            "16.7 AI Hype, Bubble Risk, Safety & Governance",
            "16.8 AI Job Roles, Hiring & Portfolios (2026–2027)",
            "16.9 AI‑Native Product Thinking, Monetization & Metrics",
            "16.10 Your 12‑Month AI Career Roadmap"
        ]
    }
}

# -------------------------------------------------------------------------
# EXTRACTION & GENERATION LOGIC
# -------------------------------------------------------------------------

def extract_content_from_file(mod_num):
    # Route to premium generation for Mod 16
    fname = f"hyper_enhance_genai_m{mod_num}.py"
    if mod_num == 16:
        fname = "generate_module_16_premium.py"
        
    if not os.path.exists(fname):
        return {}
        
    with open(fname, "r", encoding="utf-8") as f:
        src = f.read()
        
    matches = re.findall(r'(content_\d+_(\d+))\s*=\s*"""([\s\S]*?)"""', src)
    
    extracted = {}
    for var_name, lesson_suffix, html in matches:
        extracted[int(lesson_suffix)] = html
    return extracted

def generate_smart_content(title, mod_num):
    # Generates a template based on the title keywords
    
    # 1. Determine Type
    is_code = any(cw in title.lower() for cw in ["python", "code", "fastapi", "async", "setup", "chunking", "pandas", "numpy"])
    is_concept = any(cw in title.lower() for cw in ["theory", "intuition", "why", "what is", "landscape", "vs"])
    is_project = "project" in title.lower() or "capstone" in title.lower()
    
    content = f'<div class="space-y-8 font-sans text-slate-200">\n'
    
    # Header
    content += f'  <div class="p-6 bg-slate-900 rounded-2xl border border-slate-700">\n'
    content += f'    <h2 class="text-3xl font-bold text-white mb-4">{title}</h2>\n'
    content += f'    <p class="text-slate-400">Deep dive into {title.split(":")[0]}. Understanding the engineering mechanics and production trade-offs.</p>\n'
    content += f'  </div>\n'
    
    if is_code:
        content += f'  <div class="bg-[#0d1117] p-6 rounded-xl border border-slate-700 font-mono text-sm overflow-x-auto">\n'
        content += f'    <div class="flex items-center gap-2 mb-4 text-slate-500 border-b border-slate-800 pb-2">\n'
        content += f'       <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>\n'
        content += f'       <span>main.py</span>\n'
        content += f'    </div>\n'
        content += f'    <pre><code class="language-python">\n'
        content += f'import os\nimport asyncio\nfrom typing import List\n\n# {title} Implementation\n\nasync def process_data(payload: dict) -> List[float]:\n    """\n    Production-grade implementation pattern.\n    """\n    # TODO: Implement robust error handling\n    try:\n        results = await vector_db.query(payload["embedding"])\n        return results\n    except Exception as e:\n        logger.error(f"Failed: {{e}}")\n        raise\n</code></pre>\n'
        content += f'  </div>\n'
        content += f'  <div class="p-4 bg-blue-900/10 border-l-4 border-blue-500 text-sm text-slate-300">\n'
        content += f'    <strong>💡 Engineering Note:</strong> In production, always wrap this logic in a Circuit Breaker pattern to prevent cascading failures.\n'
        content += f'  </div>\n'

    elif is_project:
        content += f'  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\n'
        content += f'    <div class="p-6 bg-indigo-900/20 border border-indigo-500/30 rounded-xl">\n'
        content += f'       <h3 class="font-bold text-indigo-400 mb-2">Requirements</h3>\n'
        content += f'       <ul class="list-disc list-inside text-slate-300 space-y-2 text-sm">\n'
        content += f'         <li>Implement the core class structure.</li>\n'
        content += f'         <li>Add type hints (Pydantic v2).</li>\n'
        content += f'         <li>Write 3 unit tests.</li>\n'
        content += f'       </ul>\n'
        content += f'    </div>\n'
        content += f'    <div class="p-6 bg-emerald-900/20 border border-emerald-500/30 rounded-xl">\n'
        content += f'       <h3 class="font-bold text-emerald-400 mb-2">Success Criteria</h3>\n'
        content += f'       <p class="text-slate-400 text-sm">The system should handle partial failures gracefully and log structured JSON events.</p>\n'
        content += f'    </div>\n'
        content += f'  </div>\n'
        
    else: # Visual Concept
        content += f'  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">\n'
        content += f'    <div class="bg-black/40 p-4 rounded border border-slate-700 text-center">\n'
        content += f'       <div class="text-2xl mb-2">⚡</div>\n'
        content += f'       <div class="font-bold text-white text-sm">Design</div>\n'
        content += f'       <div class="text-xs text-slate-500">Architectural constraints</div>\n'
        content += f'    </div>\n'
        content += f'    <div class="bg-black/40 p-4 rounded border border-slate-700 text-center">\n'
        content += f'       <div class="text-2xl mb-2">🛠️</div>\n'
        content += f'       <div class="font-bold text-white text-sm">Build</div>\n'
        content += f'       <div class="text-xs text-slate-500">Implementation details</div>\n'
        content += f'    </div>\n'
        content += f'    <div class="bg-black/40 p-4 rounded border border-slate-700 text-center">\n'
        content += f'       <div class="text-2xl mb-2">🚀</div>\n'
        content += f'       <div class="font-bold text-white text-sm">Ship</div>\n'
        content += f'       <div class="text-xs text-slate-500">Production monitoring</div>\n'
        content += f'    </div>\n'
        content += f'  </div>\n'
        content += f'  <div class="prose prose-invert max-w-none text-slate-300">\n'
        content += f'    <p>Understanding <strong>{title}</strong> is critical because it fundamentally shifts how we handle state and logic in AI systems. Unlike traditional software, here we deal with probabilistic outcomes.</p>\n'
        content += f'  </div>\n'

    content += '</div>'
    return content

# -------------------------------------------------------------------------
# MAIN BUILDER
# -------------------------------------------------------------------------

master_data = {}

for mod_num in range(1, 17):
    s_mod = str(mod_num)
    
    if s_mod not in CURRICULUM:
        continue
        
    mod_def = CURRICULUM[s_mod]
    extracted_content = extract_content_from_file(mod_num)
    
    final_lessons = []
    
    for idx, title_str in enumerate(mod_def["lessons"]):
        lesson_num = idx + 1
        
        # 1. Try to find PRECISE index match from extracted content
        # (This works if we previously generated lesson 1, 2, 3...)
        html = extracted_content.get(lesson_num)
        
        # 2. If not found, GENERATE SMART CONTENT based on the Title
        if not html:
            html = generate_smart_content(title_str, mod_num)
            
        final_lessons.append({
            "id": f"genai-{mod_num}-{lesson_num}",
            "title": title_str,
            "duration": "45 min",
            "type": "article",
            "content": html
        })

    master_data[s_mod] = {
        "title": mod_def["title"],
        "lessons": final_lessons
    }

# -------------------------------------------------------------------------
# WRITE OUTPUT
# -------------------------------------------------------------------------
with open("master_curriculum.json", "w", encoding="utf-8") as f:
    json.dump(master_data, f, indent=4)
    
print("Generated master_curriculum.json with Full Syllabus.")
