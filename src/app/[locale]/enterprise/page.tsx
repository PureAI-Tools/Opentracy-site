import type { Metadata } from "next";
import { site } from "@/lib/site";
import { i18n, type Locale } from "@/i18n/config";
import { researchLabCopy } from "@/i18n/researchLab";
import { rlEnvironmentCopy } from "@/i18n/rlEnvironment";
import Icon from "@/components/Icon";
import { LunarMoon } from "@/components/LogoMark";
import ResearchMotion from "@/components/research/ResearchMotion";
import LabOrbit from "@/components/research/LabOrbit";
import LabBench from "@/components/research/LabBench";

export function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = researchLabCopy[locale as Locale] || researchLabCopy.en;
  const title = "Super cool AI lab — Lunar";
  return {
    title, description: c.meta,
    alternates: { canonical: `${site.url}/${locale}/enterprise`, languages: Object.fromEntries(i18n.locales.map(lang => [lang, `${site.url}/${lang}/enterprise`])) },
    openGraph: { title, description: c.meta, images: [{ url: "/og-lunar-lab.png", width: 1200, height: 630, alt: "Super cool AI lab — Lunar" }] },
    twitter: { card: "summary_large_image", title, description: c.meta, images: ["/og-lunar-lab.png"] },
  };
}

export default async function EnterprisePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = researchLabCopy[locale as Locale] || researchLabCopy.en;
  return <ResearchMotion>
    <section className="research-hero">
      <div className="lunar-container research-hero-grid">
        <div className="research-hero-copy">
          <p className="research-eyebrow"><span aria-hidden="true"><Icon name="asterisk" size="1em" /></span>{c.eyebrow}</p>
          <h1>Super cool<br /><span>AI lab<span className="research-title-star" aria-hidden="true"><Icon name="asterisk" size="1em" /></span></span></h1>
          <p className="research-belief">{c.belief}</p>
          <p className="research-intro">{c.intro}</p>
          <div className="research-hero-actions"><a className="lunar-button lunar-button-dark" href={site.demo}>{c.primary}<Icon name="arrow" size={17} /></a><a className="research-explore" href="#core-delivery">{c.explore}<span aria-hidden="true"><Icon name="arrow-down-right" size="1em" /></span></a></div>
        </div>
        <div className="research-hero-art"><span className="research-sticker">{c.sticker}<span aria-hidden="true"><Icon name="star" size="1em" /></span></span><LabOrbit copy={c.orbit} /></div>
      </div>
      <div className="research-topics"><div className="lunar-container">{["AI agents", "RL environments", "Evaluations", "Small Language Models"].map(word => <span key={word}><span aria-hidden="true"><Icon name="asterisk" size="1em" /></span>{word}</span>)}</div></div>
    </section>

    <section className="research-workbench lunar-container" id="core-delivery">
      <div className="research-section-heading research-reveal"><p>{c.bench.label}</p><h2>{c.bench.title[0]}<br />{c.bench.title[1]}</h2><span>{c.bench.intro}</span></div>
      <div className="research-reveal"><LabBench copy={c} rlCopy={rlEnvironmentCopy[locale as Locale] || rlEnvironmentCopy.en} /></div>
    </section>

    <section className="research-principles">
      <div className="lunar-container">
        <div className="research-principles-heading research-reveal"><span className="principles-asterisk" aria-hidden="true"><Icon name="asterisk" size="1em" /></span><h2>{c.principlesTitle[0]}<br />{c.principlesTitle[1]}</h2></div>
        <div className="research-principle-grid research-reveal">{c.principles.map((principle, index) => <article key={principle.title}><div className={`principle-graphic principle-graphic-${index}`} aria-hidden="true">{index === 0 ? <><span className="boundary-box"><Icon name="shield" size={48} /></span><i /><i /></> : index === 1 ? <><span className="feedback-orbit" /><Icon name="route" size={58} /><i /></> : <><span className="evidence-sheet"><Icon name="check" size={26} /><span /><span /><span /></span><span className="evidence-star"><Icon name="star" size="1em" /></span></>}</div><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div>
      </div>
    </section>

    <section className="research-contact" id="contact"><div className="lunar-container research-contact-grid research-reveal"><div><h2>{c.closing[0]}<br />{c.closing[1]}</h2><p>{c.closingText}</p><div className="research-contact-actions"><a href={site.demo} className="lunar-button lunar-button-dark">{c.contact}<Icon name="arrow" /></a><a href={site.github} className="research-explore"><Icon name="github" size={18} />{c.github}</a></div><span className="research-contact-note">{c.footnote}</span></div><div className="research-contact-moon" aria-hidden="true"><LunarMoon /><span>stay curious.</span><i><Icon name="spark" size="1em" /></i></div></div></section>
  </ResearchMotion>;
}
