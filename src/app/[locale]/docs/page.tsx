import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { lunarCopy } from "@/i18n/lunar";
import { site } from "@/lib/site";
import OptionalLink from "@/components/OptionalLink";
import Icon from "@/components/Icon";
import LunarCode from "@/components/LunarCode";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; const c = lunarCopy[locale as Locale] || lunarCopy.en;
  return { title: `${c.docs} — Lunar`, description: c.docsIntro };
}
export default async function DocsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; const c = lunarCopy[locale as Locale] || lunarCopy.en; const d = await getDictionary(locale as Locale);
  const categories = Object.values(d.docs.categories);
  const destinations = ["/docs/quickstart", "/docs", "/docs", `/${locale}/platform#traces`, `/${locale}/platform#evals`, site.github ? site.github + "#readme" : null];
  return <div className="lunar-docs"><div className="lunar-container"><div className="lunar-page-heading"><h1>{c.docsTitle}</h1><p className="lunar-page-intro">{c.docsIntro}</p></div>
    <div className="docs-quickstart"><div><h2>{d.docs.quickstart}</h2><ol className="lunar-steps">{c.steps.map((step, i) => <li key={step.title}><span>{i + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><Link href="/docs/quickstart" className="lunar-button lunar-button-yellow">{c.apiGuide}<Icon name="arrow" /></Link></div><LunarCode copy={c} /></div>
    <div className="docs-links">{categories.map((category, i) => <OptionalLink block locale={locale as Locale} href={destinations[i]} key={category.title}><h3>{category.title}</h3><p>{category.description}</p></OptionalLink>)}</div><div className="start-help"><a href={site.discord} className="lunar-text-link">{c.docsHelp}<Icon name="external" size={14} /></a></div>
  </div></div>;
}
