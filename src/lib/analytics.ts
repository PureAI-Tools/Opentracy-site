import { createContext, useContext } from "react";
import type { PostHog } from "posthog-js";

/**
 * Analytics is opt-in. PostHog only loads when both are set at build time:
 *   NEXT_PUBLIC_POSTHOG_ENABLED=true
 *   NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_...
 * Anything else (unset, "false", missing token) keeps it fully off: no script,
 * no network calls, and every capture() becomes a no-op.
 */
export const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ?? "";
export const posthogEnabled =
  process.env.NEXT_PUBLIC_POSTHOG_ENABLED === "true" && posthogToken !== "";

export type AnalyticsClient = Pick<PostHog, "capture">;

export const AnalyticsContext = createContext<AnalyticsClient | undefined>(undefined);

/** Returns the analytics client, or undefined when analytics is disabled. */
export function useAnalytics(): AnalyticsClient | undefined {
  return useContext(AnalyticsContext);
}
