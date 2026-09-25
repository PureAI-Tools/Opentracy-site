import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { lunarCopy } from "@/i18n/lunar";
import { getDictionary } from "@/i18n/getDictionary";
import { site } from "@/lib/site";
import { LunarMoon } from "@/components/LogoMark";
import Icon from "@/components/Icon";
import CommunityLinks from "@/components/CommunityLinks";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; const d = await getDictionary(locale as Locale);
  return { title: `${d.community.title} — Lunar`, description: d.community.subtitle };
}
export default async function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; const c = lunarCopy[locale as Locale] || lunarCopy.en;
  const copy = {
    en: { title: "Built in the open. Better together.", text: "A place for curious developers, first-time contributors, and people who care about better AI infrastructure.", contribute: "Your first contribution starts here.", detail: "Found a bug? Have an idea? Open an issue, read the code, or help someone get started. Every contribution counts.", issues: "Explore the issues" },
    pt: { title: "Aberta por natureza. Melhor em comunidade.", text: "Um lugar para devs curiosos, primeiras contribuições e pessoas que querem uma infraestrutura de IA melhor.", contribute: "Sua primeira contribuição começa aqui.", detail: "Achou um bug? Teve uma ideia? Abra uma issue, explore o código ou ajude alguém a começar. Toda contribuição conta.", issues: "Explorar as issues" },
    es: { title: "Abierta por naturaleza. Mejor en comunidad.", text: "Un lugar para desarrolladores curiosos, primeras contribuciones y personas que quieren una mejor infraestructura de IA.", contribute: "Tu primera contribución empieza aquí.", detail: "¿Encontraste un bug? ¿Tienes una idea? Abre una issue, explora el código o ayuda a alguien a empezar. Cada contribución cuenta.", issues: "Explorar las issues" },
  }[locale as Locale] || { title: c.community, text: c.openText, contribute: c.openTitle, detail: c.openText, issues: c.openCta };
  return <div className="lunar-start"><div className="lunar-container"><div className="lunar-page-heading"><LunarMoon className="community-moon" /><h1>{copy.title}</h1><p className="lunar-page-intro">{copy.text}</p></div><CommunityLinks locale={locale as Locale} /><div className="community-contribute"><div><h2>{copy.contribute}</h2><p>{copy.detail}</p></div><a href={site.github + "/issues"} className="lunar-button lunar-button-dark">{copy.issues}<Icon name="arrow" /></a></div><div className="start-help"><Link href={`/${locale}/docs`} className="lunar-text-link">{c.docs}<Icon name="arrow" /></Link></div></div></div>;
}
