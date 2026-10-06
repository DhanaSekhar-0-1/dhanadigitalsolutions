# Dhana Sekhar — AI & Digital Solutions for Businesses

A professional, modern freelance agency website built with React, TypeScript, and Tailwind CSS.

## Business Positioning

**Affordable AI & Digital Solutions for Businesses** — building websites, mobile apps, AI automation, and custom software for B2B companies, individuals, YouTubers, content creators, and freelancers. Based in Vijayawada, serving clients across India.

## Features

- **Hero Section** — Headline, location badge, dual CTAs (Free Consultation + WhatsApp), and quick stats
- **Services** — 5 service cards: Website Development, App Development, AI Automation, AI Solutions (RAG/chatbots), Freelancer/Creator Dashboards
- **Portfolio** — 4 real project case studies with tech tags, highlights, live demo links, and GitHub links
- **About** — Bio, what I do, technical skills bar chart, and location
- **Process** — 5-step workflow (Discovery → Proposal → Build → Deploy → Support)
- **Pricing** — 3 starting-from tiers (Starter, Growth, Custom AI) with "custom pricing based on requirements" messaging
- **Contact** — Working contact form with all 7 fields (Name, Business, Phone, Email, What do you need?, Budget range, Timeline, Description) that saves submissions to Supabase, plus WhatsApp/phone/email sidebar
- **Footer** — Brand summary, service links, quick links, and contact details

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^18.3.1 | UI library |
| React DOM | ^18.3.1 | DOM rendering |
| TypeScript | ^5.5.3 | Type safety |
| Vite | ^5.4.2 | Build tool & dev server |
| Tailwind CSS | ^3.4.1 | Utility-first styling |
| PostCSS | ^8.4.35 | CSS processing |
| Autoprefixer | ^10.4.18 | CSS vendor prefixes |
| Lucide React | ^0.446.0 | Icons |
| @supabase/supabase-js | ^2.57.4 | Database (contact form submissions) |

### Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| @eslint/js | ^9.9.1 | ESLint core |
| @types/react | ^18.3.5 | React TypeScript types |
| @types/react-dom | ^18.3.0 | React DOM TypeScript types |
| @vitejs/plugin-react | ^4.3.1 | Vite React plugin |
| eslint | ^9.9.1 | Linter |
| eslint-plugin-react-hooks | ^5.1.0-rc.0 | React hooks lint rules |
| eslint-plugin-react-refresh | ^0.4.11 | React refresh lint rules |
| globals | ^15.9.0 | Global variable definitions |
| typescript-eslint | ^8.3.0 | TypeScript ESLint integration |

## Project Structure

```
project/
├── index.html                  # HTML entry point with fonts & meta tags
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind theme (colors, fonts, animations)
├── postcss.config.js           # PostCSS config
├── vite.config.ts              # Vite config with @/ path alias
├── tsconfig.app.json            # TypeScript app config
├── tsconfig.json               # TypeScript root config
├── tsconfig.node.json          # TypeScript node config
├── eslint.config.js            # ESLint config
└── src/
    ├── main.tsx                # React entry point
    ├── App.tsx                 # Root component (assembles all sections)
    ├── index.css               # Tailwind base + custom components & utilities
    ├── vite-env.d.ts           # Vite type declarations
    ├── lib/
    │   ├── data.ts             # All site content (services, projects, pricing, etc.)
    │   └── supabase.ts         # Supabase client singleton
    └── components/
        ├── Navbar.tsx          # Sticky nav with mobile menu
        ├── Hero.tsx            # Hero section with CTAs
        ├── Services.tsx        # 5 service cards + CTA card
        ├── Portfolio.tsx       # 4 project case studies
        ├── About.tsx           # About section with skills
        ├── Process.tsx         # 5-step process (dark section)
        ├── Pricing.tsx         # 3 pricing tiers
        ├── Contact.tsx         # Contact form (Supabase) + contact info
        └── Footer.tsx          # Footer with links & contact
```

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine

### Installation

1. Clone or download the project
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Running the Project

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Run TypeScript type checking
npm run typecheck

# Run ESLint
npm run lint
```

The dev server runs at `http://localhost:5173`.

## Database Setup

The contact form saves submissions to a Supabase `contact_submissions` table. The migration is included at:

```
supabase/migrations/20260919183401_create_contact_submissions.sql
```

The table schema:

| Column | Type | Description |
|---|---|---|
| id | uuid (PK) | Auto-generated unique ID |
| name | text | Submitter's name (required) |
| business | text | Company or business name |
| phone | text | Contact phone (required) |
| email | text | Contact email (required) |
| service_needed | text | Selected service |
| budget_range | text | Selected budget tier |
| timeline | text | Selected timeline |
| description | text | Free-text project description |
| created_at | timestamptz | Submission timestamp |

Row Level Security (RLS) is enabled. Only INSERT is allowed from the anon key (public visitors can submit forms; reads are restricted to the dashboard owner via the Supabase dashboard).

## Contact Information

- **Phone / WhatsApp:** +91 9182609291
- **Email:** dhanasekhardandugula@gmail.com
- **Location:** Vijayawada, Andhra Pradesh, India
- **WhatsApp prefilled message:** "Hi, I found your website and would like to discuss a digital solution for my business."

## Featured Projects

1. **Eyewear-AI-OMS** — AI-powered Order Management System
   - Tech: TypeScript, Python, PostgreSQL, Docker
   - Demo: https://eyewear-ai-oms.vercel.app
   - GitHub: https://github.com/DhanaSekhar-0-1/Eyewear-AI-OMS

2. **Student Management System** — Institution/student management for Microlinks
   - Tech: Dart, Flutter, JavaScript
   - GitHub: https://github.com/DhanaSekhar-0-1/Student_managment_System

3. **AI Automation Pipeline** — Lead intake & response automation for BookLeaf Publishing
   - Tech: Python
   - GitHub: https://github.com/DhanaSekhar-0-1/AI_Automation

4. **RAG Chatbot** — Retrieval-Augmented Generation chatbot
   - Tech: Python
   - GitHub: https://github.com/DhanaSekhar-0-1/RAG-chatbot

## Design

- **Fonts:** Inter (body) + Sora (headings) via Google Fonts
- **Color System:** Ink (neutral grays), Brand (green), Accent (blue) — 6+ color ramps with multiple shades
- **Spacing:** 8px-based system
- **Typography:** 150% line height for body, 120% for headings, max 3 font weights
- **Responsive:** Mobile-first with breakpoints for sm, lg, and xl viewports
- **Animations:** Fade-in, fade-up, float, and hover transitions throughout

## License

This project is proprietary. All rights reserved.
