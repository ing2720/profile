export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
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
  challenges: string[];
  improvements: string[];
  validations: string[];
  nextImprovements: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "mwoham",
    title: "Mwoham",
    summary: "macOS 로컬 작업 기록 자동화 서비스",
    isFeatured: true,
    stacks: [
      "FastAPI",
      "SQLite",
      "Alembic",
      "SwiftUI",
      "Gemini",
      "STT",
      "pytest",
      "ruff"
    ],
    highlights: [
      "macOS 앱과 FastAPI 로컬 백엔드 연동",
      "작업 세션, 이벤트, 메모, 회의 기록, 리포트 도메인 설계",
      "TimelineBuilder 기반 일일 타임라인 생성",
      "Gemini 기반 리포트 생성",
      "민감정보 마스킹 후 AI 요약 요청",
      "lightweight/full DMG 패키징 구조 설계"
    ],
    overview:
      "Mwoham은 macOS 환경에서 작업 흐름을 로컬에 기록하고, 일일 타임라인과 리포트로 정리하는 작업 기록 자동화 서비스입니다.",
    problem:
      "작업 기록이 메모, 회의 내용, 세션 로그로 흩어지면 하루 단위 회고와 보고서 작성에 반복 시간이 많이 듭니다.",
    solution:
      "로컬 FastAPI 백엔드와 SwiftUI 앱을 연동해 작업 이벤트를 저장하고, TimelineBuilder와 AI 요약 흐름으로 기록을 리포트 형태로 정리했습니다.",
    features: [
      "작업 세션, 이벤트, 메모, 회의 기록 저장",
      "STT 기반 회의 기록 흐름",
      "일일 타임라인 생성",
      "Gemini 기반 리포트 초안 생성",
      "민감정보 마스킹 후 AI 요청",
      "컴포넌트 설치 상태 관리",
      "lightweight/full DMG 패키징",
      "체크섬 검증을 통한 패키징 산출물 확인"
    ],
    myRole: [
      "FastAPI 기반 로컬 백엔드 구조 설계",
      "SQLite와 Alembic 기반 저장 구조 구성",
      "SwiftUI macOS 앱과 로컬 백엔드 연동 흐름 설계",
      "AI 요약 요청 전 개인정보 필터링 흐름 구현",
      "DMG 패키징과 배포 경로 분리 구조 설계"
    ],
    challenges: [
      "로컬 앱과 백엔드 프로세스의 실행 상태를 안정적으로 맞추는 문제",
      "AI 요약 요청 전에 민감정보를 최대한 제거해야 하는 문제",
      "개발 산출물과 배포 산출물의 경로가 섞이지 않도록 관리하는 문제"
    ],
    improvements: [
      "수동 메모 중심 기록에서 세션과 이벤트 기반 기록 구조로 개선",
      "흩어진 작업 기록을 일일 타임라인으로 재구성",
      "패키징 산출물을 lightweight/full 유형으로 분리"
    ],
    validations: [
      "pytest 기반 백엔드 테스트",
      "ruff 기반 정적 검사",
      "체크섬 검증을 통한 패키징 산출물 확인",
      "staging/final 경로 분리 확인"
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
    slug: "portfolio",
    title: "Portfolio Website",
    summary: "Next.js 기반 웹 이력서/포트폴리오 사이트",
    isFeatured: false,
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "정적 데이터 기반 콘텐츠 관리",
      "프로젝트 상세 페이지 중심 구조",
      "반응형 UI 구성",
      "웹 이력서와 브라우저 PDF 저장 흐름",
      "Vercel 배포 예정",
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
      "Vercel 정적 배포 예정",
      "SEO 메타데이터 고도화 예정"
    ],
    myRole: [
      "Next.js 프로젝트 구조 구성",
      "포트폴리오 콘텐츠 데이터 모델링",
      "Tailwind CSS 기반 UI 구현 예정",
      "Vercel 배포 흐름 구성 예정"
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

export const featuredProjects = projects.filter((project) => project.isFeatured);
