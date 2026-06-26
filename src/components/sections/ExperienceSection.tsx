import type { Experience } from "@/data/experiences";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      id="experience"
    >
      <SectionTitle
        eyebrow="Experience"
        title="실무 및 교육 경력"
        description="백오피스 백엔드 개발, 교육 운영, 기술 코칭, 프로젝트 관리 역할을 정리했습니다."
      />
      <div className="mt-10 space-y-5 sm:space-y-6">
        {experiences.map((experience) => (
          <article
            className="relative min-w-0 rounded-lg border border-slate-200 bg-white p-5 sm:p-6 sm:pl-8"
            key={`${experience.organization}-${experience.title}`}
          >
            <div className="absolute left-0 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-slate-900 sm:block" />
            <p className="text-sm font-semibold text-slate-500">
              {experience.organization}
            </p>
            <h3 className="mt-2 text-lg font-bold text-slate-950">
              {experience.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {experience.summary}
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
              {experience.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span className="min-w-0 break-words">{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
