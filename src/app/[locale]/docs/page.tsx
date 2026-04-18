import Container from "@/components/Container";
import CodeBlock from "@/components/CodeBlock";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
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
    title: `${dict.docs.title} — OpenTracy`,
    description: dict.docs.subtitle,
  };
}

const quickstartCode = `# Install
pip install opentracy

# Set your API keys
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-ant-...

# Or self-host the full stack
git clone https://github.com/PureAI-Tools/opentracy.git
cd opentracy
docker compose up -d`;

const usageCode = `import opentracy as ot

# Call any model through OpenTracy
response = ot.completion(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}],
    fallbacks=["anthropic/claude-3-haiku"]
)

# Response includes cost tracking
print(response.choices[0].message.content)
print(f"Cost: \${response._cost:.6f}")
print(f"Latency: {response._latency_ms}ms")`;

const categoryKeys = [
  { key: "gettingStarted" as const, href: "https://docs.opentracy.com/installation" },
  { key: "modelsProviders" as const, href: "https://docs.opentracy.com/guides/models-providers" },
  { key: "routingStrategies" as const, href: "https://docs.opentracy.com/guides/streaming" },
  { key: "observability" as const, href: "https://docs.opentracy.com/overview" },
  { key: "evaluations" as const, href: "https://docs.opentracy.com/overview" },
  { key: "selfHosting" as const, href: "https://docs.opentracy.com/pricing/instance-tiers" },
];

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {dict.docs.title}
          </h1>
          <p className="mt-4 text-[#666666] text-lg">
            {dict.docs.subtitle}
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">{dict.docs.quickstart}</h2>
          <div className="space-y-6">
            <CodeBlock code={quickstartCode} language="bash" />
            <CodeBlock code={usageCode} language="python" />
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            title={dict.docs.exploreTitle}
            align="left"
            className="max-w-3xl mx-auto"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {categoryKeys.map((cat) => (
              <Card key={cat.key} href={cat.href} className="p-5 hover:border-[#bbb]">
                <h3 className="text-sm font-semibold">{dict.docs.categories[cat.key].title}</h3>
                <p className="mt-2 text-xs text-[#666666] leading-relaxed">{dict.docs.categories[cat.key].description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
