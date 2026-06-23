import type { MetadataRoute } from "next";

const siteUrl = "https://example.com"; // TODO: 실제 배포 도메인으로 교체

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
