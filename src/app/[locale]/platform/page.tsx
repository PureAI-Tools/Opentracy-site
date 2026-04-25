import Container from "@/components/Container";
import Button from "@/components/Button";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import { i18n } from "@/i18n/config";
import FadeIn from "@/components/motion/FadeIn";
import HoverCard from "@/components/motion/HoverCard";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import type { Metadata } from "next";

export async function generateStaticParams() {
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
    title: `${dict.platform.title} — OpenTracy`,
    description: dict.platform.subtitle,
  };
}

const gatewayCode = `import openai

# Just change the base URL — everything else stays the same
client = openai.OpenAI(
    base_url="https://api.opentracy.com/v1",
    api_key="your-opentracy-key"
)

response = client.chat.completions.create(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}]
)

print(response.choices[0].message.content)`;

const routerCode = `import opentracy as ot

# Semantic routing: simple -> cheap, complex -> powerful
router = ot.Router(
    strategy="semantic",
    models={
        "simple": "openai/gpt-4o-mini",
        "complex": "anthropic/claude-sonnet-4-20250514",
    },
    fallbacks=["google/gemini-2.0-flash"]
)

response = router.completion(
    messages=[{"role": "user", "content": prompt}]
)
print(f"Routed to: {response.model}")
print(f"Cost: \${response._cost:.6f}")`;

const sdkInstallCode = `# Install the SDK
pip install opentracy

# Or self-host the full stack
git clone https://github.com/lunar-org-ai/lunar-router.git
cd lunar-router && docker compose up -d`;

const sectionIcons: Record<string, React.ReactNode> = {
  gateway: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  ),
  routing: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    </svg>
  ),
  traces: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
      />
    </svg>
  ),
  costIntel: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  quality: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
  evals: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  ),
  distillation: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  ),
  clustering: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    </svg>
  ),
  deployment: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
};

const sectionKeys = [
  "gateway",
  "routing",
  "traces",
  "costIntel",
  "quality",
  "evals",
  "distillation",
  "clustering",
  "deployment",
] as const;

type SectionKey = (typeof sectionKeys)[number];

const codeBySection: Partial<Record<SectionKey, string>> = {
  gateway: gatewayCode,
  routing: routerCode,
  deployment: sdkInstallCode,
};

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <section className="pb-16 lg:pb-24 border-b border-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0} y={16}>
              <a
                href="https://github.com/lunar-org-ai/lunar-router"
                className="badge badge-new inline-flex items-center gap-2 mb-8 hover:border-muted transition-colors"
              >
                <span className="badge-new-dot" />
                <span>{dict.platform.badge}</span>
              </a>
            </FadeIn>

            <FadeIn delay={0.08} y={10}>
              <h1 className="hero-h1">{dict.platform.title}</h1>
            </FadeIn>

            <FadeIn delay={0.16} y={8}>
              <p className="mt-6 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                {dict.platform.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.24} y={8}>
              <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-muted font-mono">
                {dict.platform.pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-2 py-1 sm:px-2.5 rounded-md border border-border/70 bg-background/50"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.32} y={10}>
              <div className="mt-10 mx-auto flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
                <Button
                  href="https://app.opentracy.com"
                  variant="primary"
                  className="w-full justify-center sm:w-auto"
                >
                  {dict.platform.cta.primary}
                </Button>
                <Button
                  href="/docs"
                  variant="secondary"
                  className="w-full justify-center sm:w-auto"
                >
                  {dict.nav.docs}
                </Button>
                <Button
                  href="https://github.com/lunar-org-ai/lunar-router"
                  variant="secondary"
                  className="w-full justify-center sm:w-auto"
                >
                  {dict.platform.cta.secondary}
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-24 border-t border-border bg-surface-alt">
        <Container>
          <FadeIn>
            <div className="section-header max-w-3xl mx-auto text-center">
              <span className="section-eyebrow">
                {dict.platform.overview.eyebrow}
              </span>
              <h2 className="section-title mt-4">
                {dict.platform.overview.title}
              </h2>
              <p className="section-sub mt-5">
                {dict.platform.overview.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="platform-page-grid mt-16">
            {sectionKeys.map((key) => {
              const section = dict.platform.sections[key];
              const codeExample = codeBySection[key];

              return (
                <StaggerItem key={key} className="min-w-0">
                  <HoverCard className="h-full min-w-0">
                    <article
                      id={key}
                      className="platform-page-card h-full scroll-mt-24"
                    >
                      <div className="platform-page-header">
                        <div className="platform-page-icon">
                          {sectionIcons[key]}
                        </div>
                        <h3 className="feat-title">{section.title}</h3>
                      </div>

                      <p className="platform-page-subtitle">
                        {section.subtitle}
                      </p>

                      {codeExample ? (
                        <div className="feat-code platform-page-code">
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
                            <pre>{codeExample}</pre>
                          </div>
                        </div>
                      ) : null}

                      <ul className="platform-page-features">
                        {section.features.map((feature) => (
                          <li key={feature} className="platform-page-feature">
                            <span
                              className="platform-page-check"
                              aria-hidden="true"
                            >
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
                    </article>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-28 border-t border-border bg-surface-alt">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {dict.platform.cta.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                {dict.platform.cta.subtitle}
              </p>
              <div className="mt-10 mx-auto grid w-full max-w-md grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-2">
                <Button
                  href="https://app.opentracy.com"
                  variant="primary"
                  className="w-full justify-center"
                >
                  {dict.platform.cta.primary}
                </Button>
                <Button
                  href="https://github.com/lunar-org-ai/lunar-router"
                  variant="secondary"
                  className="w-full justify-center"
                >
                  {dict.platform.cta.secondary}
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
