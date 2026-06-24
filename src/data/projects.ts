export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  order: number;
  slug: string;
  title: string;
  summary: string;
  isFeatured: boolean;
  stacks: string[];
  highlights: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  myRole: string[];
  technicalDecisions?: string[];
  challenges: string[];
  improvements: string[];
  validations: string[];
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
    highlights: [
      "macOS 앱과 FastAPI 로컬 백엔드 연동",
      "작업 세션, 이벤트, 메모, 회의 기록, 리포트 도메인 설계",
      "TimelineBuilder 기반 일일 타임라인 생성",
      "LLM 기반 리포트 생성",
      "민감정보 마스킹 후 AI 요약 요청",
      "Release v1.1.0 기준 lightweight/full DMG 패키징 구조 정리"
    ],
    overview:
      "Mwoham은 macOS에서 사용자의 작업 흐름, 회의 기록, 수동 메모를 로컬에서 수집하고 일일 리포트로 정리하는 작업 기록 자동화 앱입니다. SwiftUI macOS 앱이 사용자 인터페이스를 담당하고, FastAPI 로컬 백엔드가 작업 세션, 이벤트, 메모, 회의 기록, 리포트 도메인을 처리합니다.",
    problem:
      "개발, 학습, 회의 중 작업 기록은 앱 사용 흐름, 수동 메모, 회의 내용, 개발 이벤트로 흩어지기 쉽습니다. 하루가 끝난 뒤 실제로 무엇을 했는지 다시 정리하려면 여러 기록을 다시 찾아야 하고, 리포트 작성에도 반복 시간이 듭니다.",
    solution:
      "작업 세션, 앱/창 이벤트, 수동 메모, 회의 STT 기록을 하나의 일일 타임라인으로 합치고, TimelineBuilder로 흐름을 정리한 뒤 Gemini/OpenAI 기반 LLM 연동으로 리포트 초안을 생성합니다. 원본 화면이나 음성 파일을 장기 저장하는 방식보다 로컬 텍스트 기록을 중심에 두고, AI 요청 전 민감정보 마스킹을 적용했습니다.",
    features: [
      "작업 세션 시작, 일시정지, 재개, 종료 흐름",
      "앱/창 기반 작업 이벤트 기록",
      "수동 메모 기록",
      "회의 STT 기록",
      "TimelineBuilder 기반 일일 타임라인 생성",
      "Gemini/OpenAI 기반 LLM 연동을 통한 일일 리포트 생성",
      "AI 요청 전 민감정보 마스킹",
      "macOS SwiftUI 앱과 FastAPI 로컬 백엔드 연동",
      "lightweight/full DMG 패키징",
      "컴포넌트 설치 상태 관리",
      "checksum 검증",
      "staging/final 경로 분리"
    ],
    myRole: [
      "서비스 요구사항 정리",
      "FastAPI 로컬 백엔드 API 설계",
      "작업 세션, 이벤트, 메모, 리포트 도메인 설계",
      "TimelineBuilder 흐름 구성",
      "LLM Provider 연동 및 fallback 흐름 구성",
      "SwiftUI macOS 앱과 로컬 API 연동",
      "lightweight/full DMG 배포 구조 설계",
      "Release v1.1.0 기준 패키징/설치 안정화"
    ],
    technicalDecisions: [
      "작업 기록과 회의 텍스트가 외부 서버에 먼저 의존하지 않도록 로컬 우선 구조를 선택",
      "macOS 앱에서 HTTP API로 명확하게 호출할 수 있고 테스트하기 쉬운 FastAPI를 로컬 백엔드로 사용",
      "초기 개인용 로컬 저장소로 운영 부담이 낮고 파일 기반 배포에 맞는 SQLite를 선택",
      "AI 요약 요청 전에 민감정보 마스킹 단계를 두어 외부 모델에 전달되는 텍스트 범위를 줄임",
      "사용 환경에 따라 런타임 포함 범위를 다르게 가져갈 수 있도록 full/lightweight 패키징을 분리",
      "다운로드 또는 설치 중간 산출물이 기존 정상 설치본을 덮어쓰지 않도록 staging/final 경로를 분리"
    ],
    challenges: [
      "macOS 권한/보안 설정 흐름을 사용자가 따라갈 수 있게 정리하는 문제",
      "SwiftUI 앱에서 로컬 백엔드 실행 경로와 상태를 안정적으로 맞추는 문제",
      "DMG 배포 시 backend, STT, model 번들링 방식을 full/lightweight로 분리하는 문제",
      "설치 중 partial download가 final 경로에 섞이지 않도록 막는 문제",
      "업데이트 또는 재설치 중 기존 정상 설치본을 보존하는 문제",
      "AI 요약에 전달할 텍스트 범위와 민감정보 처리 기준을 정하는 문제"
    ],
    improvements: [
      "수동으로 흩어지던 기록을 작업 세션과 이벤트 중심의 타임라인으로 정리",
      "하루 기록을 직접 다시 모으던 흐름을 TimelineBuilder와 AI 보조 요약 흐름으로 개선",
      "macOS 앱 배포를 단순 번들 방식에서 lightweight/full DMG 구조로 정리",
      "컴포넌트 설치를 단순 복사에서 checksum 검증, staging/final 이동 구조로 개선"
    ],
    validations: [
      "backend pytest",
      "ruff 기반 정적 검사",
      "macOS 앱 빌드 확인",
      "STT readiness 확인",
      "release resource check",
      "DMG 설치 흐름 확인",
      "/health 기반 로컬 백엔드 상태 확인"
    ],
    nextImprovements: [
      "실제 사용 흐름 기준으로 회의 기록 편집 UX 보완",
      "리포트 템플릿 선택 기능 추가 검토",
      "설치 상태 점검 메시지와 복구 안내 개선"
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
    title: "Django Commerce API",
    summary: "Django 기반 커머스/배송 추적 API",
    isFeatured: true,
    stacks: [
      "Django",
      "DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "JWT"
    ],
    highlights: [
      "이메일/비밀번호 로그인과 소셜 로그인 구조",
      "JWT 인증과 Redis 기반 토큰 블랙리스트",
      "PostgreSQL 기반 데이터 모델링",
      "Celery worker/beat 기반 비동기 작업",
      "배송 추적 API 설계"
    ],
    overview:
      "Django Commerce API는 커머스 서비스에서 필요한 인증, 상품/주문 데이터, 배송 추적 흐름을 다루는 백엔드 API 프로젝트입니다.",
    problem:
      "커머스 API는 인증, 데이터 모델, 비동기 작업, 배송 상태 조회가 서로 연결되어 있어 구조를 분리하지 않으면 유지보수가 어려워집니다.",
    solution:
      "DRF 기반 API 구조에 JWT 인증, Redis 블랙리스트, Celery 비동기 작업, PostgreSQL 데이터 모델을 분리해 구성했습니다.",
    features: [
      "이메일/비밀번호 로그인",
      "소셜 로그인",
      "JWT 인증",
      "Redis 기반 토큰 블랙리스트",
      "Celery worker/beat 작업",
      "배송 추적 API",
      "Docker 개발 환경"
    ],
    myRole: [
      "Django와 DRF 기반 API 구조 설계",
      "인증과 토큰 블랙리스트 흐름 구성",
      "PostgreSQL 데이터 모델링",
      "Celery 기반 비동기 작업 구성",
      "배송 추적 API 흐름 설계"
    ],
    challenges: [
      "인증 상태와 토큰 폐기 흐름을 Redis와 함께 관리하는 문제",
      "비동기 작업과 API 요청 흐름을 분리하는 문제",
      "배송 추적 데이터를 API 응답으로 다루기 쉽게 정리하는 문제"
    ],
    improvements: [
      "단순 로그인 흐름에서 JWT와 블랙리스트 기반 인증 구조로 개선",
      "동기 처리 중심 흐름에서 Celery 기반 비동기 작업 구조로 분리",
      "로컬 개발 환경을 Docker 기반으로 정리"
    ],
    validations: [
      "API 동작 확인",
      "Docker 개발 환경 실행 확인",
      "인증과 배송 추적 주요 흐름 점검"
    ],
    nextImprovements: [
      "배송 추적 응답 포맷 정리",
      "주요 API 테스트 케이스 보강",
      "Docker 기반 로컬 실행 문서 개선"
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
    title: "Portfolio Website",
    summary: "Next.js 기반 웹 이력서/포트폴리오 사이트",
    isFeatured: true,
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "정적 데이터 기반 콘텐츠 관리",
      "프로젝트 상세 페이지 중심 구조",
      "반응형 UI 구성",
      "웹 이력서와 브라우저 PDF 저장 흐름",
      "Vercel 배포 및 자동 배포 흐름 구성",
      "SEO 고도화 예정"
    ],
    overview:
      "Portfolio Website는 백엔드 개발 경험과 프로젝트 내용을 정리하기 위한 Next.js 기반 정적 포트폴리오 사이트입니다.",
    problem:
      "프로젝트 설명과 이력서 정보를 한 곳에서 일관되게 보여줄 수 있는 공개 웹 페이지가 필요했습니다.",
    solution:
      "App Router와 TypeScript 데이터 파일을 기반으로 프로젝트, 기술, 경험 정보를 페이지에서 재사용할 수 있도록 구성합니다.",
    features: [
      "정적 콘텐츠 데이터 관리",
      "프로젝트 목록과 상세 페이지 제공 예정",
      "모바일 대응 반응형 레이아웃",
      "웹 이력서 페이지 제공 예정",
      "브라우저 인쇄 기반 PDF 저장 지원",
      "Vercel 배포 및 Git 연동 자동 배포 흐름 구성",
      "SEO 메타데이터 고도화 예정"
    ],
    myRole: [
      "Next.js 프로젝트 구조 구성",
      "포트폴리오 콘텐츠 데이터 모델링",
      "Tailwind CSS 기반 UI 구현",
      "Vercel 배포 흐름 구성"
    ],
    challenges: [
      "콘텐츠를 페이지에 직접 하드코딩하지 않고 재사용 가능한 데이터로 분리하는 문제",
      "프로젝트 상세 설명을 과장 없이 명확하게 정리하는 문제"
    ],
    improvements: [
      "README 수준의 간단한 소개에서 웹 기반 포트폴리오 구조로 확장",
      "프로젝트와 이력서 콘텐츠를 TypeScript 데이터 파일로 분리"
    ],
    validations: [
      "npm run lint로 정적 검사",
      "npm run build로 정적 빌드 확인"
    ],
    nextImprovements: [
      "프로젝트 상세 콘텐츠 보강",
      "웹 이력서 페이지 구현",
      "SEO 메타데이터와 오픈그래프 이미지 구성"
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
