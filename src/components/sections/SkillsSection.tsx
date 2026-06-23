import type { SkillCategory } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";

type SkillsSectionProps = {
  skillCategories: SkillCategory[];
};

export function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section className="border-y border-slate-200 bg-slate-50" id="skills">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="주요 기술 스택"
          description="백엔드와 데이터 저장소를 중심으로, 프로젝트 완성에 필요한 프론트엔드와 macOS/AI 연동 기술을 함께 다룹니다."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <section
              className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 sm:p-6"
              key={category.category}
            >
              <h3 className="text-base font-bold text-slate-950">
                {category.category}
              </h3>
              <div className="mt-4 flex min-w-0 flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
