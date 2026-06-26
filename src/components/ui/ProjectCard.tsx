import type { Project } from "@/data/projects";
import { Badge } from "./Badge";
import { ButtonLink } from "./ButtonLink";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleLinks = project.links.filter(
    (link) =>
      link.href.length > 0 && !link.href.toLowerCase().includes("todo")
  );

  return (
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm print:break-inside-avoid print:shadow-none sm:p-6">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-500">
          {project.slug === "django-commerce"
            ? "Team Project"
            : "Personal Project"}
        </p>
        <h3 className="mt-2 break-words text-xl font-bold leading-7 text-slate-950">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">
          {project.summary}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stacks.map((stack) => (
          <Badge key={stack}>{stack}</Badge>
        ))}
      </div>

      <ul className="mt-6 grow space-y-3 text-sm leading-[17px] text-slate-700">
        {project.highlights.slice(0, 5).map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span className="min-w-0 break-words">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2 pt-1">
        <ButtonLink href={`/projects/${project.slug}`} size="compact">
          상세 보기
        </ButtonLink>
        {visibleLinks.map((link) => (
          <ButtonLink href={link.href} key={link.label} size="compact">
            {link.label}
          </ButtonLink>
        ))}
      </div>
    </article>
  );
}
