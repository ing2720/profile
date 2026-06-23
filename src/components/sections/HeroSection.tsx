import type { Profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12 lg:px-8">
      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase text-slate-500">
          {profile.role}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
          {profile.summary}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          API 설계, 데이터 모델링, 작업 자동화 흐름을 중심으로 백엔드에서
          시작해 사용 가능한 제품 형태까지 연결하는 프로젝트를 만듭니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={profile.links.github.href} variant="primary">
            {profile.links.github.label}
          </ButtonLink>
          <ButtonLink href={profile.links.email.href}>
            {profile.links.email.label}
          </ButtonLink>
          <ButtonLink href="/resume">Resume</ButtonLink>
        </div>
      </div>

      <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <p className="text-sm font-semibold text-slate-500">Focus</p>
        <dl className="mt-5 space-y-5">
          <div>
            <dt className="font-semibold text-slate-950">Backend</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              FastAPI, Django, DRF 기반 API와 로컬 서비스 구조 설계
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">Automation</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              작업 기록, 리포트 생성, 비동기 처리처럼 반복 업무를 줄이는 흐름
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">Product Delivery</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              macOS 앱 연동, DMG 패키징, 정적 웹 배포까지 이어지는 구현 경험
            </dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
