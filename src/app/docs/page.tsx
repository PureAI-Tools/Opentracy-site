import { Metadata } from "next";
import Container from "@/components/Container";
import CodeBlock from "@/components/CodeBlock";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Documentation — Lunar",
  description: "Learn how to distill, route, and deploy LLMs with Lunar. Quickstart guides, API reference, evaluation tools, and GPU deployment documentation.",
};

const DOCS_BASE = "https://docs.lunar-sys.com";

const docCategories = [
  {
    title: "Getting Started",
    href: `${DOCS_BASE}/lunar/overview`,
    description: "Install the SDK, authenticate, and make your first request.",
    items: [
      { label: "Overview", href: `${DOCS_BASE}/lunar/overview` },
      { label: "Quickstart", href: `${DOCS_BASE}/lunar/quickstart` },
      { label: "Installation", href: `${DOCS_BASE}/lunar/installation` },
      { label: "Authentication", href: `${DOCS_BASE}/lunar/guides/authentication` },
    ],
  },
  {
    title: "Guides",
    href: `${DOCS_BASE}/lunar/guides/chat-completions`,
    description: "Learn how to use chat completions, streaming, fallbacks, and more.",
    items: [
      { label: "Chat Completions", href: `${DOCS_BASE}/lunar/guides/chat-completions` },
      { label: "Streaming", href: `${DOCS_BASE}/lunar/guides/streaming` },
      { label: "Fallbacks", href: `${DOCS_BASE}/lunar/guides/fallbacks` },
      { label: "Async Usage", href: `${DOCS_BASE}/lunar/guides/async-usage` },
    ],
  },
  {
    title: "Models & Routing",
    href: `${DOCS_BASE}/lunar/guides/models-providers`,
    description: "Smart routing, supported models, and cost tracking.",
    items: [
      { label: "Models & Providers", href: `${DOCS_BASE}/lunar/guides/models-providers` },
      { label: "Supported Models", href: `${DOCS_BASE}/lunar/guides/supported-models` },
      { label: "Cost Tracking", href: `${DOCS_BASE}/lunar/guides/cost-tracking` },
      { label: "Text Completions", href: `${DOCS_BASE}/lunar/guides/text-completions` },
    ],
  },
  {
    title: "Evaluations",
    href: `${DOCS_BASE}/lunar/evals/introduction`,
    description: "Evaluate models with built-in, custom, and LLM-as-Judge scorers.",
    items: [
      { label: "Introduction", href: `${DOCS_BASE}/lunar/evals/introduction` },
      { label: "Running Evals", href: `${DOCS_BASE}/lunar/evals/running-evals` },
      { label: "Built-in Scorers", href: `${DOCS_BASE}/lunar/evals/built-in-scorers` },
      { label: "LLM Judge", href: `${DOCS_BASE}/lunar/evals/llm-judge` },
    ],
  },
  {
    title: "API Reference",
    href: `${DOCS_BASE}/lunar/api/reference`,
    description: "REST endpoints, error handling, and response formats.",
    items: [
      { label: "API Reference", href: `${DOCS_BASE}/lunar/api/reference` },
      { label: "Exceptions", href: `${DOCS_BASE}/lunar/api/exceptions` },
      { label: "Custom Scorers", href: `${DOCS_BASE}/lunar/evals/custom-scorers` },
      { label: "Factory Scorers", href: `${DOCS_BASE}/lunar/evals/factory-scorers` },
    ],
  },
  {
    title: "GPU & Pricing",
    href: `${DOCS_BASE}/pricing/overview`,
    description: "Instance tiers, billing, and deployment options.",
    items: [
      { label: "Pricing Overview", href: `${DOCS_BASE}/pricing/overview` },
      { label: "Instance Tiers", href: `${DOCS_BASE}/pricing/instance-tiers` },
      { label: "Billing & Credits", href: `${DOCS_BASE}/pricing/billing` },
    ],
  },
];

const quickstartCode = `# Install the Lunar CLI
pip install lunar

# Authenticate with your API key
lunar login --api-key $LUNAR_API_KEY

# Start a distillation run
lunar distill --project my-bot --target small

# Check the status
lunar status --project my-bot

# Deploy when ready
lunar deploy --project my-bot --target cloud`;

export default function DocsPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            Documentation
          </h1>
          <p className="mt-4 text-[#888888]">
            Everything you need to distill, route, and deploy LLMs with Lunar.
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-[#0a0a0a] border border-[#333333] px-4 py-3 font-mono text-sm placeholder:text-[#888888] focus:outline-none focus:border-white"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888]">
              <kbd className="font-mono text-xs border border-[#333333] px-1.5 py-0.5">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Quickstart */}
        <div className="mt-16">
          <h2 className="font-mono text-xl font-bold uppercase tracking-tight mb-6">
            Quickstart
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-[#888888] mb-4">
                Get up and running with Lunar in under 5 minutes. Install the CLI, authenticate, and start your first distillation run.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[#f59e0b]">1.</span>
                  <span>Install the Lunar CLI with pip</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[#f59e0b]">2.</span>
                  <span>Log in with your API key (get one free at lunar.dev)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[#f59e0b]">3.</span>
                  <span>Run your first distillation on production traces</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[#f59e0b]">4.</span>
                  <span>Deploy your optimized model</span>
                </div>
              </div>
            </div>
            <CodeBlock code={quickstartCode} language="bash" />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-20">
          <h2 className="font-mono text-xl font-bold uppercase tracking-tight mb-8">
            Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docCategories.map((category) => (
              <Card key={category.title} className="hover:border-white/30">
                <a
                  href={category.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-bold uppercase tracking-wider hover:text-[#f59e0b] transition-colors"
                >
                  {category.title}
                </a>
                <p className="mt-2 text-sm text-[#888888]">{category.description}</p>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-[#f59e0b] transition-colors flex items-center gap-2"
                      >
                        <span className="text-[#888888]">→</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Help */}
        <div className="mt-20 border border-[#333333] p-8 text-center">
          <h3 className="font-mono text-lg font-bold uppercase">Need help?</h3>
          <p className="mt-2 text-sm text-[#888888]">
            Can&apos;t find what you&apos;re looking for? Join our community or contact support.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://discord.gg/thyZx5GkFV"
              className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
            >
              Discord
            </a>
            <span className="text-[#333333]">|</span>
            <a
              href="https://github.com/lunar-ai"
              className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#333333]">|</span>
            <a
              href="#"
              className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
