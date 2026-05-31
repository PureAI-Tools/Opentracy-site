import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import FadeIn from "@/components/motion/FadeIn";
import TextReveal from "@/components/motion/TextReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { getDictionary } from "@/i18n/getDictionary";
import { i18n } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.enterprise.meta.title,
    description: dict.enterprise.meta.description,
  };
}

const DEMO_URL = "https://cal.com/opentracy/30min-demo";

const IconGear = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="2.5" />
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" />
  </svg>
);
const IconDollar = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2v16M14 5H8a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H6" />
  </svg>
);
const IconHeart = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 17s-8-5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5-8 10-8 10Z" />
  </svg>
);
const IconScale = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 3v14M5 17h10" />
    <path d="M3 7l4 6M17 7l-4 6" />
    <path d="M3 7h4M13 7h4" />
  </svg>
);
const IconCode = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 7 2 10 6 13" />
    <polyline points="14 7 18 10 14 13" />
    <path d="M11 4 9 16" />
  </svg>
);
const IconSupport = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Z" />
    <path d="M7 7a3 3 0 0 1 6 2c0 2-3 3-3 3M10 15v.5" />
  </svg>
);
const IconChart = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 14l4-5 4 3 5-7" />
    <path d="M3 17h14" />
  </svg>
);
const IconShield = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2 3 5v5c0 4 3 7 7 8 4-1 7-4 7-8V5l-7-3Z" />
  </svg>
);

/* ── Domain icon list (index-based, order matches dictionary items) ── */
const domainIconsList: React.ReactElement[] = [
  <IconGear key="0" />,
  <IconDollar key="1" />,
  <IconHeart key="2" />,
  <IconScale key="3" />,
  <IconCode key="4" />,
  <IconSupport key="5" />,
  <IconChart key="6" />,
  <IconShield key="7" />,
];

/* ── Utility icons ── */
const arrowIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-7-7 7 7-7 7"
    />
  </svg>
);
const checkSvg = (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="2 6 5 9 10 3" />
  </svg>
);

export default async function EnterprisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const e = dict.enterprise;

  return (
    <div className="enterprise-page enterprise-pitch-page">
      {/* ── HERO: single-column, no image ── */}
      <section className="enterprise-hero enterprise-hero-simple">
        <Container>
          <div className="ep-hero-inner">
            <FadeIn delay={0} y={16}>
              <span className="badge badge-new inline-flex items-center gap-2">
                <span className="badge-new-dot" />
                <span>{e.hero.badge}</span>
              </span>
            </FadeIn>
            <TextReveal delay={0.08}>
              <h1 className="ep-hero-h1 mt-5">
                {e.hero.title1}
                <br />
                {e.hero.title2}
              </h1>
            </TextReveal>
            <FadeIn delay={0.22} y={8}>
              <p className="ep-hero-sub mt-5">{e.hero.subtitle}</p>
            </FadeIn>
            <FadeIn delay={0.36} y={10}>
              <div className="ep-hero-actions mt-8">
                <Button
                  href="https://cal.com/opentracy/30min-demo"
                  variant="primary"
                  newTab
                  posthogProps={{
                    destination: "console",
                    source: "enterprise_hero",
                  }}
                >
                  {e.hero.ctaPrimary}
                </Button>
                <Button href="#core-delivery" variant="secondary">
                  {e.hero.ctaSecondary}
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.46} y={6}>
              <div className="enterprise-hero-trust mt-7">
                {e.hero.trust.map((t) => (
                  <span key={t} className="enterprise-hero-trust-item">
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <section className="ep-capability-section" id="core-delivery">
        <Container>
          <FadeIn>
            <div className="ep-section-header">
              <span className="section-eyebrow">{e.capabilities.eyebrow}</span>
              <h2 className="ep-section-title mt-3">{e.capabilities.title}</h2>
              <p className="ep-section-sub mt-4">{e.capabilities.subtitle}</p>
            </div>
          </FadeIn>

          <div className="features-grid mt-8">
            {/* ─── Custom RL Environments — big card with image ─── */}
            <FadeIn y={20} className="feat-card big">
              <div className="feat-split">
                <div>
                  <div className="feat-tag">{e.capabilities.rl.tag}</div>
                  <h3 className="feat-title">{e.capabilities.rl.title}</h3>
                  <p className="feat-desc">{e.capabilities.rl.desc}</p>
                  <ul className="ep-check-list mt-5">
                    {e.capabilities.rl.outcomes.map((o) => (
                      <li key={o} className="ep-check-item">
                        <span className="ep-check-icon" aria-hidden="true">
                          {checkSvg}
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ep-feat-media">
                  <img
                    src="/tracy/tracy-programing.jpeg"
                    alt="Custom RL environment design"
                    width={480}
                    height={360}
                    className="ep-feat-media-img"
                    style={{ objectPosition: "center 32%" }}
                  />
                </div>
              </div>
            </FadeIn>

            {/* ─── RL sub-cards ─── */}
            <FadeIn y={20} className="feat-card">
              <div className="feat-tag">{e.capabilities.envDesign.tag}</div>
              <h3 className="feat-title">{e.capabilities.envDesign.title}</h3>
              <p className="feat-desc">{e.capabilities.envDesign.desc}</p>
            </FadeIn>

            <FadeIn y={20} className="feat-card">
              <div className="feat-tag">{e.capabilities.rewardEng.tag}</div>
              <h3 className="feat-title">{e.capabilities.rewardEng.title}</h3>
              <p className="feat-desc">{e.capabilities.rewardEng.desc}</p>
            </FadeIn>

            {/* ─── Self-Improving Agents — big card with image ─── */}
            <FadeIn y={20} className="feat-card big">
              <div className="feat-split">
                <div className="ep-feat-media">
                  <img
                    src="/tracy/tracy-fine-tuning.jpeg"
                    alt="Self-improving agent distillation pipeline"
                    width={480}
                    height={360}
                    className="ep-feat-media-img"
                    style={{ objectPosition: "center 26%" }}
                  />
                </div>
                <div>
                  <div className="feat-tag">{e.capabilities.agents.tag}</div>
                  <h3 className="feat-title">{e.capabilities.agents.title}</h3>
                  <p className="feat-desc">{e.capabilities.agents.desc}</p>
                  <ul className="ep-check-list mt-5">
                    {e.capabilities.agents.outcomes.map((o) => (
                      <li key={o} className="ep-check-item">
                        <span className="ep-check-icon" aria-hidden="true">
                          {checkSvg}
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* ─── Agent sub-cards ─── */}
            <FadeIn y={20} className="feat-card">
              <div className="feat-tag">{e.capabilities.distillation.tag}</div>
              <div className="ep-stat-value">
                {e.capabilities.distillation.statValue}
              </div>
              <p className="ep-stat-label">
                {e.capabilities.distillation.statLabel}
              </p>
              <p className="feat-desc mt-4">
                {e.capabilities.distillation.desc}
              </p>
            </FadeIn>

            <FadeIn y={20} className="feat-card">
              <div className="feat-tag">{e.capabilities.zeroRetrain.tag}</div>
              <h3 className="feat-title">{e.capabilities.zeroRetrain.title}</h3>
              <p className="feat-desc">{e.capabilities.zeroRetrain.desc}</p>
              <ul className="ep-check-list mt-5">
                {e.capabilities.zeroRetrain.bullets.map((b) => (
                  <li key={b} className="ep-check-item">
                    <span className="ep-check-icon" aria-hidden="true">
                      {checkSvg}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── INFRASTRUCTURE ── */}
      <section className="ep-infra-section">
        <Container>
          <FadeIn>
            <div className="ep-section-header">
              <span className="section-eyebrow">
                {e.infrastructure.eyebrow}
              </span>
              <h2 className="ep-section-title mt-3">
                {e.infrastructure.title}
              </h2>
              <p className="ep-section-sub mt-4">{e.infrastructure.subtitle}</p>
            </div>
          </FadeIn>

          <div className="features-grid mt-8">
            {/* big card with image */}
            <FadeIn y={20} className="feat-card big">
              <div className="feat-split">
                <div className="ep-feat-media">
                  <img
                    src="/tracy/tracy-servers.jpeg"
                    alt="Tracy managing self-hosted AI infrastructure"
                    width={560}
                    height={440}
                    className="ep-feat-media-img"
                    style={{ objectPosition: "center 34%" }}
                  />
                </div>
                <div>
                  <div className="feat-tag">{e.infrastructure.bigCard.tag}</div>
                  <h3 className="feat-title">
                    {e.infrastructure.bigCard.title}
                  </h3>
                  <p className="feat-desc">{e.infrastructure.bigCard.desc}</p>
                  <ul className="ep-check-list mt-5">
                    {e.infrastructure.bigCard.outcomes.map((o) => (
                      <li key={o} className="ep-check-item">
                        <span className="ep-check-icon" aria-hidden="true">
                          {checkSvg}
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* 4 infra sub-cards */}
            {e.infrastructure.features.map((f) => (
              <FadeIn key={f.title} y={20} className="feat-card">
                <h4 className="feat-title" style={{ fontSize: "1.1rem" }}>
                  {f.title}
                </h4>
                <p className="feat-desc">{f.desc}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="ep-domains-section">
        <Container>
          <FadeIn>
            <div className="ep-section-header">
              <span className="section-eyebrow">{e.industries.eyebrow}</span>
              <h2 className="ep-section-title mt-3">{e.industries.title}</h2>
              <p className="ep-section-sub mt-4">{e.industries.subtitle}</p>
            </div>
          </FadeIn>
          <StaggerContainer className="ep-domains-grid mt-8">
            {e.industries.items.map((ind, i) => (
              <StaggerItem key={ind.title}>
                <article className="ep-domain-card">
                  <span className="ep-domain-icon">
                    {domainIconsList[i] ?? <IconGear />}
                  </span>
                  <div>
                    <h3 className="ep-domain-title">{ind.title}</h3>
                    <p className="ep-domain-desc">{ind.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section className="ep-services-section">
        <Container>
          <FadeIn>
            <div className="ep-section-header">
              <span className="section-eyebrow">{e.services.eyebrow}</span>
              <h2 className="ep-section-title mt-3">{e.services.title}</h2>
              <p className="ep-section-sub mt-4">{e.services.subtitle}</p>
            </div>
          </FadeIn>
          <div className="ep-services-grid mt-8">
            {e.services.items.map((service) => (
              <FadeIn key={service.title}>
                <article className="ep-service-item">
                  <span className="ep-service-check" aria-hidden="true">
                    {checkSvg}
                  </span>
                  <div>
                    <h4 className="ep-service-title">{service.title}</h4>
                    <p className="ep-service-desc">{service.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="enterprise-final-cta scroll-mt-24">
        <Container>
          <div className="enterprise-final-cta-inner">
            <TextReveal>
              <h2 className="enterprise-final-cta-title">{e.cta.title}</h2>
            </TextReveal>
            <FadeIn delay={0.12}>
              <p className="enterprise-final-cta-sub">{e.cta.subtitle}</p>
            </FadeIn>
            <FadeIn delay={0.26}>
              <div className="enterprise-final-cta-buttons">
                <Button
                  href="https://app.opentracy.cloud/traces"
                  variant="primary"
                  newTab
                  className="sm:min-w-56"
                  posthogProps={{
                    destination: "console",
                    source: "enterprise_final_cta",
                  }}
                >
                  {e.cta.primary}
                  <span className="ml-1 inline-flex h-4 w-4">{arrowIcon}</span>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.38}>
              <p className="enterprise-final-cta-foot">{e.cta.footnote}</p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
