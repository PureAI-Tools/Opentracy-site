import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
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
    ctaHref: "https://app.opentracy.com",
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
    <div className="pt-24 pb-16 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {dict.pricing.title}
          </h1>
          <p className="mt-4 text-[var(--color-muted)]">
            {dict.pricing.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {planConfig.map((plan) => {
            const planDict = dict.pricing.plans[plan.key];
            return (
              <div
                key={plan.key}
                className={`border p-8 rounded-xl bg-[var(--color-background)] ${
                  plan.highlighted
                    ? "border-[var(--color-accent)]"
                    : "border-[var(--color-border)]"
                }`}
              >
                {plan.highlighted && (
                  <Badge variant="accent" className="mb-4">
                    {dict.pricing.bestValue}
                  </Badge>
                )}
                <h2 className="text-xl font-bold">{planDict.name}</h2>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-[var(--color-muted)]">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  {planDict.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {planDict.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span className="text-[var(--color-accent)] mt-0.5">
                        &#10003;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={
                      plan.key === "starter"
                        ? `/${locale}/start-free-trial`
                        : plan.ctaHref
                    }
                    variant={plan.ctaVariant}
                    className="w-full justify-center"
                  >
                    {planDict.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-muted)]">
            {dict.pricing.billingNote}
          </p>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-12">
            {dict.pricing.faqTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dict.pricing.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-l-2 border-[var(--color-border)] pl-6"
              >
                <h3 className="text-sm font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border border-[var(--color-border)] rounded-xl p-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            {dict.pricing.ctaTitle}
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            {dict.pricing.ctaSubtitle}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              href="https://github.com/lunar-org-ai/lunar-router"
              variant="primary"
            >
              {dict.pricing.ctaPrimary}
            </Button>
            <Button
              href="https://github.com/lunar-org-ai/lunar-router"
              variant="secondary"
            >
              {dict.pricing.ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
