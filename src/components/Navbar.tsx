"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";
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

  const navigation = [
    { name: dict.nav.features, href: `/${locale}#features` },
    { name: dict.nav.docs, href: `/${locale}/docs` },
    { name: dict.nav.pricing, href: `/${locale}/pricing` },
    { name: dict.nav.blog, href: `/${locale}/blog` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5e5e5] bg-white/90 backdrop-blur-md">
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
                  className="text-sm text-[#666] hover:text-[#111] transition-colors"
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
                      ? "bg-[#0070f3] text-white"
                      : "text-[#888] hover:text-[#111] hover:bg-[#f0f0f0]"
                  }`}
                >
                  {localeLabels[loc]}
                </Link>
              ))}
            </div>
            <Button
              href="https://github.com/PureAI-Tools/opentracy"
              variant="ghost"
              className="text-sm"
            >
              {dict.nav.github}
            </Button>
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
            className="md:hidden p-2 text-[#666] hover:text-[#111]"
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
          <div className="md:hidden border-t border-[#e5e5e5] py-4">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#666] hover:text-[#111] py-1"
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
                        ? "bg-[#0070f3] text-white"
                        : "text-[#888] hover:text-[#111] hover:bg-[#f0f0f0]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {localeLabels[loc]}
                  </Link>
                ))}
              </div>
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
