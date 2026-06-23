# AGENTS.md

## Project Overview

This repository is a personal web resume and portfolio site.

The goal is to build a clean, deployable portfolio website for a backend developer.

Primary focus:
- Backend developer portfolio
- Web resume
- Project detail pages
- PDF resume download
- Static deployment through Vercel

Main featured project:
- Mwoham: macOS local worklog automation app with FastAPI backend, SwiftUI macOS app, STT, AI summary, local-first storage, report generation, and DMG packaging.

## Tech Stack

Use the following stack unless the repository already says otherwise:

- Framework: Next.js
- Router: App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Content source: TypeScript data files in src/data
- Deployment target: Vercel

Do not add:
- Database
- Authentication
- Admin dashboard
- Backend API
- CMS
- Heavy animation libraries
- Unnecessary UI libraries

This project should stay mostly static and easy to deploy.

## Product Direction

This site should not feel like a generic template.

It should communicate this idea:

A backend-focused developer who designs services, automates workflows, and builds usable products from backend architecture to local app packaging.

The strongest project is Mwoham. Prioritize it in content, layout, and project ordering.

## Target Site Structure

Target routes:

- /
  - Main landing page
  - Hero
  - About
  - Featured Projects
  - Skills
  - Experience
  - Contact

- /projects
  - Project list

- /projects/mwoham
  - Mwoham detail page

- /projects/django-commerce
  - Django commerce API detail page

- /projects/portfolio
  - Portfolio website detail page

- /resume
  - Web resume and PDF download

For MVP, prioritize:

- /
- /projects/mwoham
- /resume

## Folder Conventions

Prefer this structure:

- src/app/page.tsx
- src/app/layout.tsx
- src/app/globals.css
- src/app/resume/page.tsx
- src/app/projects/page.tsx
- src/app/projects/[slug]/page.tsx
- src/components/layout/
- src/components/sections/
- src/components/ui/
- src/data/profile.ts
- src/data/projects.ts
- src/data/skills.ts
- src/data/experiences.ts
- src/lib/
- public/images/
- public/resume.pdf

Keep content data separate from page components.

Do not hardcode large project content directly inside page components unless there is a strong reason.

## Content Data Rules

Use src/data/*.ts for portfolio content.

Expected files:
- src/data/profile.ts
- src/data/projects.ts
- src/data/skills.ts
- src/data/experiences.ts

Data should be typed.

Content rules:
- Use Korean for visible portfolio content unless requested otherwise.
- Use clear, honest descriptions.
- Do not exaggerate experience.
- Separate project description from personal contribution.
- Use TODO comments for missing real links.

## Profile Content

Use this baseline profile unless updated:

Name:
- 이형운

Role:
- Backend Developer

Summary:
- 백엔드 기반 서비스 설계와 자동화 제품 구현 경험을 쌓고 있는 개발자입니다.

Links:
- GitHub: TODO
- Email: TODO
- Resume PDF: /resume.pdf

## Main Projects

### 1. Mwoham

Summary:
- macOS 로컬 작업 기록 자동화 서비스

Keywords:
- FastAPI
- SQLite
- Alembic
- SwiftUI
- Gemini
- STT
- TimelineBuilder
- pytest
- ruff
- DMG packaging

Important details:
- macOS app with local FastAPI backend
- Work sessions, events, memos, meeting records, and reports
- Local-first storage
- TimelineBuilder for daily timeline generation
- Gemini-based report generation
- Privacy filtering and sensitive data masking
- Lightweight/full DMG packaging
- Component install status management
- Checksum verification
- Staging/final path separation

### 2. Django Commerce API

Summary:
- Django 기반 커머스/배송 추적 API

Keywords:
- Django
- DRF
- PostgreSQL
- Redis
- Celery
- Docker
- JWT
- Social login
- Shipment tracking

Important details:
- Email/password login
- Social login
- JWT auth
- Redis blacklist
- PostgreSQL
- Celery worker/beat
- Shipment tracking API
- Admin customization
- Docker development environment

### 3. Portfolio Website

Summary:
- Next.js 기반 웹 이력서/포트폴리오 사이트

Keywords:
- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- Static content
- SEO

## Design Rules

Visual direction:
- Clean developer portfolio
- Large readable typography
- Wide spacing
- Card-based project layout
- Badge-style skills
- Document-like project detail pages
- Mobile responsive

Avoid:
- Too many colors
- Overly playful design
- Excessive animations
- Heavy gradients
- Hard-to-read text
- Decorative UI that hides content

Prioritize:
- Readability
- Project explanation
- Technical clarity
- Recruiter-friendly structure
- Mobile layout

## Component Rules

Prefer small, reusable components.

Suggested components:
- src/components/layout/Header.tsx
- src/components/layout/Footer.tsx
- src/components/sections/HeroSection.tsx
- src/components/sections/AboutSection.tsx
- src/components/sections/FeaturedProjectsSection.tsx
- src/components/sections/SkillsSection.tsx
- src/components/sections/ExperienceSection.tsx
- src/components/sections/ContactSection.tsx
- src/components/ui/Badge.tsx
- src/components/ui/ButtonLink.tsx
- src/components/ui/SectionTitle.tsx
- src/components/ui/ProjectCard.tsx

Do not over-abstract too early.

Use reusable components only when they reduce real duplication.

## Project Detail Page Rules

Each project detail page should follow this structure:

1. Project title
2. Short summary
3. Overview
4. Problem
5. Solution
6. Core features
7. Tech stack
8. My role
9. Technical decisions
10. Challenges
11. Before / After improvements
12. Testing and validation
13. Links
14. Next improvements

For Mwoham, include:
- Backend design
- macOS app integration
- AI summary flow
- Privacy considerations
- Packaging and distribution
- Testing and validation

Keep paragraphs short.

Use bullet points for technical details.

## Resume Page Rules

The /resume page should be readable as a web resume.

Include:
- Basic info
- Summary
- Skills
- Projects
- Education / activities
- Links
- PDF download button

PDF should be placed at:

- public/resume.pdf

The download link should point to:

- /resume.pdf

Do not implement automatic PDF generation in the MVP.

## Code Style

General:
- Use TypeScript.
- Prefer explicit types for exported data structures.
- Use functional React components.
- Keep component names descriptive.
- Keep file names stable.
- Avoid unnecessary renaming.
- Avoid large unrelated refactors.
- Avoid introducing libraries without clear need.

Tailwind:
- Use consistent spacing.
- Keep class names readable.
- Extract repeated UI patterns into components when useful.
- Do not use custom CSS unless Tailwind becomes awkward.

Content:
- Korean visible copy is preferred.
- Keep tone professional but not stiff.
- Avoid exaggerated claims.
- Avoid saying production-level, enterprise-grade, or similar claims unless clearly true.

## Accessibility Rules

Check basic accessibility:
- Use semantic HTML where possible.
- Links should be links, buttons should be buttons.
- Keep focus styles visible.
- Use meaningful alt text for images.
- Avoid low contrast text.
- Make mobile navigation usable.

## Commands

Use these commands for validation:

- npm run lint
- npm run build
- npm run dev

When dependencies are not installed:

- npm install

For CI later:

- npm ci
- npm run lint
- npm run build

## Git Workflow

Use small feature branches.

Recommended branches:
- feat/init-next-portfolio
- feat/portfolio-data-structure
- feat/main-landing-page
- feat/project-detail-pages
- feat/resume-page
- feat/responsive-polish
- feat/seo-metadata
- feat/vercel-deploy-config
- feat/github-actions-ci
- content/mwoham-project-detail
- chore/final-qa

Do not mix unrelated work in one branch.

## Task Completion Format

At the end of each task, summarize in Korean:

변경 내용
- ...

변경 전 문제
- ...

변경 후 동작
- ...

검증 결과
- npm run lint
- npm run build

남은 TODO
- ...

If validation was not run, say so clearly.

Do not claim tests passed if they were not actually run.

## Important Constraints

Do not:
- Add a backend.
- Add login/auth.
- Add database.
- Add CMS.
- Add external UI libraries unless explicitly requested.
- Replace the whole project structure unnecessarily.
- Hide TODOs inside vague comments.
- Invent fake experience or fake metrics.

Do:
- Keep the site deployable.
- Keep the content honest.
- Prioritize Mwoham.
- Make the project pages strong.
- Keep the UI simple and readable.
- Validate with lint/build before finishing.
