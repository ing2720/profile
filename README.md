# 이형운 포트폴리오

Next.js App Router, TypeScript, Tailwind CSS 기반의 백엔드 개발자 포트폴리오 사이트입니다. FastAPI, Django, macOS 로컬 자동화 서비스 경험을 프로젝트 중심으로 정리합니다.

## 기술스택

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Content: `src/data/*.ts`
- Deployment: Vercel

## 주요 페이지

- `/` - 메인 랜딩 페이지
- `/projects` - 프로젝트 목록
- `/projects/mwoham` - Mwoham 프로젝트 상세
- `/projects/django-commerce` - Django Commerce API 프로젝트 상세
- `/projects/portfolio` - Portfolio Website 프로젝트 상세
- `/resume` - 웹 이력서
- `/robots.txt` - 검색 엔진 크롤링 규칙
- `/sitemap.xml` - 사이트맵

## 로컬 실행 방법

```bash
npm install
npm run dev
```

기본 개발 서버는 `http://localhost:3000`에서 실행됩니다. 이미 포트가 사용 중이면 Next.js가 다른 포트를 안내합니다.

## 빌드 및 검증

```bash
npm run lint
npm run build
```

배포 전에는 위 두 명령어가 모두 통과해야 합니다.

## Vercel 배포 방법

배포 URL: https://profile-sable-alpha.vercel.app

1. GitHub 저장소에 변경 사항을 push합니다.
2. Vercel에서 New Project를 생성하고 GitHub 저장소를 연결합니다.
3. Framework Preset은 `Next.js`를 선택합니다.
4. Install Command는 `npm install`을 사용합니다.
5. Build Command는 `npm run build`를 사용합니다.
6. Output Directory는 Vercel 기본값을 사용합니다.
7. 배포 후 생성된 실제 URL에서 주요 페이지를 확인합니다.
8. 커스텀 도메인을 연결하면 `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`의 `https://profile-sable-alpha.vercel.app` 값을 커스텀 도메인으로 교체합니다.

현재 구조는 Next.js 기본 Vercel 배포로 충분하므로 별도 `vercel.json`은 사용하지 않습니다.

## 폴더 구조

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    robots.ts
    sitemap.ts
    projects/
      page.tsx
      [slug]/
        page.tsx
    resume/
      page.tsx
  components/
    layout/
    sections/
    ui/
  data/
    profile.ts
    projects.ts
    skills.ts
    experiences.ts
public/
  images/
```

## 정적 파일

- `public/og-image.png` - Open Graph / Twitter card 기본 이미지 위치
- `public/images/` - 프로젝트 또는 페이지에서 사용할 이미지 위치

이력서는 `/resume` 페이지에서 브라우저 인쇄 기능으로 PDF 저장할 수 있습니다. 별도 `public/resume.pdf` 파일은 필요하지 않습니다.

## 환경변수

현재는 환경변수가 필요 없는 정적 포트폴리오 구조입니다.

나중에 환경변수가 필요해지면 `.env.example`을 추가해 필요한 키만 문서화합니다. 실제 secret 값은 `.env` 또는 `.env.local`에만 두고 커밋하지 않습니다.

## TODO

- 커스텀 도메인 연결 시 metadata, robots, sitemap의 `siteUrl` 교체
- 프로젝트별 실제 GitHub/Demo 링크 입력
- 배포 후 모바일, 태블릿, 데스크톱 화면 최종 확인

## 배포 전 체크리스트

- [ ] `npm install`로 의존성 설치
- [ ] `npm run lint` 통과
- [ ] `npm run build` 통과
- [ ] `/`, `/projects`, `/projects/mwoham`, `/projects/django-commerce`, `/projects/portfolio`, `/resume` 확인
- [ ] `/robots.txt`, `/sitemap.xml` 확인
- [ ] GitHub/Email 링크 확인
- [ ] `/resume`에서 `PDF로 저장` 버튼 확인
- [ ] 커스텀 도메인을 연결하면 `https://profile-sable-alpha.vercel.app` 값 교체
- [ ] Vercel 배포 URL에서 주요 페이지 재확인
