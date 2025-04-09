# 🌐 Navigate Nest

**AI-Powered Career Guidance & Labor Market Insights Platform**

---

## Overview

**Navigate Nest** is a next-generation, AI-driven platform designed to empower students and early professionals with personalized career guidance and real-time job market insights. It combines advanced machine learning, resume parsing, and live labor market trend analysis to help users make smarter academic and career decisions.

Unlike traditional platforms, Navigate Nest is interactive, modular, and deeply personalized — integrating live data scraping, dynamic job role forecasting, and mentorship access to provide holistic guidance.

---

## Key Features

| Feature                     | Navigate Nest                                      | Other Platforms                                |
|----------------------------|----------------------------------------------------|------------------------------------------------|
| **Data Source**            | Real-time web scraping + structured datasets       | Static or outdated data                        |
| **Trend Analysis**         | Stream/sub-stream specific graphs and insights     | Generic, domain-level trends                   |
| **Job Forecasting**        | ML-based, dynamic & location-specific              | Limited, fixed dashboards                      |
| **Career Suggestions**     | Personalized using resume, ATS score, and profile  | Non-customized suggestions                     |
| **Resume Parsing & ATS**   | Deep resume analysis + improvement feedback        | Rarely includes ATS scoring                    |
| **Visualization**          | Interactive and real-time                          | Static or delayed updates                      |
| **Mentorship Access**      | Book real professionals by domain                  | No expert booking                              |
| **AI/ML Integration**      | Deeply integrated in suggestions and trends        | Basic AI features only                         |
| **Career Path Mapping**    | Tailored to user skills and trends                 | Generic, minimal personalization               |
| **Scalability**            | Modular & extensible architecture                  | Hard to scale or extend                        |

---

## User Journey

1. **Homepage** – Launchpad with access to calculators, mentors, blogs, and resume tools.
2. **Calculator** – Helps users decide streams or degrees based on academic level and interests.
3. **Career Page** – Visual library of job roles with trends, salaries, and resources.
4. **Mentor Booking** – Schedule 1-on-1 sessions with professionals in desired domains.
5. **Profile Page** – Centralized user data with resume upload and analysis.
6. **Resume Analysis** – AI-powered parsing, ATS scoring, and job-role matching.
7. **Trend Analysis** – Live labor market graphs on salary, tech trends, and demand.
8. **Blog Section** – Learning hub for industry news, skills, and career reflections.
9. **Chatbot Assistant** – Always-on AI guide powered by Gemini API.

---

## Tech Stack

| Layer              | Technology                        |
|--------------------|------------------------------------|
| Frontend           | React (SPA)                        |
| Resume Parser API  | Python (Flask) + Gemini API        |
| Labor Data API     | Node.js + Express                  |
| File Support       | PDF (Resume), CSV (Job Data)       |
| AI Services        | Google Gemini Pro                  |

---

## API Endpoints

### Resume Parser - `Flask`

- `POST /upload`  
  Uploads resume PDF, extracts structured data using Gemini API, and returns:
  - Skills, Projects, Experience, Education
  - ATS Score
  - Career Suggestions

### Labor Market Data - `Node.js (Express)`

- `GET /api/labor-data`  
  Returns latest job demand trends, salaries, tech stacks by role and region.

---

## Frontend Flow

1. **Resume Upload:**  
   - PDF → Flask `/upload` → JSON → Visual insights on resume quality and role fit.
2. **Dashboard Trend View:**  
   - On load or click → Express `/api/labor-data` → Interactive graphs and tables.

---

### 🔧 Prerequisites

- Python 3.x
- Node.js + npm
- Express.js

---

# Start Backend
node server.js

# Start Frontend
npm run dev

# Start FastAPI
uvicorn app:app --reload

---

## 🏁 Conclusion

Navigate Nest bridges the gap between **resume intelligence** and **market demand**, enabling users to build job-ready profiles backed by real-time data, market trends, and expert mentorship.

By combining Generative AI for semantic resume parsing with real-time labor insights, the platform demonstrates a scalable, modular approach to intelligent career guidance.

>  _“Your future, powered by AI and insight.”_

