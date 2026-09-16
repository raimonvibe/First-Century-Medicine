"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { chapters, groups, site } from "@/lib/chapters";
import { OliveMark } from "@/components/Ornament";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setCourseOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/80 bg-cream/90 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-grove focus:px-3 focus:py-2 focus:text-foam"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-4 sm:py-3 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-olive sm:gap-3">
          <OliveMark className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-base font-semibold tracking-wide sm:text-lg md:text-xl">
              {site.name}
            </span>
            <span className="hidden font-sans text-[11px] uppercase tracking-[0.18em] text-ink-soft sm:block sm:tracking-[0.22em]">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="relative hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Primary">
          <div>
            <button
              type="button"
              className="font-sans text-sm tracking-wide text-ink hover:text-terracotta"
              onClick={() => setCourseOpen((value) => !value)}
              aria-expanded={courseOpen}
            >
              Chapters
            </button>
            {courseOpen ? (
              <div className="absolute right-0 top-full z-50 mt-3 w-[min(36rem,calc(100vw-2rem))] max-h-[min(70vh,32rem)] overflow-auto rounded-sm border border-sand bg-cream p-4 shadow-lg">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {groups.map((group) => (
                    <div key={group}>
                      <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
                        {group}
                      </p>
                      <ul className="space-y-1">
                        {chapters
                          .filter((chapter) => chapter.group === group)
                          .map((chapter) => (
                            <li key={chapter.slug}>
                              <Link
                                href={chapter.href}
                                className={`block rounded-sm px-2 py-1 font-sans text-sm hover:bg-parchment ${
                                  pathname === chapter.href
                                    ? "bg-parchment text-wine"
                                    : "text-ink"
                                }`}
                              >
                                <span className="mr-2 text-gold">
                                  {chapter.number}
                                </span>
                                {chapter.nav}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <Link
            href="/herbs"
            className={`font-sans text-sm tracking-wide hover:text-terracotta ${
              pathname === "/herbs" ? "text-terracotta" : "text-ink"
            }`}
          >
            Herbs
          </Link>
          <Link
            href="/cases"
            className={`font-sans text-sm tracking-wide hover:text-terracotta ${
              pathname === "/cases" ? "text-terracotta" : "text-ink"
            }`}
          >
            Cases
          </Link>
          <Link
            href="/timeline"
            className={`font-sans text-sm tracking-wide hover:text-terracotta ${
              pathname === "/timeline" ? "text-terracotta" : "text-ink"
            }`}
          >
            Timeline
          </Link>
          <Link
            href="/words"
            className={`font-sans text-sm tracking-wide hover:text-terracotta ${
              pathname === "/words" ? "text-terracotta" : "text-ink"
            }`}
          >
            Words
          </Link>
          <Link
            href="/sources"
            className={`font-sans text-sm tracking-wide hover:text-terracotta ${
              pathname === "/sources" ? "text-terracotta" : "text-ink"
            }`}
          >
            Sources
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="min-h-10 px-1 font-sans text-sm uppercase tracking-widest text-olive"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[min(70dvh,calc(100dvh-var(--speech-dock-height,10.5rem)-5rem))] overflow-y-auto overscroll-contain border-t border-sand bg-cream px-4 py-4 lg:hidden">
          {groups.map((group) => (
            <div key={group} className="mb-4">
              <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
                {group}
              </p>
              {chapters
                .filter((chapter) => chapter.group === group)
                .map((chapter) => (
                  <Link
                    key={chapter.slug}
                    href={chapter.href}
                    className="block py-1.5 font-sans text-sm text-ink"
                  >
                    {chapter.number} · {chapter.nav}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
