import type { MetadataRoute } from "next";
import { cvPath, siteUrl } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}${cvPath}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
