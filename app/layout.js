import { Cormorant_Garamond, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DisclaimerBanner } from "@/components/Quote";
import { site } from "@/lib/chapters";
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
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="paper-bg grain flex min-h-full flex-col font-serif text-ink">
        <DisclaimerBanner />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
