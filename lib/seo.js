export const SITE_URL = "https://first-century-medicine.vercel.app";

export const SHARE_IMAGE_ALT =
  "Olive-sprig emblem on parchment beside the title Medicine in the Time of Jesus, for the Treatments & Herbs educational history site.";

const shareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: SHARE_IMAGE_ALT,
};

export function pageMeta({
  title,
  description,
  path,
  type = "article",
  absolute = false,
}) {
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type,
      locale: "en_US",
      siteName: "Treatments & Herbs",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}
