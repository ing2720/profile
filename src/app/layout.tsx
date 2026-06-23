import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이형운 | Backend Developer",
  description: "이형운 백엔드 개발자 포트폴리오"
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
