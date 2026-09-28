import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { Locale } from "@/i18n/config";

const unavailableCopy = {
  en: { status: "Coming soon", reason: "This link is temporarily unavailable." },
  pt: { status: "Em breve", reason: "Este link está temporariamente indisponível." },
  es: { status: "Próximamente", reason: "Este enlace no está disponible temporalmente." },
};

export function UnavailableLink({ children, className = "", locale = "en", block = false }: {
  children: ReactNode;
  className?: string;
  locale?: Locale;
  block?: boolean;
}) {
  const copy = unavailableCopy[locale];
  const Tag = block ? "div" : "span";
  return <Tag role="link" aria-disabled="true" title={copy.reason} className={`${className} site-link-unavailable`}>
    {children}<small className="site-link-status">{copy.status}</small>
  </Tag>;
}

type OptionalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string | null;
  locale: Locale;
  block?: boolean;
};

export default function OptionalLink({ href, locale, children, className, block, ...props }: OptionalLinkProps) {
  // An unavailable destination has no href, keyboard action, or click handler.
  if (!href) return <UnavailableLink locale={locale} className={className} block={block}>{children}</UnavailableLink>;
  return <Link href={href} className={className} {...props}>{children}</Link>;
}
