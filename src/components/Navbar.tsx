"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";
import Button from "./Button";

const navigation = [
  { name: "Docs", href: "/docs" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#333333] bg-black/90 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <LogoMark size={24} />
              <span className="font-mono text-sm font-bold uppercase tracking-wider">
                Lunar
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/security"
              className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
            >
              Security
            </Link>
            <Button href="https://app.lunar-sys.com" variant="secondary" className="text-xs py-2 px-3">
              Get Started
            </Button>
          </div>
          <button
            type="button"
            className="md:hidden p-2 text-[#888888] hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#333333] py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-mono text-sm uppercase tracking-wider text-[#888888] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/security"
                className="font-mono text-sm uppercase tracking-wider text-[#888888] hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </Link>
              <Button href="https://app.lunar-sys.com" variant="secondary" className="text-sm w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
