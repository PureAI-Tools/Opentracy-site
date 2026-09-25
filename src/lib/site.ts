// Service destinations remain configurable independently of the public brand.
export const site = {
  name: "Lunar",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lunar-sys.com",
  app: process.env.NEXT_PUBLIC_APP_URL || "https://app.opentracy.cloud/traces",
  demo: process.env.NEXT_PUBLIC_DEMO_URL || "https://cal.com/opentracy/30min-demo",
  github: "https://github.com/lunar-org-ai/lunar-router",
  discord: "https://discord.gg/gDNPhQ347V",
};
