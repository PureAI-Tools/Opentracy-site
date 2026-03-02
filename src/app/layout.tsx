import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lunar-sys.com"),
  title: "Lunar — Cut LLM Costs by 57% with Small Models",
  description:
    "Lunar automates curation, distillation, evaluation, and deployment of Small Language Models from production traces. Ship faster with predictable latency.",
  keywords: [
    "LLM",
    "Small Language Models",
    "SLM",
    "distillation",
    "inference cost",
    "AI infrastructure",
  ],
  openGraph: {
    title: "Lunar — Cut LLM Costs by 57% with Small Models",
    description:
      "Automate curation, distillation, evaluation, and deployment. Ship faster with predictable latency.",
    type: "website",
    url: "https://lunar-sys.com",
    siteName: "Lunar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunar — Cut LLM Costs by 57% with Small Models",
    description:
      "Automate curation, distillation, evaluation, and deployment. Ship faster with predictable latency.",
  },
  alternates: {
    canonical: "https://lunar-sys.com",
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
                  "@id": "https://lunar-sys.com/#organization",
                  name: "Lunar",
                  url: "https://lunar-sys.com",
                  description:
                    "Lunar automates distillation, evaluation, and deployment of Small Language Models from production traces.",
                  sameAs: [
                    "https://github.com/lunar-ai",
                    "https://discord.gg/thyZx5GkFV",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://lunar-sys.com/#website",
                  url: "https://lunar-sys.com",
                  name: "Lunar",
                  publisher: {
                    "@id": "https://lunar-sys.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
