import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50" id="about">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">
        <SectionTitle
          eyebrow="About"
          title="백엔드를 중심으로 제품의 연결 지점을 설계합니다."
          description="API와 데이터 구조를 기반으로 사용 흐름, 자동화, 배포 과정까지 이어지는 실행 흐름을 구성합니다."
        />
        <div className="min-w-0 space-y-5 text-base leading-8 text-slate-700">
          <p>
            백엔드에서 출발해 서비스가 실제로 동작하는 흐름까지 연결하는
            일을 좋아합니다. API와 데이터 모델을 설계하는 데서 멈추지 않고,
            사용자가 어떤 화면과 도구를 거쳐 기능을 사용하는지까지 기준으로
            구현 범위를 잡습니다.
          </p>
          <p>
            실무에서는 Django Ninja 기반 백오피스 API와 어드민 기능을
            구현했고, 팀 프로젝트에서는 인증, 상품 옵션, 주문, 결제, 배송
            추적 흐름을 API로 구성했습니다. 개인 프로젝트 Mwoham에서는
            FastAPI 로컬 백엔드와 SwiftUI macOS 앱을 연결해 작업 기록,
            STT, LLM 리포트, DMG 패키징까지 하나의 실행 흐름으로 만들었습니다.
          </p>
          <p>
            주력은 백엔드입니다. 다만 문제를 API 내부로만 좁히지 않고,
            데이터가 생성되고 처리되고 전달되는 경로를 함께 봅니다. 필요한
            인터페이스와 실행 환경을 직접 구성해 기능이 실제 사용 가능한
            형태로 이어지게 만드는 데 집중합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
