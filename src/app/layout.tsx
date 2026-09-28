import type { Metadata } from "next";
import { DM_Mono, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./lunar.css";
import "./ai-lab.css";
import "./rl-environment.css";
import "./research-lab.css";
import { site } from "@/lib/site";
import { PostHogProvider } from "@/components/PostHogProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Lunar — RL environments & Small Language Models",
  description:
    "Custom reinforcement learning environments and Small Language Models for your business tasks. From environment design and training to evaluation and deployment.",
  keywords: [
    "Small Language Models",
    "Enterprise AI lab",
    "custom AI development",
    "reinforcement learning",
    "RL environments",
    "AI infrastructure",
    "model distillation",
    "model evaluation",
  ],
  openGraph: {
    title: "Lunar — RL environments & Small Language Models",
    description:
      "Your AI lab for custom RL environments and Small Language Models. Built with your team, on your data and infrastructure.",
    type: "website",
    url: site.url,
    siteName: "Lunar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunar — RL environments & Small Language Models",
    description:
      "Your AI lab for custom RL environments and Small Language Models. Built with your team, on your data and infrastructure.",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${dmMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <PostHogProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": `${site.url}/#organization`,
                    name: "Lunar",
                    url: site.url,
                    description:
                      "Enterprise AI lab specializing in reinforcement learning environments and Small Language Models, from training to evaluation and deployment.",
                    sameAs: [
                      ...(site.github ? [site.github] : []),
                      site.discord,
                    ],
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${site.url}/#website`,
                    url: site.url,
                    name: "Lunar",
                    publisher: {
                      "@id": `${site.url}/#organization`,
                    },
                  },
                ],
              }),
            }}
          />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
