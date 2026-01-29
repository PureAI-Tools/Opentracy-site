import { Metadata } from "next";
import Container from "@/components/Container";
import CodeBlock from "@/components/CodeBlock";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Documentation — Lunar",
  description: "Learn how to use Lunar to create Small Language Models from your production traces.",
};

const docCategories = [
  {
    title: "Getting Started",
    description: "Installation, authentication, and your first distillation.",
    items: ["Quickstart", "Installation", "Authentication", "Your First Model"],
  },
  {
    title: "Distillation",
    description: "Configure and run distillation pipelines.",
    items: ["Data Curation", "Training Config", "Hyperparameters", "Custom Losses"],
  },
  {
    title: "Evaluation",
    description: "Test and validate your models before deployment.",
    items: ["Test Sets", "Metrics", "A/B Testing", "Quality Reports"],
  },
  {
    title: "Deployments",
    description: "Deploy models to cloud, edge, or your own infrastructure.",
    items: ["Cloud Deploy", "Self-Hosting", "Edge Devices", "Scaling"],
  },
  {
    title: "SDK Reference",
    description: "Complete API reference for Python and TypeScript.",
    items: ["Python SDK", "TypeScript SDK", "REST API", "Webhooks"],
  },
  {
    title: "Guides",
    description: "In-depth tutorials for common use cases.",
    items: ["Cost Optimization", "Model Routing", "Private Deployment", "CI/CD Integration"],
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
            Everything you need to build, test, and deploy Small Language Models with Lunar.
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
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-[#888888]">{category.description}</p>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-white hover:text-[#f59e0b] transition-colors flex items-center gap-2"
                      >
                        <span className="text-[#888888]">→</span>
                        {item}
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
              href="https://discord.gg"
              className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
            >
              Discord
            </a>
            <span className="text-[#333333]">|</span>
            <a
              href="https://github.com"
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
