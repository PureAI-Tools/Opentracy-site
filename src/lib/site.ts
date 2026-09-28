// Service destinations remain configurable independently of the public brand.
export const site = {
  name: "Lunar",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lunar-sys.com",
  app: process.env.NEXT_PUBLIC_APP_URL || "https://app.opentracy.cloud/traces",
  // Keep these unavailable until the final URLs are confirmed.
  // Null also prevents stale deployment environment variables from enabling them.
  demo: null as string | null,
  github: null as string | null,
  discord: "https://discord.gg/gDNPhQ347V",
};
