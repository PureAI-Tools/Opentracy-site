import type { Metadata } from "next";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n/config";
import { aiLabCopy } from "@/i18n/aiLab";
import { rlEnvironmentCopy } from "@/i18n/rlEnvironment";
import { site } from "@/lib/site";
import Icon, { type IconName } from "@/components/Icon";
import { LunarMoon } from "@/components/LogoMark";
import AILabProject from "@/components/AILabProject";
import FullscreenImage from "@/components/FullscreenImage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: { canonical: `${site.url}/${locale}`, languages: Object.fromEntries(i18n.locales.map(lang => [lang, `${site.url}/${lang}`])) } };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = aiLabCopy[locale as Locale] || aiLabCopy.en;
  const capabilityIcons: IconName[] = ["route", "code"];
  const scopeIcons: IconName[] = ["route", "code", "trace", "shield"];
  const serviceIcons: IconName[] = ["book", "trace", "shield", "code"];

  return <div className="lunar-home lab-home">
    <section className="lunar-hero">
      <div className="lunar-container">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="lunar-announcement"><span className="announcement-spark" aria-hidden="true"><Icon name="asterisk" size="1em" /></span>{c.badge}</span>
            <h1>{c.headline[0]}<br />{c.headline[1]}</h1>
            <p className="hero-intro">{c.intro}</p>
            <div className="hero-actions">
              <a href={site.demo} className="lunar-button lunar-button-yellow">{c.primary}<Icon name="arrow" /></a>
              <a href="#what-we-build" className="lunar-button lunar-button-outline">{c.secondary}</a>
            </div>
            <p className="hero-note">{c.note}</p>
            <ul className="lab-hero-trust">{c.trust.map(item => <li key={item}><Icon name="check" size={14} />{item}</li>)}</ul>
          </div>
          <div className="hero-product"><LunarMoon className="hero-moon" /><AILabProject copy={c.project} animationCopy={rlEnvironmentCopy[locale as Locale] || rlEnvironmentCopy.en} /></div>
        </div>
        <div className="lab-scope"><p>{c.scopeIntro}</p><div>{c.scope.map((item, index) => <span key={item}><Icon name={scopeIcons[index]} size={20} />{item}</span>)}</div></div>
      </div>
    </section>

    <section className="lunar-section lunar-features" id="what-we-build">
      <div className="lunar-container">
        <div className="lunar-section-heading"><h2>{c.capabilitiesTitle}</h2><p>{c.capabilitiesIntro}</p></div>
        <div className="lunar-feature-grid">
          {c.capabilities.map((item, index) => <article key={item.label} className={`lunar-feature lab-capability feature-${index}`}>
            <div className="lab-capability-label"><span className="lunar-feature-icon"><Icon name={capabilityIcons[index]} size={24} /></span><span>{item.label}</span></div>
            <h3>{item.title}</h3><p>{item.description}</p>
            <ul>{item.items.map(text => <li key={text}><Icon name="check" size={14} />{text}</li>)}</ul>
          </article>)}
        </div>
        <div className="lab-capabilities-link"><Link href={`/${locale}/enterprise#core-delivery`} className="lunar-text-link">{c.capabilitiesLink}<Icon name="arrow" size={16} /></Link></div>
        <div className="lab-services"><h3>{c.servicesTitle}</h3><div>{c.support.map((service, index) => <article key={service.title}><Icon name={serviceIcons[index]} size={20} /><div><h4>{service.title}</h4><p>{service.description}</p></div></article>)}</div></div>
      </div>
    </section>

    <section className="lunar-section" id="how-we-work">
      <div className="lunar-container lab-process">
        <div><h2>{c.processTitle}</h2><p className="workflow-intro">{c.processIntro}</p><ol className="lunar-steps">{c.steps.map((step, index) => <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div>
        <div className="lab-handoff"><div className="lab-handoff-top"><Icon name="book" size={19} /><span>Lunar / AI Lab</span><span aria-hidden="true"><Icon name="asterisk" size="1em" /></span></div><h3>{c.deliverablesTitle}</h3><ul>{c.deliverables.map(item => <li key={item}><span><Icon name="check" size={15} /></span>{item}</li>)}</ul><p>{c.deliverablesNote}</p></div>
      </div>
    </section>

    <section className="lab-infrastructure"><div className="lunar-container"><div className="lab-infrastructure-panel"><span className="lab-infrastructure-icon"><Icon name="shield" size={32} /></span><div><h2>{c.infrastructureTitle}</h2><p>{c.infrastructureText}</p><ul>{c.infrastructureTags.map(tag => <li key={tag}><Icon name="check" size={14} />{tag}</li>)}</ul></div></div></div></section>

    <section className="lunar-section" id="our-technology">
      <div className="lunar-container lab-technology"><div><span className="lunar-section-label"><Icon name="terminal" size={16} />{c.nav.technology}</span><h2>{c.technologyTitle}</h2><p>{c.technologyText}</p><Link href={`/${locale}/platform`} className="lunar-text-link">{c.technologyLink}<Icon name="arrow" size={16} /></Link></div><figure><div className="lab-technology-image"><FullscreenImage src="/screenshots/eval-overview.png" alt={c.screenshotAlt} className="lunar-product-image" /></div><figcaption>{c.screenshotCaption}</figcaption></figure></div>
    </section>

    <section className="lunar-section lunar-faq lab-faq"><div className="lunar-container faq-grid"><div><h2>{c.faqTitle}</h2><p><a href={site.demo}>{c.nav.contact}<Icon name="external" size={13} /></a></p></div><div>{c.faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

    <section className="lunar-last-cta" id="contact"><div className="lunar-container"><span className="cta-star" aria-hidden="true"><Icon name="asterisk" size="1em" /></span><h2>{c.ctaTitle}</h2><p>{c.ctaText}</p><div><a href={site.demo} className="lunar-button lunar-button-dark">{c.primary}<Icon name="arrow" size={17} /></a></div><p className="lab-cta-note">{c.ctaNote}</p></div></section>
  </div>;
}
