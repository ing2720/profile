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
          title={`${profile.role}로 서비스의 흐름을 구현합니다.`}
          description="API와 데이터 구조를 설계하고, 운영과 배포까지 이어지는 과정을 명확하게 정리하는 데 관심이 있습니다."
        />
        <div className="min-w-0 space-y-5 text-base leading-8 text-slate-700">
          <p>
            데이트팝 백오피스에서 Django Ninja 기반 캠페인·체험단 관리 API와
            어드민 기능을 구현했습니다. 기존 운영 DB를 연동하는 과정에서
            데이터 구조와 서비스 흐름을 이해하고 안정적으로 연결하는 경험을
            쌓았습니다.
          </p>
          <p>
            교육 현장에서는 백엔드 코드 리뷰와 프로젝트 코칭을 담당했고,
            개인 프로젝트 Mwoham에서는 로컬 FastAPI 백엔드와 SwiftUI macOS
            앱을 연결해 작업 기록을 타임라인과 AI 리포트로 정리하는 흐름을
            구현했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
