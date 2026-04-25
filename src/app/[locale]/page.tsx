import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import FadeIn from "@/components/motion/FadeIn";
import TextReveal from "@/components/motion/TextReveal";
import CountUp from "@/components/motion/CountUp";
import HoverCard from "@/components/motion/HoverCard";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { LogoWallContainer, LogoWallItem } from "@/components/motion/LogoWall";
import ImageCarousel from "@/components/motion/ImageCarousel";
import FullscreenImage from "@/components/FullscreenImage";
import { Fireworks, Gemini, ProviderIcon } from "@lobehub/icons";

const GITHUB_REPO = "lunar-org-ai/lunar-router";

async function fetchGitHubStats(): Promise<{
  stars: number | null;
  contributors: number | null;
}> {
  try {
    const [repoRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "OpenTracy-Website",
        },
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contributors?per_page=100&anon=true`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "OpenTracy-Website",
          },
          next: { revalidate: 3600 },
        },
      ),
    ]);

    const stars = repoRes.ok
      ? (((await repoRes.json()) as { stargazers_count?: number })
          .stargazers_count ?? null)
      : null;

    const contributors = contribRes.ok
      ? ((await contribRes.json()) as unknown[]).length
      : null;

    return { stars, contributors };
  } catch {
    return { stars: null, contributors: null };
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [dict, githubStats] = await Promise.all([
    getDictionary(locale as Locale),
    fetchGitHubStats(),
  ]);

  const enterprisePriceLabel =
    locale === "es"
      ? "Personalizado"
      : locale === "pt"
        ? "Personalizado"
        : "Custom";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.pricing.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="pt-32 pb-24 border-b border-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0} y={16}>
              <a
                href="https://github.com/lunar-org-ai/lunar-router"
                className="badge badge-new inline-flex items-center gap-2 mb-8 hover:border-muted transition-colors"
              >
                <span className="badge-new-dot" />
                <span>{dict.hero.badge}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </FadeIn>

            <FadeIn delay={0.05} y={10}>
              <img
                src="/tracy/tracy-default.png"
                alt="Tracy"
                width={100}
                height={100}
                className="hero-mascot mx-auto mb-6 -mt-0.5 drop-shadow-md"
              />
            </FadeIn>

            <TextReveal delay={0.1}>
              <h1 className="hero-h1">
                {dict.hero.title}
                <br />
                <span className="hero-underline">62% faster</span>.
              </h1>
            </TextReveal>

            <FadeIn delay={0.25} y={8}>
              <p className="mt-6 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                {dict.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.4} y={10}>
              <div className="mt-10 mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
                <Button
                  href="https://github.com/lunar-org-ai/lunar-router"
                  variant="primary"
                  newTab
                  className="w-full justify-center sm:w-auto"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  {dict.hero.ctaPrimary}
                  {githubStats.stars !== null
                    ? ` — ${githubStats.stars >= 1000 ? `${(githubStats.stars / 1000).toFixed(1)}k` : githubStats.stars} ★`
                    : ""}
                </Button>
                <Button
                  href={`/${locale}#features`}
                  variant="secondary"
                  className="w-full justify-center sm:w-auto"
                >
                  {dict.hero.ctaSecondary}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} y={6}>
              <p className="mt-5 text-sm text-muted">{dict.hero.footnote}</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-surface-alt">
        <Container>
          <FadeIn y={30} duration={0.7}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
              <ImageCarousel
                images={[
                  {
                    src: "/screenshots/intelligence-overview.png",
                    alt: "Intelligence & Observability — requests routed, cost savings, model distribution",
                  },
                  {
                    src: "/screenshots/eval-overview.png",
                    alt: "Distill Evaluations — overview with activity and model leaderboard",
                  },
                  {
                    src: "/screenshots/eval-list.png",
                    alt: "Evaluations list — running, completed, and failed evaluation runs",
                  },
                  {
                    src: "/screenshots/cost-baseline.png",
                    alt: "Cost Analysis — baseline model comparison, latency distribution, router efficiency",
                  },
                  {
                    src: "/screenshots/cost-trends.png",
                    alt: "Cost Analysis — savings trend, cost over time, baseline comparison",
                  },
                  {
                    src: "/screenshots/cost-details.png",
                    alt: "Cost Analysis — cost by model, cost by provider, most expensive requests",
                  },
                ]}
                interval={5000}
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-10 border-b border-border">
        <Container>
          <FadeIn>
            <p className="text-center text-xs uppercase tracking-widest text-muted mb-8">
              {dict.providers.heading}
            </p>
          </FadeIn>
          <LogoWallContainer className="logo-wall">
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="openai" type="mono" size={20} />
              <span>OpenAI</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="anthropic" type="mono" size={20} />
              <span>Anthropic</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="google" type="mono" size={20} />
              <span>Google</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="groq" type="mono" size={20} />
              <span>Groq</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="azure" type="mono" size={20} />
              <span>Azure</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="cohere" type="mono" size={20} />
              <span>Cohere</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="deepseek" type="mono" size={20} />
              <span>DeepSeek</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <Fireworks type="mono" size={20} />
              <span>Fireworks</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="ollama" type="mono" size={20} />
              <span>Ollama</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <ProviderIcon provider="togetherai" type="mono" size={20} />
              <span>Together</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <Gemini type="mono" size={20} />
              <span>Gemini</span>
            </LogoWallItem>
          </LogoWallContainer>
        </Container>
      </section>

      <section
        id="features"
        className="platform-section py-24 border-t border-border bg-surface-alt"
      >
        <Container className="max-w-7xl">
          <FadeIn>
            <div className="platform-top-header text-center">
              <span className="platform-eyebrow">{dict.nav.features}</span>
              <h2 className="platform-title">
                {dict.features.title}
                <br />
                <span className="platform-title-accent">
                  {dict.features.titleAccent}
                </span>
              </h2>
              <p className="platform-subtitle">{dict.features.subtitle}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <StaggerContainer className="platform-metrics-strip">
              <StaggerItem>
                <div className="platform-metric-cell">
                  <CountUp
                    value={dict.metrics.providers}
                    className="platform-metric-num"
                  />
                  <div className="platform-metric-lbl">
                    {dict.metrics.providersLabel}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="platform-metric-cell">
                  <CountUp
                    value={dict.metrics.models}
                    className="platform-metric-num"
                  />
                  <div className="platform-metric-lbl">
                    {dict.metrics.modelsLabel}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="platform-metric-cell">
                  <CountUp
                    value={dict.metrics.overhead}
                    className="platform-metric-num"
                  />
                  <div className="platform-metric-lbl">
                    {dict.metrics.overheadLabel}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="platform-metric-cell">
                  <CountUp
                    value={dict.metrics.license}
                    className="platform-metric-num"
                  />
                  <div className="platform-metric-lbl">
                    {dict.metrics.licenseLabel}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>

          <div className="features-grid">
            <FadeIn y={24} className="feat-card big">
              <div className="feat-split">
                <div>
                  <div className="feat-ghost-wrap">
                    <img
                      src="/tracy/tracy-default.png"
                      alt="Tracy"
                      width={110}
                      height={110}
                      className="mascot-image"
                    />
                  </div>
                  <div className="feat-tag">One API</div>
                  <h3 className="feat-title">
                    One endpoint. Every LLM provider.
                  </h3>
                  <p className="feat-desc">
                    One OpenAI-compatible API that routes to every major
                    provider. Swap providers in one line. Automatic fallbacks
                    keep you online when things go sideways.
                  </p>
                  <div className="feat-pills">
                    {dict.features.oneApi.modelPills
                      .slice(0, 6)
                      .map((provider) => (
                        <span key={provider} className="feat-pill">
                          {provider}
                        </span>
                      ))}
                    <span className="feat-pill accent inline-flex items-center gap-1.5">
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <path d="M8 3.2v9.6M3.2 8h9.6" strokeLinecap="round" />
                      </svg>
                      {dict.features.oneApi.andMore}
                    </span>
                  </div>
                </div>
                <div className="feat-code">
                  <div className="code-header">
                    <div
                      className="code-dot"
                      style={{ background: "#ff5f56" }}
                    />
                    <div
                      className="code-dot"
                      style={{ background: "#ffbd2e" }}
                    />
                    <div
                      className="code-dot"
                      style={{ background: "#27c93f" }}
                    />
                  </div>
                  <div className="code-body">
                    <pre>
                      <span className="code-keyword">import</span> opentracy{" "}
                      <span className="code-keyword">as</span> ot
                      {"\n\n"}
                      <span className="code-comment">
                        # Call any model — one line
                      </span>
                      {"\n"}
                      response = ot.
                      <span className="code-fn">completion</span>({"\n    "}
                      model=
                      <span className="code-string">"openai/gpt-4o-mini"</span>,
                      {"\n    "}
                      messages=[{"{"}
                      <span className="code-string">"role"</span>:{" "}
                      <span className="code-string">"user"</span>,
                      {"\n               "}
                      <span className="code-string">"content"</span>:{" "}
                      <span className="code-string">"Hello!"</span>
                      {"}"}],
                      {"\n    "}
                      fallbacks=[
                      <span className="code-string">"anthropic/claude-3"</span>]
                      {"\n"}){"\n\n"}
                      <span className="code-fn">print</span>(response.choices[
                      <span className="code-value">0</span>].message.content)
                      {"\n"}
                      <span className="code-fn">print</span>(
                      <span className="code-string">
                        f"Cost: ${"{"}response._cost:.6f{"}"}"
                      </span>
                      )
                    </pre>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn y={24} className="feat-card wide">
              <div className="feat-ghost-wrap">
                <img
                  src="/tracy/tracy-routing.png"
                  alt="Tracy routing"
                  width={118}
                  height={118}
                  className="mascot-image"
                />
              </div>
              <div className="feat-tag">Smart Routing</div>
              <h3 className="feat-title">Route smarter. Pay less.</h3>
              <p className="feat-desc">
                Automatically send simple prompts to fast, cheap models and
                route complex reasoning to the most capable one - across any
                provider, no code changes.
              </p>
            </FadeIn>

            <FadeIn y={24} className="feat-card wide">
              <div className="feat-ghost-wrap">
                <img
                  src="/tracy/tracy-cost.png"
                  alt="Tracy cost"
                  width={102}
                  height={102}
                  className="mascot-image"
                />
              </div>
              <div className="feat-tag">Cost Tracking</div>
              <h3 className="feat-title">Know where every dollar goes.</h3>
              <p className="feat-desc">
                Per-token pricing on 300+ models, broken down by model, user, or
                feature. Set budget alerts and hard caps - no more end-of-month
                surprises.
              </p>
            </FadeIn>

            <FadeIn y={24} className="feat-card full">
              <div className="feat-split">
                <div>
                  <div className="feat-ghost-wrap">
                    <img
                      src="/tracy/tracy-alert.png"
                      alt="Tracy alert"
                      width={110}
                      height={110}
                      className="mascot-image"
                    />
                  </div>
                  <div className="feat-tag">Observability</div>
                  <h3 className="feat-title">
                    Complete visibility into every request.
                  </h3>
                  <p className="feat-desc">
                    Every request logged with full input, output, cost, latency,
                    and model metadata. AI-powered scanning detects
                    hallucinations before your users do.
                  </p>
                </div>
                <div className="feat-image">
                  <FullscreenImage
                    src="/screenshots/intelligence-overview.png"
                    alt="Observability dashboard"
                    className="feature-showcase-image"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn y={24} className="feat-card wide">
              <div className="feat-ghost-wrap">
                <img
                  src="/tracy/tracy-zen.png"
                  alt="Tracy zen"
                  width={110}
                  height={110}
                  className="mascot-image"
                />
              </div>
              <div className="feat-tag">Model Distillation</div>
              <h3 className="feat-title">Train your own model.</h3>
              <p className="feat-desc">
                Turn production traces into fine-tuning datasets automatically.
                Get frontier-model quality from a model you own - at a fraction
                of the cost.
              </p>
            </FadeIn>

            <FadeIn y={24} className="feat-card wide">
              <div className="feat-ghost-wrap">
                <img
                  src="/tracy/tracy-security.png"
                  alt="Tracy security"
                  width={108}
                  height={108}
                  className="mascot-image"
                />
              </div>
              <div className="feat-tag">Quality Monitoring</div>
              <h3 className="feat-title">Catch drops before users do.</h3>
              <p className="feat-desc">
                Continuous evaluations on production traffic detect regressions
                and hallucinations automatically. Set thresholds, get alerts,
                stay confident.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        id="pricing"
        className="pricing-section py-24 border-t border-border"
      >
        <Container>
          <FadeIn>
            <div className="section-header max-w-3xl mx-auto text-center">
              <span className="section-eyebrow">{dict.nav.pricing}</span>
              <h2 className="section-title mt-4">{dict.pricing.title}</h2>
              <p className="section-sub mt-5">{dict.pricing.subtitle}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="pricing-grid mt-16">
            <StaggerItem>
              <HoverCard className="h-full">
                <div className="pricing-card h-full">
                  <div className="pricing-name">
                    {dict.pricing.plans.free.name}
                  </div>
                  <div className="pricing-price">$0</div>
                  <p className="pricing-desc">
                    {dict.pricing.plans.free.description}
                  </p>
                  <div className="pricing-divider" />
                  <ul className="pricing-features">
                    {dict.pricing.plans.free.features.map((feature) => (
                      <li key={feature} className="pricing-feature">
                        <span className="pricing-check" aria-hidden="true">
                          <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2 6 5 9 10 3" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-cta">
                    <Button
                      href="https://github.com/lunar-org-ai/lunar-router"
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      {dict.pricing.plans.free.cta}
                    </Button>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="h-full">
                <div className="pricing-card featured h-full">
                  <div className="pricing-name">
                    {dict.pricing.plans.starter.name}
                  </div>
                  <div className="pricing-price">
                    $10<span className="pricing-price-period">/mo</span>
                  </div>
                  <p className="pricing-desc">
                    {dict.pricing.plans.starter.description}
                  </p>
                  <div className="pricing-divider" />
                  <ul className="pricing-features">
                    {dict.pricing.plans.starter.features.map((feature) => (
                      <li key={feature} className="pricing-feature">
                        <span className="pricing-check" aria-hidden="true">
                          <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2 6 5 9 10 3" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-cta">
                    <Button
                      href={`/${locale}/start-free-trial`}
                      variant="primary"
                      className="w-full justify-center"
                    >
                      {dict.pricing.plans.starter.cta}
                    </Button>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="h-full">
                <div className="pricing-card h-full">
                  <div className="pricing-name">
                    {dict.pricing.plans.enterprise.name}
                  </div>
                  <div className="pricing-price">
                    <span className="pricing-price-label">
                      {enterprisePriceLabel}
                    </span>
                  </div>
                  <p className="pricing-desc">
                    {dict.pricing.plans.enterprise.description}
                  </p>
                  <div className="pricing-divider" />
                  <ul className="pricing-features">
                    {dict.pricing.plans.enterprise.features.map((feature) => (
                      <li key={feature} className="pricing-feature">
                        <span className="pricing-check" aria-hidden="true">
                          <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2 6 5 9 10 3" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-cta">
                    <Button
                      href="https://cal.com/opentracy/30min-demo"
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      {dict.pricing.plans.enterprise.cta}
                    </Button>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-24 border-t border-border bg-surface-alt">
        <Container>
          <FadeIn>
            <div className="section-header max-w-3xl mx-auto text-center">
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-title mt-4">{dict.pricing.faqTitle}</h2>
              <p className="section-sub mt-5">
                Answers to the most common pricing and deployment questions.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {dict.pricing.faqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="faq-card h-full">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* <section className="py-24 border-t border-border bg-surface-alt">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.testimonials.title}
              subtitle={dict.testimonials.subtitle}
            />
          </FadeIn>
          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {dict.testimonials.items.map((item) => (
              <StaggerItem key={item.name}>
                <div className="testimonial-card h-full flex flex-col">
                  <p className="testimonial-quote flex-1">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs text-muted">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section> */}

      <section id="community" className="py-24 border-t border-border">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.community.title}
              subtitle={dict.community.subtitle}
            />
          </FadeIn>
          <div className="mt-12 max-w-3xl mx-auto">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
              <StaggerItem>
                <div className="text-center p-6 rounded-2xl border border-border min-h-35 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold">
                    {githubStats.stars !== null
                      ? githubStats.stars >= 1000
                        ? `${(githubStats.stars / 1000).toFixed(1)}k`
                        : githubStats.stars.toString()
                      : "—"}
                  </div>
                  <div className="text-sm text-muted mt-1 leading-snug wrap-break-word">
                    {dict.community.stats.githubStars}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-6 rounded-2xl border border-border min-h-35 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold">
                    {githubStats.contributors !== null
                      ? githubStats.contributors
                      : "—"}
                  </div>
                  <div className="text-sm text-muted mt-1 leading-snug wrap-break-word">
                    {dict.community.stats.contributors}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <a
                  href="https://discord.gg/gDNPhQ347V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-35 flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-border hover:border-[#5865F2]/60 hover:bg-[#5865F2]/5 transition-colors group"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#5865F2]"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <div className="text-sm text-muted text-center leading-snug wrap-break-word group-hover:text-foreground transition-colors">
                    {dict.community.discordCta}
                  </div>
                </a>
              </StaggerItem>
            </StaggerContainer>
            <FadeIn delay={0.2}>
              <div className="mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
                <Button
                  href="https://discord.gg/gDNPhQ347V"
                  variant="primary"
                  className="w-full justify-center sm:w-auto sm:min-w-55"
                >
                  {dict.community.discordCta}
                </Button>
                <Button
                  href="https://github.com/lunar-org-ai/lunar-router"
                  variant="secondary"
                  className="w-full justify-center sm:w-auto sm:min-w-55"
                >
                  {dict.community.githubCta}
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-28 border-t border-border bg-surface-alt">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {dict.cta.title}{" "}
                <span className="text-accent">{dict.cta.titleHighlight}</span>
              </h2>
            </TextReveal>
            <FadeIn delay={0.15}>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                {dict.cta.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.3} y={12}>
              <div className="mt-10 mx-auto grid w-full max-w-md grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-2">
                <Button
                  href="https://github.com/lunar-org-ai/lunar-router"
                  variant="primary"
                  className="w-full justify-center"
                >
                  {dict.cta.ctaPrimary}
                </Button>
                <Button
                  href="https://github.com/lunar-org-ai/lunar-router"
                  variant="secondary"
                  className="w-full justify-center"
                >
                  {dict.cta.ctaSecondary}
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} y={8}>
              <p className="mt-6 text-sm text-muted">{dict.cta.footnote}</p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
