export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "Django Ninja",
      "DRF",
      "REST API",
      "pytest"
    ]
  },
  {
    category: "Database",
    skills: ["SQLite", "PostgreSQL", "Alembic", "Redis", "Multi-DB"]
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
    skills: ["SwiftUI", "macOS", "STT", "LLM", "DMG packaging"]
  }
];
