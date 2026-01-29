import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";

export const metadata: Metadata = {
  title: "Pricing — Lunar",
  description: "Simple, transparent pricing for teams of all sizes. Start free, scale as you grow.",
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For individuals and small projects getting started with distillation.",
    features: [
      "Up to 10,000 traces/month",
      "3 distillation runs/month",
      "Community support",
      "Cloud deployment",
      "Basic evaluation metrics",
    ],
    cta: "Get started free",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/month",
    description: "For teams shipping production SLMs with advanced requirements.",
    features: [
      "Unlimited traces",
      "Unlimited distillation runs",
      "Priority support",
      "Cloud + self-host deployment",
      "Advanced evaluation suite",
      "Custom model configurations",
      "Team collaboration",
      "API access",
    ],
    cta: "Start 14-day trial",
    ctaVariant: "primary" as const,
    highlighted: true,
    savings: "Save ~$5,000/mo on inference",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced security and compliance needs.",
    features: [
      "Everything in Pro",
      "VPC deployment",
      "Dedicated support",
      "Custom SLAs",
      "SSO / SAML",
      "Audit logs",
      "BYOK encryption",
      "On-premise option",
    ],
    cta: "Contact sales",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What counts as a trace?",
    answer: "A trace is a single input-output pair from your LLM calls. Each API call to your production model generates one trace that Lunar can use for distillation.",
  },
  {
    question: "How much can I save with Lunar?",
    answer: "On average, teams save 57% on inference costs by replacing expensive API calls with distilled SLMs. Actual savings depend on your use case and traffic patterns.",
  },
  {
    question: "Can I self-host the distilled models?",
    answer: "Yes. Pro and Enterprise plans include self-hosting support. We export models in standard formats (GGUF, ONNX, TensorRT) compatible with popular serving frameworks.",
  },
  {
    question: "How does the 14-day trial work?",
    answer: "Start with Pro features for 14 days, no credit card required. If you don't upgrade, you'll automatically move to the free Starter plan.",
  },
  {
    question: "What providers do you support?",
    answer: "Lunar works with OpenAI, Anthropic, AWS Bedrock, Google Vertex AI, Azure OpenAI, and any OpenAI-compatible endpoint. We also support local models via Ollama.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We're SOC 2 Type II certified and GDPR compliant. Enterprise plans include VPC deployment, BYOK encryption, and audit logs. See our security page for details.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-[#888888]">
            Start free, scale as you grow. All plans include core distillation features.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border p-8 ${
                plan.highlighted
                  ? "border-white bg-[#0a0a0a]"
                  : "border-[#333333]"
              }`}
            >
              {plan.highlighted && (
                <Badge variant="accent" className="mb-4">
                  Most Popular
                </Badge>
              )}
              <h2 className="font-mono text-xl font-bold uppercase">
                {plan.name}
              </h2>
              <div className="mt-4">
                <span className="font-mono text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-[#888888]">{plan.period}</span>
                )}
              </div>
              {plan.savings && (
                <div className="mt-2 text-sm text-[#f59e0b]">{plan.savings}</div>
              )}
              <p className="mt-4 text-sm text-[#888888]">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-[#f59e0b]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href="/docs"
                  variant={plan.ctaVariant}
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#888888]">
            All prices in USD. Billed monthly or annually (save 20%).
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h2 className="font-mono text-2xl font-bold uppercase tracking-tight text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-l border-[#333333] pl-6">
                <h3 className="font-mono text-sm font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm text-[#888888]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 border border-[#333333] p-12 text-center">
          <h2 className="font-mono text-2xl font-bold uppercase tracking-tight">
            Ready to cut your LLM costs?
          </h2>
          <p className="mt-4 text-[#888888]">
            Start free today. No credit card required.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button href="/docs" variant="primary">
              Get started free
            </Button>
            <Button href="#" variant="secondary">
              Talk to sales
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
