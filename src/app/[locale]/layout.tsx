import { notFound } from "next/navigation";
import { aiLabCopy } from "@/i18n/aiLab";
import LocaleLanguage from "@/components/LocaleLanguage";
import type { Metadata } from "next";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!i18n.locales.includes(locale as Locale)) notFound();

  return {
    title: `Lunar — ${aiLabCopy[locale as Locale].headline.join(" ")}`,
    description: aiLabCopy[locale as Locale].intro,
    openGraph: { title: `Lunar — ${aiLabCopy[locale as Locale].headline.join(" ")}`, description: aiLabCopy[locale as Locale].intro, locale, siteName: "Lunar", images: [{ url: "/og-lunar.png", width: 1200, height: 630, alt: "Lunar — RL environments & Small Language Models" }] },
    twitter: { card: "summary_large_image", title: `Lunar — ${aiLabCopy[locale as Locale].headline.join(" ")}`, description: aiLabCopy[locale as Locale].intro, images: ["/og-lunar.png"] },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!i18n.locales.includes(locale as Locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <LocaleLanguage locale={locale as Locale} />
      <Navbar locale={locale as Locale} dict={dict} />
      <main id="main-content" lang={locale === "pt" ? "pt-BR" : locale} tabIndex={-1}>{children}</main>
      <Footer locale={locale as Locale} dict={dict} />
    </>
  );
}
