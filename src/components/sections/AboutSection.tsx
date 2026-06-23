import type { Profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";

type AboutSectionProps = {
  profile: Profile;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section className="border-y border-slate-200 bg-slate-50" id="about">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">
        <SectionTitle
          eyebrow="About"
          title={`${profile.role}로 성장 중입니다.`}
          description="기능 구현만이 아니라 기록이 쌓이고, 검증되고, 배포 가능한 형태로 정리되는 구조에 관심이 있습니다."
        />
        <div className="min-w-0 space-y-5 text-base leading-8 text-slate-700">
          <p>
            백엔드 기반 서비스 설계와 자동화 제품 구현 경험을 쌓고 있습니다.
            API, 저장 구조, 테스트, 패키징처럼 사용자가 직접 보지 않는 영역이
            제품의 신뢰도를 만든다고 생각합니다.
          </p>
          <p>
            대표 프로젝트인 Mwoham에서는 로컬 FastAPI 백엔드와 SwiftUI macOS
            앱을 연결하고, 작업 기록을 타임라인과 AI 리포트로 정리하는 흐름을
            구현했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
