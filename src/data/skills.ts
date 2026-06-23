export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "Django", "DRF", "REST API", "pytest"]
  },
  {
    category: "Database",
    skills: ["SQLite", "PostgreSQL", "Alembic", "Redis"]
  },
  {
    category: "Infra / Tools",
    skills: ["Docker", "Celery", "Git", "GitHub", "ruff", "Vercel"]
  },
  {
    category: "Frontend",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    category: "macOS / AI",
    skills: ["SwiftUI", "macOS", "STT", "Gemini", "DMG packaging"]
  }
];
