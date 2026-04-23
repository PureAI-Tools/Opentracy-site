"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
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
  const pathname = usePathname();

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

  const navigation: Array<{ name: string; href: string; newTab?: boolean }> = [
    { name: dict.nav.features, href: `/${locale}#features` },
    { name: dict.nav.platform, href: `/${locale}/platform` },
    {
      name: dict.nav.docs,
      href: "https://opentracy.com/docs",
    },
    { name: dict.nav.pricing, href: `/${locale}/pricing` },
    { name: dict.nav.blog, href: `/${locale}/blog` },
  ];

  const normalizePath = (value: string) => value.replace(/\/+$/, "") || "/";

  const isActiveNavItem = (href: string) => {
    if (href.startsWith("http")) return false;

    const targetPath = normalizePath(href.split("#")[0]);
    const currentPath = normalizePath(pathname || "/");

    if (targetPath === `/${locale}`) {
      return currentPath === targetPath;
    }

    return (
      currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href={`/${locale}`} className="flex items-center">
              <img
                src="/tracy/opentracy-logo.png"
                alt="OpenTracy"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => {
                const isActive = isActiveNavItem(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    className={`text-sm transition-colors ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 mr-2">
              {i18n.locales.map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    loc === locale
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>
            <ThemeToggle />
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
              <span>Star</span>
              <span className="github-stars-count">{starCount}</span>
            </Link>
            <Button
              href="https://app.opentracy.com"
              variant="primary"
              className="text-sm py-2 px-4"
            >
              {dict.nav.getStarted}
            </Button>
          </div>
          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-foreground"
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
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => {
                const isActive = isActiveNavItem(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    className={`text-sm py-1 transition-colors ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex items-center gap-1 py-2">
                {i18n.locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    className={`text-xs px-2 py-1 rounded transition-colors ${
                      loc === locale
                        ? "bg-accent text-white"
                        : "text-muted hover:text-foreground hover:bg-surface"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {localeLabels[loc]}
                  </Link>
                ))}
              </div>
              <ThemeToggle />
              <Button
                href="https://app.opentracy.com"
                variant="primary"
                className="text-sm w-fit mt-2"
              >
                {dict.nav.getStarted}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
