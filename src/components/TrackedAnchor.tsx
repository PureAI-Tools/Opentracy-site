"use client";

import { usePostHog } from "posthog-js/react";

interface TrackedAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  posthogEvent?: string;
  posthogProps?: Record<string, string | number | boolean | null>;
}

export default function TrackedAnchor({
  posthogEvent = "link_clicked",
  posthogProps,
  onClick,
  ...props
}: TrackedAnchorProps) {
  const posthog = usePostHog();

  return (
    <a
      {...props}
      onClick={(e) => {
        posthog?.capture(posthogEvent, {
          href: props.href ?? null,
          ...posthogProps,
        });
        onClick?.(e);
      }}
    />
  );
}
