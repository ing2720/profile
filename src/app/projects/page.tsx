import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | 이형운",
  description: "이형운 백엔드 개발자 프로젝트 목록"
};

const orderedProjects = [...projects].sort((a, b) => {
  if (a.slug === "mwoham") {
    return -1;
  }

  if (b.slug === "mwoham") {
    return 1;
  }

  return 0;
});

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <SectionTitle
            eyebrow="Projects"
            title="프로젝트 목록"
            description="백엔드 설계, 자동화, 로컬 앱 연동, 정적 웹 배포 경험을 프로젝트 단위로 정리했습니다."
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {orderedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
