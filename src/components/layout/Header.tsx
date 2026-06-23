import Link from "next/link";
import { profile } from "@/data/profile";

const navigationItems = [
  { label: "Projects", href: "#projects" },
  // TODO: /resume 페이지 구현 전까지 PDF 링크를 직접 사용합니다.
  { label: "Resume", href: profile.links.resumePdf.href },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          className="text-base font-bold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
          href="/"
        >
          {profile.name}
        </Link>
        <nav aria-label="주요 메뉴" className="flex items-center gap-4 sm:gap-6">
          {navigationItems.map((item) => (
            <Link
              className="text-sm font-medium text-slate-600 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
