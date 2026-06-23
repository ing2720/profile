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
        title="백엔드 구조와 제품 완성도를 함께 다룬 프로젝트"
        description="Mwoham을 중심으로 로컬 백엔드, API 설계, 비동기 처리, 정적 배포 경험을 정리했습니다."
      />
      <div className="mt-10 grid items-stretch gap-5 md:gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
