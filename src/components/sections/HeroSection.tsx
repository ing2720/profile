import type { Profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProfileImage } from "@/components/ui/ProfileImage";

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12 lg:px-8">
      <div className="min-w-0">
        <div className="sm:flex sm:items-start sm:gap-6 lg:block">
          <div className="mb-8 sm:mb-0 lg:hidden">
            <ProfileImage
              image={profile.image}
              name={profile.name}
              size="lg"
            />
          </div>
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
              API 설계와 데이터 모델링을 기반으로 macOS 앱 연동, STT/LLM
              파이프라인, 배포와 QA까지 실제 사용 흐름에 필요한 인터페이스를
              직접 구성합니다.
            </p>
          </div>
        </div>
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
        <div className="mb-6 hidden lg:block">
          <ProfileImage image={profile.image} name={profile.name} size="lg" />
        </div>
        <p className="text-sm font-semibold text-slate-500">Focus</p>
        <dl className="mt-5 space-y-5">
          <div>
            <dt className="font-semibold text-slate-950">Backend Core</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              Django/DRF, Django Ninja, FastAPI 기반 API와 데이터 흐름 설계
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">Product Workflow</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              인증, 주문, 배송, 작업 기록처럼 사용자가 지나가는 흐름 구현
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">Delivery Range</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              macOS 앱 연동, LLM/STT 처리, CI, 정적 웹 배포 흐름 구성
            </dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
