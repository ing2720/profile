type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  tone = "light"
}: SectionTitleProps) {
  const eyebrowClassName =
    tone === "dark" ? "text-slate-400" : "text-slate-500";
  const titleClassName = tone === "dark" ? "text-white" : "text-slate-950";
  const descriptionClassName =
    tone === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-wide ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-2 text-2xl font-bold tracking-tight sm:text-3xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
