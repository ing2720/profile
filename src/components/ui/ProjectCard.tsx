import type { Project } from "@/data/projects";
import { Badge } from "./Badge";
import { ButtonLink } from "./ButtonLink";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm print:break-inside-avoid print:shadow-none sm:p-6">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-500">
          {project.slug === "mwoham" ? "Main Project" : "Featured Project"}
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

      <ul className="mt-6 grow space-y-3 text-sm leading-6 text-slate-700">
        {project.highlights.slice(0, 5).map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span className="min-w-0 break-words">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-1">
        <ButtonLink href={`/projects/${project.slug}`}>상세 보기</ButtonLink>
      </div>
    </article>
  );
}
