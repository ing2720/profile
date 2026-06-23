import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DetailSection } from "@/components/ui/DetailSection";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | 이형운"
    };
  }

  return {
    title: `${project.title} | 이형운`,
    description: project.summary
  };
}

export default async function ProjectDetailPage({
  params
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const visibleLinks = project.links.filter((link) => link.href);

  return (
    <>
      <Header />
      <main>
        <article className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link
            className="text-sm font-semibold text-slate-600 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
            href="/projects"
          >
            ← 프로젝트 목록
          </Link>

          <header className="mt-10 pb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Project
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-xl leading-8 text-slate-700">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stacks.map((stack) => (
                <Badge key={stack}>{stack}</Badge>
              ))}
            </div>
          </header>

          <DetailSection title="Overview">
            <p>{project.overview}</p>
          </DetailSection>

          <DetailSection title="Problem">
            <p>{project.problem}</p>
          </DetailSection>

          <DetailSection title="Solution">
            <p>{project.solution}</p>
          </DetailSection>

          <DetailSection title="Core Features">
            <DetailList items={project.features} />
          </DetailSection>

          <DetailSection title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.stacks.map((stack) => (
                <Badge key={stack}>{stack}</Badge>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="My Role">
            <DetailList items={project.myRole} />
          </DetailSection>

          <DetailSection title="Challenges">
            <DetailList items={project.challenges} />
          </DetailSection>

          <DetailSection title="Improvements">
            <DetailList items={project.improvements} />
          </DetailSection>

          <DetailSection title="Validations">
            <DetailList items={project.validations} />
          </DetailSection>

          <DetailSection title="Links">
            {visibleLinks.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {visibleLinks.map((link) => (
                  <ButtonLink href={link.href} key={link.label}>
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">
                실제 저장소와 데모 링크는 준비되는 대로 추가할 예정입니다.
              </p>
            )}
          </DetailSection>

          <DetailSection title="Next Improvements">
            <DetailList items={project.nextImprovements} />
          </DetailSection>
        </article>
      </main>
      <Footer />
    </>
  );
}
