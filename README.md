AI Operations Assistant 🚀

A multi-agent GenAI system that accepts natural-language tasks, plans execution steps, invokes tools/APIs, and returns a structured final response.

Table of Contents
- Quickstart
- Architecture
- Tools & Integrations
- Example Prompts
- Screenshots
- Known Limitations
- Commit & Push (FINAL STEP)

Quickstart 🔧

Prerequisites
- Node.js 18+ and npm
- MongoDB (local or hosted)
- Git

Clone the repository

```powershell
git clone <your-github-repository-link>
cd OpsPilot-AI
```

Backend (Node/Express + MongoDB)

1. Install dependencies

```powershell
cd backend
npm install
```

2. Create a `.env` in `backend/` with at least:

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret for signing JWTs
- `PORT` — optional backend port (defaults if not set)

3. Set environment variables (PowerShell example)

```powershell
setx MONGO_URI "your_mongo_uri"
setx JWT_SECRET "your_jwt_secret"
setx PORT "3000"
# Restart PowerShell to load the new values into future sessions
```

4. Run backend in development (auto-restart via nodemon)

```powershell
npm run dev
```

Frontend (Vite + React)

1. Install dependencies

```powershell
cd frontend
npm install
```

2. Run dev server

```powershell
npm run dev
```

Open the frontend at `http://localhost:5173` (default Vite) and the backend at the `PORT` configured in `.env`.

Architecture 🏗️

This project follows a multi-agent architecture:

- Planner Agent — converts user natural language into a step-by-step plan using an LLM.
- Executor Agent — executes each step by calling tools, running searches, or invoking external APIs.
- Verifier Agent — validates outputs and compiles a structured JSON response.

Project structure (high level)
- `backend/` — Express API, controllers, models, middleware
- `frontend/` — Vite + React SPA

Tools & Integrations 🔗

- LLM: provider-agnostic (can plug Groq, OpenAI, or local LLMs)
- GitHub REST API — search and fetch repo metadata
- OpenWeather — optional weather lookups with graceful fallback
- MongoDB + Mongoose for persistence
- JWT for authentication

Example Prompts 💡

- "Find top AI GitHub repositories and current weather in Bangalore"
- "Search trending Python repos for data science and summarize their purpose"
- "List popular DevOps repos and their primary CI/CD tools"

Screenshots 📸

Add screenshots to `docs/screenshots/` and reference them here. Suggested placeholders:

- `docs/screenshots/swagger-ui.png` — API docs UI (if available)
- `docs/screenshots/api-response.png` — sample structured response

Known Limitations / Tradeoffs ⚠️

- API keys (GitHub, OpenWeather) may have activation delays; the system degrades gracefully when keys are missing.
- No production-grade frontend UI is included beyond the Vite app; use Swagger or direct API calls for testing.

Commit & Push (FINAL STEP)

When ready, commit and push your changes:

```powershell
git add .
git commit -m "Add project README"
git push origin main
```

Or use a branch workflow:

```powershell
git checkout -b feat/readme
git add README.md
git commit -m "Add README"
git push --set-upstream origin feat/readme
```

Next steps I can take for you
- Add `docs/screenshots/` placeholders (PNG files)
- Add a basic `openapi.json` / Swagger setup for the backend
- Create a `docker-compose.yml` to run backend + frontend + MongoDB locally

