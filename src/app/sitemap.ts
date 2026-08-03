import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { proyectos } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = siteConfig.seo.domain;

  const projectUrls: MetadataRoute.Sitemap = proyectos.map((proyecto) => ({
    url: `${domain}/proyectos/${proyecto.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
