"use client";

import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import type { Locale, Dictionary } from "@/i18n/config";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const posthog = usePostHog();
  const footerLinks: Record<
    string,
    Array<{ name: string; href: string; newTab?: boolean }>
  > = {
    [dict.footer.product]: [
      { name: dict.footer.features, href: `/${locale}#features` },
      { name: dict.footer.platform, href: `/${locale}/platform` },
      { name: dict.footer.pricing, href: `/${locale}/pricing` },
      {
        name: dict.footer.docs,
        href: "/docs",
      },
      { name: dict.footer.security, href: `/${locale}/security` },
    ],
    [dict.footer.resources]: [
      { name: dict.footer.blog, href: `/${locale}/blog` },
      { name: dict.footer.community, href: `/${locale}/community` },
      {
        name: dict.footer.github,
        href: "https://github.com/lunar-org-ai/lunar-router",
      },
      { name: dict.footer.discord, href: "https://discord.gg/gDNPhQ347V" },
    ],
    [dict.footer.legal]: [
      { name: dict.footer.privacy, href: `/${locale}/privacy` },
      { name: dict.footer.terms, href: `/${locale}/terms` },
    ],
  };

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center">
              <img
                src="/tracy/opentracy-logo.png"
                alt="OpenTracy"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 text-xs text-muted max-w-xs leading-tight">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                {category}
              </h3>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.newTab ? "_blank" : undefined}
                      rel={link.newTab ? "noopener noreferrer" : undefined}
                      className="text-xs text-muted hover:text-foreground transition-colors duration-200"
                      onClick={() => {
                        if (link.href.startsWith("http")) {
                          posthog?.capture("footer_external_link_clicked", {
                            href: link.href,
                            label: link.name,
                          });
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-muted text-center sm:text-left order-2 sm:order-1">
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </p>
          <div className="flex items-center gap-4 order-1 sm:order-2">
            <Link
              href="https://github.com/lunar-org-ai/lunar-router"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
              onClick={() =>
                posthog?.capture("footer_social_clicked", {
                  href: "https://github.com/lunar-org-ai/lunar-router",
                  label: "GitHub",
                })
              }
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://discord.gg/gDNPhQ347V"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Discord"
              onClick={() =>
                posthog?.capture("footer_social_clicked", {
                  href: "https://discord.gg/gDNPhQ347V",
                  label: "Discord",
                })
              }
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
