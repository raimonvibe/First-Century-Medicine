"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { chapters, groups, site } from "@/lib/chapters";
import { OliveMark } from "@/components/Ornament";

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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-olive focus:px-3 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-olive">
          <OliveMark className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-wide md:text-xl">
              {site.name}
            </span>
            <span className="hidden font-sans text-[11px] uppercase tracking-[0.22em] text-ink-soft sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <div className="relative">
            <button
              type="button"
              className="font-sans text-sm tracking-wide text-ink hover:text-terracotta"
              onClick={() => setCourseOpen((value) => !value)}
              aria-expanded={courseOpen}
            >
              Chapters
            </button>
            {courseOpen ? (
              <div className="absolute right-0 top-full z-50 mt-3 w-[36rem] rounded-sm border border-sand bg-cream p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
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
        </nav>

        <button
          type="button"
          className="font-sans text-sm uppercase tracking-widest text-olive lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-sand bg-cream px-4 py-4 lg:hidden">
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
