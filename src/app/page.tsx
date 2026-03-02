import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import CodeBlock from "@/components/CodeBlock";
import AsciiWindow, { AsciiPanel } from "@/components/AsciiWindow";
import Stepper from "@/components/Stepper";

export const metadata: Metadata = {
  title: "Lunar — Cut LLM Costs by 57% with Distilled Small Models",
  description:
    "Lunar automates distillation, evaluation, and deployment of Small Language Models from production traces. Connect 12+ providers, reduce inference costs by up to 70%.",
  alternates: {
    canonical: "/",
  },
};

const metrics = [
  { value: "57%", label: "avg cost reduction" },
  { value: "<50ms", label: "p99 latency" },
  { value: "99.9%", label: "uptime SLA" },
  { value: "10K+", label: "evals per day" },
];

const pipelineSteps = [
  { number: 1, title: "Data", description: "Connect production traces" },
  { number: 2, title: "Curation", description: "Filter quality examples" },
  { number: 3, title: "Distillation", description: "Train small model" },
  { number: 4, title: "Small Model", description: "Optimized SLM ready" },
  { number: 5, title: "Deploy", description: "Ship to production" },
];

const useCases = [
  {
    title: "Cheaper Routing",
    description: "Route simple queries to SLMs, complex ones to large models. Save up to 70% on inference.",
    icon: "┌─┐\n│→│\n└─┘",
    href: "https://docs.lunar-sys.com/lunar/guides/models-providers",
  },
  {
    title: "Domain SLMs",
    description: "Create specialized models for your exact use case. Better accuracy, lower latency.",
    icon: "┌─┐\n│◈│\n└─┘",
    href: "https://docs.lunar-sys.com/lunar/overview",
  },
  {
    title: "Private Deployments",
    description: "Run models on your infrastructure. Full data control, no external API calls.",
    icon: "┌─┐\n│⚿│\n└─┘",
    href: "https://docs.lunar-sys.com/pricing/instance-tiers",
  },
];

const devExperience = [
  { title: "SDK", description: "Python & TypeScript", href: "https://docs.lunar-sys.com/lunar/installation" },
  { title: "CLI", description: "Full workflow control", href: "https://docs.lunar-sys.com/lunar/quickstart" },
  { title: "Templates", description: "Quick start examples", href: "https://docs.lunar-sys.com/lunar/overview" },
  { title: "Self-host", description: "Your infrastructure", href: "https://docs.lunar-sys.com/pricing/instance-tiers" },
  { title: "Cloud", description: "Managed option", href: "https://docs.lunar-sys.com/pricing/overview" },
];

const securityFeatures = [
  { title: "Tenant Isolation", checked: true },
  { title: "Bring Your Own Keys", checked: true },
  { title: "Audit Logs", checked: true },
  { title: "VPC Deployment", checked: true },
  { title: "SOC 2 Type II", checked: true },
  { title: "GDPR Compliant", checked: true },
];

const cliCode = `pip install lunar
lunar login --api-key $LUNAR_API_KEY
lunar distill --project support-bot --target small`;

export default function Home() {
  return (
    <div className="bg-grid">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center fade-in">
            <Badge variant="accent" className="mb-6">
              NEW — Distillation pipelines for production traces
            </Badge>
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1]">
              Cut LLM costs by{" "}
              <span className="highlight-box">57%</span>{" "}
              with small models.
            </h1>
            <p className="mt-6 text-lg text-[#888888] max-w-2xl mx-auto">
              Lunar automates curation, distillation, evaluation, and deployment — so you ship faster with predictable latency.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/docs" variant="primary">
                Get started free
              </Button>
              <Button href="/docs" variant="secondary">
                View docs
              </Button>
            </div>
            <p className="mt-6 text-sm text-[#888888]">
              Bring your own provider (OpenAI / Anthropic / Bedrock) or run local.
            </p>
          </div>
        </Container>

        {/* Metrics Bar */}
        <div className="mt-20 border-y border-[#333333] py-8 bg-black/50">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <span className="font-mono text-lg font-bold text-[#f59e0b]">
                    {metric.value}
                  </span>
                  <span className="ml-2 text-xs uppercase tracking-wider text-[#888888]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ASCII Demo Section */}
      <section className="py-24">
        <Container>
          <AsciiWindow title="LUNAR / DISTILLATION RUN" className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AsciiPanel title="TRACES">
                <div className="space-y-1 font-mono text-xs">
                  <div className="log-line">
                    <span className="timestamp">[12:01:03]</span> Loading traces...
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[12:01:04]</span> Found 12,847 samples
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[12:01:05]</span> <span className="success">✓</span> Validated
                  </div>
                </div>
              </AsciiPanel>
              <AsciiPanel title="DISTILL">
                <div className="space-y-1 font-mono text-xs">
                  <div className="log-line">
                    <span className="timestamp">[12:01:06]</span> Curating data...
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[12:01:07]</span> Training epoch 3/5
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[12:01:08]</span> <span className="accent">Loss: 0.0234</span>
                  </div>
                </div>
              </AsciiPanel>
              <AsciiPanel title="EVAL">
                <div className="space-y-1 font-mono text-xs">
                  <div className="log-line">
                    <span className="timestamp">[12:01:09]</span> Running tests...
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[12:01:10]</span> Accuracy: 96.2%
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[12:01:11]</span> <span className="success">✓</span> Passed
                  </div>
                </div>
              </AsciiPanel>
            </div>
            <div className="mt-4">
              <div className="progress-bar">
                <div className="progress-bar-fill" />
              </div>
              <div className="mt-3 font-mono text-xs text-[#888888]">
                <span className="blink-caret">Deploying model to production</span>
              </div>
            </div>
          </AsciiWindow>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 border border-[#333333]">
              <div className="font-mono text-4xl font-bold text-[#f59e0b]">57%</div>
              <div className="mt-2 text-sm text-[#888888]">lower inference cost</div>
            </div>
            <div className="text-center p-6 border border-[#333333]">
              <div className="font-mono text-4xl font-bold">&lt;100ms</div>
              <div className="mt-2 text-sm text-[#888888]">predictable latency</div>
            </div>
            <div className="text-center p-6 border border-[#333333]">
              <div className="font-mono text-4xl font-bold">SLMs</div>
              <div className="mt-2 text-sm text-[#888888]">deployable to your infra</div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Pipeline Section */}
      <section className="py-24">
        <Container>
          <SectionHeading
            title="From traces to production"
            subtitle="Five steps to cut your LLM costs in half."
          />
          <div className="mt-16">
            <Stepper steps={pipelineSteps} />
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Use Cases Section */}
      <section className="py-24">
        <Container>
          <SectionHeading
            title="Use cases"
            subtitle="Build specialized models for your exact needs."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} href={useCase.href} className="text-center hover:border-white/30">
                <pre className="ascii-art mb-4 inline-block">{useCase.icon}</pre>
                <h3 className="font-mono text-lg font-bold uppercase">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm text-[#888888]">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Developer Experience Section */}
      <section className="py-24">
        <Container>
          <SectionHeading
            title="Developer experience"
            subtitle="Everything you need to build, test, and deploy SLMs."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <CodeBlock code={cliCode} language="bash" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {devExperience.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#333333] hover:border-white/30 transition-colors"
                >
                  <div className="font-mono text-sm font-bold">{item.title}</div>
                  <div className="text-xs text-[#888888] mt-1">{item.description}</div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Security Section */}
      <section className="py-24">
        <Container>
          <SectionHeading
            title="Enterprise security"
            subtitle="Built for teams with strict compliance requirements."
          />
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="border border-[#333333] p-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#888888] mb-4">
                Security posture checklist
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3">
                    <span className="checkmark font-mono">✓</span>
                    <span className="text-sm">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button href="/security" variant="secondary">
                Learn about security
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Community Section */}
      <section className="py-24">
        <Container>
          <div className="text-center">
            <SectionHeading
              title="Built with the community"
              subtitle="Join thousands of developers building with Lunar."
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="https://github.com" variant="secondary">
                GitHub
              </Button>
              <Button href="https://discord.gg" variant="secondary">
                Discord
              </Button>
              <Button href="/community" variant="secondary">
                Roadmap
              </Button>
              <Button href="/community" variant="secondary">
                Contribute
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Final CTA Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight">
              Stop overpaying for LLM inference.
            </h2>
            <p className="mt-4 text-[#888888]">
              Start building with Lunar today. Free tier available.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/docs" variant="primary">
                Get started free
              </Button>
              <Button href="#" variant="secondary">
                Book a demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
