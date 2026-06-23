import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://profile-sable-alpha.vercel.app"; // TODO: 커스텀 도메인 연결 시 교체
const siteDescription =
  "FastAPI, Django, macOS 로컬 자동화 서비스를 중심으로 백엔드 기반 제품을 구현하는 개발자 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "이형운 | Backend Developer",
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    title: "이형운 | Backend Developer",
    description: siteDescription,
    url: "/",
    siteName: "이형운 Portfolio",
    locale: "ko_KR",
    // TODO: public/og-image.png 파일 추가 후 실제 미리보기 이미지를 확인
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "이형운 Backend Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "이형운 | Backend Developer",
    description: siteDescription,
    // TODO: public/og-image.png 파일 추가 후 Twitter card 미리보기 확인
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
