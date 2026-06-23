import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Backend Developer
        </p>
        <p>서비스 설계, 자동화, 로컬 앱 패키징을 기록하는 포트폴리오입니다.</p>
      </div>
    </footer>
  );
}
