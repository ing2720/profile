import type { MetadataRoute } from "next";

const siteUrl = "https://example.com"; // TODO: 실제 배포 도메인으로 교체

const routes = [
  "/",
  "/projects",
  "/projects/mwoham",
  "/projects/django-commerce",
  "/projects/portfolio",
  "/resume"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7
  }));
}
