<div align="center">
<img src="public/icon-192x192.png" alt="Flyeng Career Logo" width="80" height="80" />

# 🚀 Flyeng Career

### *Your AI-Powered Career Co-Pilot*

**Light up your future with AI-driven tools, mock interviews, personalized roadmaps, and everything you need to land your dream job.**
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_&_DB-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.io/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

[🌐 Live Demo](https://flyengcareer.com) · [📄 Report](./Flyeng_Career_Report_Final_With_Citations.md) · [🐛 Report Bug](#) · [💡 Request Feature](#)

---

</div>

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Routes](#-api-routes)
- [Deployment](#-deployment)
- [B.Tech Research Paper](#-btech-research-paper)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About the Project

**Flyeng Career** is a full-stack AI-powered career preparation platform built specifically for engineering students in India. It bridges the gap between academic learning and industry-readiness by combining AI-generated content, real-time interview simulation, and intelligent job matching — all under one roof.

The platform was developed as a **B.Tech Final Year Project** and has been deployed at scale, serving students preparing for campus placements and off-campus drives.

### 🧠 The Problem We Solve

> Engineering students often graduate without the practical skills and confidence needed for placement drives. Mock interview platforms are either expensive, generic, or disconnected from real company standards.

**Flyeng Career** solves this by providing:

- 🤖 **AI-driven mock interviews** with hostile interviewer mode
- 📊 **Personalized learning roadmaps** powered by Google Gemini
- 💻 **In-browser code sandbox** with live compilation
- 📄 **Resume builder** and AI resume analyzer
- 🏆 **Verifiable achievement certificates**
- 📚 **Full-length coding courses** for Python, Java, C++, and more

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎤 **AI Mock Interviews** | Voice-enabled interviews powered by Deepgram STT, with Gemini-based feedback and a *hostile interviewer* mode for extreme prep |
| 📝 **Smart Resume Builder** | Multi-template resume builder with AI analysis, ATS scoring, and PDF export |
| 🗺️ **Personalized Roadmaps** | Gemini AI generates step-by-step learning roadmaps based on your target role |
| 💻 **Code Sandbox** | Monaco Editor-based IDE with server-side compilation (Python, C++, Java, JS) |
| 📚 **AI Courses** | 16-module structured courses in Python, Java, C++, and Generative AI — with quizzes |
| 🤖 **Chatbot Companion** | 24/7 AI career advisor embedded across the platform |
| 📊 **Aptitude Prep** | Quantitative, verbal, and logical reasoning practice with AI-generated questions |
| 🔥 **GitHub Roaster** | AI-powered GitHub profile analyzer that gives brutally honest career feedback |
| 🎨 **Vibe-Shift** | Upload a project description and get an AI-generated visual concept |
| 🏅 **Certificates** | Cryptographically signed certificates with QR code verification |
| 📈 **Analytics Dashboard** | Student progress tracking with visual performance insights |
| 🛡️ **Admin Panel** | Full admin control for course management and user analytics |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Full-stack React framework with SSR/SSG |
| **TypeScript 5** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Smooth animations and transitions |
| **GSAP** | High-performance UI animations |
| **Monaco Editor** | VS Code-powered in-browser IDE |
| **Radix UI** | Accessible, unstyled UI primitives |
| **Lenis** | Smooth scrolling experience |
| **Recharts** | Data visualization and analytics charts |

### Backend & Database
| Technology | Purpose |
|---|---|
| **Next.js API Routes** | Serverless backend endpoints |
| **Supabase** | PostgreSQL database, Auth, and real-time features |
| **Vercel Postgres** | Serverless SQL for persistent data |
| **Vercel Blob** | File storage for resumes and certificates |

### AI & ML
| Technology | Purpose |
|---|---|
| **Google Gemini (1.5/2.0)** | Core AI — roadmaps, feedback, content generation |
| **Groq SDK** | Ultra-fast LLM inference for real-time features |
| **Deepgram SDK** | Speech-to-text for voice interviews |
| **HuggingFace Inference** | Specialized ML models |
| **TensorFlow.js** | Client-side ML for face detection (proctoring) |
| **MediaPipe** | Real-time face landmark detection |

### Developer Tools
| Technology | Purpose |
|---|---|
| **ESLint** | Code linting and quality enforcement |
| **Vercel Analytics** | Real-time performance monitoring |
| **Vercel Speed Insights** | Core Web Vitals tracking |

---

## 📁 Project Structure

```
flyeng-career/
├── app/                          # Next.js App Router
│   ├── (auth)/
│   │   ├── login/                # Login page
│   │   ├── signup/               # Sign-up page
│   │   └── forgot-password/      # Password recovery
│   ├── api/                      # Serverless API routes
│   │   ├── interview/            # AI interview endpoints
│   │   ├── roadmap/              # Roadmap generation
│   │   ├── quiz/                 # Quiz generation & evaluation
│   │   ├── compiler/             # Code execution service
│   │   ├── builder/              # Resume builder API
│   │   ├── certificates/         # Certificate generation & verification
│   │   ├── github-roast/         # GitHub profile analysis
│   │   ├── chat/                 # Chatbot conversation API
│   │   ├── summarizer/           # Document summarizer
│   │   ├── vibeshift/            # Vibe-shift creative tool
│   │   ├── cover-letter/         # AI cover letter generator
│   │   └── ...                   # 23 total API routes
│   ├── dashboard/                # Student dashboard
│   ├── courses/                  # Course catalog & player
│   ├── interview/                # AI interview interface
│   ├── ai-tools/                 # Tools hub
│   ├── aptitude-prep/            # Aptitude practice
│   ├── checkout/                 # Subscription & payments
│   ├── admin/                    # Admin control panel
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Landing page
│
├── components/                   # Reusable React components
│   ├── ui/                       # Base UI components (shadcn/ui)
│   ├── course/                   # Course viewer components
│   ├── dashboard/                # Dashboard widgets
│   ├── interview/                # Interview UI components
│   ├── resume-builder/           # Resume builder components
│   ├── quiz/                     # Quiz components
│   ├── chatbot-bubble.tsx        # Global AI chatbot
│   ├── code-sandbox-client.tsx   # In-browser IDE
│   ├── navbar.tsx                # Navigation bar
│   └── ...                       # 90+ total components
│
├── context/                      # React Context providers
│   └── auth-context.tsx          # Authentication state
│
├── db/                           # Database utilities
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries
├── types/                        # TypeScript type definitions
├── utils/                        # Helper functions
├── public/                       # Static assets
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   └── site.webmanifest
│
├── styles/                       # Global styles
├── middleware.ts                 # Next.js middleware (auth guard)
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── .env.example                  # Environment variable template
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.17+ ([Download](https://nodejs.org/))
- **npm** v9+ or **pnpm** v8+
- A **Supabase** project ([Free tier available](https://supabase.com/))
- A **Google Gemini API** key ([Get one here](https://aistudio.google.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/nikhiljangid120/flyeng-career.git
cd flyeng-career
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set Up Environment Variables

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your keys (see [Environment Variables](#-environment-variables) section below).

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app uses Turbopack for fast hot-reloading.

### 5. Set Up the Database (First-time only)

Navigate to `http://localhost:3000/api/setup-db` to initialize the database schema.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# ─── Supabase ───────────────────────────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# ─── AI Models ───────────────────────────────────────────────────────────────
GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key

# ─── Database (Vercel Postgres) ───────────────────────────────────────────────
POSTGRES_URL=postgres://default:password@host/verceldb
POSTGRES_PRISMA_URL=postgres://...
POSTGRES_URL_NO_SSL=postgres://...
POSTGRES_USER=default
POSTGRES_HOST=your-postgres-host
POSTGRES_PASSWORD=your-password
POSTGRES_DATABASE=verceldb

# ─── Certificate Security ─────────────────────────────────────────────────────
CERTIFICATE_SECRET_KEY=your_secret_key_for_signing_certificates
```

> **⚠️ Note:** Never commit your `.env.local` file. It is already listed in `.gitignore`.

---

## 🔌 API Routes

All API routes live under `/app/api/`. Here's an overview of the core endpoints:

| Route | Method | Description |
|---|---|---|
| `/api/interview` | `POST` | Start an AI mock interview session |
| `/api/hostile-interviewer` | `POST` | Trigger hostile interviewer mode |
| `/api/roadmap` | `POST` | Generate a personalized learning roadmap |
| `/api/quiz` | `POST` | Generate topic-based quiz questions |
| `/api/compiler` | `POST` | Execute code (Python, Java, C++, JS) |
| `/api/builder` | `POST` | AI-enhance resume bullet points |
| `/api/cover-letter` | `POST` | Generate a tailored cover letter |
| `/api/certificates` | `GET/POST` | Issue and verify achievement certificates |
| `/api/github-roast` | `POST` | Analyze and roast a GitHub profile |
| `/api/chat` | `POST` | Chat with the AI career companion |
| `/api/summarizer` | `POST` | Summarize uploaded documents |
| `/api/vibeshift` | `POST` | Generate creative project concepts |
| `/api/job-market` | `GET` | Fetch live job market insights |
| `/api/project-ideas` | `POST` | Generate project ideas based on skills |
| `/api/prompt-to-code` | `POST` | Convert prompts to working code snippets |
| `/api/setup-db` | `GET` | Initialize the database schema |

<div align="center">

**Built with ❤️ for every engineering student chasing their dream placement.**

⭐ Star this repo if Flyeng Career helped you — it means the world!

</div>
