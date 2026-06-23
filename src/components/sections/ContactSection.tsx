import type { Profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ContactSectionProps = {
  profile: Profile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section className="border-t border-slate-200 bg-slate-950" id="contact">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="프로젝트와 협업 이야기를 나눌 수 있습니다."
            description="이메일과 GitHub 링크는 실제 정보가 준비되면 데이터 파일에서 교체할 수 있도록 분리해두었습니다."
            tone="dark"
          />
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink href={profile.links.email.href} variant="primary">
            {profile.links.email.label}
          </ButtonLink>
          <ButtonLink href={profile.links.github.href}>GitHub</ButtonLink>
          <ButtonLink href={profile.links.resumePdf.href}>Resume PDF</ButtonLink>
        </div>
      </div>
    </section>
  );
}
