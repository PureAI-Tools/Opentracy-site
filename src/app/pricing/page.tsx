import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";

export const metadata: Metadata = {
  title: "Pricing — OpenTracy",
  description: "Start free, scale as you grow. Simple pricing for LLM routing, observability, and optimization.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For developers exploring LLM routing and observability.",
    features: [
      "Up to 10,000 requests/month",
      "3 distillation runs/month",
      "All 13+ providers",
      "Full trace logging",
      "Community support",
    ],
    cta: "Get started",
    ctaHref: "https://app.opentracy.com",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$10",
    period: "/mo",
    description: "For teams running LLMs in production.",
    features: [
      "Unlimited requests",
      "Unlimited distillation",
      "Advanced evaluations",
      "AI quality scanning",
      "Priority support",
      "Team collaboration",
      "Self-host option",
      "Custom routing rules",
    ],
    cta: "Start free trial",
    ctaHref: "https://app.opentracy.com",
    ctaVariant: "primary" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with security and compliance needs.",
    features: [
      "Everything in Starter",
      "VPC deployment",
      "SSO / SAML",
      "Audit logs",
      "Dedicated support",
      "Custom SLAs",
      "On-premise option",
      "BYOK encryption",
    ],
    cta: "Schedule a meeting",
    ctaHref: "https://cal.com/opentracy/enterprise",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What counts as a request?",
    answer: "Each API call through OpenTracy counts as one request. Both successful and failed calls are counted.",
  },
  {
    question: "Can I self-host OpenTracy?",
    answer: "Yes. OpenTracy is open source (MIT). You can self-host the full stack with Docker. Starter and Enterprise plans add managed features on top.",
  },
  {
    question: "Which providers are supported?",
    answer: "OpenAI, Anthropic, Google Gemini, Mistral, Groq, AWS Bedrock, Azure OpenAI, Cohere, DeepSeek, Together AI, Fireworks, Ollama, and OpenRouter.",
  },
  {
    question: "How does the free trial work?",
    answer: "14 days of Starter features, no credit card required. After the trial, you move to the Free plan automatically.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. SOC 2 Type II certified, GDPR compliant. Enterprise plans include VPC deployment and BYOK encryption.",
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Simple, predictable pricing
          </h1>
          <p className="mt-4 text-[#888888]">
            Start free. Scale when you need to. No surprises.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border p-8 rounded-xl ${
                plan.highlighted
                  ? "border-[#0070f3] bg-[#0a0a0a]"
                  : "border-[#222222]"
              }`}
            >
              {plan.highlighted && (
                <Badge variant="accent" className="mb-4">
                  Best Value
                </Badge>
              )}
              <h2 className="text-xl font-bold">
                {plan.name}
              </h2>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-[#888888]">{plan.period}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-[#888888]">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <span className="checkmark mt-0.5">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href={plan.ctaHref}
                  variant={plan.ctaVariant}
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#666666]">
            All prices in USD. Billed monthly or annually (save 20%).
          </p>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-l-2 border-[#222222] pl-6">
                <h3 className="text-sm font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-[#888888] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border border-[#222222] rounded-xl p-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Ready to simplify your AI stack?
          </h2>
          <p className="mt-4 text-[#888888]">
            Start free today. No credit card required.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button href="https://app.opentracy.com" variant="primary">
              Get started
            </Button>
            <Button href="https://github.com/PureAI-Tools/opentracy" variant="secondary">
              Self-host
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
