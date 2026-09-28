"use client";

import Link from "next/link";
import { useAnalytics } from "@/lib/analytics";
import type { Locale } from "@/i18n/config";
import { UnavailableLink } from "./OptionalLink";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string | null;
  locale?: Locale;
  newTab?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  posthogProps?: Record<string, string | number | boolean | null>;
}

export default function Button({
  children,
  variant = "primary",
  href,
  locale = "en",
  newTab = false,
  className = "",
  onClick,
  type = "button",
  posthogProps,
}: ButtonProps) {
  const posthog = useAnalytics();
  const baseStyles = "btn inline-flex items-center justify-center gap-2";

  function trackCta(label: string) {
    posthog?.capture("cta_clicked", {
      label,
      href: href ?? null,
      variant,
      ...posthogProps,
    });
  }
  const variantStyles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href === null) {
    return <UnavailableLink locale={locale} className={combinedClassName}>{children}</UnavailableLink>;
  }

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        onClick={() => trackCta(typeof children === "string" ? children : href)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={() => {
        trackCta(typeof children === "string" ? children : type);
        onClick?.();
      }}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
