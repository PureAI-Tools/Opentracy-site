"use client";

import dynamic from "next/dynamic";
import { posthogEnabled } from "@/lib/analytics";

// Loaded on demand so posthog-js stays out of the bundle when analytics is off.
const PostHogClient = dynamic(() => import("./PostHogClient"));

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  if (!posthogEnabled) return <>{children}</>;
  return <PostHogClient>{children}</PostHogClient>;
}
