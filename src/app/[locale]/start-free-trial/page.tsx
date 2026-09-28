import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { lunarCopy } from "@/i18n/lunar";
import { site } from "@/lib/site";
import LogoMark from "@/components/LogoMark";
import OptionalLink from "@/components/OptionalLink";
import Icon from "@/components/Icon";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; const c = lunarCopy[locale as Locale] || lunarCopy.en;
  return { title: `${c.startTitle} — Lunar`, description: c.startIntro };
}
export default async function StartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; const c = lunarCopy[locale as Locale] || lunarCopy.en;
  return <div className="lunar-start"><div className="lunar-container"><div className="lunar-page-heading"><LogoMark size={50} /><h1>{c.startTitle}</h1><p className="lunar-page-intro">{c.startIntro}</p></div>
    <div className="start-options"><article className="start-option"><Icon name="globe" size={30} /><h2>{c.cloud}</h2><p>{c.cloudText}</p><a href={site.app} className="lunar-button lunar-button-dark">{c.cloudCta}<Icon name="external" size={16} /></a></article><article className="start-option"><Icon name="terminal" size={30} /><h2>{c.selfhost}</h2><p>{c.selfhostText}</p><OptionalLink locale={locale as Locale} href={site.github ? site.github + "#readme" : null} className="lunar-button lunar-button-outline">{c.selfhostCta}<Icon name="arrow" size={16} /></OptionalLink></article></div>
    <div className="start-help"><Link href={`/${locale}/docs`} className="lunar-text-link"><Icon name="book" size={16} />{c.docs}<Icon name="arrow" size={16} /></Link></div>
  </div></div>;
}
