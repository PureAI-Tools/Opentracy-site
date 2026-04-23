import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import SectionHeading from "@/components/SectionHeading";
import CodeBlock from "@/components/CodeBlock";
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
import { Fireworks, Gemini, ProviderIcon } from "@lobehub/icons";

const sdkCode = `import opentracy as ot

# Call any model — one line
response = ot.completion(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}],
    fallbacks=["anthropic/claude-3-haiku"]
)

print(response.choices[0].message.content)
print(f"Cost: \${response._cost:.6f}")`;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const sdkFeatures = [
    { key: "openaiCompatible" as const, color: "#22c55e" },
    { key: "automaticFallbacks" as const, color: "#16a34a" },
    { key: "costOnResponse" as const, color: "#2563eb" },
    { key: "fullStreaming" as const, color: "#22c55e" },
  ];

  return (
    <div>
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
                  stroke="currentColor"
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
                width={48}
                height={48}
                className="hero-mascot mx-auto mb-6 drop-shadow-md"
              />
            </FadeIn>

            <TextReveal delay={0.1}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                {dict.hero.title} <span className="text-accent">62%</span>
              </h1>
            </TextReveal>

            <FadeIn delay={0.25} y={8}>
              <p className="mt-6 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                {dict.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.4} y={10}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="https://app.opentracy.com" variant="primary">
                  {dict.hero.ctaPrimary}
                </Button>
                <Button href="https://opentracy.com/docs" variant="secondary">
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

      <section id="features" className="py-20 bg-surface-alt">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Everything you need to
                <br />
                <span className="text-accent">ship AI at scale</span>
              </h2>
              <p className="mt-5 text-lg text-muted">
                Route, trace, evaluate, and distill — one platform, every
                provider.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-3xl mx-auto my-10 rounded-2xl border border-border overflow-hidden bg-surface">
              <StaggerItem>
                <div className="text-center py-7 px-4 border-r border-border">
                  <CountUp
                    value={dict.metrics.providers}
                    className="text-3xl font-bold tracking-tight"
                  />
                  <div className="mt-1.5 text-xs text-muted font-medium">
                    {dict.metrics.providersLabel}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center py-7 px-4 border-r border-border">
                  <CountUp
                    value={dict.metrics.models}
                    className="text-3xl font-bold tracking-tight"
                  />
                  <div className="mt-1.5 text-xs text-muted font-medium">
                    {dict.metrics.modelsLabel}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center py-7 px-4 border-r border-border">
                  <CountUp
                    value={dict.metrics.overhead}
                    className="text-3xl font-bold tracking-tight"
                  />
                  <div className="mt-1.5 text-xs text-muted font-medium">
                    {dict.metrics.overheadLabel}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center py-7 px-4">
                  <CountUp
                    value={dict.metrics.license}
                    className="text-3xl font-bold tracking-tight"
                  />
                  <div className="mt-1.5 text-xs text-muted font-medium">
                    {dict.metrics.licenseLabel}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>

          <div className="space-y-5 max-w-360 mx-auto">
            {/* Feature 1: One API */}
            <FadeIn y={24}>
              <div className="rounded-2xl border border-border overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-2">
                <div className="px-8 py-7 lg:px-10 lg:py-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src="/tracy/tracy-default.png"
                      alt="Tracy"
                      width={48}
                      height={48}
                      className="mascot-image shrink-0"
                    />
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {dict.features.oneApi.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug mt-1">
                        One endpoint.
                        <br />
                        Every LLM provider.
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-muted leading-relaxed text-base">
                    One OpenAI-compatible API that routes to every major
                    provider — OpenAI, Anthropic, Google, Mistral, Groq, and
                    more. Swap providers in one line. Automatic fallbacks keep
                    you online.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {["OpenAI", "Anthropic", "Google", "Mistral", "Groq"].map(
                      (p) => (
                        <span
                          key={p}
                          className="px-3 py-1.5 rounded-full text-sm border border-border font-medium"
                        >
                          {p}
                        </span>
                      ),
                    )}
                    <span className="px-3 py-1.5 rounded-full text-sm border border-border text-muted">
                      {dict.providers.plusMore}
                    </span>
                  </div>
                </div>
                <div className="feature-media-panel overflow-hidden">
                  <CodeBlock
                    code={sdkCode}
                    language="python"
                    className="h-full rounded-none border-0"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Feature 2: Smart Routing */}
            <FadeIn y={24}>
              <div className="rounded-2xl border border-border overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-2">
                <div className="feature-media-panel overflow-hidden order-2 lg:order-1">
                  <img
                    src="/screenshots/cost-baseline.png"
                    alt="Smart Routing — cost baseline comparison"
                    className="feature-showcase-image"
                  />
                </div>
                <div className="px-8 py-7 lg:px-10 lg:py-8 flex flex-col justify-center order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src="/tracy/tracy-routing.png"
                      alt="Tracy routing"
                      width={80}
                      height={80}
                      className="mascot-image shrink-0"
                    />
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {dict.features.smartRouting.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug mt-1">
                        Route smarter.
                        <br />
                        Pay less per request.
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-muted leading-relaxed text-base">
                    Automatically send simple prompts to fast, cheap models and
                    route complex reasoning to the most capable one — across any
                    provider, no code changes needed.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn y={24}>
              <div className="rounded-2xl border border-border overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-2">
                <div className="px-8 py-7 lg:px-10 lg:py-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src="/tracy/tracy-cost.png"
                      alt="Tracy cost"
                      width={80}
                      height={80}
                      className="mascot-image shrink-0"
                    />
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {dict.features.costTracking.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug mt-1">
                        Know exactly where
                        <br />
                        every dollar goes.
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-muted leading-relaxed text-base">
                    Per-token pricing on 70+ models, broken down by model, user,
                    or feature. Set budget alerts and hard caps — no more
                    end-of-month surprises.
                  </p>
                  <div className="mt-8">
                    <Button
                      href="https://app.opentracy.com"
                      variant="secondary"
                    >
                      {dict.hero.ctaPrimary}
                    </Button>
                  </div>
                </div>
                <div className="feature-media-panel overflow-hidden order-last">
                  <img
                    src="/screenshots/cost-trends.png"
                    alt="Cost Tracking — savings trend over time"
                    className="feature-showcase-image"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn y={24}>
              <div className="rounded-2xl border border-border overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-2">
                <div className="feature-media-panel overflow-hidden order-2 lg:order-1">
                  <img
                    src="/screenshots/intelligence-overview.png"
                    alt="Real-time observability dashboard"
                    className="feature-showcase-image"
                  />
                </div>
                <div className="px-8 py-7 lg:px-10 lg:py-8 flex flex-col justify-center order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src="/tracy/tracy-alert.png"
                      alt="Tracy alert"
                      width={80}
                      height={80}
                      className="mascot-image shrink-0"
                    />
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {dict.features.realTimeTraces.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug mt-1">
                        Complete visibility
                        <br />
                        into every request.
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-muted leading-relaxed text-base">
                    Every request logged with full input, output, cost, latency,
                    and model metadata. AI-powered scanning detects
                    hallucinations before your users do.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn y={24}>
              <div className="rounded-2xl border border-border overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-2">
                <div className="px-8 py-7 lg:px-10 lg:py-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src="/tracy/tracy-zen.png"
                      alt="Tracy zen"
                      width={80}
                      height={80}
                      className="mascot-image shrink-0"
                    />
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {dict.features.modelDistillation.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug mt-1">
                        Train your own model
                        <br />
                        from production data.
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-muted leading-relaxed text-base">
                    Turn production traces into fine-tuning datasets
                    automatically. Get frontier-model quality from a model you
                    own — at a fraction of the inference cost.
                  </p>
                  <div className="mt-8">
                    <Button
                      href="https://opentracy.com/docs"
                      variant="secondary"
                    >
                      {dict.hero.ctaSecondary}
                    </Button>
                  </div>
                </div>
                <div className="feature-media-panel overflow-hidden order-last">
                  <img
                    src="/screenshots/eval-list.png"
                    alt="Model Distillation — evaluation runs"
                    className="feature-showcase-image"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn y={24}>
              <div className="rounded-2xl border border-border overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-2">
                <div className="feature-media-panel overflow-hidden order-2 lg:order-1">
                  <img
                    src="/screenshots/eval-overview.png"
                    alt="Quality Monitoring — evaluation overview"
                    className="feature-showcase-image"
                  />
                </div>
                <div className="px-8 py-7 lg:px-10 lg:py-8 flex flex-col justify-center order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src="/tracy/tracy-security.png"
                      alt="Tracy security"
                      width={80}
                      height={80}
                      className="mascot-image shrink-0"
                    />
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {dict.features.qualityMonitoring.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug mt-1">
                        Catch quality drops
                        <br />
                        before users do.
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-muted leading-relaxed text-base">
                    Continuous evaluations on production traffic detect
                    regressions and hallucinations automatically.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="pricing" className="py-24 border-t border-border">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.pricing.title}
              subtitle={dict.pricing.subtitle}
            />
          </FadeIn>
          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StaggerItem>
              <HoverCard>
                <div className="card p-8 h-full flex flex-col">
                  <h3 className="text-lg font-bold">
                    {dict.pricing.plans.free.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    {dict.pricing.plans.free.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {dict.pricing.plans.free.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="checkmark mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="https://app.opentracy.com"
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
              <HoverCard>
                <div className="card p-8 border-accent ring-1 ring-accent/10 h-full flex flex-col">
                  <Badge variant="accent" className="mb-4 self-start">
                    {dict.pricing.bestValue}
                  </Badge>
                  <h3 className="text-lg font-bold">
                    {dict.pricing.plans.starter.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$10</span>
                    <span className="text-muted">/mo</span>
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    {dict.pricing.plans.starter.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {dict.pricing.plans.starter.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="checkmark mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="https://app.opentracy.com"
                      variant="primary"
                      className="w-full justify-center"
                    >
                      {dict.pricing.plans.starter.cta}
                    </Button>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
            {/* Enterprise */}
            <StaggerItem>
              <HoverCard>
                <div className="card p-8 h-full flex flex-col">
                  <h3 className="text-lg font-bold">
                    {dict.pricing.plans.enterprise.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    {dict.pricing.plans.enterprise.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {dict.pricing.plans.enterprise.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="checkmark mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="https://cal.com/opentracy/enterprise"
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

      <section className="py-24 border-t border-border">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.community.title}
              subtitle={dict.community.subtitle}
            />
          </FadeIn>
          <div className="mt-12 max-w-3xl mx-auto">
            <StaggerContainer className="grid grid-cols-3 gap-6 mb-10">
              <StaggerItem>
                <div className="text-center p-6 rounded-2xl border border-border">
                  <div className="text-3xl font-bold">1.2k</div>
                  <div className="text-sm text-muted mt-1">
                    {dict.community.stats.githubStars}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-6 rounded-2xl border border-border">
                  <div className="text-3xl font-bold">48</div>
                  <div className="text-sm text-muted mt-1">
                    {dict.community.stats.contributors}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-6 rounded-2xl border border-border">
                  <div className="text-3xl font-bold">850+</div>
                  <div className="text-sm text-muted mt-1">
                    {dict.community.stats.discordMembers}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="https://discord.gg/gDNPhQ347V" variant="primary">
                  {dict.community.discordCta}
                </Button>
                <Button
                  href="https://github.com/lunar-org-ai/lunar-router"
                  variant="secondary"
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
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="https://app.opentracy.com" variant="primary">
                  {dict.cta.ctaPrimary}
                </Button>
                <Button
                  href="https://github.com/lunar-org-ai/lunar-router"
                  variant="secondary"
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
