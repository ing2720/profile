import type { Project } from "@/data/projects";
import { Badge } from "./Badge";
import { ButtonLink } from "./ButtonLink";

type ProjectCardProps = {
  project: Project;
  density?: "default" | "compact";
};

export function ProjectCard({
  project,
  density = "default"
}: ProjectCardProps) {
  const visibleLinks = project.links.filter(
    (link) =>
      link.href.length > 0 && !link.href.toLowerCase().includes("todo")
  );
  const isCompact = density === "compact";

  return (
    <article
      className={`flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white shadow-sm print:break-inside-avoid print:shadow-none ${
        isCompact ? "p-4 print:p-3" : "p-5 sm:p-6"
      }`}
    >
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-500">
          {project.slug === "django-commerce"
            ? "Team Project"
            : "Personal Project"}
        </p>
        <h3
          className={`mt-2 break-words font-bold text-slate-950 ${
            isCompact ? "text-lg leading-6" : "text-xl leading-7"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-slate-600 ${
            isCompact ? "mt-2 text-sm leading-6" : "mt-3 text-base leading-7"
          }`}
        >
          {project.summary}
        </p>
      </div>

      <div className={`${isCompact ? "mt-4" : "mt-5"} flex flex-wrap gap-2`}>
        {project.stacks.map((stack) => (
          <Badge key={stack}>{stack}</Badge>
        ))}
      </div>

      <ul
        className={`grow text-sm leading-[17px] text-slate-700 ${
          isCompact ? "mt-4 space-y-2" : "mt-6 space-y-3"
        }`}
      >
        {project.highlights.slice(0, 5).map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span className="min-w-0 break-words">{highlight}</span>
          </li>
        ))}
      </ul>

      <div
        className={`${isCompact ? "mt-4" : "mt-6"} flex flex-wrap gap-2 pt-1`}
      >
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
