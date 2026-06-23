type DetailSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <section className="border-t border-slate-200 py-7 sm:py-8">
      <h2 className="text-xl font-bold leading-7 text-slate-950">{title}</h2>
      <div className="mt-4 min-w-0 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}
