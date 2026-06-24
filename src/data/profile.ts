export type ProfileLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
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
    "백오피스 API 개발과 서비스 자동화, 교육·프로젝트 코칭 경험을 바탕으로 제품의 흐름을 설계하고 구현하는 백엔드 개발자입니다.",
  image: {
    src: "/images/profile.jpg",
    alt: "이형운 프로필 사진"
  },
  links: {
    github: {
      label: "GitHub",
      href: "https://github.com/ing2720"
    },
    email: {
      label: "ing2720@gmail.com",
      href: "mailto:ing2720@gmail.com"
    },
    resumePdf: {
      label: "Resume",
      href: "/resume"
    }
  }
};
