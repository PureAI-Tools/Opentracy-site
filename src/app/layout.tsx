import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://opentracy.com"),
  title: "OpenTracy — One API for Every LLM",
  description:
    "Route requests to 13+ LLM providers through a single API. Track costs, measure quality, and optimize your AI infrastructure. Open source.",
  keywords: [
    "LLM",
    "LLM router",
    "AI gateway",
    "LLM proxy",
    "OpenAI alternative",
    "AI infrastructure",
    "LLM observability",
    "model evaluation",
  ],
  openGraph: {
    title: "OpenTracy — One API for Every LLM",
    description:
      "Route to 13+ providers, track costs, measure quality. Open source AI infrastructure.",
    type: "website",
    url: "https://opentracy.com",
    siteName: "OpenTracy",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenTracy — One API for Every LLM",
    description:
      "Route to 13+ providers, track costs, measure quality. Open source AI infrastructure.",
  },
  alternates: {
    canonical: "https://opentracy.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://opentracy.com/#organization",
                  name: "OpenTracy",
                  url: "https://opentracy.com",
                  description:
                    "Open source LLM gateway. Route, observe, evaluate, and optimize AI infrastructure.",
                  sameAs: [
                    "https://github.com/PureAI-Tools/opentracy",
                    "https://discord.gg/thyZx5GkFV",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://opentracy.com/#website",
                  url: "https://opentracy.com",
                  name: "OpenTracy",
                  publisher: {
                    "@id": "https://opentracy.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
