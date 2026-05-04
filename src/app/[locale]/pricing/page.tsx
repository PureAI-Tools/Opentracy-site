import Container from "@/components/Container";
import Button from "@/components/Button";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import { i18n } from "@/i18n/config";
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
    title: `${dict.pricing.title} — OpenTracy`,
    description: dict.pricing.subtitle,
  };
}

const planConfig = [
  {
    key: "free" as const,
    price: "$0",
    ctaHref: "https://github.com/lunar-org-ai/lunar-router",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
  {
    key: "starter" as const,
    price: "$10",
    period: "/mo",
    ctaHref: "https://opentracy.cloud/traces",
    ctaVariant: "primary" as const,
    highlighted: true,
  },
  {
    key: "enterprise" as const,
    price: "Custom",
    ctaHref: "https://cal.com/opentracy/30min-demo",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
];

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background bg-[radial-gradient(circle_at_1px_1px,rgba(24,24,27,0.08)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(228,228,231,0.09)_1px,transparent_0)] bg-size-[22px_22px]">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-1.5 rounded-full border border-[rgba(34,197,94,0.55)] bg-[rgba(34,197,94,0.08)] text-[11px] font-bold tracking-[0.18em] uppercase text-accent">
            {dict.nav.pricing}
          </span>
          <h1 className="mt-6 text-5xl sm:text-7xl leading-[0.95] font-bold tracking-[-0.04em] text-foreground">
            Simple. Transparent.
          </h1>
          <p className="mt-5 text-lg text-muted">
            Start free. Scale when you&apos;re ready. No hidden fees, ever.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {planConfig.map((plan) => {
            const planDict = dict.pricing.plans[plan.key];
            return (
              <div
                key={plan.key}
                className={`relative rounded-3xl border p-8 md:p-9 bg-[rgba(255,255,255,0.62)] dark:bg-[rgba(20,20,20,0.6)] backdrop-blur-sm ${
                  plan.highlighted
                    ? "border-[rgba(34,197,94,0.8)]"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute left-1/2 -translate-x-1/2 -top-3.5 px-4 py-1 rounded-full bg-accent text-white text-xs font-extrabold tracking-[0.12em] uppercase shadow-[0_10px_24px_rgba(34,197,94,0.35)]">
                    Most Popular
                  </span>
                )}
                <h2 className="text-[22px] font-bold uppercase tracking-[0.08em] text-muted">
                  {planDict.name}
                </h2>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-6xl leading-none font-bold tracking-[-0.03em] text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="mb-1 text-2xl text-muted">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-xl leading-relaxed text-muted">
                  {planDict.description}
                </p>
                <div className="mt-7 h-px bg-border" />
                <ul className="mt-7 space-y-4">
                  {planDict.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-lg leading-snug"
                    >
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(34,197,94,0.13)] text-accent text-sm font-bold shrink-0">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={
                      plan.key === "starter"
                        ? "https://opentracy.cloud/traces"
                        : plan.ctaHref
                    }
                    variant={plan.ctaVariant}
                    newTab={plan.key === "starter"}
                    className="w-full h-12 justify-center text-lg font-semibold rounded-xl"
                  >
                    {planDict.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted">{dict.pricing.billingNote}</p>
        </div>

        <div className="mt-24 border border-border rounded-xl p-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            {dict.pricing.ctaTitle}
          </h2>
          <p className="mt-4 text-muted">{dict.pricing.ctaSubtitle}</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              href="https://opentracy.cloud/traces"
              variant="primary"
              newTab
              posthogProps={{
                destination: "console",
                source: "pricing_bottom_cta",
              }}
            >
              {dict.pricing.ctaPrimary}
            </Button>
            <Button
              href="https://github.com/lunar-org-ai/lunar-router"
              variant="secondary"
              posthogProps={{
                destination: "github",
                source: "pricing_bottom_cta",
              }}
            >
              {dict.pricing.ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
