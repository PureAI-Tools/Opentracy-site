import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "OpenTracy — One API for Every LLM",
  description:
    "Route requests to 13+ LLM providers through a single API. Track costs, measure quality, and find the best model for every prompt. Open source.",
  alternates: {
    canonical: "/",
  },
};

const features = [
  {
    title: "One API, Every Model",
    description: "Send requests to OpenAI, Anthropic, Google, Mistral, and 9 more through a single endpoint.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    color: "blue" as const,
  },
  {
    title: "Real-Time Traces",
    description: "Every request logged with full input, output, cost, and latency. Query millions of traces instantly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    color: "orange" as const,
  },
  {
    title: "Cost Tracking",
    description: "Automatic per-token pricing for 70+ models. See exactly where your money goes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    color: "blue" as const,
  },
  {
    title: "Smart Routing",
    description: "Route simple prompts to cheap models, complex ones to powerful ones. Automatic fallbacks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>
      </svg>
    ),
    color: "orange" as const,
  },
  {
    title: "Quality Monitoring",
    description: "AI agents scan traces for hallucinations and quality drops. Get alerts before users notice.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "blue" as const,
  },
  {
    title: "Model Distillation",
    description: "Train smaller, faster, cheaper models from your production data. Own your models.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l-8 4.5v9L12 21l8-4.5v-9L12 3z"/><path d="M12 12l8-4.5"/><path d="M12 12v9"/><path d="M12 12L4 7.5"/>
      </svg>
    ),
    color: "orange" as const,
  },
];

const sdkCode = `import opentracy as ot

# Call any model — one line
response = ot.completion(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}],
    fallbacks=["anthropic/claude-3-haiku"]
)

print(response.choices[0].message.content)
print(f"Cost: \${response._cost:.6f}")`;

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-28 relative overflow-hidden">
        <div className="hero-glow" />
        <div className="hero-orb" />
        <Container>
          <div className="max-w-3xl mx-auto text-center fade-in relative z-10">
            <a href="https://github.com/PureAI-Tools/opentracy" className="badge badge-new inline-flex items-center gap-2 mb-6 hover:border-[#444] transition-colors">
              <span className="badge-new-dot" />
              <span>SDK v2 is out — fallbacks, streaming, and cost tracking</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              One API for{" "}
              <span className="gradient-text">every LLM.</span>
            </h1>
            <p className="mt-6 text-lg text-[#999] max-w-xl mx-auto leading-relaxed">
              Route to 13+ providers, track costs, measure quality, and optimize your AI stack. All through a single endpoint.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="https://app.opentracy.com" variant="primary">
                Start for free
              </Button>
              <Button href="/lunar-site/docs" variant="secondary">
                Read the docs
              </Button>
            </div>
            <p className="mt-4 text-xs text-[#555]">Open source. MIT Licensed. No credit card required.</p>
          </div>
        </Container>
      </section>

      {/* Dashboard Mockup */}
      <section className="pb-20">
        <Container>
          <div className="dashboard-mock max-w-4xl mx-auto fade-in">
            <div className="dashboard-titlebar">
              <div className="titlebar-dot" style={{ background: "#ff5f57" }} />
              <div className="titlebar-dot" style={{ background: "#febc2e" }} />
              <div className="titlebar-dot" style={{ background: "#28c840" }} />
              <span className="text-xs text-[#555] ml-2 font-mono">OpenTracy — Dashboard</span>
            </div>
            <div className="dashboard-body">
              <div className="dashboard-stat-row">
                <div className="dashboard-stat">
                  <div className="text-xs text-[#666] mb-1">Requests Today</div>
                  <div className="text-xl font-bold">12,847</div>
                  <div className="dashboard-bar"><div className="dashboard-bar-fill-blue" style={{ width: "78%" }} /></div>
                </div>
                <div className="dashboard-stat">
                  <div className="text-xs text-[#666] mb-1">Total Cost</div>
                  <div className="text-xl font-bold" style={{ color: "#f97316" }}>$4.23</div>
                  <div className="dashboard-bar"><div className="dashboard-bar-fill-orange" style={{ width: "35%" }} /></div>
                </div>
                <div className="dashboard-stat">
                  <div className="text-xs text-[#666] mb-1">Avg Quality</div>
                  <div className="text-xl font-bold" style={{ color: "#22c55e" }}>9.4/10</div>
                  <div className="dashboard-bar"><div className="dashboard-bar-fill-green" style={{ width: "94%" }} /></div>
                </div>
              </div>
              <div className="text-xs text-[#555] font-mono mb-2">Recent Traces</div>
              <div>
                <div className="dashboard-trace-row">
                  <div className="trace-status trace-status-ok" />
                  <span className="text-[#555]">12:01:04</span>
                  <span>gpt-4o-mini</span>
                  <span className="ml-auto text-[#555]">234ms</span>
                  <span style={{ color: "#f97316" }}>$0.0003</span>
                </div>
                <div className="dashboard-trace-row">
                  <div className="trace-status trace-status-ok" />
                  <span className="text-[#555]">12:01:02</span>
                  <span>claude-3-haiku</span>
                  <span className="ml-auto text-[#555]">312ms</span>
                  <span style={{ color: "#f97316" }}>$0.0005</span>
                </div>
                <div className="dashboard-trace-row">
                  <div className="trace-status trace-status-warn" />
                  <span className="text-[#555]">12:01:00</span>
                  <span>gemini-1.5-flash</span>
                  <span className="ml-auto text-[#555]">189ms</span>
                  <span style={{ color: "#f97316" }}>$0.0002</span>
                </div>
                <div className="dashboard-trace-row">
                  <div className="trace-status trace-status-ok" />
                  <span className="text-[#555]">12:00:58</span>
                  <span>gpt-4o</span>
                  <span className="ml-auto text-[#555]">1.2s</span>
                  <span style={{ color: "#f97316" }}>$0.0089</span>
                </div>
                <div className="dashboard-trace-row" style={{ borderBottom: "none" }}>
                  <div className="trace-status trace-status-ok" />
                  <span className="text-[#555]">12:00:55</span>
                  <span>mistral-small</span>
                  <span className="ml-auto text-[#555]">156ms</span>
                  <span style={{ color: "#f97316" }}>$0.0001</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Provider Logo Wall */}
      <section className="py-16 border-y border-[#1a1a1a]">
        <Container>
          <p className="text-center text-xs uppercase tracking-widest text-[#555] mb-10">
            Works with every major provider
          </p>
          <div className="logo-wall">
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.048 6.048 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.602 1.5v3.001l-2.6 1.5-2.6-1.5z"/></svg>
              <span>OpenAI</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.304 4.044c-1.47-.376-2.57.156-3.258.94-.689.782-1.012 1.855-1.074 2.774h-.002c-.1-1.55-.744-3.048-2.298-3.594-1.47-.517-2.885.05-3.657.993-.77.943-1.038 2.216-.914 3.385.256 2.403 1.735 4.735 3.907 7.022 1.163 1.222 2.425 2.32 3.627 3.194l.369.262.368-.263c1.195-.872 2.452-1.965 3.614-3.186 2.175-2.285 3.662-4.612 3.927-7.011.13-1.172-.141-2.446-.908-3.395-.77-.952-2.17-1.497-3.7-1.121z"/></svg>
              <span>Anthropic</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.5L7.2 12l1.4-1.4 2.2 2.2 4.6-4.6 1.4 1.4-6 6z"/></svg>
              <span>Google</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3l7.5 18L13 14l7-2.5L3 3z"/></svg>
              <span>Mistral</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              <span>Groq</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM9 17l-4-4 1.41-1.41L9 14.17l6.59-6.59L17 9l-8 8z"/></svg>
              <span>Bedrock</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 13.54l4.26 7.38a.5.5 0 0 0 .86 0l8.52-14.76a.5.5 0 0 0-.43-.75H7.87L3.18 13.54z"/></svg>
              <span>Azure</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>
              <span>Cohere</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-3 12v-1c0-2 4-3.1 6-3.1V17H9z"/></svg>
              <span>DeepSeek</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              <span>Together</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>
              <span>Fireworks</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
              <span>Ollama</span>
            </div>
            <div className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span>OpenRouter</span>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* How it works */}
      <section className="py-24 section-glow-blue">
        <Container>
          <SectionHeading
            title="How it works"
            subtitle="Your app talks to OpenTracy. OpenTracy talks to every LLM provider."
          />
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <div className="flow-node">
              <div className="text-sm font-semibold">Your App</div>
              <div className="text-xs text-[#666] mt-1">Single API call</div>
            </div>
            <div className="flow-arrow hidden md:block">→</div>
            <div className="flow-arrow md:hidden">↓</div>
            <div className="flow-node flow-node-accent">
              <div className="text-sm font-semibold" style={{ color: "#0070f3" }}>OpenTracy</div>
              <div className="text-xs text-[#666] mt-1">Route + Trace + Eval</div>
            </div>
            <div className="flow-arrow hidden md:block">→</div>
            <div className="flow-arrow md:hidden">↓</div>
            <div className="flex flex-col gap-2">
              <div className="flow-node py-2 px-4">
                <div className="text-xs">OpenAI</div>
              </div>
              <div className="flow-node py-2 px-4">
                <div className="text-xs">Anthropic</div>
              </div>
              <div className="flow-node py-2 px-4">
                <div className="text-xs">Google</div>
              </div>
              <div className="flow-node py-2 px-4">
                <div className="text-xs text-[#666]">+10 more</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Metrics */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto stagger">
            <div className="metric-card">
              <div className="metric-value metric-value-blue">13+</div>
              <div className="text-sm text-[#666] mt-2">LLM Providers</div>
            </div>
            <div className="metric-card">
              <div className="metric-value metric-value-orange">70+</div>
              <div className="text-sm text-[#666] mt-2">Models</div>
            </div>
            <div className="metric-card">
              <div className="metric-value metric-value-blue">&lt;2ms</div>
              <div className="text-sm text-[#666] mt-2">Routing Overhead</div>
            </div>
            <div className="metric-card">
              <div className="metric-value metric-value-orange">MIT</div>
              <div className="text-sm text-[#666] mt-2">Open Source</div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Features */}
      <section id="features" className="py-24 section-glow-orange">
        <Container>
          <SectionHeading
            title="Everything you need to manage LLMs"
            subtitle="From routing to evaluation to distillation. One platform."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 card-hover-glow">
                <div className={`feature-icon feature-icon-${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#888] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* SDK */}
      <section className="py-24 section-glow-blue">
        <Container>
          <SectionHeading
            title="Simple by design"
            subtitle="If you've used the OpenAI SDK, you already know OpenTracy."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <CodeBlock code={sdkCode} language="python" />
            <div className="space-y-4">
              <div className="sdk-feature-card">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#0070f3]" />
                  <h3 className="font-semibold text-sm">OpenAI-compatible</h3>
                </div>
                <p className="text-sm text-[#888] pl-5">Same format you already use. Change one line to start.</p>
              </div>
              <div className="sdk-feature-card">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#f97316]" />
                  <h3 className="font-semibold text-sm">Automatic fallbacks</h3>
                </div>
                <p className="text-sm text-[#888] pl-5">If a provider goes down, OpenTracy switches to your backup.</p>
              </div>
              <div className="sdk-feature-card">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#0070f3]" />
                  <h3 className="font-semibold text-sm">Cost on every response</h3>
                </div>
                <p className="text-sm text-[#888] pl-5">Every response includes exact cost. No more guessing.</p>
              </div>
              <div className="sdk-feature-card">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#f97316]" />
                  <h3 className="font-semibold text-sm">Full streaming</h3>
                </div>
                <p className="text-sm text-[#888] pl-5">All providers including Anthropic SSE translation.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Final CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="cta-glow" />
        <Container>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Open source.{" "}
              <span className="gradient-text">Self-host or cloud.</span>
            </h2>
            <p className="mt-4 text-[#888] leading-relaxed">
              Run on your own infrastructure with full control, or use our managed cloud. MIT licensed, no vendor lock-in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="https://app.opentracy.com" variant="primary">
                Start for free
              </Button>
              <Button href="https://github.com/PureAI-Tools/opentracy" variant="secondary">
                View on GitHub
              </Button>
            </div>
            <p className="mt-6 text-sm text-[#555]">
              Free tier available. No credit card required.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
