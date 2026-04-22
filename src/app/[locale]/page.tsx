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
                <Button
                  href="https://opentracy.mintlify.app"
                  variant="secondary"
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4066-.6638zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
              </svg>
              <span>OpenAI</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
              </svg>
              <span>Anthropic</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              <span>Google</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <img
                src="/logos/groq.png"
                alt="Groq"
                width={44}
                height={22}
                className="object-contain dark:invert"
              />
              <span>Groq</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <img
                src="/logos/azure.png"
                alt="Azure"
                width={24}
                height={24}
                className="object-contain dark:invert"
              />
              <span>Azure</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <img
                src="/logos/cohere.png"
                alt="Cohere"
                width={44}
                height={22}
                className="object-contain dark:invert"
              />
              <span>Cohere</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <img
                src="/logos/deepseek.png"
                alt="DeepSeek"
                width={24}
                height={24}
                className="object-contain dark:invert"
              />
              <span>DeepSeek</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <img
                src="/logos/fireworks.png"
                alt="Fireworks"
                width={24}
                height={24}
                className="object-contain dark:invert"
              />
              <span>Fireworks</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <img
                src="/logos/ollama.png"
                alt="Ollama"
                width={24}
                height={24}
                className="object-contain dark:invert"
              />
              <span>Ollama</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <img
                src="/logos/together.png"
                alt="Together"
                width={44}
                height={22}
                className="object-contain dark:invert"
              />
              <span>Together</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
              </svg>
              <span>Gemini</span>
            </LogoWallItem>
          </LogoWallContainer>
        </Container>
      </section>

      <section id="features" className="py-24 bg-surface-alt">
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

          <div className="space-y-6 max-w-7xl mx-auto">
            {/* Feature 1: One API */}
            <FadeIn y={24}>
              <div className="rounded-2xl border border-border overflow-hidden bg-surface grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-14 flex flex-col justify-center">
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
                <div className="p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
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
                <div className="p-10 lg:p-14 flex flex-col justify-center">
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
                <div className="p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
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
                <div className="p-10 lg:p-14 flex flex-col justify-center">
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
                      href="https://opentracy.mintlify.app"
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
                <div className="p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
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

      <section className="py-24 border-t border-border bg-surface-alt">
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
                  <div className="mt-6 flex items-center gap-3">
                    <div className="testimonial-avatar">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-xs text-muted">
                        {item.role}, {item.company}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

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
