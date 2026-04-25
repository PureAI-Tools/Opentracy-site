"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import type { Locale, Dictionary } from "@/i18n/config";
import { i18n } from "@/i18n/config";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [starCount, setStarCount] = useState<string>("...");
  const [activeHomeSection, setActiveHomeSection] = useState<string | null>(
    null,
  );
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    const formatStarCount = (value: number) =>
      new Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(value);

    const loadStars = async () => {
      try {
        const response = await fetch("/api/github-stars");
        if (!response.ok) {
          if (!cancelled) setStarCount("N/A");
          return;
        }

        const data = (await response.json()) as { stars: number | null };
        if (!cancelled) {
          setStarCount(
            typeof data.stars === "number"
              ? formatStarCount(data.stars)
              : "N/A",
          );
        }
      } catch {
        if (!cancelled) setStarCount("N/A");
      }
    };

    loadStars();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const navigation: Array<{ name: string; href: string; newTab?: boolean }> = [
    { name: dict.nav.features, href: `/${locale}#features` },
    { name: dict.nav.pricing, href: `/${locale}#pricing` },
    { name: dict.community.title, href: `/${locale}#community` },
    { name: dict.nav.platform, href: `/${locale}/platform` },
    { name: dict.nav.blog, href: `/${locale}/blog` },
    {
      name: dict.nav.docs,
      href: "/docs",
    },
  ];

  const normalizePath = (value: string) => value.replace(/\/+$/, "") || "/";
  const currentPath = normalizePath(pathname || "/");
  const homePath = `/${locale}`;

  const getSectionFromHref = (href: string) => {
    if (!href.includes("#")) return null;
    const [, hash] = href.split("#");
    return hash || null;
  };

  useEffect(() => {
    if (currentPath !== homePath) {
      setActiveHomeSection(null);
      return;
    }

    const sectionIds = ["features", "pricing", "community"] as const;

    const updateFromScrollPosition = () => {
      const triggerY = window.scrollY + 160;
      let nextActiveSection: string | null = null;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (triggerY >= element.offsetTop) {
          nextActiveSection = id;
        }
      }

      setActiveHomeSection(nextActiveSection);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateFromScrollPosition();
        ticking = false;
      });
    };

    updateFromScrollPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [currentPath, homePath]);

  const isNavItemActive = (href: string) => {
    const section = getSectionFromHref(href);
    if (section) {
      return currentPath === homePath && activeHomeSection === section;
    }

    const [targetPath] = href.split("#");
    const normalizedTarget = normalizePath(targetPath || "/");

    if (normalizedTarget === `/${locale}/platform`) {
      return currentPath === normalizedTarget;
    }

    return currentPath === normalizedTarget;
  };

  const getLocalePath = (targetLocale: Locale) => {
    const currentPath = normalizePath(pathname || "/");
    const pathParts = currentPath.split("/").filter(Boolean);
    const firstPart = pathParts[0] as Locale | undefined;
    const hasLocalePrefix =
      !!firstPart && i18n.locales.includes(firstPart as Locale);
    const restOfPath = hasLocalePrefix ? pathParts.slice(1) : pathParts;

    return restOfPath.length > 0
      ? `/${targetLocale}/${restOfPath.join("/")}`
      : `/${targetLocale}`;
  };

  const handleLocaleSwitch = (targetLocale: Locale) => {
    const targetPath = getLocalePath(targetLocale);
    setMobileMenuOpen(false);
    router.push(targetPath, { scroll: true });
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const getStartedLabel = dict.nav.getStarted.replace(/[→➜➝]/g, "").trim();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <nav className="nav-inner px-4 sm:px-6 lg:px-8">
        <div className="flex h-17 items-center justify-between w-full">
          <div className="flex items-center gap-8">
            <Link href={`/${locale}`} className="nav-logo">
              <img
                src="/tracy/opentracy-logo.png"
                alt="OpenTracy"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <div className="nav-links hidden lg:flex">
              {navigation.map((item) => {
                const isActive = isNavItemActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      const section = getSectionFromHref(item.href);
                      if (section) setActiveHomeSection(section);
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 mr-2">
              {i18n.locales.map((loc) => (
                <Link
                  key={loc}
                  href={getLocalePath(loc)}
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    loc === locale
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground hover:bg-surface"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleLocaleSwitch(loc);
                  }}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>
            {/* GitHub with star count */}
            <Link
              href="https://github.com/OpenTracy/OpenTracy"
              className="github-stars-badge"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
              <span className="github-stars-count inline-flex items-center gap-1">
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.196-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
                <span>{starCount}</span>
              </span>
            </Link>
            <Link
              href="https://github.com/lunar-org-ai/lunar-router"
              className="nav-cta"
            >
              <span>{getStartedLabel}</span>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12 5 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:border-accent/40 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={dict.nav.toggleMenu}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-70 transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/30 backdrop-blur-[1px] transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close mobile menu"
        />

        <aside
          className={`absolute right-0 top-0 h-full w-[min(88vw,360px)] bg-background shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-full flex-col px-4 pt-4 pb-5">
            <div className="flex items-center justify-between pb-2">
              <span className="text-sm font-semibold text-foreground">
                Menu
              </span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto pr-1">
              <div className="flex flex-col gap-3">
                {navigation.map((item) => {
                  const isActive = isNavItemActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.newTab ? "_blank" : undefined}
                      rel={item.newTab ? "noopener noreferrer" : undefined}
                      className={`px-1 py-1.5 text-[1.05rem] leading-none transition-colors ${
                        isActive
                          ? "text-muted font-semibold"
                          : "text-muted hover:text-foreground"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => {
                        const section = getSectionFromHref(item.href);
                        if (section) setActiveHomeSection(section);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-border/70">
              <div className="space-y-3">
                <div className="inline-flex w-full items-center rounded-xl border border-border/80 bg-background p-1">
                  {i18n.locales.map((loc) => (
                    <Link
                      key={loc}
                      href={getLocalePath(loc)}
                      className={`flex-1 rounded-lg py-1.5 text-center text-xs tracking-wide transition-colors ${
                        loc === locale
                          ? "bg-accent/12 text-accent font-semibold"
                          : "text-muted hover:text-foreground"
                      }`}
                      onClick={(event) => {
                        event.preventDefault();
                        handleLocaleSwitch(loc);
                      }}
                    >
                      {localeLabels[loc]}
                    </Link>
                  ))}
                </div>

                <Link
                  href="https://github.com/OpenTracy/OpenTracy"
                  className="w-full inline-flex items-center justify-between rounded-xl border border-border/80 bg-background px-3 py-2 text-sm text-muted hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>GitHub</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.196-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                    <span>{starCount}</span>
                  </span>
                </Link>

                <Link
                  href="https://github.com/lunar-org-ai/lunar-router"
                  className="btn btn-primary text-sm w-full justify-center inline-flex items-center gap-2 min-h-11"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{getStartedLabel}</span>
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12 5 7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
