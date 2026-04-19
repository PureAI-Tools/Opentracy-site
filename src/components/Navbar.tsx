"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";
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

  const navigation = [
    { name: dict.nav.features, href: `/${locale}#features` },
    { name: dict.nav.platform, href: `/${locale}/platform` },
    { name: dict.nav.docs, href: `/${locale}/docs` },
    { name: dict.nav.pricing, href: `/${locale}/pricing` },
    { name: dict.nav.blog, href: `/${locale}/blog` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href={`/${locale}`} className="flex items-center gap-2.5">
              <LogoMark size={22} />
              <span className="text-sm font-semibold tracking-tight">
                OpenTracy
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
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
                      ? "bg-[var(--color-accent)] text-white"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]"
                  }`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>
            <ThemeToggle />
            {/* GitHub with star count */}
            <Link
              href="https://github.com/lunar-org-ai/lunar-router"
              className="github-stars-badge"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>Star</span>
              <span className="github-stars-count">1.2k</span>
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
            className="md:hidden p-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
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
          <div className="md:hidden border-t border-[var(--color-border)] py-4">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-1 py-2">
                {i18n.locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    className={`text-xs px-2 py-1 rounded transition-colors ${
                      loc === locale
                        ? "bg-[var(--color-accent)] text-white"
                        : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]"
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
