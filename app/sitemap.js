import { chapters } from "@/lib/chapters";
import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const now = new Date("2026-09-16");
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...chapters.map((chapter) => ({
      url: `${SITE_URL}${chapter.href}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: chapter.group === "Reference" ? 0.7 : 0.8,
    })),
  ];
}
