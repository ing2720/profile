import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DetailSection } from "@/components/ui/DetailSection";
import { PrintButton } from "@/components/ui/PrintButton";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";
import { orderedProjects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume | 이형운",
  description: "이형운 백엔드 개발자 웹 이력서"
};

function hasUsableHref(href: string) {
  return href.length > 0 && !href.toLowerCase().includes("todo");
}

function getDisplayValue(href: string, fallback: string) {
  return hasUsableHref(href) ? href : fallback;
}

function getEmailLabel(href: string, fallback: string) {
  if (!hasUsableHref(href)) {
    return fallback;
  }

  return href.replace(/^mailto:/i, "");
}

function renderOptionalLink(href: string, label: string, isExternal = false) {
  if (!hasUsableHref(href)) {
    return label;
  }

  return (
    <a
      className="text-slate-600 underline-offset-4 hover:text-slate-950 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
    </a>
  );
}

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 print:max-w-none print:px-0 print:py-0">
          <header className="border-b border-slate-200 pb-10 print:pb-5">
            <div className="flex flex-col gap-8 print:gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex min-w-0 flex-col gap-5 print:gap-3 sm:flex-row sm:items-start">
                <ProfileImage
                  image={profile.image}
                  name={profile.name}
                  size="md"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase text-slate-500">
                    Web Resume
                  </p>
                  <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 print:mt-1 print:text-3xl sm:text-5xl">
                    {profile.name}
                  </h1>
                  <p className="mt-3 text-xl font-semibold text-slate-800 print:mt-1 print:text-base">
                    {profile.role}
                  </p>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 print:mt-2 print:text-sm print:leading-5">
                    {profile.summary}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end print:hidden">
                <ButtonLink href={profile.links.github.href}>GitHub</ButtonLink>
                <ButtonLink href={profile.links.email.href}>Email</ButtonLink>
                <PrintButton>PDF로 저장</PrintButton>
              </div>
            </div>

            <dl className="mt-8 grid gap-4 text-sm print:mt-4 print:gap-2 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 p-4 print:p-3">
                <dt className="font-semibold text-slate-950">GitHub</dt>
                <dd className="mt-2 break-words text-slate-600">
                  {renderOptionalLink(
                    profile.links.github.href,
                    getDisplayValue(profile.links.github.href, "준비 중"),
                    true
                  )}
                </dd>
              </div>
              <div className="rounded-lg border border-slate-200 p-4 print:p-3">
                <dt className="font-semibold text-slate-950">Email</dt>
                <dd className="mt-2 break-words text-slate-600">
                  {renderOptionalLink(
                    profile.links.email.href,
                    getEmailLabel(profile.links.email.href, "준비 중")
                  )}
                </dd>
              </div>
              <div className="rounded-lg border border-slate-200 p-4 print:p-3">
                <dt className="font-semibold text-slate-950">연락처</dt>
                <dd className="mt-2 break-words text-slate-600">
                  010-3087-2939
                </dd>
              </div>
            </dl>
          </header>

          <DetailSection title="자기소개">
            <div className="space-y-4 print:space-y-2 print:text-sm print:leading-5">
              <p>
                API 설계, 데이터 모델링, 인증, 비동기 처리, 외부 API 연동을
                중심으로 백엔드 기능을 구현합니다. 요구사항을 단순 엔드포인트
                목록으로만 보지 않고, 데이터가 생성되고 변경되고 조회되는
                흐름을 기준으로 도메인 구조와 인터페이스를 정리합니다.
                데이트팝 백오피스에서는 Django Ninja 기반 캠페인·체험단 관리
                API와 어드민 기능을 구현하고, 기존 운영 DB와 서비스 흐름을
                연결했습니다.
              </p>
              <p>
                팀 프로젝트에서는 커머스 도메인의 주문, 결제, 배송 추적 흐름을
                API로 구성했습니다. 상품 옵션과 재고, 장바구니, 주문, 결제,
                배송 상태가 서로 어긋나지 않도록 트랜잭션 처리, 상태 분리,
                백그라운드 동기화 구조를 적용했습니다. 외부 결제·배송 API와
                내부 주문 모델 사이의 경계를 분리해 장애와 실패 케이스에
                대응할 수 있는 흐름을 만들었습니다.
              </p>
              <p>
                개인 프로젝트 Mwoham에서는 FastAPI 로컬 백엔드와 SwiftUI macOS
                앱을 연결하고, 작업 기록 수집, STT, LLM 리포트 생성, DMG
                패키징까지 이어지는 실행 흐름을 구성했습니다. 백엔드를 주력으로
                두되 기능이 실제 사용 가능한 형태가 되기 위해 필요한
                인터페이스, 실행 환경, 배포 흐름까지 함께 설계합니다.
              </p>
            </div>
          </DetailSection>

          <DetailSection title="기술스택">
            <div className="grid gap-5 print:grid-cols-2 print:gap-2 md:grid-cols-2">
              {skillCategories.map((category) => (
                <section
                  className="min-w-0 rounded-lg border border-slate-200 p-5 print:break-inside-avoid print:border-slate-300 print:p-3"
                  key={category.category}
                >
                  <h2 className="text-base font-bold text-slate-950 print:text-sm">
                    {category.category}
                  </h2>
                  <div className="mt-4 flex min-w-0 flex-wrap gap-2 print:mt-2 print:gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="프로젝트 경험">
            <div className="grid gap-4 lg:grid-cols-2">
              {orderedProjects.map((project) => (
                <ProjectCard
                  density="compact"
                  key={project.slug}
                  project={project}
                />
              ))}
            </div>
          </DetailSection>

          <DetailSection title="경력 및 활동">
            <div className="grid gap-4">
              {experiences.map((experience) => (
                <section
                  className="min-w-0 rounded-lg border border-slate-200 p-4 print:break-inside-avoid print:border-slate-300 print:p-3"
                  key={`${experience.organization}-${experience.title}`}
                >
                  <p className="text-sm font-semibold text-slate-500">
                    {experience.organization}
                  </p>
                  <h2 className="mt-2 text-lg font-bold leading-6 text-slate-950">
                    {experience.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {experience.summary}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-[17px] text-slate-700">
                    {experience.details.map((detail) => (
                      <li className="flex gap-3" key={detail}>
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span className="min-w-0 break-words">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </DetailSection>

          <div className="print:hidden">
            <DetailSection title="링크">
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={profile.links.github.href}>GitHub</ButtonLink>
                <ButtonLink href={profile.links.email.href}>Email</ButtonLink>
                <ButtonLink href="/projects">프로젝트 페이지</ButtonLink>
                <PrintButton>인쇄/PDF 저장</PrintButton>
              </div>
            </DetailSection>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
