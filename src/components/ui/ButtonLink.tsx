import Link from "next/link";

type ButtonLinkProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

function isUsableHref(href?: string) {
  if (!href) {
    return false;
  }

  return !href.toLowerCase().includes("todo");
}

export function ButtonLink({
  href,
  children,
  variant = "secondary"
}: ButtonLinkProps) {
  const baseClassName =
    "inline-flex min-h-11 max-w-full items-center justify-center rounded-md border px-4 py-2 text-center text-sm font-semibold leading-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 print:hidden";
  const variantClassName =
    variant === "primary"
      ? "border-slate-900 bg-slate-900 text-white hover:bg-slate-800"
      : "border-slate-300 bg-white text-slate-900 hover:border-slate-500";

  if (!isUsableHref(href) || !href) {
    return (
      <span
        aria-disabled="true"
        className={`${baseClassName} cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400`}
      >
        {children}
      </span>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <Link
      className={`${baseClassName} ${variantClassName}`}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}
