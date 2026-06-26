import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DetailSection } from "@/components/ui/DetailSection";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import {
  projects,
  type TroubleshootingCase
} from "@/data/projects";

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
    <ul className="space-y-3 leading-[17px]">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TroubleshootingList({
  cases
}: {
  cases: TroubleshootingCase[];
}) {
  return (
    <div className="space-y-5">
      {cases.map((item, index) => (
        <details
          className="group rounded-lg border border-slate-200 print:break-inside-avoid"
          key={item.title}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 sm:p-6 [&::-webkit-details-marker]:hidden">
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-slate-500">
                Case {index + 1}
              </span>
              <span className="mt-2 block text-lg font-bold leading-7 text-slate-950">
                {item.title}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-xl leading-none text-slate-500 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="border-t border-slate-200 px-5 pb-5 sm:px-6 sm:pb-6">
            <TroubleshootingDetails item={item} />
          </div>
        </details>
      ))}
    </div>
  );
}

function TroubleshootingDetails({
  item
}: {
  item: TroubleshootingCase;
}) {
  return (
    <dl className="mt-5 space-y-4">
      <div>
        <dt className="font-semibold text-slate-900">이슈</dt>
        <dd className="mt-1 break-words">{item.issue}</dd>
      </div>
      <div>
        <dt className="font-semibold text-slate-900">해결</dt>
        <dd className="mt-1 break-words">{item.solution}</dd>
      </div>
      <div>
        <dt className="font-semibold text-slate-900">결과</dt>
        <dd className="mt-1 break-words">{item.outcome}</dd>
      </div>
    </dl>
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
        <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <Link
            className="text-sm font-semibold text-slate-600 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
            href="/projects"
          >
            ← 프로젝트 목록
          </Link>

          <header className="mt-8 pb-8 sm:mt-10 sm:pb-10">
            <p className="text-sm font-semibold uppercase text-slate-500">
              Project
            </p>
            <h1 className="mt-3 break-words text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stacks.map((stack) => (
                <Badge key={stack}>{stack}</Badge>
              ))}
            </div>
          </header>

          {project.images ? (
            <DetailSection title="Screenshots">
              <ProjectGallery images={project.images} />
            </DetailSection>
          ) : null}

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
            {project.techStackGroups ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.techStackGroups.map((group) => (
                  <div
                    className="rounded-lg border border-slate-200 bg-white p-4"
                    key={group.category}
                  >
                    <h3 className="text-sm font-semibold text-slate-950">
                      {group.category}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <Badge key={stack}>{stack}</Badge>
                ))}
              </div>
            )}
          </DetailSection>

          {project.myRole ? (
            <DetailSection title="My Role">
              <DetailList items={project.myRole} />
            </DetailSection>
          ) : null}

          {project.technicalDecisions ? (
            <DetailSection title="Technical Decisions">
              <DetailList items={project.technicalDecisions} />
            </DetailSection>
          ) : null}

          <DetailSection title="Challenges">
            <DetailList items={project.challenges} />
          </DetailSection>

          {project.troubleshooting ? (
            <DetailSection title="Troubleshooting">
              <TroubleshootingList cases={project.troubleshooting} />
            </DetailSection>
          ) : null}

          <DetailSection title="Improvements">
            <DetailList items={project.improvements} />
          </DetailSection>

          <DetailSection title="Next Improvements">
            <DetailList items={project.nextImprovements} />
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
                관련 링크는 준비되는 대로 추가할 예정입니다.
              </p>
            )}
          </DetailSection>
        </article>
      </main>
      <Footer />
    </>
  );
}
