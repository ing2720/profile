export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type TroubleshootingCase = {
  title: string;
  issue: string;
  solution: string;
  outcome: string;
};

export type ProjectTechStackGroup = {
  category: string;
  items: string[];
};

export type Project = {
  order: number;
  slug: string;
  title: string;
  summary: string;
  isFeatured: boolean;
  images?: ProjectImage[];
  stacks: string[];
  techStackGroups?: ProjectTechStackGroup[];
  highlights: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  myRole?: string[];
  technicalDecisions?: string[];
  challenges: string[];
  troubleshooting?: TroubleshootingCase[];
  improvements: string[];
  nextImprovements: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    order: 1,
    slug: "mwoham",
    title: "Mwoham",
    summary: "macOS 로컬 작업 기록 자동화 서비스",
    isFeatured: true,
    images: [
      {
        src: "/images/projects/mwoham/dashboard.png",
        alt: "Mwoham 작업 상태 대시보드",
        caption: "작업 상태와 일일 리포트 요약 대시보드",
        width: 938,
        height: 837
      },
      {
        src: "/images/projects/mwoham/floating-menubar.png",
        alt: "Mwoham 플로팅 위젯과 메뉴바",
        caption: "작업 기록 플로팅 위젯과 메뉴바 제어",
        width: 458,
        height: 413
      },
      {
        src: "/images/projects/mwoham/report.png",
        alt: "Mwoham 일일 작업 리포트",
        caption: "TimelineBuilder와 LLM 기반 일일 작업 리포트",
        width: 946,
        height: 827
      },
      {
        src: "/images/projects/mwoham/settings.png",
        alt: "Mwoham 컴포넌트 설치 상태 설정 화면",
        caption: "backend, STT CLI, 모델 설치 상태 관리",
        width: 851,
        height: 613
      }
    ],
    stacks: [
      "FastAPI",
      "SQLite",
      "Alembic",
      "SwiftUI",
      "LLM",
      "STT",
      "pytest",
      "ruff"
    ],
    techStackGroups: [
      {
        category: "macOS App",
        items: [
          "Swift",
          "SwiftUI",
          "AppKit",
          "AVFoundation",
          "Speech",
          "ScreenCaptureKit"
        ]
      },
      {
        category: "Backend",
        items: [
          "Python",
          "FastAPI",
          "Uvicorn",
          "SQLAlchemy",
          "Alembic",
          "SQLite",
          "Pydantic"
        ]
      },
      {
        category: "AI/STT",
        items: ["Gemini API", "OpenAI API", "Local Whisper", "Apple Speech"]
      },
      {
        category: "Frontend/Web",
        items: ["Jinja2", "HTML", "CSS"]
      },
      {
        category: "Storage/Security",
        items: [
          "SQLite",
          "macOS Keychain",
          "Local API Token",
          "Privacy Masking"
        ]
      },
      {
        category: "Export",
        items: ["Markdown", "WeasyPrint PDF"]
      },
      {
        category: "DevOps/QA",
        items: [
          "uv",
          "pytest",
          "ruff",
          "xcodebuild",
          "hdiutil",
          "codesign"
        ]
      },
      {
        category: "macOS Integration",
        items: [
          "MenuBarExtra",
          "Launch at Login",
          "Accessibility Permission",
          "Screen Recording Permission"
        ]
      }
    ],
    highlights: [
      "macOS 앱과 FastAPI 로컬 백엔드 연동",
      "작업 세션, 이벤트, 메모, 회의 기록, 리포트 도메인 설계",
      "TimelineBuilder 기반 일일 타임라인 생성",
      "LLM 기반 리포트 생성",
      "민감정보 마스킹 후 AI 요약 요청",
      "Release v1.1.0 기준 lightweight/full DMG 패키징 구조 정리"
    ],
    overview:
      "Mwoham은 macOS에서 앱 사용 흐름, 개발 이벤트, 회의 STT 기록, 수동 메모를 로컬 중심으로 수집하고 일일 리포트로 정리하는 작업 기록 자동화 앱입니다. SwiftUI macOS 앱이 사용자 인터페이스와 상태 표시를 담당하고, FastAPI 로컬 백엔드가 작업 세션, 이벤트, 메모, 회의 기록, 리포트 도메인을 처리합니다.",
    problem:
      "개발, 학습, 회의를 오가며 생기는 작업 기록은 앱 사용 이력, 수동 메모, 회의 내용, 개발 이벤트처럼 여러 위치에 흩어지기 쉽습니다. 하루가 끝난 뒤 실제 작업 흐름을 다시 정리하려면 기록을 직접 찾아 조합해야 했고, 리포트 작성에도 반복적인 시간이 들었습니다. 또한 화면과 음성처럼 민감할 수 있는 데이터를 다루기 때문에 외부 서버 의존도를 낮추고 AI 요청에 포함되는 정보를 통제할 필요가 있었습니다.",
    solution:
      "작업 세션, 앱/창 이벤트, 개발 이벤트, 수동 메모, 회의 STT 기록을 하나의 일일 타임라인으로 통합했습니다. TimelineBuilder를 통해 흩어진 기록을 시간 흐름에 맞게 정리하고, Gemini/OpenAI 기반 LLM 연동으로 일일 리포트 초안을 생성했습니다. 원본 화면이나 음성 파일을 장기 저장하는 방식 대신 로컬 텍스트 기록을 중심으로 처리하고, AI 요청 전 민감정보 마스킹을 적용해 기록 자동화와 개인정보 통제를 함께 고려했습니다.",
    features: [
      "작업 시작, 일시정지, 재개, 종료를 기준으로 하루 작업 세션 기록",
      "앱 사용 흐름, 창 제목, 개발 이벤트, 수동 메모를 하나의 타임라인으로 통합",
      "회의 중 음성을 로컬 STT로 텍스트화하고 회의 기록으로 저장",
      "Git 변경 사항, 터미널 실행 흐름, 테스트·빌드·체크 결과를 개발 이벤트로 기록",
      "TimelineBuilder를 통해 흩어진 작업 이벤트를 시간 순서의 일일 작업 흐름으로 정리",
      "Gemini/OpenAI 기반 LLM 연동으로 일일 리포트 초안 자동 생성",
      "원본 화면·음성 장기 저장을 피하고, AI 요청 전 민감정보 마스킹 적용",
      "macOS 메뉴바와 플로팅 위젯을 통해 기록 상태와 주요 액션 제공",
      "Markdown/PDF 리포트 Export",
    ],
    technicalDecisions: [
      "macOS 앱과 FastAPI 로컬 백엔드를 분리해 UI 상태 관리와 데이터 처리 도메인의 책임을 나눴습니다.",
      "작업 기록, 메모, 회의 기록, 리포트를 각각 독립된 도메인으로 분리하고 Service/Repository 구조로 정리했습니다.",
      "앱/창 이벤트, Dev Tracking 이벤트, 수동 메모, 회의 STT 기록을 바로 리포트로 넘기지 않고 TimelineBuilder를 거쳐 일일 작업 흐름으로 정제하도록 설계했습니다.",
      "Gemini와 OpenAI를 모두 사용할 수 있도록 LLM 연동부를 provider 기반으로 분리하고, 모델 선택과 API Key 저장을 설정 화면에서 관리하도록 구성했습니다.",
      "원본 화면이나 음성 파일을 장기 저장하지 않고 로컬 텍스트 기록 중심으로 처리해 개인정보 노출 범위를 줄였습니다.",
      "AI 요청 전 민감정보 마스킹과 프롬프트 압축을 적용해 외부 API로 전달되는 정보를 제한했습니다.",
    ],
    challenges: [
      "앱 사용 흐름, 개발 이벤트, 메모, 회의 기록처럼 성격이 다른 데이터를 하나의 일일 타임라인으로 자연스럽게 합치는 과정이 어려웠습니다.",
      "짧은 앱 전환, 반복되는 창 제목, 의미 없는 이벤트가 리포트 품질을 떨어뜨려 low-signal 이벤트 정제와 동일 작업 흐름 병합이 필요했습니다.",
      "macOS 앱 번들 환경에서 로컬 백엔드, STT CLI, STT 모델 파일의 실행 경로가 개발 환경과 달라지는 문제가 있었습니다.",
      "LLM 리포트 생성 과정에서 응답 지연, 토큰 사용량, 실패 fallback, provider별 설정을 함께 고려해야 했습니다.",
      "화면과 음성처럼 민감할 수 있는 데이터를 다루기 때문에 자동 기록의 편의성과 개인정보 통제 사이의 균형을 맞추는 것이 중요했습니다.",
    ],
    troubleshooting: [
      {
        title: "macOS 앱 배포 후 백엔드 경로 고정 문제",
        issue:
          "개발 환경에서는 정상 동작했지만 DMG 설치 후 앱이 고정된 개발 경로의 백엔드를 참조해, 설치 위치와 실행 환경에 따라 백엔드 시작이 불안정했습니다.",
        solution:
          "Bundle.main.resourceURL/backend, 수동 override, Application Support, Debug fallback 순서로 백엔드 경로를 탐색하도록 변경했습니다.",
        outcome:
          "개발 환경의 절대 경로 의존성을 제거하고 실제 설치 환경에서도 백엔드를 탐색해 실행할 수 있는 앱 번들 구조로 개선했습니다."
      },
      {
        title: "STT 모델과 CLI 번들링에 따른 DMG 용량 및 배포 구조 문제",
        issue:
          "STT CLI, 모델 파일, dylib 의존성을 앱에 함께 포함하면서 DMG 용량이 커졌고, 다운로드 실패나 부분 설치 상황에서 배포 및 복구 상태를 관리하기 어려웠습니다.",
        solution:
          "lightweight/full 패키징을 분리하고 STT, backend, model 컴포넌트를 독립적으로 설치할 수 있게 구성했습니다. checksum 검증과 staging 설치를 거친 뒤 final 경로로 이동하고, 실패 시 기존 정상 설치본을 보존하도록 처리했습니다.",
        outcome:
          "무거운 AI/STT 컴포넌트를 앱 본체와 분리해 배포 안정성, 설치 복구성, 이후 컴포넌트 업데이트 가능성을 개선했습니다."
      },
      {
        title: "macOS 권한, Gatekeeper 및 앱 실행 환경 차이",
        issue:
          "Accessibility와 Speech 권한, Gatekeeper, unsigned app 실행 제한, App Translocation 등 macOS 보안 정책으로 인해 로컬 개발 환경과 DMG 설치 후 실행 결과가 달랐습니다.",
        solution:
          "권한 상태 진단, Privacy & Security의 Open Anyway 안내, App Translocation 및 실행 경로 확인, 설치 QA 체크리스트를 추가하고 권한 안내 UX를 보강했습니다.",
        outcome:
          "macOS 네이티브 앱의 권한과 보안 정책을 설치 흐름에 포함해, 실행 실패 원인을 확인하고 사용자가 대응할 수 있는 구조로 개선했습니다."
      },
      {
        title: "TimelineBuilder와 LLM 리포트 입력 데이터 품질 문제",
        issue:
          "작업 이벤트, 메모, 회의 기록이 분산된 상태로 LLM에 전달되면 시간 흐름이 불명확해 리포트 품질이 떨어지고 민감정보가 외부 요청에 포함될 위험이 있었습니다.",
        solution:
          "TimelineBuilder로 이벤트와 메모를 시간순으로 병합하고 리포트 입력 데이터를 정리했습니다. API key, token, password 등 민감정보를 마스킹한 뒤 LLM Provider에 요청하도록 파이프라인을 구성했습니다.",
        outcome:
          "로컬 데이터 전처리, 타임라인 구성, 민감정보 필터링, AI 리포트 생성으로 이어지는 단계별 처리 흐름을 마련했습니다."
      }
    ],
    improvements: [
      "앱 사용 이력, 개발 이벤트, 회의 기록, 수동 메모를 하루 단위 타임라인으로 통합해 작업 흐름 복원 시간을 줄였습니다.",
      "LLM 기반 일일 리포트 초안 생성과 fallback report를 함께 구성해 AI 실패 상황에서도 리포트 기능이 유지되도록 개선했습니다.",
      "Local Whisper 기반 회의 전사를 적용해 별도 STT API key 없이 회의 내용을 로컬에서 텍스트화할 수 있게 했습니다.",
      "원본 화면·음성 장기 저장을 피하고 로컬 텍스트 기록 중심으로 처리해 민감한 작업 데이터의 외부 의존도를 낮췄습니다.",
      "API Key를 macOS Keychain에 저장하고 AI 요청 전 민감정보 마스킹을 적용해 보안성을 개선했습니다.",
      "메뉴바와 플로팅 위젯을 통해 기록 상태 확인, 빠른 액션, 주요 화면 이동을 앱 외부에서도 수행할 수 있게 했습니다.",
      "Markdown/PDF export를 제공해 일일 회고, 업무 공유, 포트폴리오 정리에 활용할 수 있도록 확장했습니다.",
      "backend/STT CLI/STT model 컴포넌트 설치 상태를 앱에서 관리하도록 개선해 배포 후 실행 안정성을 높였습니다.",
    ],
    nextImprovements: [
      "리포트 품질 개선을 위한 프롬프트 템플릿과 evidence 압축 로직 고도화",
      "회의 전사 화자 분리와 회의 요약 기능 추가",
      "OCR 기반 화면 맥락 분류 정확도 개선",
      "프로젝트별·태그별 작업 리포트 필터링 강화",
      "주간·월간 회고를 위한 장기 통계 대시보드 추가",
      "Calendar, Notion, GitHub 등 외부 도구 연동",
      "공개 배포를 위한 Developer ID signing 및 notarization 적용",
      "온디바이스 LLM 연동을 통한 완전 로컬 리포트 생성 지원",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ing2720/mwoham"
      },
      {
        label: "Release",
        href: "https://github.com/ing2720/mwoham/releases/tag/v1.1.0"
      }
    ]
  },
  {
    order: 3,
    slug: "django-commerce",
    title: "오즈의 이상한 상점",
    summary: "Django 기반 쇼핑몰 백엔드 API",
    isFeatured: true,
    images: [
      {
        src: "/images/projects/django-commerce/storefront.png",
        alt: "오즈의 이상한 상점 쇼핑몰 메인 화면",
        caption: "상품 검색과 카테고리 탐색을 제공하는 쇼핑몰 화면",
        width: 1900,
        height: 734
      },
      {
        src: "/images/projects/django-commerce/presentation-demo.png",
        alt: "오즈의 이상한 상점 프로젝트 발표 페이지",
        caption: "주요 사용자 흐름을 영상으로 정리한 프로젝트 데모",
        width: 1885,
        height: 801
      }
    ],
    stacks: [
      "Django",
      "DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "JWT"
    ],
    techStackGroups: [
      {
        category: "Backend",
        items: ["Python", "Django", "Django REST Framework"]
      },
      {
        category: "Database",
        items: ["PostgreSQL"]
      },
      {
        category: "Auth",
        items: ["SimpleJWT", "OAuth 2.0"]
      },
      {
        category: "Async",
        items: ["Redis", "Celery", "Celery Beat"]
      },
      {
        category: "External API",
        items: ["Toss Payments API", "SweetTracker API"]
      },
      {
        category: "Infra",
        items: ["Docker", "Docker Compose", "Nginx", "Gunicorn"]
      },
      {
        category: "Docs & Test",
        items: ["drf-spectacular", "Swagger UI", "pytest"]
      }
    ],
    highlights: [
      "이메일/비밀번호 로그인과 소셜 로그인 구조",
      "JWT 인증과 Redis 기반 토큰 블랙리스트",
      "PostgreSQL 기반 데이터 모델링",
      "Celery worker/beat 기반 비동기 작업",
      "배송 추적 API 설계"
    ],
    overview:
        "오즈의 이상한상점은 의류 상품 판매를 위한 쇼핑몰 백엔드 API 프로젝트입니다. Django와 Django REST Framework를 기반으로 회원 인증, 소셜 로그인, 상품/카테고리/옵션 재고, 장바구니, 주문, Toss Payments 결제, 리뷰, 위시리스트, 배송 추적, 관리자 API를 구현했습니다. 프론트엔드와 연동 가능한 REST API 구조와 Swagger 기반 API 문서화를 함께 구성했습니다.",
    problem:
        "쇼핑몰 서비스는 상품 옵션, 재고, 장바구니, 주문, 결제, 배송 상태가 하나의 구매 흐름 안에서 연결되기 때문에 데이터 정합성 관리가 중요했습니다. 특히 동일 상품의 옵션별 재고를 정확히 차감하고, 결제 승인 전후의 주문 상태와 결제 상태를 동기화하며, 실패 상황에서는 재고와 주문 데이터를 되돌릴 수 있어야 했습니다. 또한 프론트엔드와 협업하기 위해 인증, 권한, 예외 응답, API 문서가 일관된 구조로 제공될 필요가 있었습니다.",
    solution:
        "도메인을 accounts, catalog, carts, orders, payments, shipments, reviews, wishlists, staff 앱으로 분리하고 DRF 기반 REST API로 구현했습니다. 상품 옵션은 option_key 기준으로 정규화해 장바구니, 재고, 주문 항목이 동일한 기준을 사용하도록 구성했습니다. 주문 생성과 재고 차감은 transaction.atomic과 select_for_update를 활용해 원자적으로 처리하고, 결제 승인 실패나 주문 생성 실패 상황에 대비한 보상 흐름을 추가했습니다. 배송은 SweetTracker 연동 결과를 내부 ShipmentEvent 형식으로 변환해 저장하고, Celery worker/beat를 통해 배송 상태 폴링 작업을 API 요청 흐름과 분리했습니다.",
    features: [
      "이메일/소셜 로그인 및 JWT 인증",
      "상품/카테고리 조회 및 옵션별 재고 관리",
      "장바구니 기반 체크아웃",
      "주문 생성, 취소, 환불 상태 관리",
      "Toss Payments 결제 승인/취소 연동",
      "리뷰 및 위시리스트",
      "SweetTracker 기반 배송 추적 API",
      "Celery 기반 배송 상태 폴링",
      "Swagger API 문서화",
    ],
    myRole: [
      "Django와 DRF 기반 API 구조 설계",
      "커스텀 User 모델, JWT 인증, 소셜 로그인 흐름 구현",
      "상품 옵션과 재고를 option_key 기준으로 정규화하는 구조 설계",
      "장바구니에서 주문과 결제로 이어지는 체크아웃 흐름 구현",
      "transaction.atomic과 select_for_update를 활용한 재고 차감/복구 로직 구성",
      "Toss Payments 결제 승인, 취소, 이벤트 저장 흐름 구현",
      "배송 추적 데이터 모델링 및 SweetTracker 연동 구조 설계",
      "Celery worker/beat 기반 배송 상태 폴링 작업 구성",
    ],
    technicalDecisions: [
      "쇼핑몰 주요 기능을 accounts, catalog, carts, orders, payments, shipments 등 도메인 앱으로 분리",
      "상품 옵션 조합을 option_key로 정규화해 장바구니, 재고, 주문 항목에서 일관되게 관리",
      "transaction.atomic과 select_for_update로 체크아웃 시 주문 생성과 재고 차감을 원자적으로 처리",
      "Purchase와 Payment를 분리해 주문 상태와 결제 상태를 독립적으로 관리",
      "Shipment와 ShipmentEvent를 분리해 현재 배송 상태와 배송 이력을 함께 저장",
      "Celery worker/beat로 배송 상태 동기화를 백그라운드 작업으로 분리",
      "JWT Refresh Token Rotation/Blacklist로 인증 토큰 생명주기 관리",
      "Docker Compose로 Web, DB, Redis, Celery 실행 환경 구성"
    ],
    challenges: [
      "옵션 조합이 있는 상품의 재고를 장바구니, 주문, 결제 단계에서 동일한 기준으로 추적하는 문제",
      "결제 승인 성공 이후 주문 항목 생성과 재고 차감이 실패하지 않도록 트랜잭션 단위를 설계하는 문제",
      "결제 실패나 취소 상황에서 주문 상태, 결제 상태, 재고 복구를 일관되게 처리하는 문제",
      "외부 배송 API 응답을 내부 배송 이벤트 스키마로 변환하고 중복 이벤트를 방지하는 문제",
      "배송 상태 폴링처럼 오래 걸리거나 반복되는 작업을 API 요청 흐름과 분리하는 문제",
      "사용자, 관리자, 주문 소유자 권한을 API별로 다르게 적용하는 문제",
      "프론트엔드가 예측 가능하게 사용할 수 있도록 응답 구조와 Swagger 문서를 정리하는 문제"
    ],
    troubleshooting: [
      {
        title: "외부 배송 API 리전 지연으로 인한 타임아웃 문제",
        issue:
          "SweetTracker 배송 조회 API 호출 과정에서 타임아웃과 SSL handshake 실패가 발생했습니다. 국내 서버에서 외부 배송 API 엔드포인트까지의 네트워크 경로가 불안정해 배송 상태 동기화 작업의 안정성이 떨어졌습니다.",
        solution:
          "외부 배송 API 호출 구간을 백엔드 핵심 로직과 분리하고, 도쿄 리전의 프록시 EC2를 통해 요청을 우회하도록 구성했습니다. 외부 API 장애가 전체 서비스 흐름에 직접 영향을 주지 않도록 네트워크 의존 구간을 분리했습니다.",
        outcome:
          "배송 조회 요청의 실패 가능성을 줄이고, 외부 API 의존 구간에 대한 장애 대응과 운영 안정성을 개선했습니다."
      },
      {
        title: "배송 상태 동기화와 이벤트 이력 관리 구조 설계",
        issue:
          "사용자 요청마다 외부 API를 직접 호출하면 응답 지연, 외부 API 장애, 반복 호출 비용이 발생할 수 있었습니다. 현재 상태만 저장하는 방식으로는 배송 과정의 변경 이력을 추적하기도 어려웠습니다.",
        solution:
          "Shipment와 ShipmentEvent를 분리해 현재 배송 상태와 이벤트 이력을 함께 관리하도록 설계했습니다. Celery worker와 beat로 진행 중인 배송을 주기적으로 동기화해 사용자 요청과 외부 배송 조회 작업을 분리했습니다.",
        outcome:
          "외부 API 호출이 사용자 요청에 직접 영향을 주지 않는 백그라운드 동기화 구조를 구성하고, 배송 상태 변경 이력을 추적할 수 있도록 개선했습니다."
      },
      {
        title: "배송 등록 요청과 내부 주문 모델의 매핑 문제",
        issue:
          "배송 도메인의 Shipment는 내부적으로 Purchase 주문 모델을 참조하지만 클라이언트는 purchase_id를 전달해야 했습니다. 요청 필드와 내부 FK 구조가 섞이면 잘못된 주문 참조, 권한 검증 누락, 배송 데이터 생성 오류가 발생할 수 있었습니다.",
        solution:
          "API에서는 purchase_id를 받고, 서비스 계층에서 요청 사용자와 purchase_id를 기준으로 Purchase 객체를 조회한 뒤 Shipment.order FK에 연결했습니다. View, Service, Repository의 책임을 분리해 요청 처리와 도메인 저장 흐름을 명확히 했습니다.",
        outcome:
          "클라이언트 API 사용성을 유지하면서 내부 모델 정합성과 주문 소유자 검증을 안정적으로 처리하고, 배송 데이터 생성 흐름의 유지보수성을 개선했습니다."
      },
      {
        title: "결제 승인 이후 주문 생성과 재고 정합성 문제",
        issue:
          "Toss Payments 결제 승인 이후 주문 항목 생성이나 재고 차감이 실패하면 결제 상태, 주문 상태, 재고 수량이 서로 불일치할 수 있었습니다. 특히 장바구니 기반 체크아웃에서는 여러 상품의 재고를 한 번에 처리해야 해 부분 실패에 대한 대응이 필요했습니다.",
        solution:
          "결제 승인 전 장바구니 재고를 검증하고, 주문 항목 생성과 재고 차감은 transaction.atomic 안에서 처리했습니다. 상품 옵션은 option_key로 정규화해 장바구니, 재고, 주문 항목이 같은 기준을 사용하도록 맞췄습니다. 주문 생성 실패 시에는 Toss 결제 취소를 시도하고 Payment 상태를 되돌리는 보상 흐름을 추가했습니다.",
        outcome:
          "결제, 주문, 재고 상태가 어긋날 가능성을 줄였고, 결제 성공 후 주문 데이터 생성 실패 상황에 대응할 수 있는 구조를 마련했습니다."
      }
    ],
    improvements: [
      "이메일 기반 JWT 인증과 Refresh Token Blacklist 구조 적용",
      "option_key 기반 상품 옵션/재고 관리 구조로 개선",
      "트랜잭션 기반 체크아웃으로 주문 생성과 재고 차감 정합성 강화",
      "Toss 결제 상태와 주문 상태를 연결해 결제 이력 추적 가능",
      "SweetTracker 배송 응답을 내부 이벤트 모델로 변환해 저장",
      "Celery 기반 배송 상태 폴링 작업 분리",
      "Docker Compose 기반 개발 환경 구성"
    ],
    nextImprovements: [
      "결제 실패/취소 보상 로직과 운영 로그 강화",
      "배송 추적 응답 포맷 및 예외 케이스 정리",
      "관리자 상태 변경 감사 로그 추가",
      "Toss 웹훅 기반 결제 상태 동기화",
      "구매 흐름 E2E 테스트 보강",
      "Docker 실행 문서와 환경변수 예시 개선"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Wizard-Of-Oz-b/Wizard-Of-Oz-be"
      },
      {
        label: "Presentation",
        href: "https://wizardofoz-seven.vercel.app/"
      }
    ]
  },
  {
    order: 2,
    slug: "portfolio",
    title: "Profile Website",
    summary: "Next.js 기반 웹 이력서/포트폴리오 사이트",
    isFeatured: true,
    images: [
      {
        src: "/images/projects/portfolio/landing.png",
        alt: "Portfolio Website 메인 랜딩 페이지",
        caption: "프로필과 개발 방향을 소개하는 메인 랜딩 페이지",
        width: 1122,
        height: 758
      },
      {
        src: "/images/projects/portfolio/projects.png",
        alt: "Portfolio Website 프로젝트 목록 페이지",
        caption: "프로젝트 유형, 기술 스택, 링크를 정리한 프로젝트 목록",
        width: 1103,
        height: 721
      },
      {
        src: "/images/projects/portfolio/resume-print.png",
        alt: "Portfolio Website 웹 이력서 PDF 저장 화면",
        caption: "브라우저 인쇄 기능을 이용한 웹 이력서 PDF 저장",
        width: 1151,
        height: 698
      }
    ],
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    techStackGroups: [
      {
        category: "Framework",
        items: ["Next.js", "App Router", "React"]
      },
      {
        category: "Language",
        items: ["TypeScript"]
      },
      {
        category: "Styling",
        items: ["Tailwind CSS", "Responsive UI", "Print CSS"]
      },
      {
        category: "Content",
        items: ["Static TypeScript Data", "Typed Project Data"]
      },
      {
        category: "SEO",
        items: ["Metadata API", "Open Graph", "Twitter Card", "robots.txt", "sitemap.xml"]
      },
      {
        category: "Deployment",
        items: ["Vercel", "GitHub", "GitHub Actions CI"]
      }
    ],
    highlights: [
      "정적 TypeScript 데이터 기반 콘텐츠 관리",
      "프로젝트 목록과 slug 기반 상세 페이지 구성",
      "메인 랜딩, 프로젝트, 웹 이력서 반응형 UI 구현",
      "브라우저 인쇄 기반 이력서 PDF 저장 흐름",
      "SEO metadata, robots, sitemap, OG 이미지 구성",
      "Vercel 배포 및 GitHub Actions CI 검증 흐름 구성"
    ],
    overview:
      "Profile Website는 백엔드 개발 경험, 프로젝트 상세 설명, 웹 이력서를 하나의 흐름으로 정리한 Next.js 기반 정적 포트폴리오 사이트입니다. 프로젝트 내용은 TypeScript 데이터 파일에서 관리하고, App Router 기반 라우트에서 재사용해 메인 페이지, 프로젝트 목록, 프로젝트 상세, 이력서 페이지를 구성했습니다.",
    problem:
      "기존에는 프로젝트 소개, 기술스택, 이력서 정보가 README나 문서 형태로 흩어져 있어 방문자가 핵심 프로젝트와 역할을 한 번에 파악하기 어려웠습니다. 또한 배포 가능한 웹 포트폴리오로 운영하려면 콘텐츠를 하드코딩하지 않고 일관된 데이터 구조로 관리하면서, 모바일 화면과 공유 미리보기, 검색 노출까지 함께 고려할 필요가 있었습니다.",
    solution:
      "프로필, 프로젝트, 기술스택, 경험 정보를 src/data의 TypeScript 데이터로 분리하고, 메인 페이지와 상세 페이지에서 같은 데이터를 재사용하도록 구성했습니다. 프로젝트 상세 페이지는 slug 기반 동적 라우팅과 notFound 처리를 적용했고, 링크가 없는 항목은 깨진 버튼으로 보이지 않게 처리했습니다. Resume 페이지는 별도 PDF 파일 대신 브라우저 인쇄 기능으로 현재 웹 이력서를 PDF로 저장할 수 있도록 구성했으며, metadata, sitemap, robots, OG 이미지, GitHub Actions CI까지 배포 전 검증 흐름에 포함했습니다.",
    features: [
      "프로필, 프로젝트, 기술스택, 경험 데이터의 TypeScript 기반 정적 관리",
      "메인 랜딩 페이지와 Featured Projects 섹션",
      "프로젝트 목록 페이지와 slug 기반 프로젝트 상세 페이지",
      "프로젝트별 이미지 갤러리와 확대 보기",
      "카테고리형 기술스택과 접이식 트러블슈팅 섹션",
      "웹 이력서 페이지와 브라우저 인쇄 기반 PDF 저장",
      "반응형 Header, 카드, 문서형 상세 레이아웃",
      "Open Graph, Twitter Card, robots.txt, sitemap.xml 구성",
    ],
    technicalDecisions: [
      "콘텐츠를 페이지 컴포넌트에 직접 작성하지 않고 profile, projects, skills, experiences 데이터 파일로 분리",
      "프로젝트 상세 페이지를 slug 기반 동적 라우팅으로 구성하고 generateStaticParams로 정적 생성",
      "없는 프로젝트 slug는 notFound 처리해 잘못된 URL 접근을 명확하게 처리",
      "프로젝트 카드와 상세 페이지에서 같은 링크 데이터를 사용하되 href가 없는 링크는 사용자 화면에 노출하지 않음",
      "별도 PDF 파일 관리 대신 window.print와 print CSS를 사용해 현재 웹 이력서를 PDF로 저장하는 방식 선택",
      "프로젝트 스크린샷은 Next Image 기반 갤러리로 표시하고, 작은 썸네일과 확대 보기 흐름을 분리",
      "SEO 설정은 layout metadata, 페이지별 metadata, robots.ts, sitemap.ts로 분리",
      "Vercel 배포는 Git 연동에 맡기고 GitHub Actions는 lint/build 검증만 담당하도록 구성"
    ],
    challenges: [
      "프로젝트 설명이 길어질수록 카드, 상세 페이지, 이력서에서 같은 내용을 중복 관리하지 않도록 데이터 구조를 유지하는 문제",
      "프로젝트별 실제 링크가 없거나 준비 중인 경우 깨진 버튼처럼 보이지 않게 처리하는 문제",
      "웹 이력서가 화면에서는 읽기 좋고 인쇄 시에는 문서처럼 보이도록 스타일을 분리하는 문제",
      "프로젝트 이미지가 많아져도 상세 페이지가 길고 산만해 보이지 않도록 썸네일과 확대 보기를 분리하는 문제",
      "모바일, 태블릿, 데스크톱에서 Header, 카드 버튼, 배지 줄바꿈이 깨지지 않게 맞추는 문제",
      "실제 배포 URL, sitemap, metadata, README의 도메인 정보가 서로 어긋나지 않게 관리하는 문제"
    ],
    troubleshooting: [
      {
        title: "정적 데이터와 페이지 컴포넌트의 책임 분리",
        issue:
          "프로젝트 설명, 기술스택, 링크, 이력서 내용이 페이지 컴포넌트 안에 직접 섞이면 같은 정보를 여러 페이지에서 재사용하기 어렵고 수정 누락이 발생할 수 있었습니다.",
        solution:
          "profile, projects, skills, experiences 데이터를 TypeScript 파일로 분리하고 타입을 정의했습니다. 메인 페이지, 프로젝트 목록, 상세 페이지, 이력서 페이지는 같은 데이터를 import해 렌더링하도록 구성했습니다.",
        outcome:
          "콘텐츠 수정 위치가 명확해졌고, 프로젝트 순서, 링크, 기술스택, 상세 설명을 한 곳에서 관리할 수 있게 되었습니다."
      },
      {
        title: "resume.pdf 의존 방식에서 브라우저 PDF 저장 방식으로 전환",
        issue:
          "미리 만들어둔 public/resume.pdf 파일을 다운로드하는 방식은 파일이 없을 때 버튼 비활성 처리와 TODO 문구가 필요했고, 웹 이력서 내용과 PDF 파일 내용이 달라질 수 있었습니다.",
        solution:
          "Resume 페이지에 클라이언트 PrintButton을 추가해 window.print()를 호출하도록 변경했습니다. print CSS로 Header, Footer, 버튼류를 숨기고 본문은 문서형으로 출력되도록 정리했습니다.",
        outcome:
          "별도 PDF 파일 없이 현재 웹 이력서 내용을 브라우저에서 바로 PDF로 저장할 수 있게 되었고, 이력서 콘텐츠와 출력물이 같은 소스를 사용하게 되었습니다."
      },
      {
        title: "프로젝트 이미지 확대 보기와 페이지 길이 문제",
        issue:
          "서비스 스크린샷을 모두 크게 노출하면 프로젝트 상세 페이지가 길어지고 본문 흐름이 끊길 수 있었습니다.",
        solution:
          "썸네일은 한 줄 가로 스크롤 갤러리로 표시하고, 클릭 시 dialog 기반 확대 보기로 전환했습니다. 이전/다음 버튼과 키보드 이동을 추가해 여러 이미지를 이어서 볼 수 있게 했습니다.",
        outcome:
          "상세 설명의 가독성을 유지하면서도 필요한 경우 서비스 화면을 크게 확인할 수 있는 구조가 되었습니다."
      },
      {
        title: "실제 링크가 없는 프로젝트의 깨진 링크 노출 문제",
        issue:
          "프로젝트별 GitHub, Demo, Release 링크가 모두 준비되지 않은 상태에서 빈 href나 TODO 링크가 버튼으로 노출되면 사용자 경험이 좋지 않았습니다.",
        solution:
          "링크 배열은 유지하되 href가 있는 링크만 화면에 표시하도록 처리했습니다. 실제 링크가 추가된 프로젝트는 카드와 상세 페이지에서 같은 링크 데이터를 사용하도록 구성했습니다.",
        outcome:
          "준비되지 않은 링크는 사용자 화면에 깨진 버튼으로 보이지 않고, 실제 링크가 추가되면 별도 UI 수정 없이 바로 노출됩니다."
      }
    ],
    improvements: [
      "README 중심의 단순 프로젝트 소개를 웹 기반 포트폴리오와 프로젝트 상세 페이지로 확장",
      "하드코딩된 콘텐츠를 TypeScript 데이터 파일로 분리해 수정 위치를 명확화",
      "프로젝트 목록, 상세 페이지, 이력서에서 같은 프로젝트 데이터를 재사용",
      "별도 PDF 파일 다운로드 방식에서 현재 웹 이력서 인쇄/PDF 저장 방식으로 개선",
      "프로젝트 이미지를 본문에 크게 나열하는 방식 대신 썸네일 갤러리와 확대 보기로 정리",
      "Vercel 배포 URL을 metadataBase, sitemap, README에 반영해 SEO 설정 일관성 개선",
      "GitHub Actions CI로 PR과 main push에서 lint/build 검증 흐름 추가"
    ],
    nextImprovements: [
      "커스텀 도메인 연결 시 metadataBase와 sitemap URL 갱신",
      "프로젝트별 이미지 alt/caption 품질 보강",
      "검색 노출 결과를 기준으로 title/description 문구 추가 조정",
      "프로젝트 상세 페이지의 목차 또는 앵커 네비게이션 추가 검토",
      "인쇄 결과를 실제 PDF 저장본 기준으로 추가 점검"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ing2720/profile"
      },
      {
        label: "Demo",
        href: "https://profile-sable-alpha.vercel.app"
      }
    ]
  }
];

export const orderedProjects = [...projects].sort(
  (a, b) => a.order - b.order
);

export const featuredProjects = orderedProjects.filter(
  (project) => project.isFeatured
);
