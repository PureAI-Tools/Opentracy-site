import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import CodeBlock from "@/components/CodeBlock";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import FadeIn from "@/components/motion/FadeIn";
import TextReveal from "@/components/motion/TextReveal";
import SlideIn from "@/components/motion/SlideIn";
import CountUp from "@/components/motion/CountUp";
import HoverCard from "@/components/motion/HoverCard";
import FloatingOrb from "@/components/motion/FloatingOrb";
import LiveCounter from "@/components/motion/LiveCounter";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerChildren";
import { LogoWallContainer, LogoWallItem } from "@/components/motion/LogoWall";

const sdkCode = `import opentracy as ot

# Call any model — one line
response = ot.completion(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello!"}],
    fallbacks=["anthropic/claude-3-haiku"]
)

print(response.choices[0].message.content)
print(f"Cost: \${response._cost:.6f}")`;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const features = [
    {
      key: "oneApi" as const,
      tracy: "/lunar-site/tracy/tracy-default.png",
      color: "blue" as const,
      size: 96,
    },
    {
      key: "realTimeTraces" as const,
      tracy: "/lunar-site/tracy/tracy-alert.png",
      color: "orange" as const,
      size: 96,
    },
    {
      key: "costTracking" as const,
      tracy: "/lunar-site/tracy/tracy-cost.png",
      color: "blue" as const,
      size: 96,
    },
    {
      key: "smartRouting" as const,
      tracy: "/lunar-site/tracy/tracy-routing.png",
      color: "orange" as const,
      size: 96,
    },
    {
      key: "qualityMonitoring" as const,
      tracy: "/lunar-site/tracy/tracy-security.png",
      color: "blue" as const,
      size: 72,
    },
    {
      key: "modelDistillation" as const,
      tracy: "/lunar-site/tracy/tracy-zen.png",
      color: "orange" as const,
      size: 96,
    },
  ];

  const sdkFeatures = [
    { key: "openaiCompatible" as const, color: "#22c55e" },
    { key: "automaticFallbacks" as const, color: "#16a34a" },
    { key: "costOnResponse" as const, color: "#2563eb" },
    { key: "fullStreaming" as const, color: "#22c55e" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-28 relative overflow-hidden">
        <div className="hero-mesh" />
        <FloatingOrb />
        <Container>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeIn delay={0} y={16}>
              <a href="https://github.com/lunar-org-ai/lunar-router" className="badge badge-new inline-flex items-center gap-2 mb-6 hover:border-[var(--color-muted)] transition-colors">
                <span className="badge-new-dot" />
                <span>{dict.hero.badge}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </FadeIn>
            <FadeIn delay={0.1} y={12}>
              <img
                src="/lunar-site/tracy/tracy-default.png"
                alt="Tracy — OpenTracy mascot"
                width={200}
                height={200}
                className="mx-auto mb-6 drop-shadow-lg"
              />
            </FadeIn>
            <TextReveal delay={0.15}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                {dict.hero.title}{" "}
                <LiveCounter
                  target={62}
                  suffix="%"
                  duration={2.5}
                  incrementInterval={4000}
                  incrementAmount={0.1}
                  className="gradient-text"
                />
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="mt-6 text-lg text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed">
                {dict.hero.subtitle}
              </p>
            </TextReveal>
            <FadeIn delay={0.45} y={12}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="https://app.opentracy.com" variant="primary">
                  {dict.hero.ctaPrimary}
                </Button>
                <Button href={`/${locale}/docs`} variant="secondary">
                  {dict.hero.ctaSecondary}
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.55} y={8}>
              <p className="mt-4 text-xs text-[var(--color-muted)]">{dict.hero.footnote}</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Dashboard Screenshot */}
      <section className="pb-20">
        <Container>
          <FadeIn y={40} duration={0.8}>
            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)]">
              <img
                src="/lunar-site/dashboard-screenshot.png"
                alt="OpenTracy Intelligence & Observability Dashboard — showing requests routed, cost savings, model distribution, and baseline comparison"
                width={1468}
                height={802}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Provider Logo Wall */}
      <section className="py-16 border-y border-[var(--color-border)]">
        <Container>
          <FadeIn>
            <p className="text-center text-xs uppercase tracking-widest text-[var(--color-muted)] mb-10">
              {dict.providers.heading}
            </p>
          </FadeIn>
          <LogoWallContainer className="logo-wall">
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4066-.6638zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
              <span>OpenAI</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/></svg>
              <span>Anthropic</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              <span>Google</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.428 0h3.428v3.428H3.428zm13.716 0h3.428v3.428h-3.428zM0 3.428h3.428v3.429H0zm3.428 0h3.428v3.429H3.428zm6.857 0h3.429v3.429h-3.429zm3.429 0h3.428v3.429h-3.428zm3.428 0h3.429v3.429h-3.429zm3.429 0H24v3.429h-3.429zM3.428 6.857h3.428v3.429H3.428zm6.857 0h3.429v3.429h-3.429zm6.857 0h3.429v3.429h-3.429zM3.428 10.286h3.428v3.428H3.428zm3.428 0h3.429v3.428H6.856zm3.429 0h3.429v3.428h-3.429zm3.429 0h3.428v3.428h-3.428zm3.428 0h3.429v3.428h-3.429zM3.428 13.714h3.428v3.429H3.428zm6.857 0h3.429v3.429h-3.429zm6.857 0h3.429v3.429h-3.429zM0 17.143h3.428v3.429H0zm3.428 0h3.428v3.429H3.428zm6.857 0h3.429v3.429h-3.429zm3.429 0h3.428v3.429h-3.428zm3.428 0h3.429v3.429h-3.429zm3.429 0H24v3.429h-3.429zM3.428 20.572h3.428V24H3.428zm13.716 0h3.428V24h-3.428z"/></svg>
              <span>Mistral</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM10.5 6H6v12h4.5v-4.5H15V9h-4.5V6zm0 4.5H15v-4.5h4.5V18H15v-4.5h-4.5V18H6V6h4.5v4.5z"/></svg>
              <span>Groq</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.374 6.18 6.18 0 0 1-.248-.47c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103a6.395 6.395 0 0 0-.862.279 2.293 2.293 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167 4.515 4.515 0 0 1 1.06-.383 5.01 5.01 0 0 1 1.316-.168c1.005 0 1.739.228 2.21.695.464.466.7 1.165.7 2.093v2.758zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.216-.151-.248-.223a.504.504 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.399l-1.158-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.216.184-.423.088-.327-.151.319-.79 1.03-2.57.695-2.994z"/></svg>
              <span>Bedrock</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z"/></svg>
              <span>Azure</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.533 9.953c2.933 0 5.378-.73 7.247-1.904 1.474-.925 3.22-2.716 3.22-5.072C20 1.384 18.643 0 16.946 0H7.126C3.2 0 0 3.2 0 7.126c0 1.563 1.267 2.827 2.828 2.827zm5.253 2.74H4.35c-1.087 0-2.158.293-3.098.85A5.93 5.93 0 0 0 0 14.36v.04A9.6 9.6 0 0 0 9.6 24c2.56 0 5.173-.928 7.138-2.676A5.28 5.28 0 0 0 18.5 17.42v-.003c0-2.609-2.063-4.723-3.714-4.723z"/></svg>
              <span>Cohere</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.248 4.307c.398-.008.747.07.982.283.653.588.14 1.907-.211 2.474-.105.17-.263.355-.442.518a6.74 6.74 0 0 0-.596-.395c-.263-.153-.488-.262-.718-.359.142-.227.28-.473.375-.685.244-.546.23-.92.127-1.054-.054-.07-.158-.113-.338-.081-.533.092-1.37.724-2.063 1.529a8.9 8.9 0 0 0-.517-.088 8.21 8.21 0 0 0-.694-.07c.894-1.147 2.01-2.036 3.105-2.06.327-.007.66-.004.99-.012zM8.89 6.855c1.26-.043 2.244.488 2.86 1.08.039.037.07.073.105.11a2.023 2.023 0 0 0-.299.098c-.245.105-.516.256-.788.435a2.81 2.81 0 0 0-.67-.57c-.579-.376-1.293-.52-2.116-.224a.078.078 0 0 1-.098-.039.077.077 0 0 1 .035-.101c.573-.344 1.28-.6 1.85-.725a4.22 4.22 0 0 1-.879-.064zm3.914 1.422c.092-.006.159.029.159.029s-.063.047-.141.113c-.37.3-.714.67-1.007 1.082-.66.93-1.056 2.046-1.139 3.126-.05.658.017 1.238.195 1.702.068.178.155.346.265.504-.68-.557-1.137-1.328-1.336-2.148-.248-1.024-.119-2.143.53-2.99.44-.577 1.106-1.052 1.765-1.303.224-.085.479-.1.709-.115zm3.498.97c.615.24 1.253.623 1.694 1.215.633.846.803 1.964.585 3.005-.168.798-.59 1.566-1.224 2.152.098-.152.174-.312.234-.482.154-.44.204-.99.147-1.62-.094-1.037-.494-2.108-1.138-3.01a6.555 6.555 0 0 0-.781-.87 3.547 3.547 0 0 1-.133-.112c.18-.09.384-.17.616-.278zm-5.024.36a7.29 7.29 0 0 1 .58.024 7.016 7.016 0 0 1 .367.054c-.45.553-.805 1.16-1.082 1.797-.39.904-.607 1.89-.613 2.853-.004.697.106 1.37.36 1.987a4.3 4.3 0 0 0 .547.927c-.934-.455-1.697-1.218-2.155-2.166-.506-1.044-.575-2.339-.033-3.42.36-.72.977-1.295 1.634-1.732.13-.09.262-.16.395-.323zm5.908.75c.024 0 .095.075.095.075-.043.07-.113.145-.168.208-.375.422-.765.831-1.174 1.207a9.743 9.743 0 0 1-1.38 1.06 5.16 5.16 0 0 1-.863.437c-.011-.158-.04-.316-.078-.476-.03-.117-.067-.233-.113-.348a4.31 4.31 0 0 1 .612-.416 8.01 8.01 0 0 1 1.168-.563c.414-.16.853-.295 1.289-.402.363-.093.612-.782.612-.782zm-3.88 2.625c.054.002.107.01.16.027.173.055.293.204.349.393.067.228.05.516-.07.772-.213.455-.708.765-1.187.667-.372-.075-.526-.413-.464-.777.077-.45.469-.894.937-1.048a.742.742 0 0 1 .275-.034zm4.614 1.77a2.3 2.3 0 0 1-.084.26c-.157.399-.41.76-.752 1.016-.414.311-.945.44-1.472.363-.319-.047-.625-.155-.914-.31.21-.016.413-.048.613-.1.316-.083.623-.211.914-.382.421-.25.777-.588 1.082-.964-.092.133.24-.206.24-.206l.291-.265c.033-.028.066-.11.066-.11s.031.477.016.698z"/></svg>
              <span>DeepSeek</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>
              <span>Together</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>
              <span>Fireworks</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.6 4.8c.9-.3 1.8-.3 2.7.1 1.2.5 2 1.5 2.3 2.7.2.8.2 1.6 0 2.3-.3 1-.8 1.8-1.6 2.4-.5.4-1.1.7-1.7.8-1.1.2-2.1-.1-2.9-.8-.8-.7-1.3-1.7-1.5-2.8-.1-.6 0-1.3.2-1.9.4-1.2 1.3-2.2 2.5-2.8zm-3.3 8.1c.6-.2 1.3-.2 1.9 0 .7.2 1.2.6 1.6 1.2.5.7.7 1.5.5 2.4-.2 1.1-.8 2-1.7 2.6-.6.4-1.3.6-2 .5-.9-.1-1.6-.5-2.1-1.2-.5-.7-.7-1.5-.6-2.4.2-1.3.9-2.3 2.4-3.1zm7.8 0c1.5.8 2.2 1.8 2.4 3.1.1.9-.1 1.7-.6 2.4-.5.7-1.2 1.1-2.1 1.2-.7.1-1.4-.1-2-.5-.9-.6-1.5-1.5-1.7-2.6-.2-.9 0-1.7.5-2.4.4-.6.9-1 1.6-1.2.6-.2 1.3-.2 1.9 0z"/></svg>
              <span>Ollama</span>
            </LogoWallItem>
            <LogoWallItem className="logo-wall-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
              <span>Gemini</span>
            </LogoWallItem>
          </LogoWallContainer>
        </Container>
      </section>

      <div className="section-divider" />

      {/* How it works */}
      <section className="py-24 section-glow-blue">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.howItWorks.title}
              subtitle={dict.howItWorks.subtitle}
            />
          </FadeIn>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <SlideIn direction="left" delay={0.1}>
              <div className="flow-node">
                <div className="text-sm font-semibold">{dict.howItWorks.yourApp}</div>
                <div className="text-xs text-[var(--color-muted)] mt-1">{dict.howItWorks.yourAppSub}</div>
              </div>
            </SlideIn>
            <FadeIn delay={0.2}>
              <div className="flow-arrow hidden md:block">&rarr;</div>
              <div className="flow-arrow md:hidden">&darr;</div>
            </FadeIn>
            <SlideIn direction="up" delay={0.3}>
              <div className="flow-node flow-node-accent">
                <img src="/lunar-site/tracy/tracy-routing.png" alt="Tracy routing" width={64} height={64} className="mx-auto mb-1" />
                <div className="text-sm font-semibold" style={{ color: "#22c55e" }}>{dict.howItWorks.opentracy}</div>
                <div className="text-xs text-[var(--color-muted)] mt-1">{dict.howItWorks.opentracySub}</div>
              </div>
            </SlideIn>
            <FadeIn delay={0.4}>
              <div className="flow-arrow hidden md:block">&rarr;</div>
              <div className="flow-arrow md:hidden">&darr;</div>
            </FadeIn>
            <SlideIn direction="right" delay={0.5}>
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
                  <div className="text-xs text-[var(--color-muted)]">{dict.providers.plusMore}</div>
                </div>
              </div>
            </SlideIn>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Metrics */}
      <section className="py-24">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <StaggerItem>
              <HoverCard className="metric-card">
                <CountUp value={dict.metrics.providers} className="metric-value metric-value-blue" />
                <div className="text-sm text-[var(--color-muted)] mt-2">{dict.metrics.providersLabel}</div>
              </HoverCard>
            </StaggerItem>
            <StaggerItem>
              <HoverCard className="metric-card">
                <CountUp value={dict.metrics.models} className="metric-value metric-value-orange" />
                <div className="text-sm text-[var(--color-muted)] mt-2">{dict.metrics.modelsLabel}</div>
              </HoverCard>
            </StaggerItem>
            <StaggerItem>
              <HoverCard className="metric-card">
                <CountUp value={dict.metrics.overhead} className="metric-value metric-value-blue" />
                <div className="text-sm text-[var(--color-muted)] mt-2">{dict.metrics.overheadLabel}</div>
              </HoverCard>
            </StaggerItem>
            <StaggerItem>
              <HoverCard className="metric-card">
                <CountUp value={dict.metrics.license} className="metric-value metric-value-orange" />
                <div className="text-sm text-[var(--color-muted)] mt-2">{dict.metrics.licenseLabel}</div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Features */}
      <section id="features" className="py-24 section-glow-orange">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.features.title}
              subtitle={dict.features.subtitle}
            />
          </FadeIn>
          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <StaggerItem key={feature.key}>
                <HoverCard>
                  <Card className="p-6 card-hover-glow">
                    <div className="mb-4 flex items-center gap-3">
                      <img
                        src={feature.tracy}
                        alt={dict.features[feature.key].title}
                        width={feature.size}
                        height={feature.size}
                        className="object-contain"
                      />
                      <h3 className="text-base font-semibold tracking-tight">
                        {dict.features[feature.key].title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {dict.features[feature.key].description}
                    </p>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="section-divider" />

      {/* SDK */}
      <section className="py-24 section-glow-blue">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.sdk.title}
              subtitle={dict.sdk.subtitle}
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <SlideIn direction="left" delay={0.1}>
              <CodeBlock code={sdkCode} language="python" />
            </SlideIn>
            <StaggerContainer className="space-y-4">
              {sdkFeatures.map((sf) => (
                <StaggerItem key={sf.key}>
                  <HoverCard>
                    <div className="sdk-feature-card">
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ background: sf.color }} />
                        <h3 className="font-semibold text-sm">{dict.sdk[sf.key].title}</h3>
                      </div>
                      <p className="text-sm text-[var(--color-muted)] pl-5">{dict.sdk[sf.key].description}</p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Pricing */}
      <section className="py-24 section-glow-orange">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.pricing.title}
              subtitle={dict.pricing.subtitle}
            />
          </FadeIn>
          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free */}
            <StaggerItem>
              <HoverCard>
                <div className="card p-8">
                  <h3 className="text-lg font-bold">{dict.pricing.plans.free.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">{dict.pricing.plans.free.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {dict.pricing.plans.free.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="checkmark mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="https://app.opentracy.com" variant="secondary" className="w-full justify-center">
                      {dict.pricing.plans.free.cta}
                    </Button>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
            {/* Starter */}
            <StaggerItem>
              <HoverCard>
                <div className="card p-8 border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/10">
                  <Badge variant="accent" className="mb-4">{dict.pricing.bestValue}</Badge>
                  <h3 className="text-lg font-bold">{dict.pricing.plans.starter.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$10</span>
                    <span className="text-[var(--color-muted)]">/mo</span>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">{dict.pricing.plans.starter.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {dict.pricing.plans.starter.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="checkmark mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="https://app.opentracy.com" variant="primary" className="w-full justify-center">
                      {dict.pricing.plans.starter.cta}
                    </Button>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
            {/* Enterprise */}
            <StaggerItem>
              <HoverCard>
                <div className="card p-8">
                  <h3 className="text-lg font-bold">{dict.pricing.plans.enterprise.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">{dict.pricing.plans.enterprise.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {dict.pricing.plans.enterprise.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="checkmark mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="https://cal.com/opentracy/enterprise" variant="secondary" className="w-full justify-center">
                      {dict.pricing.plans.enterprise.cta}
                    </Button>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.testimonials.title}
              subtitle={dict.testimonials.subtitle}
            />
          </FadeIn>
          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {dict.testimonials.items.map((item) => (
              <StaggerItem key={item.name}>
                <HoverCard>
                  <div className="testimonial-card">
                    <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="testimonial-avatar">
                        {item.name.charAt(0)}
                      </div>
                      <div className="testimonial-author">
                        <div className="font-semibold text-sm">{item.name}</div>
                        <div className="text-xs text-[var(--color-muted)]">{item.role}, {item.company}</div>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Community */}
      <section className="py-24 section-glow-blue">
        <Container>
          <FadeIn>
            <SectionHeading
              title={dict.community.title}
              subtitle={dict.community.subtitle}
            />
          </FadeIn>
          <div className="mt-12 max-w-3xl mx-auto">
            <StaggerContainer className="grid grid-cols-3 gap-6 mb-10">
              <StaggerItem>
                <div className="community-card text-center">
                  <div className="community-stat-value">1.2k</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">{dict.community.stats.githubStars}</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="community-card text-center">
                  <div className="community-stat-value">48</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">{dict.community.stats.contributors}</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="community-card text-center">
                  <div className="community-stat-value">850+</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">{dict.community.stats.discordMembers}</div>
                </div>
              </StaggerItem>
            </StaggerContainer>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="https://discord.gg/gDNPhQ347V" variant="primary">
                  {dict.community.discordCta}
                </Button>
                <Button href="https://github.com/lunar-org-ai/lunar-router" variant="secondary">
                  {dict.community.githubCta}
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* Final CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="cta-mesh" />
        <Container>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <FadeIn y={12}>
              <img
                src="/lunar-site/tracy/tracy-zen.png"
                alt="Tracy zen"
                width={120}
                height={120}
                className="mx-auto mb-6"
              />
            </FadeIn>
            <TextReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {dict.cta.title}{" "}
                <span className="gradient-text">{dict.cta.titleHighlight}</span>
              </h2>
            </TextReveal>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                {dict.cta.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.3} y={12}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="https://app.opentracy.com" variant="primary">
                  {dict.cta.ctaPrimary}
                </Button>
                <Button href="https://github.com/lunar-org-ai/lunar-router" variant="secondary">
                  {dict.cta.ctaSecondary}
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} y={8}>
              <p className="mt-6 text-sm text-[var(--color-muted)]">
                {dict.cta.footnote}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
