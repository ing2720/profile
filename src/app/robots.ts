import type { MetadataRoute } from "next";

const siteUrl = "https://profile-sable-alpha.vercel.app"; // TODO: 커스텀 도메인 연결 시 교체

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
