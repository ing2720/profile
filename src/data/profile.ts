export type ProfileLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  links: {
    github: ProfileLink;
    email: ProfileLink;
    resumePdf: ProfileLink;
  };
};

export const profile: Profile = {
  name: "이형운",
  role: "Backend Developer",
  summary:
    "백엔드 기반 서비스 설계와 자동화 제품 구현 경험을 쌓고 있는 개발자입니다.",
  links: {
    // TODO: 실제 GitHub URL로 교체
    github: {
      label: "GitHub",
      href: ""
    },
    // TODO: 실제 이메일 주소로 교체
    email: {
      label: "Email",
      href: ""
    },
    resumePdf: {
      label: "Resume PDF",
      href: "/resume.pdf"
    }
  }
};
