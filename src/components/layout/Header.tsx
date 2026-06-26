import Link from "next/link";
import { profile } from "@/data/profile";
import { ContactModalTrigger } from "@/components/layout/ContactModalTrigger";

const navigationItems = [
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          className="min-w-0 shrink truncate text-base font-bold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
          href="/"
        >
          {profile.name}
        </Link>
        <nav
          aria-label="주요 메뉴"
          className="flex shrink-0 items-center gap-3 sm:gap-6"
        >
          {navigationItems.map((item) => (
            <Link
              className="whitespace-nowrap text-sm font-medium text-slate-600 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
          <ContactModalTrigger profile={profile} />
        </nav>
      </div>
    </header>
  );
}
