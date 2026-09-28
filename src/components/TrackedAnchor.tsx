"use client";

import { useAnalytics } from "@/lib/analytics";
import type { Locale } from "@/i18n/config";
import { UnavailableLink } from "./OptionalLink";

interface TrackedAnchorProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href?: string | null;
  locale?: Locale;
  posthogEvent?: string;
  posthogProps?: Record<string, string | number | boolean | null>;
}

export default function TrackedAnchor({
  posthogEvent = "link_clicked",
  posthogProps,
  onClick,
  href,
  locale = "en",
  ...props
}: TrackedAnchorProps) {
  const posthog = useAnalytics();

  if (href === null) {
    return <UnavailableLink locale={locale} className={props.className}>{props.children}</UnavailableLink>;
  }

  return (
    <a
      {...props}
      href={href}
      onClick={(e) => {
        posthog?.capture(posthogEvent, {
          href: href ?? null,
          ...posthogProps,
        });
        onClick?.(e);
      }}
    />
  );
}
