import Link from "next/link";
import type { Locale, Dictionary } from "@/i18n/config";
import { aiLabCopy } from "@/i18n/aiLab";
import { site } from "@/lib/site";
import { LunarWordmark } from "./LogoMark";
import Icon from "./Icon";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = aiLabCopy[locale];
  const groups = [
    { title: "AI Lab", links: [[c.nav.solutions, `/${locale}#what-we-build`], [c.nav.process, `/${locale}#how-we-work`], ["Super cool AI lab", `/${locale}/enterprise`], [c.nav.contact, site.demo]] },
    { title: c.nav.technology, links: [[dict.footer.platform, `/${locale}/platform`], [dict.footer.docs, `/${locale}/docs`], [dict.footer.community, `/${locale}/community`], ["GitHub", site.github]] },
    { title: dict.footer.legal, links: [[dict.footer.security, `/${locale}/security`], [dict.footer.privacy, `/${locale}/privacy`], [dict.footer.terms, `/${locale}/terms`]] },
  ];
  return <footer className="lunar-footer"><div className="lunar-container">
    <div className="lunar-footer-grid"><div className="lunar-footer-brand"><Link className="lunar-wordmark" href={`/${locale}`} aria-label="Lunar"><LunarWordmark /></Link><p>{c.footerTagline}</p><a href={site.demo} className="lunar-open-source">{c.nav.contact}<Icon name="arrow" size={15} /></a></div>
    {groups.map(group => <div key={group.title}><h3>{group.title}</h3><ul>{group.links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></div>)}</div>
    <div className="lunar-footer-bottom"><span>© {new Date().getFullYear()} Lunar.</span><span>Enterprise AI Lab<span aria-hidden="true"><Icon name="asterisk" size="1em" /></span></span></div>
  </div></footer>;
}
