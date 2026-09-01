# BizMagnets — WhatsApp-First Business Operations Platform 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

BizMagnets turns WhatsApp conversations into trackable, SLA-enforced operational workflows. This repository contains the SEO-optimized Next.js web application built with modern dynamic animations, D3.js 3D Globe, interactive industry lifecycle tab switchers, and lead generation modals.

---

## ✨ Features

- **SEO & Search Optimized**: Dynamic OpenGraph tags, Twitter cards, JSON-LD `SoftwareApplication` structured data, dynamic XML sitemap (`/sitemap.xml`), and `robots.txt`.
- **Live Workflow Simulator**: Interactive step-by-step simulator showing real-time WhatsApp message parsing into assigned tickets.
- **3D D3 Globe**: Interactive orthographic 3D Globe canvas with great-circle flow vectors connecting major global hubs and multilingual cards.
- **7 Industry Lifecycle Switchers**: Interactive workflow nodes for Healthcare, Facility Management, Real Estate, Education, Logistics, Retail, and Professional Services.
- **Integration Ecosystem**: CRM, ERP, Helpdesk, Payment, and AI model hub connectivity matrix.
- **Athulya Healthcare Case Study**: Interactive before/with outcome metrics section ("9,800+ man-days saved").
- **Lead Demo Modal**: Interactive modal popup with instant state confirmation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Styling**: Vanilla CSS design system tokens (`src/app/globals.css`), Tailwind CSS v4, Lucide Icons, Framer Motion
- **3D & Visualization**: D3.js (`d3-geo`, `topojson-client`, `world-atlas`)
- **Typography**: `Outfit` (Display) & `Plus Jakarta Sans` (Body) via `next/font/google`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm / pnpm / yarn

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hafiz475/bizmagnets-website.git
   cd bizmagnets-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Repository Structure

```
.
├── public/
│   └── assets/           # Brand logo marks & lockups
├── src/
│   ├── app/
│   │   ├── globals.css   # Custom CSS tokens & keyframe animations
│   │   ├── layout.tsx    # SEO metadata, Google Fonts & JSON-LD
│   │   ├── page.tsx      # Main assembled landing page
│   │   ├── sitemap.ts    # Dynamic XML Sitemap generator
│   │   └── robots.ts     # Search crawler directives
│   └── components/
│       ├── Navbar.tsx            # Header & mobile drawer
│       ├── Hero.tsx              # Hero section & live simulator
│       ├── StatsBar.tsx          # Athulya Healthcare social proof
│       ├── ProblemSolution.tsx  # WhatsApp comparison grid
│       ├── PlatformPillars.tsx   # 6 Core platform pillar cards & modal
│       ├── GlobeCanvas.tsx       # D3 3D orthographic globe
│       ├── GlobeSection.tsx      # Globe section & multilingual cards
│       ├── Integrations.tsx      # Integration hub matrix
│       ├── IndustryWorkflows.tsx # 7 Industry tabs & lifecycle nodes
│       ├── CaseStudySection.tsx  # Athulya Healthcare case study
│       ├── CtaBanner.tsx         # Dark mode CTA conversion banner
│       ├── Footer.tsx            # Footer navigation & links
│       └── DemoModal.tsx         # Interactive demo request modal
├── package.json
└── tsconfig.json
```
