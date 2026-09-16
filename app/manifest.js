import { site } from "@/lib/chapters";
import { SITE_URL } from "@/lib/seo";

export default function manifest() {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    id: SITE_URL,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbf6ea",
    theme_color: "#3a452c",
    lang: "en",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
