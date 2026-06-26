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
    "백엔드에서 시작해 사용자가 만나는 실행 흐름까지 구현합니다.",
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
