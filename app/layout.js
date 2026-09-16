import { Cormorant_Garamond, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpeechReader from "@/components/SpeechReader";
import { DisclaimerBanner } from "@/components/Quote";
import { site } from "@/lib/chapters";
import { SHARE_IMAGE_ALT, SITE_URL } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["500", "600", "700"],
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif-family",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans-family",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  category: "education",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SHARE_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "default",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf6ea" },
    { media: "(prefers-color-scheme: dark)", color: "#17140f" },
  ],
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: site.tagline,
  url: SITE_URL,
  description: site.description,
  inLanguage: "en",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <head>
        <script src="/theme-init.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="paper-bg grain flex min-h-full flex-col font-serif text-ink">
        <DisclaimerBanner />
        <Navigation />
        <main id="content" className="min-w-0 flex-1">
          {children}
        </main>
        <Footer />
        <SpeechReader />
      </body>
    </html>
  );
}
