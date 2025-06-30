import { siteConfig } from "@/config/site.config";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    }
  ]
}