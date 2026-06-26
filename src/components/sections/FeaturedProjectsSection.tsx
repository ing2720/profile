import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

type FeaturedProjectsSectionProps = {
  projects: Project[];
};

export function FeaturedProjectsSection({
  projects
}: FeaturedProjectsSectionProps) {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      id="projects"
    >
      <SectionTitle
        eyebrow="Projects"
        title="백엔드에서 시작해 제품 흐름까지 확장한 프로젝트"
        description="로컬 자동화 앱, 커머스 API, 포트폴리오 웹사이트를 통해 API 설계, 데이터 흐름, 배포와 사용 인터페이스를 함께 구성했습니다."
      />
      <div className="mt-10 grid items-stretch gap-5 md:gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
