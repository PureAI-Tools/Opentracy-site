"use client";

import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { AnalyticsContext, posthogToken } from "@/lib/analytics";

// Initialise at module scope so the client is ready before any child effect
// (e.g. the first $pageview) runs. This module is only imported when analytics
// is enabled, see PostHogProvider.
if (typeof window !== "undefined" && !posthog.__loaded) {
  posthog.init(posthogToken, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
    capture_exceptions: true,
    capture_pageview: false, // manual pageview via PostHogPageView
    capture_pageleave: true,
    person_profiles: "always",
    debug: process.env.NODE_ENV === "development",
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    let url = window.origin + pathname;
    const search = searchParams.toString();
    if (search) url += "?" + search;
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogClient({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsContext.Provider value={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </AnalyticsContext.Provider>
  );
}
